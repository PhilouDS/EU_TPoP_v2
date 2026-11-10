import { t } from "../../core/i18n.js";
import { formatIcons } from "../../core/icons.js";
import { DICE, rollDie } from "../../core/dice.js";

import {
  TARGETING_REALMS
} from "./data/realms.js";

const TARGETING_CHART_TITLE_KEYS = {
  military: "botRealmTargeting.militaryChart",
  diplomatic: "botRealmTargeting.diplomaticChart"
};

let selectedRealmId = null;

export function getSelectedTargetingRealmId() {
  return selectedRealmId;
}

export function setSelectedTargetingRealmId(realmId) {
  if (
    realmId
    && TARGETING_REALMS[realmId]
  ) {
    selectedRealmId = realmId;
    return;
  }

  selectedRealmId = null;
}

export function renderBotRealmTargetingMenu({
  page,
  onMainMenu,
  onMilitaryChart,
  onDiplomaticChart
}) {
  if (
    selectedRealmId
    && !TARGETING_REALMS[selectedRealmId]
  ) {
    selectedRealmId = null;
  }

  const realmOptions =
    Object.entries(TARGETING_REALMS)
      .map(([realmId, realm]) => `
        <option value="${realmId}">
          ${t(realm.labelKey)}
        </option>
      `)
      .join("");

  page.innerHTML = `
    <section class="screen">
      <div class="home-menu">
        <h1 class="app-title">
          ${t("home.botRealmTargetingCharts")}
        </h1>

        <label
          class="targeting-realm-label"
          for="targeting-realm-select"
        >
          ${t("botRealmTargeting.selectRealm")}
        </label>

        <select
          id="targeting-realm-select"
          class="targeting-realm-select"
        >
          <option value="">
            ${t("botRealmTargeting.selectRealmPlaceholder")}
          </option>

          ${realmOptions}
        </select>

        <button
          id="military-targeting-button"
          class="menu-button"
          type="button"
          disabled
        >
          ${t("botRealmTargeting.militaryChart")}
        </button>

        <button
          id="diplomatic-targeting-button"
          class="menu-button"
          type="button"
          disabled
        >
          ${t("botRealmTargeting.diplomaticChart")}
        </button>

        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>
      </div>
    </section>
  `;

  const realmSelect =
    document.querySelector("#targeting-realm-select");

  const militaryButton =
    document.querySelector("#military-targeting-button");

  const diplomaticButton =
    document.querySelector("#diplomatic-targeting-button");

  function updateChartButtons() {
    const realm =
      selectedRealmId
        ? TARGETING_REALMS[selectedRealmId]
        : null;

    militaryButton.disabled =
      !realm?.targeting?.military;

    diplomaticButton.disabled =
      !realm?.targeting?.diplomatic;
  }

  realmSelect.value =
    selectedRealmId ?? "";

  realmSelect.addEventListener("change", () => {
    selectedRealmId =
      realmSelect.value || null;

    updateChartButtons();
  });

  militaryButton.addEventListener("click", () => {
    if (!selectedRealmId) {
      return;
    }

    const realm =
      TARGETING_REALMS[selectedRealmId];

    if (!realm?.targeting?.military) {
      return;
    }

    onMilitaryChart?.(selectedRealmId);
  });

  diplomaticButton.addEventListener("click", () => {
    if (!selectedRealmId) {
      return;
    }

    const realm =
      TARGETING_REALMS[selectedRealmId];

    if (!realm?.targeting?.diplomatic) {
      return;
    }

    onDiplomaticChart?.(selectedRealmId);
  });

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  updateChartButtons();
}

export function renderTargetingChart({
  page,
  realmId,
  chartType,
  onBack,
  onConfirm = null,
  allowReroll = false,
  backLabelKey = "botRealmTargeting.backToCharts"
}) {
  const realm =
    TARGETING_REALMS[realmId];

  if (!realm) {
    console.warn(
      `Unknown targeting Realm: ${realmId}`
    );
    return;
  }

  const chart =
    realm.targeting?.[chartType];

  if (!chart) {
    console.warn(
      `No ${chartType} Targeting Chart for Realm: ${realmId}`
    );
    return;
  }

  const titleKey =
    TARGETING_CHART_TITLE_KEYS[chartType];

  if (!titleKey) {
    console.warn(
      `Unknown targeting chart type: ${chartType}`
    );
    return;
  }

  const nodes =
    chart.nodes;

  const hasEasternEuropeTargets =
    Object.values(nodes).some(
      node =>
        node.target?.requiresEasternEuropeMap
    );

  const isCallMode =
    typeof onConfirm === "function";

  let history = [];

  function createInitialState() {
    return {
      invalidTargets: [],
      frames: [],
      currentCandidates: [],
      rolls: [],
      fallbacks: [],
      selectedTarget: null,
      exhausted: false
    };
  }

  let state =
    createInitialState();

  function cloneState() {
    return JSON.parse(
      JSON.stringify(state)
    );
  }

  function pushHistory() {
    history.push(cloneState());
  }

  function goPrevious() {
    if (history.length === 0) {
      return;
    }

    state = history.pop();

    renderCurrentState();
  }

  function getTargetLabel(nodeId) {
    const node =
      nodes[nodeId];

    if (!node?.target) {
      return nodeId;
    }

    const suffix =
      node.target.requiresEasternEuropeMap
        ? "*"
        : "";

    return `${formatIcons(
      t(node.target.labelKey)
    )}${suffix}`;
  }

  function getRolledValue(result) {
    if (
      typeof result === "number"
      || typeof result === "string"
    ) {
      return Number(result);
    }

    if (
      result
      && typeof result === "object"
    ) {
      return Number(
        result.value
        ?? result.face
        ?? result.id
        ?? result.label
      );
    }

    return NaN;
  }

  function rollStandardD6() {
    const result =
      rollDie(DICE.standardD6);

    const value =
      getRolledValue(result);

    if (
      !Number.isInteger(value)
      || value < 1
      || value > 6
    ) {
      throw new Error(
        `Invalid standard d6 result: ${String(result)}`
      );
    }

    return value;
  }

  function findBranchIndex(
    node,
    value
  ) {
    return node.branches?.findIndex(
      branch =>
        branch.values.includes(value)
    ) ?? -1;
  }

  function buildBranchOrder(
    node,
    startingValue
  ) {
    const order = [];

    const seenBranches =
      new Set();

    for (
      let offset = 0;
      offset < 6;
      offset += 1
    ) {
      const value =
        ((startingValue - 1 + offset) % 6) + 1;

      const branchIndex =
        findBranchIndex(
          node,
          value
        );

      if (
        branchIndex < 0
        || seenBranches.has(branchIndex)
      ) {
        continue;
      }

      seenBranches.add(
        branchIndex
      );

      order.push({
        branchIndex,
        selectedValue: value,
        next: node.branches[branchIndex].next
      });
    }

    return order;
  }

  function isInvalidTarget(nodeId) {
    return state.invalidTargets.includes(
      nodeId
    );
  }

  function addCandidate(nodeId) {
    if (
      isInvalidTarget(nodeId)
      || state.currentCandidates.includes(nodeId)
    ) {
      return;
    }

    state.currentCandidates.push(
      nodeId
    );
  }

  function descendFrom(startNodeId) {
    state.currentCandidates = [];

    let currentNodeId =
      startNodeId;

    let safety = 0;

    while (currentNodeId) {
      safety += 1;

      if (safety > 100) {
        throw new Error(
          "Targeting traversal exceeded safety limit."
        );
      }

      const node =
        nodes[currentNodeId];

      if (!node) {
        throw new Error(
          `Unknown targeting node: ${currentNodeId}`
        );
      }

      if (node.target) {
        addCandidate(
          currentNodeId
        );
      }

      if (node.next) {
        currentNodeId =
          node.next;

        continue;
      }

      if (node.branches?.length) {
        const roll =
          rollStandardD6();

        const order =
          buildBranchOrder(
            node,
            roll
          );

        if (order.length === 0) {
          throw new Error(
            `No targeting branch at ${currentNodeId}.`
          );
        }

        state.rolls.push(
          roll
        );

        state.frames.push({
          nodeId: currentNodeId,
          order,
          optionIndex: 0
        });

        currentNodeId =
          order[0].next;

        continue;
      }

      return;
    }
  }

  function advanceOneFallback() {
    for (
      let index = state.frames.length - 1;
      index >= 0;
      index -= 1
    ) {
      const frame =
        state.frames[index];

      const nextOptionIndex =
        frame.optionIndex + 1;

      if (
        nextOptionIndex
        >= frame.order.length
      ) {
        continue;
      }

      const previousOption =
        frame.order[
          frame.optionIndex
        ];

      const nextOption =
        frame.order[
          nextOptionIndex
        ];

      frame.optionIndex =
        nextOptionIndex;

      state.frames =
        state.frames.slice(
          0,
          index + 1
        );

      state.fallbacks.push({
        from: previousOption.selectedValue,
        to: nextOption.selectedValue
      });

      descendFrom(
        nextOption.next
      );

      return true;
    }

    return false;
  }

  function prepareNextCandidateBatch() {
    let safety = 0;

    while (
      state.currentCandidates.length === 0
      && !state.exhausted
    ) {
      safety += 1;

      if (safety > 250) {
        throw new Error(
          "Targeting fallback exceeded safety limit."
        );
      }

      const advanced =
        advanceOneFallback();

      if (!advanced) {
        state.exhausted = true;
      }
    }
  }

  function markCurrentCandidatesInvalid() {
    state.currentCandidates.forEach(
      nodeId => {
        if (
          !state.invalidTargets.includes(
            nodeId
          )
        ) {
          state.invalidTargets.push(
            nodeId
          );
        }
      }
    );
  }

  function rejectCurrentCandidates() {
    if (
      state.currentCandidates.length === 0
      || state.exhausted
    ) {
      return;
    }

    pushHistory();

    markCurrentCandidatesInvalid();

    state.currentCandidates = [];
    state.selectedTarget = null;

    prepareNextCandidateBatch();

    renderCurrentState();
  }

  function selectTarget(nodeId) {
    pushHistory();

    state.selectedTarget =
      nodeId;

    renderCurrentState();
  }

  function confirmSelectedTarget() {
    if (!state.selectedTarget) {
      return;
    }

    const nodeId =
      state.selectedTarget;

    const node =
      nodes[nodeId];

    onConfirm?.({
      realmId,
      chartType,
      nodeId,
      labelKey:
        node?.target?.labelKey ?? null
    });
  }

  function rerollTargetingChart() {
    history = [];

    state =
      createInitialState();

    descendFrom(
      chart.startNode
    );

    prepareNextCandidateBatch();

    renderCurrentState();
  }

  function formatRolls() {
    return state.rolls.length
      ? state.rolls.join(" → ")
      : "—";
  }

  function formatFallbacks() {
    return state.fallbacks
      .map(
        fallback =>
          `${fallback.from} → ${fallback.to}`
      )
      .join(" · ");
  }

  function renderEasternEuropeNote() {
    if (!hasEasternEuropeTargets) {
      return "";
    }

    return `
      <div class="diagram-note">
        ${t(
          "botRealmTargeting.easternEuropeNote"
        )}
      </div>
    `;
  }

  function renderNavigation() {
    if (isCallMode) {
      return `
        <div class="targeting-return-row">
          <button
            id="targeting-back-button"
            class="menu-button targeting-back-button"
            type="button"
          >
            ${t(backLabelKey)}
          </button>
        </div>
      `;
    }

    return `
      ${history.length > 0
        ? `
          <div class="targeting-return-row">
            <button
              id="targeting-previous-button"
              class="menu-button targeting-back-button"
              type="button"
            >
              ${t("common.previousStep")}
            </button>
          </div>
        `
        : ""
      }

      <div class="targeting-return-row">
        <button
          id="targeting-back-button"
          class="menu-button targeting-back-button"
          type="button"
        >
          ${t(
            "botRealmTargeting.backToCharts"
          )}
        </button>
      </div>
    `;
  }

  function bindNavigation() {
    if (isCallMode) {
      const backButton =
        document.querySelector(
          "#targeting-back-button"
        );

      if (backButton) {
        backButton.addEventListener(
          "click",
          () => {
            if (history.length > 0) {
              goPrevious();
              return;
            }

            onBack?.();
          }
        );
      }

      return;
    }

    const previousButton =
      document.querySelector(
        "#targeting-previous-button"
      );

    if (previousButton) {
      previousButton.addEventListener(
        "click",
        goPrevious
      );
    }

    const backButton =
      document.querySelector(
        "#targeting-back-button"
      );

    if (backButton) {
      backButton.addEventListener(
        "click",
        onBack
      );
    }
  }

  function renderRollSummary() {
    const fallbackMarkup =
      state.fallbacks.length > 0
        ? `
          <span class="targeting-roll-label">
            ${t(
              "botRealmTargeting.fallbacks"
            )}
          </span>

          <span class="targeting-roll-values">
            ${formatFallbacks()}
          </span>
        `
        : "";

    return `
      <div class="diagram-detail targeting-roll-summary">
        <span class="targeting-roll-label">
          ${t(
            "botRealmTargeting.rolls"
          )}
        </span>

        <span class="targeting-roll-values">
          ${formatRolls()}
        </span>

        ${fallbackMarkup}
      </div>
    `;
  }

  function renderCandidateList() {
    return state.currentCandidates
      .map(
        (nodeId, index) => `
          <button
            class="diagram-choice targeting-candidate-button"
            type="button"
            data-targeting-candidate="${nodeId}"
          >
            ${getTargetLabel(nodeId)}
          </button>

          ${index
            < state.currentCandidates.length - 1
            ? `
              <div class="targeting-candidate-arrow">
                ↓
              </div>
            `
            : ""
          }
        `
      )
      .join("");
  }

  function renderCandidateScreen() {
    const rerollMarkup =
      allowReroll
        ? `
          <button
            id="targeting-reroll-button"
            class="menu-button"
            type="button"
          >
            ${t(
              "botRealmTargeting.reroll"
            )}
          </button>
        `
        : "";

    page.innerHTML = `
      <section class="screen">
        <div class="home-menu">
          <h1 class="app-title">
            ${t(titleKey)}
          </h1>

          <div class="targeting-chart-meta">
            <div class="targeting-chart-realm">
              ${t(realm.labelKey)}
            </div>
          </div>

          ${renderRollSummary()}

          <div class="targeting-instruction">
            ${t(
              "botRealmTargeting.selectFirstValidTarget"
            )}
          </div>

          <div class="targeting-candidate-list">
            ${renderCandidateList()}
          </div>

          <button
            id="targeting-none-button"
            class="menu-button targeting-none-button"
            type="button"
          >
            ${t(
              "botRealmTargeting.noneValid"
            )}
          </button>

          ${rerollMarkup}

          ${renderEasternEuropeNote()}

          ${renderNavigation()}
        </div>
      </section>
    `;

    document
      .querySelectorAll(
        "[data-targeting-candidate]"
      )
      .forEach(
        button => {
          button.addEventListener(
            "click",
            () => {
              selectTarget(
                button.dataset.targetingCandidate
              );
            }
          );
        }
      );

    document
      .querySelector(
        "#targeting-none-button"
      )
      .addEventListener(
        "click",
        rejectCurrentCandidates
      );

    const rerollButton =
      document.querySelector(
        "#targeting-reroll-button"
      );

    if (rerollButton) {
      rerollButton.addEventListener(
        "click",
        rerollTargetingChart
      );
    }

    bindNavigation();
  }

  function renderSelectedTargetScreen() {
    const nodeId =
      state.selectedTarget;

    const confirmMarkup =
      onConfirm
        ? `
          <button
            id="targeting-confirm-button"
            class="menu-button"
            type="button"
          >
            ${t(
              "botRealmTargeting.confirmTarget"
            )}
          </button>
        `
        : "";

    page.innerHTML = `
      <section class="screen">
        <div class="home-menu">
          <h1 class="app-title">
            ${t(titleKey)}
          </h1>

          <div class="targeting-chart-meta">
            <div class="targeting-chart-realm">
              ${t(realm.labelKey)}
            </div>
          </div>

          <div class="diagram-action targeting-selected-target">
            <div class="targeting-selected-target-label">
              ${t(
                "botRealmTargeting.selectedTarget"
              )}
            </div>

            <div class="targeting-selected-target-name">
              ${getTargetLabel(nodeId)}
            </div>
          </div>

          ${confirmMarkup}

          ${renderEasternEuropeNote()}

          ${renderNavigation()}
        </div>
      </section>
    `;

    const confirmButton =
      document.querySelector(
        "#targeting-confirm-button"
      );

    if (confirmButton) {
      confirmButton.addEventListener(
        "click",
        confirmSelectedTarget
      );
    }

    bindNavigation();
  }

  function renderExhaustedScreen() {
    page.innerHTML = `
      <section class="screen">
        <div class="home-menu">
          <h1 class="app-title">
            ${t(titleKey)}
          </h1>

          <div class="targeting-chart-meta">
            <div class="targeting-chart-realm">
              ${t(realm.labelKey)}
            </div>
          </div>

          ${renderRollSummary()}

          <div class="diagram-detail">
            ${t(
              "botRealmTargeting.noTargetsRemain"
            )}
          </div>

          ${renderEasternEuropeNote()}

          ${renderNavigation()}
        </div>
      </section>
    `;

    bindNavigation();
  }

  function renderCurrentState() {
    if (state.selectedTarget) {
      renderSelectedTargetScreen();
      return;
    }

    if (state.exhausted) {
      renderExhaustedScreen();
      return;
    }

    renderCandidateScreen();
  }

  descendFrom(
    chart.startNode
  );

  prepareNextCandidateBatch();

  renderCurrentState();
}
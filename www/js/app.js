import { getLanguage, setLanguage, t } from "./core/i18n.js";
import {
  decreaseTextSize,
  getTextSizeLevel,
  getTheme,
  increaseTextSize,
  resetTextSize,
  setTheme
} from "./core/settings.js";
import { getCurrentRoute, navigateTo } from "./router.js";
import { formatIcons } from "./core/icons.js";
import {
  renderQuestion,
  renderAction,
  renderGoTo,
  renderEnd,
  renderNumberInput,
  renderActionConfirmation
} from "./core/diagram-engine.js";
import { BOT_CARDS } from "./features/bot-actions/data/bot-cards.js";
import {
  renderDefendAction,
  renderSiegeAction,
  renderSpyAction,
  renderColonizeAction,
  renderUnrestAction,
  renderConvertAction,
  renderDiplomacyAction,
  renderMilitaryAction,
  renderFocusAction,
  renderIdeaAction,
  renderPapalCuriaAction,
  renderEventAction,
  renderNavalBattleResolution,
  renderLandBattleResolution,
  renderPeaceResolution,
  renderPeaceRebelsPhase,
  renderExploreAction,
  renderNavalAction,
  renderIncomeUpkeepPhase,
  renderCleanupPhase,
  renderEndOfAgeRoutine,
  renderFinalScoringPhase,
  resetDefendState,
  resetSiegeState,
  resetSpyState,
  resetColonizeState,
  resetUnrestState,
  resetConvertState,
  resetDiplomacyState,
  resetMilitaryState,
  resetFocusState,
  resetIdeaState,
  resetPapalCuriaState,
  resetEventState,
  resetNavalBattleState,
  resetLandBattleState,
  resetExploreState,
  resetNavalState,
  resetPeaceState,
  resetPeaceRebelsState,
  resetIncomeUpkeepState,
  resetCleanupState,
  resetEndOfAgeState,
  resetFinalScoringState,
  resumeDefendAfterCall,
  resumeExploreAfterCall,
  resumeNavalAfterCall,
  resumeDiplomacyAfterCall,
  resumeMilitaryAfterCall,
  resumePeaceRebelsAfterCall
} from "./features/bot-actions/bot-actions.js";
import {
  getSelectedTargetingRealmId,
  renderBotRealmTargetingMenu,
  renderTargetingChart,
  setSelectedTargetingRealmId
} from "./features/bot-realm-targeting/territory-selection.js";
import {
  TARGETING_REALMS
} from "./features/bot-realm-targeting/data/realms.js";
import {
  renderPlayerResolutionsMenu,
  renderPlayerLandBattleResolution,
  resetPlayerLandBattleState,
  renderPlayerNavalBattleResolution,
  resetPlayerNavalBattleState,
  renderPlayerPeaceResolution,
  resetPlayerPeaceResolutionState
} from "./features/player-resolutions/player-resolutions.js";

//===========================================================================
// App VERSION
const APP_VERSION = "2.0.0";
//===========================================================================

const settings = document.querySelector("#settings");
const page = document.querySelector("#page");

const FOCUS_ACTION_IDS = [
  "focus",
  "focus-economy",
  "focus-expansion",
  "focus-politics",
  "focus-warfare"
];

let currentBotAction = null;
let botActionReturnStack = [];
let currentPlayerResolution = null;
let mainTurnState = {
  currentStep: "noBotPower",
  stepHistory: [],
  currentBotCardId: null,
  currentBotCard: null
};

function resetMainTurnState() {
  mainTurnState = {
    currentStep: "noBotPower",
    stepHistory: [],
    currentBotCardId: null,
    currentBotCard: null
  };
}

function renderSettings() {
  const currentLanguage = getLanguage();
  const currentTheme = getTheme();

  const textSizeLevel = getTextSizeLevel();
  const textSizeLabel =
    textSizeLevel > 0 ? `+${textSizeLevel}` : textSizeLevel;

  document.documentElement.lang = currentLanguage;

  settings.innerHTML = `
    <div class="settings-bar">
      <button id="text-smaller-button" class="settings-button">
        A−
      </button>

      <button id="text-reset-button" class="settings-button text-size-level">
        ${textSizeLabel}
      </button>

      <button id="text-larger-button" class="settings-button">
        A+
      </button>

      <select
        id="language-select"
        class="language-select"
        aria-label="Language"
      >
        <option value="en" ${currentLanguage === "en" ? "selected" : ""}>
          🇬🇧 EN
        </option>

        <option value="fr" ${currentLanguage === "fr" ? "selected" : ""}>
          🇫🇷 FR
        </option>

        <option value="de" ${currentLanguage === "de" ? "selected" : ""}>
          🇩🇪 DE
        </option>

        <option value="es" ${currentLanguage === "es" ? "selected" : ""}>
          🇪🇸 ES
        </option>
      </select>

      <div class="theme-switch-container">
        <span class="theme-switch-icon" aria-hidden="true">☀</span>

        <label class="theme-switch">
          <input
            id="theme-switch"
            type="checkbox"
            ${currentTheme === "dark" ? "checked" : ""}
            aria-label="Light / Dark theme"
          >

          <span class="theme-switch-track">
            <span class="theme-switch-thumb"></span>
          </span>
        </label>

        <span class="theme-switch-icon" aria-hidden="true">☾</span>
      </div>
    </div>
  `;

  document
    .querySelector("#language-select")
    .addEventListener("change", (event) => {
      setLanguage(event.target.value);
      renderSettings();
      renderCurrentPage();
    });

  document
    .querySelector("#theme-switch")
    .addEventListener("change", (event) => {
      setTheme(event.target.checked ? "dark" : "light");
    });

  document
    .querySelector("#text-smaller-button")
    .addEventListener("click", () => {
      decreaseTextSize();
      renderSettings();
    });

  document
    .querySelector("#text-reset-button")
    .addEventListener("click", () => {
      resetTextSize();
      renderSettings();
    });

  document
    .querySelector("#text-larger-button")
    .addEventListener("click", () => {
      increaseTextSize();
      renderSettings();
    });
}

function renderHome() {
  setSelectedTargetingRealmId(null);

  page.innerHTML = `
    <section class="screen">
      <div class="home-menu">
        <h1 class="app-title">${t("home.title")}</h1>

        <button
          class="menu-button"
          data-route="bot-actions-realm-selection"
        >
          ${t("home.botActions")}
        </button>

        <button
          class="menu-button"
          data-route="bot-realm-targeting"
        >
          ${t("home.botRealmTargetingCharts")}
        </button>

        <button
          class="menu-button"
          data-route="player-resolutions"
        >
          ${t("home.playerResolutions")}
        </button>

        <button
          class="menu-button"
          data-route="credits"
        >
          ${t("home.credits")}
        </button>
      </div>

      <p class="app-version">v${APP_VERSION}</p>
    </section>
  `;

  document
    .querySelectorAll("[data-route]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        navigateTo(button.dataset.route);
        renderCurrentPage();
      });
    });
}

function renderCredits() {
  page.innerHTML = `
    <section class="screen credits-screen">
      <div class="credits-content">
        <h1 class="app-title">
          ${t("credits.title")}
        </h1>

        <div class="credits-card">
          <div class="credits-entry">
            <div class="credits-role">
              ${t("credits.appDevelopment")}
            </div>

            <div class="credits-name">
              Philippe De Sousa
            </div>
          </div>

          <div class="credits-entry">
            <div class="credits-role">
              ${t("credits.gameDesign")}
            </div>

            <div class="credits-name">
              Eivind Vetlesen
            </div>
          </div>

          <div class="credits-entry">
            <div class="credits-role">
              ${t("credits.soloModeDesign")}
            </div>

            <div class="credits-name">
              Dávid Turczi
            </div>
          </div>

          <div class="credits-entry">
            <div class="credits-role">
              ${t("credits.gamePublishers")}
            </div>

            <div class="credits-name credits-publishers">
              <span>Aegir Games</span>
              <span>Paradox Interactive</span>
            </div>
          </div>
        </div>

        <div class="credits-disclaimer">
          ${t("credits.publisherDisclaimer")}
        </div>

        <p class="credits-rulebook-note">
          ${t("credits.rulebook")}
        </p>

        <button
          id="credits-main-menu-button"
          class="menu-button credits-main-menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>
      </div>
    </section>
  `;

  document
    .querySelector("#credits-main-menu-button")
    .addEventListener("click", () => {
      navigateTo("home");
      renderCurrentPage();
    });
}

function openBotAction(
  action,
  returnContext = null,
  entryStep = null
) {
  if (
    !returnContext
    && getCurrentRoute() !== "bot-action"
  ) {
    botActionReturnStack = [];
  }

  if (returnContext) {
    botActionReturnStack.push(returnContext);
  }

  currentBotAction = action;

  if (action === "defend") {
    resetDefendState();
  }

  if (action === "siege") {
    resetSiegeState();
  }

  if (action === "spy") {
    resetSpyState();
  }

  if (action === "colonize") {
    resetColonizeState();
  }

  if (action === "unrest") {
    resetUnrestState();
  }

  if (action === "convert") {
    resetConvertState();
  }

  if (action === "diplomacy") {
    resetDiplomacyState();
  }

  if (action === "military") {
    resetMilitaryState(
      entryStep ?? "atWar"
    );
  }

  if (FOCUS_ACTION_IDS.includes(action)) {
    resetFocusState();
  }

  if (action === "idea") {
    resetIdeaState();
  }

  if (action === "papal-curia") {
    resetPapalCuriaState();
  }

  if (action === "event") {
    resetEventState();
  }

  if (action === "naval-battle") {
    resetNavalBattleState();
  }

  if (action === "land-battle") {
    resetLandBattleState();
  }

  if (action === "peace") {
    resetPeaceState();
  }

  if (action === "peace-rebels") {
    resetPeaceRebelsState();
  }

  if (action === "income-upkeep") {
    resetIncomeUpkeepState();
  }

  if (action === "cleanup") {
    resetCleanupState();
  }

  if (action === "end-of-age") {
    resetEndOfAgeState();
  }

  if (action === "final-scoring") {
    resetFinalScoringState();
  }

  if (action === "explore") {
    resetExploreState();
  }

  if (action === "naval") {
    resetNavalState();
  }

  navigateTo("bot-action");
  renderCurrentPage();
}

function completeBotAction(result = null) {
  if (botActionReturnStack.length === 0) {
    return;
  }

  const returnContext =
    botActionReturnStack.pop();

  if (returnContext.returnRoute) {
    currentBotAction = null;

    if (
      returnContext.returnRoute === "bot-main-turn"
      && returnContext.returnStep
    ) {
      mainTurnState.stepHistory.push(
        mainTurnState.currentStep
      );

      mainTurnState.currentStep =
        returnContext.returnStep;
    }

    navigateTo(returnContext.returnRoute);
    renderCurrentPage();
    return;
  }

  if (returnContext.returnAction) {
    currentBotAction =
      returnContext.returnAction;

    const actionResumers = {
      defend: resumeDefendAfterCall,
      explore: resumeExploreAfterCall,
      naval: resumeNavalAfterCall,
      military: resumeMilitaryAfterCall,
      "peace-rebels": resumePeaceRebelsAfterCall
    };

    const resumeAction =
      actionResumers[
        returnContext.returnAction
      ];

    if (
      resumeAction
      && returnContext.callerStep
    ) {
      resumeAction(
        returnContext.callerStep,
        result
      );
    }

    navigateTo("bot-action");
    renderCurrentPage();
  }
}

function renderBotActionsRealmSelection() {
  const currentRealmId =
    getSelectedTargetingRealmId();

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
          ${t("botRealmTargeting.selectRealmPlaceholder")}
        </h1>

        <label
          class="targeting-realm-label"
          for="bot-actions-realm-select"
        >
          ${t("botRealmTargeting.selectRealm")}
        </label>

        <select
          id="bot-actions-realm-select"
          class="targeting-realm-select"
        >
          <option value="">
            ${t("botRealmTargeting.selectRealmPlaceholder")}
          </option>

          ${realmOptions}
        </select>

        <button
          id="confirm-bot-realm-button"
          class="menu-button"
          type="button"
          disabled
        >
          ${t("common.confirm")}
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
    document.querySelector(
      "#bot-actions-realm-select"
    );

  const confirmButton =
    document.querySelector(
      "#confirm-bot-realm-button"
    );

  let pendingRealmId =
    currentRealmId ?? "";

  realmSelect.value =
    pendingRealmId;

  function updateConfirmButton() {
    confirmButton.disabled =
      !pendingRealmId
      || !TARGETING_REALMS[pendingRealmId];
  }

  realmSelect.addEventListener(
    "change",
    () => {
      pendingRealmId =
        realmSelect.value || "";

      updateConfirmButton();
    }
  );

  confirmButton.addEventListener(
    "click",
    () => {
      if (
        !pendingRealmId
        || !TARGETING_REALMS[pendingRealmId]
      ) {
        return;
      }

      setSelectedTargetingRealmId(
        pendingRealmId
      );

      navigateTo("bot-actions");
      renderCurrentPage();
    }
  );

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", () => {
      navigateTo("home");
      renderCurrentPage();
    });

  updateConfirmButton();
}

function renderBotActionsMenu() {
  const selectedRealmId =
    getSelectedTargetingRealmId();

  if (
    !selectedRealmId
    || !TARGETING_REALMS[selectedRealmId]
  ) {
    navigateTo(
      "bot-actions-realm-selection"
    );

    renderCurrentPage();
    return;
  }

  const selectedRealm =
    TARGETING_REALMS[selectedRealmId];

  page.innerHTML = `
    <section class="screen">
      <div class="home-menu">
        <h1 class="app-title">
          ${t("botActions.title")}
        </h1>

        <div class="diagram-detail">
          <strong>
            ${t("botRealmTargeting.selectRealm")}:
          </strong>
          ${t(selectedRealm.labelKey)}
        </div>

        <button
          id="main-turn-button"
          class="menu-button"
        >
          ${t("botActions.mainTurnStructure")}
        </button>

        <button
          id="specific-action-button"
          class="menu-button"
        >
          ${t("botActions.chooseSpecificAction")}
        </button>

        <button
          id="peace-rebels-button"
          class="menu-button"
        >
          ${t("botActions.peaceAndRebels")}
        </button>

        <button
          id="income-upkeep-button"
          class="menu-button"
        >
          ${t("botActions.incomeAndUpkeep")}
        </button>

        <button
          id="cleanup-button"
          class="menu-button"
        >
          ${t("botActions.cleanup")}
        </button>

        <button
          id="end-of-age-button"
          class="menu-button"
        >
          ${t("botActions.endOfAge.title")}
        </button>

        <button
          id="final-scoring-button"
          class="menu-button"
        >
          ${t("botActions.finalScoringPhase.title")}
        </button>

        <button
          id="change-bot-realm-button"
          class="menu-button"
          type="button"
        >
          ${t("botActions.changeBotRealm")}
        </button>

        <button
          id="main-menu-button"
          class="menu-button"
        >
          ${t("common.mainMenu")}
        </button>
      </div>
    </section>
  `;

  document
    .querySelector("#main-turn-button")
    .addEventListener("click", () => {
      resetMainTurnState();

      navigateTo("bot-main-turn");
      renderCurrentPage();
    });

  document
    .querySelector("#specific-action-button")
    .addEventListener("click", () => {
      navigateTo("bot-specific-action");
      renderCurrentPage();
    });

  document
    .querySelector("#peace-rebels-button")
    .addEventListener("click", () => {
      openBotAction("peace-rebels");
    });

  document
    .querySelector("#income-upkeep-button")
    .addEventListener("click", () => {
      openBotAction("income-upkeep");
    });

  document
    .querySelector("#cleanup-button")
    .addEventListener("click", () => {
      openBotAction("cleanup");
    });

  document
    .querySelector("#end-of-age-button")
    .addEventListener("click", () => {
      openBotAction("end-of-age");
    });

  document
    .querySelector("#final-scoring-button")
    .addEventListener("click", () => {
      openBotAction("final-scoring");
    });

  document
    .querySelector("#change-bot-realm-button")
    .addEventListener("click", () => {
      navigateTo(
        "bot-actions-realm-selection"
      );

      renderCurrentPage();
    });

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", () => {
      navigateTo("home");
      renderCurrentPage();
    });
}

function renderSpecificActionMenu() {
  page.innerHTML = `
    <section class="screen">
      <div class="home-menu">
        <h1 class="app-title">
          ${t("botActions.chooseSpecificAction")}
        </h1>

        <div class="specific-action-grid">
          <button
            id="colonize-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.colonize")}
          </button>

          <button
            id="convert-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.convert")}
          </button>

          <button
            id="defend-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.defend")}
          </button>

          <button
            id="diplomacy-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.diplomacy")}
          </button>

          <button
            id="event-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.event")}
          </button>

          <button
            id="explore-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.explore")}
          </button>

          <button
            id="focus-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.focus")}
          </button>

          <button
            id="idea-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.idea")}
          </button>

          <button
            id="land-battle-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.landBattle")}
          </button>

          <button
            id="military-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.military")}
          </button>

          <button
            id="naval-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.naval")}
          </button>

          <button
            id="naval-battle-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.navalBattle")}
          </button>

          <button
            id="papal-curia-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.papalCuria")}
          </button>

          <button
            id="peace-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.peace")}
          </button>

          <button
            id="siege-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.siege")}
          </button>

          <button
            id="spy-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.spy")}
          </button>

          <button
            id="unrest-action-button"
            class="menu-button"
            type="button"
          >
            ${t("botActions.actionNames.unrest")}
          </button>

          <button
            id="bot-actions-menu-button"
            class="menu-button specific-action-return"
            type="button"
          >
            ${t("common.botActionsMenu")}
          </button>
        </div>
      </div>
    </section>
  `;

  document
    .querySelector("#colonize-action-button")
    .addEventListener("click", () => {
      openBotAction("colonize");
    });

  document
    .querySelector("#convert-action-button")
    .addEventListener("click", () => {
      openBotAction("convert");
    });

  document
    .querySelector("#defend-action-button")
    .addEventListener("click", () => {
      openBotAction("defend");
    });

  document
    .querySelector("#diplomacy-action-button")
    .addEventListener("click", () => {
      openBotAction("diplomacy");
    });

  document
    .querySelector("#event-action-button")
    .addEventListener("click", () => {
      openBotAction("event");
    });

  document
    .querySelector("#explore-action-button")
    .addEventListener("click", () => {
      openBotAction("explore");
    });

  document
    .querySelector("#focus-action-button")
    .addEventListener("click", () => {
      openBotAction("focus");
    });

  document
    .querySelector("#idea-action-button")
    .addEventListener("click", () => {
      openBotAction("idea");
    });

  document
    .querySelector("#land-battle-action-button")
    .addEventListener("click", () => {
      openBotAction("land-battle");
    });

  document
    .querySelector("#military-action-button")
    .addEventListener("click", () => {
      openBotAction("military");
    });

  document
    .querySelector("#naval-action-button")
    .addEventListener("click", () => {
      openBotAction("naval");
    });

  document
    .querySelector("#naval-battle-action-button")
    .addEventListener("click", () => {
      openBotAction("naval-battle");
    });

  document
    .querySelector("#papal-curia-action-button")
    .addEventListener("click", () => {
      openBotAction("papal-curia");
    });

  document
    .querySelector("#peace-action-button")
    .addEventListener("click", () => {
      openBotAction("peace");
    });

  document
    .querySelector("#siege-action-button")
    .addEventListener("click", () => {
      openBotAction("siege");
    });

  document
    .querySelector("#spy-action-button")
    .addEventListener("click", () => {
      openBotAction("spy");
    });

  document
    .querySelector("#unrest-action-button")
    .addEventListener("click", () => {
      openBotAction("unrest");
    });

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", () => {
      navigateTo("bot-actions");
      renderCurrentPage();
    });
}

function renderBotAction() {
  if (!currentBotAction) {
    navigateTo("bot-actions");
    renderCurrentPage();
    return;
  }

  const hasReturnContext =
    botActionReturnStack.length > 0;

  if (currentBotAction === "defend") {
    renderDefendAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onExternalAction: (node, step) => {
        if (node.navigation === "call") {
          openBotAction(
            node.target,
            {
              returnAction: "defend",
              callerStep: step
            }
          );

          return;
        }

        openBotAction(node.target);
      }
    });

    return;
  }

  if (currentBotAction === "siege") {
    renderSiegeAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      }
    });

    return;
  }

  if (currentBotAction === "spy") {
    renderSpyAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onExternalAction: (node) => {
        openBotAction(node.target);
      },

      onComplete: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "colonize") {
    renderColonizeAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onExternalAction: (node) => {
        openBotAction(node.target);
      },

      onComplete: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "diplomacy") {
    const selectedRealmId =
      getSelectedTargetingRealmId();

    if (!selectedRealmId) {
      currentBotAction = null;
      botActionReturnStack = [];

      navigateTo(
        "bot-actions-realm-selection"
      );

      renderCurrentPage();
      return;
    }

    renderDiplomacyAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onExternalAction: (
        node,
        step
      ) => {
        if (
          node.target
          !== "diplomatic-targeting"
        ) {
          console.warn(
            `Unknown DIPLOMACY external target: ${node.target}`
          );
          return;
        }

        renderTargetingChart({
          page,
          realmId: selectedRealmId,
          chartType: "diplomatic",

          onBack: () => {
            renderCurrentPage();
          },

          onConfirm: (result) => {
            resumeDiplomacyAfterCall(
              step,
              result
            );

            renderCurrentPage();
          },

          allowReroll:
            step
            === "goDiplomaticTargetChartReroll",

          backLabelKey:
            "common.previousStep"
        });
      },

      onComplete: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "military") {
    const selectedRealmId =
      getSelectedTargetingRealmId();

    if (!selectedRealmId) {
      currentBotAction = null;
      botActionReturnStack = [];

      navigateTo(
        "bot-actions-realm-selection"
      );

      renderCurrentPage();
      return;
    }

    renderMilitaryAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onExternalAction: (
        node,
        step
      ) => {
        if (
          node.target
          === "military-targeting"
        ) {
          renderTargetingChart({
            page,
            realmId: selectedRealmId,
            chartType: "military",

            onBack: () => {
              renderCurrentPage();
            },

            onConfirm: (result) => {
              resumeMilitaryAfterCall(
                step,
                result
              );

              renderCurrentPage();
            },

            backLabelKey:
              "common.previousStep"
          });

          return;
        }

        if (node.navigation === "call") {
          openBotAction(
            node.target,
            {
              returnAction: "military",
              callerStep: step
            }
          );

          return;
        }

        if (node.navigation === "goto") {
          openBotAction(
            node.target
          );

          return;
        }

        console.warn(
          `Unknown MILITARY external target: ${node.target}`
        );
      },

      onComplete: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "unrest") {
    const returnContext =
      botActionReturnStack[
        botActionReturnStack.length - 1
      ];

    const canPerformSecondAction =
      returnContext?.returnRoute === "bot-main-turn"
      && Boolean(
        mainTurnState.currentBotCard?.secondAction
      );

    renderUnrestAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onComplete: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null,

      onPerformSecondAction: canPerformSecondAction
        ? () => {
            returnContext.returnStep = "secondAction";
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "convert") {
    const returnContext =
      botActionReturnStack[
        botActionReturnStack.length - 1
      ];

    const canPerformSecondAction =
      returnContext?.returnRoute === "bot-main-turn"
      && Boolean(
        mainTurnState.currentBotCard?.secondAction
      );

    renderConvertAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onComplete: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null,

      onPerformSecondAction: canPerformSecondAction
        ? () => {
            returnContext.returnStep = "secondAction";
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (FOCUS_ACTION_IDS.includes(currentBotAction)) {
    renderFocusAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onComplete: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "idea") {
    renderIdeaAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onComplete: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "papal-curia") {
    const returnContext =
      botActionReturnStack[
        botActionReturnStack.length - 1
      ];

    const hasMainTurnReturn =
      returnContext?.returnRoute === "bot-main-turn";

    renderPapalCuriaAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onExternalAction: (node) => {
        openBotAction(
          node.target,
          null,
          node.entryStep ?? null
        );
      },

      onComplete: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null,

      onPerformSecondAction: hasMainTurnReturn
        ? () => {
            if (
              returnContext.returnStep
              === "firstActionEffect"
              && mainTurnState.currentBotCard?.secondAction
            ) {
              returnContext.returnStep =
                "secondAction";
            }

            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "event") {
    renderEventAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onRestartMainTurn: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        resetMainTurnState();

        navigateTo("bot-main-turn");
        renderCurrentPage();
      },

      onComplete: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "explore") {
    renderExploreAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onExternalAction: (node, step) => {
        if (node.navigation === "call") {
          openBotAction(
            node.target,
            {
              returnAction: "explore",
              callerStep: step
            }
          );

          return;
        }

        openBotAction(node.target);
      },

      onComplete: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "naval") {
    renderNavalAction({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onExternalAction: (node, step) => {
        if (node.navigation === "call") {
          openBotAction(
            node.target,
            {
              returnAction: "naval",
              callerStep: step
            }
          );

          return;
        }

        openBotAction(node.target);
      },

      onComplete: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "peace-rebels") {
    renderPeaceRebelsPhase({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onExternalAction: (
        block,
        step
      ) => {
        if (block.navigation === "call") {
          openBotAction(
            block.target,
            {
              returnAction: "peace-rebels",
              callerStep: step
            }
          );

          return;
        }

        openBotAction(block.target);
      },

      onComplete: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      }
    });

    return;
  }

  if (currentBotAction === "income-upkeep") {
    renderIncomeUpkeepPhase({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onComplete: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      }
    });

    return;
  }

  if (currentBotAction === "cleanup") {
    renderCleanupPhase({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onComplete: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      }
    });

    return;
  }

  if (currentBotAction === "end-of-age") {
    renderEndOfAgeRoutine({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onComplete: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      }
    });

    return;
  }

  if (currentBotAction === "final-scoring") {
    renderFinalScoringPhase({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onComplete: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      }
    });

    return;
  }

  if (currentBotAction === "peace") {
    renderPeaceResolution({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onReturn: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "land-battle") {
    renderLandBattleResolution({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onReturn: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null
    });

    return;
  }

  if (currentBotAction === "naval-battle") {
    renderNavalBattleResolution({
      page,

      onMainMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("home");
        renderCurrentPage();
      },

      onBotActionsMenu: () => {
        currentBotAction = null;
        botActionReturnStack = [];

        navigateTo("bot-actions");
        renderCurrentPage();
      },

      onReturn: hasReturnContext
        ? () => {
            completeBotAction();
          }
        : null
    });

    return;
  }

  const actionNameMap = {
    event: "event",
    military: "military",
    diplomacy: "diplomacy",
    naval: "naval",
    explore: "explore",
    colonize: "colonize",
    unrest: "unrest",
    "papal-curia": "papalCuria",
    convert: "convert",
    idea: "idea",
    spy: "spy",
    "focus-economy": "focusEconomy",
    "focus-expansion": "focusExpansion",
    "focus-politics": "focusPolitics",
    "focus-warfare": "focusWarfare",
    defend: "defend",
    siege: "siege",
    "land-battle": "landBattle",
    "naval-battle": "navalBattle"
  };

  const translationKey =
    actionNameMap[currentBotAction];

  const title = translationKey
    ? t(`botActions.actionNames.${translationKey}`)
    : currentBotAction;

  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">${title}</h1>

      ${hasReturnContext
        ? `
          <button
            id="complete-action-button"
            class="diagram-confirm"
            type="button"
          >
            ${t("common.completeAction")}
          </button>
        `
        : ""
      }

      <div class="diagram-menu-navigation">
        <button id="main-menu-button" class="menu-button">
          ${t("common.mainMenu")}
        </button>

        <button id="bot-actions-menu-button" class="menu-button">
          ${t("common.botActionsMenu")}
        </button>
      </div>
    </section>
  `;

  const completeActionButton =
    document.querySelector(
      "#complete-action-button"
    );

  if (completeActionButton) {
    completeActionButton.addEventListener(
      "click",
      () => {
        completeBotAction();
      }
    );
  }

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", () => {
      currentBotAction = null;
      botActionReturnStack = [];

      navigateTo("home");
      renderCurrentPage();
    });

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", () => {
      currentBotAction = null;
      botActionReturnStack = [];

      navigateTo("bot-actions");
      renderCurrentPage();
    });
}

function renderMainTurnStructure() {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.mainTurnStructure")}
      </h1>

      <div id="diagram-container"></div>

      <button
        id="previous-step-button"
        class="menu-button"
        type="button"
        hidden
      >
        ${t("common.previousStep")}
      </button>

      <div class="diagram-menu-navigation">
        <button id="main-menu-button" class="menu-button">
          ${t("common.mainMenu")}
        </button>

        <button id="bot-actions-menu-button" class="menu-button">
          ${t("common.botActionsMenu")}
        </button>
      </div>
    </section>
  `;

  const diagramContainer =
    document.querySelector("#diagram-container");

  const previousStepButton =
    document.querySelector("#previous-step-button");

  function updatePreviousButton() {
    previousStepButton.hidden =
      mainTurnState.stepHistory.length === 0;
  }

  function goToStep(step) {
    if (mainTurnState.currentStep !== null) {
      mainTurnState.stepHistory.push(
        mainTurnState.currentStep
      );
    }

    mainTurnState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showQuestion({
    textKey,
    noteKey = null,
    yes,
    no
  }) {
    renderQuestion({
      container: diagramContainer,
      text: formatIcons(t(textKey)),
      note: noteKey
        ? formatIcons(t(noteKey))
        : null,
      yesLabel: t("common.yes"),
      noLabel: t("common.no"),
      onYes: () => goToStep(yes),
      onNo: () => goToStep(no)
    });
  }

  function showAction(
    textKey,
    detailKeys = [],
    nextStep = null
  ) {
    renderAction({
      container: diagramContainer,
      text: formatIcons(t(textKey)),
      details: detailKeys.map(key =>
        formatIcons(t(key))
      ),
      confirmLabel: nextStep
        ? t("common.confirm")
        : null,
      onConfirm: nextStep
        ? () => goToStep(nextStep)
        : null
    });
  }

  function showGoTo(textKey, target, detailKeys = []) {
    renderGoTo({
      container: diagramContainer,
      text: formatIcons(t(textKey)),
      details: detailKeys.map(key =>
        formatIcons(t(key))
      ),
      onClick: () => {
        openBotAction(target);
      }
    });
  }

  function showEnd(textKey, detailKeys = []) {
    renderEnd({
      container: diagramContainer,
      text: formatIcons(t(textKey)),
      details: detailKeys.map(key =>
        formatIcons(t(key))
      )
    });
  }

  function getActionName(action) {
    const keyMap = {
      event: "event",
      military: "military",
      diplomacy: "diplomacy",
      naval: "naval",
      explore: "explore",
      colonize: "colonize",
      unrest: "unrest",
      "papal-curia": "papalCuria",
      convert: "convert",
      idea: "idea",
      spy: "spy",
      "focus-economy": "focusEconomy",
      "focus-expansion": "focusExpansion",
      "focus-politics": "focusPolitics",
      "focus-warfare": "focusWarfare"
    };

    return t(`botActions.actionNames.${keyMap[action]}`);
  }

  function showStep(step) {
    switch (step) {
      case "noBotPower":
        showQuestion({
          textKey: "botActions.mainTurn.noBotPower",
          yes: "pickedEvent",
          no: "underAttack"
        });
        break;

      case "pickedEvent":
        showQuestion({
          textKey: "botActions.mainTurn.pickedEvent",
          yes: "pass",
          no: "event"
        });
        break;

      case "pass":
        showEnd(
          "botActions.mainTurn.pass",
          [
            "botActions.mainTurn.firstToPass",
            "botActions.mainTurn.secondToPass"
          ]
        );
        break;

      case "event":
        showGoTo(
          "botActions.mainTurn.goToEvent",
          "event"
        );
        break;

      case "underAttack":
        showQuestion({
          textKey: "botActions.mainTurn.underAttack",
          noteKey: "botActions.mainTurn.notes.underAttack",
          yes: "defend",
          no: "canSiege"
        });
        break;

      case "defend":
        showGoTo(
          "botActions.mainTurn.goToDefend",
          "defend",
          [
            "botActions.mainTurn.spend1BotPower"
          ]
        );
        break;

      case "canSiege":
        showQuestion({
          textKey: "botActions.mainTurn.canSiege",
          yes: "siege",
          no: "canColonize"
        });
        break;

      case "siege":
        showGoTo(
          "botActions.mainTurn.goToSiege",
          "siege"
        );
        break;

      case "canColonize":
        showQuestion({
          textKey: "botActions.mainTurn.canColonize",
          yes: "colonize",
          no: "spentMoreThanLeft"
        });
        break;

      case "colonize":
        showGoTo(
          "botActions.mainTurn.goToColonize",
          "colonize",
          [
            "botActions.mainTurn.spend2BotPower"
          ]
        );
        break;

      case "spentMoreThanLeft":
        showQuestion({
          textKey: "botActions.mainTurn.spentMoreThanLeft",
          yes: "atWarEnoughPower",
          no: "hasBotCards"
        });
        break;

      case "atWarEnoughPower":
        showQuestion({
          textKey: "botActions.mainTurn.atWarEnoughPower",
          yes: "hasBotCards",
          no: "pickedEvent"
        });
        break;

      case "hasBotCards":
        showQuestion({
          textKey: "botActions.mainTurn.hasBotCards",
          yes: "drawBotCard",
          no: "scoreAndEndTurn"
        });
        break;

      case "drawBotCard":
        renderNumberInput({
          container: diagramContainer,
          text: formatIcons(
            t("botActions.mainTurn.drawBotCard")
          ),
          details: [
            formatIcons(
              t("botActions.mainTurn.spendShownCost")
            ),
            formatIcons(
              `${t("botActions.mainTurn.discardActionCard")}
              {administrativeActionCard} = ${t("botActions.mainTurn.administrative")},
              {diplomaticActionCard} = ${t("botActions.mainTurn.diplomatic")},
              {militaryActionCard} = ${t("botActions.mainTurn.military")}`
            )
          ],
          note: formatIcons(
            t("botActions.mainTurn.notes.insufficientBotPower")
          ),
          label: t("common.cardId"),
          min: 1,
          max: 24,
          confirmLabel: t("common.confirm"),
          invalidMessage: t("common.invalidCardId"),
          onConfirm: cardId => {
            mainTurnState.currentBotCardId = cardId;
            mainTurnState.currentBotCard = BOT_CARDS[cardId];

            if (mainTurnState.currentBotCard.warAction) {
              goToStep("atWar");
            } else {
              goToStep("firstAction");
            }
          }
        });
        break;

      case "atWar":
        showQuestion({
          textKey: "botActions.mainTurn.atWar",
          yes: "warAction",
          no: "firstAction"
        });
        break;

      case "warAction":
        renderActionConfirmation({
          container: diagramContainer,
          cardLabel: t("botActions.mainTurn.botCard"),
          cardId: mainTurnState.currentBotCardId,
          actionType: t("botActions.mainTurn.warActionLabel"),
          actionName: getActionName(
            mainTurnState.currentBotCard.warAction
          ),
          confirmLabel: t("common.confirm"),
          onConfirm: () => {
            openBotAction(
              mainTurnState.currentBotCard.warAction,
              {
                returnRoute: "bot-main-turn",
                returnStep: "warActionEffect"
              }
            );
          }
        });
        break;

      case "warActionEffect":
        showQuestion({
          textKey: "botActions.mainTurn.actionTookEffect",
          yes: "endTurn",
          no: "firstAction"
        });
        break;

      case "firstAction":
        renderActionConfirmation({
          container: diagramContainer,
          cardLabel: t("botActions.mainTurn.botCard"),
          cardId: mainTurnState.currentBotCardId,
          actionType: t("botActions.mainTurn.firstActionLabel"),
          actionName: getActionName(
            mainTurnState.currentBotCard.firstAction
          ),
          confirmLabel: t("common.confirm"),
          onConfirm: () => {
            openBotAction(
              mainTurnState.currentBotCard.firstAction,
              {
                returnRoute: "bot-main-turn",
                returnStep: "firstActionEffect"
              }
            );
          }
        });
        break;

      case "firstActionEffect":
        showQuestion({
          textKey: "botActions.mainTurn.actionTookEffect",
          yes: "endTurn",
          no: mainTurnState.currentBotCard.secondAction
            ? "secondAction"
            : "scorePrestige"
        });
        break;

      case "secondAction":
        renderActionConfirmation({
          container: diagramContainer,
          cardLabel: t("botActions.mainTurn.botCard"),
          cardId: mainTurnState.currentBotCardId,
          actionType: t("botActions.mainTurn.secondActionLabel"),
          actionName: getActionName(
            mainTurnState.currentBotCard.secondAction
          ),
          confirmLabel: t("common.confirm"),
          onConfirm: () => {
            openBotAction(
              mainTurnState.currentBotCard.secondAction,
              {
                returnRoute: "bot-main-turn",
                returnStep: "secondActionEffect"
              }
            );
          }
        });
        break;

      case "secondActionEffect":
        showQuestion({
          textKey: "botActions.mainTurn.actionTookEffect",
          yes: "endTurn",
          no: "scorePrestige"
        });
        break;

      case "scorePrestige":
        showAction(
          "botActions.mainTurn.scorePrestigeFromCard",
          [],
          "endTurn"
        );
        break;

      case "scoreAndEndTurn":
        showAction(
          "botActions.mainTurn.spend1Score1",
          [],
          "endTurn"
        );
        break;

      case "endTurn":
        showEnd(
          "botActions.mainTurn.endTurn"
        );
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (mainTurnState.stepHistory.length === 0) {
      return;
    }

    mainTurnState.currentStep =
      mainTurnState.stepHistory.pop();

    showStep(mainTurnState.currentStep);
    updatePreviousButton();
  });

  showStep(mainTurnState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", () => {
      navigateTo("home");
      renderCurrentPage();
    });

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", () => {
      navigateTo("bot-actions");
      renderCurrentPage();
    });
}

function renderCurrentPage() {
  const route = getCurrentRoute();

  switch (route) {
    case "bot-actions-realm-selection":
      renderBotActionsRealmSelection();
      break;

    case "bot-actions":
      renderBotActionsMenu();
      break;

    case "bot-specific-action":
      renderSpecificActionMenu();
      break;

    case "bot-main-turn":
      renderMainTurnStructure();
      break;

    case "bot-action":
      renderBotAction();
      break;

    case "bot-realm-targeting":
      renderBotRealmTargetingMenu({
        page,

        onMainMenu: () => {
          navigateTo("home");
          renderCurrentPage();
        },

        onMilitaryChart: (realmId) => {
          renderTargetingChart({
            page,
            realmId,
            chartType: "military",

            onBack: () => {
              renderCurrentPage();
            }
          });
        },

        onDiplomaticChart: (realmId) => {
          renderTargetingChart({
            page,
            realmId,
            chartType: "diplomatic",

            onBack: () => {
              renderCurrentPage();
            }
          });
        }
      });
      break;
    
    case "credits":
      renderCredits();
      break;

    case "player-resolutions":
      if (
        currentPlayerResolution ===
        "land-battle"
      ) {
        renderPlayerLandBattleResolution({
          page,

          onMainMenu: () => {
            currentPlayerResolution = null;

            navigateTo("home");
            renderCurrentPage();
          },

          onPlayerResolutionsMenu: () => {
            currentPlayerResolution = null;

            renderCurrentPage();
          },

          onBotLandBattle: () => {
            currentPlayerResolution = null;

            openBotAction(
              "land-battle",
              {
                returnRoute:
                  "player-resolutions"
              }
            );
          }
        });

        break;
      }

      if (
        currentPlayerResolution ===
        "naval-battle"
      ) {
        renderPlayerNavalBattleResolution({
          page,

          onMainMenu: () => {
            currentPlayerResolution = null;

            navigateTo("home");
            renderCurrentPage();
          },

          onPlayerResolutionsMenu: () => {
            currentPlayerResolution = null;

            renderCurrentPage();
          },

          onBotNavalBattle: () => {
            currentPlayerResolution = null;

            openBotAction(
              "naval-battle",
              {
                returnRoute:
                  "player-resolutions"
              }
            );
          }
        });

        break;
      }

      if (
        currentPlayerResolution ===
        "peace-resolution"
      ) {
        renderPlayerPeaceResolution({
          page,

          onMainMenu: () => {
            currentPlayerResolution = null;

            navigateTo("home");
            renderCurrentPage();
          },

          onPlayerResolutionsMenu: () => {
            currentPlayerResolution = null;

            renderCurrentPage();
          },

          onBotPeace: () => {
            openBotAction(
              "peace",
              {
                returnRoute:
                  "player-resolutions"
              }
            );
          }
        });

        break;
      }

      renderPlayerResolutionsMenu({
        page,

        onMainMenu: () => {
          currentPlayerResolution = null;

          navigateTo("home");
          renderCurrentPage();
        },

        onLandBattle: () => {
          resetPlayerLandBattleState();

          currentPlayerResolution =
            "land-battle";

          renderCurrentPage();
        },

        onNavalBattle: () => {
          resetPlayerNavalBattleState();

          currentPlayerResolution =
            "naval-battle";

          renderCurrentPage();
        },

        onPeaceResolution: () => {
          resetPlayerPeaceResolutionState();

          currentPlayerResolution =
            "peace-resolution";

          renderCurrentPage();
        }
      });
      break;

    default:
      renderHome();
  }
}

renderSettings();
renderCurrentPage();
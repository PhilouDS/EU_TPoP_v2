import { t } from "../../core/i18n.js";
import { formatIcons } from "../../core/icons.js";
import {
  renderQuestion,
  renderAction,
  renderGoTo,
  renderDieRoll,
  renderEnd
} from "../../core/diagram-engine.js";
import { DICE, rollDie } from "../../core/dice.js";
import { DEFEND_STEPS } from "./data/defend.js";
import { SIEGE_STEPS } from "./data/siege.js";
import { SPY_STEPS } from "./data/spy.js";
import { COLONIZE_STEPS } from "./data/colonize.js";
import { UNREST_STEPS } from "./data/unrest.js";
import { CONVERT_STEPS } from "./data/convert.js";
import { FOCUS_STEPS } from "./data/focus.js";
import { IDEA_STEPS } from "./data/idea.js";
import { PAPAL_CURIA_STEPS } from "./data/papal-curia.js";
import { EVENT_STEPS } from "./data/event.js";
import { NAVAL_BATTLE_STEPS } from "./data/naval-battle.js";
import { LAND_BATTLE_STEPS } from "./data/land-battle.js";
import { EXPLORE_STEPS } from "./data/explore.js";
import { NAVAL_STEPS } from "./data/naval.js";
import { PEACE_STEPS } from "./data/peace.js";
import { DIPLOMACY_STEPS } from "./data/diplomacy.js";
import { MILITARY_STEPS } from "./data/military.js";
import {
  PEACE_REBELS_PHASE,
  PEACE_REBELS_STEPS
} from "./data/peace-rebels.js";
import {
  INCOME_UPKEEP_PHASE,
  INCOME_UPKEEP_STEPS
} from "./data/income-upkeep.js";
import {
  CLEANUP_PHASE,
  CLEANUP_STEPS
} from "./data/cleanup.js";
import {
  END_OF_AGE_PHASE,
  END_OF_AGE_STEPS
} from "./data/end-of-age.js";
import {
  FINAL_SCORING_PHASE,
  FINAL_SCORING_STEPS
} from "./data/final-scoring.js";

// ========================================================
//  INITIALIZE STATE
// ========================================================

let defendState = {
  currentStep: "anyInvaders",
  stepHistory: [],
  returnedCall: null
};

let siegeState = {
  currentStep: "siegeProvinces",
  stepHistory: []
};

let spyState = {
  currentStep: "atWarWithOpponent",
  stepHistory: []
};

let colonizeState = {
  currentStep: "has2ColonistsAndConnectedClaim",
  stepHistory: []
};

let unrestState = {
  currentStep: "ownsProvincesWithUnrest",
  stepHistory: []
};

let convertState = {
  currentStep: "anyAreasWithReligiousDissent",
  stepHistory: []
};

let focusState = {
  currentStep: "cubeInFocusAreaAlready",
  stepHistory: []
};

let ideaState = {
  currentStep: "cubeInNonEconomicFocusArea",
  stepHistory: [],
  selectedFocusType: null,
  selectedRollValue: null
}

let papalCuriaState = {
  currentStep: "hasCatholicStateReligion",
  stepHistory: []
};

let eventState = {
  currentStep: "alreadyTakenEventAction",
  stepHistory: []
};

let navalBattleState = {
  currentStep: "anyEnemyIsPr",
  stepHistory: []
};

let landBattleState = {
  currentStep: "anyEnemyIsPr",
  stepHistory: []
};

let exploreState = {
  currentStep: "has3ColonialClaims",
  stepHistory: [],
  returnedCall: null
};

let navalState = {
  currentStep: "hostileSeaZoneAdjacent",
  stepHistory: [],
  returnedCall: null
};

let peaceState = {
  currentStep: "automaticWhitePeace",
  stepHistory: []
};

let diplomacyState = {
  currentStep: "allianceAndRoyalMarriageOnAdjacentNpr",
  stepHistory: [],
  returnedCall: null
};

let militaryState = {
  currentStep: "atWar",
  stepHistory: [],
  returnedCall: null
};

let peaceRebelsState = {
  currentStep: PEACE_REBELS_PHASE.startStep,
  stepHistory: [],
  returnedCall: null
};

let incomeUpkeepState = {
  currentStep: INCOME_UPKEEP_PHASE.startStep,
  stepHistory: []
};

let cleanupState = {
  currentStep: CLEANUP_PHASE.startStep,
  stepHistory: []
};

let endOfAgeState = {
  currentStep: END_OF_AGE_PHASE.startStep,
  stepHistory: []
};

let finalScoringState = {
  currentStep: FINAL_SCORING_PHASE.startStep,
  stepHistory: []
};

// ========================================================
//  RESET STATE
// ========================================================

export function resetDefendState() {
  defendState = {
    currentStep: "anyInvaders",
    stepHistory: [],
    returnedCall: null
  };
}

export function resetSiegeState() {
  siegeState = {
    currentStep: "siegeProvinces",
    stepHistory: []
  };
}

export function resetSpyState() {
  spyState = {
    currentStep: "atWarWithOpponent",
    stepHistory: []
  };
}

export function resetColonizeState() {
  colonizeState = {
    currentStep: "has2ColonistsAndConnectedClaim",
    stepHistory: []
  };
}

export function resetUnrestState() {
  unrestState = {
    currentStep: "ownsProvincesWithUnrest",
    stepHistory: []
  };
}

export function resetConvertState() {
  convertState = {
    currentStep: "anyAreasWithReligiousDissent",
    stepHistory: []
  };
}

export function resetFocusState() {
  focusState = {
    currentStep: "cubeInFocusAreaAlready",
    stepHistory: []
  };
}

export function resetIdeaState() {
  ideaState = {
    currentStep: "cubeInNonEconomicFocusArea",
    stepHistory: [],
    selectedFocusType: null,
    selectedRollValue: null
  };
}

export function resetPapalCuriaState() {
  papalCuriaState = {
    currentStep: "hasCatholicStateReligion",
    stepHistory: []
  };
}

export function resetEventState() {
  eventState = {
    currentStep: "alreadyTakenEventAction",
    stepHistory: []
  };
}

export function resetNavalBattleState() {
  navalBattleState = {
    currentStep: "anyEnemyIsPr",
    stepHistory: []
  };
}

export function resetLandBattleState() {
  landBattleState = {
    currentStep: "anyEnemyIsPr",
    stepHistory: []
  };
}

export function resetExploreState() {
  exploreState = {
    currentStep: "has3ColonialClaims",
    stepHistory: [],
    returnedCall: null
  };
}

export function resetNavalState() {
  navalState = {
    currentStep: "hostileSeaZoneAdjacent",
    stepHistory: [],
    returnedCall: null
  };
}

export function resetPeaceState() {
  peaceState = {
    currentStep: "automaticWhitePeace",
    stepHistory: []
  };
}

export function resetDiplomacyState() {
  diplomacyState = {
    currentStep: "allianceAndRoyalMarriageOnAdjacentNpr",
    stepHistory: [],
    returnedCall: null
  };
}

export function resetMilitaryState(
  entryStep = "atWar"
) {
  militaryState = {
    currentStep: entryStep,
    stepHistory: [],
    returnedCall: null
  };
}

export function resetPeaceRebelsState() {
  peaceRebelsState = {
    currentStep: PEACE_REBELS_PHASE.startStep,
    stepHistory: [],
    returnedCall: null
  };
}

export function resetIncomeUpkeepState() {
  incomeUpkeepState = {
    currentStep: INCOME_UPKEEP_PHASE.startStep,
    stepHistory: []
  };
}

export function resetCleanupState() {
  cleanupState = {
    currentStep: CLEANUP_PHASE.startStep,
    stepHistory: []
  };
}

export function resetEndOfAgeState() {
  endOfAgeState = {
    currentStep: END_OF_AGE_PHASE.startStep,
    stepHistory: []
  };
}

export function resetFinalScoringState() {
  finalScoringState = {
    currentStep: FINAL_SCORING_PHASE.startStep,
    stepHistory: []
  };
}

// ========================================================
//  RESUME ACTIONS
// ========================================================

export function resumeDefendAfterCall(
  step,
  result = null
) {
  const node = DEFEND_STEPS[step];

  if (!node || node.navigation !== "call") {
    console.warn(
      `Cannot resume DEFEND after call at step: ${step}`
    );
    return;
  }

  defendState.currentStep = step;

  defendState.returnedCall = {
    step,
    result
  };
}

export function resumeExploreAfterCall(
  step,
  result = null
) {
  const node = EXPLORE_STEPS[step];

  if (!node || node.navigation !== "call") {
    console.warn(
      `Cannot resume EXPLORE after call at step: ${step}`
    );
    return;
  }

  exploreState.currentStep = step;

  exploreState.returnedCall = {
    step,
    result
  };
}

export function resumeNavalAfterCall(
  step,
  result = null
) {
  const node = NAVAL_STEPS[step];

  if (!node || node.navigation !== "call") {
    console.warn(
      `Cannot resume NAVAL after call at step: ${step}`
    );
    return;
  }

  navalState.currentStep = step;

  navalState.returnedCall = {
    step,
    result
  };
}

export function resumeDiplomacyAfterCall(
  step,
  result = null
) {
  const node = DIPLOMACY_STEPS[step];

  if (!node || node.navigation !== "call") {
    console.warn(
      `Cannot resume DIPLOMACY after call at step: ${step}`
    );
    return;
  }

  diplomacyState.currentStep = step;

  diplomacyState.returnedCall = {
    step,
    result
  };
}

export function resumeMilitaryAfterCall(
  step,
  result = null
) {
  const node = MILITARY_STEPS[step];

  if (!node || node.navigation !== "call") {
    console.warn(
      `Cannot resume MILITARY after call at step: ${step}`
    );
    return;
  }

  militaryState.currentStep = step;

  militaryState.returnedCall = {
    step,
    result
  };
}

export function resumePeaceRebelsAfterCall(
  step,
  result = null
) {
  const node =
    PEACE_REBELS_STEPS[step];

  if (!node) {
    console.warn(
      `Cannot resume PEACE & REBELS at step: ${step}`
    );
    return;
  }

  peaceRebelsState.currentStep =
    step;

  peaceRebelsState.returnedCall = {
    step,
    result
  };
}

// ========================================================
//  RENDER ACTIONS
// ========================================================

export function renderDefendAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onExternalAction
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.defend")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.defend.source")}
      </div>

      <div id="diagram-container"></div>

      <div
        id="diagram-reminder"
        class="diagram-note defend-definition"
        hidden
      ></div>

      <button
        id="previous-step-button"
        class="menu-button"
        type="button"
        hidden
      >
        ${t("common.previousStep")}
      </button>

      <div class="diagram-menu-navigation">
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.botActionsMenu")}
        </button>
      </div>
    </section>
  `;

  const diagramContainer =
    document.querySelector("#diagram-container");

  const diagramReminder =
    document.querySelector("#diagram-reminder");

  const previousStepButton =
    document.querySelector("#previous-step-button");

  function updatePreviousButton() {
    previousStepButton.hidden =
      defendState.stepHistory.length === 0;
  }

  function updateReminder(node) {
    if (!node.reminderKey) {
      diagramReminder.hidden = true;
      diagramReminder.innerHTML = "";
      return;
    }

    diagramReminder.innerHTML =
      formatIcons(t(node.reminderKey));

    diagramReminder.hidden = false;
  }

  function goToStep(step) {
    defendState.stepHistory.push(
      defendState.currentStep
    );

    defendState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showReturnedCall(node) {
    const styleClass = node.style
      ? ` diagram-goto--${node.style}`
      : "";

    diagramContainer.innerHTML = `
      <div class="diagram-step">
        <div
          class="diagram-goto diagram-goto-static${styleClass}"
        >
          ${formatIcons(t(node.textKey))}
        </div>

        ${(node.detailKeys ?? []).map((key) => `
          <div class="diagram-detail">
            ${formatIcons(t(key))}
          </div>
        `).join("")}

        <button
          id="returned-call-confirm-button"
          class="diagram-confirm"
          type="button"
        >
          ${t("common.confirm")}
        </button>
      </div>
    `;

    document
      .querySelector("#returned-call-confirm-button")
      .addEventListener("click", () => {
        goToStep(node.nextAfterReturn);
      });
  }

  function showExternal(node, step) {
    const returnedFromThisCall =
      node.navigation === "call"
      && defendState.returnedCall?.step === step;

    if (returnedFromThisCall) {
      showReturnedCall(node);
      return;
    }

    renderGoTo({
      container: diagramContainer,
      text: formatIcons(t(node.textKey)),
      details: (node.detailKeys ?? []).map((key) =>
        formatIcons(t(key))
      ),
      onClick: () => {
        onExternalAction?.(node, step);
      }
    });

    if (node.style) {
      diagramContainer
        .querySelector(".diagram-goto")
        ?.classList.add(
          `diagram-goto--${node.style}`
        );
    }
  }

  function showStep(step) {
    const node = DEFEND_STEPS[step];

    if (!node) {
      console.warn(`Unknown DEFEND step: ${step}`);
      return;
    }

    updateReminder(node);

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "roll":
        renderDieRoll({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          die: DICE[node.die],
          choices: node.choices,
          rollLabel: t("common.rollDie"),
          resultLabel: t("common.dieResult"),
          continueLabel: t("common.continue"),
          formatFace: (label) => formatIcons(label),
          onResolve: (choice) => {
            goToStep(choice.target);
          }
        });
        break;

      case "action":
        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "external":
        showExternal(node, step);
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (defendState.stepHistory.length === 0) {
      return;
    }

    if (
      defendState.returnedCall?.step
      === defendState.currentStep
    ) {
      defendState.returnedCall = null;
    }

    defendState.currentStep =
      defendState.stepHistory.pop();

    showStep(defendState.currentStep);
    updatePreviousButton();
  });

  showStep(defendState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", onBotActionsMenu);
}

export function renderSiegeAction({
  page,
  onMainMenu,
  onBotActionsMenu
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.siege")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.siege.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      siegeState.stepHistory.length === 0;
  }

  function goToStep(step) {
    siegeState.stepHistory.push(
      siegeState.currentStep
    );

    siegeState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showStep(step) {
    const node = SIEGE_STEPS[step];

    if (!node) {
      console.warn(`Unknown SIEGE step: ${step}`);
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "action":
        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (siegeState.stepHistory.length === 0) {
      return;
    }

    siegeState.currentStep =
      siegeState.stepHistory.pop();

    showStep(siegeState.currentStep);
    updatePreviousButton();
  });

  showStep(siegeState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", onBotActionsMenu);
}

export function renderSpyAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onExternalAction,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.spy")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.spy.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      spyState.stepHistory.length === 0;
  }

  function goToStep(step) {
    spyState.stepHistory.push(
      spyState.currentStep
    );

    spyState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showStep(step) {
    const node = SPY_STEPS[step];

    if (!node) {
      console.warn(`Unknown SPY step: ${step}`);
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "action":
        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "external":
        renderGoTo({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          onClick: () => {
            onExternalAction(node, step);
          }
        });
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onComplete) {
          const completeActionButton =
            document.createElement("button");

          completeActionButton.className =
            "diagram-confirm";

          completeActionButton.type = "button";

          completeActionButton.textContent =
            t("common.completeAction");

          completeActionButton.addEventListener(
            "click",
            onComplete
          );

          diagramContainer.appendChild(
            completeActionButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (spyState.stepHistory.length === 0) {
      return;
    }

    spyState.currentStep =
      spyState.stepHistory.pop();

    showStep(spyState.currentStep);
    updatePreviousButton();
  });

  showStep(spyState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", onBotActionsMenu);
}

export function renderColonizeAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onExternalAction,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.colonize")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.colonize.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      colonizeState.stepHistory.length === 0;
  }

  function goToStep(step) {
    colonizeState.stepHistory.push(
      colonizeState.currentStep
    );

    colonizeState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showStep(step) {
    const node = COLONIZE_STEPS[step];

    if (!node) {
      console.warn(`Unknown COLONIZE step: ${step}`);
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "action":
        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "external":
        renderGoTo({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          onClick: () => {
            onExternalAction(node, step);
          }
        });
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onComplete) {
          const completeActionButton =
            document.createElement("button");

          completeActionButton.className =
            "diagram-confirm";

          completeActionButton.type = "button";

          completeActionButton.textContent =
            t("common.completeAction");

          completeActionButton.addEventListener(
            "click",
            onComplete
          );

          diagramContainer.appendChild(
            completeActionButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (colonizeState.stepHistory.length === 0) {
      return;
    }

    colonizeState.currentStep =
      colonizeState.stepHistory.pop();

    showStep(colonizeState.currentStep);
    updatePreviousButton();
  });

  showStep(colonizeState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", onBotActionsMenu);
}

export function renderUnrestAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onComplete = null,
  onPerformSecondAction = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.unrest")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.unrest.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      unrestState.stepHistory.length === 0;
  }

  function goToStep(step) {
    unrestState.stepHistory.push(
      unrestState.currentStep
    );

    unrestState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showStep(step) {
    const node = UNREST_STEPS[step];

    if (!node) {
      console.warn(`Unknown UNREST step: ${step}`);
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "action":
        if (step === "performSecondAction") {
          renderAction({
            container: diagramContainer,
            text: formatIcons(t(node.textKey)),
            confirmLabel: onPerformSecondAction
              ? t("common.confirm")
              : null,
            onConfirm: onPerformSecondAction
              ? onPerformSecondAction
              : null
          });

          break;
        }

        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onComplete) {
          const completeActionButton =
            document.createElement("button");

          completeActionButton.className =
            "diagram-confirm";

          completeActionButton.type = "button";

          completeActionButton.textContent =
            t("common.completeAction");

          completeActionButton.addEventListener(
            "click",
            onComplete
          );

          diagramContainer.appendChild(
            completeActionButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (unrestState.stepHistory.length === 0) {
      return;
    }

    unrestState.currentStep =
      unrestState.stepHistory.pop();

    showStep(unrestState.currentStep);
    updatePreviousButton();
  });

  showStep(unrestState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", onBotActionsMenu);
}

export function renderConvertAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onComplete = null,
  onPerformSecondAction = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.convert")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.convert.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      convertState.stepHistory.length === 0;
  }

  function goToStep(step) {
    convertState.stepHistory.push(
      convertState.currentStep
    );

    convertState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showStep(step) {
    const node = CONVERT_STEPS[step];

    if (!node) {
      console.warn(`Unknown CONVERT step: ${step}`);
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "action":
        if (step === "performSecondAction") {
          renderAction({
            container: diagramContainer,
            text: formatIcons(t(node.textKey)),
            confirmLabel: onPerformSecondAction
              ? t("common.confirm")
              : null,
            onConfirm: onPerformSecondAction
              ? onPerformSecondAction
              : null
          });

          break;
        }

        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onComplete) {
          const completeActionButton =
            document.createElement("button");

          completeActionButton.className =
            "diagram-confirm";

          completeActionButton.type = "button";

          completeActionButton.textContent =
            t("common.completeAction");

          completeActionButton.addEventListener(
            "click",
            onComplete
          );

          diagramContainer.appendChild(
            completeActionButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (convertState.stepHistory.length === 0) {
      return;
    }

    convertState.currentStep =
      convertState.stepHistory.pop();

    showStep(convertState.currentStep);
    updatePreviousButton();
  });

  showStep(convertState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", onBotActionsMenu);
}

export function renderFocusAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.focus")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.focus.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      focusState.stepHistory.length === 0;
  }

  function goToStep(step) {
    focusState.stepHistory.push(
      focusState.currentStep
    );

    focusState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showStep(step) {
    const node = FOCUS_STEPS[step];

    if (!node) {
      console.warn(`Unknown FOCUS step: ${step}`);
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "action":
        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onComplete) {
          const completeActionButton =
            document.createElement("button");

          completeActionButton.className =
            "diagram-confirm";

          completeActionButton.type = "button";

          completeActionButton.textContent =
            t("common.completeAction");

          completeActionButton.addEventListener(
            "click",
            onComplete
          );

          diagramContainer.appendChild(
            completeActionButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (focusState.stepHistory.length === 0) {
      return;
    }

    focusState.currentStep =
      focusState.stepHistory.pop();

    showStep(focusState.currentStep);
    updatePreviousButton();
  });

  showStep(focusState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", onBotActionsMenu);
}

export function renderIdeaAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.idea")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.idea.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      ideaState.stepHistory.length === 0;
  }

  function goToStep(step) {
    ideaState.stepHistory.push(
      ideaState.currentStep
    );

    if (step === "focusTypeRoll") {
      ideaState.selectedFocusType = null;
      ideaState.selectedRollValue = null;
    }

    ideaState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function getFocusTypeLabel(focusType) {
    return t(
      `botActions.idea.focusTypes.${focusType}`
    );
  }

  function selectFocusType(
    focusType,
    rollValue = null
  ) {
    ideaState.selectedFocusType = focusType;
    ideaState.selectedRollValue = rollValue;

    showStep("focusTypeRoll");
    updatePreviousButton();
  }

  function showFocusTypeRoll(node) {
    const selectedFocusType =
      ideaState.selectedFocusType;

    const selectedRollValue =
      ideaState.selectedRollValue;

    const selectedFocusLabel =
      selectedFocusType
        ? getFocusTypeLabel(selectedFocusType)
        : null;

    diagramContainer.innerHTML = `
      <div class="diagram-step">
        <div class="diagram-question">
          ${formatIcons(t(node.textKey))}
        </div>

        <div class="idea-focus-map">
          <div class="idea-focus-map-row">
            <span class="idea-focus-map-range">
              1–2
            </span>

            <span>
              ${getFocusTypeLabel("administrative")}
            </span>
          </div>

          <div class="idea-focus-map-row">
            <span class="idea-focus-map-range">
              3–4
            </span>

            <span>
              ${getFocusTypeLabel("diplomatic")}
            </span>
          </div>

          <div class="idea-focus-map-row">
            <span class="idea-focus-map-range">
              5–6
            </span>

            <span>
              ${getFocusTypeLabel("military")}
            </span>
          </div>
        </div>

        ${selectedFocusType
          ? `
            <div class="diagram-die-result">
              ${selectedRollValue !== null
                ? `
                  <div class="diagram-die-result-label">
                    ${t("common.dieResult")}
                    <span class="diagram-die-face">
                      ${selectedRollValue}
                    </span>
                  </div>
                `
                : ""
              }

              <div class="diagram-detail">
                ${t("botActions.idea.selectedFocusType")}:
                <strong>${selectedFocusLabel}</strong>
              </div>
            </div>

            <div class="diagram-question">
              ${formatIcons(
                t(
                  "botActions.idea.availableIdeasMatchingFocus"
                )
              )}
            </div>

            <div class="diagram-choices">
              <button
                id="idea-focus-yes-button"
                class="diagram-choice"
                type="button"
              >
                ${t("common.yes")}
              </button>

              <button
                id="idea-focus-no-button"
                class="diagram-choice"
                type="button"
              >
                ${t("common.no")}
              </button>
            </div>
          `
          : `
            <div class="diagram-die-controls">
              <button
                id="idea-roll-button"
                class="diagram-roll-button"
                type="button"
              >
                <span class="diagram-roll-icon">
                  🎲
                </span>

                <span class="diagram-roll-label">
                  ${t("common.rollDie")}
                </span>
              </button>
            </div>

            <div class="idea-focus-manual-label">
              ${t("botActions.idea.manualSelection")}
            </div>

            <div class="idea-focus-choices">
              ${node.choices
                .map(
                  (choice, index) => `
                    <button
                      class="diagram-choice idea-focus-choice"
                      type="button"
                      data-choice-index="${index}"
                    >
                      ${getFocusTypeLabel(
                        choice.focusType
                      )}
                    </button>
                  `
                )
                .join("")}
            </div>
          `
        }
      </div>
    `;

    if (!selectedFocusType) {
      document
        .querySelector("#idea-roll-button")
        .addEventListener("click", () => {
          const face = rollDie(
            DICE[node.die]
          );

          const choice = node.choices.find(
            (candidate) =>
              candidate.values.includes(
                face.value
              )
          );

          if (!choice) {
            console.warn(
              `No IDEA focus choice for die value: ${face.value}`
            );
            return;
          }

          selectFocusType(
            choice.focusType,
            face.value
          );
        });

      document
        .querySelectorAll(
          ".idea-focus-choice"
        )
        .forEach((button) => {
          button.addEventListener(
            "click",
            () => {
              const choice =
                node.choices[
                  Number(
                    button.dataset.choiceIndex
                  )
                ];

              selectFocusType(
                choice.focusType
              );
            }
          );
        });

      return;
    }

    document
      .querySelector("#idea-focus-yes-button")
      .addEventListener("click", () => {
        goToStep("pickIdea");
      });

    document
      .querySelector("#idea-focus-no-button")
      .addEventListener("click", () => {
        ideaState.selectedFocusType = null;
        ideaState.selectedRollValue = null;

        showStep("focusTypeRoll");
        updatePreviousButton();
      });
  }

  function showStep(step) {
    const node = IDEA_STEPS[step];

    if (!node) {
      console.warn(`Unknown IDEA step: ${step}`);
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "roll":
        showFocusTypeRoll(node);
        break;

      case "action":
        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onComplete) {
          const completeActionButton =
            document.createElement("button");

          completeActionButton.className =
            "diagram-confirm";

          completeActionButton.type = "button";

          completeActionButton.textContent =
            t("common.completeAction");

          completeActionButton.addEventListener(
            "click",
            onComplete
          );

          diagramContainer.appendChild(
            completeActionButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (ideaState.stepHistory.length === 0) {
      return;
    }

    ideaState.currentStep =
      ideaState.stepHistory.pop();

    showStep(ideaState.currentStep);
    updatePreviousButton();
  });

  showStep(ideaState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", onBotActionsMenu);
}

export function renderPapalCuriaAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onExternalAction,
  onComplete = null,
  onPerformSecondAction = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.papalCuria")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.papalCuria.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      papalCuriaState.stepHistory.length === 0;
  }

  function goToStep(step) {
    papalCuriaState.stepHistory.push(
      papalCuriaState.currentStep
    );

    papalCuriaState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showStep(step) {
    const node = PAPAL_CURIA_STEPS[step];

    if (!node) {
      console.warn(`Unknown PAPAL CURIA step: ${step}`);
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "action":
        if (step === "performSecondAction") {
          renderAction({
            container: diagramContainer,
            text: formatIcons(t(node.textKey)),
            confirmLabel: onPerformSecondAction
              ? t("common.confirm")
              : null,
            onConfirm: onPerformSecondAction
              ? onPerformSecondAction
              : null
          });

          break;
        }

        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "external":
        renderGoTo({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          onClick: () => {
            onExternalAction(node, step);
          }
        });
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onComplete) {
          const completeActionButton =
            document.createElement("button");

          completeActionButton.className =
            "diagram-confirm";

          completeActionButton.type = "button";

          completeActionButton.textContent =
            t("common.completeAction");

          completeActionButton.addEventListener(
            "click",
            onComplete
          );

          diagramContainer.appendChild(
            completeActionButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (papalCuriaState.stepHistory.length === 0) {
      return;
    }

    papalCuriaState.currentStep =
      papalCuriaState.stepHistory.pop();

    showStep(papalCuriaState.currentStep);
    updatePreviousButton();
  });

  showStep(papalCuriaState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", onBotActionsMenu);
}

export function renderEventAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onRestartMainTurn,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.event")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.event.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      eventState.stepHistory.length === 0;
  }

  function goToStep(step) {
    eventState.stepHistory.push(
      eventState.currentStep
    );

    eventState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showStep(step) {
    const node = EVENT_STEPS[step];

    if (!node) {
      console.warn(`Unknown EVENT step: ${step}`);
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "roll":
        renderDieRoll({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          die: DICE[node.die],
          choices: node.choices,
          rollLabel: t("common.rollDie"),
          resultLabel: t("common.dieResult"),
          continueLabel: t("common.continue"),
          formatFace: (label) => formatIcons(label),
          onResolve: (choice) => {
            goToStep(choice.target);
          }
        });
        break;

      case "action":
        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "external":
        renderGoTo({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          onClick: onRestartMainTurn
        });
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onComplete) {
          const completeActionButton =
            document.createElement("button");

          completeActionButton.className =
            "diagram-confirm";

          completeActionButton.type = "button";

          completeActionButton.textContent =
            t("common.completeAction");

          completeActionButton.addEventListener(
            "click",
            onComplete
          );

          diagramContainer.appendChild(
            completeActionButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (eventState.stepHistory.length === 0) {
      return;
    }

    eventState.currentStep =
      eventState.stepHistory.pop();

    showStep(eventState.currentStep);
    updatePreviousButton();
  });

  showStep(eventState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", onBotActionsMenu);
}

export function renderNavalBattleResolution({
  page,
  onMainMenu,
  onBotActionsMenu,
  onReturn = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.navalBattle")}
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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      navalBattleState.stepHistory.length === 0;
  }

  function goToStep(step) {
    navalBattleState.stepHistory.push(
      navalBattleState.currentStep
    );

    navalBattleState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showStep(step) {
    const node = NAVAL_BATTLE_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown NAVAL BATTLE step: ${step}`
      );
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "action":
        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "return":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onReturn) {
          const returnButton =
            document.createElement("button");

          returnButton.className =
            "diagram-confirm";

          returnButton.type = "button";

          returnButton.textContent =
            t("common.confirm");

          returnButton.addEventListener(
            "click",
            onReturn
          );

          diagramContainer.appendChild(
            returnButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener(
    "click",
    () => {
      if (
        navalBattleState.stepHistory.length === 0
      ) {
        return;
      }

      navalBattleState.currentStep =
        navalBattleState.stepHistory.pop();

      showStep(navalBattleState.currentStep);
      updatePreviousButton();
    }
  );

  showStep(navalBattleState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener(
      "click",
      onBotActionsMenu
    );
}

export function renderLandBattleResolution({
  page,
  onMainMenu,
  onBotActionsMenu,
  onReturn = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.landBattle")}
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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      landBattleState.stepHistory.length === 0;
  }

  function goToStep(step) {
    landBattleState.stepHistory.push(
      landBattleState.currentStep
    );

    landBattleState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showStep(step) {
    const node = LAND_BATTLE_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown LAND BATTLE step: ${step}`
      );
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "action":
        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "return":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onReturn) {
          const returnButton =
            document.createElement("button");

          returnButton.className =
            "diagram-confirm";

          returnButton.type = "button";

          returnButton.textContent =
            t("common.confirm");

          returnButton.addEventListener(
            "click",
            onReturn
          );

          diagramContainer.appendChild(
            returnButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener(
    "click",
    () => {
      if (
        landBattleState.stepHistory.length === 0
      ) {
        return;
      }

      landBattleState.currentStep =
        landBattleState.stepHistory.pop();

      showStep(landBattleState.currentStep);
      updatePreviousButton();
    }
  );

  showStep(landBattleState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener(
      "click",
      onBotActionsMenu
    );
}

export function renderExploreAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onExternalAction,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.explore")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.explore.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      exploreState.stepHistory.length === 0;
  }

  function goToStep(step) {
    exploreState.stepHistory.push(
      exploreState.currentStep
    );

    exploreState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showReturnedCall(node) {
    const styleClass = node.style
      ? ` diagram-goto--${node.style}`
      : "";

    diagramContainer.innerHTML = `
      <div class="diagram-step">
        <div
          class="diagram-goto diagram-goto-static${styleClass}"
        >
          ${formatIcons(t(node.textKey))}
        </div>

        ${(node.detailKeys ?? []).map((key) => `
          <div class="diagram-detail">
            ${formatIcons(t(key))}
          </div>
        `).join("")}

        <button
          id="returned-call-confirm-button"
          class="diagram-confirm"
          type="button"
        >
          ${t("common.confirm")}
        </button>
      </div>
    `;

    document
      .querySelector("#returned-call-confirm-button")
      .addEventListener("click", () => {
        goToStep(node.nextAfterReturn);
      });
  }

  function showExternal(node, step) {
    const returnedFromThisCall =
      node.navigation === "call"
      && exploreState.returnedCall?.step === step;

    if (returnedFromThisCall) {
      showReturnedCall(node);
      return;
    }

    renderGoTo({
      container: diagramContainer,
      text: formatIcons(t(node.textKey)),
      details: (node.detailKeys ?? []).map((key) =>
        formatIcons(t(key))
      ),
      onClick: () => {
        onExternalAction?.(node, step);
      }
    });

    if (node.style) {
      diagramContainer
        .querySelector(".diagram-goto")
        ?.classList.add(
          `diagram-goto--${node.style}`
        );
    }
  }

  function showStep(step) {
    const node = EXPLORE_STEPS[step];

    if (!node) {
      console.warn(`Unknown EXPLORE step: ${step}`);
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "roll":
        renderDieRoll({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          die: DICE[node.die],
          choices: node.choices,
          rollLabel: t("common.rollDie"),
          resultLabel: t("common.dieResult"),
          continueLabel: t("common.continue"),
          formatFace: (label) =>
            formatIcons(label),
          rollImageSrc:
            "assets/img/explore_dice.png",
          rollImageAlt: "",
          onResolve: (choice) => {
            goToStep(choice.target);
          }
        });
        break;

      case "action":
        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "external":
        showExternal(node, step);
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onComplete) {
          const completeActionButton =
            document.createElement("button");

          completeActionButton.className =
            "diagram-confirm";

          completeActionButton.type = "button";

          completeActionButton.textContent =
            t("common.completeAction");

          completeActionButton.addEventListener(
            "click",
            onComplete
          );

          diagramContainer.appendChild(
            completeActionButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (exploreState.stepHistory.length === 0) {
      return;
    }

    if (
      exploreState.returnedCall?.step
      === exploreState.currentStep
    ) {
      exploreState.returnedCall = null;
    }

    exploreState.currentStep =
      exploreState.stepHistory.pop();

    showStep(exploreState.currentStep);
    updatePreviousButton();
  });

  showStep(exploreState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", onBotActionsMenu);
}

export function renderNavalAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onExternalAction,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.naval")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.naval.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      navalState.stepHistory.length === 0;
  }

  function goToStep(step) {
    navalState.stepHistory.push(
      navalState.currentStep
    );

    navalState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showReturnedCall(node) {
    const styleClass = node.style
      ? ` diagram-goto--${node.style}`
      : "";

    diagramContainer.innerHTML = `
      <div class="diagram-step">
        <div
          class="diagram-goto diagram-goto-static${styleClass}"
        >
          ${formatIcons(t(node.textKey))}
        </div>

        ${(node.detailKeys ?? []).map((key) => `
          <div class="diagram-detail">
            ${formatIcons(t(key))}
          </div>
        `).join("")}

        <button
          id="returned-call-confirm-button"
          class="diagram-confirm"
          type="button"
        >
          ${t("common.confirm")}
        </button>
      </div>
    `;

    document
      .querySelector("#returned-call-confirm-button")
      .addEventListener("click", () => {
        goToStep(node.nextAfterReturn);
      });
  }

  function showExternal(node, step) {
    const returnedFromThisCall =
      node.navigation === "call"
      && navalState.returnedCall?.step === step;

    if (returnedFromThisCall) {
      showReturnedCall(node);
      return;
    }

    renderGoTo({
      container: diagramContainer,
      text: formatIcons(t(node.textKey)),
      details: (node.detailKeys ?? []).map((key) =>
        formatIcons(t(key))
      ),
      onClick: () => {
        onExternalAction?.(node, step);
      }
    });

    if (node.style) {
      diagramContainer
        .querySelector(".diagram-goto")
        ?.classList.add(
          `diagram-goto--${node.style}`
        );
    }
  }

  function showBlockedAction(node) {
    diagramContainer.innerHTML = `
      <div class="diagram-step">
        ${node.blocks.map((block) => `
          <div class="diagram-action">
            ${formatIcons(t(block.textKey))}
          </div>

          ${block.noteKey
            ? `
              <div class="diagram-note">
                ${formatIcons(t(block.noteKey))}
              </div>
            `
            : ""
          }
        `).join("")}

        <button
          id="diagram-blocks-confirm-button"
          class="diagram-confirm"
          type="button"
        >
          ${t("common.confirm")}
        </button>
      </div>
    `;

    document
      .querySelector("#diagram-blocks-confirm-button")
      .addEventListener("click", () => {
        goToStep(node.next);
      });
  }

  function showStep(step) {
    const node = NAVAL_STEPS[step];

    if (!node) {
      console.warn(`Unknown NAVAL step: ${step}`);
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "action":
        if (node.blocks) {
          showBlockedAction(node);
          break;
        }

        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "external":
        showExternal(node, step);
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onComplete) {
          const completeActionButton =
            document.createElement("button");

          completeActionButton.className =
            "diagram-confirm";

          completeActionButton.type = "button";

          completeActionButton.textContent =
            t("common.completeAction");

          completeActionButton.addEventListener(
            "click",
            onComplete
          );

          diagramContainer.appendChild(
            completeActionButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener("click", () => {
    if (navalState.stepHistory.length === 0) {
      return;
    }

    if (
      navalState.returnedCall?.step
      === navalState.currentStep
    ) {
      navalState.returnedCall = null;
    }

    navalState.currentStep =
      navalState.stepHistory.pop();

    showStep(navalState.currentStep);
    updatePreviousButton();
  });

  showStep(navalState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener("click", onBotActionsMenu);
}

export function renderPeaceResolution({
  page,
  onMainMenu,
  onBotActionsMenu,
  onReturn = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.peace")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.peace.intro")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      peaceState.stepHistory.length === 0;
  }

  function goToStep(step) {
    peaceState.stepHistory.push(
      peaceState.currentStep
    );

    peaceState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showSwapAction(node) {
    diagramContainer.innerHTML = `
      <div class="diagram-step">
        <div class="diagram-action peace-swap">
          <div class="peace-swap-intro">
            ${formatIcons(t(node.introKey))}
          </div>

          <div class="peace-swap-item">
            ${formatIcons(t(node.enemyKey))}
          </div>

          <div
            class="peace-swap-arrows"
            aria-hidden="true"
          >
            ▼▲
          </div>

          <div class="peace-swap-item">
            ${formatIcons(t(node.botKey))}
          </div>

          <div class="peace-swap-matching">
            ${formatIcons(t(node.matchingKey))}
          </div>
        </div>

        <button
          id="peace-swap-confirm-button"
          class="diagram-confirm"
          type="button"
        >
          ${t("common.confirm")}
        </button>
      </div>
    `;

    document
      .querySelector("#peace-swap-confirm-button")
      .addEventListener("click", () => {
        goToStep(node.next);
      });
  }

  function showStep(step) {
    const node = PEACE_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown PEACE step: ${step}`
      );
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          yesLabel: t("common.yes"),
          noLabel: t("common.no"),
          onYes: () => goToStep(node.yes),
          onNo: () => goToStep(node.no)
        });
        break;

      case "action":
        if (node.presentation === "swap") {
          showSwapAction(node);
          break;
        }

        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map((key) =>
            formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () => goToStep(node.next)
        });
        break;

      case "end":
        renderEnd({
          container: diagramContainer,
          text: formatIcons(t(node.textKey))
        });

        if (onReturn) {
          const returnButton =
            document.createElement("button");

          returnButton.className =
            "diagram-confirm";

          returnButton.type = "button";

          returnButton.textContent =
            t("common.confirm");

          returnButton.addEventListener(
            "click",
            onReturn
          );

          diagramContainer.appendChild(
            returnButton
          );
        }
        break;
    }
  }

  previousStepButton.addEventListener(
    "click",
    () => {
      if (
        peaceState.stepHistory.length === 0
      ) {
        return;
      }

      peaceState.currentStep =
        peaceState.stepHistory.pop();

      showStep(peaceState.currentStep);
      updatePreviousButton();
    }
  );

  showStep(peaceState.currentStep);
  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);

  document
    .querySelector("#bot-actions-menu-button")
    .addEventListener(
      "click",
      onBotActionsMenu
    );
}

export function renderDiplomacyAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onExternalAction,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.diplomacy")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.diplomacy.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      diplomacyState.stepHistory.length === 0;
  }

  function goToStep(step) {
    diplomacyState.stepHistory.push(
      diplomacyState.currentStep
    );

    diplomacyState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function showQuestion(node) {
    renderQuestion({
      container: diagramContainer,
      text: formatIcons(t(node.textKey)),
      note: node.noteKey
        ? formatIcons(t(node.noteKey))
        : null,
      yesLabel: t("common.yes"),
      noLabel: t("common.no"),
      onYes: () => goToStep(node.yes),
      onNo: () => goToStep(node.no)
    });

    const insertionPoint =
      diagramContainer.querySelector(
        ".diagram-note"
      )
      ?? diagramContainer.querySelector(
        ".diagram-choices"
      );

    (node.detailKeys ?? []).forEach((key) => {
      const detail =
        document.createElement("div");

      detail.className =
        "diagram-detail";

      detail.innerHTML =
        formatIcons(t(key));

      insertionPoint.before(detail);
    });
  }

  function formatBranchLabel(values) {
    if (values.length === 1) {
      return String(values[0]);
    }

    return `${values[0]}–${values[values.length - 1]}`;
  }

  function showRoll(node) {
    const die =
      node.die === "d6"
        ? DICE.standardD6
        : DICE[node.die];

    const choices =
      node.branches.map((branch) => ({
        values: branch.values,
        label: formatBranchLabel(
          branch.values
        ),
        target: branch.next
      }));

    renderDieRoll({
      container: diagramContainer,
      text: t("common.rollDie"),
      die,
      choices,
      rollLabel: t("common.rollDie"),
      resultLabel: t("common.dieResult"),
      continueLabel: t("common.continue"),
      onResolve: (choice) => {
        goToStep(choice.target);
      }
    });
  }

  function showReturnedCall(node) {
    const result =
      diplomacyState.returnedCall?.result;

    const targetMarkup =
      result?.labelKey
        ? `
          <div class="diagram-detail">
            <strong>
              ${t("botRealmTargeting.selectedTarget")}:
            </strong>
            ${formatIcons(t(result.labelKey))}
          </div>
        `
        : "";

    diagramContainer.innerHTML = `
      <div class="diagram-step">
        <div
          class="diagram-goto diagram-goto-static"
        >
          ${formatIcons(t(node.textKey))}
        </div>

        ${(node.detailKeys ?? []).map((key) => `
          <div class="diagram-detail">
            ${formatIcons(t(key))}
          </div>
        `).join("")}

        ${targetMarkup}

        <button
          id="returned-call-confirm-button"
          class="diagram-confirm"
          type="button"
        >
          ${t("common.confirm")}
        </button>
      </div>
    `;

    document
      .querySelector(
        "#returned-call-confirm-button"
      )
      .addEventListener(
        "click",
        () => {
          goToStep(
            node.nextAfterReturn
          );
        }
      );
  }

  function showExternal(node, step) {
    const returnedFromThisCall =
      node.navigation === "call"
      && diplomacyState.returnedCall?.step
        === step;

    if (returnedFromThisCall) {
      showReturnedCall(node);
      return;
    }

    renderGoTo({
      container: diagramContainer,
      text: formatIcons(t(node.textKey)),
      details: (node.detailKeys ?? []).map(
        (key) =>
          formatIcons(t(key))
      ),
      onClick: () => {
        onExternalAction?.(
          node,
          step
        );
      }
    });
  }

  function showEnd(node) {
    renderEnd({
      container: diagramContainer,
      text: formatIcons(t(node.textKey))
    });

    if (!onComplete) {
      return;
    }

    const completeActionButton =
      document.createElement("button");

    completeActionButton.className =
      "diagram-confirm";

    completeActionButton.type =
      "button";

    completeActionButton.textContent =
      t("common.completeAction");

    completeActionButton.addEventListener(
      "click",
      onComplete
    );

    diagramContainer.appendChild(
      completeActionButton
    );
  }

  function showStep(step) {
    const node =
      DIPLOMACY_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown DIPLOMACY step: ${step}`
      );
      return;
    }

    switch (node.type) {
      case "question":
        showQuestion(node);
        break;

      case "roll":
        showRoll(node);
        break;

      case "action":
        renderAction({
          container: diagramContainer,
          text: formatIcons(t(node.textKey)),
          details: (node.detailKeys ?? []).map(
            (key) =>
              formatIcons(t(key))
          ),
          note: node.noteKey
            ? formatIcons(t(node.noteKey))
            : null,
          confirmLabel: t("common.confirm"),
          onConfirm: () =>
            goToStep(node.next)
        });
        break;

      case "external":
        showExternal(
          node,
          step
        );
        break;

      case "end":
        showEnd(node);
        break;
    }
  }

  previousStepButton.addEventListener(
    "click",
    () => {
      if (
        diplomacyState.stepHistory.length === 0
      ) {
        return;
      }

      if (
        diplomacyState.returnedCall?.step
        === diplomacyState.currentStep
      ) {
        diplomacyState.returnedCall = null;
      }

      diplomacyState.currentStep =
        diplomacyState.stepHistory.pop();

      showStep(
        diplomacyState.currentStep
      );

      updatePreviousButton();
    }
  );

  showStep(
    diplomacyState.currentStep
  );

  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener(
      "click",
      onMainMenu
    );

  document
    .querySelector(
      "#bot-actions-menu-button"
    )
    .addEventListener(
      "click",
      onBotActionsMenu
    );
}

export function renderMilitaryAction({
  page,
  onMainMenu,
  onBotActionsMenu,
  onExternalAction,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("botActions.actionNames.military")}
      </h1>

      <div class="diagram-source">
        ${t("botActions.military.source")}
      </div>

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
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
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
      militaryState.stepHistory.length === 0;
  }

  function goToStep(step) {
    militaryState.stepHistory.push(
      militaryState.currentStep
    );

    militaryState.currentStep = step;

    showStep(step);
    updatePreviousButton();
  }

  function getNoteKeys(node) {
    if (node.noteKeys?.length) {
      return node.noteKeys;
    }

    if (node.noteKey) {
      return [node.noteKey];
    }

    return [];
  }

  function insertAdditionalNotes(
    noteKeys,
    insertionPoint
  ) {
    noteKeys.forEach((key) => {
      const note =
        document.createElement("div");

      note.className =
        "diagram-note";

      note.innerHTML =
        formatIcons(t(key));

      insertionPoint.before(note);
    });
  }

  function showQuestion(node) {
    const noteKeys =
      getNoteKeys(node);

    renderQuestion({
      container: diagramContainer,
      text: formatIcons(t(node.textKey)),
      note: noteKeys[0]
        ? formatIcons(t(noteKeys[0]))
        : null,
      yesLabel: t("common.yes"),
      noLabel: t("common.no"),
      onYes: () => goToStep(node.yes),
      onNo: () => goToStep(node.no)
    });

    const detailInsertionPoint =
      diagramContainer.querySelector(
        ".diagram-note"
      )
      ?? diagramContainer.querySelector(
        ".diagram-choices"
      );

    (node.detailKeys ?? []).forEach((key) => {
      const detail =
        document.createElement("div");

      detail.className =
        "diagram-detail";

      detail.innerHTML =
        formatIcons(t(key));

      detailInsertionPoint.before(detail);
    });

    const choices =
      diagramContainer.querySelector(
        ".diagram-choices"
      );

    insertAdditionalNotes(
      noteKeys.slice(1),
      choices
    );
  }

  function formatBranchLabel(values) {
    if (values.length === 1) {
      return String(values[0]);
    }

    return `${values[0]}–${values[values.length - 1]}`;
  }

  function showRoll(node) {
    const die =
      node.die === "d6"
        ? DICE.standardD6
        : DICE[node.die];

    const choices = node.next
      ? die.faces.map((face) => ({
          values: [face.value],
          label: face.label,
          target: node.next
        }))
      : node.branches.map((branch) => ({
          values: branch.values,
          label: formatBranchLabel(
            branch.values
          ),
          target: branch.next
        }));

    renderDieRoll({
      container: diagramContainer,
      text: t("common.rollDie"),
      die,
      choices,
      rollLabel: t("common.rollDie"),
      resultLabel: t("common.dieResult"),
      continueLabel: t("common.continue"),
      onResolve: (choice) => {
        goToStep(choice.target);
      }
    });
  }

  function showAction(node) {
    const noteKeys =
      getNoteKeys(node);

    renderAction({
      container: diagramContainer,
      text: formatIcons(t(node.textKey)),
      details: (node.detailKeys ?? []).map(
        (key) =>
          formatIcons(t(key))
      ),
      note: noteKeys[0]
        ? formatIcons(t(noteKeys[0]))
        : null,
      confirmLabel: t("common.confirm"),
      onConfirm: () =>
        goToStep(node.next)
    });

    if (node.style) {
      diagramContainer
        .querySelector(".diagram-action")
        ?.classList.add(
          `diagram-action--${node.style}`
        );
    }

    const confirmButton =
      diagramContainer.querySelector(
        ".diagram-confirm"
      );

    insertAdditionalNotes(
      noteKeys.slice(1),
      confirmButton
    );
  }

  function showReturnedCall(node) {
    const result =
      militaryState.returnedCall?.result;

    const styleClass = node.style
      ? ` diagram-goto--${node.style}`
      : "";

    const targetMarkup =
      result?.labelKey
        ? `
          <div class="diagram-detail">
            <strong>
              ${t("botRealmTargeting.selectedTarget")}:
            </strong>
            ${formatIcons(t(result.labelKey))}
          </div>
        `
        : "";

    diagramContainer.innerHTML = `
      <div class="diagram-step">
        <div
          class="diagram-goto diagram-goto-static${styleClass}"
        >
          ${formatIcons(t(node.textKey))}
        </div>

        ${(node.detailKeys ?? []).map((key) => `
          <div class="diagram-detail">
            ${formatIcons(t(key))}
          </div>
        `).join("")}

        ${targetMarkup}

        <button
          id="returned-call-confirm-button"
          class="diagram-confirm"
          type="button"
        >
          ${t("common.confirm")}
        </button>
      </div>
    `;

    document
      .querySelector(
        "#returned-call-confirm-button"
      )
      .addEventListener(
        "click",
        () => {
          goToStep(
            node.nextAfterReturn
          );
        }
      );
  }

  function showExternal(node, step) {
    const returnedFromThisCall =
      node.navigation === "call"
      && militaryState.returnedCall?.step
        === step;

    if (returnedFromThisCall) {
      showReturnedCall(node);
      return;
    }

    renderGoTo({
      container: diagramContainer,
      text: formatIcons(t(node.textKey)),
      details: (node.detailKeys ?? []).map(
        (key) =>
          formatIcons(t(key))
      ),
      onClick: () => {
        onExternalAction?.(
          node,
          step
        );
      }
    });

    if (node.style) {
      diagramContainer
        .querySelector(".diagram-goto")
        ?.classList.add(
          `diagram-goto--${node.style}`
        );
    }
  }

  function showEnd(node) {
    renderEnd({
      container: diagramContainer,
      text: formatIcons(t(node.textKey))
    });

    const noteKeys =
      getNoteKeys(node);

    const stepContainer =
      diagramContainer.querySelector(
        ".diagram-step"
      );

    noteKeys.forEach((key) => {
      const note =
        document.createElement("div");

      note.className =
        "diagram-note";

      note.innerHTML =
        formatIcons(t(key));

      stepContainer.appendChild(note);
    });

    if (!onComplete) {
      return;
    }

    const completeActionButton =
      document.createElement("button");

    completeActionButton.className =
      "diagram-confirm";

    completeActionButton.type =
      "button";

    completeActionButton.textContent =
      t("common.completeAction");

    completeActionButton.addEventListener(
      "click",
      onComplete
    );

    diagramContainer.appendChild(
      completeActionButton
    );
  }

  function showStep(step) {
    const node =
      MILITARY_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown MILITARY step: ${step}`
      );
      return;
    }

    switch (node.type) {
      case "question":
        showQuestion(node);
        break;

      case "roll":
        showRoll(node);
        break;

      case "action":
        showAction(node);
        break;

      case "external":
        showExternal(
          node,
          step
        );
        break;

      case "end":
        showEnd(node);
        break;
    }
  }

  previousStepButton.addEventListener(
    "click",
    () => {
      if (
        militaryState.stepHistory.length === 0
      ) {
        return;
      }

      if (
        militaryState.returnedCall?.step
        === militaryState.currentStep
      ) {
        militaryState.returnedCall = null;
      }

      militaryState.currentStep =
        militaryState.stepHistory.pop();

      showStep(
        militaryState.currentStep
      );

      updatePreviousButton();
    }
  );

  showStep(
    militaryState.currentStep
  );

  updatePreviousButton();

  document
    .querySelector("#main-menu-button")
    .addEventListener(
      "click",
      onMainMenu
    );

  document
    .querySelector(
      "#bot-actions-menu-button"
    )
    .addEventListener(
      "click",
      onBotActionsMenu
    );
}

export function renderPeaceRebelsPhase({
  page,
  onMainMenu,
  onBotActionsMenu,
  onExternalAction,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen peace-rebels-screen">
      <h1 class="app-title">
        ${t(PEACE_REBELS_PHASE.titleKey)}
      </h1>

      <div class="peace-rebels-intro">
        ${formatIcons(
          t(PEACE_REBELS_PHASE.introKey)
        )}
      </div>

      <div
        id="peace-rebels-container"
        class="peace-rebels-container"
      ></div>

      <div class="diagram-menu-navigation">
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.botActionsMenu")}
        </button>
      </div>
    </section>
  `;

  const container =
    document.querySelector(
      "#peace-rebels-container"
    );

  function goToStep(step) {
    if (!step) {
      return;
    }

    peaceRebelsState.stepHistory.push(
      peaceRebelsState.currentStep
    );

    peaceRebelsState.currentStep =
      step;

    peaceRebelsState.returnedCall =
      null;

    showStep(step);
  }

  function goToPreviousStep() {
    if (
      peaceRebelsState.stepHistory.length === 0
    ) {
      return;
    }

    peaceRebelsState.returnedCall =
      null;

    peaceRebelsState.currentStep =
      peaceRebelsState.stepHistory.pop();

    showStep(
      peaceRebelsState.currentStep
    );
  }

  function renderReminderText(
    textKeys = []
  ) {
    return textKeys
      .map((key) => `
        <div class="peace-rebels-reminder-text">
          ${formatIcons(t(key))}
        </div>
      `)
      .join("");
  }

  function renderReminderList(
    block
  ) {
    if (
      !block.itemKeys
      || block.itemKeys.length === 0
    ) {
      return "";
    }

    const listTag =
      block.listType === "ordered"
        ? "ol"
        : "ul";

    return `
      <${listTag} class="peace-rebels-reminder-list">
        ${block.itemKeys.map((key) => `
          <li>
            ${formatIcons(t(key))}
          </li>
        `).join("")}
      </${listTag}>
    `;
  }

  function renderBlock(
    block,
    index
  ) {
    if (block.type === "text") {
      return `
        <div class="peace-rebels-text">
          ${formatIcons(
            t(block.textKey)
          )}
        </div>
      `;
    }

    if (block.type === "external") {
      const styleClass =
        block.style
          ? ` diagram-goto--${block.style}`
          : "";

      return `
        <button
          class="
            diagram-goto
            peace-rebels-external
            ${styleClass}
          "
          type="button"
          data-external-index="${index}"
        >
          ${formatIcons(
            t(block.textKey)
          )}
        </button>
      `;
    }

    if (block.type === "reminder") {
      const textKeys =
        block.textKeys
        ?? (block.textKey
          ? [block.textKey]
          : []);

      return `
        <div class="peace-rebels-reminder">
          ${
            block.titleKey
              ? `
                <div class="peace-rebels-reminder-title">
                  ${formatIcons(
                    t(block.titleKey)
                  )}
                </div>
              `
              : ""
          }

          ${renderReminderText(textKeys)}

          ${renderReminderList(block)}
        </div>
      `;
    }

    return "";
  }

  function bindExternalButtons(
    node,
    step
  ) {
    node.blocks.forEach(
      (block, index) => {
        if (
          block.type !== "external"
        ) {
          return;
        }

        const button =
          container.querySelector(
            `[data-external-index="${index}"]`
          );

        button?.addEventListener(
          "click",
          () => {
            onExternalAction?.(
              block,
              step
            );
          }
        );
      }
    );
  }

  function showStep(step) {
    const node =
      PEACE_REBELS_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown PEACE & REBELS step: ${step}`
      );
      return;
    }

    const isFirstStep =
      peaceRebelsState
        .stepHistory
        .length === 0;

    const isLastStep =
      !node.next;

    container.innerHTML = `
      <article class="peace-rebels-card">
        <header class="peace-rebels-header">
          <div class="peace-rebels-letter">
            ${node.letter}
          </div>

          <div class="peace-rebels-heading">
            <h2 class="peace-rebels-step-title">
              ${t(node.titleKey)}
            </h2>
          </div>
        </header>

        <div class="peace-rebels-body">
          ${node.blocks
            .map(
              (block, index) =>
                renderBlock(
                  block,
                  index
                )
            )
            .join("")}
        </div>

        <div class="peace-rebels-step-navigation">
          <button
            id="peace-rebels-previous-button"
            class="
              menu-button
              peace-rebels-previous
            "
            type="button"
            ${isFirstStep ? "hidden" : ""}
          >
            ${t("common.previousStep")}
          </button>

          ${
            !isLastStep
              ? `
                <button
                  id="peace-rebels-next-button"
                  class="
                    menu-button
                    peace-rebels-next
                  "
                  type="button"
                >
                  ${t("common.continue")}
                </button>
              `
              : onComplete
                ? `
                  <button
                    id="peace-rebels-complete-button"
                    class="
                      menu-button
                      peace-rebels-next
                    "
                    type="button"
                  >
                    ${t(
                      "botActions.peaceRebels.completePhase"
                    )}
                  </button>
                `
                : ""
          }
        </div>
      </article>
    `;

    bindExternalButtons(
      node,
      step
    );

    container
      .querySelector(
        "#peace-rebels-previous-button"
      )
      ?.addEventListener(
        "click",
        goToPreviousStep
      );

    container
      .querySelector(
        "#peace-rebels-next-button"
      )
      ?.addEventListener(
        "click",
        () => {
          goToStep(
            node.next
          );
        }
      );

    container
      .querySelector(
        "#peace-rebels-complete-button"
      )
      ?.addEventListener(
        "click",
        onComplete
      );
  }

  showStep(
    peaceRebelsState.currentStep
  );

  document
    .querySelector(
      "#main-menu-button"
    )
    .addEventListener(
      "click",
      onMainMenu
    );

  document
    .querySelector(
      "#bot-actions-menu-button"
    )
    .addEventListener(
      "click",
      onBotActionsMenu
    );
}

export function renderIncomeUpkeepPhase({
  page,
  onMainMenu,
  onBotActionsMenu,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen peace-rebels-screen income-upkeep-screen">
      <h1 class="app-title">
        ${t(INCOME_UPKEEP_PHASE.titleKey)}
      </h1>

      <div class="peace-rebels-intro">
        ${formatIcons(
          t(INCOME_UPKEEP_PHASE.introKey)
        )}
      </div>

      <div
        id="income-upkeep-container"
        class="peace-rebels-container"
      ></div>

      <div class="diagram-menu-navigation">
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.botActionsMenu")}
        </button>
      </div>
    </section>
  `;

  const container =
    document.querySelector(
      "#income-upkeep-container"
    );

  function goToStep(step) {
    if (!step) {
      return;
    }

    incomeUpkeepState.stepHistory.push(
      incomeUpkeepState.currentStep
    );

    incomeUpkeepState.currentStep =
      step;

    showStep(step);
  }

  function goToPreviousStep() {
    if (
      incomeUpkeepState.stepHistory.length === 0
    ) {
      return;
    }

    incomeUpkeepState.currentStep =
      incomeUpkeepState.stepHistory.pop();

    showStep(
      incomeUpkeepState.currentStep
    );
  }

  function renderReminderText(
    textKeys = []
  ) {
    return textKeys
      .map((key) => `
        <div class="peace-rebels-reminder-text">
          ${formatIcons(t(key))}
        </div>
      `)
      .join("");
  }

  function renderReminderList(
    block
  ) {
    if (
      !block.itemKeys
      || block.itemKeys.length === 0
    ) {
      return "";
    }

    const listTag =
      block.listType === "ordered"
        ? "ol"
        : "ul";

    return `
      <${listTag} class="peace-rebels-reminder-list">
        ${block.itemKeys
          .map((key) => `
            <li>
              ${formatIcons(t(key))}
            </li>
          `)
          .join("")}
      </${listTag}>
    `;
  }

  function renderBlock(block) {
    if (block.type === "text") {
      return `
        <div class="peace-rebels-text">
          ${formatIcons(
            t(block.textKey)
          )}
        </div>
      `;
    }

    if (block.type === "reminder") {
      const textKeys =
        block.textKeys
        ?? (
          block.textKey
            ? [block.textKey]
            : []
        );

      return `
        <div class="peace-rebels-reminder">
          ${
            block.titleKey
              ? `
                <div class="peace-rebels-reminder-title">
                  ${formatIcons(
                    t(block.titleKey)
                  )}
                </div>
              `
              : ""
          }

          ${renderReminderText(textKeys)}

          ${renderReminderList(block)}
        </div>
      `;
    }

    return "";
  }

  function showStep(step) {
    const node =
      INCOME_UPKEEP_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown INCOME & UPKEEP step: ${step}`
      );
      return;
    }

    const isFirstStep =
      incomeUpkeepState
        .stepHistory
        .length === 0;

    const isLastStep =
      !node.next;

    container.innerHTML = `
      <article class="peace-rebels-card">
        <header class="peace-rebels-header">
          <div class="peace-rebels-letter">
            ${node.marker}
          </div>

          <div class="peace-rebels-heading">
            <h2 class="peace-rebels-step-title">
              ${t(node.titleKey)}
            </h2>
          </div>
        </header>

        <div class="peace-rebels-body">
          ${node.blocks
            .map(
              (block) =>
                renderBlock(block)
            )
            .join("")}
        </div>

        <div class="peace-rebels-step-navigation">
          <button
            id="income-upkeep-previous-button"
            class="
              menu-button
              peace-rebels-previous
            "
            type="button"
            ${isFirstStep ? "hidden" : ""}
          >
            ${t("common.previousStep")}
          </button>

          ${
            !isLastStep
              ? `
                <button
                  id="income-upkeep-next-button"
                  class="
                    menu-button
                    peace-rebels-next
                  "
                  type="button"
                >
                  ${t("common.continue")}
                </button>
              `
              : onComplete
                ? `
                  <button
                    id="income-upkeep-complete-button"
                    class="
                      menu-button
                      peace-rebels-next
                    "
                    type="button"
                  >
                    ${t(
                      "botActions.incomeUpkeep.completePhase"
                    )}
                  </button>
                `
                : ""
          }
        </div>
      </article>
    `;

    container
      .querySelector(
        "#income-upkeep-previous-button"
      )
      ?.addEventListener(
        "click",
        goToPreviousStep
      );

    container
      .querySelector(
        "#income-upkeep-next-button"
      )
      ?.addEventListener(
        "click",
        () => {
          goToStep(
            node.next
          );
        }
      );

    container
      .querySelector(
        "#income-upkeep-complete-button"
      )
      ?.addEventListener(
        "click",
        onComplete
      );
  }

  showStep(
    incomeUpkeepState.currentStep
  );

  document
    .querySelector(
      "#main-menu-button"
    )
    .addEventListener(
      "click",
      onMainMenu
    );

  document
    .querySelector(
      "#bot-actions-menu-button"
    )
    .addEventListener(
      "click",
      onBotActionsMenu
    );
}

export function renderCleanupPhase({
  page,
  onMainMenu,
  onBotActionsMenu,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen peace-rebels-screen cleanup-screen">
      <h1 class="app-title">
        ${t(CLEANUP_PHASE.titleKey)}
      </h1>

      <div class="peace-rebels-intro">
        ${formatIcons(
          t(CLEANUP_PHASE.introKey)
        )}
      </div>

      <div
        id="cleanup-container"
        class="peace-rebels-container"
      ></div>

      <div class="diagram-menu-navigation">
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.botActionsMenu")}
        </button>
      </div>
    </section>
  `;

  const container =
    document.querySelector(
      "#cleanup-container"
    );

  function goToStep(step) {
    if (!step) {
      return;
    }

    cleanupState.stepHistory.push(
      cleanupState.currentStep
    );

    cleanupState.currentStep =
      step;

    showStep(step);
  }

  function goToPreviousStep() {
    if (
      cleanupState.stepHistory.length === 0
    ) {
      return;
    }

    cleanupState.currentStep =
      cleanupState.stepHistory.pop();

    showStep(
      cleanupState.currentStep
    );
  }

  function renderReminderText(
    textKeys = []
  ) {
    return textKeys
      .map((key) => `
        <div class="peace-rebels-reminder-text">
          ${formatIcons(t(key))}
        </div>
      `)
      .join("");
  }

  function renderReminderList(
    block
  ) {
    if (
      !block.itemKeys
      || block.itemKeys.length === 0
    ) {
      return "";
    }

    const listTag =
      block.listType === "ordered"
        ? "ol"
        : "ul";

    return `
      <${listTag} class="peace-rebels-reminder-list">
        ${block.itemKeys
          .map((key) => `
            <li>
              ${formatIcons(t(key))}
            </li>
          `)
          .join("")}
      </${listTag}>
    `;
  }

  function renderBlock(block) {
    if (block.type === "text") {
      return `
        <div class="peace-rebels-text">
          ${formatIcons(
            t(block.textKey)
          )}
        </div>
      `;
    }

    if (block.type === "reminder") {
      const textKeys =
        block.textKeys
        ?? (
          block.textKey
            ? [block.textKey]
            : []
        );

      return `
        <div class="peace-rebels-reminder">
          ${
            block.titleKey
              ? `
                <div class="peace-rebels-reminder-title">
                  ${formatIcons(
                    t(block.titleKey)
                  )}
                </div>
              `
              : ""
          }

          ${renderReminderText(textKeys)}

          ${renderReminderList(block)}
        </div>
      `;
    }

    return "";
  }

  function showStep(step) {
    const node =
      CLEANUP_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown CLEANUP step: ${step}`
      );
      return;
    }

    const isFirstStep =
      cleanupState
        .stepHistory
        .length === 0;

    const isLastStep =
      !node.next;

    container.innerHTML = `
      <article class="peace-rebels-card">
        <header class="peace-rebels-header">
          <div class="peace-rebels-letter">
            ${node.marker}
          </div>

          <div class="peace-rebels-heading">
            <h2 class="peace-rebels-step-title">
              ${t(node.titleKey)}
            </h2>
          </div>
        </header>

        <div class="peace-rebels-body">
          ${node.blocks
            .map(
              (block) =>
                renderBlock(block)
            )
            .join("")}
        </div>

        <div class="peace-rebels-step-navigation">
          <button
            id="cleanup-previous-button"
            class="
              menu-button
              peace-rebels-previous
            "
            type="button"
            ${isFirstStep ? "hidden" : ""}
          >
            ${t("common.previousStep")}
          </button>

          ${
            !isLastStep
              ? `
                <button
                  id="cleanup-next-button"
                  class="
                    menu-button
                    peace-rebels-next
                  "
                  type="button"
                >
                  ${t("common.continue")}
                </button>
              `
              : onComplete
                ? `
                  <button
                    id="cleanup-complete-button"
                    class="
                      menu-button
                      peace-rebels-next
                    "
                    type="button"
                  >
                    ${t(
                      "botActions.cleanupPhase.completePhase"
                    )}
                  </button>
                `
                : ""
          }
        </div>
      </article>
    `;

    container
      .querySelector(
        "#cleanup-previous-button"
      )
      ?.addEventListener(
        "click",
        goToPreviousStep
      );

    container
      .querySelector(
        "#cleanup-next-button"
      )
      ?.addEventListener(
        "click",
        () => {
          goToStep(
            node.next
          );
        }
      );

    container
      .querySelector(
        "#cleanup-complete-button"
      )
      ?.addEventListener(
        "click",
        onComplete
      );
  }

  showStep(
    cleanupState.currentStep
  );

  document
    .querySelector(
      "#main-menu-button"
    )
    .addEventListener(
      "click",
      onMainMenu
    );

  document
    .querySelector(
      "#bot-actions-menu-button"
    )
    .addEventListener(
      "click",
      onBotActionsMenu
    );
}

export function renderEndOfAgeRoutine({
  page,
  onMainMenu,
  onBotActionsMenu,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen peace-rebels-screen end-of-age-screen">
      <h1 class="app-title">
        ${t(END_OF_AGE_PHASE.titleKey)}
      </h1>

      <div class="peace-rebels-intro">
        ${formatIcons(
          t(END_OF_AGE_PHASE.introKey)
        )}
      </div>

      <div
        id="end-of-age-container"
        class="peace-rebels-container"
      ></div>

      <div class="diagram-menu-navigation">
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.botActionsMenu")}
        </button>
      </div>
    </section>
  `;

  const container =
    document.querySelector(
      "#end-of-age-container"
    );

  function goToStep(step) {
    if (!step) {
      return;
    }

    endOfAgeState.stepHistory.push(
      endOfAgeState.currentStep
    );

    endOfAgeState.currentStep =
      step;

    showStep(step);
  }

  function goToPreviousStep() {
    if (
      endOfAgeState.stepHistory.length === 0
    ) {
      return;
    }

    endOfAgeState.currentStep =
      endOfAgeState.stepHistory.pop();

    showStep(
      endOfAgeState.currentStep
    );
  }

  function renderReminderText(
    textKeys = []
  ) {
    return textKeys
      .map((key) => `
        <div class="peace-rebels-reminder-text">
          ${formatIcons(t(key))}
        </div>
      `)
      .join("");
  }

  function renderReminderList(
    block
  ) {
    if (
      !block.itemKeys
      || block.itemKeys.length === 0
    ) {
      return "";
    }

    const listTag =
      block.listType === "ordered"
        ? "ol"
        : "ul";

    return `
      <${listTag} class="peace-rebels-reminder-list">
        ${block.itemKeys
          .map((key) => `
            <li>
              ${formatIcons(t(key))}
            </li>
          `)
          .join("")}
      </${listTag}>
    `;
  }

  function renderBlock(block) {
    if (block.type === "text") {
      return `
        <div class="peace-rebels-text">
          ${formatIcons(
            t(block.textKey)
          )}
        </div>
      `;
    }

    if (block.type === "reminder") {
      const textKeys =
        block.textKeys
        ?? (
          block.textKey
            ? [block.textKey]
            : []
        );

      return `
        <div class="peace-rebels-reminder">
          ${
            block.titleKey
              ? `
                <div class="peace-rebels-reminder-title">
                  ${formatIcons(
                    t(block.titleKey)
                  )}
                </div>
              `
              : ""
          }

          ${renderReminderText(textKeys)}

          ${renderReminderList(block)}
        </div>
      `;
    }

    return "";
  }

  function showStep(step) {
    const node =
      END_OF_AGE_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown END OF AGE step: ${step}`
      );
      return;
    }

    const isFirstStep =
      endOfAgeState
        .stepHistory
        .length === 0;

    const isLastStep =
      !node.next;

    container.innerHTML = `
      <article class="peace-rebels-card">
        <header class="peace-rebels-header">
          <div class="peace-rebels-letter">
            ${node.marker}
          </div>

          <div class="peace-rebels-heading">
            <h2 class="peace-rebels-step-title">
              ${t(node.titleKey)}
            </h2>
          </div>
        </header>

        <div class="peace-rebels-body">
          ${node.blocks
            .map(
              (block) =>
                renderBlock(block)
            )
            .join("")}
        </div>

        <div class="peace-rebels-step-navigation">
          <button
            id="end-of-age-previous-button"
            class="
              menu-button
              peace-rebels-previous
            "
            type="button"
            ${isFirstStep ? "hidden" : ""}
          >
            ${t("common.previousStep")}
          </button>

          ${
            !isLastStep
              ? `
                <button
                  id="end-of-age-next-button"
                  class="
                    menu-button
                    peace-rebels-next
                  "
                  type="button"
                >
                  ${t("common.continue")}
                </button>
              `
              : onComplete
                ? `
                  <button
                    id="end-of-age-complete-button"
                    class="
                      menu-button
                      peace-rebels-next
                    "
                    type="button"
                  >
                    ${t(
                      "botActions.endOfAge.completePhase"
                    )}
                  </button>
                `
                : ""
          }
        </div>
      </article>
    `;

    container
      .querySelector(
        "#end-of-age-previous-button"
      )
      ?.addEventListener(
        "click",
        goToPreviousStep
      );

    container
      .querySelector(
        "#end-of-age-next-button"
      )
      ?.addEventListener(
        "click",
        () => {
          goToStep(
            node.next
          );
        }
      );

    container
      .querySelector(
        "#end-of-age-complete-button"
      )
      ?.addEventListener(
        "click",
        onComplete
      );
  }

  showStep(
    endOfAgeState.currentStep
  );

  document
    .querySelector(
      "#main-menu-button"
    )
    .addEventListener(
      "click",
      onMainMenu
    );

  document
    .querySelector(
      "#bot-actions-menu-button"
    )
    .addEventListener(
      "click",
      onBotActionsMenu
    );
}

export function renderFinalScoringPhase({
  page,
  onMainMenu,
  onBotActionsMenu,
  onComplete = null
}) {
  page.innerHTML = `
    <section class="screen peace-rebels-screen final-scoring-screen">
      <h1 class="app-title">
        ${t(FINAL_SCORING_PHASE.titleKey)}
      </h1>

      <div class="peace-rebels-intro">
        ${formatIcons(
          t(FINAL_SCORING_PHASE.introKey)
        )}
      </div>

      <div
        id="final-scoring-container"
        class="peace-rebels-container"
      ></div>

      <div class="diagram-menu-navigation">
        <button
          id="main-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.mainMenu")}
        </button>

        <button
          id="bot-actions-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.botActionsMenu")}
        </button>
      </div>
    </section>
  `;

  const container =
    document.querySelector(
      "#final-scoring-container"
    );

  function goToStep(step) {
    if (!step) {
      return;
    }

    finalScoringState.stepHistory.push(
      finalScoringState.currentStep
    );

    finalScoringState.currentStep =
      step;

    showStep(step);
  }

  function goToPreviousStep() {
    if (
      finalScoringState.stepHistory.length === 0
    ) {
      return;
    }

    finalScoringState.currentStep =
      finalScoringState.stepHistory.pop();

    showStep(
      finalScoringState.currentStep
    );
  }

  function renderReminderText(
    textKeys = []
  ) {
    return textKeys
      .map((key) => `
        <div class="peace-rebels-reminder-text">
          ${formatIcons(t(key))}
        </div>
      `)
      .join("");
  }

  function renderReminderList(
    block
  ) {
    if (
      !block.itemKeys
      || block.itemKeys.length === 0
    ) {
      return "";
    }

    const listTag =
      block.listType === "ordered"
        ? "ol"
        : "ul";

    return `
      <${listTag} class="peace-rebels-reminder-list">
        ${block.itemKeys
          .map((key) => `
            <li>
              ${formatIcons(t(key))}
            </li>
          `)
          .join("")}
      </${listTag}>
    `;
  }

  function renderBlock(block) {
    if (block.type === "text") {
      return `
        <div class="peace-rebels-text">
          ${formatIcons(
            t(block.textKey)
          )}
        </div>
      `;
    }

    if (block.type === "reminder") {
      const textKeys =
        block.textKeys
        ?? (
          block.textKey
            ? [block.textKey]
            : []
        );

      return `
        <div class="peace-rebels-reminder">
          ${
            block.titleKey
              ? `
                <div class="peace-rebels-reminder-title">
                  ${formatIcons(
                    t(block.titleKey)
                  )}
                </div>
              `
              : ""
          }

          ${renderReminderText(textKeys)}

          ${renderReminderList(block)}
        </div>
      `;
    }

    return "";
  }

  function showStep(step) {
    const node =
      FINAL_SCORING_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown FINAL SCORING step: ${step}`
      );
      return;
    }

    const isFirstStep =
      finalScoringState
        .stepHistory
        .length === 0;

    const isLastStep =
      !node.next;

    container.innerHTML = `
      <article class="peace-rebels-card">
        <header class="peace-rebels-header">
          <div class="peace-rebels-letter">
            ${node.marker}
          </div>

          <div class="peace-rebels-heading">
            <h2 class="peace-rebels-step-title">
              ${t(node.titleKey)}
            </h2>
          </div>
        </header>

        <div class="peace-rebels-body">
          ${node.blocks
            .map(
              (block) =>
                renderBlock(block)
            )
            .join("")}
        </div>

        <div class="peace-rebels-step-navigation">
          <button
            id="final-scoring-previous-button"
            class="
              menu-button
              peace-rebels-previous
            "
            type="button"
            ${isFirstStep ? "hidden" : ""}
          >
            ${t("common.previousStep")}
          </button>

          ${
            !isLastStep
              ? `
                <button
                  id="final-scoring-next-button"
                  class="
                    menu-button
                    peace-rebels-next
                  "
                  type="button"
                >
                  ${t("common.continue")}
                </button>
              `
              : onComplete
                ? `
                  <button
                    id="final-scoring-complete-button"
                    class="
                      menu-button
                      peace-rebels-next
                    "
                    type="button"
                  >
                    ${t(
                      "botActions.finalScoringPhase.completePhase"
                    )}
                  </button>
                `
                : ""
          }
        </div>
      </article>
    `;

    container
      .querySelector(
        "#final-scoring-previous-button"
      )
      ?.addEventListener(
        "click",
        goToPreviousStep
      );

    container
      .querySelector(
        "#final-scoring-next-button"
      )
      ?.addEventListener(
        "click",
        () => {
          goToStep(
            node.next
          );
        }
      );

    container
      .querySelector(
        "#final-scoring-complete-button"
      )
      ?.addEventListener(
        "click",
        onComplete
      );
  }

  showStep(
    finalScoringState.currentStep
  );

  document
    .querySelector(
      "#main-menu-button"
    )
    .addEventListener(
      "click",
      onMainMenu
    );

  document
    .querySelector(
      "#bot-actions-menu-button"
    )
    .addEventListener(
      "click",
      onBotActionsMenu
    );
}
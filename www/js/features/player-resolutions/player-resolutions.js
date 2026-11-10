import { t } from "../../core/i18n.js";
import { formatIcons } from "../../core/icons.js";

import {
  renderQuestion,
  renderAction,
  renderGoTo,
  renderEnd
} from "../../core/diagram-engine.js";

import {
  PLAYER_LAND_BATTLE_STEPS
} from "./data/land-battle.js";
import {
  PLAYER_NAVAL_BATTLE_STEPS
} from "./data/naval-battle.js";
import {
  PLAYER_PEACE_RESOLUTION_STEPS
} from "./data/peace-resolution.js";

// ========================================================
//  LAND BATTLE STATE
// ========================================================

let playerLandBattleState = {
  currentStep: "appointAttackerGeneral",
  stepHistory: [],
  multiplePrDefenders: false,
  nprUnitsPresent: false
};

let playerNavalBattleState = {
  currentStep: "appointAttackerAdmiral",
  stepHistory: [],
  multiplePrDefenders: false,
  nprShipsPresent: false
};

let playerPeaceResolutionState = {
  currentStep: "automaticWhitePeace",
  stepHistory: []
};

// ========================================================
//  RESET STATE
// ========================================================

export function resetPlayerLandBattleState() {
  playerLandBattleState = {
    currentStep: "appointAttackerGeneral",
    stepHistory: [],
    multiplePrDefenders: false,
    nprUnitsPresent: false
  };
}

export function resetPlayerNavalBattleState() {
  playerNavalBattleState = {
    currentStep: "appointAttackerAdmiral",
    stepHistory: [],
    multiplePrDefenders: false,
    nprShipsPresent: false
  };
}

export function resetPlayerPeaceResolutionState() {
  playerPeaceResolutionState = {
    currentStep: "automaticWhitePeace",
    stepHistory: []
  };
}

// ========================================================
//  PLAYER RESOLUTIONS MENU
// ========================================================

export function renderPlayerResolutionsMenu({
  page,
  onMainMenu,
  onLandBattle = null,
  onNavalBattle = null,
  onPeaceResolution = null
}) {
  page.innerHTML = `
    <section class="screen">
      <div class="home-menu">
        <h1 class="app-title">
          ${t("home.playerResolutions")}
        </h1>

        <button
          id="player-land-battle-button"
          class="menu-button"
          type="button"
        >
          ${t("playerResolutions.landBattle.title")}
        </button>

        <button
          id="player-naval-battle-button"
          class="menu-button"
          type="button"
        >
          ${t("playerResolutions.navalBattle.title")}
        </button>

        <button
          id="player-peace-resolution-button"
          class="menu-button"
          type="button"
        >
          ${t("playerResolutions.peaceResolution.title")}
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

  const landBattleButton =
    document.querySelector(
      "#player-land-battle-button"
    );

  const navalBattleButton =
    document.querySelector(
      "#player-naval-battle-button"
    );

  const peaceResolutionButton =
    document.querySelector(
      "#player-peace-resolution-button"
    );

  landBattleButton.disabled =
    typeof onLandBattle !== "function";

  navalBattleButton.disabled =
    typeof onNavalBattle !== "function";

  peaceResolutionButton.disabled =
    typeof onPeaceResolution !== "function";

  if (onLandBattle) {
    landBattleButton.addEventListener(
      "click",
      onLandBattle
    );
  }

  if (onNavalBattle) {
    navalBattleButton.addEventListener(
      "click",
      onNavalBattle
    );
  }

  if (onPeaceResolution) {
    peaceResolutionButton.addEventListener(
      "click",
      onPeaceResolution
    );
  }

  document
    .querySelector("#main-menu-button")
    .addEventListener("click", onMainMenu);
}

// ========================================================
//  LAND BATTLE RESOLUTION
// ========================================================

export function renderPlayerLandBattleResolution({
  page,
  onMainMenu,
  onPlayerResolutionsMenu,
  onBotLandBattle
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("playerResolutions.landBattle.title")}
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
          id="player-resolutions-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.playerResolutionsMenu")}
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
      playerLandBattleState.stepHistory.length === 0;
  }


  function getStateSnapshot() {
    return {
      currentStep:
        playerLandBattleState.currentStep,

      multiplePrDefenders:
        playerLandBattleState.multiplePrDefenders,

      nprUnitsPresent:
        playerLandBattleState.nprUnitsPresent
    };
  }


  function resolveAutomaticStep(step) {
    if (
      step === "nprMustRetreat"
      && !playerLandBattleState.nprUnitsPresent
    ) {
      return "attackerRetreats";
    }

    return step;
  }


  function goToStep(
    step,
    stateUpdates = {}
  ) {
    playerLandBattleState.stepHistory.push(
      getStateSnapshot()
    );

    Object.assign(
      playerLandBattleState,
      stateUpdates
    );

    playerLandBattleState.currentStep =
      resolveAutomaticStep(step);

    showStep(
      playerLandBattleState.currentStep
    );

    updatePreviousButton();
  }


  function getQuestionUpdates(
    step,
    answer
  ) {
    if (step === "moreThanOnePrDefender") {
      return {
        multiplePrDefenders: answer
      };
    }

    if (step === "anyEnemyNprProvinces") {
      return {
        nprUnitsPresent: answer
      };
    }

    if (
      step === "anyDefenderBot"
      && !answer
    ) {
      return {
        nprUnitsPresent: true
      };
    }

    return {};
  }

  function getActionUpdates(step) {
    if (
      step === "resolveNprRetreat"
      || step === "resolveRetreatAndRemoveNpr"
    ) {
      return {
        nprUnitsPresent: false
      };
    }

    return {};
  }

  function getNodeNote(
    step,
    node
  ) {
    const notes = [];

    if (node.noteKey) {
      notes.push(
        formatIcons(
          t(node.noteKey)
        )
      );
    }

    if (
      step === "assignCasualties"
      && playerLandBattleState
        .multiplePrDefenders
    ) {
      notes.push(
        formatIcons(
          t(
            "playerResolutions.landBattle.notes.multiplePrCasualties"
          )
        )
      );
    }

    if (notes.length === 0) {
      return null;
    }

    return notes.join("<br><br>");
  }


  function showStep(step) {
    const node =
      PLAYER_LAND_BATTLE_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown PLAYER LAND BATTLE step: ${step}`
      );
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,

          text:
            formatIcons(
              t(node.textKey)
            ),

          note:
            getNodeNote(
              step,
              node
            ),

          yesLabel:
            t("common.yes"),

          noLabel:
            t("common.no"),

          onYes: () => {
            goToStep(
              node.yes,
              getQuestionUpdates(
                step,
                true
              )
            );
          },

          onNo: () => {
            goToStep(
              node.no,
              getQuestionUpdates(
                step,
                false
              )
            );
          }
        });
        break;


      case "action":
        renderAction({
          container: diagramContainer,

          text:
            formatIcons(
              t(node.textKey)
            ),

          details:
            (node.detailKeys ?? []).map(
              (key) =>
                formatIcons(
                  t(key)
                )
            ),

          note:
            getNodeNote(
              step,
              node
            ),

          confirmLabel:
            t("common.confirm"),

          onConfirm: () => {
            goToStep(
              node.next,
              getActionUpdates(step)
            );
          }
        });
        break;


      case "goto":
        renderGoTo({
          container: diagramContainer,

          text:
            formatIcons(
              t(node.textKey)
            ),

          onClick: () => {
            if (
              node.target ===
              "bot-land-battle"
              && onBotLandBattle
            ) {
              onBotLandBattle();
            }
          }
        });
        break;


      case "end":
        renderEnd({
          container: diagramContainer,

          text:
            formatIcons(
              t(node.textKey)
            )
        });
        break;
    }
  }


  previousStepButton.addEventListener(
    "click",
    () => {
      if (
        playerLandBattleState
          .stepHistory.length === 0
      ) {
        return;
      }

      const previousState =
        playerLandBattleState
          .stepHistory.pop();

      playerLandBattleState.currentStep =
        previousState.currentStep;

      playerLandBattleState
        .multiplePrDefenders =
        previousState
          .multiplePrDefenders;

      playerLandBattleState
        .nprUnitsPresent =
        previousState.nprUnitsPresent;

      showStep(
        playerLandBattleState.currentStep
      );

      updatePreviousButton();
    }
  );


  showStep(
    playerLandBattleState.currentStep
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
      "#player-resolutions-menu-button"
    )
    .addEventListener(
      "click",
      onPlayerResolutionsMenu
    );
}

export function renderPlayerNavalBattleResolution({
  page,
  onMainMenu,
  onPlayerResolutionsMenu,
  onBotNavalBattle
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("playerResolutions.navalBattle.title")}
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
          id="player-resolutions-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.playerResolutionsMenu")}
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
      playerNavalBattleState.stepHistory.length === 0;
  }


  function getStateSnapshot() {
    return {
      currentStep:
        playerNavalBattleState.currentStep,

      multiplePrDefenders:
        playerNavalBattleState.multiplePrDefenders,

      nprShipsPresent:
        playerNavalBattleState.nprShipsPresent
    };
  }


  function resolveAutomaticStep(step) {
    if (
      step === "nprMustRetreat"
      && !playerNavalBattleState.nprShipsPresent
    ) {
      return "attackerRetreats";
    }

    return step;
  }


  function goToStep(
    step,
    stateUpdates = {}
  ) {
    playerNavalBattleState.stepHistory.push(
      getStateSnapshot()
    );

    Object.assign(
      playerNavalBattleState,
      stateUpdates
    );

    playerNavalBattleState.currentStep =
      resolveAutomaticStep(step);

    showStep(
      playerNavalBattleState.currentStep
    );

    updatePreviousButton();
  }


  function getQuestionUpdates(
    step,
    answer
  ) {
    if (step === "moreThanOnePrDefender") {
      return {
        multiplePrDefenders: answer
      };
    }

    if (step === "anyEnemyNprPorts") {
      return {
        nprShipsPresent: answer
      };
    }

    if (
      step === "anyDefenderBot"
      && !answer
    ) {
      return {
        nprShipsPresent: true
      };
    }

    return {};
  }


  function getActionUpdates(step) {
    if (
      step === "resolveNprRetreat"
      || step === "resolveRetreatAndRemoveNpr"
    ) {
      return {
        nprShipsPresent: false
      };
    }

    return {};
  }


  function getNodeNote(
    step,
    node
  ) {
    const notes = [];

    if (node.noteKey) {
      notes.push(
        formatIcons(
          t(node.noteKey)
        )
      );
    }

    if (
      step === "assignCasualties"
      && playerNavalBattleState
        .multiplePrDefenders
    ) {
      notes.push(
        formatIcons(
          t(
            "playerResolutions.navalBattle.notes.multiplePrCasualties"
          )
        )
      );
    }

    if (notes.length === 0) {
      return null;
    }

    return notes.join("<br><br>");
  }


  function showStep(step) {
    const node =
      PLAYER_NAVAL_BATTLE_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown PLAYER NAVAL BATTLE step: ${step}`
      );
      return;
    }

    switch (node.type) {
      case "question":
        renderQuestion({
          container: diagramContainer,

          text:
            formatIcons(
              t(node.textKey)
            ),

          note:
            getNodeNote(
              step,
              node
            ),

          yesLabel:
            t("common.yes"),

          noLabel:
            t("common.no"),

          onYes: () => {
            goToStep(
              node.yes,
              getQuestionUpdates(
                step,
                true
              )
            );
          },

          onNo: () => {
            goToStep(
              node.no,
              getQuestionUpdates(
                step,
                false
              )
            );
          }
        });
        break;


      case "action":
        renderAction({
          container: diagramContainer,

          text:
            formatIcons(
              t(node.textKey)
            ),

          details:
            (node.detailKeys ?? []).map(
              (key) =>
                formatIcons(
                  t(key)
                )
            ),

          note:
            getNodeNote(
              step,
              node
            ),

          confirmLabel:
            t("common.confirm"),

          onConfirm: () => {
            goToStep(
              node.next,
              getActionUpdates(step)
            );
          }
        });
        break;


      case "goto":
        renderGoTo({
          container: diagramContainer,

          text:
            formatIcons(
              t(node.textKey)
            ),

          onClick: () => {
            if (
              node.target ===
              "bot-naval-battle"
              && onBotNavalBattle
            ) {
              onBotNavalBattle();
            }
          }
        });
        break;


      case "end":
        renderEnd({
          container: diagramContainer,

          text:
            formatIcons(
              t(node.textKey)
            )
        });
        break;
    }
  }


  previousStepButton.addEventListener(
    "click",
    () => {
      if (
        playerNavalBattleState
          .stepHistory.length === 0
      ) {
        return;
      }

      const previousState =
        playerNavalBattleState
          .stepHistory.pop();

      playerNavalBattleState.currentStep =
        previousState.currentStep;

      playerNavalBattleState
        .multiplePrDefenders =
        previousState
          .multiplePrDefenders;

      playerNavalBattleState
        .nprShipsPresent =
        previousState.nprShipsPresent;

      showStep(
        playerNavalBattleState.currentStep
      );

      updatePreviousButton();
    }
  );


  showStep(
    playerNavalBattleState.currentStep
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
      "#player-resolutions-menu-button"
    )
    .addEventListener(
      "click",
      onPlayerResolutionsMenu
    );
}

export function renderPlayerPeaceResolution({
  page,
  onMainMenu,
  onPlayerResolutionsMenu,
  onBotPeace
}) {
  page.innerHTML = `
    <section class="screen">
      <h1 class="app-title">
        ${t("playerResolutions.peaceResolution.title")}
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
          id="player-resolutions-menu-button"
          class="menu-button"
          type="button"
        >
          ${t("common.playerResolutionsMenu")}
        </button>
      </div>
    </section>
  `;

  const diagramContainer =
    document.querySelector("#diagram-container");

  const previousStepButton =
    document.querySelector("#previous-step-button");


  // ========================================================
  //  HISTORY
  // ========================================================

  function updatePreviousButton() {
    previousStepButton.hidden =
      playerPeaceResolutionState.stepHistory.length === 0;
  }


  function goToStep(step) {
    playerPeaceResolutionState.stepHistory.push(
      playerPeaceResolutionState.currentStep
    );

    playerPeaceResolutionState.currentStep =
      step;

    showStep(step);
    updatePreviousButton();
  }


  // ========================================================
  //  NOTES
  // ========================================================

  function getNodeNote(node) {
    if (!node.noteKey) {
      return null;
    }

    return formatIcons(
      t(node.noteKey)
    );
  }


  // ========================================================
  //  BOT PEACE RESOLUTION
  // ========================================================

  function openBotPeace(node) {
    if (
      node.target !== "bot-peace-resolution"
      || !onBotPeace
    ) {
      return;
    }

    /*
      Save the Go To node in history so Previous Step
      still works correctly after returning from the
      Bot Peace Resolution.
    */
    playerPeaceResolutionState.stepHistory.push(
      playerPeaceResolutionState.currentStep
    );

    /*
      Prepare the exact step where the human
      Peace Resolution must resume once the
      Bot Peace Resolution is complete.
    */
    playerPeaceResolutionState.currentStep =
      node.returnStep;

    onBotPeace();
  }


  // ========================================================
  //  RENDER CURRENT STEP
  // ========================================================

  function showStep(step) {
    const node =
      PLAYER_PEACE_RESOLUTION_STEPS[step];

    if (!node) {
      console.warn(
        `Unknown PLAYER PEACE RESOLUTION step: ${step}`
      );
      return;
    }


    switch (node.type) {

      // ----------------------------------------------------
      // QUESTION
      // ----------------------------------------------------

      case "question":
        renderQuestion({
          container: diagramContainer,

          text:
            formatIcons(
              t(node.textKey)
            ),

          note:
            getNodeNote(node),

          yesLabel:
            t("common.yes"),

          noLabel:
            t("common.no"),

          onYes: () => {
            goToStep(node.yes);
          },

          onNo: () => {
            goToStep(node.no);
          }
        });
        break;


      // ----------------------------------------------------
      // ACTION
      // ----------------------------------------------------

      case "action":
        renderAction({
          container: diagramContainer,

          text:
            formatIcons(
              t(node.textKey)
            ),

          details:
            (node.detailKeys ?? []).map(
              (key) =>
                formatIcons(
                  t(key)
                )
            ),

          note:
            getNodeNote(node),

          confirmLabel:
            t("common.confirm"),

          onConfirm: () => {
            goToStep(node.next);
          }
        });
        break;


      // ----------------------------------------------------
      // GO TO BOT PEACE RESOLUTION
      // ----------------------------------------------------

      case "goto":
        renderGoTo({
          container: diagramContainer,

          text:
            formatIcons(
              t(node.textKey)
            ),

          onClick: () => {
            openBotPeace(node);
          }
        });
        break;


      // ----------------------------------------------------
      // END
      // ----------------------------------------------------

      case "end":
        renderEnd({
          container: diagramContainer,

          text:
            formatIcons(
              t(node.textKey)
            )
        });
        break;


      default:
        console.warn(
          `Unknown PLAYER PEACE RESOLUTION node type: ${node.type}`
        );
    }
  }


  // ========================================================
  //  PREVIOUS STEP
  // ========================================================

  previousStepButton.addEventListener(
    "click",
    () => {
      if (
        playerPeaceResolutionState
          .stepHistory.length === 0
      ) {
        return;
      }

      playerPeaceResolutionState.currentStep =
        playerPeaceResolutionState
          .stepHistory.pop();

      showStep(
        playerPeaceResolutionState.currentStep
      );

      updatePreviousButton();
    }
  );


  // ========================================================
  //  INITIAL RENDER
  // ========================================================

  showStep(
    playerPeaceResolutionState.currentStep
  );

  updatePreviousButton();


  // ========================================================
  //  MENU NAVIGATION
  // ========================================================

  document
    .querySelector("#main-menu-button")
    .addEventListener(
      "click",
      onMainMenu
    );

  document
    .querySelector(
      "#player-resolutions-menu-button"
    )
    .addEventListener(
      "click",
      onPlayerResolutionsMenu
    );
}
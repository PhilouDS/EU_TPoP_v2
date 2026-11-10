export const PEACE_REBELS_PHASE = {
  titleKey: "botActions.peaceRebels.title",
  introKey: "botActions.peaceRebels.intro",
  startStep: "removeCasusBelliAndTruces"
};

export const PEACE_REBELS_STEPS = {
  removeCasusBelliAndTruces: {
    letter: "A",
    titleKey:
      "botActions.peaceRebels.removeCasusBelliAndTruces.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.peaceRebels.removeCasusBelliAndTruces.text"
      }
    ],

    next: "nprInvasions"
  },

  nprInvasions: {
    letter: "B",
    titleKey:
      "botActions.peaceRebels.nprInvasions.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.peaceRebels.nprInvasions.text"
      },

      {
        type: "external",
        navigation: "call",
        target: "land-battle",
        textKey:
          "botActions.peaceRebels.goToLandBattle",
        style: "land-battle"
      }
    ],

    next: "rebelsSiegeOrMove"
  },

  rebelsSiegeOrMove: {
    letter: "C",
    titleKey:
      "botActions.peaceRebels.rebelsSiegeOrMove.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.peaceRebels.rebelsSiegeOrMove.text"
      },

      {
        type: "reminder",
        titleKey:
          "botActions.peaceRebels.normalRulesReminder",

        textKeys: [
          "botActions.peaceRebels.rebelsSiegeOrMove.reminderIntro",
          "botActions.peaceRebels.rebelsSiegeOrMove.withUnrest",
          "botActions.peaceRebels.rebelsSiegeOrMove.coreProvinces",
          "botActions.peaceRebels.rebelsSiegeOrMove.nonCoreProvinces",
          "botActions.peaceRebels.rebelsSiegeOrMove.withoutUnrestMove",
          "botActions.peaceRebels.rebelsSiegeOrMove.withoutUnrestBattle",
          "botActions.peaceRebels.rebelsSiegeOrMove.withoutUnrestRemove"
        ]
      }
    ],

    next: "peaceResolution"
  },

  peaceResolution: {
    letter: "D",
    titleKey:
      "botActions.peaceRebels.peaceResolution.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.peaceRebels.peaceResolution.turnOrder"
      },

      {
        type: "text",
        textKey:
          "botActions.peaceRebels.peaceResolution.humanPlayers"
      },

      {
        type: "text",
        textKey:
          "botActions.peaceRebels.peaceResolution.botTurn"
      },

      {
        type: "external",
        navigation: "call",
        target: "peace",
        textKey:
          "botActions.peaceRebels.goToBotPeaceResolution",
        style: "peace-resolution"
      },

      {
        type: "text",
        textKey:
          "botActions.peaceRebels.peaceResolution.removeArmy"
      },

      {
        type: "text",
        textKey:
          "botActions.peaceRebels.peaceResolution.fullyAnnexed"
      }
    ],

    next: "prestigePenalties"
  },

  prestigePenalties: {
    letter: "E",
    titleKey:
      "botActions.peaceRebels.prestigePenalties.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.peaceRebels.prestigePenalties.text"
      },

      {
        type: "reminder",
        titleKey:
          "botActions.peaceRebels.normalRulesReminder",

        textKeys: [
          "botActions.peaceRebels.prestigePenalties.disputedSuccessionReminder",
          "botActions.peaceRebels.prestigePenalties.occupiedTownsReminder"
        ]
      }
    ],

    next: "interregnums"
  },

  interregnums: {
    letter: "F",
    titleKey:
      "botActions.peaceRebels.interregnums.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.peaceRebels.interregnums.text"
      }
    ],

    next: "religiousDissent"
  },

  religiousDissent: {
    letter: "G",
    titleKey:
      "botActions.peaceRebels.religiousDissent.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.peaceRebels.religiousDissent.text"
      }
    ],

    next: "gainRemoveUnrest"
  },

  gainRemoveUnrest: {
    letter: "H",
    titleKey:
      "botActions.peaceRebels.gainRemoveUnrest.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.peaceRebels.gainRemoveUnrest.text"
      }
    ],

    next: "rollRebelDice"
  },

  rollRebelDice: {
    letter: "I",
    titleKey:
      "botActions.peaceRebels.rollRebelDice.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.peaceRebels.rollRebelDice.text"
      },

      {
        type: "reminder",
        titleKey:
          "botActions.peaceRebels.rollRebelDice.botRulesTitle",

        textKeys: [
          "botActions.peaceRebels.rollRebelDice.allAtOnce",
          "botActions.peaceRebels.rollRebelDice.maxBotPowerLoss",
          "botActions.peaceRebels.rollRebelDice.choiceProcess",
          "botActions.peaceRebels.rollRebelDice.liberatedProvince"
        ]
      },

      {
        type: "reminder",
        titleKey:
          "botActions.peaceRebels.rollRebelDice.resultsTitle",

        itemKeys: [
          "botActions.peaceRebels.rollRebelDice.resultRebellion",
          "botActions.peaceRebels.rollRebelDice.resultLoseBotPower1",
          "botActions.peaceRebels.rollRebelDice.resultLoseBotPower2",
          "botActions.peaceRebels.rollRebelDice.resultLoseBotPower3",
          "botActions.peaceRebels.rollRebelDice.resultNoEffect",
          "botActions.peaceRebels.rollRebelDice.resultRemoveUnrest"
        ]
      }
    ],

    next: null
  }
};
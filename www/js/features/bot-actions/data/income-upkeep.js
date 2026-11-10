export const INCOME_UPKEEP_PHASE = {
  titleKey: "botActions.incomeUpkeep.title",
  introKey: "botActions.incomeUpkeep.intro",
  startStep: "refreshBotPower"
};

export const INCOME_UPKEEP_STEPS = {
  refreshBotPower: {
    marker: "1",

    titleKey:
      "botActions.incomeUpkeep.refreshBotPower.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.incomeUpkeep.refreshBotPower.text"
      },

      {
        type: "text",
        textKey:
          "botActions.incomeUpkeep.refreshBotPower.townBonus"
      },

      {
        type: "reminder",
        titleKey:
          "botActions.incomeUpkeep.refreshBotPower.difficultyTitle",

        textKeys: [
          "botActions.incomeUpkeep.refreshBotPower.difficultyEasy",
          "botActions.incomeUpkeep.refreshBotPower.difficultyNormal",
          "botActions.incomeUpkeep.refreshBotPower.difficultyHard",
          "botActions.incomeUpkeep.refreshBotPower.difficultyVeryHard"
        ]
      }
    ],

    next: "botEmperor"
  },

  botEmperor: {
    marker: "2",

    titleKey:
      "botActions.incomeUpkeep.botEmperor.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.incomeUpkeep.botEmperor.adjustAuthority"
      },

      {
        type: "reminder",
        titleKey:
          "botActions.incomeUpkeep.botEmperor.mainRulesReference",

        itemKeys: [
          "botActions.incomeUpkeep.botEmperor.roll1",
          "botActions.incomeUpkeep.botEmperor.roll2To5Lower",
          "botActions.incomeUpkeep.botEmperor.roll2To5Higher",
          "botActions.incomeUpkeep.botEmperor.roll6"
        ]
      },

      {
        type: "text",
        textKey:
          "botActions.incomeUpkeep.botEmperor.gainBotPower"
      },

      {
        type: "text",
        textKey:
          "botActions.incomeUpkeep.botEmperor.gainPrestige"
      }
    ],

    next: "papalControllerBonuses"
  },

  papalControllerBonuses: {
    marker: "3",

    titleKey:
      "botActions.incomeUpkeep.papalControllerBonuses.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.incomeUpkeep.papalControllerBonuses.botPower"
      },

      {
        type: "text",
        textKey:
          "botActions.incomeUpkeep.papalControllerBonuses.prestige"
      }
    ],

    next: "scorePowerStrugglesAndCrusades"
  },

  scorePowerStrugglesAndCrusades: {
    marker: "4",

    titleKey:
      "botActions.incomeUpkeep.scoring.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.incomeUpkeep.scoring.intro"
      },

      {
        type: "reminder",
        titleKey:
          "botActions.incomeUpkeep.scoring.powerStrugglesReference",

        textKeys: [
          "botActions.incomeUpkeep.scoring.powerStrugglesIntro",
          "botActions.incomeUpkeep.scoring.powerStrugglesBattlegroundTax",
          "botActions.incomeUpkeep.scoring.powerStrugglesOnlyPr",
          "botActions.incomeUpkeep.scoring.powerStrugglesDiplomacy",
          "botActions.incomeUpkeep.scoring.powerStrugglesAdditional"
        ]
      },

      {
        type: "reminder",
        titleKey:
          "botActions.incomeUpkeep.scoring.crusadeReference",

        textKeys: [
          "botActions.incomeUpkeep.scoring.crusadeIntro",
          "botActions.incomeUpkeep.scoring.crusadeSuccess",
          "botActions.incomeUpkeep.scoring.crusadeFailure",
          "botActions.incomeUpkeep.scoring.crusadeNoCommitment"
        ]
      }
    ],

    next: null
  }
};
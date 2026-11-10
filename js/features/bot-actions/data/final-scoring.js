export const FINAL_SCORING_PHASE = {
  titleKey: "botActions.finalScoringPhase.title",
  introKey: "botActions.finalScoringPhase.intro",
  startStep: "startFinalScoring"
};

export const FINAL_SCORING_STEPS = {
  startFinalScoring: {
    marker: "1",

    titleKey:
      "botActions.finalScoringPhase.startFinalScoring.title",

    blocks: [
      {
        type: "reminder",
        titleKey:
          "botActions.finalScoringPhase.mainRulesReference",

        textKeys: [
          "botActions.finalScoringPhase.startFinalScoring.intro"
        ],

        itemKeys: [
          "botActions.finalScoringPhase.startFinalScoring.noEvents",
          "botActions.finalScoringPhase.startFinalScoring.prestigeLead",
          "botActions.finalScoringPhase.startFinalScoring.allTownsAndVassals"
        ]
      }
    ],

    next: "scorePrestige"
  },

  scorePrestige: {
    marker: "2",

    titleKey:
      "botActions.finalScoringPhase.scorePrestige.title",

    blocks: [
      {
        type: "reminder",
        titleKey:
          "botActions.finalScoringPhase.mainRulesReference",

        itemKeys: [
          "botActions.finalScoringPhase.scorePrestige.missions",
          "botActions.finalScoringPhase.scorePrestige.taxIncome",
          "botActions.finalScoringPhase.scorePrestige.cores",
          "botActions.finalScoringPhase.scorePrestige.royalMarriages",
          "botActions.finalScoringPhase.scorePrestige.alliances",
          "botActions.finalScoringPhase.scorePrestige.papalController",
          "botActions.finalScoringPhase.scorePrestige.emperor",
          "botActions.finalScoringPhase.scorePrestige.stability"
        ]
      }
    ],

    next: "prestigePenalties"
  },

  prestigePenalties: {
    marker: "3",

    titleKey:
      "botActions.finalScoringPhase.prestigePenalties.title",

    blocks: [
      {
        type: "reminder",
        titleKey:
          "botActions.finalScoringPhase.mainRulesReference",

        itemKeys: [
          "botActions.finalScoringPhase.prestigePenalties.occupiedTowns",
          "botActions.finalScoringPhase.prestigePenalties.interest"
        ]
      }
    ],

    next: "determineWinner"
  },

  determineWinner: {
    marker: "4",

    titleKey:
      "botActions.finalScoringPhase.determineWinner.title",

    blocks: [
      {
        type: "reminder",
        titleKey:
          "botActions.finalScoringPhase.mainRulesReference",

        textKeys: [
          "botActions.finalScoringPhase.determineWinner.mostPrestige"
        ],

        itemKeys: [
          "botActions.finalScoringPhase.determineWinner.monarchPower",
          "botActions.finalScoringPhase.determineWinner.ducats",
          "botActions.finalScoringPhase.determineWinner.sharedVictory"
        ]
      }
    ],

    next: null
  }
};
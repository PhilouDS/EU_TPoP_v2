export const END_OF_AGE_PHASE = {
  titleKey: "botActions.endOfAge.title",
  introKey: "botActions.endOfAge.intro",
  startStep: "resetBotDeck"
};

export const END_OF_AGE_STEPS = {
  resetBotDeck: {
    marker: "1",

    titleKey:
      "botActions.endOfAge.resetBotDeck.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.endOfAge.resetBotDeck.text"
      }
    ],

    next: "prepareNextAge"
  },

  prepareNextAge: {
    marker: "2",

    titleKey:
      "botActions.endOfAge.prepareNextAge.title",

    blocks: [
      {
        type: "reminder",
        titleKey:
          "botActions.endOfAge.mainRulesReference",

        textKeys: [
          "botActions.endOfAge.prepareNextAge.eventDeck",
          "botActions.endOfAge.prepareNextAge.noNextAge",
          "botActions.endOfAge.prepareNextAge.milestones",
          "botActions.endOfAge.prepareNextAge.ideas"
        ]
      }
    ],

    next: "leastPrestige"
  },

  leastPrestige: {
    marker: "3",

    titleKey:
      "botActions.endOfAge.leastPrestige.title",

    blocks: [
      {
        type: "reminder",
        titleKey:
          "botActions.endOfAge.mainRulesReference",

        textKeys: [
          "botActions.endOfAge.leastPrestige.text",
          "botActions.endOfAge.leastPrestige.tie"
        ]
      }
    ],

    next: "royalMarriages"
  },

  royalMarriages: {
    marker: "4",

    titleKey:
      "botActions.endOfAge.royalMarriages.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.endOfAge.royalMarriages.botRule"
      },

      {
        type: "reminder",
        titleKey:
          "botActions.endOfAge.mainRulesReference",

        textKeys: [
          "botActions.endOfAge.royalMarriages.scorePrestige",
          "botActions.endOfAge.royalMarriages.normalRule",
          "botActions.endOfAge.royalMarriages.reciprocalRemoval"
        ]
      }
    ],

    next: null
  }
};
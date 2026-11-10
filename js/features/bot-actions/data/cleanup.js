export const CLEANUP_PHASE = {
  titleKey: "botActions.cleanupPhase.title",
  introKey: "botActions.cleanupPhase.intro",
  startStep: "updateManpowerReserve"
};

export const CLEANUP_STEPS = {
  updateManpowerReserve: {
    marker: "1",

    titleKey:
      "botActions.cleanupPhase.updateManpowerReserve.title",

    blocks: [
      {
        type: "reminder",
        titleKey:
          "botActions.cleanupPhase.statusMat.reference",

        textKeys: [
          "botActions.cleanupPhase.statusMat.text"
        ]
      },

      {
        type: "text",
        textKey:
          "botActions.cleanupPhase.updateManpowerReserve.text"
      },

      {
        type: "reminder",
        titleKey:
          "botActions.cleanupPhase.updateManpowerReserve.reference",

        textKeys: [
          "botActions.cleanupPhase.updateManpowerReserve.reminder"
        ]
      }
    ],

    next: "colonists"
  },

  colonists: {
    marker: "2",

    titleKey:
      "botActions.cleanupPhase.colonists.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.cleanupPhase.colonists.text"
      },

      {
        type: "reminder",
        titleKey:
          "botActions.cleanupPhase.colonists.reference",

        textKeys: [
          "botActions.cleanupPhase.colonists.reminder"
        ]
      }
    ],

    next: "alliancesEnd"
  },

  alliancesEnd: {
    marker: "3",

    titleKey:
      "botActions.cleanupPhase.alliancesEnd.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.cleanupPhase.alliancesEnd.text"
      }
    ],

    next: "botEmperor"
  },

  botEmperor: {
    marker: "4",

    titleKey:
      "botActions.cleanupPhase.botEmperor.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.cleanupPhase.botEmperor.intro"
      },

      {
        type: "reminder",
        titleKey:
          "botActions.cleanupPhase.botEmperor.priorityTitle",

        itemKeys: [
          "botActions.cleanupPhase.botEmperor.priority1",
          "botActions.cleanupPhase.botEmperor.priority2",
          "botActions.cleanupPhase.botEmperor.priority3"
        ],
        listType: "ordered"
      }
    ],

    next: "reshuffleBotDeck"
  },

  reshuffleBotDeck: {
    marker: "5",

    titleKey:
      "botActions.cleanupPhase.reshuffleBotDeck.title",

    blocks: [
      {
        type: "text",
        textKey:
          "botActions.cleanupPhase.reshuffleBotDeck.intro"
      },

      {
        type: "reminder",
        titleKey:
          "botActions.cleanupPhase.reshuffleBotDeck.rulesTitle",

        itemKeys: [
          "botActions.cleanupPhase.reshuffleBotDeck.events",
          "botActions.cleanupPhase.reshuffleBotDeck.ideas",
          "botActions.cleanupPhase.reshuffleBotDeck.focus",
          "botActions.cleanupPhase.reshuffleBotDeck.remaining"
        ]
      },

      {
        type: "text",
        textKey:
          "botActions.cleanupPhase.reshuffleBotDeck.removedCards"
      }
    ],

    next: null
  }
};
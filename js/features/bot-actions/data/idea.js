export const IDEA_STEPS = {
  cubeInNonEconomicFocusArea: {
    type: "question",
    textKey: "botActions.idea.cubeInNonEconomicFocusArea",
    yes: "availableIdeasMatchingFocus",
    no: "focusTypeRoll"
  },

  availableIdeasMatchingFocus: {
    type: "question",
    textKey: "botActions.idea.availableIdeasMatchingFocus",
    yes: "pickIdea",
    no: "focusTypeRoll"
  },

  focusTypeRoll: {
    type: "roll",
    die: "standardD6",
    textKey: "botActions.idea.selectFocusType",
    choices: [
      { values: [1, 2], focusType: "administrative" },
      { values: [3, 4], focusType: "diplomatic" },
      { values: [5, 6], focusType: "military" }
    ]
  },

  pickIdea: {
    type: "action",
    textKey: "botActions.idea.pickIdea",
    detailKeys: [
      "botActions.idea.tagIdea",
      "botActions.idea.scorePrestige",
      "botActions.idea.preferIdeas"
    ],
    next: "endTurn"
  },

  endTurn: {
    type: "end",
    textKey: "botActions.idea.endTurn"
  }
};
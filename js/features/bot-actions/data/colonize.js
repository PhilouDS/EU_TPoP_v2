export const COLONIZE_STEPS = {
  has2ColonistsAndConnectedClaim: {
    type: "question",
    textKey: "botActions.colonize.has2ColonistsAndConnectedClaim",
    yes: "has3Colonists",
    no: "goExplore"
  },

  has3Colonists: {
    type: "question",
    textKey: "botActions.colonize.has3Colonists",
    yes: "remove3Colonists",
    no: "removeAllColonists"
  },

  remove3Colonists: {
    type: "action",
    textKey: "botActions.colonize.remove3Colonists",
    next: "replaceColonialClaim"
  },

  removeAllColonists: {
    type: "action",
    textKey: "botActions.colonize.removeAllColonists",
    next: "replaceColonialClaim"
  },

  replaceColonialClaim: {
    type: "action",
    textKey: "botActions.colonize.replaceColonialClaim",
    detailKeys: ["botActions.colonize.preferredLocation"],
    next: "endTurn"
  },

  goExplore: {
    type: "external",
    navigation: "goto",
    target: "explore",
    textKey: "botActions.colonize.goToExplore"
  },

  endTurn: {
    type: "end",
    textKey: "botActions.colonize.endTurn"
  }
};
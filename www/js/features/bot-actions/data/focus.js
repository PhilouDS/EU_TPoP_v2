export const FOCUS_STEPS = {
  cubeInFocusAreaAlready: {
    type: "question",
    textKey: "botActions.focus.cubeInFocusAreaAlready",
    yes: "placeSpentBotPowerExistingArea",
    no: "placeSpentBotPowerNamedArea"
  },

  placeSpentBotPowerExistingArea: {
    type: "action",
    textKey: "botActions.focus.placeSpentBotPowerExistingArea",
    next: "hasEnoughCubes"
  },

  placeSpentBotPowerNamedArea: {
    type: "action",
    textKey: "botActions.focus.placeSpentBotPowerNamedArea",
    next: "putAsideBotCard"
  },

  hasEnoughCubes: {
    type: "question",
    textKey: "botActions.focus.hasEnoughCubes",
    noteKey: "botActions.focus.notes.difficultyLevel",
    yes: "matchingMilestoneAvailable",
    no: "putAsideBotCard"
  },

  matchingMilestoneAvailable: {
    type: "question",
    textKey: "botActions.focus.matchingMilestoneAvailable",
    yes: "scoreMatchingMilestone",
    no: "score3Prestige"
  },

  scoreMatchingMilestone: {
    type: "action",
    textKey: "botActions.focus.scoreMatchingMilestone",
    next: "discardCubes"
  },

  score3Prestige: {
    type: "action",
    textKey: "botActions.focus.score3Prestige",
    next: "discardCubes"
  },

  discardCubes: {
    type: "action",
    textKey: "botActions.focus.discardCubes",
    next: "endTurn"
  },

  putAsideBotCard: {
    type: "action",
    textKey: "botActions.focus.putAsideBotCard",
    detailKeys: ["botActions.focus.notReshuffledThisAge"],
    next: "endTurn"
  },

  endTurn: {
    type: "end",
    textKey: "botActions.focus.endTurn"
  }
};
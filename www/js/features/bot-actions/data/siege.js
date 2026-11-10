export const SIEGE_STEPS = {
  siegeProvinces: {
    type: "action",
    textKey: "botActions.siege.siegeProvinces",
    detailKeys: [
      "botActions.siege.preferredTargets"
    ],
    noteKey: "botActions.siege.notes.siegeRules",
    next: "atWarOrRebels"
  },

  atWarOrRebels: {
    type: "question",
    textKey: "botActions.siege.atWarOrRebels",
    yes: "endTurn",
    no: "removeArmy"
  },

  removeArmy: {
    type: "action",
    textKey: "botActions.siege.removeArmy",
    next: "endTurn"
  },

  endTurn: {
    type: "end",
    textKey: "botActions.siege.endTurn"
  }
};
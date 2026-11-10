export const UNREST_STEPS = {
  ownsProvincesWithUnrest: {
    type: "question",
    textKey: "botActions.unrest.ownsProvincesWithUnrest",
    yes: "removeUnrest",
    no: "hasLessThan2CoresAndCanPlace"
  },

  removeUnrest: {
    type: "action",
    textKey: "botActions.unrest.removeUnrest",
    detailKeys: ["botActions.unrest.preferCapitalThenLargeTown"],
    next: "endTurn"
  },

  hasLessThan2CoresAndCanPlace: {
    type: "question",
    textKey: "botActions.unrest.hasLessThan2CoresAndCanPlace",
    yes: "placeCore",
    no: "ownsEligibleAreaWithHigherTaxValue"
  },

  ownsEligibleAreaWithHigherTaxValue: {
    type: "question",
    textKey: "botActions.unrest.ownsEligibleAreaWithHigherTaxValue",
    yes: "removeCore",
    no: "performSecondAction"
  },

  removeCore: {
    type: "action",
    textKey: "botActions.unrest.removeCore",
    next: "placeCore"
  },

  placeCore: {
    type: "action",
    textKey: "botActions.unrest.placeCore",
    noteKey: "botActions.unrest.notes.removeOtherBotsClaims",
    next: "endTurn"
  },

  performSecondAction: {
    type: "action",
    textKey: "botActions.unrest.performSecondAction",
    next: null
  },

  endTurn: {
    type: "end",
    textKey: "botActions.unrest.endTurn"
  }
};
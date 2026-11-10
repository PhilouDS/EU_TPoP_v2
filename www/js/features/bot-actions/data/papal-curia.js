export const PAPAL_CURIA_STEPS = {
  hasCatholicStateReligion: {
    type: "question",
    textKey: "botActions.papalCuria.hasCatholicStateReligion",
    yes: "uncontestedPapalController",
    no: "performSecondAction"
  },

  uncontestedPapalController: {
    type: "question",
    textKey: "botActions.papalCuria.uncontestedPapalController",
    yes: "age1Or2",
    no: "papalControllerCanExcommunicate"
  },

  age1Or2: {
    type: "question",
    textKey: "botActions.papalCuria.age1Or2",
    yes: "adjacentToMuslimArea",
    no: "performSecondAction"
  },

  adjacentToMuslimArea: {
    type: "question",
    textKey: "botActions.papalCuria.adjacentToMuslimArea",
    yes: "placeCrusade",
    no: "catholicOpponentsNoActiveExcomCrusade"
  },

  catholicOpponentsNoActiveExcomCrusade: {
    type: "question",
    textKey: "botActions.papalCuria.catholicOpponentsNoActiveExcomCrusade",
    yes: "excommunicateOpponent",
    no: "performSecondAction"
  },

  papalControllerCanExcommunicate: {
    type: "question",
    textKey: "botActions.papalCuria.papalControllerCanExcommunicate",
    yes: "excommunicateOpponent",
    no: "placeCardinal"
  },

  placeCardinal: {
    type: "action",
    textKey: "botActions.papalCuria.placeCardinal",
    detailKeys: ["botActions.papalCuria.ifNowPapalController"],
    next: "endTurn"
  },

  excommunicateOpponent: {
    type: "action",
    textKey: "botActions.papalCuria.excommunicateOpponent",
    next: "endTurn"
  },

  placeCrusade: {
    type: "action",
    textKey: "botActions.papalCuria.placeCrusade",
    detailKeys: ["botActions.papalCuria.preferAreaWithTown"],
    next: "goMilitary"
  },

  goMilitary: {
    type: "external",
    navigation: "goto",
    target: "military",
    entryStep: "declareWarOnTarget",
    textKey: "botActions.papalCuria.goToMilitary",
    detailKeys: ["botActions.papalCuria.militaryCrusadeTarget"]
  },

  performSecondAction: {
    type: "action",
    textKey: "botActions.papalCuria.performSecondAction",
    next: null
  },

  endTurn: {
    type: "end",
    textKey: "botActions.papalCuria.endTurn"
  }
};
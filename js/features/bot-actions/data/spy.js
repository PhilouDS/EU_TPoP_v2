export const SPY_STEPS = {
  atWarWithOpponent: {
    type: "question",
    textKey: "botActions.spy.atWarWithOpponent",
    yes: "selectWarOpponent",
    no: "atWarWithNpr"
  },

  selectWarOpponent: {
    type: "action",
    textKey: "botActions.spy.selectWarOpponent",
    next: "opponentHas3Unrest"
  },

  opponentHas3Unrest: {
    type: "question",
    textKey: "botActions.spy.opponentHas3Unrest",
    yes: "opponentRollRebelDice",
    no: "add2Unrest"
  },

  opponentRollRebelDice: {
    type: "action",
    textKey: "botActions.spy.opponentRollRebelDice",
    next: "endTurn"
  },

  atWarWithNpr: {
    type: "question",
    textKey: "botActions.spy.atWarWithNpr",
    yes: "goMilitary",
    no: "selectOpponent"
  },

  goMilitary: {
    type: "external",
    navigation: "goto",
    target: "military",
    textKey: "botActions.spy.goToMilitary"
  },

  selectOpponent: {
    type: "action",
    textKey: "botActions.spy.selectOpponent",
    next: "add2Unrest"
  },

  add2Unrest: {
    type: "action",
    textKey: "botActions.spy.add2Unrest",
    next: "endTurn"
  },

  endTurn: {
    type: "end",
    textKey: "botActions.spy.endTurn"
  }
};
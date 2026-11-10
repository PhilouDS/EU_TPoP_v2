export const EVENT_STEPS = {
  alreadyTakenEventAction: {
    type: "question",
    textKey: "botActions.event.alreadyTakenEventAction",
    yes: "restartMainTurn",
    no: "eventRoll"
  },

  restartMainTurn: {
    type: "external",
    navigation: "goto",
    target: "main-turn",
    entryStep: "start",
    textKey: "botActions.event.restartMainTurn"
  },

  eventRoll: {
    type: "roll",
    die: "standardD6",
    textKey: "botActions.event.dieResult",
    choices: [
      { label: "1", values: [1], target: "pickLeftmostEvent" },
      { label: "2", values: [2], target: "pickSecondEvent" },
      { label: "3", values: [3], target: "pickRightmostEvent" },
      { label: "4", values: [4], target: "opponentEventRevealed" },
      { label: "5–6", values: [5, 6], target: "ownEventRevealed" }
    ]
  },

  pickLeftmostEvent: {
    type: "action",
    textKey: "botActions.event.pickLeftmostEvent",
    next: "isOpponentsEvent"
  },

  pickSecondEvent: {
    type: "action",
    textKey: "botActions.event.pickSecondEvent",
    next: "isOpponentsEvent"
  },

  pickRightmostEvent: {
    type: "action",
    textKey: "botActions.event.pickRightmostEvent",
    next: "isOpponentsEvent"
  },

  opponentEventRevealed: {
    type: "question",
    textKey: "botActions.event.opponentEventRevealed",
    yes: "pickSuchEvent",
    no: "ownEventRevealed"
  },

  ownEventRevealed: {
    type: "question",
    textKey: "botActions.event.ownEventRevealed",
    yes: "pickThisEvent",
    no: "atWarWithEventOpponent"
  },

  atWarWithEventOpponent: {
    type: "question",
    textKey: "botActions.event.atWarWithEventOpponent",
    yes: "pickSuchEvent",
    no: "pickLeftmostEvent"
  },

  pickSuchEvent: {
    type: "action",
    textKey: "botActions.event.pickSuchEvent",
    next: "resolveOptionB"
  },

  pickThisEvent: {
    type: "action",
    textKey: "botActions.event.pickThisEvent",
    next: "resolveOptionA"
  },

  isOpponentsEvent: {
    type: "question",
    textKey: "botActions.event.isOpponentsEvent",
    yes: "resolveOptionB",
    no: "resolveOptionA"
  },

  resolveOptionA: {
    type: "action",
    textKey: "botActions.event.resolveOptionA",
    next: "resolveSecondaryEffects"
  },

  resolveOptionB: {
    type: "action",
    textKey: "botActions.event.resolveOptionB",
    next: "resolveSecondaryEffects"
  },

  resolveSecondaryEffects: {
    type: "action",
    textKey: "botActions.event.resolveSecondaryEffects",
    next: "canDevelopLargeTown"
  },

  canDevelopLargeTown: {
    type: "question",
    textKey: "botActions.event.canDevelopLargeTown",
    yes: "developLargeTown",
    no: "endTurn"
  },

  developLargeTown: {
    type: "action",
    textKey: "botActions.event.developLargeTown",
    detailKeys: ["botActions.event.developLargeTownPreference"],
    next: "endTurn"
  },

  endTurn: {
    type: "end",
    textKey: "botActions.event.endTurn"
  }
};
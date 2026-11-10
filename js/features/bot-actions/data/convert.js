export const CONVERT_STEPS = {
  anyAreasWithReligiousDissent: {
    type: "question",
    textKey: "botActions.convert.anyAreasWithReligiousDissent",
    yes: "catholicAndAllAreasProtestantOrViceVersa",
    no: "performSecondAction"
  },

  catholicAndAllAreasProtestantOrViceVersa: {
    type: "question",
    textKey: "botActions.convert.catholicAndAllAreasProtestantOrViceVersa",
    yes: "changeStateReligion",
    no: "allProvincesOwnedBySameReligion"
  },

  allProvincesOwnedBySameReligion: {
    type: "question",
    textKey: "botActions.convert.allProvincesOwnedBySameReligion",
    yes: "convertArea",
    no: "performSecondAction"
  },

  changeStateReligion: {
    type: "action",
    textKey: "botActions.convert.changeStateReligion",
    detailKeys: ["botActions.convert.changeStateReligionEffects"],
    noteKey: "botActions.convert.notes.changeStateReligion",
    next: "endTurn"
  },

  convertArea: {
    type: "action",
    textKey: "botActions.convert.convertArea",
    detailKeys: ["botActions.convert.preferArea"],
    next: "endTurn"
  },

  performSecondAction: {
    type: "action",
    textKey: "botActions.convert.performSecondAction",
    next: null
  },

  endTurn: {
    type: "end",
    textKey: "botActions.convert.endTurn"
  }
};
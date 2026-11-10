export const PLAYER_PEACE_RESOLUTION_STEPS = {

  // ========================================================
  //  1. AUTOMATIC WHITE PEACE
  // ========================================================

  automaticWhitePeace: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.automaticWhitePeace",
    noteKey: "playerResolutions.peaceResolution.notes.note1",
    yes: "resolveAutomaticWhitePeace",
    no: "anyTotalVictory"
  },

  resolveAutomaticWhitePeace: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.resolveAutomaticWhitePeace",
    noteKey: "playerResolutions.peaceResolution.notes.automaticWhitePeaceActiveAllies",
    next: "anyTotalVictory"
  },


  // ========================================================
  //  2. TOTAL VICTORY
  // ========================================================

  anyTotalVictory: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.anyTotalVictory",
    noteKey: "playerResolutions.peaceResolution.notes.note2",
    yes: "selectTotalVictoryPlayer",
    no: "anyUnresolvedWars"
  },

  selectTotalVictoryPlayer: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.selectTotalVictoryPlayer",
    detailKeys: [
      "playerResolutions.peaceResolution.playerOrderReminder"
    ],
    next: "totalVictorHuman"
  },

  totalVictorHuman: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.victorHuman",
    yes: "totalLoserHuman",
    no: "goToBotPeaceTotalVictory"
  },

  goToBotPeaceTotalVictory: {
    type: "goto",
    textKey: "playerResolutions.peaceResolution.goToBotPeaceResolution",
    target: "bot-peace-resolution",
    returnStep: "anyTotalVictory"
  },

  totalLoserHuman: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.loserHuman",
    yes: "enforcePeaceTerms",
    no: "wantsFullAnnexation"
  },

  wantsFullAnnexation: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.wantsFullAnnexation",
    noteKey: "playerResolutions.peaceResolution.notes.fullAnnexation",
    yes: "annexationVassalizationCleanup",
    no: "loserIsBot"
  },

  loserIsBot: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.loserBot",
    yes: "enforcePeaceTerms",
    no: "wantsVassalization"
  },

  wantsVassalization: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.wantsVassalization",
    noteKey: "playerResolutions.peaceResolution.notes.note4",
    yes: "applyVassalization",
    no: "wantsKeepCurrentBoardState"
  },

  applyVassalization: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.applyVassalization",
    next: "annexationVassalizationCleanup"
  },

  annexationVassalizationCleanup: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.annexationVassalizationCleanup",
    next: "anyTotalVictory"
  },


  // ========================================================
  //  3. REMAINING WARS
  // ========================================================

  anyUnresolvedWars: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.anyUnresolvedWars",
    yes: "anyoneWantsToEndWar",
    no: "relocateNeutralLandUnits"
  },

  anyoneWantsToEndWar: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.anyoneWantsToEndWar",
    noteKey: "playerResolutions.peaceResolution.notes.note3",
    yes: "selectActivePlayer",
    no: "relocateNeutralLandUnits"
  },

  selectActivePlayer: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.selectActivePlayer",
    detailKeys: [
      "playerResolutions.peaceResolution.playerOrderReminder"
    ],
    next: "activePlayerHuman"
  },

  activePlayerHuman: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.activePlayerHuman",
    yes: "pickUnresolvedWar",
    no: "goToBotPeaceRemainingWars"
  },

  goToBotPeaceRemainingWars: {
    type: "goto",
    textKey: "playerResolutions.peaceResolution.goToBotPeaceResolution",
    target: "bot-peace-resolution",
    returnStep: "anyTotalVictory"
  },

  pickUnresolvedWar: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.pickUnresolvedWar",
    next: "eitherSideSurrenders"
  },

  eitherSideSurrenders: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.eitherSideSurrenders",
    noteKey: "playerResolutions.peaceResolution.notes.note6",
    yes: "resolveSurrenderPrestige",
    no: "enemyHuman"
  },

  resolveSurrenderPrestige: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.resolveSurrenderPrestige",
    next: "wantsHumiliation"
  },

  enemyHuman: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.enemyHuman",
    yes: "eitherPlayerHasDoubleUnits",
    no: "activePlayerOutnumbersNonHumanEnemy"
  },

  eitherPlayerHasDoubleUnits: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.eitherPlayerHasDoubleUnits",
    noteKey: "playerResolutions.peaceResolution.notes.note5",
    yes: "enforcePeaceTerms",
    no: "negotiatedPeace"
  },

  activePlayerOutnumbersNonHumanEnemy: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.activePlayerOutnumbersNonHumanEnemy",
    noteKey: "playerResolutions.peaceResolution.notes.note5NonHuman",
    yes: "loserIsBot",
    no: "whitePeaceAgreed"
  },


  // ========================================================
  //  PEACE TERMS
  // ========================================================

  enforcePeaceTerms: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.enforcePeaceTerms",
    yes: "wantsHumiliation",
    no: "negotiatedPeace"
  },


  // --------------------------------------------------------
  //  HUMILIATION
  // --------------------------------------------------------

  wantsHumiliation: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.wantsHumiliation",
    noteKey: "playerResolutions.peaceResolution.notes.note7",
    yes: "applyHumiliation",
    no: "wantsKeepCurrentBoardState"
  },

  applyHumiliation: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.applyHumiliation",
    noteKey: "playerResolutions.peaceResolution.notes.humiliationActiveAllies",
    next: "placeTruceTokens"
  },


  // --------------------------------------------------------
  //  KEEP CURRENT BOARD STATE
  // --------------------------------------------------------

  wantsKeepCurrentBoardState: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.wantsKeepCurrentBoardState",
    yes: "returnOccupiedCapitals",
    no: "wantsSecureDesiredSuccession"
  },

  returnOccupiedCapitals: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.returnOccupiedCapitals",
    noteKey: "playerResolutions.peaceResolution.notes.note8",
    next: "applyKeepCurrentBoardState"
  },

  applyKeepCurrentBoardState: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.applyKeepCurrentBoardState",
    noteKey: "playerResolutions.peaceResolution.notes.note8",
    next: "placeTruceTokens"
  },

  keepBoardStateClaimsAndUnrest: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.keepBoardStateClaimsAndUnrest",
    noteKey: "playerResolutions.peaceResolution.notes.keepBoardStateLostProvinces",
    next: "anyTotalVictory"
  },


  // --------------------------------------------------------
  //  SECURE DESIRED SUCCESSION
  // --------------------------------------------------------

  wantsSecureDesiredSuccession: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.wantsSecureDesiredSuccession",
    noteKey: "playerResolutions.peaceResolution.notes.note9",
    yes: "applySecureDesiredSuccession",
    no: "wantsForceConversion"
  },

  applySecureDesiredSuccession: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.applySecureDesiredSuccession",
    next: "returnAllOccupiedProvinces"
  },


  // --------------------------------------------------------
  //  FORCE CONVERSION
  // --------------------------------------------------------

  wantsForceConversion: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.wantsForceConversion",
    noteKey: "playerResolutions.peaceResolution.notes.note10",
    yes: "applyForceConversion",
    no: "negotiatedPeace"
  },

  applyForceConversion: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.applyForceConversion",
    next: "returnAllOccupiedProvinces"
  },


  // ========================================================
  //  NEGOTIATED PEACE / WHITE PEACE
  // ========================================================

  negotiatedPeace: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.negotiatedPeace",
    noteKey: "playerResolutions.peaceResolution.notes.negotiatedPeace",
    next: "nonWhitePeaceTermsAgreed"
  },

  nonWhitePeaceTermsAgreed: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.nonWhitePeaceTermsAgreed",
    yes: "placeTruceTokens",
    no: "whitePeaceAgreed"
  },

  whitePeaceAgreed: {
    type: "question",
    textKey: "playerResolutions.peaceResolution.whitePeaceAgreed",
    noteKey: "playerResolutions.peaceResolution.notes.whitePeaceAcceptance",
    yes: "applyWhitePeacePrestige",
    no: "anyTotalVictory"
  },

  applyWhitePeacePrestige: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.applyWhitePeacePrestige",
    next: "returnAllOccupiedProvinces"
  },


  // ========================================================
  //  COMMON ACTIONS AFTER PEACE TERMS
  // ========================================================

  returnAllOccupiedProvinces: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.returnAllOccupiedProvinces",
    next: "placeTruceTokens"
  },

  placeTruceTokens: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.placeTruceTokens",
    noteKey: "playerResolutions.peaceResolution.notes.truceTokens",
    next: "keepBoardStateClaimsAndUnrest"
  },


  // ========================================================
  //  4. AFTERMATH
  // ========================================================

  relocateNeutralLandUnits: {
    type: "action",
    textKey: "playerResolutions.peaceResolution.relocateNeutralLandUnits",
    detailKeys: [
      "playerResolutions.peaceResolution.flipWarTokens",
      "playerResolutions.peaceResolution.returnAlliedUnits"
    ],
    noteKey: "playerResolutions.peaceResolution.notes.relocateNeutralLandUnits",
    next: "endPeaceResolution"
  },

  endPeaceResolution: {
    type: "end",
    textKey: "playerResolutions.peaceResolution.endPeaceResolution"
  }
};
export const PEACE_STEPS = {
  automaticWhitePeace: {
    type: "question",
    textKey: "botActions.peace.automaticWhitePeace",
    yes: "endWarPrestigeLoss",
    no: "totalVictoryAgainstNpr"
  },

  totalVictoryAgainstNpr: {
    type: "question",
    textKey: "botActions.peace.totalVictoryAgainstNpr",
    noteKey: "botActions.peace.notes.totalVictoryAgainstNpr",
    yes: "annexEnemyNpr",
    no: "atWarHumanPlayer"
  },

  annexEnemyNpr: {
    type: "action",
    textKey: "botActions.peace.annexEnemyNpr",
    detailKeys: [
      "botActions.peace.removeOtherTokensAnnexedProvinces"
    ],
    next: "truceAndClaims"
  },

  atWarHumanPlayer: {
    type: "question",
    textKey: "botActions.peace.atWarHumanPlayer",
    yes: "enemyPrSurrenders",
    no: "atWarAnotherBot"
  },

  enemyPrSurrenders: {
    type: "question",
    textKey: "botActions.peace.enemyPrSurrenders",
    yes: "surrenderReturnProvinces",
    no: "armyAtLeastDoubleEnemyPr"
  },

  surrenderReturnProvinces: {
    type: "action",
    textKey: "botActions.peace.surrenderReturnProvinces",
    next: "truceAndClaims"
  },

  armyAtLeastDoubleEnemyPr: {
    type: "question",
    textKey: "botActions.peace.armyAtLeastDoubleEnemyPr",
    noteKey: "botActions.peace.notes.distantUnitsDoNotCount",
    yes: "enemyPrLowIncomeNoBotTowns",
    no: "occupiedTaxValueGreaterOrEqual"
  },

  enemyPrLowIncomeNoBotTowns: {
    type: "question",
    textKey: "botActions.peace.enemyPrLowIncomeNoBotTowns",
    yes: "returnUpTo5TaxValue",
    no: "occupiedTaxValueGreater"
  },

  returnUpTo5TaxValue: {
    type: "action",
    textKey: "botActions.peace.returnUpTo5TaxValue",
    next: "truceAndClaims"
  },

  atWarAnotherBot: {
    type: "question",
    textKey: "botActions.peace.atWarAnotherBot",
    yes: "armyGreaterEnemyBot",
    no: "atWarNpr"
  },

  armyGreaterEnemyBot: {
    type: "question",
    textKey: "botActions.peace.armyGreaterEnemyBot",
    yes: "occupiedTaxValueGreater",
    no: "occupiedTaxValueGreaterOrEqual"
  },

  atWarNpr: {
    type: "question",
    textKey: "botActions.peace.atWarNpr",
    yes: "armyGreaterRebelUnits",
    no: "endResolution"
  },

  armyGreaterRebelUnits: {
    type: "question",
    textKey: "botActions.peace.armyGreaterRebelUnits",
    yes: "occupiedTaxValueGreater",
    no: "has2UnrestWithoutClaim"
  },

  occupiedTaxValueGreater: {
    type: "question",
    textKey: "botActions.peace.occupiedTaxValueGreater",
    yes: "anyoneOccupiesEnemyCapital",
    no: "has2UnrestWithoutClaim"
  },

  occupiedTaxValueGreaterOrEqual: {
    type: "question",
    textKey: "botActions.peace.occupiedTaxValueGreaterOrEqual",
    yes: "offerKeepCurrentBoardState",
    no: "offerWhitePeace"
  },

  has2UnrestWithoutClaim: {
    type: "question",
    textKey: "botActions.peace.has2UnrestWithoutClaim",
    yes: "offerWhitePeace",
    no: "willNotOfferPeace"
  },

  offerWhitePeace: {
    type: "action",
    textKey: "botActions.peace.offerWhitePeace",
    next: "whitePeaceAccepted"
  },

  whitePeaceAccepted: {
    type: "question",
    textKey: "botActions.peace.whitePeaceAccepted",
    noteKey: "botActions.peace.notes.whitePeaceAcceptance",
    yes: "returnAllProvincesLawfulOwners",
    no: "noPeaceConcluded"
  },

  returnAllProvincesLawfulOwners: {
    type: "action",
    textKey: "botActions.peace.returnAllProvincesLawfulOwners",
    next: "endWarPrestigeLoss"
  },

  endWarPrestigeLoss: {
    type: "action",
    textKey: "botActions.peace.endWarPrestigeLoss",
    next: "truceAndClaims"
  },

  offerKeepCurrentBoardState: {
    type: "action",
    textKey: "botActions.peace.offerKeepCurrentBoardState",
    next: "peaceTermsAccepted"
  },

  peaceTermsAccepted: {
    type: "question",
    textKey: "botActions.peace.peaceTermsAccepted",
    noteKey: "botActions.peace.notes.keepCurrentBoardStateAcceptance",
    yes: "anyoneOccupiesEnemyCapital",
    no: "noPeaceConcluded"
  },

  anyoneOccupiesEnemyCapital: {
    type: "question",
    textKey: "botActions.peace.anyoneOccupiesEnemyCapital",
    yes: "capitalReturnEffects",
    no: "enemyOccupiesBotTowns"
  },

  capitalReturnEffects: {
    type: "action",
    textKey: "botActions.peace.capitalReturnEffects",
    next: "enemyOccupiesBotTowns"
  },

  enemyOccupiesBotTowns: {
    type: "question",
    textKey: "botActions.peace.enemyOccupiesBotTowns",
    yes: "swapOccupiedProvinces",
    no: "endWarKeepCurrentBoardState"
  },

  swapOccupiedProvinces: {
    type: "action",
    presentation: "swap",
    introKey: "botActions.peace.swapIntro",
    enemyKey: "botActions.peace.swapEnemyOccupiedByBot",
    botKey: "botActions.peace.swapBotOccupiedByEnemy",
    matchingKey: "botActions.peace.swapMatchingTaxValue",
    next: "endWarKeepCurrentBoardState"
  },

  endWarKeepCurrentBoardState: {
    type: "action",
    textKey: "botActions.peace.endWarKeepCurrentBoardState",
    next: "truceAndClaims"
  },

  noPeaceConcluded: {
    type: "action",
    textKey: "botActions.peace.noPeaceConcluded",
    next: "remainingWars"
  },

  willNotOfferPeace: {
    type: "action",
    textKey: "botActions.peace.willNotOfferPeace",
    next: "remainingWars"
  },

  truceAndClaims: {
    type: "action",
    textKey: "botActions.peace.truceAndClaims",
    detailKeys: [
      "botActions.peace.botsAddMaxOneClaim"
    ],
    next: "cleanupClaimsCores"
  },

  cleanupClaimsCores: {
    type: "action",
    textKey: "botActions.peace.cleanupClaimsCores",
    noteKey: "botActions.peace.notes.removeOtherBotClaims",
    next: "remainingWars"
  },

  remainingWars: {
    type: "question",
    textKey: "botActions.peace.remainingWars",
    yes: "automaticWhitePeace",
    no: "endResolution"
  },

  endResolution: {
    type: "end",
    textKey: "botActions.peace.endResolution"
  }
};
export const PLAYER_LAND_BATTLE_STEPS = {
  appointAttackerGeneral: {
    type: "action",
    textKey:
      "playerResolutions.landBattle.appointAttackerGeneral",
    next: "anyDefenderHuman"
  },

  anyDefenderHuman: {
    type: "question",
    textKey:
      "playerResolutions.landBattle.anyDefenderHuman",
    yes: "moreThanOnePrDefender",
    no: "anyDefenderBot"
  },

  moreThanOnePrDefender: {
    type: "question",
    textKey:
      "playerResolutions.landBattle.moreThanOnePrDefender",
    yes: "determineMainDefender",
    no: "appointDefenderGeneral"
  },

  determineMainDefender: {
    type: "action",
    textKey:
      "playerResolutions.landBattle.determineMainDefender",
    detailKeys: [
      "playerResolutions.landBattle.determineMainDefenderDetail"
    ],
    next: "appointDefenderGeneral"
  },

  appointDefenderGeneral: {
    type: "action",
    textKey:
      "playerResolutions.landBattle.appointDefenderGeneral",
    detailKeys: [
      "playerResolutions.landBattle.appointDefenderGeneralDetail"
    ],
    next: "anyEnemyNprProvinces"
  },

  anyDefenderBot: {
    type: "question",
    textKey:
      "playerResolutions.landBattle.anyDefenderBot",
    yes: "goToBotLandBattle",
    no: "placeNprUnits"
  },

  goToBotLandBattle: {
    type: "goto",
    textKey:
      "playerResolutions.landBattle.goToBotLandBattle",
    target: "bot-land-battle"
  },

  anyEnemyNprProvinces: {
    type: "question",
    textKey:
      "playerResolutions.landBattle.anyEnemyNprProvinces",
    noteKey:
      "playerResolutions.landBattle.notes.ignoreExistingHostileUnits",
    yes: "placeNprUnits",
    no: "accountMilitaryIdeas"
  },

  placeNprUnits: {
    type: "action",
    textKey:
      "playerResolutions.landBattle.placeNprUnits",
    detailKeys: [
      "playerResolutions.landBattle.placeNprUnitsEnemyAreas",
      "playerResolutions.landBattle.placeNprUnitsAlreadyUsed"
    ],
    next: "largeNprOrRebelForce"
  },

  largeNprOrRebelForce: {
    type: "question",
    textKey:
      "playerResolutions.landBattle.largeNprOrRebelForce",
    yes: "drawMilitaryCardForLeader",
    no: "accountMilitaryIdeas"
  },

  drawMilitaryCardForLeader: {
    type: "action",
    textKey:
      "playerResolutions.landBattle.drawMilitaryCardForLeader",
    next: "accountMilitaryIdeas"
  },

  accountMilitaryIdeas: {
    type: "action",
    textKey:
      "playerResolutions.landBattle.accountMilitaryIdeas",
    detailKeys: [
      "playerResolutions.landBattle.accountMilitaryIdeasOrder",
      "playerResolutions.landBattle.accountMilitaryIdeasExamples"
    ],
    next: "playBattleActions"
  },

  playBattleActions: {
    type: "action",
    textKey:
      "playerResolutions.landBattle.playBattleActions",
    detailKeys: [
      "playerResolutions.landBattle.playBattleActionsOrder"
    ],
    next: "rollBattleDice"
  },

  rollBattleDice: {
    type: "action",
    textKey:
      "playerResolutions.landBattle.rollBattleDice",
    detailKeys: [
      "playerResolutions.landBattle.rollBattleDiceBase",
      "playerResolutions.landBattle.rollBattleDiceAdditional"
    ],
    noteKey:
      "playerResolutions.landBattle.notes.doubleInfantry",
    next: "assignCasualties"
  },

  assignCasualties: {
    type: "action",
    textKey:
      "playerResolutions.landBattle.assignCasualties",
    detailKeys: [
      "playerResolutions.landBattle.assignCasualtiesDetail"
    ],
    noteKey:
      "playerResolutions.landBattle.notes.mixedUnitCasualties",
    next: "woundedGenerals"
  },

  woundedGenerals: {
    type: "action",
    textKey:
      "playerResolutions.landBattle.woundedGenerals",
    noteKey:
      "playerResolutions.landBattle.notes.woundedGenerals",
    next: "anyUnitsRemaining"
  },

  anyUnitsRemaining: {
    type: "question",
    textKey: "playerResolutions.landBattle.anyUnitsRemaining",
    yes: "onlyOneSideHasUnitsRemaining",
    no: "endBattleNoWinner"
  },

  onlyOneSideHasUnitsRemaining: {
    type: "question",
    textKey: "playerResolutions.landBattle.onlyOneSideHasUnitsRemaining",
    yes: "resolveRetreatAndRemoveNpr",
    no: "nprMustRetreat"
  },

  nprMustRetreat: {
    type: "question",
    textKey: "playerResolutions.landBattle.nprMustRetreat",
    noteKey: "playerResolutions.landBattle.notes.nprRetreat",
    yes: "resolveNprRetreat",
    no: "attackerRetreats"
  },

  resolveNprRetreat: {
    type: "action",
    textKey: "playerResolutions.landBattle.resolveNprRetreat",
    next: "bothSidesHaveUnitsAfterNprRetreat"
  },

  bothSidesHaveUnitsAfterNprRetreat: {
    type: "question",
    textKey: "playerResolutions.landBattle.bothSidesHaveUnitsAfterNprRetreat",
    yes: "attackerRetreats",
    no: "resolveRetreatAndRemoveNpr"
  },

  attackerRetreats: {
    type: "question",
    textKey: "playerResolutions.landBattle.attackerRetreats",
    noteKey: "playerResolutions.landBattle.notes.rebelsNeverRetreat",
    yes: "resolveRetreatAndRemoveNpr",
    no: "defenderRetreats"
  },

  defenderRetreats: {
    type: "question",
    textKey: "playerResolutions.landBattle.defenderRetreats",
    noteKey: "playerResolutions.landBattle.notes.rebelsNeverRetreat",
    yes: "resolveRetreatAndRemoveNpr",
    no: "playBattleActions"
  },

  resolveRetreatAndRemoveNpr: {
    type: "action",
    textKey: "playerResolutions.landBattle.resolveRetreatAndRemoveNpr",
    noteKey: "playerResolutions.landBattle.notes.retreatNote6",
    next: "proclaimWinner"
  },

  proclaimWinner: {
    type: "action",
    textKey: "playerResolutions.landBattle.proclaimWinner",
    detailKeys: [
      "playerResolutions.landBattle.activePlayerReward"
    ],
    next: "endBattle"
  },

  endBattleNoWinner: {
    type: "end",
    textKey: "playerResolutions.landBattle.endBattleNoWinner"
  },

  endBattle: {
    type: "end",
    textKey: "playerResolutions.landBattle.endBattle"
  }
};
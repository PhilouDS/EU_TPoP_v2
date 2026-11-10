export const PLAYER_NAVAL_BATTLE_STEPS = {
  appointAttackerAdmiral: {
    type: "action",
    textKey: "playerResolutions.navalBattle.appointAttackerAdmiral",
    next: "anyDefenderHuman"
  },

  anyDefenderHuman: {
    type: "question",
    textKey: "playerResolutions.navalBattle.anyDefenderHuman",
    yes: "moreThanOnePrDefender",
    no: "anyDefenderBot"
  },

  moreThanOnePrDefender: {
    type: "question",
    textKey: "playerResolutions.navalBattle.moreThanOnePrDefender",
    yes: "determineMainDefender",
    no: "assignDefenderAdmiral"
  },

  determineMainDefender: {
    type: "action",
    textKey: "playerResolutions.navalBattle.determineMainDefender",
    detailKeys: [
      "playerResolutions.navalBattle.determineMainDefenderDetail"
    ],
    next: "assignDefenderAdmiral"
  },

  assignDefenderAdmiral: {
    type: "action",
    textKey: "playerResolutions.navalBattle.assignDefenderAdmiral",
    noteKey: "playerResolutions.navalBattle.notes.noDefenderAdmiral",
    next: "anyEnemyNprPorts"
  },

  anyDefenderBot: {
    type: "question",
    textKey: "playerResolutions.navalBattle.anyDefenderBot",
    yes: "goToBotNavalBattle",
    no: "placeNprShips"
  },

  goToBotNavalBattle: {
    type: "goto",
    textKey: "playerResolutions.navalBattle.goToBotNavalBattle",
    target: "bot-naval-battle"
  },

  anyEnemyNprPorts: {
    type: "question",
    textKey: "playerResolutions.navalBattle.anyEnemyNprPorts",
    noteKey: "playerResolutions.navalBattle.notes.ignoreExistingHostileShips",
    yes: "placeNprShips",
    no: "largePirateOrNprForce"
  },

  placeNprShips: {
    type: "action",
    textKey: "playerResolutions.navalBattle.placeNprShips",
    detailKeys: [
      "playerResolutions.navalBattle.placeNprShipsEnemyAreas",
      "playerResolutions.navalBattle.placeNprShipsAlreadyUsed"
    ],
    next: "largePirateOrNprForce"
  },

  largePirateOrNprForce: {
    type: "question",
    textKey: "playerResolutions.navalBattle.largePirateOrNprForce",
    yes: "drawMilitaryCardForLeader",
    no: "accountMilitaryIdeas"
  },

  drawMilitaryCardForLeader: {
    type: "action",
    textKey: "playerResolutions.navalBattle.drawMilitaryCardForLeader",
    next: "accountMilitaryIdeas"
  },

  accountMilitaryIdeas: {
    type: "action",
    textKey: "playerResolutions.navalBattle.accountMilitaryIdeas",
    detailKeys: [
      "playerResolutions.navalBattle.accountMilitaryIdeasOrder"
    ],
    next: "playBattleActions"
  },

  playBattleActions: {
    type: "action",
    textKey: "playerResolutions.navalBattle.playBattleActions",
    detailKeys: [
      "playerResolutions.navalBattle.playBattleActionsOrder"
    ],
    next: "rollBattleDice"
  },

  rollBattleDice: {
    type: "action",
    textKey: "playerResolutions.navalBattle.rollBattleDice",
    detailKeys: [
      "playerResolutions.navalBattle.rollBattleDiceBase",
      "playerResolutions.navalBattle.rollBattleDiceAdditional"
    ],
    noteKey: "playerResolutions.navalBattle.notes.heavyShipAutomaticHit",
    next: "assignCasualties"
  },

  assignCasualties: {
    type: "action",
    textKey: "playerResolutions.navalBattle.assignCasualties",
    detailKeys: [
      "playerResolutions.navalBattle.assignCasualtiesDetail"
    ],
    noteKey: "playerResolutions.navalBattle.notes.heavyShipCasualties",
    next: "woundedAdmiralsAndCapturedShips"
  },

  woundedAdmiralsAndCapturedShips: {
    type: "action",
    textKey: "playerResolutions.navalBattle.woundedAdmiralsAndCapturedShips",
    detailKeys: [
      "playerResolutions.navalBattle.capturedShips"
    ],
    noteKey: "playerResolutions.navalBattle.notes.woundedAdmiralsAndCapturedShips",
    next: "anyShipsRemaining"
  },

  anyShipsRemaining: {
    type: "question",
    textKey: "playerResolutions.navalBattle.anyShipsRemaining",
    yes: "onlyOneSideHasShipsRemaining",
    no: "endBattleNoWinner"
  },

  onlyOneSideHasShipsRemaining: {
    type: "question",
    textKey: "playerResolutions.navalBattle.onlyOneSideHasShipsRemaining",
    yes: "resolveRetreatAndRemoveNpr",
    no: "nprMustRetreat"
  },

  nprMustRetreat: {
    type: "question",
    textKey: "playerResolutions.navalBattle.nprMustRetreat",
    noteKey: "playerResolutions.navalBattle.notes.nprRetreat",
    yes: "resolveNprRetreat",
    no: "attackerRetreats"
  },

  resolveNprRetreat: {
    type: "action",
    textKey: "playerResolutions.navalBattle.resolveNprRetreat",
    next: "bothSidesHaveShipsAfterNprRetreat"
  },

  bothSidesHaveShipsAfterNprRetreat: {
    type: "question",
    textKey: "playerResolutions.navalBattle.bothSidesHaveShipsAfterNprRetreat",
    yes: "attackerRetreats",
    no: "resolveRetreatAndRemoveNpr"
  },

  attackerRetreats: {
    type: "question",
    textKey: "playerResolutions.navalBattle.attackerRetreats",
    noteKey: "playerResolutions.navalBattle.notes.piratesNeverRetreat",
    yes: "resolveRetreatAndRemoveNpr",
    no: "defenderRetreats"
  },

  defenderRetreats: {
    type: "question",
    textKey: "playerResolutions.navalBattle.defenderRetreats",
    noteKey: "playerResolutions.navalBattle.notes.piratesNeverRetreat",
    yes: "resolveRetreatAndRemoveNpr",
    no: "playBattleActions"
  },

  resolveRetreatAndRemoveNpr: {
    type: "action",
    textKey: "playerResolutions.navalBattle.resolveRetreatAndRemoveNpr",
    noteKey: "playerResolutions.navalBattle.notes.retreat",
    next: "proclaimWinner"
  },

  proclaimWinner: {
    type: "action",
    textKey: "playerResolutions.navalBattle.proclaimWinner",
    detailKeys: [
      "playerResolutions.navalBattle.activePlayerReward"
    ],
    next: "endBattle"
  },

  endBattleNoWinner: {
    type: "end",
    textKey: "playerResolutions.navalBattle.endBattleNoWinner"
  },

  endBattle: {
    type: "end",
    textKey: "playerResolutions.navalBattle.endBattle"
  }
};
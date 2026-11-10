export const NAVAL_BATTLE_STEPS = {
  anyEnemyIsPr: {
    type: "question",
    textKey: "botActions.navalBattle.anyEnemyIsPr",
    yes: "botIsAttacker",
    no: "rollAgainstNpr"
  },

  botIsAttacker: {
    type: "question",
    textKey: "botActions.navalBattle.botIsAttacker",
    yes: "facingMultiplePrs",
    no: "appointAdmiral"
  },

  facingMultiplePrs: {
    type: "question",
    textKey: "botActions.navalBattle.facingMultiplePrs",
    yes: "determineMainDefender",
    no: "playBattleActions"
  },

  determineMainDefender: {
    type: "action",
    textKey: "botActions.navalBattle.determineMainDefender",
    detailKeys: [
      "botActions.navalBattle.seeMainDefender"
    ],
    next: "playBattleActions"
  },

  appointAdmiral: {
    type: "action",
    textKey: "botActions.navalBattle.appointAdmiral",
    next: "playBattleActions"
  },

  playBattleActions: {
    type: "action",
    textKey: "botActions.navalBattle.playBattleActions",
    next: "rollBotBattleDice"
  },

  rollBotBattleDice: {
    type: "action",
    textKey: "botActions.navalBattle.rollBotBattleDice",
    detailKeys: [
      "botActions.navalBattle.botRollModifiers"
    ],
    next: "scoreBotHits"
  },

  scoreBotHits: {
    type: "action",
    textKey: "botActions.navalBattle.scoreBotHits",
    next: "botVsBot"
  },

  botVsBot: {
    type: "question",
    textKey: "botActions.navalBattle.botVsBot",
    yes: "removeLowestHitBotShip",
    no: "humanAssignCasualties"
  },

  removeLowestHitBotShip: {
    type: "action",
    textKey: "botActions.navalBattle.removeLowestHitBotShip",
    detailKeys: [
      "botActions.navalBattle.rerollIfTied"
    ],
    next: "resolvingBotReward"
  },

  humanAssignCasualties: {
    type: "action",
    textKey: "botActions.navalBattle.humanAssignCasualties",
    detailKeys: [
      "botActions.navalBattle.alternateShipTypes"
    ],
    next: "humanHasShipsLeft"
  },

  humanHasShipsLeft: {
    type: "question",
    textKey: "botActions.navalBattle.humanHasShipsLeft",
    yes: "humanReward",
    no: "resolvingBotReward"
  },

  humanReward: {
    type: "action",
    textKey: "botActions.navalBattle.humanReward",
    next: "removeBotShip"
  },

  removeBotShip: {
    type: "action",
    textKey: "botActions.navalBattle.removeBotShip",
    next: "endBattle"
  },

  rollAgainstNpr: {
    type: "action",
    textKey: "botActions.navalBattle.rollAgainstNpr",
    next: "nprHitsEnough"
  },

  nprHitsEnough: {
    type: "question",
    textKey: "botActions.navalBattle.nprHitsEnough",
    yes: "removeBotShip",
    no: "resolvingBotReward"
  },

  resolvingBotReward: {
    type: "action",
    textKey: "botActions.navalBattle.resolvingBotReward",
    noteKey: "botActions.navalBattle.notes.firstBattleVictory",
    next: "endBattle"
  },

  endBattle: {
    type: "return",
    textKey: "botActions.navalBattle.endBattle"
  }
};
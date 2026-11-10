export const LAND_BATTLE_STEPS = {
  anyEnemyIsPr: {
    type: "question",
    textKey: "botActions.landBattle.anyEnemyIsPr",
    yes: "botIsAttacker",
    no: "rollAgainstNonPr"
  },

  botIsAttacker: {
    type: "question",
    textKey: "botActions.landBattle.botIsAttacker",
    yes: "facingMultiplePrs",
    no: "appointGeneral"
  },

  facingMultiplePrs: {
    type: "question",
    textKey: "botActions.landBattle.facingMultiplePrs",
    yes: "determineMainDefender",
    no: "battleInDefendersRealm"
  },

  determineMainDefender: {
    type: "action",
    textKey: "botActions.landBattle.determineMainDefender",
    detailKeys: [
      "botActions.landBattle.seeMainDefender"
    ],
    next: "battleInDefendersRealm"
  },

  battleInDefendersRealm: {
    type: "question",
    textKey: "botActions.landBattle.battleInDefendersRealm",
    yes: "appointGeneral",
    no: "accountMilitaryIdeas"
  },

  appointGeneral: {
    type: "action",
    textKey: "botActions.landBattle.appointGeneral",
    next: "accountMilitaryIdeas"
  },

  accountMilitaryIdeas: {
    type: "action",
    textKey: "botActions.landBattle.accountMilitaryIdeas",
    detailKeys: [
      "botActions.landBattle.militaryIdeasExample"
    ],
    next: "playBattleActions"
  },

  playBattleActions: {
    type: "action",
    textKey: "botActions.landBattle.playBattleActions",
    next: "rollAgainstPr"
  },

  rollAgainstPr: {
    type: "action",
    textKey: "botActions.landBattle.rollAgainstPr",
    detailKeys: [
      "botActions.landBattle.botRollModifiers"
    ],
    next: "assignCasualties"
  },

  assignCasualties: {
    type: "action",
    textKey: "botActions.landBattle.assignCasualties",
    detailKeys: [
      "botActions.landBattle.seeCasualtyRules"
    ],
    next: "generalIllHealth"
  },

  generalIllHealth: {
    type: "action",
    textKey: "botActions.landBattle.generalIllHealth",
    next: "anyBotHasUnitsRemaining"
  },

  anyBotHasUnitsRemaining: {
    type: "question",
    textKey: "botActions.landBattle.anyBotHasUnitsRemaining",
    yes: "bothSidesHaveUnitsRemaining",
    no: "humanReward"
  },

  bothSidesHaveUnitsRemaining: {
    type: "question",
    textKey: "botActions.landBattle.bothSidesHaveUnitsRemaining",
    yes: "playBattleActions",
    no: "resolvingBotReward"
  },

  humanReward: {
    type: "action",
    textKey: "botActions.landBattle.humanReward",
    next: "removeDefeatedArmies"
  },

  resolvingBotReward: {
    type: "action",
    textKey: "botActions.landBattle.resolvingBotReward",
    noteKey: "botActions.landBattle.notes.firstBattleVictory",
    next: "removeDefeatedArmies"
  },

  rollAgainstNonPr: {
    type: "action",
    textKey: "botActions.landBattle.rollAgainstNonPr",
    next: "botHasUnitsRemaining"
  },

  botHasUnitsRemaining: {
    type: "question",
    textKey: "botActions.landBattle.botHasUnitsRemaining",
    yes: "removeAllHostileNonPrUnits",
    no: "removeNprAndRebels"
  },

  removeAllHostileNonPrUnits: {
    type: "action",
    textKey: "botActions.landBattle.removeAllHostileNonPrUnits",
    next: "resolvingBotReward"
  },

  removeNprAndRebels: {
    type: "action",
    textKey: "botActions.landBattle.removeNprAndRebels",
    next: "removeDefeatedArmies"
  },

  removeDefeatedArmies: {
    type: "action",
    textKey: "botActions.landBattle.removeDefeatedArmies",
    next: "endBattle"
  },

  endBattle: {
    type: "return",
    textKey: "botActions.landBattle.endBattle"
  }
};
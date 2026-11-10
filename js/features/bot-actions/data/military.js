export const MILITARY_STEPS = {
  goMilitaryTargetChart: {
    type: "external",
    navigation: "call",
    target: "military-targeting",
    textKey: "botActions.military.goToMilitaryTargetChart",
    detailKeys: [
      "botActions.military.rollForTarget"
    ],
    nextAfterReturn: "targetIsOpponent"
  },

  atWar: {
    type: "question",
    textKey: "botActions.military.atWar",
    yes: "selectEnemyRealmGreatestStrength",
    no: "hasClaim"
  },

  hasClaim: {
    type: "question",
    textKey: "botActions.military.hasClaim",
    yes: "nonColonialClaimRoll",
    no: "anyAreaWithBattlegroundAdjacentBot"
  },
  
  nonColonialClaimRoll: {
    type: "roll",
    die: "d6",
    next: "doesRollMatchNonColonialClaim"
  },

  doesRollMatchNonColonialClaim: {
    type: "question",
    textKey: "botActions.military.doesRollMatchNonColonialClaim",
    yes: "selectRealmThisClaimValid",
    no: "anyAreaWithBattlegroundAdjacentBot"
  },

  anyAreaWithBattlegroundAdjacentBot: {
    type: "question",
    textKey: "botActions.military.anyAreaWithBattlegroundAdjacentBot",
    yes: "placeClaimHere",
    no: "botHasMarriage"
  },

  botHasMarriage: {
    type: "question",
    textKey: "botActions.military.botHasMarriage",
    yes: "selectRealmThisClaimDisputedSuccessionValid",
    no: "goMilitaryTargetChart"
  },

  targetEligibleBotLessFourInfluence: {
    type: "question",
    textKey: "botActions.military.targetEligibleBotLessFourInfluence",
    noteKey: "botActions.military.seeDowDescription",
    yes: "targetStrengthGreaterTwiceBotStrength",
    no: "goMilitaryTargetChart"
  },

  hasCasusBelli: {
    type: "question",
    textKey: "botActions.military.hasCasusBelli",
    yes: "targetEligibleBotLessFourInfluence",
    no: "isPapalController"
  },

  targetIsOpponent: {
    type: "question",
    textKey: "botActions.military.targetIsOpponent",
    yes: "hasCasusBelli",
    no: "targetEligibleBotLessFourInfluence"
  },

  targetStrengthGreaterTwiceBotStrength: {
    type: "question",
    textKey: "botActions.military.targetStrengthGreaterTwiceBotStrength",
    noteKey: "botActions.military.noteStrength",
    yes: "goMilitaryTargetChart",
    no: "declareWarOnTarget"
  },

  botHasAlliesWithMoreTwoInfluence: {
    type: "question",
    textKey: "botActions.military.botHasAlliesWithMoreTwoInfluence",
    yes: "forEachSuchAllyRemoveTwoInfluence",
    no: "targetMaySendDefensiveCta"
  },

  armySizeGreaterTwiceTargetStrength: {
    type: "question",
    textKey: "botActions.military.armySizeGreaterTwiceTargetStrength",
    noteKey: "botActions.military.noteStrength",
    yes: "armyOnMapBoard",
    no: "hasMoreFourBotCubeLeft"
  },

  hasMoreFourBotCubeLeft: {
    type: "question",
    textKey: "botActions.military.hasMoreFourBotCubeLeft",
    yes: "spendTwoBotCubes",
    no: "armyOnMapBoard"
  },

  dowTriggersNavalBattle: {
    type: "question",
    textKey: "botActions.military.dowTriggersNavalBattle",
    yes: "goNavalBattleAfterDow",
    no: "dowTriggersLandBattle"
  },

  dowTriggersLandBattle: {
    type: "question",
    textKey: "botActions.military.dowTriggersLandBattle",
    yes: "goLandBattleAfterDow",
    no: "armySizeGreaterTwiceTargetStrength"
  },

  armyOnMapBoard: {
    type: "question",
    textKey: "botActions.military.armyOnMapBoard",
    yes: "checkForMAC",
    no: "placeArmyOwnAreaClosestToEnemy"
  },
  
  canSiegeInCurrentArea: {
    type: "question",
    textKey: "botActions.military.canSiegeInCurrentArea",
    yes: "goSiege",
    no: "hostileUnits"
  },
  
  hostileUnits: {
    type: "question",
    textKey: "botActions.military.hostileUnits",
    detailKeys: [
      "botActions.military.inclNavalBridge"
    ],
    noteKey: "botActions.military.adjustUnitAvailability",
    yes: "moveArmyToEnemyArea",
    no: "canPlaceShip"
  },
  
  isPapalController: {
    type: "question",
    textKey: "botActions.military.isPapalController",
    yes: "placeCrusadeTokenAndClaim",
    no: "placeClaimOnTarget"
  },
  
  triggerBattlePlaceArmy: {
    type: "question",
    textKey: "botActions.military.triggerBattlePlaceArmy",
    yes: "goLandBattle",
    no: "hostileUnits"
  },
  
  triggerBattlePlaceShip: {
    type: "question",
    textKey: "botActions.military.triggerBattlePlaceShip",
    yes: "goNavalBattle",
    no: "hostileUnits"
  },
  
  triggerBattleMoveArmy: {
    type: "question",
    textKey: "botActions.military.triggerBattleMoveArmy",
    yes: "goLandBattle",
    no: "endTurn"
  },
  
  canPlaceShip: {
    type: "question",
    textKey: "botActions.military.canPlaceShip",
    yes: "placeShipToExtendNavalBridge",
    no: "moveArmyToNonHostile"
  },

  placeClaimHere: {
    type: "action",
    textKey: "botActions.military.placeClaimHere",
    next: "selectRealmThisClaimDisputedSuccessionValid"
  },

  selectRealmThisClaimDisputedSuccessionValid: {
    type: "action",
    textKey: "botActions.military.selectRealmThisClaimDisputedSuccessionValid",
    detailKeys: [
      "botActions.military.preferOpponent"
    ],
    next: "targetEligibleBotLessFourInfluence"
  },

  selectRealmThisClaimValid: {
    type: "action",
    textKey: "botActions.military.selectRealmThisClaimValid",
    detailKeys: [
      "botActions.military.preferOpponentThenHighestNPR"
    ],
    next: "targetEligibleBotLessFourInfluence"
  },

  selectEnemyRealmGreatestStrength: {
    type: "action",
    textKey: "botActions.military.selectEnemyRealmGreatestStrength",
    detailKeys: [
      "botActions.military.preferOpponent"
    ],
    noteKey: "botActions.military.noteStrength",
    next: "ifArmyLessThreeUnits"
  },

  forEachSuchAllyRemoveTwoInfluence: {
    type: "action",
    textKey: "botActions.military.forEachSuchAllyRemoveTwoInfluence",
    noteKey: "botActions.military.botMustRemoveOneFewerInfluence",
    next: "targetMaySendDefensiveCta"
  },

  ifArmyLessThreeUnits: {
    type: "action",
    textKey: "botActions.military.ifArmyLessThreeUnits",
    next: "armySizeGreaterTwiceTargetStrength"
  },

  spendTwoBotCubes: {
    type: "action",
    textKey: "botActions.military.spendTwoBotCubes",
    noteKey: "botActions.military.numberUnitsDeterminedByDifficulty",
    next: "armySizeGreaterTwiceTargetStrength"
  },

  checkForMAC: {
    type: "action",
    textKey: "botActions.military.checkForMAC",
    noteKey: "botActions.military.adjustUnitAvailability",
    next: "canSiegeInCurrentArea"
  },

  targetMaySendDefensiveCta: {
    type: "action",
    textKey: "botActions.military.targetMaySendDefensiveCta",
    next: "removeAllBotsInfluences"
  },

  removeAllBotsInfluences: {
    type: "action",
    textKey: "botActions.military.removeAllBotsInfluences",
    next: "dowTriggersNavalBattle"
  },

  placeArmyOwnAreaClosestToEnemy: {
    type: "action",
    textKey: "botActions.military.placeArmyOwnAreaClosestToEnemy",
    detailKeys: [
      "botActions.military.preferAreaWithEnemy"
    ],
    noteKeys: [
      "botActions.military.adjustUnitAvailability",
      "botActions.military.noteStrength"
    ],
    next: "triggerBattlePlaceArmy"
  },

  moveArmyToEnemyArea: {
    type: "action",
    textKey: "botActions.military.moveArmyToEnemyArea",
    detailKeys: [
      "botActions.military.preferLargestEnemy"
    ],
    next: "triggerBattleMoveArmy"
  },

  placeShipToExtendNavalBridge: {
    type: "action",
    textKey: "botActions.military.placeShipToExtendNavalBridge",
    next: "triggerBattlePlaceShip"
  },

  placeClaimOnTarget: {
    type: "action",
    textKey: "botActions.military.placeClaimOnTarget",
    detailKeys: [
      "botActions.military.preferAdjacentThenCapital"
    ],
    next: "endTurn"
  },

  moveArmyToNonHostile: {
    type: "action",
    textKey: "botActions.military.moveArmyToNonHostile",
    next: "endTurn"
  },

  placeCrusadeTokenAndClaim: {
    type: "action",
    textKey: "botActions.military.placeCrusadeTokenAndClaim",
    next: "declareWarOnTarget"
  },

  declareWarOnTarget: {
    type: "action",
    style: "declare-war",
    textKey: "botActions.military.declareWarOnTarget",
    noteKey: "botActions.military.numberUnitsDeterminedByDifficulty",
    next: "botHasAlliesWithMoreTwoInfluence"
  },

  goSiege: {
    type: "external",
    navigation: "goto",
    target: "siege",
    textKey: "botActions.military.goToSiege",
    detailKeys: [
      "botActions.military.gainBotPowerEqualsBotSpent"
    ]
  },
  
  goNavalBattleAfterDow: {
    type: "external",
    navigation: "call",
    target: "naval-battle",
    textKey: "botActions.military.goNavalBattleAfterDow",
    detailKeys: [
      "botActions.military.resolveAlphabeticOrder"
    ],
    nextAfterReturn: "dowTriggersLandBattle",
    style: "naval-battle"
  },
  
  goNavalBattle: {
    type: "external",
    navigation: "call",
    target: "naval-battle",
    textKey: "botActions.military.goToNavalBattle",
    nextAfterReturn: "hostileUnits",
    style: "naval-battle"
  },

  goLandBattleAfterDow: {
    type: "external",
    navigation: "call",
    target: "land-battle",
    textKey: "botActions.military.goLandBattleAfterDow",
    detailKeys: [
      "botActions.military.resolveAlphabeticOrder"
    ],
    nextAfterReturn: "endTurn",
    style: "land-battle"
  },

  goLandBattle: {
    type: "external",
    navigation: "call",
    target: "land-battle",
    textKey: "botActions.military.goToLandBattle",
    nextAfterReturn: "endTurn",
    style: "land-battle"
  },

  endTurn: {
    type: "end",
    textKey: "botActions.military.endTurn",
    noteKey: "botActions.military.gainBotCube"
  }

}
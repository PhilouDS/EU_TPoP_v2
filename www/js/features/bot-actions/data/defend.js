export const DEFEND_STEPS = {
  anyInvaders: {
    type: "question",
    textKey: "botActions.defend.anyInvaders",
    reminderKey: "botActions.defend.invadersDefinition",
    yes: "canSiegeWith2BotPower",
    no: "armyDeployedCanSiege"
  },

  canSiegeWith2BotPower: {
    type: "question",
    textKey: "botActions.defend.canSiegeWith2BotPower",
    yes: "siegeRoll",
    no: "armyDoubleInvaders"
  },

  siegeRoll: {
    type: "roll",
    die: "standardD6",
    textKey: "botActions.defend.dieResult",
    choices: [
      {
        label: "1–4",
        values: [1, 2, 3, 4],
        target: "goSiege"
      },
      {
        label: "5–6",
        values: [5, 6],
        target: "armyDoubleInvaders"
      }
    ]
  },

  goSiege: {
    type: "external",
    navigation: "goto",
    target: "siege",
    textKey: "botActions.defend.goToSiege",
    detailKeys: [
      "botActions.defend.gain1BotPower"
    ]
  },

  armyDoubleInvaders: {
    type: "question",
    textKey: "botActions.defend.armyDoubleInvaders",
    reminderKey: "botActions.defend.invadersDefinition",
    yes: "armyOnMap",
    no: "canRecruit"
  },

  canRecruit: {
    type: "question",
    textKey: "botActions.defend.canRecruit",
    yes: "recruit",
    no: "armyAtLeastInvaders"
  },

  recruit: {
    type: "action",
    textKey: "botActions.defend.recruit",
    noteKey: "botActions.defend.notes.recruit",
    next: "armyDoubleInvaders"
  },

  armyAtLeastInvaders: {
    type: "question",
    textKey: "botActions.defend.armyAtLeastInvaders",
    reminderKey: "botActions.defend.invadersDefinition",
    yes: "armyOnMap",
    no: "armyDeployedCanSiege"
  },

  armyDeployedCanSiege: {
    type: "question",
    textKey: "botActions.defend.armyDeployedCanSiege",
    yes: "goSiege",
    no: "increaseArmyTo3"
  },

  increaseArmyTo3: {
    type: "action",
    textKey: "botActions.defend.increaseArmyTo3",
    next: "occupiedBotTownNoInvaders"
  },

  occupiedBotTownNoInvaders: {
    type: "question",
    textKey: "botActions.defend.occupiedBotTownNoInvaders",
    reminderKey: "botActions.defend.invadersDefinition",
    yes: "placeArmySafeBotArea",
    no: "fallbackRoll"
  },

  placeArmySafeBotArea: {
    type: "action",
    textKey: "botActions.defend.placeArmySafeBotArea",
    detailKeys: [
      "botActions.defend.placeArmySafeBotAreaDetail"
    ],
    noteKey: "botActions.defend.notes.macAvailability",
    next: "endTurn"
  },

  safeBotTownAvailable: {
    type: "question",
    textKey: "botActions.defend.safeBotTownAvailable",
    yes: "placeArmySafeBotArea",
    no: "placeArmySmallestInvaders"
  },

  armyOnMap: {
    type: "question",
    textKey: "botActions.defend.armyOnMap",
    yes: "macEnough",
    no: "safeBotTownAvailable"
  },

  macEnough: {
    type: "question",
    textKey: "botActions.defend.macEnough",
    reminderKey: "botActions.defend.invadersDefinition",
    yes: "placeArmyLargestInvaders",
    no: "shipCanIncreaseMac"
  },

  placeArmyLargestInvaders: {
    type: "action",
    textKey: "botActions.defend.placeArmyLargestInvaders",
    detailKeys: [
      "botActions.defend.preferPrEnemy"
    ],
    noteKey: "botActions.defend.notes.macAvailability",
    reminderKey: "botActions.defend.invadersDefinition",
    next: "goLandBattle"
  },

  goLandBattle: {
    type: "external",
    navigation: "call",
    target: "land-battle",
    textKey: "botActions.defend.goToLandBattle",
    detailKeys: [
      "botActions.defend.gain1BotPowerIfVictorious"
    ],
    nextAfterReturn: "endTurn",
    style: "land-battle"
  },

  shipCanIncreaseMac: {
    type: "question",
    textKey: "botActions.defend.shipCanIncreaseMac",
    reminderKey: "botActions.defend.invadersDefinition",
    yes: "shipRoll",
    no: "occupiedBotTownNoInvaders"
  },

  shipRoll: {
    type: "roll",
    die: "standardD6",
    textKey: "botActions.defend.dieResult",
    choices: [
      {
        label: "1–4",
        values: [1, 2, 3, 4],
        target: "occupiedBotTownNoInvaders"
      },
      {
        label: "5–6",
        values: [5, 6],
        target: "placeShipNavalBridge"
      }
    ]
  },

  placeShipNavalBridge: {
    type: "action",
    textKey: "botActions.defend.placeShipNavalBridge",
    detailKeys: [
      "botActions.defend.preferPrEnemy"
    ],
    next: "triggersNavalBattle"
  },

  triggersNavalBattle: {
    type: "question",
    textKey: "botActions.defend.triggersNavalBattle",
    yes: "goNavalBattle",
    no: "endTurn"
  },

  goNavalBattle: {
    type: "external",
    navigation: "call",
    target: "naval-battle",
    textKey: "botActions.defend.goToNavalBattle",
    detailKeys: [
      "botActions.defend.gain1BotPowerIfVictorious"
    ],
    nextAfterReturn: "endTurn",
    style: "naval-battle"
  },

  fallbackRoll: {
    type: "roll",
    die: "standardD6",
    textKey: "botActions.defend.dieResult",
    choices: [
      {
        label: "1–2",
        values: [1, 2],
        target: "placeArmySmallestInvaders"
      },
      {
        label: "3–4",
        values: [3, 4],
        target: "goSpy"
      },
      {
        label: "5–6",
        values: [5, 6],
        target: "has2BotPower"
      }
    ]
  },

  placeArmySmallestInvaders: {
    type: "action",
    textKey: "botActions.defend.placeArmySmallestInvaders",
    detailKeys: [
      "botActions.defend.preferPrEnemyForce"
    ],
    noteKey: "botActions.defend.notes.macAvailability",
    reminderKey: "botActions.defend.invadersDefinition",
    next: "goLandBattle"
  },

  has2BotPower: {
    type: "question",
    textKey: "botActions.defend.has2BotPower",
    yes: "enemyTownSafeArea",
    no: "goSpy"
  },

  goSpy: {
    type: "external",
    navigation: "goto",
    target: "spy",
    textKey: "botActions.defend.goToSpy"
  },

  enemyTownSafeArea: {
    type: "question",
    textKey: "botActions.defend.enemyTownSafeArea",
    yes: "placeArmyEnemyTown",
    no: "goSpy"
  },

  placeArmyEnemyTown: {
    type: "action",
    textKey: "botActions.defend.placeArmyEnemyTown",
    noteKey: "botActions.defend.notes.macAvailability",
    next: "endTurn"
  },

  endTurn: {
    type: "end",
    textKey: "botActions.defend.endTurn"
  }
};
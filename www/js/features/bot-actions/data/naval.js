export const NAVAL_STEPS = {
  hostileSeaZoneAdjacent: {
    type: "question",
    textKey: "botActions.naval.hostileSeaZoneAdjacent",
    noteKey: "botActions.naval.notes.ignoreDistantSeaZones",
    yes: "placeShipHostileSeaZone",
    no: "emptySeaZoneAdjacentPorts"
  },

  placeShipHostileSeaZone: {
    type: "action",
    textKey: "botActions.naval.placeShipHostileSeaZone",
    detailKeys: [
      "botActions.naval.preferBotPort"
    ],
    next: "goNavalBattle"
  },

  goNavalBattle: {
    type: "external",
    navigation: "call",
    target: "naval-battle",
    textKey: "botActions.naval.goToNavalBattle",
    detailKeys: [
      "botActions.naval.gainBotPowerIfVictorious"
    ],
    nextAfterReturn: "endTurn",
    style: "naval-battle"
  },

  emptySeaZoneAdjacentPorts: {
    type: "question",
    textKey: "botActions.naval.emptySeaZoneAdjacentPorts",
    yes: "placeShipAvailableSeaZone",
    no: "has5ShipsMainMap"
  },

  has5ShipsMainMap: {
    type: "question",
    textKey: "botActions.naval.has5ShipsMainMap",
    yes: "shipAdjacentPirates",
    no: "emptyMainMapSeaZoneAdjacentShips"
  },

  emptyMainMapSeaZoneAdjacentShips: {
    type: "question",
    textKey: "botActions.naval.emptyMainMapSeaZoneAdjacentShips",
    yes: "placeShipAvailableSeaZone",
    no: "drawTradeCard"
  },

  placeShipAvailableSeaZone: {
    type: "action",
    textKey: "botActions.naval.placeShipAvailableSeaZone",
    detailKeys: [
      "botActions.naval.preferTradeNodes"
    ],
    next: "shipAdjacentPirates"
  },

  shipAdjacentPirates: {
    type: "question",
    textKey: "botActions.naval.shipAdjacentPirates",
    yes: "removePirates",
    no: "drawTradeCard"
  },

  removePirates: {
    type: "action",
    textKey: "botActions.naval.removePirates",
    detailKeys: [
      "botActions.naval.preferPirateTradeNode"
    ],
    next: "endTurn"
  },

  drawTradeCard: {
    type: "action",
    blocks: [
      {
        textKey: "botActions.naval.drawTradeCardBots",
        noteKey: "botActions.naval.notes.piratesReduceIncome"
      },
      {
        textKey: "botActions.naval.drawTradeCardHumans",
        noteKey: "botActions.naval.notes.noPrestigeWithoutMissions"
      }
    ],
    next: "moveMerchant"
  },

  moveMerchant: {
    type: "action",
    textKey: "botActions.naval.moveMerchant",
    next: "hasPlacedShipThisTurn"
  },

  hasPlacedShipThisTurn: {
    type: "question",
    textKey: "botActions.naval.hasPlacedShipThisTurn",
    yes: "endTurn",
    no: "canExplore"
  },

  canExplore: {
    type: "question",
    textKey: "botActions.naval.canExplore",
    yes: "goExplore",
    no: "endTurn"
  },

  goExplore: {
    type: "external",
    navigation: "goto",
    target: "explore",
    textKey: "botActions.naval.goToExplore"
  },

  endTurn: {
    type: "end",
    textKey: "botActions.naval.endTurn"
  }
};
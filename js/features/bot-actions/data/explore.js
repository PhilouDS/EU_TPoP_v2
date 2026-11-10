export const EXPLORE_STEPS = {
  has3ColonialClaims: {
    type: "question",
    textKey: "botActions.explore.has3ColonialClaims",
    yes: "colonialClaimConnected",
    no: "vacantTerritoryAdjacentTown"
  },

  vacantTerritoryAdjacentTown: {
    type: "question",
    textKey: "botActions.explore.vacantTerritoryAdjacentTown",
    noteKey: "botActions.explore.notes.ignoreClaimedTerritories",
    yes: "exploreRoll",
    no: "hasQuestForNewWorld"
  },

  hasQuestForNewWorld: {
    type: "question",
    textKey: "botActions.explore.hasQuestForNewWorld",
    noteKey: "botActions.explore.notes.questForNewWorldEvent",
    yes: "vacantTerritoryAdjacentShips",
    no: "researchQuestForNewWorld"
  },

  researchQuestForNewWorld: {
    type: "action",
    textKey: "botActions.explore.researchQuestForNewWorld",
    detailKeys: [
      "botActions.explore.researchQuestForNewWorldDetail"
    ],
    next: "endTurn"
  },

  vacantTerritoryAdjacentShips: {
    type: "question",
    textKey: "botActions.explore.vacantTerritoryAdjacentShips",
    noteKey: "botActions.explore.notes.ignoreClaimedTerritories",
    yes: "exploreRoll",
    no: "canPlaceShipToExplore"
  },

  canPlaceShipToExplore: {
    type: "question",
    textKey: "botActions.explore.canPlaceShipToExplore",
    yes: "placeShipToExplore",
    no: "couldPlaceShipWithin3Spaces"
  },

  placeShipToExplore: {
    type: "action",
    textKey: "botActions.explore.placeShipToExplore",
    detailKeys: [
      "botActions.explore.preferNewDistantTradeNode"
    ],
    next: "triggersNavalBattleBeforeRoll"
  },

  triggersNavalBattleBeforeRoll: {
    type: "question",
    textKey: "botActions.explore.triggersNavalBattle",
    yes: "goNavalBattle",
    no: "exploreRoll"
  },

  exploreRoll: {
    type: "roll",
    die: "explore",
    textKey: "botActions.explore.rollExploreDie",
    choices: [
      {
        label: "1",
        values: ["1"],
        target: "rollMatchesEligibleTerritory"
      },
      {
        label: "2",
        values: ["2"],
        target: "rollMatchesEligibleTerritory"
      },
      {
        label: "{explore2Skull}",
        values: ["2-skull"],
        target: "has2BotPowerLeft"
      },
      {
        label: "{explore3Skull}",
        values: ["3-skull"],
        target: "has2BotPowerLeft"
      }
    ]
  },

  has2BotPowerLeft: {
    type: "question",
    textKey: "botActions.explore.has2BotPowerLeft",
    yes: "spend1BotPower",
    no: "removeShipFromDistantContinent"
  },

  spend1BotPower: {
    type: "action",
    textKey: "botActions.explore.spend1BotPower",
    next: "rollMatchesEligibleTerritory"
  },

  removeShipFromDistantContinent: {
    type: "action",
    textKey: "botActions.explore.removeShipFromDistantContinent",
    detailKeys: [
      "botActions.explore.ifAny"
    ],
    next: "endTurn"
  },

  rollMatchesEligibleTerritory: {
    type: "question",
    textKey: "botActions.explore.rollMatchesEligibleTerritory",
    noteKey: "botActions.explore.notes.eligibleDistantLocation",
    yes: "placeClaimEligibleTerritory",
    no: "anyEligibleDistantProvinces"
  },

  placeClaimEligibleTerritory: {
    type: "action",
    textKey: "botActions.explore.placeClaimEligibleTerritory",
    noteKey: "botActions.explore.notes.eligibleDistantLocation",
    next: "addMatchingTradeCards"
  },

  anyEligibleDistantProvinces: {
    type: "question",
    textKey: "botActions.explore.anyEligibleDistantProvinces",
    noteKey: "botActions.explore.notes.eligibleDistantLocation",
    yes: "placeClaimDistantProvince",
    no: "couldPlaceShipWithin3Spaces"
  },

  placeClaimDistantProvince: {
    type: "action",
    textKey: "botActions.explore.placeClaimDistantProvince",
    detailKeys: [
      "botActions.explore.preferDistantProvince"
    ],
    next: "addMatchingTradeCards"
  },

  addMatchingTradeCards: {
    type: "action",
    textKey: "botActions.explore.addMatchingTradeCards",
    noteKey: "botActions.explore.notes.addMatchingTradeCards",
    next: "endTurn"
  },

  couldPlaceShipWithin3Spaces: {
    type: "question",
    textKey: "botActions.explore.couldPlaceShipWithin3Spaces",
    yes: "placeShipQualifies",
    no: "colonialClaimConnected"
  },

  colonialClaimConnected: {
    type: "question",
    textKey: "botActions.explore.colonialClaimConnected",
    yes: "has2Colonists",
    no: "couldPlaceShipCloserConnection"
  },

  has2Colonists: {
    type: "question",
    textKey: "botActions.explore.has2Colonists",
    yes: "goColonize",
    no: "gainBotPowerAndColonist"
  },

  couldPlaceShipCloserConnection: {
    type: "question",
    textKey: "botActions.explore.couldPlaceShipCloserConnection",
    yes: "placeShipQualifies",
    no: "scorePrestigeAndDiscard"
  },

  placeShipQualifies: {
    type: "action",
    textKey: "botActions.explore.placeShipQualifies",
    detailKeys: [
      "botActions.explore.preferShortestRoute"
    ],
    next: "triggersNavalBattleAfterConnection"
  },

  triggersNavalBattleAfterConnection: {
    type: "question",
    textKey: "botActions.explore.triggersNavalBattle",
    yes: "goNavalBattle",
    no: "endTurn"
  },

  gainBotPowerAndColonist: {
    type: "action",
    textKey: "botActions.explore.gainBotPowerAndColonist",
    next: "endTurn"
  },

  scorePrestigeAndDiscard: {
    type: "action",
    textKey: "botActions.explore.scorePrestigeAndDiscard",
    next: "endTurn"
  },

  goNavalBattle: {
    type: "external",
    navigation: "call",
    target: "naval-battle",
    textKey: "botActions.explore.goToNavalBattle",
    detailKeys: [
      "botActions.explore.gain1BotPowerIfVictorious"
    ],
    nextAfterReturn: "endTurn",
    style: "naval-battle"
  },

  goColonize: {
    type: "external",
    navigation: "goto",
    target: "colonize",
    textKey: "botActions.explore.goToColonize"
  },

  endTurn: {
    type: "end",
    textKey: "botActions.explore.endTurn"
  }
};
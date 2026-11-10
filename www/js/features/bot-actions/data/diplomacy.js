export const DIPLOMACY_STEPS = {
  allianceAndRoyalMarriageOnAdjacentNpr: {
    type: "question",
    textKey: "botActions.diplomacy.allianceAndRoyalMarriageOnAdjacentNpr",
    detailKeys: [
      "botActions.diplomacy.ignoreDistantNprs"
    ],
    yes: "higherBaseTaxThanNpr",
    no: "allianceOnAdjacentNpr"
  },

  allianceOnAdjacentNpr: {
    type: "question",
    textKey: "botActions.diplomacy.allianceOnAdjacentNpr",
    yes: "hasDoubleBaseTaxOfNpr",
    no: "twoPlusInfluenceNoAllianceAdjacentNpr"
  },

  twoPlusInfluenceNoAllianceAdjacentNpr: {
    type: "question",
    textKey: "botActions.diplomacy.twoPlusInfluenceNoAllianceAdjacentNpr",
    yes: "selectAdjacentNprHighestBaseTax",
    no: "allianceOnNprWithLessThanTwoInfluence"
  },

  selectAdjacentNprHighestBaseTax: {
    type: "action",
    textKey: "botActions.diplomacy.selectAdjacentNprHighestBaseTax",
    detailKeys: [
      "botActions.diplomacy.preferNprMarriedToBot"
    ],
    next: "alliancePossibleForSelectedNpr"
  },

  allianceOnNprWithLessThanTwoInfluence: {
    type: "question",
    textKey: "botActions.diplomacy.allianceOnNprWithLessThanTwoInfluence",
    yes: "selectNprHighestBaseTaxPreferAdjacent",
    no: "goDiplomaticTargetChart"
  },

  selectNprHighestBaseTaxPreferAdjacent: {
    type: "action",
    textKey: "botActions.diplomacy.selectNprHighestBaseTax",
    detailKeys: [
      "botActions.diplomacy.preferAdjacentToBot"
    ],
    next: "anyFreeSpaceInTargetAreas"
  },

  anyFreeSpaceInTargetAreas: {
    type: "question",
    textKey: "botActions.diplomacy.anyFreeSpaceInTargetAreas",
    yes: "addTwoInfluenceInTargetAreas",
    no: "covertActionReplaceOpponentInfluence"
  },

  addTwoInfluenceInTargetAreas: {
    type: "action",
    textKey: "botActions.diplomacy.addTwoInfluenceInTargetAreas",
    detailKeys: [
      "botActions.diplomacy.preferTargetCapital"
    ],
    noteKey: "botActions.diplomacy.diplomaticIdeasInfluenceNote",
    next: "alliancePossibleForAddTwoInfluence"
  },

  covertActionReplaceOpponentInfluence: {
    type: "action",
    textKey: "botActions.diplomacy.covertActionReplaceOpponentInfluence",
    detailKeys: [
      "botActions.diplomacy.preferTargetCapital"
    ],
    next: "endTurn"
  },

  goDiplomaticTargetChart: {
    type: "external",
    navigation: "call",
    target: "diplomatic-targeting",
    textKey: "botActions.diplomacy.goToDiplomaticTargetChart",
    detailKeys: [
      "botActions.diplomacy.rollForTarget"
    ],
    nextAfterReturn: "allianceOnTargetNpr"
  },

  allianceOnTargetNpr: {
    type: "question",
    textKey: "botActions.diplomacy.allianceOnTargetNpr",
    yes: "canEnterRoyalMarriageForTargetNpr",
    no: "anyFreeSpaceInTargetAreas"
  },

  goDiplomaticTargetChartReroll: {
    type: "external",
    navigation: "call",
    target: "diplomatic-targeting",
    textKey: "botActions.diplomacy.goToDiplomaticTargetChart",
    detailKeys: [
      "botActions.diplomacy.rerollIfPreviousTarget"
    ],
    nextAfterReturn: "anyFreeSpaceInTargetAreasAfterReroll"
  },

  anyFreeSpaceInTargetAreasAfterReroll: {
    type: "question",
    textKey: "botActions.diplomacy.anyFreeSpaceInTargetAreas",
    yes: "botPowerLessThanTargetBaseTax",
    no: "goDiplomaticTargetChartReroll"
  },

  botPowerLessThanTargetBaseTax: {
    type: "question",
    textKey: "botActions.diplomacy.botPowerLessThanTargetBaseTax",
    yes: "spendTwoBotPowerAddTwoInfluenceInTargetRealm",
    no: "goDiplomaticTargetChartReroll"
  },

  spendTwoBotPowerAddTwoInfluenceInTargetRealm: {
    type: "action",
    textKey: "botActions.diplomacy.spendTwoBotPowerAddTwoInfluenceInTargetRealm",
    noteKey: "botActions.diplomacy.diplomaticIdeasInfluenceNote",
    next: "endTurn"
  },

  influenceAtLeastNprBaseTaxPlusOpponentInfluence: {
    type: "question",
    textKey: "botActions.diplomacy.influenceAtLeastNprBaseTaxPlusOpponentInfluence",
    detailKeys: [
      "botActions.diplomacy.ignorePapalStatesAndImperialInfluence"
    ],
    yes: "annexNprProvinces",
    no: "selectNprHighestBaseTaxPreferAdjacent"
  },

  annexNprProvinces: {
    type: "action",
    textKey: "botActions.diplomacy.annexNprProvinces",
    detailKeys: [
      "botActions.diplomacy.preferNprAdjacentByLandThenHighestBaseTax"
    ],
    noteKey: "botActions.diplomacy.annexNprProvincesNote",
    next: "ownsAllProvincesInNewAreaAndLessThanTwoCores"
  },

  ownsAllProvincesInNewAreaAndLessThanTwoCores: {
    type: "question",
    textKey: "botActions.diplomacy.ownsAllProvincesInNewAreaAndLessThanTwoCores",
    yes: "spendBotPowerPlaceCore",
    no: "endTurn"
  },

  spendBotPowerPlaceCore: {
    type: "action",
    textKey: "botActions.diplomacy.spendBotPowerPlaceCore",
    detailKeys: [
      "botActions.diplomacy.removeOtherBotsClaimsFromArea"
    ],
    next: "endTurn"
  },

  higherBaseTaxThanNpr: {
    type: "question",
    textKey: "botActions.diplomacy.higherBaseTaxThanNpr",
    yes: "influenceAtLeastNprBaseTaxPlusOpponentInfluence",
    no: "allianceOnAdjacentNpr"
  },

  hasDoubleBaseTaxOfNpr: {
    type: "question",
    textKey: "botActions.diplomacy.hasDoubleBaseTaxOfNpr",
    yes: "influenceAtLeastNprBaseTaxPlusOpponentInfluence",
    no: "canEnterRoyalMarriage"
  },

  canEnterRoyalMarriage: {
    type: "question",
    textKey: "botActions.diplomacy.canEnterRoyalMarriage",
    yes: "selectNprHighestBaseTaxForRoyalMarriage",
    no: "twoPlusInfluenceNoAllianceAdjacentNpr"
  },

  selectNprHighestBaseTaxForRoyalMarriage: {
    type: "action",
    textKey: "botActions.diplomacy.selectNprHighestBaseTaxForRoyalMarriage",
    next: "royalMarriageRoll"
  },

  royalMarriageRoll: {
    type: "roll",
    die: "d6",
    branches: [
      { values: [1, 2], next: "addTwoInfluenceInUnusedAreas" },
      { values: [3, 4, 5, 6], next: "placeRoyalMarriageOnTargetCapital" }
    ]
  },

  addTwoInfluenceInUnusedAreas: {
    type: "action",
    textKey: "botActions.diplomacy.addTwoInfluenceInUnusedAreas",
    detailKeys: [
      "botActions.diplomacy.preferTargetAreasThenAdjacentToBot"
    ],
    next: "atPeaceAndHasSixPlusBotPowerLeft"
  },

  atPeaceAndHasSixPlusBotPowerLeft: {
    type: "question",
    textKey: "botActions.diplomacy.atPeaceAndHasSixPlusBotPowerLeft",
    yes: "goDiplomaticTargetChartReroll",
    no: "endTurn"
  },

  placeRoyalMarriageOnTargetCapital: {
    type: "action",
    textKey: "botActions.diplomacy.placeRoyalMarriageOnTargetCapital",
    next: "endTurn"
  },

  alliancePossibleForSelectedNpr: {
    type: "question",
    textKey: "botActions.diplomacy.alliancePossibleForSelectedNpr",
    noteKey: "botActions.diplomacy.alliancePossibleNote",
    yes: "placeAllianceOnTargetCapital",
    no: "anyFreeSpaceInTargetAreas"
  },

  placeAllianceOnTargetCapital: {
    type: "action",
    textKey: "botActions.diplomacy.placeAllianceOnTargetCapital",
    next: "endTurn"
  },

  alliancePossibleForAddTwoInfluence: {
    type: "question",
    textKey: "botActions.diplomacy.alliancePossibleForAddTwoInfluence",
    noteKey: "botActions.diplomacy.alliancePossibleNote",
    yes: "placeAllianceOnTargetCapital",
    no: "canEnterRoyalMarriageForTargetNpr"
  },
  
  canEnterRoyalMarriageForTargetNpr: {
    type: "question",
    textKey: "botActions.diplomacy.canEnterRoyalMarriage",
    yes: "royalMarriageRoll",
    no: "addTwoInfluenceInUnusedAreas"
  },

  endTurn: {
    type: "end",
    textKey: "botActions.diplomacy.endTurn"
  }
};
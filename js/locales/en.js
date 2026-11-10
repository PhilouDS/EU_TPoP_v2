export const en = {
  common: {
    yes: "Yes",
    no: "No",
    previousStep: "Previous Step",
    mainMenu: "Main Menu",
    botActionsMenu: "Bot Actions Menu",
    confirm: "Confirm",
    cardId: "Enter the Card ID",
    invalidCardId: "Enter a Card ID from 1 to 24.",
    completeAction: "Complete Action",
    rollDie: "Click here to roll the virtual die",
    dieResult: "Result:",
    continue: "Continue",
    playerResolutionsMenu: "Player Resolutions Menu",
  },

  home: {
    title: "Europa Universalis:<br>The Price of Power",
    botActions: "BOT ACTIONS",
    botRealmTargetingCharts: "BOT REALM TARGETING CHARTS",
    playerResolutions: "PLAYER RESOLUTIONS",
    backToMainMenu: "BACK TO MAIN MENU",
    credits: "Credits",
  },

  credits: {
    title: "Credits — v2",
    appDevelopment: "UNOFFICIAL COMPANION APP developed and published by:",
    gameDesign: "Game design and development:",
    soloModeDesign: "Solo mode design:",
    gamePublishers: "Game publishers*:",
    publisherDisclaimer: "*Aegir Games and Paradox Interactive are not the publishers of the app. Please do not contact them for any request about it.",
    rulebook: "For other game credits, see rulebook.",
  },

  playerResolutions: {
    landBattle: {
      title: "Land Battle Resolution",
      appointAttackerGeneral: "Attacker may Appoint/Assign a General to their Army.",
      anyDefenderHuman: "Is any defender a human player?",
      moreThanOnePrDefender: "More than one PR defender?",
      determineMainDefender: "Determine Main Defender.",
      determineMainDefenderDetail: "The PR with the most Units in this Area is the Main Defender. If tied, the defending PR who last took a Turn decides.",
      appointDefenderGeneral: "(Main) Defender may Appoint/Assign a General to their Army.",
      appointDefenderGeneralDetail: "Only if the Army is inside its own Realm.",
      anyDefenderBot: "Is any defender a Bot?",
      goToBotLandBattle: "Go to: Bot Land Battle Resolution",
      anyEnemyNprProvinces: "Any Enemy NPR Provinces in the Area?",
      placeNprUnits: "Place NPR Units in this Area equal to the total MC of all NPR defenders.",
      placeNprUnitsEnemyAreas: "Areas containing Units belonging to an NPR's Enemies do not contribute to that NPR's MC.",
      placeNprUnitsAlreadyUsed: "An Area whose MC has already contributed to another Battle this Turn does not contribute again.",
      largeNprOrRebelForce: "Are there 3+ defending Rebel/NPR Units and no PR defenders?",
      drawMilitaryCardForLeader: "Draw a Military Card to see if the Rebel/NPR forces are commanded by a Leader.",
      accountMilitaryIdeas: "Account for Military Ideas that take effect prior to Battle Dice rolls.",
      accountMilitaryIdeasOrder: "Attacker first, then Main Defender.",
      accountMilitaryIdeasExamples: "E.g. “Military Drill” and “Noble Knights”.",
      playBattleActions: "Play Battle Actions {battleAction}.",
      playBattleActionsOrder: "Attacker goes first, then Main Defender.",
      rollBattleDice: "Roll Battle Dice for both Attacker and Defender(s).",
      rollBattleDiceBase: "Each side rolls 3 Infantry Dice.",
      rollBattleDiceAdditional: "Add Battle Dice provided by the Leader and by Battle Actions.",
      assignCasualties: "Assign Casualties to both sides.",
      assignCasualtiesDetail: "Each matching die result inflicts 1 Casualty on an Enemy Unit of that type. Each Unit can suffer only 1 Casualty per roll.",
      woundedGenerals: "Add {illHealth} tokens to wounded Generals.",
      anyUnitsRemaining: "Any Units remaining in the Battle?",
      onlyOneSideHasUnitsRemaining: "Does only one side have Units remaining?",
      nprMustRetreat: "Do any defending NPR Units have to Retreat?",
      resolveNprRetreat: "Remove the Retreating NPR Units.",
      bothSidesHaveUnitsAfterNprRetreat: "After the NPR Retreat, do both sides still have Units remaining?",
      attackerRetreats: "Does the Attacker Retreat?",
      defenderRetreats: "Does the Defender Retreat?",
      resolveRetreatAndRemoveNpr: "Any Retreating player sustains 1 additional Casualty and must move their remaining Units to a Friendly or Neutral adjacent Area. Now remove all NPR Units.",
      proclaimWinner: "The side with Units remaining in the Area is declared the Winner of the Battle.",
      activePlayerReward: "If the Active Player won the Battle and this is their first Battle victory this Turn, gain 1 {militaryPower}. This reward applies only to Battles during the Action Phase.",
      endBattleNoWinner: "No Units remain. The Battle has no Winner.",
      endBattle: "End Battle",
      notes: {
        ignoreExistingHostileUnits: "Do not count NPR Provinces if Units Hostile to that NPR were present there prior to this Turn.",
        doubleInfantry: "The outlined Infantry icon on a {battleDoubleInfantry} result counts as an additional Infantry hit only with the “Tercios/Janissaries” or “Line Infantry” Military Ideas.",
        mixedUnitCasualties: "Mixed forces: alternate Casualties between Mercenary, Regular and Allied Units. Regular Units → Exhausted; Mercenary and Allied Units → General Supply.",
        multiplePrCasualties: "Several defending PRs: alternate Casualties between their Realms, starting with the Realm that has the most Units. The Active Player breaks ties.",
        woundedGenerals: "For each pair of {battleDoubleInfantry} rolled, the Enemy General receives 1 {illHealth} if their side suffered at least 1 Casualty. A second {illHealth} kills the General.",
        nprRetreat: "Unless defending their Capital Area or last remaining Area, NPR Units Retreat (are removed) if their side has fewer Units than the Enemy.",
        rebelsNeverRetreat: "Rebel Units never Retreat.",
        retreatNote6: "Attackers must Retreat to where they came from."
      }
    },

    navalBattle: {
      title: "Naval Battle Resolution",
      appointAttackerAdmiral: "Attacker may Appoint/Assign an Admiral to their Fleet.",
      anyDefenderHuman: "Is any defender a human player?",
      moreThanOnePrDefender: "More than one PR defender?",
      determineMainDefender: "Determine Main Defender.",
      determineMainDefenderDetail: "The PR with the most Ships in this Sea Zone is the Main Defender. If tied, the defending PR who last took a Turn decides.",
      assignDefenderAdmiral: "The (Main) Defender may Assign an Admiral to their Fleet.",
      anyDefenderBot: "Is any defender a Bot?",
      goToBotNavalBattle: "Go to: Bot Naval Battle Resolution",
      anyEnemyNprPorts: "Any Enemy NPR Ports facing this Sea Zone?",
      placeNprShips: "Place NPR Ships in this Sea Zone equal to the total NC of all NPR defenders.",
      placeNprShipsEnemyAreas: "Areas containing Units belonging to an NPR's Enemies do not contribute to that NPR's NC.",
      placeNprShipsAlreadyUsed: "An Area whose NC has already contributed to another Battle this Turn does not contribute again.",
      largePirateOrNprForce: "Are there 3+ defending Pirate/NPR Ships and no PR defenders?",
      drawMilitaryCardForLeader: "Draw a Military Card to see if the Pirate/NPR forces are commanded by a Leader.",
      accountMilitaryIdeas: "Account for Military Ideas that take effect prior to Battle Dice rolls.",
      accountMilitaryIdeasOrder: "Attacker first, then Main Defender.",
      playBattleActions: "Play Battle Actions {battleAction}.",
      playBattleActionsOrder: "Attacker goes first, then Main Defender.",
      rollBattleDice: "Roll Naval Battle Dice for both Attacker and Defender(s).",
      rollBattleDiceBase: "Each side rolls 3 Artillery Dice.",
      rollBattleDiceAdditional: "Add Battle Dice provided by the Admiral and by Battle Actions.",
      assignCasualties: "Assign Casualties to both sides.",
      assignCasualtiesDetail: "Each {battleArtillery} result inflicts 1 Casualty on an Enemy Ship.",
      woundedAdmiralsAndCapturedShips: "Add {illHealth} tokens to wounded Admirals. Check for Captured Ships.",
      capturedShips: "If you have Ships remaining and have eliminated all Enemy Ships, you may Capture Enemy Ships.",
      anyShipsRemaining: "Any Ships remaining in the Battle?",
      onlyOneSideHasShipsRemaining: "Does only one side have Ships remaining?",
      nprMustRetreat: "Do any defending NPR Ships have to Retreat?",
      resolveNprRetreat: "Remove the Retreating NPR Ships.",
      bothSidesHaveShipsAfterNprRetreat: "After the NPR Retreat, do both sides still have Ships remaining?",
      attackerRetreats: "Does the Attacker Retreat?",
      defenderRetreats: "Does the Defender Retreat?",
      resolveRetreatAndRemoveNpr: "Any Retreating player loses 1 Ship as a Casualty, then moves their remaining Ships to an adjacent non-Hostile Sea Zone or adjacent Friendly Port. Now remove all NPR Ships.",
      proclaimWinner: "The side with Ships remaining in the Sea Zone is declared the Winner of the Battle.",
      activePlayerReward: "If the Active Player won the Battle and this is their first Battle victory this Turn, gain 1 {militaryPower}.",
      endBattleNoWinner: "No Ships remain. The Battle has no Winner.",
      endBattle: "End Battle",
      notes: {
        noDefenderAdmiral: "Defenders may not Appoint Admirals at the start of a Naval Battle.",
        ignoreExistingHostileShips: "Do not count NPR Ports if Ships Hostile to that NPR were already in this Sea Zone prior to the current Turn.",
        heavyShipAutomaticHit: "Each Heavy Ship also inflicts 1 automatic hit on the Enemy.",
        heavyShipCasualties: "Heavy Ships can take 2 hits. Lay a Heavy Ship on its side after the first hit. A damaged Heavy Ship is repaired if it ends a Turn or Round in a Friendly Port.",
        woundedAdmiralsAndCapturedShips: "For each pair of {battleDoubleInfantry} rolled, any Enemy Admiral receives 1 {illHealth} if their side suffered at least 1 Casualty. A second {illHealth} kills the Admiral.<br><br>For each {battleDoubleInfantry} result rolled in the final Battle Round, convert 1 Enemy Casualty from that Round into a Captured Ship. The Enemy decides which Ships are captured. Replace each Captured Ship with one of your Ships from Supply.",
        multiplePrCasualties: "Several defending PRs: alternate Casualties between their Realms, starting with the Realm that has the most Ships. The Active Player breaks ties.",
        nprRetreat: "Unless defending a Sea Zone adjacent to their Capital, NPR Ships Retreat — and are removed — if their side has fewer Ships than the Enemy.",
        piratesNeverRetreat: "Pirates never Retreat.",
        retreat: "Attackers must Retreat to where they came from. All Retreating Ships belonging to the same Realm must Retreat to a single destination."
      }
    },

    peaceResolution: {
      title: "Peace Resolution",
      automaticWhitePeace: "Do any Wars satisfy Automatic White Peace conditions?",
      resolveAutomaticWhitePeace: "End all such Wars with White Peace terms. Each PR loses {prestige1} per White Peace they enter. Place Truce tokens for all such Wars.",
      anyTotalVictory: "Does any PR at War satisfy Total Victory conditions?",
      selectTotalVictoryPlayer: "Go to the first player in player order who has achieved a Total Victory against another Realm.",
      playerOrderReminder: "Start with the First Player and go clockwise.",
      victorHuman: "Is the Victor a human player?",
      goToBotPeaceResolution: "Go to: Bot Peace Resolution",
      loserHuman: "Is the Loser a human player?",
      wantsFullAnnexation: "Does the Victor want to Enforce Full Annexation?",
      loserBot: "Is the Loser a Bot?",
      wantsVassalization: "Does the Victor want to Enforce Vassalization?",
      applyVassalization: "Victor places {vassal} on all Loser's Provinces (removing all {town}) and gains 2 {influence} in the new Vassal's Realm. Add {unrest} to {vassal} gained in Areas where the Victor Occupied no Provinces.",
      annexationVassalizationCleanup: "Remove War token(s), all Occupied tokens, and all PR tokens except the Victor's from the Loser's Realm. Victor may discard {claim} from any Area(s) where they gained {town}/{vassal}, to remove 2 {unrest} per {claim}. If an NPR is Annexed, a PR removing an {activeAlly} loses {prestige2}.",
      anyUnresolvedWars: "Are there any PRs with unresolved Wars?",
      anyoneWantsToEndWar: "Do any of these players want to end their War?",
      selectActivePlayer: "The first player in the overall Turn order who is involved in an ongoing War is selected as Active Player.",
      activePlayerHuman: "Is this a human player?",
      pickUnresolvedWar: "Active Player must pick one of their unresolved Wars.",
      eitherSideSurrenders: "Does either side Surrender?",
      resolveSurrenderPrestige: "Loser loses {prestige2}, and Victor gains {prestige2}.",
      enemyHuman: "Is the Enemy a human player?",
      eitherPlayerHasDoubleUnits: "Does either player have twice as many Land Units Deployed as their Enemy?",
      activePlayerOutnumbersNonHumanEnemy: "Do the Active Player's Deployed Land Units outnumber the Deployed Land Units of their Enemy and the total number of {manpower} in their Areas?",
      enforcePeaceTerms: "Does the Victor want to Enforce Peace terms?",
      wantsHumiliation: "Does the Victor want to Enforce Humiliation?",
      applyHumiliation: "All Occupied Provinces are returned to their Lawful Owners. Victor scores {prestige} equal to 2 × Tax Value of Provinces returned to Loser (max. 10 {prestige}). Loser loses the same amount of {prestige}.",
      wantsKeepCurrentBoardState: "Does the Victor want to Keep Current Board State?",
      returnOccupiedCapitals: "Occupied Capitals must be returned to their Lawful Owner, who must pay 10 {ducats} to the Occupier. Bots lose 2 {botPower} instead of Ducats.",
      applyKeepCurrentBoardState: "Occupiers keep all Provinces that they currently Occupy. Victor may instead of keeping Provinces they Occupy:<br> - Exchange any of these for own de jure Provinces Occupied by Enemy of equal Tax Value, or for 3 {ducats} × Tax Value returned.<br> - Liberate any of these to score {prestige1} × Tax Value Liberated, and gain an {alliance} with one Liberated NPR and 2 {influence} in that NPR.",
      keepBoardStateClaimsAndUnrest: "PRs may discard a {claim} from any Area(s) where they have gained Provinces to remove 2 {unrest} from the same Area(s).",
      wantsSecureDesiredSuccession: "Does the Victor want to Secure Desired Succession?",
      applySecureDesiredSuccession: "Remove all {royalMarriage}/{disputedSuccession} and {alliance}/{activeAlly} from the Loser, except the Victor's. Victor scores {prestige3} per {royalMarriage}/{disputedSuccession} removed; their owners lose {prestige3}. Victor flips over their {royalMarriage}, if any, and scores {prestige} equal to the Loser's Tax Income (max. {prestige5}). Victor may gain an {alliance} with the Loser and, if the Loser is an NPR, 4 {influence} in the Loser's Capital Area; if the Loser is a PR, replace the Loser's Ruler with a discarded Leader.",
      wantsForceConversion: "Does the Victor want to Force Conversion?",
      applyForceConversion: "Loser and Loser's Capital Area must adopt the Victor's State Religion. Victor gains {prestige3} and 2 {influence} in the Loser's Capital Area. Loser loses {prestige5} and 4 {influence}.",
      negotiatedPeace: "If both sides are human players, they may try to Negotiate Peace terms. Otherwise move on to the next Node.",
      nonWhitePeaceTermsAgreed: "Have Non-White Peace terms been agreed?",
      whitePeaceAgreed: "Is White Peace agreed?",
      applyWhitePeacePrestige: "PRs lose {prestige1} each.",
      returnAllOccupiedProvinces: "All Occupied Provinces are returned to their Lawful Owners.",
      placeTruceTokens: "Place Truce tokens as required.",
      relocateNeutralLandUnits: "All PRs with Land Units in Neutral Areas must place these in the nearest Friendly Area.",
      flipWarTokens: "Flip all their War tokens back to the Peace side.",
      returnAlliedUnits: "Return all Allied Units in their Armies and Manpower Reserve to the General Supply.",
      endPeaceResolution: "End Peace Resolution",
      notes: {
        note1: "Neither side in the War Occupy any of their Enemy’s Provinces (including Provinces of any of their Enemy’s Vassals or Active Allies).",
        note2: "A PR must Occupy all of their Enemy’s Provinces, while the Enemy has no Deployed Land Units. Vs. an NPR Enemy, a Bot must Occupy NPR’s Capital and Provinces of Tax Value ≥ ½ of NPR’s Tax Income.",
        note3: "Once a player has answered this question with a “no”, they do not get to answer it with a “yes” later in the Peace Resolution step this Round.",
        note4: "Victor must Occupy Loser’s Capital and at least one of their Provinces in another of their Areas (if any).",
        note5: "A player who satisfies this condition is considered the Victor in this War. Units on Distant Continents where Enemy PR has no {town} do not count.",
        note6: "Only human players can Surrender. A player who Surrenders is considered the Loser of that War. The Victor must Enforce a Peace that they can meet the requirements for. The Victor may Enforce Humiliation even if they do not Occupy Loser’s Capital.",
        note7: "Victor must Occupy Loser’s Capital, or the Enemy must have Surrendered.",
        note8: "Loser can never be forced to pay more than 2 × Tax Income to Victor, in total.",
        note9: "Victor must Occupy Loser’s Capital, and there must be at least 1 {disputedSuccession} on Loser’s Capital.",
        note10: "Victor must Occupy or Own all Provinces in Loser’s Capital Area. Victor must have another State Religion than Loser.",
        automaticWhitePeaceActiveAllies: "When checking Automatic White Peace, count an Enemy's {activeAlly} as part of that Enemy's Realm. White Peace with the PR also ends the War with all of their {activeAlly}.",
        fullAnnexation: "Total Victory only. The Loser must be an NPR or Bot. The Loser's de jure Provinces are fully incorporated into the Victor's Realm.",
        note5NonHuman: "Units on Distant Continents where the other Realm has no {town} do not count towards this calculation. An NPR is always considered to have 0 Deployed Land Units.",
        humiliationActiveAllies: "No {prestige} is scored from Provinces returned to the Loser's {activeAlly}.",
        keepBoardStateLostProvinces: "PRs that have lost any Provinces or Vassal Provinces as a consequence of this War may place a {claim} in each Area where they have lost at least 1 Province.",
        negotiatedPeace: "Advanced Rule. Both parties must be human players. They may negotiate whether or not the normal Victory conditions have been met. Vassalization and Full Annexation still require their normal conditions.",
        whitePeaceAcceptance: "An NPR always accepts White Peace if offered. With an Inconclusive Result, a Bot accepts White Peace if its Enemy has captured Provinces of greater Tax Value from the Bot than the Bot has captured from that Enemy.",
        truceTokens: "Former Enemies enter a Truce until Phase 3 of the next Round. Do not place Truce tokens on the {activeAlly} of former Enemies or on Vassal Realms.",
        relocateNeutralLandUnits: "Each Area or Sea Zone counts as a distance of 1. If several Friendly Areas are equally close, choose one. This movement costs no {militaryPower}."
      }
    },
  },

  botRealmTargeting: {
    selectRealm: "Bot Realm",
    selectRealmPlaceholder: "Select Bot Realm",
    militaryChart: "Military Targeting Chart",
    diplomaticChart: "Diplomatic Targeting Chart",
    rolls: "Rolls",
    fallbacks: "Fallback",
    selectFirstValidTarget: "Select the first valid target:",
    noneValid: "None are valid",
    selectedTarget: "Selected target",
    confirmTarget: "Confirm Target",
    reroll: "Re-roll",
    backToCharts: "Back to Targeting Charts",
    noTargetsRemain: "No valid targets remain in this chart.",
    easternEuropeNote: "* Targets on the Eastern Europe map are only valid in scenarios where that board is included.",
    realms: {
      aragon: "Aragon",
      austria: "Austria",
      barbary: "Barbary",
      bohemia: "Bohemia",
      brandenburg: "Brandenburg/Prussia",
      burgundy: "Burgundy",
      castileSpain: "Castile/Spain",
      denmark: "Denmark",
      england: "England",
      france: "France",
      germany: "Germany",
      horde: "Horde",
      hungary: "Hungary",
      italy: "Italy",
      kalmar: "Kalmar Union",
      lithuania: "Lithuania",
      mamluk: "Mamluk",
      muscovyRussia: "Muscovy/Russia",
      netherlands: "Netherlands",
      norway: "Norway",
      novgorod: "Novgorod",
      ottoman: "Ottoman",
      persia: "Persia",
      poland: "Poland",
      portugal: "Portugal",
      scotland: "Scotland",
      sweden: "Sweden",
      teutonic: "Teutonic Order",
      venice: "Venice"
    },

    targets: {
      ownerBrescia: "Owner of Brescia",
      ownerFrancheComte: "Owner of Franche-Comté",
      ownerLuxembourg: "Owner of Luxembourg",
      ownerArtois: "Owner of Artois",
      france: "France",
      venice: "Venice",
      realmLombardy: "Realm in LOMBARDY",
      savoy: "Savoy",
      realmCentralItaly: "Realm in CENTRAL ITALY",
      ownerNapoli: "Owner of Napoli",
      ownerMesina: "Owner of Mesina",
      castile: "Castile",
      bavaria: "Bavaria",
      salzburg: "Salzburg",
      realmRhineland: "Realm in RHINELAND",
      ownerNamur: "Owner of Namur",
      ownerAntwerpen: "Owner of Antwerpen",
      ownerGent: "Owner of Gent",
      ownerAmsterdam: "Owner of Amsterdam",
      realmNetherlands: "Realm in NETHERLANDS",
      ownerHolstein: "Owner of Holstein",
      denmark: "Denmark",
      sweden: "Sweden",
      ownerKonigsberg: "Owner of Königsberg",
      saxony: "Saxony",
      brandenburgPrussia: "Brandenburg/Prussia",
      bohemia: "Bohemia",
      ownerSilesia: "Owner of Silesia",
      poland: "Poland",
      ownerPozsony: "Owner of Pozsony",
      opponentElectorAreas: "Opponent with {town}/{vassal} in 2+ original Elector Areas",
      ownerPest: "Owner of Pest",
      ragusa: "Ragusa",
      ownerBosnia: "Owner of Bosnia",
      ownerAlbania: "Owner of Albania",
      ownerKosovo: "Owner of Kosovo",
      wallachia: "Wallachia",
      moldavia: "Moldavia",
      ownerBeograd: "Owner of Beograd",
      ottomans: "Ottomans",
      realmBurgundy: "Realm in BURGUNDY",
      switzerland: "Switzerland",
      realmCorsicaSardinia: "Realm in CORSICA & SARDINIA",
      realmLanguedoc: "Realm in LANGUEDOC",
      realmAragon: "Realm in ARAGON",
      portugal: "Portugal",
      realmWestphalia: "Realm in WESTPHALIA",
      realmFlandersWallonia: "Realm in FLANDERS & WALLONIA",
      realmLowerSaxony: "Realm in LOWER SAXONY",
      realmPrussia: "Realm in PRUSSIA",
      realmWielkopolska: "Realm in WIELKOPOLSKA",
      realmPomerania: "Realm in POMERANIA",
      realmEstoniaLivonia: "Realm in ESTONIA & LIVONIA",
      ownerFirenze: "Owner of Firenze",
      papalStates: "Papal States",
      ownerSiena: "Owner of Siena",
      realmSicily: "Realm in SICILY",
      realmSerbiaAlbania: "Realm in SERBIA & ALBANIA",
      ownerConstantinople: "Owner of Constantinople",
      knights: "Knights",
      realmTranscaucasia: "Realm in TRANSCAUCASIA",

      adal: "Adal",
      ajuuraan: "Ajuuraan",
      albania: "Albania",
      allNprsIreland: "All NPRs in IRELAND",
      aqQoyunlu: "Aq Qoyunlu",
      aragon: "Aragon",
      austria: "Austria",
      basra: "Basra",
      benin: "Benin",
      bosnia: "Bosnia",
      brandenburg: "Brandenburg",
      bremen: "Bremen",
      brittany: "Brittany",
      brunswick: "Brunswick",
      burgundy: "Burgundy",
      byzantium: "Byzantium",
      castileSpain: "Castile/Spain",
      cleanseHeresy: "CLEANSE HERESY*",
      crimea: "Crimea",
      cyprus: "Cyprus",
      djerid: "Djerid",
      england: "England",
      ethiopia: "Ethiopia",
      florence: "Florence",
      franceAdjacentLand: "France, if adjacent by land",
      frankfurt: "Frankfurt",
      genoa: "Genoa",
      georgia: "Georgia",
      granada: "Granada",
      greatHorde: "Great Horde",
      hamburg: "Hamburg",
      hormuz: "Hormuz",
      hungary: "Hungary",
      japan: "Japan",
      kazan: "Kazan",
      kilwa: "Kilwa",
      kongo: "Kongo",
      liege: "Liege",
      lithuania: "Lithuania",
      livonianOrder: "Livonian Order",
      lorraine: "Lorraine",
      madagascar: "Madagascar",
      magdeburg: "Magdeburg",
      mamluks: "Mamluks",
      mantua: "Mantua",
      milan: "Milan",
      mongolia: "Mongolia",
      morocco: "Morocco",
      muscovy: "Muscovy",
      muscovyRussia: "Muscovy/Russia",
      najd: "Najd",
      naples: "Naples",
      navarra: "Navarra",
      nogai: "Nogai",
      norway: "Norway",
      novgorod: "Novgorod",
      nprAdjacentEnglishChannel: "NPR adjacent to ENGLISH CH.",
      nprAdjacentLandAlgiers: "NPR adjacent by land to ALGIERS",
      nprAdjacentLeon: "NPR adjacent to LEON",
      nprIreland: "NPR in IRELAND",
      odoyev: "Odoyev",
      oirat: "Oirat",
      oneTaxNprMoscowRyazan: "1-Tax NPR in MOSCOW & RYAZAN",

      ownerAdal: "Owner of Adal",
      ownerAdana: "Owner of Adana",
      ownerAkershus: "Owner of Akershus",
      ownerAlQuds: "Owner of Al-Quds",
      ownerAlexandria: "Owner of Alexandria",
      ownerAngola: "Owner of Angola",
      ownerAnjou: "Owner of Anjou",
      ownerAntilles: "Owner of Antilles",
      ownerAstrakhan: "Owner of Astrakhan",
      ownerAthina: "Owner of Athina",
      ownerAzov: "Owner of Azov",
      ownerBaghdad: "Owner of Baghdad",
      ownerBahia: "Owner of Bahia",
      ownerBaleares: "Owner of Baleares",
      ownerBalkh: "Owner of Balkh",
      ownerBaluchistan: "Owner of Baluchistan",
      ownerBangazi: "Owner of Bangazi",
      ownerBarcelona: "Owner of Barcelona",
      ownerBasarabia: "Owner of Basarabia",
      ownerBasra: "Owner of Basra",
      ownerBengal: "Owner of Bengal",
      ownerBergenhus: "Owner of Bergenhus",
      ownerBordeaux: "Owner of Bordeaux",
      ownerBourgogne: "Owner of Bourgogne",
      ownerBrugge: "Owner of Brugge",
      ownerBrunei: "Owner of Brunei",
      ownerCaffa: "Owner of Caffa",
      ownerCalifornia: "Owner of California",
      ownerCanada: "Owner of Canada",
      ownerCapeGoodHope: "Owner of Cape of Good Hope",
      ownerCapeOfGoodHope: "Owner of Cape of Good Hope",
      ownerCaux: "Owner of Caux",
      ownerCentralAmerica: "Owner of Central America",
      ownerCeuta: "Owner of Ceuta",
      ownerChagatai: "Owner of Chagatai",
      ownerConstantinopleChristian: "Owner of Constantinople (if Christian)",
      ownerCoromandel: "Owner of Coromandel",
      ownerCorsica: "Owner of Corsica",
      ownerCreta: "Owner of Creta",
      ownerCrete: "Owner of Crete",
      ownerCyprus: "Owner of Cyprus",
      ownerDanzig: "Owner of Danzig",
      ownerDeccan: "Owner of Deccan",
      ownerDelhi: "Owner of Delhi",
      ownerEdisanas: "Owner of Edisanas",
      ownerFars: "Owner of Fars",
      ownerFerrara: "Owner of Ferrara",
      ownerFlorida: "Owner of Florida",
      ownerFurdan: "Owner of Furdan",
      ownerGalicia: "Owner of Galicia",
      ownerGharb: "Owner of Gharb",
      ownerGibraltar: "Owner of Gibraltar",
      ownerGoa: "Owner of Goa",
      ownerGoldCoast: "Owner of Gold Coast",
      ownerGotland: "Owner of Gotland",
      ownerGranadaMuslim: "Owner of Granada (if Muslim)",
      ownerGreatLakes: "Owner of Great Lakes",
      ownerGujarat: "Owner of Gujarat",
      ownerGuyana: "Owner of Guyana",
      ownerHejaz: "Owner of Hejaz",
      ownerHerat: "Owner of Herat",
      ownerHormuz: "Owner of Hormuz",
      ownerHudsonBay: "Owner of Hudson Bay",
      ownerIsfahan: "Owner of Isfahan",
      ownerIskandariyya: "Owner of Iskandariyya",
      ownerJava: "Owner of Java",
      ownerKaraman: "Owner of Karaman",
      ownerKastamonu: "Owner of Kastamonu",
      ownerKastamonu_dummy: "Owner of Kastamonu",
      ownerKazakhstan: "Owner of Kazakhstan",
      ownerKazan: "Owner of Kazan",
      ownerKhiva: "Owner of Khiva",
      ownerKijevas: "Owner of Kijevas",
      ownerKleve: "Owner of Kleve",
      ownerKobenhavn: "Owner of København",
      ownerLaPlata: "Owner of La Plata",
      ownerLisboa: "Owner of Lisboa",
      ownerLorraine: "Owner of Lorraine",
      ownerLubeck: "Owner of Lübeck",
      ownerMadrid: "Owner of Madrid",
      ownerMalacca: "Owner of Malacca",
      ownerMali: "Owner of Mali",
      ownerMalta: "Owner of Malta",
      ownerMantova: "Owner of Mantova",
      ownerMexico: "Owner of Mexico",
      ownerMilano: "Owner of Milano",
      ownerMississippi: "Owner of Mississippi",
      ownerMoluccas: "Owner of Moluccas",
      ownerMongolia: "Owner of Mongolia",
      ownerMontpellier: "Owner of Montpellier",
      ownerMorea: "Owner of Morea",
      ownerMoskva: "Owner of Moskva",
      ownerNantes: "Owner of Nantes",
      ownerNavarra: "Owner of Navarra",
      ownerNaxos: "Owner of Naxos",
      ownerNeva: "Owner of Neva",
      ownerNewEngland: "Owner of New England",
      ownerNogai: "Owner of Nogai",
      ownerNovgorod: "Owner of Novgorod",
      ownerNyland: "Owner of Nyland",
      ownerOdoyev: "Owner of Odoyev",
      ownerOirat: "Owner of Oirat",
      ownerOsterbotten: "Owner of Österbotten",
      ownerPernambuco: "Owner of Pernambuco",
      ownerPeru: "Owner of Peru",
      ownerPfalz: "Owner of Pfalz",
      ownerPhilippines: "Owner of Philippines",
      ownerPicardie: "Owner of Picardie",
      ownerPicardieAdjacentLand: "Owner of Picardie, if adjacent by land",
      ownerPoznan: "Owner of Poznan",
      ownerProvence: "Owner of Provence",
      ownerPskov: "Owner of Pskov",
      ownerQafsah: "Owner of Qafsah",
      ownerQahirah: "Owner of Qahirah",
      ownerRagusa: "Owner of Ragusa",
      ownerReval: "Owner of Reval",
      ownerRhodes: "Owner of Rhodes",
      ownerRiga: "Owner of Riga",
      ownerRijeka: "Owner of Rijeka",
      ownerRioDeJaneiro: "Owner of Rio de Janeiro",
      ownerRoma: "Owner of Roma",
      ownerRyazan: "Owner of Ryazan",
      ownerSamarkand: "Owner of Samarkand",
      ownerSardinya: "Owner of Sardinya",
      ownerSavoie: "Owner of Savoie",
      ownerShirvan: "Owner of Shirvan",
      ownerSmolenskas: "Owner of Smolenskas",
      ownerSonghai: "Owner of Songhai",
      ownerSopron: "Owner of Sopron",
      ownerSouthSumatra: "Owner of South Sumatra",
      ownerStettin: "Owner of Stettin",
      ownerStockholm: "Owner of Stockholm",
      ownerTabriz: "Owner of Tabriz",
      ownerTambov: "Owner of Tambov",
      ownerTangiers: "Owner of Tangiers",
      ownerTimbuktu: "Owner of Timbuktu",
      ownerTimor: "Owner of Timor",
      ownerTirgoviste: "Owner of Tirgoviste",
      ownerTorda: "Owner of Torda",
      ownerTrebizond: "Owner of Trebizond",
      ownerTripoli: "Owner of Tripoli",
      ownerTrondheim: "Owner of Trondheim",
      ownerTunis: "Owner of Tunis",
      ownerTver: "Owner of Tver",
      ownerTyumen: "Owner of Tyumen",
      ownerUpperEgypt: "Owner of Upper Egypt",
      ownerValencia: "Owner of Valencia",
      ownerVilnius: "Owner of Vilnius",
      ownerVirginia: "Owner of Virginia",
      ownerVogelkop: "Owner of Vogelkop",
      ownerWarszawa: "Owner of Warszawa",
      ownerXian: "Owner of Xi'an",
      ownerYemen: "Owner of Yemen",
      ownerZagreb: "Owner of Zagreb",
      ownerZara: "Owner of Zara",
      ownerZemaitija: "Owner of Zemaitija",

      palatinate: "Palatinate",
      polandCommonwealth: "Poland/P-L Commonwealth",
      polandPlc: "Poland/P-L Commonwealth",
      provence: "Provence",
      pskov: "Pskov",
      qaraQoyunlu: "Qara Qoyunlu",
      raid: "RAID*",

      realmAegeanArchipelago: "Realm in AEGEAN ARCHIPELAGO",
      realmAlgiers: "Realm in ALGIERS",
      realmAndalucia: "Realm in ANDALUCIA",
      realmAquitaine: "Realm in AQUITAINE",
      realmAragonAdjacentLand: "Realm in ARAGON, if adjacent by land",
      realmAstrakhan: "Realm in ASTRAKHAN",
      realmBavaria: "Realm in BAVARIA",
      realmBavariaSwabia: "Realm in BAVARIA & SWABIA",
      realmBohemia: "Realm in BOHEMIA",
      realmBotCapitalArea: "Realm in Bot's Capital Area",
      realmBrittanyNormandy: "Realm in BRITTANY & NORMANDY",
      realmCaucasus: "Realm in CAUCASUS",
      realmCentralRussia: "Realm in CENTRAL RUSSIA",
      realmCircassia: "Realm in CIRCASSIA",
      realmCrimea: "Realm in CRIMEA",
      realmCroatiaBosnia: "Realm in CROATIA & BOSNIA",
      realmDalmatia: "Realm in DALMATIA",
      realmEastAnglia: "Realm in EAST ANGLIA",
      realmEasternUkraine: "Realm in EASTERN UKRAINE",
      realmEgypt: "Realm in EGYPT",
      realmFinland: "Realm in FINLAND",
      realmGotalandSkane: "Realm in GÖTALAND & SKÅNE",
      realmGreece: "Realm in GREECE",
      realmHungarianPlain: "Realm in HUNGARIAN PLAIN",
      realmIraq: "Realm in IRAQ",
      realmIreland: "Realm in IRELAND",
      realmJutland: "Realm in JUTLAND",
      realmKaraman: "Realm in KARAMAN",
      realmKarelia: "Realm in KARELIA",
      realmKurdistan: "Realm in KURDISTAN",
      realmLanguedocAdjacentLand: "Realm in LANGUEDOC, if adjacent by land",
      realmLithuania: "Realm in LITHUANIA",
      realmMacaronesia: "Realm in MACARONESIA",
      realmMacedoniaThrace: "Realm in MACEDONIA & THRACE",
      realmMazoviaMalopolska: "Realm in MAZOVIA & MALOPOLSKA",
      realmMoldavia: "Realm in MOLDAVIA",
      realmMuscowRyazan: "Realm in MOSCOW & RYAZAN",
      realmNaples: "Realm in NAPLES",
      realmNorthMorocco: "Realm in NORTH MOROCCO",
      realmNorthSahara: "Realm in NORTH SAHARA",
      realmNorthernAnatolia: "Realm in NORTHERN ANATOLIA",
      realmNorthumbria: "Realm in NORTHUMBRIA",
      realmNovgorod: "Realm in NOVGOROD",
      realmOstlandet: "Realm in OSTLANDET",
      realmPerm: "Realm in PERM",
      realmPortugal: "Realm in PORTUGAL",
      realmRedRuthenia: "Realm in RED RUTHENIA",
      realmRoyalHungary: "Realm in ROYAL HUNGARY",
      realmRum: "Realm in RUM",
      realmSaratov: "Realm in SARATOV",
      realmSaxony: "Realm in SAXONY",
      realmScotland: "Realm in SCOTLAND",
      realmSeine: "Realm in SEINE",
      realmSwitzerland: "Realm in SWITZERLAND",
      realmSyria: "Realm in SYRIA",
      realmThraceMacedonia: "Realm in THRACE & MACEDONIA",
      realmTransylvania: "Realm in TRANSYLVANIA",
      realmTunisia: "Realm in TUNISIA",
      realmVenetia: "Realm in VENETIA",
      realmVologda: "Realm in VOLOGDA",
      realmWallachiaBulgaria: "Realm in WALLACHIA & BULGARIA",
      realmWesternUkraine: "Realm in WESTERN UKRAINE",
      realmWhiteRuthenia: "Realm in WHITE RUTHENIA",

      riga: "Riga",
      ryazan: "Ryazan",
      scotland: "Scotland",
      serbia: "Serbia",
      shirvan: "Shirvan",
      teutonicOrder: "Teutonic Order",
      timbuktu: "Timbuktu",
      tlemcen: "Tlemcen",
      trebizond: "Trebizond",
      tunis: "Tunis",
      tver: "Tver",
      uzbek: "Uzbek",
      yemen: "Yemen"
    }
  },

  botActions: {
    title: "Bot Actions",
    mainTurnStructure: "Main Turn Structure",
    chooseSpecificAction: "Choose a Specific Action",
    peaceAndRebels: "Peace and Rebels Phase",
    incomeAndUpkeep: "Income and Upkeep Phase",
    cleanup: "Cleanup Phase",
    finalScoring: "Final Scoring",
    changeBotRealm: "Change Bot Realm",
    mainTurn: {
      start: "Start",
      noBotPower: "{botPower} left = 0, or cannot take more Turns this Round?",
      pickedEvent: "Has picked Event?",
      goToEvent: "Go to: Event",
      underAttack: "Is under attack by Enemies or Rebels?",
      goToDefend: "Go to: Defend",
      spend1BotPower: "Spend 1 {botPower}",
      canSiege: "Army on map board and can Siege in same Area?",
      goToSiege: "Go to: Siege",
      canColonize: "Has 3+ {botPower} left and 1+ {colonist}?",
      goToColonize: "Go to: Colonize",
      spend2BotPower: "Spend 2 {botPower}",
      spentMoreThanLeft: "Spent {botPower} > {botPower} left?",
      hasBotCards: "Has any Bot cards left?",
      atWarEnoughPower: "At War, and has 4+ {botPower} left?",
      pass: "Pass",
      firstToPass: "First to Pass: Gain 2 {botPower}",
      secondToPass: "Second to Pass: Gain 1 {botPower}",
      cardHasWarAction: "At War, and card has War Action?",
      atWar: "At War?",
      performWarAction: "Perform War Action on card.",
      actionTookEffect: "Did Action take effect?",
      performFirstAction: "Perform first Action on card.",
      performSecondAction: "Perform second Action on card, if any.",
      endTurn: "End Turn",
      drawBotCard: "Draw Bot Card.",
      spendShownCost: "Spend shown {botPower} cost.",
      discardActionCard: "Discard an Action Card if discard icon shown:",
      administrative: "Administrative",
      diplomatic: "Diplomatic",
      military: "Military",
      scorePrestigeFromCard: "Score Prestige = {botPower} spent on drawn Bot Card.",
      spend1Score1: "Spend 1 {botPower}, Score {prestige1}",
      botCard: "Bot Card",
      firstActionLabel: "First Action",
      secondActionLabel: "Second Action",
      warActionLabel: "War",

      notes: {
        underAttack: "Bot is considered under attack if Enemy Units or {rebelUnit} are present in any Areas with Bot’s {town}, or if Enemies or Rebels Occupy any of Bot’s {town}.",
        insufficientBotPower: "If Bot has less {botPower} left than card’s {botPower} cost, spend remaining {botPower} and execute card."
      }
    },

    defend: {
      source: "(from Main Turn Structure)",
      anyInvaders: "Any Area with Invaders?",
      canSiegeWith2BotPower: "Has 2+ {botPower} left, and Army in an Area where it can Siege Provinces?",
      dieResult: "Die result",
      goToSiege: "Go to: SIEGE",
      gain1BotPower: "Gain 1 {botPower}",
      armyDoubleInvaders: "Army ≥ 2x any Invading force?",
      canRecruit: "Has 2+ {botPower} left and more {manpower}?",
      recruit: "Spend 2 {botPower} to recruit 7/9/11 Units.",
      armyAtLeastInvaders: "Army ≥ any Invader's force?",
      armyDeployedCanSiege: "Army Deployed in an Area where it can Siege Provinces?",
      increaseArmyTo3: "If Army < 3 Units: Increase Army size to 3 Units.",
      occupiedBotTownNoInvaders: "Any Area with Bot's {town} that are Occupied, and no Invaders?",
      placeArmySafeBotArea: "Place Army in such Area without Hostile Units. Check for MAC.",
      placeArmySafeBotAreaDetail: "Prefer Area with the highest Tax Value of own {town} that are Occupied by Enemies/Rebels, then own Capital Area.",
      safeBotTownAvailable: "Any Areas with Bot's {town} where Army would not trigger a Battle?",
      armyOnMap: "Army is on the map?",
      macEnough: "Invaders in any Area where Bot's MAC ≥ Invading force?",
      placeArmyLargestInvaders: "Place Army in the Area with the largest Invading force that qualifies. Check for MAC.",
      preferPrEnemy: "Prefer PR Enemy.",
      goToLandBattle: "Go to: LAND BATTLE",
      gain1BotPowerIfVictorious: "Gain 1 {botPower} if victorious.",
      shipCanIncreaseMac: "Can placing a Ship sufficiently increase MAC in Area with Invaders?",
      placeShipNavalBridge: "Place Ship to extend Naval Bridge to valid Area.",
      triggersNavalBattle: "Triggers Naval Battle?",
      goToNavalBattle: "Go to: NAVAL BATTLE",
      placeArmySmallestInvaders: "Place Army in the Area with the smallest Invading force. Check for MAC.",
      preferPrEnemyForce: "Prefer PR Enemy force.",
      has2BotPower: "Has 2+ {botPower}?",
      goToSpy: "Go to: SPY",
      enemyTownSafeArea: "Any Area with Enemy {town}, where Army would not trigger a Battle, which is adjacent by land or connected via Naval Bridge to Bot's Realm?",
      placeArmyEnemyTown: "Place Army in such Area with highest total Tax Value of Enemy {town}. Check for MAC.",
      endTurn: "End Turn",
      invadersDefinition: "Invaders = Hostile Units in Areas with Bot's {town}.",
      notes: {
        recruit: "Number of Units recruited per 2 {botPower} spent is determined by the chosen Difficulty Level.",
        macAvailability: "Adjust Unit availability in Army based on MAC (see p. 5)."
      }
    },

    siege: {
      source: "(from Main Turn Structure + from DEFEND and MILITARY Actions)",

      siegeProvinces: "Siege Hostile Provinces of up to 3 Tax Value (Bot ignores Siege Strength). Spend 1 {botPower} per Tax Value sieged.",

      preferredTargets: "Prefer own Core Provinces Occupied by Enemy, then any Opponents' {town}/{vassal}, then NPRs.",

      atWarOrRebels: "At War, or has {town} with {unrest} or {rebelTown} on them in this Area?",

      removeArmy: "Remove Army from map.",

      endTurn: "End Turn",

      notes: {
        siegeRules: "If Bot only has 1 {botPower} and no Small Provinces to Siege, it Sieges a Large Province. If Bot has 3+ Military Ideas, it Sieges 2 Tax Value per {botPower} spent (up to 6 Tax Value in total). Bot can only Siege an Island Province if it has a Ship in an adjacent Sea Zone, except that they ignore this requirement for their own de jure Provinces. Also, see steps 4–7 of 'Sieges & Occupation', main rules page 28."
      }
    },

    spy: {
      source: "(from DEFEND Action + Bot Cards, 2nd Action: 13, 14; Bot Cards, War Action: 13, 14)",
      atWarWithOpponent: "At War with any Opponent?",
      selectWarOpponent: "Select such Opponent.",
      opponentHas3Unrest: "Opponent has 3+ {unrest}?",
      opponentRollRebelDice: "Covert Action: Opponent must roll Rebel Dice.",
      atWarWithNpr: "At War with NPR?",
      goToMilitary: "Go to: MILITARY",
      selectOpponent: "Select Opponent.",
      add2Unrest: "Covert Action: Add 2 {unrest} to Opponent's {town}.",
      endTurn: "End Turn"
    },

    colonize: {
      source: "(from Main Turn Structure + EXPLORE Action + Bot Card: 12)",
      has2ColonistsAndConnectedClaim: "Has 2+ {colonist} and any Colonial {claim} connected to Capital via a continuous chain of Bot's {town} and/or Ships?",
      has3Colonists: "Has 3+ {colonist}?",
      remove3Colonists: "Remove 3 of Bot's {colonist} from the Colonist Pool. Gain 1 {botPower}.",
      removeAllColonists: "Remove all of Bot's {colonist} from the Colonist Pool.",
      replaceColonialClaim: "Replace a Colonial {claim} with a Small {town}.",
      preferredLocation: "Prefer adjacent to Bot's {town}, then Ports.",
      goToExplore: "Go to: EXPLORE",
      endTurn: "End Turn"
    },

    unrest: {
      source: "(Bot Cards: 13, 20, 21, 22, 23)",
      ownsProvincesWithUnrest: "Owns any Provinces with {unrest}?",
      removeUnrest: "Remove {unrest} from 2 Provinces Owned by Bot.",
      preferCapitalThenLargeTown: "Prefer Capital, then Large {town}.",
      hasLessThan2CoresAndCanPlace: "Has < 2 {core} in play, and can place a {core}?",
      ownsEligibleAreaWithHigherTaxValue: "Owns all Provinces in eligible Area with higher total Tax Value than any current {core} Area?",
      removeCore: "Remove {core} in play from Area with lowest total Tax Value.",
      placeCore: "Place {core} in eligible Area with highest total Tax Value.",
      performSecondAction: "Perform second Action on card instead.",
      endTurn: "End Turn",
      notes: {
        removeOtherBotsClaims: "Remove all other Bots' {claim} from Areas where {core} are placed."
      }
    },

    convert: {
      source: "(Bot Cards: 15, 16, 17, 18, 19)",
      anyAreasWithReligiousDissent: "Any Areas with Religious Dissent?",
      catholicAndAllAreasProtestantOrViceVersa: "Is Catholic and all its Areas are Protestant, or vice versa?",
      allProvincesOwnedBySameReligion: "All Provinces in a dissenting Area Owned by Bot, or by Realms with same State Religion?",
      changeStateReligion: "Change State Religion to majority Religion. Gain 1 {botPower}.",
      changeStateReligionEffects: "Lose {prestige3} and one {royalMarriage}. Move 5 {influence}. Add {unrest} and roll Rebel Dice.",
      convertArea: "Convert Area to State Religion. Score {prestige2}.",
      preferArea: "Prefer Area with own {town} of most Tax Value.",
      performSecondAction: "Perform second Action on card instead.",
      endTurn: "End Turn",
      notes: {
        changeStateReligion: "Same procedure as the Change State Religion Action on page 13 of the main rules."
      }
    },

    focus: {
      source: "(Bot Cards, 2nd Action: 16, 17, 18, 19, 20, 21, 22, 23)",
      cubeInFocusAreaAlready: "{cube} in any Focus area already?",
      placeSpentBotPowerExistingArea: "Place the {botPower} spent in this Focus area.",
      placeSpentBotPowerNamedArea: "Place the {botPower} spent in the Focus area named on the card.",
      hasEnoughCubes: "Now has 2/3 {cube} in this Focus area?",
      matchingMilestoneAvailable: "Milestone matching Focus type is available?",
      scoreMatchingMilestone: "Score Milestone matching Focus type. Gain 2 {botPower} and score {prestige} as normal.",
      score3Prestige: "Score {prestige3}.",
      discardCubes: "Discard all {cube} from Focus area.",
      putAsideBotCard: "Put aside Bot Card.",
      notReshuffledThisAge: "(Not reshuffled this Age)",
      endTurn: "End Turn",
      notes: {
        difficultyLevel: "Depending on chosen difficulty level (see p. 2)."
      }
    },

    idea: {
      source: "(Bot Card: 24)",
      cubeInNonEconomicFocusArea: "{cube} in any Focus area other than Economy?",
      availableIdeasMatchingFocus: "Any available Ideas matching this Focus type?",
      selectFocusType: "Select Focus type",
      manualSelection: "Manual selection",
      selectedFocusType: "Selected Focus type",
      pickIdea: "Pick Idea matching Focus type.",
      tagIdea: "Tag this Idea and appropriate slot on Bot Mat's Idea Track with a tag chit.",
      scorePrestige: "Score {prestige} as normal.",
      preferIdeas: "Prefer unresearched Ideas, then random.",
      endTurn: "End Turn",
      focusTypes: {
        administrative: "Administrative",
        diplomatic: "Diplomatic",
        military: "Military"
      }
    },

    papalCuria: {
      source: "(Bot Card: 14; Bot Card, 2nd Action: 15)",
      hasCatholicStateReligion: "Has Catholic State Religion?",
      uncontestedPapalController: "Is uncontested Papal Controller?",
      age1Or2: "Age I or II?",
      adjacentToMuslimArea: "Adjacent to Area with 2+ Provinces Owned by Muslim Realms, and no active Excom./Crusade?",
      catholicOpponentsNoActiveExcomCrusade: "Any Catholic Opponents and no active Excom./Crusade?",
      papalControllerCanExcommunicate: "Is Papal Controller, in Age I or II, and can use Excommunication to remove an Opponent's {cardinal}?",
      placeCardinal: "Place {cardinal} in the #1 slot of the Papal Curia.",
      ifNowPapalController: "If now Papal Controller: Remove Excommunication on own Realm, if any.",
      excommunicateOpponent: "Excommunicate Opponent. Opponent loses {prestige1} and 1 {cardinal}, and must discard 4 {influence} from Catholic Areas.",
      placeCrusade: "Place Crusade token and a {claim} on such Area. Score {prestige1}. Recruit 2 Units if able.",
      preferAreaWithTown: "Prefer Area where Bot has {town}.",
      goToMilitary: "Go to: MILITARY",
      militaryCrusadeTarget: "Select valid Crusade target, and skip directly to Declare War step.",
      performSecondAction: "Perform second Action on card instead.",
      endTurn: "End Turn"
    },

    military: {
      source: "(from PAPAL and SPY Actions + Bot Cards: 02, 03, 04; Bot Cards, War Action: 05, 06, 12, 15)",

      goToMilitaryTargetChart: "Go to: MILITARY TARGET CHART",
      rollForTarget: "roll for target: if an NPR, place a {claim}",

      atWar: "At War?",
      hasClaim: "Has {claim}?",
      doesRollMatchNonColonialClaim: "Does roll match # on a non-Colonial {claim}?",
      anyAreaWithBattlegroundAdjacentBot: "Any Area with {battlegroundArea} adjacent to Bot?",
      botHasMarriage: "Bot has {royalMarriage} with {disputedSuccession} side up, in Area adjacent to Bot?",

      targetEligibleBotLessFourInfluence: "Target is eligible, and Bot has < 4 {influence} in target's Areas if it is an NPR?",
      hasCasusBelli: "Has Casus Belli?",
      targetIsOpponent: "Target is an Opponent?",
      targetStrengthGreaterTwiceBotStrength: "Target's strength ≥ 2x Bot's strength?",

      botHasAlliesWithMoreTwoInfluence: "Bot has NPR Allies with 2+ {influence}, adjacent to target?",
      armySizeGreaterTwiceTargetStrength: "Army size ≥ 2x target's strength?",
      hasMoreFourBotCubeLeft: "Has 4+ {botPower} left and more {manpower}?",

      dowTriggersNavalBattle: "DoW triggers Naval Battles?",
      dowTriggersLandBattle: "DoW triggers Land Battles?",

      armyOnMapBoard: "Army is on the map board?",
      canSiegeInCurrentArea: "Can Siege in current Area?",

      hostileUnits: "Hostile Units or Area 1–2 spaces away?",
      inclNavalBridge: "incl. Naval Bridge",

      isPapalController: "Is Papal Controller, can Call Crusade, and target is Muslim?",

      triggerBattlePlaceArmy: "Triggers Battle?",
      triggerBattlePlaceShip: "Triggers Battle?",
      triggerBattleMoveArmy: "Triggers Battle?",

      canPlaceShip: "Can place a Ship that would help, and has not placed Ship this Turn?",

      placeClaimHere: "Place a {claim} here.",

      selectRealmThisClaimDisputedSuccessionValid: "Select Realm for which this {claim}/{disputedSuccession} is valid.",
      preferOpponent: "Prefer Opponent",

      selectRealmThisClaimValid: "Select Realm for which this {claim} is valid.",
      preferOpponentThenHighestNPR: "Prefer Opponent, then highest NPR Strength",

      selectEnemyRealmGreatestStrength: "Select Enemy Realm with greatest strength.",

      forEachSuchAllyRemoveTwoInfluence: "For each such Ally: remove 2 {influence} from NPR's Areas, gain 2 {botPower}, and flip the {alliance} to the {activeAlly} side.",

      ifArmyLessThreeUnits: "If Army < 3 Units: Increase Army size to 3 Units.",

      spendTwoBotCubes: "Spend 2 {botPower} to recruit 7/9/11 Units.",

      checkForMAC: "Check for MAC.",

      targetMaySendDefensiveCta: "Targets may send Defensive CtAs (NPRs always do).",

      removeAllBotsInfluences: "Remove all Bot's {influence} from all of target's Areas.",

      placeArmyOwnAreaClosestToEnemy: "Place Army in own Area closest to Enemy. Check for MAC.",
      preferAreaWithEnemy: "Prefer Area with Enemy, then closest to Enemy of greatest strength.",

      moveArmyToEnemyArea: "Move Army to Enemy Area in range.",
      preferLargestEnemy: "Prefer: Largest Enemy force which is ≤ own Army. Then Area with own {claim}.",

      placeShipToExtendNavalBridge: "Place Ship to extend Naval Bridge.",

      placeClaimOnTarget: "Place {claim} on target.",
      preferAdjacentThenCapital: "Prefer adjacent, then Capital",

      moveArmyToNonHostile: "Move Army up to 4 spaces to non-Hostile Area closest to Enemy.",

      placeCrusadeTokenAndClaim: "Place Crusade token and {claim} on target's Area. Score {prestige1}. Recruit 2 Units.",

      declareWarOnTarget: "Declare War on target. Spend 1 {botPower} to recruit 7/9/11 Units.",

      goToSiege: "Go to: SIEGE",
      gainBotPowerEqualsBotSpent: "Gain {botPower} = {botPower} spent on drawn Bot Card − 1",

      goNavalBattleAfterDow: "Go to: NAVAL BATTLE",
      goToNavalBattle: "Go to: NAVAL BATTLE",

      goLandBattleAfterDow: "Go to: LAND BATTLE",
      goToLandBattle: "Go to: LAND BATTLE",

      resolveAlphabeticOrder: "Resolve in alphabetical order if multiple Battles.",

      endTurn: "End Turn",
      gainBotCube: "Gain 1 {botPower} if won a Battle this Turn.",

      seeDowDescription: "See DoW restrictions on page 22 of the main rules to determine target eligibility.",

      noteStrength: "Strength: NPR, see main rules, page 36; PR = number of Deployed Units + Available {manpower}.",

      botMustRemoveOneFewerInfluence: "Bot must remove one fewer {influence} if it has a {royalMarriage} on target Realm.",

      numberUnitsDeterminedByDifficulty: "Number of Units recruited per {botPower} spent is determined by the chosen Difficulty Level.",

      adjustUnitAvailability: "Adjust Unit availability in Army based on MAC (see p. 5)."
    },

    diplomacy: {
      source: "(Bot Cards: 05, 06, 07, 08)",

      allianceAndRoyalMarriageOnAdjacentNpr: "{alliance} + {royalMarriage} on any NPR adjacent to Bot?",
      ignoreDistantNprs: "Ignore all Distant NPRs for the purpose of this Action.",

      allianceOnAdjacentNpr: "{alliance} on any NPR adjacent to Bot?",

      twoPlusInfluenceNoAllianceAdjacentNpr: "2+ {influence} and no {alliance} in any NPR adjacent to Bot?",

      selectAdjacentNprHighestBaseTax: "Select such NPR with highest Base Tax.",
      preferNprMarriedToBot: "Prefer NPR Married to Bot.",

      allianceOnNprWithLessThanTwoInfluence: "{alliance} on any NPR, with < 2 {influence}?",

      selectNprHighestBaseTax: "Select such NPR with highest Base Tax.",
      preferAdjacentToBot: "Prefer adjacent to Bot.",

      anyFreeSpaceInTargetAreas: "Any free space in target's Areas?",

      addTwoInfluenceInTargetAreas: "Add 2 {influence} in target's Areas.",
      preferTargetCapital: "Prefer target's Capital.",

      covertActionReplaceOpponentInfluence: "Covert Action: Replace 2 Opponent {influence} with 2 of Bot's {influence} in target's Areas.",

      goToDiplomaticTargetChart: "Go to: DIPLOMATIC TARGET CHART",
      rollForTarget: "roll for target",

      allianceOnTargetNpr: "{alliance} on target NPR?",

      rerollIfPreviousTarget: "roll for target, re-roll if same as any previous target this Turn",

      botPowerLessThanTargetBaseTax: "Has {botPower} < target's Base Tax?",

      spendTwoBotPowerAddTwoInfluenceInTargetRealm: "Spend 2 {botPower} to add 2 {influence} in Areas of target Realm.",

      influenceAtLeastNprBaseTaxPlusOpponentInfluence: "Has {influence} ≥ NPR's current Base Tax + Opponent {influence} in NPR's Areas?",
      ignorePapalStatesAndImperialInfluence: "Ignore Papal States and Imperial {influence}.",

      annexNprProvinces: "Annex all Provinces Owned by this NPR. Remove Bot's {influence}, equal to target's current Base Tax + Opponent {influence}, from target Realm. Score {prestige3}.",
      preferNprAdjacentByLandThenHighestBaseTax: "Prefer NPR adjacent by land, then highest Base Tax.",
      annexNprProvincesNote: "Bot must remove one fewer {influence} if it has a {royalMarriage} on target Realm. Vassals of target are released as independent NPRs.",

      ownsAllProvincesInNewAreaAndLessThanTwoCores: "Now Owns all Provinces in a new Area, and has < 2 {core} in play?",

      spendBotPowerPlaceCore: "If able, spend 1 {botPower} to place a {core} in such Area.",
      removeOtherBotsClaimsFromArea: "Remove all other Bots' {claim} from this Area.",

      higherBaseTaxThanNpr: "Has higher Base Tax than NPR?",

      hasDoubleBaseTaxOfNpr: "Has double Base Tax of NPR?",

      canEnterRoyalMarriage: "Can enter Royal Marriage?",

      selectNprHighestBaseTaxForRoyalMarriage: "Select such NPR with highest Base Tax.",

      addTwoInfluenceInUnusedAreas: "Add 2 {influence} in Areas where no {influence} has been placed this Turn.",
      preferTargetAreasThenAdjacentToBot: "Prefer target's Areas, then adjacent to Bot.",

      atPeaceAndHasSixPlusBotPowerLeft: "At Peace and has 6+ {botPower} left?",

      placeRoyalMarriageOnTargetCapital: "Place {royalMarriage} on target's Capital.",

      alliancePossibleForSelectedNpr: "Alliance possible?",
      alliancePossibleForAddTwoInfluence: "Alliance possible?",
      alliancePossibleNote: "Alliance requires: Bot is at Peace and has < 3 {alliance} in play, target is at Peace and is not Bot's Ally, and any Ally of target has fewer {influence} than Bot in target's Areas.",

      placeAllianceOnTargetCapital: "Place {alliance} on target's Capital, and add 1 {influence} there if space.",

      diplomaticIdeasInfluenceNote: "If the Bot has researched any Diplomatic Ideas, it places additional {influence} if it has {influence} in its Supply (Bot ignores limit of placing max. 2 {influence} in the same Area):<br>1–2 Dip. Ideas: +1 {influence}<br>3+ Dip. Ideas: +2 {influence}.",

      endTurn: "End Turn"
    },

    event: {
      source: "(from Main Turn Structure + Bot Card: 01)",
      alreadyTakenEventAction: "Already taken Event Action?",
      restartMainTurn: "Discard EVENT Bot Card. Start over: MAIN TURN STRUCTURE.",
      dieResult: "Die result",
      pickLeftmostEvent: "Pick leftmost revealed Event. Gain 1 {botPower} if {ducats} on Event.",
      pickSecondEvent: "Pick second from left revealed Event. Gain 1 {botPower} if {ducats} on Event.",
      pickRightmostEvent: "Pick rightmost revealed Event. Gain 1 {botPower} if {ducats} on Event.",
      opponentEventRevealed: "Opponent Event is revealed?",
      ownEventRevealed: "Own Event is revealed?",
      atWarWithEventOpponent: "At War with Opponent whose Event is revealed?",
      pickSuchEvent: "Pick such Event. Gain 1 {botPower} if {ducats} on Event.",
      pickThisEvent: "Pick this Event. Gain 1 {botPower} if {ducats} on Event.",
      isOpponentsEvent: "Is this an Opponent's Event?",
      resolveOptionA: "Resolve option A) on Event.",
      resolveOptionB: "Resolve option B) on Event.",
      resolveSecondaryEffects: "Resolve Secondary Effects on Event.",
      canDevelopLargeTown: "Has 10+ {botPower} and < 8 Large {town}?",
      developLargeTown: "Spend 2 {botPower} to develop a Small {town} into a Large {town}.",
      developLargeTownPreference: "Prefer Core Province, then {town} without {unrest}.",
      endTurn: "End Turn"
    },

    navalBattle: {
      anyEnemyIsPr: "Any Enemy is a PR?",
      botIsAttacker: "Bot is attacker?",
      facingMultiplePrs: "Facing multiple PRs?",
      determineMainDefender: "Determine Main Defender.",
      seeMainDefender: "See p. 5",
      appointAdmiral: "Human player may Appoint Admiral.",
      playBattleActions: "Human player may play applicable Battle Actions.",
      rollBotBattleDice: "Roll Battle Dice: Humans do not roll any dice.",
      botRollModifiers: "Bot(s) roll:<br>0 Diplomatic Ideas: 1 Artillery Die.<br>1+ Diplomatic Ideas: 2 Artillery Dice.<br>+1 die per adjacent Bot Ship.<br>-1 die if Battle Action or Admiral.",
      scoreBotHits: "Bot(s) score one hit per {battleArtillery} rolled. Treat every 2 adjacent Ports a Bot Owns and every 2 NPR Ships fighting on a Bot's side as a {battleArtillery} roll.",
      botVsBot: "Bot vs. Bot?",
      removeLowestHitBotShip: "Remove Ship of Bot that scored the fewest hits.",
      rerollIfTied: "Re-roll if tied.",
      humanAssignCasualties: "Human player must assign Casualties. Any Admiral receives a {illHealth} per pair of {battleDoubleInfantry} rolled.",
      alternateShipTypes: "Alternate between Ship types when assigning hits.",
      humanHasShipsLeft: "Human player has Ships left?",
      humanReward: "Human player may receive 1 {militaryPower}, if Active Player. They steal 1 Light Ship if a Battle Action was played or if they have an Admiral.",
      removeBotShip: "Remove Bot Ship.",
      rollAgainstNpr: "Roll Battle Dice: # Artillery Dice = # Hostile Ships.",
      nprHitsEnough: "{battleArtillery} rolled ≥ 2 + adjacent Bot Ports?",
      resolvingBotReward: "Resolving Bot receives 1 {botPower} if first Battle won this Turn.",
      endBattle: "End Battle",
      notes: {
        firstBattleVictory: "The 1 {botPower} gained for the first Battle win of a Turn for the resolving Bot (Active Player) is in most cases already specified in the relevant Bot Action charts."
      }
    },

    landBattle: {
      anyEnemyIsPr: "Any Enemy is a PR?",
      botIsAttacker: "Bot is attacker?",
      facingMultiplePrs: "Facing multiple PRs?",
      determineMainDefender: "Determine Main Defender.",
      seeMainDefender: "See p. 5",
      battleInDefendersRealm: "Battle is in (Main) Defender's Realm?",
      appointGeneral: "Human player may Appoint General.",
      accountMilitaryIdeas: "Account for Military Ideas.",
      militaryIdeasExample: "e.g., \"Noble Knights\".",
      playBattleActions: "Human player may play Battle Actions.",
      rollAgainstPr: "Roll Battle Dice: Humans roll as normal.",
      botRollModifiers: "Bot(s) roll:<br>0 Military Ideas: 5 Infantry Dice.<br>1+ Military Ideas: 6 Infantry Dice.",
      assignCasualties: "Assign Casualties as normal.",
      seeCasualtyRules: "See Main Rules, p. 27",
      generalIllHealth: "Human player's General receives a {illHealth} per pair of {battleDoubleInfantry} rolled by Bot.",
      anyBotHasUnitsRemaining: "Any Bot has Units remaining?",
      bothSidesHaveUnitsRemaining: "Both sides have Units remaining?",
      humanReward: "Human player, if Active Player, receives 1 {militaryPower} if it is their first Battle victory this Turn.",
      resolvingBotReward: "If Resolving Bot has Units remaining and it is their first Battle victory this Turn, they receive 1 {botPower}.",
      rollAgainstNonPr: "Roll Battle Dice:<br># Infantry Dice = # Hostile Units<br>Assign Casualties:<br># Bot's Casualties = # {battleInfantry}/{battleDoubleInfantry} rolled",
      botHasUnitsRemaining: "Bot has Units remaining?",
      removeAllHostileNonPrUnits: "Remove all {rebelUnit}/NPR Units.",
      removeNprAndRebels: "Remove all NPR Units. Remove {rebelUnit} = ½ initial # of Units in Bot's Army.",
      removeDefeatedArmies: "Remove defeated Armies from the board.",
      endBattle: "End Battle",
      notes: {
        firstBattleVictory: "The 1 {botPower} gained for the first Battle win of a Turn for the resolving Bot (Active Player) is in most cases already specified in the relevant Bot Action charts."
      }
    },

    explore: {
      source: "(from NAVAL and COLONIZE Actions + Bot Card: 11)",
      has3ColonialClaims: "Has 3+ Colonial {claim}?",
      vacantTerritoryAdjacentTown: "Vacant Territory with a “1” adjacent to Bot's {town}?",
      vacantTerritoryAdjacentShips: "Vacant Territory with a “1” adjacent to Bot's Ships?",
      hasQuestForNewWorld: "Has “Quest for the New World” Idea?",
      researchQuestForNewWorld: "Research the “Quest for the New World” Idea for free.",
      researchQuestForNewWorldDetail: "Score {prestige} as normal and update Bot's Idea Track.",
      canPlaceShipToExplore: "Can place a Ship in a Sea Zone where it can Explore?",
      placeShipToExplore: "Place Ship in such a Sea Zone.",
      preferNewDistantTradeNode: "Prefer adjacent to new Distant Trade Node when possible.",
      triggersNavalBattle: "Triggers a Naval Battle?",
      rollExploreDie: "Roll Explore Die",
      has2BotPowerLeft: "Has 2+ {botPower} left?",
      spend1BotPower: "Spend 1 {botPower}.",
      removeShipFromDistantContinent: "Remove a Ship from a Distant Continent.",
      ifAny: "If any.",
      rollMatchesEligibleTerritory: "Roll matches eligible Territory?",
      placeClaimEligibleTerritory: "Place {claim} on an eligible Territory. Score {prestige2}.",
      anyEligibleDistantProvinces: "Any eligible Distant Provinces to discover?",
      placeClaimDistantProvince: "Place {claim} on such a Distant Province.",
      preferDistantProvince: "Prefer adjacent by land to Bot, then Distant Realm with highest Base Tax.",
      addMatchingTradeCards: "If this is the first {claim} on this Distant Continent, add all matching Trade cards.",
      couldPlaceShipWithin3Spaces: "Could placing a Ship bring Bot within 3 spaces of a new Explorable Sea Zone?",
      colonialClaimConnected: "Any Colonial {claim} is connected to Capital Area through a chain of Areas with Bot's {town} and/or Ships?",
      has2Colonists: "Has 2+ {colonist}?",
      couldPlaceShipCloserConnection: "Could placing a Ship bring Bot closer to establishing a connection?",
      placeShipQualifies: "Place Ship in a Sea Zone that qualifies.",
      preferShortestRoute: "Prefer shortest route.",
      gainBotPowerAndColonist: "Gain 1 {botPower} + 1 {colonist}.",
      scorePrestigeAndDiscard: "Score {prestige} = 2 + {colonist}. Discard Bot's {colonist} + Colonial {claim}.",
      goToNavalBattle: "Go to: NAVAL BATTLE",
      gain1BotPowerIfVictorious: "Gain 1 {botPower} if victorious.",
      goToColonize: "Go to: COLONIZE",
      endTurn: "End Turn",

      notes: {
        ignoreClaimedTerritories: "Ignore Territories where Bot already has a {claim}.",
        questForNewWorldEvent: "If Bot is Castile (or Portugal), and: Bot has not Researched “QftNW”; Bot has not yet picked an Event; and Christopher Columbus (or Casa da India) Event is on display: Then, pick that Event, and select option A. Paying for this Action counts as covering the {botPower} cost of Researching “QftNW”.",
        eligibleDistantLocation: "Distant Province/Territory must be adjacent to Bot's {town} or Ship. Territories must match rolled number.",
        addMatchingTradeCards: "Shuffle any set-aside Trade Cards matching the number on this Distant Continent into the Trade Deck."
      }
    },

    naval: {
      source: "(Bot Cards: 09, 10; Bot Cards, War Action: 11)",

      hostileSeaZoneAdjacent: "Any Hostile Sea Zone adjacent to Bot's Ports or Ships?",
      placeShipHostileSeaZone: "Place Ship in such Sea Zone.",
      preferBotPort: "Prefer adjacent to Bot's Port, then alphabetical.",

      goToNavalBattle: "Go to: NAVAL BATTLE",
      gainBotPowerIfVictorious: "Gain 1 {botPower} if victorious.",

      emptySeaZoneAdjacentPorts: "Any Sea Zone without Bot's Ships adjacent to Bot's Ports?",
      has5ShipsMainMap: "Has 5+ Ships on Main Map?",
      emptyMainMapSeaZoneAdjacentShips: "Any Main Map Sea Zone without Bot's Ships adjacent to any of Bot's Ships?",

      placeShipAvailableSeaZone: "Place Ship in such Sea Zone.",
      preferTradeNodes: "Prefer adjacent to most Trade Nodes, then alphabetical.",

      shipAdjacentPirates: "Has Ship adjacent to any Pirates?",

      removePirates: "Remove all Pirates from such Trade Node.",
      preferPirateTradeNode: "Prefer node with own Merchant, then fewest Merchants.",

      drawTradeCardBots: "Draw a Trade Card: All Bots that are eligible to trade in any node listed on this card will trade in the topmost node that they qualify for. For Inland Nodes, Bots also need an adjacent {town}. Bots gain 3 {ducats} if this is a Distant Node and 2 {ducats} if not.",

      drawTradeCardHumans: "Every human player can collect Trade Income from any eligible node on this card where they have a Merchant. Resolving Bot gains {prestige2} per human player who collects Income.",

      moveMerchant: "Move Merchant of Bots that gained {botPower} to topmost valid node on the card.",

      hasPlacedShipThisTurn: "Has placed a Ship this Turn?",

      canExplore: "Has < 3 Colonial {claim} and any Ship in, or adjacent to, an Explorable Sea Zone?",

      goToExplore: "Go to: EXPLORE",

      endTurn: "End Turn",

      notes: {
        ignoreDistantSeaZones: "Ignore Distant Sea Zones if Bot does not have “QftNW”.",
        piratesReduceIncome: "Bot's {ducats} income gets reduced by 1 for each Pirate in the node where it trades.",
        noPrestigeWithoutMissions: "If playing without Missions for human players, give no {prestige} to Bots during this step."
      }
    },

    peace: {
      intro: "Follow normal sequence for Peace Resolution (main rules p. 29), and use this chart each time it is a Bot's turn to resolve one of its Wars.",

      automaticWhitePeace: "Automatic White Peace?",

      totalVictoryAgainstNpr: "Has achieved a Total Victory against NPR Enemy?",

      annexEnemyNpr: "Annex all of Enemy's de jure Provinces that are Controlled by Enemy or Bot (place {town}). Unoccupied Vassals are released as NPRs. Score {prestige} = Tax Value of Annexed Provinces.",
      
      removeOtherTokensAnnexedProvinces: "Remove any other tokens from all Annexed Provinces.",

      atWarHumanPlayer: "At War with a human player?",

      enemyPrSurrenders: "Enemy PR Surrenders?",

      surrenderReturnProvinces: "Return all Provinces to their Lawful Owners. Bot gains and Enemy loses {prestige2}, plus {prestige2} per Tax Value returned by Bot to Enemy (max. 12 {prestige}).",

      armyAtLeastDoubleEnemyPr: "Army ≥ 2x Land Units Deployed by Enemy PR?",

      enemyPrLowIncomeNoBotTowns: "Enemy PR currently has Tax Income lower than 8, and Occupies none of Bot's {town}?",

      returnUpTo5TaxValue: "Return Provinces (incl. Capital) worth up to 5 Tax Value to Enemy. Gain {prestige2} per Tax Value returned.",

      atWarAnotherBot: "At War with another Bot?",

      armyGreaterEnemyBot: "Army > Enemy Bot's Army?",

      atWarNpr: "At War with an NPR?",

      armyGreaterRebelUnits: "Army > {rebelUnit} in Bot's Areas?",

      occupiedTaxValueGreater: "Tax Value of Enemy's de jure Provinces Occupied by Bot > Tax Value of own {town} Occupied by Enemy?",

      occupiedTaxValueGreaterOrEqual: "Tax Value of Enemy's de jure Provinces Occupied by Bot ≥ Tax Value of own {town} Occupied by Enemy?",

      has2UnrestWithoutClaim: "Has 2+ {unrest} in Areas without {claim}?",

      offerWhitePeace: "Bot offers White Peace.",

      whitePeaceAccepted: "White Peace accepted by Enemy?",

      returnAllProvincesLawfulOwners: "Return all Provinces to their Lawful Owners.",

      endWarPrestigeLoss: "End War. PRs (incl. Bots) lose {prestige1} each.",

      offerKeepCurrentBoardState: "Bot offers Peace on Keep Current Board State terms.",

      peaceTermsAccepted: "Peace Terms accepted by Enemy?",

      anyoneOccupiesEnemyCapital: "Anyone Occupies Enemy's Capital?",

      capitalReturnEffects: "Any Bot returning Capital to Enemy gains {prestige2} and 4 {botPower}. Any Bot receiving Capital back loses 2 {botPower}. Human players pay/receive 10 {ducats} as normal.",

      enemyOccupiesBotTowns: "Enemy Occupies any of Bot's {town}?",

      swapIntro: "If possible, swap any:",
      swapEnemyOccupiedByBot: "Enemy {town}/{vassal} Occupied by Bot",
      swapBotOccupiedByEnemy: "Bot's {town} Occupied by Enemy",
      swapMatchingTaxValue: "(of matching total Tax Value)",

      endWarKeepCurrentBoardState: "End War and keep current board state. Score {prestige} = Tax Value of retained Enemy Core Provinces.",

      noPeaceConcluded: "No Peace concluded.",

      willNotOfferPeace: "Bot will not offer or enforce Peace.",

      truceAndClaims: "If Enemy still exists, flip War tokens to their Truce side. PRs on both sides may add {claim} where they have lost {town}.",
      
      botsAddMaxOneClaim: "Bots add max. 1 {claim}.",

      cleanupClaimsCores: "Remove Bot's {claim} from Areas where Bot now Owns all Provinces. For each {claim} removed, remove 2 {unrest} from the {claim}'s Area and score {prestige2}. If able, and < 2 {core} in play, spend 1 {botPower} to place a {core} here.",

      remainingWars: "Any remaining Wars to resolve during this step of Peace Resolution?",

      endResolution: "End Bot Peace Resolution",

      notes: {
        totalVictoryAgainstNpr: "Bot must Occupy NPR's Capital and Provinces of Tax Value ≥ ½ of pre-War NPR Strength.",
        distantUnitsDoNotCount: "Units located on Distant Continents where the Bot has no {town} do not count.",
        whitePeaceAcceptance: "NPRs always accept. Enemy Bots accept if they cannot enforce Peace, and have 2+ {unrest} in Areas where they do not have {claim}.",
        keepCurrentBoardStateAcceptance: "Enemy Bots only accept these terms if both Bot Armies are of equal size, and Tax Value of Provinces Occupied by either side is equal.",
        removeOtherBotClaims: "Remove all other Bots' {claim} from Areas where {core} are placed."
      }
    },

    peaceRebels: {
      title: "Peace & Rebels Phase",
      intro: "Bots resolve each step as described below.",
      completePhase: "Complete Phase",

      normalRulesReminder: "Main Rules, p. 9",

      goToLandBattle: "Go to: LAND BATTLE",
      goToBotPeaceResolution: "Go to: BOT PEACE RESOLUTION",

      removeCasusBelliAndTruces: {
        title: "Remove Casus Belli and Truces",
        text: "Bots remove Truces as normal. Bots never have any CB tokens."
      },

      nprInvasions: {
        title: "NPR Invasions",
        text: "Bots may suffer a maximum of 1 NPR Invasion. Resolve the NPR Invasion that will invade with the most NPR Units (resolve any ties alphabetically), then place the Bot's Army in the target Area and resolve the Battle."
      },

      rebelsSiegeOrMove: {
        title: "Rebels Siege or Move",
        text: "Resolved as normal.",
        reminderIntro: "If there are any {rebelUnit} on the board, resolve the following steps in order. Within each step, resolve Areas from the most {rebelUnit} to the fewest, breaking ties alphabetically.",
        withUnrest: "1. Areas with both {rebelUnit} and {unrest}: the {rebelUnit} Siege any {town} or {core} with {unrest} that they can. Each {rebelUnit} has a Siege Strength of 1. Siege Large Provinces first when possible, then alphabetically.",
        coreProvinces: "Core Provinces: place a {rebelTown} on top of the owner's {town}, and cover the rightmost vacant slot on their Town Track with a cube.",
        nonCoreProvinces: "Non-Core Provinces are Liberated: return the {town} or {core} to the owner's Player Mat and place a CB token on the new Province Owner.",
        withoutUnrestMove: "2. Areas with {rebelUnit} and no {unrest}: move all but 1 {rebelUnit} to an Area with {unrest} that is adjacent by Land, if possible. Prefer the Area with the most {unrest}, then the most PR {town}, then alphabetically. {rebelUnit} cannot move to an Area where they are outnumbered by PR Land Units.",
        withoutUnrestBattle: "Resolve a Battle immediately if there are any PR Land Units in that Area, following the normal rules for Rebels. Rebels do not fight other Rebel Units.",
        withoutUnrestRemove: "If no {rebelUnit} moved during the previous step, remove 1 {rebelUnit} from the board."
      },

      peaceResolution: {
        title: "Peace Resolution",
        turnOrder: "Performed in Turn order as normal.",
        humanPlayers: "Human players can resolve Peace with Bot Enemies as described in the main rules.",
        botTurn: "When it is a Bot's turn to resolve Peace, it uses the flowchart on page 15.",
        removeArmy: "If a Bot is now at Peace, remove the Bot's Army from the map, unless the Bot has any {town} with {unrest} or {rebelTown} on them in the Area where their Army is located.",
        fullyAnnexed: "If a Bot is Fully Annexed by a PR, see 'Replacing Bot Realms' on page 6."
      },

      prestigePenalties: {
        title: "Prestige Penalties",
        text: "Resolved as normal.",
        disputedSuccessionReminder: "Disputed Succession: flip all {royalMarriage} tokens that still show their {disputedSuccession} side. Lose {prestige3} for each one flipped. This penalty may be avoided if the player is the only PR with an {alliance} or {royalMarriage} on that Realm's Capital and also has the most {influence} there (minimum 2 {influence} if it is an NPR).",
        occupiedTownsReminder: "Occupied Towns: players whose {town} are now Occupied by Enemies or Rebels lose Prestige equal to their Tax Value, to a maximum of 5."
      },

      interregnums: {
        title: "Interregnums",
        text: "Bots are not affected by this."
      },

      religiousDissent: {
        title: "Religious Dissent",
        text: "Bots gain a maximum of 1 {unrest} in this step."
      },

      gainRemoveUnrest: {
        title: "Gain/Remove Unrest",
        text: "Bots gain 2 {unrest} for being at War. Then, if a Bot has any Administrative Ideas it will remove 1–2 {unrest} accordingly."
      },

      rollRebelDice: {
        title: "Roll Rebel Dice",
        text: "Bots resolve this as described under 'Rebel Dice Rolls', on page 4.",
        botRulesTitle: "Bot Rebel Dice Rules",
        allAtOnce: "Roll Rebel Dice for all of the Bot's {unrest} at once, not Area by Area. Roll a maximum of 5 Rebel Dice.",
        maxBotPowerLoss: "A Bot can lose a maximum of 1 {botPower} each time it has to roll Rebel Dice, regardless of the number of dice rolled.",
        choiceProcess: "Use the standard Bot choice process when applying Rebellions and removing {unrest}. However, apply Rebellions in the Area where the Bot's Army is located whenever possible.",
        liberatedProvince: "If one of the Bot's Provinces is Liberated by Rebels, place a {claim} in that Area.",
        resultsTitle: "Rebel Die Results",
        resultRebellion: "{rebelDieRebellion} Rebellion",
        resultLoseBotPower1: "{rebelDieLoseBotPower1} Lose 1 {botPower}",
        resultLoseBotPower2: "{rebelDieLoseBotPower2} Lose 1 {botPower}",
        resultLoseBotPower3: "{rebelDieLoseBotPower3} Lose 1 {botPower}",
        resultNoEffect: "{rebelDieNoEffect} No effect",
        resultRemoveUnrest: "{rebelDieRemoveUnrest} Remove 1 {unrest}"
      }
    },

    incomeUpkeep: {
      title: "Income & Upkeep Phase",

      intro:
        "Bots only perform the Bot-specific steps below. Power Struggles and Crusades are scored as normal; a reminder is included at the end.",

      completePhase: "Complete Phase",

      refreshBotPower: {
        title: "Refresh Bot Power",
        text: "Discard all spent {botPower} and replenish Available {botPower} according to the chosen difficulty level.",
        townBonus: "Bots gain +1 {botPower} if they have 20+ Small Towns or 8 Large Towns in play (+2 {botPower} if both).",
        difficultyTitle: "Bot Power by Difficulty",
        difficultyEasy: "Easy: 6 {botPower}",
        difficultyNormal: "Normal: 7 {botPower}",
        difficultyHard: "Hard: 8 {botPower}",
        difficultyVeryHard: "Very Hard: 9 {botPower}"
      },

      botEmperor: {
        title: "Bot Emperor — Imperial Authority and Bot Power",
        adjustAuthority: "If the Emperor is a Bot, roll a die to see if {imperialAuthority} increases or decreases, as described for NPR Emperors.",
        mainRulesReference: "Main Rules, p. 45",
        roll1: "Roll 1: decrease {imperialAuthority} by 1.",
        roll2To5Lower: "Roll 2–5: decrease {imperialAuthority} by 1 if the roll is at least 2 lower than the current {imperialAuthority}.",
        roll2To5Higher: "Roll 2–5: increase {imperialAuthority} by 1 if the roll is at least 2 higher than the current {imperialAuthority}.",
        roll6: "Roll 6: increase {imperialAuthority} by 1.",
        gainBotPower: "A Bot Emperor then gains extra {botPower} equal to the {diplomaticPower} + {militaryPower} provided by the current {imperialAuthority} level.",
        gainPrestige: "A Bot Emperor gains {prestige1} if at +6 {imperialAuthority}."
      },

      papalControllerBonuses: {
        title: "Papal Controller Bonuses",
        botPower: "If the Bot is the Papal Controller, it gains 1 {botPower}.",
        prestige: "If it has Uncontested Control of the Curia, it also scores Prestige equal to the number of Catholic PRs minus one (max. {prestige3})."
      },

      scoring: {
        title: "Score Power Struggles & Crusades",
        intro: "Score active Power Struggles and Crusades as normal.",
        powerStrugglesReference: "Main Rules, p. 43",
        powerStrugglesIntro: "Any Active Power Struggle is scored during the Income & Upkeep Phase before being discarded. All players who satisfy its conditions score Prestige as described below.",
        powerStrugglesBattlegroundTax: "For each Battleground Area, score {prestige1} per Tax Value of Provinces controlled there. {vassal} Tax Value counts as half.",
        powerStrugglesOnlyPr: "Score {prestige1} for being the only PR with a {town} or {vassal} there. This applies only to Battleground Areas on the Main Map.",
        powerStrugglesDiplomacy: "Score {prestige1} for having at least 1 {alliance} or {royalMarriage} there.",
        powerStrugglesAdditional: "Apply any additional Prestige criteria listed for that Power Struggle. Players who satisfy those criteria may score additional Prestige, while some criteria may cause Prestige loss.",
        crusadeReference: "Main Rules, p. 46",
        crusadeIntro: "Crusade Scoring occurs during Phase 4, Step E, when the Crusade token is on the board. Remove the token once Crusade Scoring is complete.",
        crusadeSuccess: "Each Catholic Realm Committed to Crusade scores {prestige2} if it has any Units in the Crusade's target Area and there are no Provinces Owned by Muslim Realms left there.",
        crusadeFailure: "Otherwise, each Catholic Realm Committed to Crusade loses {prestige2}.",
        crusadeNoCommitment: "If no Realm is Committed to Crusade at this point, the Papal Controller loses {prestige2}."
      }
    },

    cleanupPhase: {
      title: "Cleanup Phase",

      intro:
        "Bots only perform the steps below. The Status Mat is updated as normal.",

      completePhase: "Complete Phase",

      statusMat: {
        reference: "Main Rules, p. 10",
        text: "Pass the First Player token to the player whose Round Status marker is in the Has Passed – 1st space (or the 2nd space if the first player to Pass is the current First Player), then reset all Round Status markers to the Event not Taken space."
      },

      updateManpowerReserve: {
        title: "Update Manpower Reserve",
        text: "Update the Bot's {manpower} to match its Town Track and {imperialAuthority}, as normal. The Bot's minimum {manpower} is 3. If {manpower} has been reduced, always return Units from the Manpower Reserve to the Supply first.",
        reference: "Main Rules, p. 10",
        reminder: "Normally, update the Manpower Reserve to reflect any change in its total. Deployed Regular Units count as part of that total. If Manpower increases, add Units from the Supply to Available Manpower. If it decreases, Units must be returned to the Supply."
      },

      colonists: {
        title: "Colonists",
        text: "Bots gain {colonist} for Colonial {claim} as normal. Discard a Bot's {colonist} if it has no Colonial {claim} and there are no vacant Territories.",
        reference: "Main Rules, p. 10",
        reminder: "Add {colonist} to the Colonist Pool equal to the number of Colonial {claim} on the board. A Realm may add a maximum of 4 {colonist}."
      },

      alliancesEnd: {
        title: "All Bot-to-PR Alliances End",
        text: "All {alliance} between Bots and PRs, if any, expire and these {alliance} tokens are removed. This has no further consequences for either party."
      },

      botEmperor: {
        title: "Bot Emperor — Imperial Influence",
        intro: "If the Emperor is a Bot, adjust its Imperial {influence} to match the current {imperialAuthority}, then redistribute it according to the priorities below. Repeat each priority until there is no valid Area for it, or no Imperial {influence} remains, before moving to the next priority. Break ties by preferring Areas with a Bot {alliance}, then alphabetically.",
        priorityTitle: "Imperial Influence priorities",
        priority1: "The Elector Area where the Bot would require the least Imperial {influence} to have the most {influence} there — more than any other PR.",
        priority2: "Any Elector Area with available space.",
        priority3: "Any HRE Area with available space."
      },

      reshuffleBotDeck: {
        title: "Reshuffle Bot Deck",
        intro: "Used Bot Cards are reshuffled into the deck according to the following rules.",
        rulesTitle: "Bot Deck reshuffle",
        events: "EVENTs are always reshuffled.",
        ideas: "IDEAs are always reshuffled.",
        focus: "Set aside Bot Cards that were used for the FOCUS Action. These are not reshuffled.",
        remaining: "Reshuffle half of the remaining used Bot Cards, rounding up.",
        removedCards: "Any cards that are not reshuffled are removed for the remainder of the current Age."
      }
    },

    endOfAge: {
      title: "End of Age Routine",

      intro:
        "At the end of each Age, resolve the Bot-specific rules and the normal End of Age Routine below.",

      completePhase: "Complete Routine",

      mainRulesReference:
        "Main Rules, p. 11",

      resetBotDeck: {
        title: "Reset Bot Deck",
        text: "Reset all Bot Cards according to the deck composition listed for this Bot Realm, then shuffle the complete Bot Deck."
      },

      prepareNextAge: {
        title: "Prepare the Next Age",
        eventDeck: "Prepare and place the Event Deck for the next Age.",
        noNextAge: "If there is no next Age, proceed to Final Scoring instead.",
        milestones: "Remove all Milestones from the previous Age from the game and replace them with 4 Milestones drawn from the deck belonging to the next Age.",
        ideas: "Add any Ideas that become eligible with the next Age to their Idea decks. Then replace any unresearched non-Basic Ideas on display with random Ideas of the same type."
      },

      leastPrestige: {
        title: "Player with Least Prestige",
        text: "The player with the least Prestige may replace 1 new Idea or Milestone on display with a card of their choice from the matching deck.",
        tie: "If there is a tie for least Prestige, skip this step."
      },

      royalMarriages: {
        title: "Royal Marriages",
        botRule: "Bots do not remove any of their {royalMarriage}.",
        scorePrestige: "A player with at least 1 {royalMarriage} in play scores {prestige1}.",
        normalRule: "Normally, that player must then remove 1 {royalMarriage} from the board, from an NPR if possible, or pay 2 Ducats to avoid removing it.",
        reciprocalRemoval: "If another player removes their {royalMarriage} from your Realm and this forces you to remove the reciprocal {royalMarriage} from their Realm, you must still remove another {royalMarriage}, if you have one, or pay 2 Ducats."
      }
    },

    finalScoringPhase: {
      title: "Final Scoring",

      intro:
        "Bots score Prestige exactly like human players. Use the normal Final Scoring rules below.",

      completePhase: "Complete Final Scoring",

      mainRulesReference:
        "Main Rules, p. 11",

      startFinalScoring: {
        title: "When Final Scoring Begins",
        intro: "Final Scoring is normally initiated at the end of the final Round, after completing Phase 5, when any of the following conditions apply:",
        noEvents: "There are no more Event Cards remaining in the decks for the chosen scenario at the end of a Round.",
        prestigeLead: "A player has 100+ Prestige and is at least 20 Prestige ahead of every other player.",
        allTownsAndVassals: "A player has all of their {town} (Large and Small) and {vassal} on the board at the end of Phase 5."
      },

      scorePrestige: {
        title: "Score Prestige",
        missions: "Reveal and score any Missions in hand whose requirements have been met. Ignore any Mission Effects.",
        taxIncome: "Score Prestige equal to current Base Tax + Vassal Tax.",
        cores: "Score {prestige1} per {core} in play.",
        royalMarriages: "Score {prestige1} per {royalMarriage} in play.",
        alliances: "Score {prestige2} per {alliance} in play.",
        papalController: "The Papal Controller scores Prestige equal to the number of Catholic PRs.",
        emperor: "The Emperor of the HRE scores Prestige equal to the current {imperialAuthority}.",
        stability: "Score Prestige equal to 2 × current {stability}. Negative {stability} therefore gives negative Prestige."
      },

      prestigePenalties: {
        title: "Prestige Penalties",
        occupiedTowns: "Subtract {prestige1} per Tax Value of each {town} Occupied by Rebels or Enemies.",
        interest: "Subtract {prestige1} per {interest} in Treasury."
      },

      determineWinner: {
        title: "Determine the Winner",
        mostPrestige: "The player with the most Prestige wins.",
        monarchPower: "If tied, the player with the most {monarchPower} wins.",
        ducats: "If still tied, the player with the most {ducats} in Treasury wins.",
        sharedVictory: "If there is still a tie, the tied players share the victory."
      }
    },

    actionNames: {
      event: "Event",
      military: "Military",
      diplomacy: "Diplomacy",
      naval: "Naval",
      explore: "Explore",
      colonize: "Colonize",
      unrest: "Unrest",
      papalCuria: "Papal Curia",
      convert: "Convert",
      idea: "Idea",
      spy: "Spy",
      focus: "Focus",
      focusEconomy: "Focus (Eco.)",
      focusExpansion: "Focus (Exp.)",
      focusPolitics: "Focus (Pol.)",
      focusWarfare: "Focus (War)",
      defend: "Defend",
      siege: "Siege",
      landBattle: "Land Battle Resolution",
      navalBattle: "Naval Battle Resolution",
      peace: "Peace Resolution"
    },
  }
};

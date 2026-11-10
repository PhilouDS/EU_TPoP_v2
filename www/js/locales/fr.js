export const fr = {
  common: {
    yes: "Oui",
    no: "Non",
    previousStep: "Étape précédente",
    mainMenu: "Menu principal",
    botActionsMenu: "Menu Actions du Bot",
    confirm: "Confirmer",
    cardId: "Saisissez l’ID de la carte",
    invalidCardId: "Saisissez un ID de carte compris entre 1 et 24.",
    completeAction: "Terminer l’Action",
    rollDie: "Cliquez ici pour lancer le dé virtuel",
    dieResult: "Résultat :",
    continue: "Continuer",
    playerResolutionsMenu: "Menu Résolutions du joueur",
  },

  home: {
    title: "Europa Universalis:<br>The Price of Power",
    botActions: "ACTIONS DU BOT",
    botRealmTargetingCharts: "DIAGRAMMES DE CIBLAGE DU BOT",
    playerResolutions: "RÉSOLUTIONS DU JOUEUR",
    backToMainMenu: "RETOUR AU MENU PRINCIPAL",
    credits: "Crédits",
  },

  credits: {
    title: "Crédits — v2",
    appDevelopment: "APPLICATION COMPAGNON NON OFFICIELLE développée et publiée par :",
    gameDesign: "Conception et développement du jeu :",
    soloModeDesign: "Conception du mode solo :",
    gamePublishers: "Éditeurs du jeu* :",
    publisherDisclaimer: "*Aegir Games et Paradox Interactive ne sont pas les éditeurs de l’application. Merci de ne pas les contacter pour toute demande à son sujet.",
    rulebook: "Pour les autres crédits du jeu, voir le livret de règles.",
  },

  playerResolutions: {
    landBattle: {
      title: "Bataille terrestre - Résolution",
      appointAttackerGeneral: "L’attaquant peut nommer/assigner un Général à son Armée.",
      anyDefenderHuman: "Un défenseur est-il un joueur humain ?",
      moreThanOnePrDefender: "Y a-t-il plusieurs PR défenseurs ?",
      determineMainDefender: "Déterminer le Défenseur principal.",
      determineMainDefenderDetail: "Le PR ayant le plus d’Unités dans cette Zone est le Défenseur principal. En cas d’égalité, le PR défenseur qui a joué le plus récemment décide.",
      appointDefenderGeneral: "Le Défenseur (principal) peut nommer/assigner un Général à son Armée.",
      appointDefenderGeneralDetail: "Uniquement si l’Armée se trouve dans son propre Royaume.",
      anyDefenderBot: "Un défenseur est-il un Bot ?",
      goToBotLandBattle: "Aller à : Résolution de bataille terrestre du Bot",
      anyEnemyNprProvinces: "Y a-t-il des Provinces NPR ennemies dans cette Zone ?",
      placeNprUnits: "Placer dans cette Zone un nombre d’Unités NPR égal à la MAC totale de tous les NPR défenseurs.",
      placeNprUnitsEnemyAreas: "Les Zones contenant des Unités appartenant aux Ennemis d’un NPR ne contribuent pas à sa MAC.",
      placeNprUnitsAlreadyUsed: "Une Zone dont la MAC a déjà contribué à une autre Bataille ce Tour ne contribue pas à nouveau.",
      largeNprOrRebelForce: "Y a-t-il 3+ Unités Rebelles/NPR en défense et aucun PR défenseur ?",
      drawMilitaryCardForLeader: "Piocher une Carte Militaire pour déterminer si les forces Rebelles/NPR sont commandées par un Leader.",
      accountMilitaryIdeas: "Prendre en compte les Idées Militaires qui s’appliquent avant les jets de dés de Bataille.",
      accountMilitaryIdeasOrder: "D’abord l’attaquant, puis le Défenseur principal.",
      accountMilitaryIdeasExamples: "Par ex. « Military Drill » et « Noble Knights ».",
      playBattleActions: "Jouer les Actions de Bataille {battleAction}.",
      playBattleActionsOrder: "L’attaquant joue d’abord, puis le Défenseur principal.",
      rollBattleDice: "Lancer les dés de Bataille pour l’attaquant et le(s) défenseur(s).",
      rollBattleDiceBase: "Chaque camp lance 3 dés d’Infanterie.",
      rollBattleDiceAdditional: "Ajouter les dés de Bataille fournis par le Leader et les Actions de Bataille.",
      assignCasualties: "Assigner les pertes aux deux camps.",
      assignCasualtiesDetail: "Chaque résultat correspondant inflige 1 perte à une Unité ennemie de ce type. Chaque Unité ne peut subir qu’une seule perte par jet.",
      woundedGenerals: "Ajouter des jetons {illHealth} aux Généraux blessés.",
      anyUnitsRemaining: "Reste-t-il des Unités dans la Bataille ?",
      onlyOneSideHasUnitsRemaining: "Un seul camp possède-t-il encore des Unités ?",
      nprMustRetreat: "Des Unités NPR en défense doivent-elles Battre en retraite ?",
      resolveNprRetreat: "Retirer les Unités NPR qui Battent en retraite.",
      bothSidesHaveUnitsAfterNprRetreat: "Après la retraite des NPR, les deux camps possèdent-ils encore des Unités ?",
      attackerRetreats: "L’attaquant Bat-il en retraite ?",
      defenderRetreats: "Le défenseur Bat-il en retraite ?",
      resolveRetreatAndRemoveNpr: "Tout joueur Battant en retraite subit 1 perte supplémentaire et doit déplacer ses Unités restantes vers une Zone adjacente Amicale ou Neutre. Retirer ensuite toutes les Unités NPR.",
      proclaimWinner: "Le camp ayant encore des Unités dans la Zone est déclaré vainqueur de la Bataille.",
      activePlayerReward: "Si le Joueur Actif remporte la Bataille et qu’il s’agit de sa première victoire de Bataille ce Tour, gagner 1 {militaryPower}. Cette récompense ne s’applique qu’aux Batailles de la Phase d’Action.",
      endBattleNoWinner: "Il ne reste aucune Unité. La Bataille n’a pas de vainqueur.",
      endBattle: "Fin de la Bataille",
      notes: {
        ignoreExistingHostileUnits: "Ne pas compter les Provinces NPR si des Unités Hostiles à ce NPR s’y trouvaient déjà avant ce Tour.",
        doubleInfantry: "L’icône d’Infanterie au contour sur un résultat {battleDoubleInfantry} compte comme une touche d’Infanterie supplémentaire uniquement avec les Idées Militaires « Tercios/Janissaries » ou « Line Infantry ».",
        mixedUnitCasualties: "Forces mixtes : alterner les pertes entre les Unités Mercenaires, Régulières et Alliées. Unités Régulières → Exhausted ; Mercenaires et Alliées → Réserve générale.",
        multiplePrCasualties: "Plusieurs PR en défense : alterner les pertes entre leurs Royaumes, en commençant par celui qui possède le plus d’Unités. Le Joueur Actif départage les égalités.",
        woundedGenerals: "Pour chaque paire de {battleDoubleInfantry} obtenue, le Général ennemi reçoit 1 {illHealth} si son camp a subi au moins 1 perte. Un second {illHealth} tue le Général.",
        nprRetreat: "Sauf s’ils défendent leur Zone de Capitale ou leur dernière Zone restante, les NPR Battent en retraite — et sont retirés — si leur camp possède moins d’Unités que l’Ennemi.",
        rebelsNeverRetreat: "Les Unités Rebelles ne Battent jamais en retraite.",
        retreatNote6: "Les attaquants doivent Battre en retraite vers leur point de départ."
      }
    },

    navalBattle: {
      title: "Bataille navale - Résolution",
      appointAttackerAdmiral: "L’attaquant peut nommer/assigner un Amiral à sa Flotte.",
      anyDefenderHuman: "Un défenseur est-il un joueur humain ?",
      moreThanOnePrDefender: "Y a-t-il plusieurs PR défenseurs ?",
      determineMainDefender: "Déterminer le Défenseur principal.",
      determineMainDefenderDetail: "Le PR ayant le plus de Navires dans cette Zone maritime est le Défenseur principal. En cas d’égalité, le PR défenseur qui a joué le plus récemment décide.",
      assignDefenderAdmiral: "Le Défenseur (principal) peut assigner un Amiral à sa Flotte.",
      anyDefenderBot: "Un défenseur est-il un Bot ?",
      goToBotNavalBattle: "Aller à : Résolution de bataille navale du Bot",
      anyEnemyNprPorts: "Y a-t-il des Ports NPR ennemis faisant face à cette Zone maritime ?",
      placeNprShips: "Placer dans cette Zone maritime un nombre de Navires NPR égal à la NC totale de tous les NPR défenseurs.",
      placeNprShipsEnemyAreas: "Les Zones contenant des Unités appartenant aux Ennemis d’un NPR ne contribuent pas à sa NC.",
      placeNprShipsAlreadyUsed: "Une Zone dont la NC a déjà contribué à une autre Bataille ce Tour ne contribue pas à nouveau.",
      largePirateOrNprForce: "Y a-t-il 3+ Navires Pirates/NPR en défense et aucun PR défenseur ?",
      drawMilitaryCardForLeader: "Piocher une Carte Militaire pour déterminer si les forces Pirates/NPR sont commandées par un Leader.",
      accountMilitaryIdeas: "Prendre en compte les Idées Militaires qui s’appliquent avant les jets de dés de Bataille.",
      accountMilitaryIdeasOrder: "D’abord l’attaquant, puis le Défenseur principal.",
      playBattleActions: "Jouer les Actions de Bataille {battleAction}.",
      playBattleActionsOrder: "L’attaquant joue d’abord, puis le Défenseur principal.",
      rollBattleDice: "Lancer les dés de Bataille navale pour l’attaquant et le(s) défenseur(s).",
      rollBattleDiceBase: "Chaque camp lance 3 dés d’Artillerie.",
      rollBattleDiceAdditional: "Ajouter les dés de Bataille fournis par l’Amiral et les Actions de Bataille.",
      assignCasualties: "Assigner les pertes aux deux camps.",
      assignCasualtiesDetail: "Chaque résultat {battleArtillery} inflige 1 perte à un Navire ennemi.",
      woundedAdmiralsAndCapturedShips: "Ajouter des jetons {illHealth} aux Amiraux blessés. Vérifier les Navires capturés.",
      capturedShips: "Si vous avez encore des Navires et avez éliminé tous les Navires ennemis, vous pouvez capturer des Navires ennemis.",
      anyShipsRemaining: "Reste-t-il des Navires dans la Bataille ?",
      onlyOneSideHasShipsRemaining: "Un seul camp possède-t-il encore des Navires ?",
      nprMustRetreat: "Des Navires NPR en défense doivent-ils Battre en retraite ?",
      resolveNprRetreat: "Retirer les Navires NPR qui Battent en retraite.",
      bothSidesHaveShipsAfterNprRetreat: "Après la retraite des NPR, les deux camps possèdent-ils encore des Navires ?",
      attackerRetreats: "L’attaquant Bat-il en retraite ?",
      defenderRetreats: "Le défenseur Bat-il en retraite ?",
      resolveRetreatAndRemoveNpr: "Tout joueur Battant en retraite perd 1 Navire comme perte, puis déplace ses Navires restants vers une Zone maritime adjacente non Hostile ou un Port Ami adjacent. Retirer ensuite tous les Navires NPR.",
      proclaimWinner: "Le camp ayant encore des Navires dans la Zone maritime est déclaré vainqueur de la Bataille.",
      activePlayerReward: "Si le Joueur Actif remporte la Bataille et qu’il s’agit de sa première victoire de Bataille ce Tour, gagner 1 {militaryPower}.",
      endBattleNoWinner: "Il ne reste aucun Navire. La Bataille n’a pas de vainqueur.",
      endBattle: "Fin de la Bataille",
      notes: {
        noDefenderAdmiral: "Les défenseurs ne peuvent pas nommer d’Amiral au début d’une Bataille navale.",
        ignoreExistingHostileShips: "Ne pas compter les Ports NPR si des Navires Hostiles à ce NPR se trouvaient déjà dans cette Zone maritime avant ce Tour.",
        heavyShipAutomaticHit: "Chaque Navire Lourd inflige également 1 touche automatique à l’Ennemi.",
        heavyShipCasualties: "Les Navires Lourds peuvent subir 2 touches. Coucher un Navire Lourd après la première touche. Un Navire Lourd endommagé est réparé s’il termine un Tour ou un Round dans un Port Ami.",
        woundedAdmiralsAndCapturedShips: "Pour chaque paire de {battleDoubleInfantry} obtenue, tout Amiral ennemi reçoit 1 {illHealth} si son camp a subi au moins 1 perte. Un second {illHealth} tue l’Amiral.<br><br>Pour chaque résultat {battleDoubleInfantry} obtenu lors du dernier Round de Bataille, transformer 1 perte ennemie de ce Round en Navire capturé. L’Ennemi choisit quels Navires sont capturés. Remplacer chaque Navire capturé par l’un de vos Navires provenant de la Réserve.",
        multiplePrCasualties: "Plusieurs PR en défense : alterner les pertes entre leurs Royaumes, en commençant par celui qui possède le plus de Navires. Le Joueur Actif départage les égalités.",
        nprRetreat: "Sauf s’ils défendent une Zone maritime adjacente à leur Capitale, les Navires NPR Battent en retraite — et sont retirés — si leur camp possède moins de Navires que l’Ennemi.",
        piratesNeverRetreat: "Les Pirates ne Battent jamais en retraite.",
        retreat: "Les attaquants doivent Battre en retraite vers leur point de départ. Tous les Navires d’un même Royaume qui Battent en retraite doivent rejoindre une seule destination."
      }
    },

    peaceResolution: {
      title: "Paix - Résolution",
      automaticWhitePeace: "Des Guerres remplissent-elles les conditions de Paix Blanche automatique ?",
      resolveAutomaticWhitePeace: "Mettre fin à toutes ces Guerres avec les termes de Paix Blanche. Chaque PR perd {prestige1} pour chaque Paix Blanche qu'il conclut. Placer les jetons de Trêve pour toutes ces Guerres.",
      anyTotalVictory: "Un PR en Guerre remplit-il les conditions de Victoire Totale ?",
      selectTotalVictoryPlayer: "Passer au premier joueur dans l'ordre de jeu ayant obtenu une Victoire Totale contre un autre Royaume.",
      playerOrderReminder: "Commencer par le Premier Joueur puis continuer dans le sens horaire.",
      victorHuman: "Le Vainqueur est-il un joueur humain ?",
      goToBotPeaceResolution: "Aller à : Résolution de Paix du Bot",
      loserHuman: "Le Perdant est-il un joueur humain ?",
      wantsFullAnnexation: "Le Vainqueur veut-il imposer une Annexion Totale ?",
      loserBot: "Le Perdant est-il un Bot ?",
      wantsVassalization: "Le Vainqueur veut-il imposer une Vassalisation ?",
      applyVassalization: "Le Vainqueur place un {vassal} sur toutes les Provinces du Perdant (en retirant toutes les {town}) et gagne 2 {influence} dans le nouveau Royaume Vassal. Ajouter {unrest} aux {vassal} gagnés dans les Zones où le Vainqueur n'Occupait aucune Province.",
      annexationVassalizationCleanup: "Retirer le(s) jeton(s) de Guerre, tous les jetons Occupied et tous les jetons des PR sauf ceux du Vainqueur du Royaume du Perdant. Le Vainqueur peut défausser une {claim} de toute Zone où il a gagné une {town}/{vassal}, afin de retirer 2 {unrest} par {claim}. Si un NPR est Annexé, le PR qui retire un {activeAlly} perd {prestige2}.",
      anyUnresolvedWars: "Reste-t-il des PR avec des Guerres non résolues ?",
      anyoneWantsToEndWar: "L'un de ces joueurs souhaite-t-il mettre fin à sa Guerre ?",
      selectActivePlayer: "Le premier joueur dans l'ordre général du Tour impliqué dans une Guerre en cours est choisi comme Joueur Actif.",
      activePlayerHuman: "Ce joueur est-il un joueur humain ?",
      pickUnresolvedWar: "Le Joueur Actif doit choisir l'une de ses Guerres non résolues.",
      eitherSideSurrenders: "L'un des deux camps se Rend-il ?",
      resolveSurrenderPrestige: "Le Perdant perd {prestige2} et le Vainqueur gagne {prestige2}.",
      enemyHuman: "L'Ennemi est-il un joueur humain ?",
      eitherPlayerHasDoubleUnits: "L'un des joueurs possède-t-il deux fois plus d'Unités terrestres Déployées que son Ennemi ?",
      activePlayerOutnumbersNonHumanEnemy: "Les Unités terrestres Déployées du Joueur Actif sont-elles plus nombreuses que les Unités terrestres Déployées de son Ennemi plus la totalité de sa {manpower} dans ses Zones ?",
      enforcePeaceTerms: "Le Vainqueur veut-il imposer des Termes de Paix ?",
      wantsHumiliation: "Le Vainqueur veut-il imposer une Humiliation ?",
      applyHumiliation: "Toutes les Provinces Occupées sont rendues à leurs Propriétaires légitimes. Le Vainqueur gagne un montant de {prestige} égal à 2 × la Valeur Fiscale des Provinces rendues au Perdant (max. 10 {prestige}). Le Perdant perd le même montant de {prestige}.",
      wantsKeepCurrentBoardState: "Le Vainqueur veut-il Conserver l'état actuel du plateau ?",
      returnOccupiedCapitals: "Les Capitales Occupées doivent être rendues à leur Propriétaire légitime, qui doit payer 10 {ducats} à l'Occupant. Les Bots perdent 2 {botPower} au lieu de payer des Ducats.",
      applyKeepCurrentBoardState: "Les occupants conservent toutes les Provinces qu’ils Occupent actuellement. Au lieu de conserver les Provinces qu’il Occupe, le Vainqueur peut :<br> - Échanger certaines d’entre elles contre ses propres Provinces de jure Occupées par l’Ennemi, de Valeur Fiscale équivalente, ou contre 3 {ducats} × la Valeur Fiscale rendue.<br> - Libérer certaines d’entre elles pour gagner {prestige1} × la Valeur Fiscale Libérée, ainsi qu’une {alliance} avec un NPR Libéré et 2 {influence} dans ce NPR.",
      keepBoardStateClaimsAndUnrest: "Les PR peuvent défausser une {claim} de toute Zone où ils ont gagné des Provinces afin de retirer 2 {unrest} de cette même Zone.",
      wantsSecureDesiredSuccession: "Le Vainqueur veut-il Sécuriser la Succession désirée ?",
      applySecureDesiredSuccession: "Retirer tous les {royalMarriage}/{disputedSuccession} et {alliance}/{activeAlly} du Perdant, sauf ceux du Vainqueur. Le Vainqueur gagne {prestige3} par {royalMarriage}/{disputedSuccession} retiré ; leurs propriétaires perdent {prestige3}. Le Vainqueur retourne son {royalMarriage}, s'il en possède un, et gagne un montant de {prestige} égal au Revenu Fiscal du Perdant (max. {prestige5}). Le Vainqueur peut gagner une {alliance} avec le Perdant et, si le Perdant est un NPR, 4 {influence} dans sa Zone de Capitale ; si le Perdant est un PR, remplacer le Dirigeant du Perdant par un Leader défaussé.",
      wantsForceConversion: "Le Vainqueur veut-il imposer une Conversion forcée ?",
      applyForceConversion: "Le Perdant et sa Zone de Capitale doivent adopter la Religion d'État du Vainqueur. Le Vainqueur gagne {prestige3} et 2 {influence} dans la Zone de Capitale du Perdant. Le Perdant perd {prestige5} et 4 {influence}.",
      negotiatedPeace: "Si les deux camps sont des joueurs humains, ils peuvent tenter de Négocier des Termes de Paix. Sinon, passer au nœud suivant.",
      nonWhitePeaceTermsAgreed: "Des Termes de Paix autres qu'une Paix Blanche ont-ils été acceptés ?",
      whitePeaceAgreed: "Une Paix Blanche est-elle acceptée ?",
      applyWhitePeacePrestige: "Chaque PR perd {prestige1}.",
      returnAllOccupiedProvinces: "Toutes les Provinces Occupées sont rendues à leurs Propriétaires légitimes.",
      placeTruceTokens: "Placer les jetons de Trêve nécessaires.",
      relocateNeutralLandUnits: "Tous les PR ayant des Unités terrestres dans des Zones Neutres doivent les placer dans la Zone Amicale la plus proche.",
      flipWarTokens: "Retourner tous leurs jetons de Guerre sur leur face Paix.",
      returnAlliedUnits: "Renvoyer toutes les Unités Alliées présentes dans leurs Armées et leur Réserve de Manpower vers la Réserve générale.",
      endPeaceResolution: "Fin de la Résolution de Paix",
      notes: {
        note1: "Aucun des deux camps de la Guerre n’Occupe de Province appartenant à son Ennemi (y compris les Provinces appartenant aux Vassaux ou Alliés Actifs de son Ennemi).",
        note2: "Un PR doit Occuper toutes les Provinces de son Ennemi, tandis que l’Ennemi ne possède aucune Unité terrestre Déployée. Contre un Ennemi NPR, un Bot doit Occuper la Capitale du NPR et des Provinces d’une Valeur Fiscale ≥ à la moitié du Revenu Fiscal du NPR.",
        note3: "Lorsqu’un joueur a répondu « non » à cette question, il ne peut pas y répondre « oui » plus tard lors de l’étape de Résolution de Paix de ce Round.",
        note4: "Le Vainqueur doit Occuper la Capitale du Perdant et au moins une de ses Provinces dans une autre de ses Zones (s’il en possède).",
        note5: "Un joueur qui remplit cette condition est considéré comme le Vainqueur de cette Guerre. Les Unités situées sur des Continents Lointains où le PR Ennemi ne possède aucune {town} ne comptent pas.",
        note6: "Seuls les joueurs humains peuvent se Rendre. Un joueur qui se Rend est considéré comme le Perdant de cette Guerre. Le Vainqueur doit imposer une Paix dont il remplit les conditions. Le Vainqueur peut imposer une Humiliation même s’il n’Occupe pas la Capitale du Perdant.",
        note7: "Le Vainqueur doit Occuper la Capitale du Perdant, ou l’Ennemi doit s’être Rendu.",
        note8: "Le Perdant ne peut jamais être contraint de payer au Vainqueur plus de 2 × son Revenu Fiscal, au total.",
        note9: "Le Vainqueur doit Occuper la Capitale du Perdant, et il doit y avoir au moins 1 {disputedSuccession} sur la Capitale du Perdant.",
        note10: "Le Vainqueur doit Occuper ou Posséder toutes les Provinces de la Zone de Capitale du Perdant. Le Vainqueur doit avoir une Religion d’État différente de celle du Perdant.",
        automaticWhitePeaceActiveAllies: "Pour vérifier une Paix Blanche automatique, considérer les {activeAlly} d'un Ennemi comme faisant partie de son Royaume. Une Paix Blanche avec le PR met également fin à la Guerre avec tous ses {activeAlly}.",
        fullAnnexation: "Victoire Totale uniquement. Le Perdant doit être un NPR ou un Bot. Les Provinces de jure du Perdant sont entièrement incorporées au Royaume du Vainqueur.",
        note5NonHuman: "Les Unités situées sur des Continents Lointains où l'autre Royaume ne possède aucune {town} ne comptent pas dans ce calcul. Un NPR est toujours considéré comme ayant 0 Unité terrestre Déployée.",
        humiliationActiveAllies: "Aucun {prestige} n'est gagné pour les Provinces rendues aux {activeAlly} du Perdant.",
        keepBoardStateLostProvinces: "Les PR ayant perdu des Provinces ou des Provinces Vassales à cause de cette Guerre peuvent placer une {claim} dans chaque Zone où ils ont perdu au moins 1 Province.",
        negotiatedPeace: "Règle avancée. Les deux parties doivent être des joueurs humains. Elles peuvent négocier que les conditions normales de Victoire soient remplies ou non. La Vassalisation et l'Annexion Totale restent soumises à leurs conditions habituelles.",
        whitePeaceAcceptance: "Un NPR accepte toujours une Paix Blanche si elle lui est proposée. Lors d'un Résultat indécis, un Bot accepte une Paix Blanche si son Ennemi lui a capturé des Provinces d'une Valeur Fiscale supérieure à celle des Provinces que le Bot a capturées à cet Ennemi.",
        truceTokens: "Les anciens Ennemis entrent en Trêve jusqu'à la Phase 3 du Round suivant. Ne pas placer de jeton de Trêve sur les {activeAlly} des anciens Ennemis ni sur les Royaumes Vassaux.",
        relocateNeutralLandUnits: "Chaque Zone ou Zone maritime compte comme une distance de 1. Si plusieurs Zones Amicales sont à égale distance, choisir librement. Ce déplacement ne coûte aucun {militaryPower}."
      }
    },
  },

  botRealmTargeting: {
    selectRealm: "Royaume du Bot",
    selectRealmPlaceholder: "Sélectionner le Royaume du Bot",
    militaryChart: "Diagramme de ciblage militaire",
    diplomaticChart: "Diagramme de ciblage diplomatique",
    rolls: "Jets",
    fallbacks: "Recherche alternative",
    selectFirstValidTarget: "Sélectionner la première cible valide :",
    noneValid: "Aucune n’est valide",
    selectedTarget: "Cible sélectionnée",
    confirmTarget: "Confirmer la cible",
    reroll: "Relancer",
    backToCharts: "Retour aux diagrammes de ciblage",
    noTargetsRemain: "Il ne reste aucune cible valide dans ce diagramme.",
    easternEuropeNote: "* Les cibles situées sur la carte Eastern Europe ne sont valides que dans les scénarios où ce plateau est utilisé.",

        realms: {
      aragon: "Aragon",
      austria: "Autriche",
      barbary: "Barbarie",
      bohemia: "Bohême",
      brandenburg: "Brandebourg/Prusse",
      burgundy: "Bourgogne",
      castileSpain: "Castille/Espagne",
      denmark: "Danemark",
      england: "Angleterre",
      france: "France",
      germany: "Allemagne",
      horde: "Horde",
      hungary: "Hongrie",
      italy: "Italie",
      kalmar: "Union de Kalmar",
      lithuania: "Lituanie",
      mamluk: "Mamelouk",
      muscovyRussia: "Moscovie/Russie",
      netherlands: "Pays-Bas",
      norway: "Norvège",
      novgorod: "Novgorod",
      ottoman: "Ottoman",
      persia: "Perse",
      poland: "Pologne",
      portugal: "Portugal",
      scotland: "Écosse",
      sweden: "Suède",
      teutonic: "Ordre Teutonique",
      venice: "Venise"
    },

    targets: {
      ownerBrescia: "Propriétaire de Brescia",
      ownerFrancheComte: "Propriétaire de Franche-Comté",
      ownerLuxembourg: "Propriétaire de Luxembourg",
      ownerArtois: "Propriétaire d'Artois",
      france: "France",
      venice: "Venise",
      realmLombardy: "Royaume en LOMBARDY",
      savoy: "Savoie",
      realmCentralItaly: "Royaume en CENTRAL ITALY",
      ownerNapoli: "Propriétaire de Napoli",
      ownerMesina: "Propriétaire de Mesina",
      castile: "Castille",
      bavaria: "Bavière",
      salzburg: "Salzbourg",
      realmRhineland: "Royaume en RHINELAND",
      ownerNamur: "Propriétaire de Namur",
      ownerAntwerpen: "Propriétaire d'Antwerpen",
      ownerGent: "Propriétaire de Gent",
      ownerAmsterdam: "Propriétaire d'Amsterdam",
      realmNetherlands: "Royaume en NETHERLANDS",
      ownerHolstein: "Propriétaire de Holstein",
      denmark: "Danemark",
      sweden: "Suède",
      ownerKonigsberg: "Propriétaire de Königsberg",
      saxony: "Saxe",
      brandenburgPrussia: "Brandebourg/Prusse",
      bohemia: "Bohême",
      ownerSilesia: "Propriétaire de Silesia",
      poland: "Pologne",
      ownerPozsony: "Propriétaire de Pozsony",
      opponentElectorAreas: "Adversaire avec {town}/{vassal} dans 2+ zones électorales d'origine",
      ownerPest: "Propriétaire de Pest",
      ragusa: "Raguse",
      ownerBosnia: "Propriétaire de Bosnia",
      ownerAlbania: "Propriétaire d'Albania",
      ownerKosovo: "Propriétaire de Kosovo",
      wallachia: "Valachie",
      moldavia: "Moldavie",
      ownerBeograd: "Propriétaire de Beograd",
      ottomans: "Ottomans",
      realmBurgundy: "Royaume en BURGUNDY",
      switzerland: "Suisse",
      realmCorsicaSardinia: "Royaume en CORSICA & SARDINIA",
      realmLanguedoc: "Royaume en LANGUEDOC",
      realmAragon: "Royaume en ARAGON",
      portugal: "Portugal",
      realmWestphalia: "Royaume en WESTPHALIA",
      realmFlandersWallonia: "Royaume en FLANDERS & WALLONIA",
      realmLowerSaxony: "Royaume en LOWER SAXONY",
      realmPrussia: "Royaume en PRUSSIA",
      realmWielkopolska: "Royaume en WIELKOPOLSKA",
      realmPomerania: "Royaume en POMERANIA",
      realmEstoniaLivonia: "Royaume en ESTONIA & LIVONIA",
      ownerFirenze: "Propriétaire de Firenze",
      papalStates: "États pontificaux",
      ownerSiena: "Propriétaire de Siena",
      realmSicily: "Royaume en SICILY",
      realmSerbiaAlbania: "Royaume en SERBIA & ALBANIA",
      ownerConstantinople: "Propriétaire de Constantinople",
      knights: "Chevaliers",
      realmTranscaucasia: "Royaume en TRANSCAUCASIA",

      adal: "Adal",
      ajuuraan: "Ajuuraan",
      albania: "Albanie",
      allNprsIreland: "Tous les NPR en IRELAND",
      aqQoyunlu: "Aq Qoyunlu",
      aragon: "Aragon",
      austria: "Autriche",
      basra: "Basra",
      benin: "Bénin",
      bosnia: "Bosnie",
      brandenburg: "Brandebourg",
      bremen: "Brême",
      brittany: "Bretagne",
      brunswick: "Brunswick",
      burgundy: "Bourgogne",
      byzantium: "Byzance",
      castileSpain: "Castille/Espagne",
      cleanseHeresy: "CLEANSE HERESY*",
      crimea: "Crimée",
      cyprus: "Chypre",
      djerid: "Djerid",
      england: "Angleterre",
      ethiopia: "Éthiopie",
      florence: "Florence",
      franceAdjacentLand: "France, si adjacente par voie terrestre",
      frankfurt: "Francfort",
      genoa: "Gênes",
      georgia: "Géorgie",
      granada: "Grenade",
      greatHorde: "Grande Horde",
      hamburg: "Hambourg",
      hormuz: "Hormuz",
      hungary: "Hongrie",
      japan: "Japon",
      kazan: "Kazan",
      kilwa: "Kilwa",
      kongo: "Kongo",
      liege: "Liège",
      lithuania: "Lituanie",
      livonianOrder: "Ordre de Livonie",
      lorraine: "Lorraine",
      madagascar: "Madagascar",
      magdeburg: "Magdebourg",
      mamluks: "Mamelouks",
      mantua: "Mantoue",
      milan: "Milan",
      mongolia: "Mongolie",
      morocco: "Maroc",
      muscovy: "Moscovie",
      muscovyRussia: "Moscovie/Russie",
      najd: "Najd",
      naples: "Naples",
      navarra: "Navarre",
      nogai: "Nogai",
      norway: "Norvège",
      novgorod: "Novgorod",
      nprAdjacentEnglishChannel: "NPR adjacent à ENGLISH CH.",
      nprAdjacentLandAlgiers: "NPR adjacent par voie terrestre à ALGIERS",
      nprAdjacentLeon: "NPR adjacent à LEON",
      nprIreland: "NPR en IRELAND",
      odoyev: "Odoyev",
      oirat: "Oirat",
      oneTaxNprMoscowRyazan: "NPR à 1 de valeur fiscale en MOSCOW & RYAZAN",

      ownerAdal: "Propriétaire d'Adal",
      ownerAdana: "Propriétaire d'Adana",
      ownerAkershus: "Propriétaire d'Akershus",
      ownerAlQuds: "Propriétaire d'Al-Quds",
      ownerAlexandria: "Propriétaire d'Alexandria",
      ownerAngola: "Propriétaire d'Angola",
      ownerAnjou: "Propriétaire d'Anjou",
      ownerAntilles: "Propriétaire des Antilles",
      ownerAstrakhan: "Propriétaire d'Astrakhan",
      ownerAthina: "Propriétaire d'Athina",
      ownerAzov: "Propriétaire d'Azov",
      ownerBaghdad: "Propriétaire de Baghdad",
      ownerBahia: "Propriétaire de Bahia",
      ownerBaleares: "Propriétaire de Baleares",
      ownerBalkh: "Propriétaire de Balkh",
      ownerBaluchistan: "Propriétaire de Baluchistan",
      ownerBangazi: "Propriétaire de Bangazi",
      ownerBarcelona: "Propriétaire de Barcelona",
      ownerBasarabia: "Propriétaire de Basarabia",
      ownerBasra: "Propriétaire de Basra",
      ownerBengal: "Propriétaire de Bengal",
      ownerBergenhus: "Propriétaire de Bergenhus",
      ownerBordeaux: "Propriétaire de Bordeaux",
      ownerBourgogne: "Propriétaire de Bourgogne",
      ownerBrugge: "Propriétaire de Brugge",
      ownerBrunei: "Propriétaire de Brunei",
      ownerCaffa: "Propriétaire de Caffa",
      ownerCalifornia: "Propriétaire de California",
      ownerCanada: "Propriétaire de Canada",
      ownerCapeGoodHope: "Propriétaire de Cape of Good Hope",
      ownerCapeOfGoodHope: "Propriétaire de Cape of Good Hope",
      ownerCaux: "Propriétaire de Caux",
      ownerCentralAmerica: "Propriétaire de Central America",
      ownerCeuta: "Propriétaire de Ceuta",
      ownerChagatai: "Propriétaire de Chagatai",
      ownerConstantinopleChristian: "Propriétaire de Constantinople (si chrétien)",
      ownerCoromandel: "Propriétaire de Coromandel",
      ownerCorsica: "Propriétaire de Corsica",
      ownerCreta: "Propriétaire de Creta",
      ownerCrete: "Propriétaire de Crete",
      ownerCyprus: "Propriétaire de Cyprus",
      ownerDanzig: "Propriétaire de Danzig",
      ownerDeccan: "Propriétaire de Deccan",
      ownerDelhi: "Propriétaire de Delhi",
      ownerEdisanas: "Propriétaire d'Edisanas",
      ownerFars: "Propriétaire de Fars",
      ownerFerrara: "Propriétaire de Ferrara",
      ownerFlorida: "Propriétaire de Florida",
      ownerFurdan: "Propriétaire de Furdan",
      ownerGalicia: "Propriétaire de Galicia",
      ownerGharb: "Propriétaire de Gharb",
      ownerGibraltar: "Propriétaire de Gibraltar",
      ownerGoa: "Propriétaire de Goa",
      ownerGoldCoast: "Propriétaire de Gold Coast",
      ownerGotland: "Propriétaire de Gotland",
      ownerGranadaMuslim: "Propriétaire de Granada (si musulman)",
      ownerGreatLakes: "Propriétaire de Great Lakes",
      ownerGujarat: "Propriétaire de Gujarat",
      ownerGuyana: "Propriétaire de Guyana",
      ownerHejaz: "Propriétaire de Hejaz",
      ownerHerat: "Propriétaire de Herat",
      ownerHormuz: "Propriétaire de Hormuz",
      ownerHudsonBay: "Propriétaire de Hudson Bay",
      ownerIsfahan: "Propriétaire d'Isfahan",
      ownerIskandariyya: "Propriétaire d'Iskandariyya",
      ownerJava: "Propriétaire de Java",
      ownerKaraman: "Propriétaire de Karaman",
      ownerKastamonu: "Propriétaire de Kastamonu",
      ownerKastamonu_dummy: "Propriétaire de Kastamonu",
      ownerKazakhstan: "Propriétaire de Kazakhstan",
      ownerKazan: "Propriétaire de Kazan",
      ownerKhiva: "Propriétaire de Khiva",
      ownerKijevas: "Propriétaire de Kijevas",
      ownerKleve: "Propriétaire de Kleve",
      ownerKobenhavn: "Propriétaire de København",
      ownerLaPlata: "Propriétaire de La Plata",
      ownerLisboa: "Propriétaire de Lisboa",
      ownerLorraine: "Propriétaire de Lorraine",
      ownerLubeck: "Propriétaire de Lübeck",
      ownerMadrid: "Propriétaire de Madrid",
      ownerMalacca: "Propriétaire de Malacca",
      ownerMali: "Propriétaire de Mali",
      ownerMalta: "Propriétaire de Malta",
      ownerMantova: "Propriétaire de Mantova",
      ownerMexico: "Propriétaire de Mexico",
      ownerMilano: "Propriétaire de Milano",
      ownerMississippi: "Propriétaire de Mississippi",
      ownerMoluccas: "Propriétaire de Moluccas",
      ownerMongolia: "Propriétaire de Mongolia",
      ownerMontpellier: "Propriétaire de Montpellier",
      ownerMorea: "Propriétaire de Morea",
      ownerMoskva: "Propriétaire de Moskva",
      ownerNantes: "Propriétaire de Nantes",
      ownerNavarra: "Propriétaire de Navarra",
      ownerNaxos: "Propriétaire de Naxos",
      ownerNeva: "Propriétaire de Neva",
      ownerNewEngland: "Propriétaire de New England",
      ownerNogai: "Propriétaire de Nogai",
      ownerNovgorod: "Propriétaire de Novgorod",
      ownerNyland: "Propriétaire de Nyland",
      ownerOdoyev: "Propriétaire d'Odoyev",
      ownerOirat: "Propriétaire d'Oirat",
      ownerOsterbotten: "Propriétaire d'Österbotten",
      ownerPernambuco: "Propriétaire de Pernambuco",
      ownerPeru: "Propriétaire de Peru",
      ownerPfalz: "Propriétaire de Pfalz",
      ownerPhilippines: "Propriétaire de Philippines",
      ownerPicardie: "Propriétaire de Picardie",
      ownerPicardieAdjacentLand: "Propriétaire de Picardie, si adjacent par voie terrestre",
      ownerPoznan: "Propriétaire de Poznan",
      ownerProvence: "Propriétaire de Provence",
      ownerPskov: "Propriétaire de Pskov",
      ownerQafsah: "Propriétaire de Qafsah",
      ownerQahirah: "Propriétaire de Qahirah",
      ownerRagusa: "Propriétaire de Ragusa",
      ownerReval: "Propriétaire de Reval",
      ownerRhodes: "Propriétaire de Rhodes",
      ownerRiga: "Propriétaire de Riga",
      ownerRijeka: "Propriétaire de Rijeka",
      ownerRioDeJaneiro: "Propriétaire de Rio de Janeiro",
      ownerRoma: "Propriétaire de Roma",
      ownerRyazan: "Propriétaire de Ryazan",
      ownerSamarkand: "Propriétaire de Samarkand",
      ownerSardinya: "Propriétaire de Sardinya",
      ownerSavoie: "Propriétaire de Savoie",
      ownerShirvan: "Propriétaire de Shirvan",
      ownerSmolenskas: "Propriétaire de Smolenskas",
      ownerSonghai: "Propriétaire de Songhai",
      ownerSopron: "Propriétaire de Sopron",
      ownerSouthSumatra: "Propriétaire de South Sumatra",
      ownerStettin: "Propriétaire de Stettin",
      ownerStockholm: "Propriétaire de Stockholm",
      ownerTabriz: "Propriétaire de Tabriz",
      ownerTambov: "Propriétaire de Tambov",
      ownerTangiers: "Propriétaire de Tangiers",
      ownerTimbuktu: "Propriétaire de Timbuktu",
      ownerTimor: "Propriétaire de Timor",
      ownerTirgoviste: "Propriétaire de Tirgoviste",
      ownerTorda: "Propriétaire de Torda",
      ownerTrebizond: "Propriétaire de Trebizond",
      ownerTripoli: "Propriétaire de Tripoli",
      ownerTrondheim: "Propriétaire de Trondheim",
      ownerTunis: "Propriétaire de Tunis",
      ownerTver: "Propriétaire de Tver",
      ownerTyumen: "Propriétaire de Tyumen",
      ownerUpperEgypt: "Propriétaire de Upper Egypt",
      ownerValencia: "Propriétaire de Valencia",
      ownerVilnius: "Propriétaire de Vilnius",
      ownerVirginia: "Propriétaire de Virginia",
      ownerVogelkop: "Propriétaire de Vogelkop",
      ownerWarszawa: "Propriétaire de Warszawa",
      ownerXian: "Propriétaire de Xi'an",
      ownerYemen: "Propriétaire de Yemen",
      ownerZagreb: "Propriétaire de Zagreb",
      ownerZara: "Propriétaire de Zara",
      ownerZemaitija: "Propriétaire de Zemaitija",

      palatinate: "Palatinat",
      polandCommonwealth: "Pologne/Commonwealth polono-lituanien",
      polandPlc: "Pologne/Commonwealth polono-lituanien",
      provence: "Provence",
      pskov: "Pskov",
      qaraQoyunlu: "Qara Qoyunlu",
      raid: "RAID*",

      realmAegeanArchipelago: "Royaume en AEGEAN ARCHIPELAGO",
      realmAlgiers: "Royaume en ALGIERS",
      realmAndalucia: "Royaume en ANDALUCIA",
      realmAquitaine: "Royaume en AQUITAINE",
      realmAragonAdjacentLand: "Royaume en ARAGON, si adjacent par voie terrestre",
      realmAstrakhan: "Royaume en ASTRAKHAN",
      realmBavaria: "Royaume en BAVARIA",
      realmBavariaSwabia: "Royaume en BAVARIA & SWABIA",
      realmBohemia: "Royaume en BOHEMIA",
      realmBotCapitalArea: "Royaume dans la zone de Capitale du Bot",
      realmBrittanyNormandy: "Royaume en BRITTANY & NORMANDY",
      realmCaucasus: "Royaume en CAUCASUS",
      realmCentralRussia: "Royaume en CENTRAL RUSSIA",
      realmCircassia: "Royaume en CIRCASSIA",
      realmCrimea: "Royaume en CRIMEA",
      realmCroatiaBosnia: "Royaume en CROATIA & BOSNIA",
      realmDalmatia: "Royaume en DALMATIA",
      realmEastAnglia: "Royaume en EAST ANGLIA",
      realmEasternUkraine: "Royaume en EASTERN UKRAINE",
      realmEgypt: "Royaume en EGYPT",
      realmFinland: "Royaume en FINLAND",
      realmGotalandSkane: "Royaume en GÖTALAND & SKÅNE",
      realmGreece: "Royaume en GREECE",
      realmHungarianPlain: "Royaume en HUNGARIAN PLAIN",
      realmIraq: "Royaume en IRAQ",
      realmIreland: "Royaume en IRELAND",
      realmJutland: "Royaume en JUTLAND",
      realmKaraman: "Royaume en KARAMAN",
      realmKarelia: "Royaume en KARELIA",
      realmKurdistan: "Royaume en KURDISTAN",
      realmLanguedocAdjacentLand: "Royaume en LANGUEDOC, si adjacent par voie terrestre",
      realmLithuania: "Royaume en LITHUANIA",
      realmMacaronesia: "Royaume en MACARONESIA",
      realmMacedoniaThrace: "Royaume en MACEDONIA & THRACE",
      realmMazoviaMalopolska: "Royaume en MAZOVIA & MALOPOLSKA",
      realmMoldavia: "Royaume en MOLDAVIA",
      realmMuscowRyazan: "Royaume en MOSCOW & RYAZAN",
      realmNaples: "Royaume en NAPLES",
      realmNorthMorocco: "Royaume en NORTH MOROCCO",
      realmNorthSahara: "Royaume en NORTH SAHARA",
      realmNorthernAnatolia: "Royaume en NORTHERN ANATOLIA",
      realmNorthumbria: "Royaume en NORTHUMBRIA",
      realmNovgorod: "Royaume en NOVGOROD",
      realmOstlandet: "Royaume en OSTLANDET",
      realmPerm: "Royaume en PERM",
      realmPortugal: "Royaume en PORTUGAL",
      realmRedRuthenia: "Royaume en RED RUTHENIA",
      realmRoyalHungary: "Royaume en ROYAL HUNGARY",
      realmRum: "Royaume en RUM",
      realmSaratov: "Royaume en SARATOV",
      realmSaxony: "Royaume en SAXONY",
      realmScotland: "Royaume en SCOTLAND",
      realmSeine: "Royaume en SEINE",
      realmSwitzerland: "Royaume en SWITZERLAND",
      realmSyria: "Royaume en SYRIA",
      realmThraceMacedonia: "Royaume en THRACE & MACEDONIA",
      realmTransylvania: "Royaume en TRANSYLVANIA",
      realmTunisia: "Royaume en TUNISIA",
      realmVenetia: "Royaume en VENETIA",
      realmVologda: "Royaume en VOLOGDA",
      realmWallachiaBulgaria: "Royaume en WALLACHIA & BULGARIA",
      realmWesternUkraine: "Royaume en WESTERN UKRAINE",
      realmWhiteRuthenia: "Royaume en WHITE RUTHENIA",

      riga: "Riga",
      ryazan: "Ryazan",
      scotland: "Écosse",
      serbia: "Serbie",
      shirvan: "Shirvan",
      teutonicOrder: "Ordre Teutonique",
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
    title: "Actions du Bot",
    mainTurnStructure: "Structure du tour principale",
    chooseSpecificAction: "Choisir une action spécifique",
    peaceAndRebels: "Phase de paix et des rebelles",
    incomeAndUpkeep: "Phase de revenus et d’entretien",
    cleanup: "Phase de nettoyage",
    finalScoring: "Décompte final",
    changeBotRealm: "Changer le Royaume du Bot",
    mainTurn: {
      start: "Début",
      noBotPower: "Il reste 0 {botPower}, ou le Bot ne peut plus jouer de Tour pendant cette Manche ?",
      pickedEvent: "A-t-il pioché un Événement ?",
      goToEvent: "Aller à : Événement",
      underAttack: "Est-il attaqué par des Ennemis ou des Rebelles ?",
      goToDefend: "Aller à : Défense",
      spend1BotPower: "Dépenser 1 {botPower}",
      canSiege: "Une Armée est-elle sur le plateau et peut-elle mener un Siège dans la même Zone ?",
      goToSiege: "Aller à : Siège",
      canColonize: "A-t-il au moins 3 {botPower} restants et au moins 1 {colonist} ?",
      goToColonize: "Aller à : Colonisation",
      spend2BotPower: "Dépenser 2 {botPower}",
      spentMoreThanLeft: "A-t-il dépensé plus de {botPower} qu’il ne lui en reste ?",
      hasBotCards: "Reste-t-il des cartes Bot ?",
      atWarEnoughPower: "Est-il en Guerre et lui reste-t-il au moins 4 {botPower} ?",
      pass: "Passer",
      firstToPass: "Premier à passer : gagner 2 {botPower}",
      secondToPass: "Deuxième à passer : gagner 1 {botPower}",
      cardHasWarAction: "Est-il en Guerre et la carte possède-t-elle une Action de Guerre ?",
      atWar: "Bot en Guerre ?",
      performWarAction: "Effectuer l’Action de Guerre de la carte.",
      actionTookEffect: "L’Action a-t-elle pris effet ?",
      performFirstAction: "Effectuer la première Action de la carte.",
      performSecondAction: "Effectuer la deuxième Action de la carte, s’il y en a une.",
      endTurn: "Fin du Tour",
      drawBotCard: "Piocher une carte Bot.",
      spendShownCost: "Dépenser le coût indiqué en {botPower}.",
      discardActionCard: "Défausser une carte Action si l’icône de défausse est indiquée :",
      administrative: "Administrative",
      diplomatic: "Diplomatique",
      military: "Militaire",
      scorePrestigeFromCard: "Marquer autant de Prestige que de {botPower} dépensés pour la carte Bot piochée.",
      spend1Score1: "Dépenser 1 {botPower}, marquer {prestige1}",
      botCard: "Carte Bot",
      firstActionLabel: "Première Action",
      secondActionLabel: "Deuxième Action",
      warActionLabel: "Guerre",

      notes: {
        underAttack: "Le Bot est considéré comme attaqué si des Unités ennemies ou des {rebelUnit} sont présentes dans une Zone contenant une {town} du Bot, ou si des Ennemis ou des Rebelles occupent une {town} du Bot.",
        insufficientBotPower: "Si le Bot a moins de {botPower} restants que le coût en {botPower} de la carte, dépenser les {botPower} restants et exécuter la carte."
      }
    },

    defend: {
      source: "(depuis la Structure du tour principale)",
      anyInvaders: "Y a-t-il une Zone avec des Envahisseurs ?",
      canSiegeWith2BotPower: "Reste-t-il au moins 2 {botPower}, et l’Armée est-elle dans une Zone où elle peut assiéger des Provinces ?",
      dieResult: "Résultat du dé",
      goToSiege: "Aller à : SIÈGE",
      gain1BotPower: "Gagner 1 {botPower}",
      armyDoubleInvaders: "L’Armée est-elle ≥ à 2× toute force d’Envahisseurs ?",
      canRecruit: "Reste-t-il au moins 2 {botPower} et davantage de {manpower} ?",
      recruit: "Dépenser 2 {botPower} pour recruter 7/9/11 Unités.",
      armyAtLeastInvaders: "L’Armée est-elle ≥ à toute force d’Envahisseurs ?",
      armyDeployedCanSiege: "L’Armée est-elle déployée dans une Zone où elle peut assiéger des Provinces ?",
      increaseArmyTo3: "Si l’Armée a moins de 3 Unités : augmenter sa taille à 3 Unités.",
      occupiedBotTownNoInvaders: "Y a-t-il une Zone avec une {town} du Bot occupée, et sans Envahisseurs ?",
      placeArmySafeBotArea: "Placer l’Armée dans une telle Zone sans Unités hostiles. Vérifier la MAC.",
      placeArmySafeBotAreaDetail: "Préférer la Zone ayant la plus forte Valeur de Taxe parmi les {town} du Bot occupées par des Ennemis/Rebelles, puis la Zone de sa Capitale.",
      safeBotTownAvailable: "Y a-t-il une Zone avec une {town} du Bot où l’Armée ne déclencherait pas de Bataille ?",
      armyOnMap: "L’Armée est-elle sur le plateau ?",
      macEnough: "Y a-t-il des Envahisseurs dans une Zone où la MAC du Bot ≥ à la force d’invasion ?",
      placeArmyLargestInvaders: "Placer l’Armée dans la Zone avec la plus grande force d’invasion qui remplit les conditions. Vérifier la MAC.",
      preferPrEnemy: "Préférer un Ennemi PR.",
      goToLandBattle: "Aller à : BATAILLE TERRESTRE",
      gain1BotPowerIfVictorious: "Gagner 1 {botPower} en cas de victoire.",
      shipCanIncreaseMac: "Placer un Navire peut-il augmenter suffisamment la MAC dans une Zone avec des Envahisseurs ?",
      placeShipNavalBridge: "Placer un Navire pour étendre le Pont Naval jusqu’à une Zone valide.",
      triggersNavalBattle: "Cela déclenche-t-il une Bataille Navale ?",
      goToNavalBattle: "Aller à : BATAILLE NAVALE",
      placeArmySmallestInvaders: "Placer l’Armée dans la Zone avec la plus petite force d’invasion. Vérifier la MAC.",
      preferPrEnemyForce: "Préférer une force ennemie PR.",
      has2BotPower: "Reste-t-il au moins 2 {botPower} ?",
      goToSpy: "Aller à : ESPIONNAGE",
      enemyTownSafeArea: "Y a-t-il une Zone avec une {town} ennemie, où l’Armée ne déclencherait pas de Bataille, adjacente par voie terrestre ou reliée au Royaume du Bot par un Pont Naval ?",
      placeArmyEnemyTown: "Placer l’Armée dans une telle Zone ayant la plus forte Valeur de Taxe totale de {town} ennemies. Vérifier la MAC.",
      endTurn: "Fin du Tour",
      invadersDefinition: "Envahisseurs = Unités hostiles dans les Zones contenant une {town} du Bot.",
      notes: {
        recruit: "Le nombre d’Unités recrutées pour 2 {botPower} dépensés est déterminé par le niveau de difficulté choisi.",
        macAvailability: "Ajuster la disponibilité des Unités dans l’Armée en fonction de la MAC (voir p. 5)."
      }
    },

    siege: {
      source: "(depuis la Structure du tour principal + depuis les actions DEFEND et MILITARY)",

      siegeProvinces: "Assiéger des Provinces hostiles jusqu’à un total de 3 en Valeur de Taxe (le Bot ignore la Force de Siège). Dépenser 1 {botPower} par point de Valeur de Taxe assiégé.",

      preferredTargets: "Préférer ses propres Provinces Core occupées par un Ennemi, puis toute {town}/{vassal} d’un Adversaire, puis les NPR.",

      atWarOrRebels: "Le Bot est-il en Guerre, ou possède-t-il dans cette Zone une {town} avec {unrest} ou {rebelTown} ?",

      removeArmy: "Retirer l’Armée du plateau.",

      endTurn: "Fin du Tour",

      notes: {
        siegeRules: "Si le Bot n’a plus que 1 {botPower} et aucune Petite Province à assiéger, il assiège une Grande Province. Si le Bot possède au moins 3 Idées Militaires, il assiège 2 points de Valeur de Taxe par {botPower} dépensé (jusqu’à un total de 6 en Valeur de Taxe). Le Bot ne peut assiéger une Province insulaire que s’il possède un Navire dans une Zone Maritime adjacente, sauf pour ses propres Provinces de jure, pour lesquelles cette condition est ignorée. Voir également les étapes 4–7 de « Sieges & Occupation », règles principales p. 28."
      }
    },

    spy: {
      source: "(depuis l’action DEFEND + Cartes Bot, 2e Action : 13, 14 ; Cartes Bot, Action de Guerre : 13, 14)",
      atWarWithOpponent: "En Guerre contre un Adversaire ?",
      selectWarOpponent: "Sélectionner cet Adversaire.",
      opponentHas3Unrest: "L’Adversaire a-t-il 3+ {unrest} ?",
      opponentRollRebelDice: "Action secrète : l’Adversaire doit lancer les dés Rebelles.",
      atWarWithNpr: "En Guerre contre un NPR ?",
      goToMilitary: "Aller à : MILITARY",
      selectOpponent: "Sélectionner un Adversaire.",
      add2Unrest: "Action secrète : ajouter 2 {unrest} à la {town} de l’Adversaire.",
      endTurn: "Fin du Tour"
    },

    colonize: {
      source: "(depuis la Structure du tour principal + depuis l’action EXPLORE + Carte Bot : 12)",
      has2ColonistsAndConnectedClaim: "Le Bot a-t-il 2+ {colonist} et une {claim} coloniale reliée à sa Capitale par une chaîne continue de {town} du Bot et/ou de Navires ?",
      has3Colonists: "Le Bot a-t-il 3+ {colonist} ?",
      remove3Colonists: "Retirer 3 {colonist} du Bot de la Réserve de Colons. Gagner 1 {botPower}.",
      removeAllColonists: "Retirer tous les {colonist} du Bot de la Réserve de Colons.",
      replaceColonialClaim: "Remplacer une {claim} coloniale par une Petite {town}.",
      preferredLocation: "Préférer une localisation adjacente à une {town} du Bot, puis un Port.",
      goToExplore: "Aller à : EXPLORE",
      endTurn: "Fin du Tour"
    },

    unrest: {
      source: "(Cartes Bot : 13, 20, 21, 22, 23)",
      ownsProvincesWithUnrest: "Possède-t-il des Provinces avec {unrest} ?",
      removeUnrest: "Retirer {unrest} de 2 Provinces appartenant au Bot.",
      preferCapitalThenLargeTown: "Préférer la Capitale, puis une Grande {town}.",
      hasLessThan2CoresAndCanPlace: "A-t-il moins de 2 {core} en jeu et peut-il placer un {core} ?",
      ownsEligibleAreaWithHigherTaxValue: "Possède-t-il toutes les Provinces d’une Zone éligible dont la Valeur de Taxe totale est supérieure à celle de toute Zone contenant actuellement un {core} ?",
      removeCore: "Retirer le {core} en jeu de la Zone ayant la Valeur de Taxe totale la plus faible.",
      placeCore: "Placer un {core} dans la Zone éligible ayant la Valeur de Taxe totale la plus élevée.",
      performSecondAction: "Effectuer à la place la deuxième Action de la carte.",
      endTurn: "Fin du Tour",
      notes: {
        removeOtherBotsClaims: "Retirer tous les {claim} des autres Bots des Zones dans lesquelles des {core} sont placés."
      }
    },

    convert: {
      source: "(Cartes Bot : 15, 16, 17, 18, 19)",
      anyAreasWithReligiousDissent: "Y a-t-il des Zones avec une Dissidence religieuse ?",
      catholicAndAllAreasProtestantOrViceVersa: "Le Bot est-il catholique et toutes ses Zones sont-elles protestantes, ou inversement ?",
      allProvincesOwnedBySameReligion: "Toutes les Provinces d’une Zone dissidente appartiennent-elles au Bot, ou à des Royaumes ayant la même Religion d’État ?",
      changeStateReligion: "Changer la Religion d’État pour la religion majoritaire. Gagner 1 {botPower}.",
      changeStateReligionEffects: "Perdre {prestige3} et un {royalMarriage}. Déplacer 5 {influence}. Ajouter {unrest} et lancer les dés Rebelles.",
      convertArea: "Convertir la Zone à la Religion d’État. Marquer {prestige2}.",
      preferArea: "Préférer la Zone avec sa propre {town} ayant la plus grande Valeur de Taxe.",
      performSecondAction: "Effectuer à la place la deuxième Action de la carte.",
      endTurn: "Fin du Tour",
      notes: {
        changeStateReligion: "Même procédure que pour l’action Change State Religion à la page 13 des règles principales."
      }
    },

    focus: {
      source: "(Cartes Bot, 2e Action : 16, 17, 18, 19, 20, 21, 22, 23)",
      cubeInFocusAreaAlready: "Y a-t-il déjà un {cube} dans une Zone de Focus ?",
      placeSpentBotPowerExistingArea: "Placer le {botPower} dépensé dans cette Zone de Focus.",
      placeSpentBotPowerNamedArea: "Placer le {botPower} dépensé dans la Zone de Focus indiquée sur la carte.",
      hasEnoughCubes: "Y a-t-il maintenant 2/3 {cube} dans cette Zone de Focus ?",
      matchingMilestoneAvailable: "Un Milestone correspondant au type de Focus est-il disponible ?",
      scoreMatchingMilestone: "Marquer le Milestone correspondant au type de Focus. Gagner 2 {botPower} et marquer {prestige} normalement.",
      score3Prestige: "Marquer {prestige3}.",
      discardCubes: "Défausser tous les {cube} de la Zone de Focus.",
      putAsideBotCard: "Mettre la Carte Bot de côté.",
      notReshuffledThisAge: "(Ne sera pas remélangée pendant cet Âge)",
      endTurn: "Fin du Tour",
      notes: {
        difficultyLevel: "Selon le niveau de difficulté choisi (voir p. 2)."
      }
    },

    idea: {
      source: "(Carte Bot : 24)",
      cubeInNonEconomicFocusArea: "Y a-t-il un {cube} dans une Zone de Focus autre qu’Économie ?",
      availableIdeasMatchingFocus: "Des Idées correspondant à ce type de Focus sont-elles disponibles ?",
      selectFocusType: "Sélectionner le type de Focus",
      manualSelection: "Sélection manuelle",
      selectedFocusType: "Type de Focus sélectionné",
      pickIdea: "Choisir une Idée correspondant au type de Focus.",
      tagIdea: "Marquer cette Idée et l’emplacement correspondant sur la Piste des Idées du plateau du Bot avec un jeton (tag chit).",
      scorePrestige: "Marquer {prestige} normalement.",
      preferIdeas: "Préférer les Idées non recherchées, puis choisir aléatoirement.",
      endTurn: "Fin du Tour",
      focusTypes: {
        administrative: "Administratif",
        diplomatic: "Diplomatique",
        military: "Militaire"
      }
    },

    papalCuria: {
      source: "(Carte Bot : 14 ; Carte Bot, 2e Action : 15)",
      hasCatholicStateReligion: "Le Bot a-t-il la Religion d’État catholique ?",
      uncontestedPapalController: "Le Bot est-il Contrôleur de la Curie incontesté ?",
      age1Or2: "Âge I ou II ?",
      adjacentToMuslimArea: "Adjacent à une Zone avec 2+ Provinces appartenant à des Royaumes musulmans, et sans Excommunication/Croisade active ?",
      catholicOpponentsNoActiveExcomCrusade: "Y a-t-il des Adversaires catholiques et aucune Excommunication/Croisade active ?",
      papalControllerCanExcommunicate: "Le Bot est-il Contrôleur de la Curie, à l’Âge I ou II, et peut-il utiliser l’Excommunication pour retirer un {cardinal} d’un Adversaire ?",
      placeCardinal: "Placer un {cardinal} dans l’emplacement n°1 de la Curie papale.",
      ifNowPapalController: "S’il devient alors Contrôleur de la Curie : retirer l’Excommunication de son propre Royaume, s’il y en a une.",
      excommunicateOpponent: "Excommunier un Adversaire. L’Adversaire perd {prestige1} et 1 {cardinal}, et doit retirer 4 {influence} de Zones catholiques.",
      placeCrusade: "Placer un jeton de Croisade et une {claim} dans cette Zone. Marquer {prestige1}. Recruter 2 Unités si possible.",
      preferAreaWithTown: "Préférer une Zone où le Bot possède une {town}.",
      goToMilitary: "Aller à : MILITARY",
      militaryCrusadeTarget: "Sélectionner une cible de Croisade valide et aller directement à l’étape Declare War.",
      performSecondAction: "Effectuer à la place la deuxième Action de la carte.",
      endTurn: "Fin du Tour"
    },

    military: {
      source: "(depuis les Actions PAPAL et SPY + Cartes Bot : 02, 03, 04 ; Cartes Bot, Action de Guerre : 05, 06, 12, 15)",

      goToMilitaryTargetChart: "Aller à : DIAGRAMME DE CIBLAGE MILITAIRE",
      rollForTarget: "lancer pour déterminer la cible : si c’est un NPR, placer une {claim}",

      atWar: "Bot en Guerre ?",
      hasClaim: "Le Bot a-t-il une {claim} ?",
      doesRollMatchNonColonialClaim: "Le résultat du dé correspond-il au numéro d’une {claim} non coloniale ?",
      anyAreaWithBattlegroundAdjacentBot: "Y a-t-il une Zone avec {battlegroundArea} adjacente au Bot ?",
      botHasMarriage: "Le Bot possède-t-il un {royalMarriage} avec {disputedSuccession} visible, dans une Zone adjacente au Bot ?",

      targetEligibleBotLessFourInfluence: "La cible est-elle éligible, et le Bot a-t-il < 4 {influence} dans les Zones de la cible si c’est un NPR ?",
      hasCasusBelli: "Le Bot a-t-il un Casus Belli ?",
      targetIsOpponent: "La cible est-elle un Adversaire ?",
      targetStrengthGreaterTwiceBotStrength: "La Force de la cible ≥ 2× la Force du Bot ?",

      botHasAlliesWithMoreTwoInfluence: "Le Bot a-t-il des Alliés NPR avec 2+ {influence}, adjacents à la cible ?",
      armySizeGreaterTwiceTargetStrength: "La taille de l’Armée ≥ 2× la Force de la cible ?",
      hasMoreFourBotCubeLeft: "Reste-t-il au moins 4 {botPower} et davantage de {manpower} ?",

      dowTriggersNavalBattle: "La Déclaration de Guerre déclenche-t-elle des Batailles navales ?",
      dowTriggersLandBattle: "La Déclaration de Guerre déclenche-t-elle des Batailles terrestres ?",

      armyOnMapBoard: "L’Armée est-elle sur le plateau ?",
      canSiegeInCurrentArea: "Peut-elle assiéger dans la Zone actuelle ?",

      hostileUnits: "Des Unités hostiles ou une Zone à 1–2 espaces ?",
      inclNavalBridge: "Pont Naval inclus",

      isPapalController: "Le Bot est-il Contrôleur papal, peut-il lancer une Croisade, et la cible est-elle musulmane ?",

      triggerBattlePlaceArmy: "Cela déclenche-t-il une Bataille ?",
      triggerBattlePlaceShip: "Cela déclenche-t-il une Bataille ?",
      triggerBattleMoveArmy: "Cela déclenche-t-il une Bataille ?",

      canPlaceShip: "Peut-on placer un Navire qui serait utile, et le Bot n’a-t-il pas encore placé de Navire ce Tour ?",

      placeClaimHere: "Placer une {claim} ici.",

      selectRealmThisClaimDisputedSuccessionValid: "Sélectionner le Royaume pour lequel cette {claim}/{disputedSuccession} est valide.",
      preferOpponent: "Préférer un Adversaire.",

      selectRealmThisClaimValid: "Sélectionner le Royaume pour lequel cette {claim} est valide.",
      preferOpponentThenHighestNPR: "Préférer un Adversaire, puis le NPR ayant la Force la plus élevée.",

      selectEnemyRealmGreatestStrength: "Sélectionner le Royaume ennemi ayant la plus grande Force.",

      forEachSuchAllyRemoveTwoInfluence: "Pour chaque Allié concerné : retirer 2 {influence} des Zones du NPR, gagner 2 {botPower}, puis retourner le jeton {alliance} sur sa face {activeAlly}.",

      ifArmyLessThreeUnits: "Si l’Armée a < 3 Unités : augmenter sa taille à 3 Unités.",

      spendTwoBotCubes: "Dépenser 2 {botPower} pour recruter 7/9/11 Unités.",

      checkForMAC: "Vérifier la MAC.",

      targetMaySendDefensiveCta: "La cible peut envoyer des CtA défensifs (les NPR le font toujours).",

      removeAllBotsInfluences: "Retirer tous les {influence} du Bot de toutes les Zones de la cible.",

      placeArmyOwnAreaClosestToEnemy: "Placer l’Armée dans la Zone du Bot la plus proche de l’Ennemi. Vérifier la MAC.",
      preferAreaWithEnemy: "Préférer une Zone avec un Ennemi, puis la plus proche de l’Ennemi ayant la plus grande Force.",

      moveArmyToEnemyArea: "Déplacer l’Armée vers une Zone ennemie à portée.",
      preferLargestEnemy: "Préférer la plus grande force ennemie qui ne dépasse pas l’Armée du Bot. Puis une Zone avec une {claim} du Bot.",

      placeShipToExtendNavalBridge: "Placer un Navire pour étendre le Pont Naval.",

      placeClaimOnTarget: "Placer une {claim} sur la cible.",
      preferAdjacentThenCapital: "Préférer une Zone adjacente, puis la Capitale.",

      moveArmyToNonHostile: "Déplacer l’Armée jusqu’à 4 espaces vers la Zone non hostile la plus proche de l’Ennemi.",

      placeCrusadeTokenAndClaim: "Placer un jeton de Croisade et une {claim} dans la Zone de la cible. Marquer {prestige1}. Recruter 2 Unités.",

      declareWarOnTarget: "Déclarer la Guerre à la cible. Dépenser 1 {botPower} pour recruter 7/9/11 Unités.",

      goToSiege: "Aller à : SIÈGE",
      gainBotPowerEqualsBotSpent: "Gagner {botPower} = {botPower} dépensé sur la Carte Bot piochée − 1",

      goNavalBattleAfterDow: "Aller à : BATAILLE NAVALE",
      goToNavalBattle: "Aller à : BATAILLE NAVALE",

      goLandBattleAfterDow: "Aller à : BATAILLE TERRESTRE",
      goToLandBattle: "Aller à : BATAILLE TERRESTRE",

      resolveAlphabeticOrder: "Résoudre par ordre alphabétique s’il y a plusieurs Batailles.",

      endTurn: "Fin du Tour",
      gainBotCube: "Gagner 1 {botPower} si le Bot a remporté une Bataille ce Tour.",

      seeDowDescription: "Voir les restrictions de Déclaration de Guerre à la page 22 des règles principales pour déterminer l’éligibilité de la cible.",

      noteStrength: "Force : NPR, voir les règles principales, p. 36 ; PR = nombre d’Unités déployées + {manpower} disponible.",

      botMustRemoveOneFewerInfluence: "Le Bot doit retirer 1 {influence} de moins s’il possède un {royalMarriage} sur le Royaume cible.",

      numberUnitsDeterminedByDifficulty: "Le nombre d’Unités recrutées par {botPower} dépensé est déterminé par le niveau de difficulté choisi.",

      adjustUnitAvailability: "Ajuster la disponibilité des Unités dans l’Armée en fonction de la MAC (voir p. 5)."
    },

    diplomacy: {
      source: "(Cartes Bot : 05, 06, 07, 08)",

      allianceAndRoyalMarriageOnAdjacentNpr: "{alliance} + {royalMarriage} sur un NPR adjacent au Bot ?",
      ignoreDistantNprs: "Ignorer tous les NPR lointains pour cette Action.",

      allianceOnAdjacentNpr: "{alliance} sur un NPR adjacent au Bot ?",

      twoPlusInfluenceNoAllianceAdjacentNpr: "2+ {influence} et aucune {alliance} dans un NPR adjacent au Bot ?",

      selectAdjacentNprHighestBaseTax: "Sélectionner ce NPR ayant la Base Tax la plus élevée.",
      preferNprMarriedToBot: "Préférer un NPR lié au Bot par un Mariage royal.",

      allianceOnNprWithLessThanTwoInfluence: "{alliance} sur un NPR ayant < 2 {influence} ?",

      selectNprHighestBaseTax: "Sélectionner ce NPR ayant la Base Tax la plus élevée.",
      preferAdjacentToBot: "Préférer un NPR adjacent au Bot.",

      anyFreeSpaceInTargetAreas: "Y a-t-il un emplacement libre dans les Zones de la cible ?",

      addTwoInfluenceInTargetAreas: "Ajouter 2 {influence} dans les Zones de la cible.",
      preferTargetCapital: "Préférer la Capitale de la cible.",

      covertActionReplaceOpponentInfluence: "Action secrète : remplacer 2 {influence} de l’Adversaire par 2 {influence} du Bot dans les Zones de la cible.",

      goToDiplomaticTargetChart: "Aller à : DIAGRAMME DE CIBLAGE DIPLOMATIQUE",
      rollForTarget: "lancer pour déterminer la cible",

      allianceOnTargetNpr: "{alliance} sur le NPR cible ?",

      rerollIfPreviousTarget: "lancer pour déterminer la cible ; relancer si elle est identique à une cible précédente de ce Tour",

      botPowerLessThanTargetBaseTax: "Le Bot a-t-il moins de {botPower} que la Base Tax de la cible ?",

      spendTwoBotPowerAddTwoInfluenceInTargetRealm: "Dépenser 2 {botPower} pour ajouter 2 {influence} dans les Zones du Royaume cible.",

      influenceAtLeastNprBaseTaxPlusOpponentInfluence: "Le Bot a-t-il au moins autant de {influence} que la Base Tax actuelle du NPR + les {influence} de l’Adversaire dans les Zones du NPR ?",
      ignorePapalStatesAndImperialInfluence: "Ignorer Papal States et les {influence} impériales.",

      annexNprProvinces: "Annexer toutes les Provinces appartenant à ce NPR. Retirer du Royaume cible les {influence} du Bot correspondant à la Base Tax actuelle de la cible + les {influence} de l’Adversaire. Marquer {prestige3}.",
      preferNprAdjacentByLandThenHighestBaseTax: "Préférer un NPR adjacent par voie terrestre, puis celui ayant la Base Tax la plus élevée.",
      annexNprProvincesNote: "Le Bot doit retirer 1 {influence} de moins s’il possède un {royalMarriage} sur le Royaume cible. Les Vassaux de la cible sont libérés en tant que NPR indépendants.",

      ownsAllProvincesInNewAreaAndLessThanTwoCores: "Le Bot possède-t-il maintenant toutes les Provinces d’une nouvelle Zone, et a-t-il < 2 {core} en jeu ?",

      spendBotPowerPlaceCore: "Si possible, dépenser 1 {botPower} pour placer un {core} dans cette Zone.",
      removeOtherBotsClaimsFromArea: "Retirer tous les {claim} des autres Bots de cette Zone.",

      higherBaseTaxThanNpr: "La Base Tax du Bot est-elle supérieure à celle du NPR ?",

      hasDoubleBaseTaxOfNpr: "La Base Tax du Bot est-elle au moins le double de celle du NPR ?",

      canEnterRoyalMarriage: "Le Bot peut-il conclure un Mariage royal ?",

      selectNprHighestBaseTaxForRoyalMarriage: "Sélectionner ce NPR ayant la Base Tax la plus élevée.",

      addTwoInfluenceInUnusedAreas: "Ajouter 2 {influence} dans des Zones où aucune {influence} n’a été placée pendant ce Tour.",
      preferTargetAreasThenAdjacentToBot: "Préférer les Zones de la cible, puis celles adjacentes au Bot.",

      atPeaceAndHasSixPlusBotPowerLeft: "Le Bot est-il en Paix et lui reste-t-il 6+ {botPower} ?",

      placeRoyalMarriageOnTargetCapital: "Placer un {royalMarriage} sur la Capitale de la cible.",

      alliancePossibleForSelectedNpr: "Alliance possible ?",
      alliancePossibleForAddTwoInfluence: "Alliance possible ?",
      alliancePossibleNote: "Une Alliance requiert : le Bot est en Paix et a < 3 {alliance} en jeu ; la cible est en Paix et n’est pas alliée au Bot ; tout Allié de la cible a moins de {influence} que le Bot dans les Zones de la cible.",

      placeAllianceOnTargetCapital: "Placer une {alliance} sur la Capitale de la cible et y ajouter 1 {influence} s’il reste de la place.",

      diplomaticIdeasInfluenceNote: "Si le Bot a recherché des Idées Diplomatiques, il place des {influence} supplémentaires s’il en possède dans sa Réserve (le Bot ignore la limite de 2 {influence} maximum placées dans une même Zone) :<br>1–2 Idées Diplomatiques : +1 {influence}<br>3+ Idées Diplomatiques : +2 {influence}.",

      endTurn: "Fin du Tour"
    },

    event: {
      source: "(depuis la Structure du tour principal + Carte Bot : 01)",
      alreadyTakenEventAction: "Le Bot a-t-il déjà effectué une Action Event ?",
      restartMainTurn: "Défausser la Carte Bot EVENT. Recommencer : STRUCTURE DU TOUR PRINCIPALE.",
      dieResult: "Résultat du dé",
      pickLeftmostEvent: "Choisir l’Event révélé le plus à gauche. Gagner 1 {botPower} si l’Event comporte {ducats}.",
      pickSecondEvent: "Choisir le deuxième Event révélé en partant de la gauche. Gagner 1 {botPower} si l’Event comporte {ducats}.",
      pickRightmostEvent: "Choisir l’Event révélé le plus à droite. Gagner 1 {botPower} si l’Event comporte {ducats}.",
      opponentEventRevealed: "Un Event d’un Adversaire est-il révélé ?",
      ownEventRevealed: "Un Event du Bot est-il révélé ?",
      atWarWithEventOpponent: "Le Bot est-il en Guerre contre l’Adversaire dont l’Event est révélé ?",
      pickSuchEvent: "Choisir cet Event. Gagner 1 {botPower} si l’Event comporte {ducats}.",
      pickThisEvent: "Choisir cet Event. Gagner 1 {botPower} si l’Event comporte {ducats}.",
      isOpponentsEvent: "S’agit-il de l’Event d’un Adversaire ?",
      resolveOptionA: "Résoudre l’option A) de l’Event.",
      resolveOptionB: "Résoudre l’option B) de l’Event.",
      resolveSecondaryEffects: "Résoudre les Effets secondaires de l’Event.",
      canDevelopLargeTown: "Le Bot a-t-il 10+ {botPower} et moins de 8 Grandes {town} ?",
      developLargeTown: "Dépenser 2 {botPower} pour développer une Petite {town} en Grande {town}.",
      developLargeTownPreference: "Préférer une Province Core, puis une {town} sans {unrest}.",
      endTurn: "Fin du Tour"
    },

    navalBattle: {
      anyEnemyIsPr: "Un Ennemi est-il un PR ?",
      botIsAttacker: "Le Bot est-il l’attaquant ?",
      facingMultiplePrs: "Fait-il face à plusieurs PR ?",
      determineMainDefender: "Déterminer le Défenseur principal.",
      seeMainDefender: "Voir p. 5",
      appointAdmiral: "Le joueur humain peut nommer un Amiral.",
      playBattleActions: "Le joueur humain peut jouer les Actions de Bataille applicables.",
      rollBotBattleDice: "Lancer les dés de Bataille : les humains ne lancent aucun dé.",
      botRollModifiers: "Le(s) Bot(s) lancent :<br>0 Idée Diplomatique : 1 dé d’Artillerie.<br>1+ Idée Diplomatique : 2 dés d’Artillerie.<br>+1 dé par Navire Bot adjacent.<br>-1 dé en cas d’Action de Bataille ou d’Amiral.",
      scoreBotHits: "Le(s) Bot(s) infligent une touche par {battleArtillery} obtenu. Considérer chaque paire de Ports adjacents possédés par un Bot et chaque paire de Navires NPR combattant du côté d’un Bot comme un résultat {battleArtillery}.",
      botVsBot: "Bot contre Bot ?",
      removeLowestHitBotShip: "Retirer le Navire du Bot ayant obtenu le moins de touches.",
      rerollIfTied: "Relancer en cas d’égalité.",
      humanAssignCasualties: "Le joueur humain doit assigner les pertes. Tout Amiral reçoit un {illHealth} par paire de {battleDoubleInfantry} obtenus.",
      alternateShipTypes: "Alterner entre les types de Navires lors de l’assignation des touches.",
      humanHasShipsLeft: "Le joueur humain a-t-il encore des Navires ?",
      humanReward: "Le joueur humain peut recevoir 1 {militaryPower} s’il est le Joueur Actif. Il vole 1 Navire Léger si une Action de Bataille a été jouée ou s’il possède un Amiral.",
      removeBotShip: "Retirer un Navire du Bot.",
      rollAgainstNpr: "Lancer les dés de Bataille : nombre de dés d’Artillerie = nombre de Navires hostiles.",
      nprHitsEnough: "{battleArtillery} obtenus ≥ 2 + nombre de Ports Bot adjacents ?",
      resolvingBotReward: "Le Bot qui résout la bataille reçoit 1 {botPower} s’il s’agit de sa première Bataille gagnée ce Tour.",
      endBattle: "Fin de la Bataille",
      notes: {
        firstBattleVictory: "Le 1 {botPower} gagné pour la première Bataille remportée au cours d’un Tour par le Bot qui la résout (Joueur Actif) est, dans la plupart des cas, déjà indiqué dans le diagramme de l’Action Bot concernée."
      }
    },

    landBattle: {
      anyEnemyIsPr: "Un Ennemi est-il un PR ?",
      botIsAttacker: "Le Bot est-il l’attaquant ?",
      facingMultiplePrs: "Fait-il face à plusieurs PR ?",
      determineMainDefender: "Déterminer le Défenseur principal.",
      seeMainDefender: "Voir p. 5",
      battleInDefendersRealm: "La Bataille se déroule-t-elle dans le Royaume du Défenseur (principal) ?",
      appointGeneral: "Le joueur humain peut nommer un Général.",
      accountMilitaryIdeas: "Prendre en compte les Idées Militaires.",
      militaryIdeasExample: "par ex. « Noble Knights ».",
      playBattleActions: "Le joueur humain peut jouer des Actions de Bataille.",
      rollAgainstPr: "Lancer les dés de Bataille : les humains lancent leurs dés normalement.",
      botRollModifiers: "Le(s) Bot(s) lancent :<br>0 Idée Militaire : 5 dés d’Infanterie.<br>1+ Idée Militaire : 6 dés d’Infanterie.",
      assignCasualties: "Assigner les pertes normalement.",
      seeCasualtyRules: "Voir les Règles principales, p. 27",
      generalIllHealth: "Le Général du joueur humain reçoit un {illHealth} par paire de {battleDoubleInfantry} obtenus par le Bot.",
      anyBotHasUnitsRemaining: "Un Bot a-t-il encore des Unités ?",
      bothSidesHaveUnitsRemaining: "Les deux camps ont-ils encore des Unités ?",
      humanReward: "Le joueur humain, s’il est le Joueur Actif, reçoit 1 {militaryPower} s’il s’agit de sa première Bataille gagnée ce Tour.",
      resolvingBotReward: "Si le Bot qui résout la bataille possède encore des Unités et qu’il s’agit de sa première Bataille gagnée ce Tour, il reçoit 1 {botPower}.",
      rollAgainstNonPr: "Lancer les dés de Bataille :<br># dés d’Infanterie = # Unités hostiles<br>Assigner les pertes :<br># pertes du Bot = # {battleInfantry}/{battleDoubleInfantry} obtenus",
      botHasUnitsRemaining: "Le Bot a-t-il encore des Unités ?",
      removeAllHostileNonPrUnits: "Retirer toutes les {rebelUnit}/Unités NPR.",
      removeNprAndRebels: "Retirer toutes les Unités NPR. Retirer un nombre de {rebelUnit} égal à la moitié du nombre initial d’Unités de l’Armée du Bot.",
      removeDefeatedArmies: "Retirer du plateau les Armées vaincues.",
      endBattle: "Fin de la Bataille",
      notes: {
        firstBattleVictory: "Le 1 {botPower} gagné pour la première Bataille remportée au cours d’un Tour par le Bot qui la résout (Joueur Actif) est, dans la plupart des cas, déjà indiqué dans le diagramme de l’Action Bot concernée."
      }
    },

    explore: {
      source: "(depuis les Actions NAVAL et COLONIZE + Carte Bot : 11)",
      has3ColonialClaims: "Le Bot a-t-il 3+ {claim} coloniales ?",
      vacantTerritoryAdjacentTown: "Un Territoire vacant avec un « 1 » est-il adjacent à une {town} du Bot ?",
      vacantTerritoryAdjacentShips: "Un Territoire vacant avec un « 1 » est-il adjacent aux Navires du Bot ?",
      hasQuestForNewWorld: "Le Bot possède-t-il l’Idée « Quest for the New World » ?",
      researchQuestForNewWorld: "Rechercher gratuitement l’Idée « Quest for the New World ».",
      researchQuestForNewWorldDetail: "Marquer normalement le {prestige} et mettre à jour la piste d’Idées du Bot.",
      canPlaceShipToExplore: "Peut-on placer un Navire dans une Zone maritime depuis laquelle il peut Explorer ?",
      placeShipToExplore: "Placer un Navire dans une telle Zone maritime.",
      preferNewDistantTradeNode: "Préférer une Zone adjacente à un nouveau Nœud Commercial lointain lorsque c’est possible.",
      triggersNavalBattle: "Cela déclenche-t-il une Bataille navale ?",
      rollExploreDie: "Lancer le dé d’Exploration",
      has2BotPowerLeft: "Reste-t-il 2+ {botPower} ?",
      spend1BotPower: "Dépenser 1 {botPower}.",
      removeShipFromDistantContinent: "Retirer un Navire d’un Continent lointain.",
      ifAny: "S’il y en a un.",
      rollMatchesEligibleTerritory: "Le résultat du dé correspond-il à un Territoire éligible ?",
      placeClaimEligibleTerritory: "Placer une {claim} sur un Territoire éligible. Marquer {prestige2}.",
      anyEligibleDistantProvinces: "Y a-t-il des Provinces lointaines éligibles à découvrir ?",
      placeClaimDistantProvince: "Placer une {claim} sur une telle Province lointaine.",
      preferDistantProvince: "Préférer une Province adjacente au Bot par voie terrestre, puis le Royaume lointain ayant la Base Tax la plus élevée.",
      addMatchingTradeCards: "S’il s’agit de la première {claim} sur ce Continent lointain, ajouter toutes les cartes Trade correspondantes.",
      couldPlaceShipWithin3Spaces: "Placer un Navire pourrait-il amener le Bot à 3 espaces ou moins d’une nouvelle Zone maritime Explorable ?",
      colonialClaimConnected: "Une {claim} coloniale est-elle reliée à la Zone de la Capitale par une chaîne de Zones contenant des {town} du Bot et/ou des Navires ?",
      has2Colonists: "Le Bot a-t-il 2+ {colonist} ?",
      couldPlaceShipCloserConnection: "Placer un Navire pourrait-il rapprocher le Bot de l’établissement d’une connexion ?",
      placeShipQualifies: "Placer un Navire dans une Zone maritime qui convient.",
      preferShortestRoute: "Préférer le trajet le plus court.",
      gainBotPowerAndColonist: "Gagner 1 {botPower} + 1 {colonist}.",
      scorePrestigeAndDiscard: "Marquer {prestige} = 2 + {colonist}. Défausser les {colonist} du Bot + la {claim} coloniale.",
      goToNavalBattle: "Aller à : NAVAL BATTLE",
      gain1BotPowerIfVictorious: "Gagner 1 {botPower} en cas de victoire.",
      goToColonize: "Aller à : COLONIZE",
      endTurn: "Fin du Tour",

      notes: {
        ignoreClaimedTerritories: "Ignorer les Territoires sur lesquels le Bot possède déjà une {claim}.",
        questForNewWorldEvent: "Si le Bot est Castille (ou Portugal), que le Bot n’a pas recherché « QftNW », que le Bot n’a pas encore choisi d’Event et que l’Event Christopher Columbus (ou Casa da India) est exposé : choisir alors cet Event et sélectionner l’option A. Payer cette Action compte comme le paiement du coût en {botPower} de la recherche de « QftNW ».",
        eligibleDistantLocation: "La Province/le Territoire lointain doit être adjacent à une {town} du Bot ou à un Navire. Les Territoires doivent correspondre au nombre obtenu au dé.",
        addMatchingTradeCards: "Mélanger dans le paquet Trade toutes les cartes Trade mises de côté correspondant au nombre de ce Continent lointain."
      }
    },

    naval: {
      source: "(Cartes Bot : 09, 10 ; Cartes Bot, Action de Guerre : 11)",

      hostileSeaZoneAdjacent: "Une Zone maritime hostile est-elle adjacente aux Ports ou aux Navires du Bot ?",
      placeShipHostileSeaZone: "Placer un Navire dans une telle Zone maritime.",
      preferBotPort: "Préférer une Zone adjacente à un Port du Bot, puis par ordre alphabétique.",

      goToNavalBattle: "Aller à : NAVAL BATTLE",
      gainBotPowerIfVictorious: "Gagner 1 {botPower} en cas de victoire.",

      emptySeaZoneAdjacentPorts: "Une Zone maritime sans Navire du Bot est-elle adjacente aux Ports du Bot ?",
      has5ShipsMainMap: "Le Bot a-t-il 5+ Navires sur la carte principale ?",
      emptyMainMapSeaZoneAdjacentShips: "Une Zone maritime de la carte principale sans Navire du Bot est-elle adjacente à l’un des Navires du Bot ?",

      placeShipAvailableSeaZone: "Placer un Navire dans une telle Zone maritime.",
      preferTradeNodes: "Préférer une Zone adjacente au plus grand nombre de Nœuds commerciaux, puis par ordre alphabétique.",

      shipAdjacentPirates: "Un Navire du Bot est-il adjacent à des Pirates ?",

      removePirates: "Retirer tous les Pirates de ce Nœud commercial.",
      preferPirateTradeNode: "Préférer le Nœud où se trouve un Marchand du Bot, puis celui avec le moins de Marchands.",

      drawTradeCardBots: "Piocher une carte Trade : tous les Bots éligibles pour commercer dans un Nœud indiqué sur cette carte commercent dans le premier Nœud de la carte pour lequel ils remplissent les conditions. Pour les Nœuds intérieurs, les Bots doivent également posséder une {town} adjacente. Les Bots gagnent 3 {ducats} s’il s’agit d’un Nœud lointain et 2 {ducats} sinon.",

      drawTradeCardHumans: "Chaque joueur humain peut percevoir un Revenu commercial depuis n’importe quel Nœud éligible de cette carte où il possède un Marchand. Le Bot qui résout l’action gagne {prestige2} par joueur humain qui perçoit un Revenu.",

      moveMerchant: "Déplacer le Marchand des Bots ayant gagné {botPower} vers le premier Nœud valide de la carte.",

      hasPlacedShipThisTurn: "Le Bot a-t-il placé un Navire ce Tour ?",

      canExplore: "Le Bot a-t-il moins de 3 {claim} coloniales et un Navire dans, ou adjacent à, une Zone maritime Explorable ?",

      goToExplore: "Aller à : EXPLORE",

      endTurn: "Fin du Tour",

      notes: {
        ignoreDistantSeaZones: "Ignorer les Zones maritimes lointaines si le Bot ne possède pas « QftNW ».",
        piratesReduceIncome: "Le revenu en {ducats} du Bot est réduit de 1 pour chaque Pirate présent dans le Nœud où il commerce.",
        noPrestigeWithoutMissions: "Si la partie se joue sans Missions pour les joueurs humains, ne donner aucun {prestige} aux Bots pendant cette étape."
      }
    },

    peace: {
      intro: "Suivre la séquence normale de Résolution de paix (règles principales p. 29) et utiliser ce diagramme chaque fois que c'est au tour d'un Bot de résoudre l'une de ses Guerres.",

      automaticWhitePeace: "Paix blanche automatique ?",

      totalVictoryAgainstNpr: "Le Bot a-t-il remporté une Victoire totale contre un Ennemi NPR ?",

      annexEnemyNpr: "Annexer toutes les Provinces de jure de l'Ennemi contrôlées par l'Ennemi ou le Bot (placer une {town}). Les Vassaux non occupés sont libérés en tant que NPR. Marquer {prestige} = Tax Value des Provinces annexées.",
      
      removeOtherTokensAnnexedProvinces: "Retirer tous les autres jetons de toutes les Provinces annexées.",

      atWarHumanPlayer: "En Guerre contre un joueur humain ?",

      enemyPrSurrenders: "Le PR ennemi se rend-il ?",

      surrenderReturnProvinces: "Rendre toutes les Provinces à leurs Propriétaires légitimes. Le Bot gagne et l'Ennemi perd {prestige2}, plus {prestige2} par Tax Value rendue par le Bot à l'Ennemi (max. 12 {prestige}).",

      armyAtLeastDoubleEnemyPr: "Armée ≥ 2x les Unités terrestres déployées par le PR ennemi ?",

      enemyPrLowIncomeNoBotTowns: "Le PR ennemi a-t-il actuellement une Tax Income inférieure à 8 et n'occupe-t-il aucune {town} du Bot ?",

      returnUpTo5TaxValue: "Rendre à l'Ennemi des Provinces (Capitale comprise) représentant jusqu'à 5 Tax Value. Gagner {prestige2} par Tax Value rendue.",

      atWarAnotherBot: "En Guerre contre un autre Bot ?",

      armyGreaterEnemyBot: "Armée > Armée du Bot ennemi ?",

      atWarNpr: "En Guerre contre un NPR ?",

      armyGreaterRebelUnits: "Armée > {rebelUnit} dans les Zones du Bot ?",

      occupiedTaxValueGreater: "Tax Value des Provinces de jure ennemies occupées par le Bot > Tax Value des {town} du Bot occupées par l'Ennemi ?",

      occupiedTaxValueGreaterOrEqual: "Tax Value des Provinces de jure ennemies occupées par le Bot ≥ Tax Value des {town} du Bot occupées par l'Ennemi ?",

      has2UnrestWithoutClaim: "Y a-t-il 2+ {unrest} dans des Zones sans {claim} ?",

      offerWhitePeace: "Le Bot propose une Paix blanche.",

      whitePeaceAccepted: "La Paix blanche est-elle acceptée par l'Ennemi ?",

      returnAllProvincesLawfulOwners: "Rendre toutes les Provinces à leurs Propriétaires légitimes.",

      endWarPrestigeLoss: "Mettre fin à la Guerre. Les PR (Bots compris) perdent chacun {prestige1}.",

      offerKeepCurrentBoardState: "Le Bot propose une Paix aux conditions Keep Current Board State.",

      peaceTermsAccepted: "Les conditions de Paix sont-elles acceptées par l'Ennemi ?",

      anyoneOccupiesEnemyCapital: "Quelqu'un occupe-t-il la Capitale de l'Ennemi ?",

      capitalReturnEffects: "Tout Bot rendant sa Capitale à l'Ennemi gagne {prestige2} et 4 {botPower}. Tout Bot récupérant sa Capitale perd 2 {botPower}. Les joueurs humains paient/reçoivent 10 {ducats} normalement.",

      enemyOccupiesBotTowns: "L'Ennemi occupe-t-il des {town} du Bot ?",

      swapIntro: "Si possible, échanger :",
      swapEnemyOccupiedByBot: "{town}/{vassal} ennemie occupée par le Bot",
      swapBotOccupiedByEnemy: "{town} du Bot occupée par l'Ennemi",
      swapMatchingTaxValue: "(de Tax Value totale équivalente)",

      endWarKeepCurrentBoardState: "Mettre fin à la Guerre et conserver l'état actuel du plateau. Marquer {prestige} = Tax Value des Provinces Core ennemies conservées.",

      noPeaceConcluded: "Aucune Paix conclue.",

      willNotOfferPeace: "Le Bot ne proposera ni n'imposera de Paix.",

      truceAndClaims: "Si l'Ennemi existe toujours, retourner les jetons de Guerre sur leur face Trêve. Les PR des deux camps peuvent ajouter une {claim} là où ils ont perdu une {town}.",
      
      botsAddMaxOneClaim: "Les Bots ajoutent au maximum 1 {claim}.",

      cleanupClaimsCores: "Retirer les {claim} du Bot des Zones où le Bot possède désormais toutes les Provinces. Pour chaque {claim} retirée, retirer 2 {unrest} de la Zone de cette {claim} et marquer {prestige2}. Si possible, et avec moins de 2 {core} en jeu, dépenser 1 {botPower} pour placer une {core} ici.",

      remainingWars: "Reste-t-il des Guerres à résoudre pendant cette étape de Résolution de paix ?",

      endResolution: "Fin de la Résolution de paix du Bot",

      notes: {
        totalVictoryAgainstNpr: "Le Bot doit occuper la Capitale du NPR et des Provinces représentant une Tax Value ≥ ½ de la Force du NPR avant la Guerre.",
        distantUnitsDoNotCount: "Les Unités situées sur des Continents lointains où le Bot ne possède pas de {town} ne comptent pas.",
        whitePeaceAcceptance: "Les NPR acceptent toujours. Les Bots ennemis acceptent s'ils ne peuvent pas imposer la Paix et ont 2+ {unrest} dans des Zones où ils ne possèdent pas de {claim}.",
        keepCurrentBoardStateAcceptance: "Les Bots ennemis n'acceptent ces conditions que si les Armées des deux Bots sont de taille égale et si la Tax Value des Provinces occupées par chaque camp est égale.",
        removeOtherBotClaims: "Retirer toutes les {claim} des autres Bots des Zones où des {core} sont placées."
      }
    },

    peaceRebels: {
      title: "Phase de Paix et des Rebelles",
      intro: "Les Bots résolvent chaque étape comme indiqué ci-dessous.",
      completePhase: "Terminer la Phase",

      normalRulesReminder: "Règles principales, p. 9",

      goToLandBattle: "Aller à : BATAILLE TERRESTRE",
      goToBotPeaceResolution: "Aller à : RÉSOLUTION DE PAIX DU BOT",

      removeCasusBelliAndTruces: {
        title: "Retirer les Casus Belli et les Trêves",
        text: "Les Bots retirent les Trêves normalement. Les Bots n'ont jamais de jetons CB."
      },

      nprInvasions: {
        title: "Invasions NPR",
        text: "Les Bots peuvent subir au maximum 1 Invasion NPR. Résoudre l'Invasion NPR qui envahira avec le plus grand nombre d'Unités NPR (résoudre les égalités par ordre alphabétique), puis placer l'Armée du Bot dans la Zone cible et résoudre la Bataille."
      },

      rebelsSiegeOrMove: {
        title: "Siège ou déplacement des Rebelles",
        text: "Résoudre normalement.",

        reminderIntro: "S'il y a des {rebelUnit} sur le plateau, résoudre les étapes suivantes dans l'ordre. À chaque étape, résoudre les Zones de celle qui contient le plus de {rebelUnit} à celle qui en contient le moins, en départageant les égalités par ordre alphabétique.",

        withUnrest: "1. Zones avec à la fois des {rebelUnit} et de l'{unrest} : les {rebelUnit} assiègent toute {town} ou tout {core} avec de l'{unrest} qu'elles peuvent atteindre. Chaque {rebelUnit} a une Force de Siège de 1. Assiéger d'abord les Grandes Provinces si possible, puis par ordre alphabétique.",

        coreProvinces: "Provinces avec Core : placer une {rebelTown} par-dessus la {town} du propriétaire et couvrir avec un cube l'emplacement libre le plus à droite de sa Town Track.",

        nonCoreProvinces: "Les Provinces sans Core sont Libérées : remettre la {town} ou le {core} sur le plateau du joueur propriétaire et placer un jeton CB sur le nouveau propriétaire de la Province.",

        withoutUnrestMove: "2. Zones avec des {rebelUnit} mais sans {unrest} : déplacer toutes les {rebelUnit} sauf 1 vers une Zone avec de l'{unrest} adjacente par voie terrestre, si possible. Préférer la Zone avec le plus d'{unrest}, puis le plus de {town} de PR, puis l'ordre alphabétique. Les {rebelUnit} ne peuvent pas entrer dans une Zone où elles sont moins nombreuses que les Unités terrestres des PR.",

        withoutUnrestBattle: "Résoudre immédiatement une Bataille s'il y a des Unités terrestres de PR dans cette Zone, en suivant les règles normales des Rebelles. Les Rebelles ne combattent pas les autres Unités rebelles.",

        withoutUnrestRemove: "Si aucune {rebelUnit} n'a été déplacée lors de l'étape précédente, retirer 1 {rebelUnit} du plateau."
      },

      peaceResolution: {
        title: "Résolution de paix",

        turnOrder: "Effectuer normalement dans l'ordre du Tour.",

        humanPlayers: "Les joueurs humains peuvent résoudre la Paix avec les Ennemis Bots comme indiqué dans les règles principales.",

        botTurn: "Lorsque vient le tour d'un Bot de résoudre la Paix, utiliser le diagramme de la page 15.",

        removeArmy: "Si un Bot est désormais en Paix, retirer l'Armée du Bot de la carte, sauf si le Bot possède des {town} avec {unrest} ou {rebelTown} dans la Zone où se trouve son Armée.",

        fullyAnnexed: "Si un Bot est entièrement Annexé par un PR, voir « Replacing Bot Realms » à la page 6."
      },

      prestigePenalties: {
        title: "Pénalités de Prestige",
        text: "Résoudre normalement.",

        disputedSuccessionReminder: "Succession contestée : retourner tous les jetons {royalMarriage} qui montrent encore leur face {disputedSuccession}. Perdre {prestige3} pour chacun d'eux. Cette pénalité peut être évitée si le joueur est le seul PR possédant une {alliance} ou un {royalMarriage} sur la Capitale de ce Royaume et possède également le plus d'{influence} dans ce Royaume (au minimum 2 {influence} s'il s'agit d'un NPR).",

        occupiedTownsReminder: "Villes occupées : les joueurs dont les {town} sont désormais Occupées par des Ennemis ou des Rebelles perdent un nombre de points de Prestige égal à leur Valeur de Taxe, avec un maximum de 5."
      },

      interregnums: {
        title: "Interrègnes",
        text: "Les Bots ne sont pas affectés par cette étape."
      },

      religiousDissent: {
        title: "Dissidence religieuse",
        text: "Les Bots gagnent au maximum 1 {unrest} lors de cette étape."
      },

      gainRemoveUnrest: {
        title: "Gagner/Retirer de l'Agitation",
        text: "Les Bots gagnent 2 {unrest} parce qu'ils sont en Guerre. Ensuite, si un Bot possède des Idées administratives, il retire 1–2 {unrest} en conséquence."
      },

      rollRebelDice: {
        title: "Lancer les dés de Rebelles",
        text: "Les Bots résolvent cette étape comme indiqué dans « Rebel Dice Rolls », à la page 4.",

        botRulesTitle: "Règles des dés de Rebelles pour les Bots",

        allAtOnce: "Lancer les dés de Rebelles pour toute l'{unrest} du Bot en une seule fois, et non Zone par Zone. Lancer au maximum 5 dés de Rebelles.",

        maxBotPowerLoss: "Un Bot peut perdre au maximum 1 {botPower} chaque fois qu'il doit lancer les dés de Rebelles, quel que soit le nombre de dés lancés.",

        choiceProcess: "Utiliser le processus de choix standard du Bot pour appliquer les Rébellions et retirer de l'{unrest}. Toutefois, appliquer si possible les Rébellions dans la Zone où se trouve l'Armée du Bot.",

        liberatedProvince: "Si l'une des Provinces du Bot est Libérée par les Rebelles, placer une {claim} dans cette Zone.",

        resultsTitle: "Résultats du dé de Rebelles",

        resultRebellion: "{rebelDieRebellion} Rébellion",

        resultLoseBotPower1: "{rebelDieLoseBotPower1} Perdre 1 {botPower}",

        resultLoseBotPower2: "{rebelDieLoseBotPower2} Perdre 1 {botPower}",

        resultLoseBotPower3: "{rebelDieLoseBotPower3} Perdre 1 {botPower}",

        resultNoEffect: "{rebelDieNoEffect} Aucun effet",

        resultRemoveUnrest: "{rebelDieRemoveUnrest} Retirer 1 {unrest}"
      }
    },

    incomeUpkeep: {
      title: "Phase de Revenus et d'Entretien",

      intro:
        "Les Bots n'effectuent que les étapes spécifiques aux Bots indiquées ci-dessous. Les Power Struggles et les Croisades sont scorés normalement ; un rappel est fourni à la fin.",

      completePhase: "Terminer la Phase",

      refreshBotPower: {
        title: "Rafraîchir la Puissance du Bot",

        text: "Défausser toute la {botPower} dépensée et reconstituer la {botPower} disponible selon le niveau de difficulté choisi.",

        townBonus: "Les Bots gagnent +1 {botPower} s'ils ont au moins 20 Petites Villes ou 8 Grandes Villes en jeu (+2 {botPower} si les deux conditions sont remplies).",

        difficultyTitle: "Puissance du Bot selon la difficulté",

        difficultyEasy: "Facile : 6 {botPower}",

        difficultyNormal: "Normal : 7 {botPower}",

        difficultyHard: "Difficile : 8 {botPower}",

        difficultyVeryHard: "Très difficile : 9 {botPower}"
      },

      botEmperor: {
        title: "Bot Empereur — Autorité impériale et Puissance du Bot",

        adjustAuthority: "Si l'Empereur est un Bot, lancer un dé pour déterminer si l'{imperialAuthority} augmente ou diminue, comme indiqué pour les Empereurs NPR.",

        mainRulesReference: "Règles principales, p. 45",

        roll1: "Résultat 1 : diminuer l'{imperialAuthority} de 1.",

        roll2To5Lower: "Résultat 2–5 : diminuer l'{imperialAuthority} de 1 si le résultat est inférieur d'au moins 2 à l'{imperialAuthority} actuelle.",

        roll2To5Higher: "Résultat 2–5 : augmenter l'{imperialAuthority} de 1 si le résultat est supérieur d'au moins 2 à l'{imperialAuthority} actuelle.",

        roll6: "Résultat 6 : augmenter l'{imperialAuthority} de 1.",

        gainBotPower: "Un Bot Empereur gagne ensuite un supplément de {botPower} égal à la {diplomaticPower} + {militaryPower} fournies par le niveau actuel d'{imperialAuthority}.",

        gainPrestige: "Un Bot Empereur gagne {prestige1} s'il est à +6 {imperialAuthority}."
      },

      papalControllerBonuses: {
        title: "Bonus du Contrôleur papal",

        botPower: "Si le Bot est le Contrôleur papal, il gagne 1 {botPower}.",

        prestige: "S'il possède un Contrôle incontesté de la Curie, il marque également un nombre de points de Prestige égal au nombre de PR catholiques moins un (max. {prestige3})."
      },

      scoring: {
        title: "Scorer les Power Struggles et les Croisades",

        intro: "Scorer normalement les Power Struggles actifs et les Croisades.",

        powerStrugglesReference: "Règles principales, p. 43",

        powerStrugglesIntro: "Tout Power Struggle actif est scoré pendant la Phase de Revenus et d'Entretien avant d'être défaussé. Tous les joueurs qui remplissent ses conditions marquent du Prestige comme indiqué ci-dessous.",

        powerStrugglesBattlegroundTax: "Pour chaque Battleground Area, marquer {prestige1} par point de Valeur de Taxe des Provinces contrôlées dans cette Zone. La Valeur de Taxe des {vassal} compte pour moitié.",

        powerStrugglesOnlyPr: "Marquer {prestige1} si le joueur est le seul PR à posséder une {town} ou un {vassal} dans cette Zone. Ceci ne s'applique qu'aux Battleground Areas de la Main Map.",

        powerStrugglesDiplomacy: "Marquer {prestige1} si le joueur possède au moins une {alliance} ou un {royalMarriage} dans cette Zone.",

        powerStrugglesAdditional: "Appliquer les éventuels critères de Prestige supplémentaires indiqués pour ce Power Struggle. Les joueurs qui remplissent ces critères peuvent marquer du Prestige supplémentaire, tandis que certains critères peuvent entraîner une perte de Prestige.",

        crusadeReference: "Règles principales, p. 46",

        crusadeIntro: "Le Scoring de Croisade a lieu pendant la Phase 4, étape E, lorsque le jeton de Croisade est présent sur le plateau. Retirer le jeton une fois le Scoring de Croisade terminé.",

        crusadeSuccess: "Chaque Royaume catholique Committed to Crusade marque {prestige2} s'il possède des Unités dans la Zone cible de la Croisade et qu'il n'y reste aucune Province possédée par un Royaume musulman.",

        crusadeFailure: "Dans le cas contraire, chaque Royaume catholique Committed to Crusade perd {prestige2}.",

        crusadeNoCommitment: "Si aucun Royaume n'est Committed to Crusade à ce moment, le Contrôleur papal perd {prestige2}."
      }
    },

    cleanupPhase: {
      title: "Phase de Cleanup",

      intro:
        "Les Bots n'effectuent que les étapes ci-dessous. Le Status Mat est mis à jour normalement.",

      completePhase: "Terminer la Phase",

      statusMat: {
        reference: "Règles principales, p. 10",

        text: "Transmettre le jeton First Player au joueur dont le marqueur Round Status se trouve sur l'emplacement Has Passed – 1st (ou sur le 2nd emplacement si le premier joueur à avoir Passé est l'actuel First Player), puis remettre tous les marqueurs Round Status sur l'emplacement Event not Taken."
      },

      updateManpowerReserve: {
        title: "Mettre à jour la réserve de Manpower",

        text: "Mettre à jour la {manpower} du Bot pour qu'elle corresponde à sa Town Track et à l'{imperialAuthority}, comme normalement. La {manpower} minimale du Bot est de 3. Si la {manpower} a diminué, toujours renvoyer en premier des Unités de la réserve de Manpower vers la Supply.",

        reference: "Règles principales, p. 10",

        reminder: "Normalement, mettre à jour la réserve de Manpower pour refléter toute modification de son total. Les Unités régulières déployées comptent dans ce total. Si la Manpower augmente, ajouter des Unités de la Supply à la Manpower disponible. Si elle diminue, des Unités doivent être renvoyées vers la Supply."
      },

      colonists: {
        title: "Colonists",

        text: "Les Bots gagnent des {colonist} pour leurs {claim} coloniales comme normalement. Défausser les {colonist} d'un Bot s'il ne possède aucune {claim} coloniale et qu'il n'existe plus de Territory vacant.",

        reference: "Règles principales, p. 10",

        reminder: "Ajouter à la Colonist Pool un nombre de {colonist} égal au nombre de {claim} coloniales présentes sur le plateau. Un Royaume peut ajouter au maximum 4 {colonist}."
      },

      alliancesEnd: {
        title: "Fin des Alliances Bot-to-PR",

        text: "Toutes les {alliance} entre les Bots et les PR, s'il y en a, prennent fin et ces jetons {alliance} sont retirés. Cela n'entraîne aucune autre conséquence pour les deux parties."
      },

      botEmperor: {
        title: "Bot Empereur — Influence impériale",

        intro: "Si l'Empereur est un Bot, ajuster son {influence} impériale pour qu'elle corresponde à l'{imperialAuthority} actuelle, puis la redistribuer selon les priorités ci-dessous. Répéter chaque priorité jusqu'à ce qu'il n'existe plus de Zone valide pour celle-ci, ou qu'il ne reste plus d'{influence} impériale, avant de passer à la priorité suivante. En cas d'égalité, préférer les Zones avec une {alliance} du Bot, puis l'ordre alphabétique.",

        priorityTitle: "Priorités de l'Influence impériale",

        priority1: "La Zone d'Électeur dans laquelle le Bot a besoin du moins d'{influence} impériale pour y posséder le plus d'{influence} — davantage que n'importe quel autre PR.",

        priority2: "Toute Zone d'Électeur disposant d'un emplacement libre.",

        priority3: "Toute Zone HRE disposant d'un emplacement libre."
      },

      reshuffleBotDeck: {
        title: "Remélanger le Bot Deck",

        intro: "Les Bot Cards utilisées sont remélangées dans le deck selon les règles suivantes.",

        rulesTitle: "Remélange du Bot Deck",

        events: "Les EVENTs sont toujours remélangés.",

        ideas: "Les IDEAs sont toujours remélangées.",

        focus: "Mettre de côté les Bot Cards qui ont été utilisées pour l'Action FOCUS. Elles ne sont pas remélangées.",

        remaining: "Remélanger la moitié des autres Bot Cards utilisées, en arrondissant au supérieur.",

        removedCards: "Toutes les cartes qui ne sont pas remélangées sont retirées pour le reste de l'Age en cours."
      }
    },

    endOfAge: {
      title: "Routine de Fin d'Age",

      intro:
        "À la fin de chaque Age, résoudre les règles spécifiques aux Bots puis la routine normale de Fin d'Age ci-dessous.",

      completePhase: "Terminer la Routine",

      mainRulesReference:
        "Règles principales, p. 11",

      resetBotDeck: {
        title: "Réinitialiser le Bot Deck",

        text: "Réinitialiser toutes les Bot Cards selon la composition de deck indiquée pour ce Bot Realm, puis mélanger l'ensemble du Bot Deck."
      },

      prepareNextAge: {
        title: "Préparer l'Age suivant",

        eventDeck: "Préparer et placer l'Event Deck de l'Age suivant.",

        noNextAge: "S'il n'y a pas d'Age suivant, passer directement au Final Scoring.",

        milestones: "Retirer du jeu tous les Milestones de l'Age précédent et les remplacer par 4 Milestones piochés dans le deck correspondant à l'Age suivant.",

        ideas: "Ajouter aux Idea decks les Ideas qui deviennent éligibles avec l'Age suivant. Puis remplacer toute Idea non-Basic non recherchée présente sur le display par une Idea aléatoire du même type."
      },

      leastPrestige: {
        title: "Joueur avec le moins de Prestige",

        text: "Le joueur ayant le moins de Prestige peut remplacer 1 nouvelle Idea ou 1 nouveau Milestone présent sur le display par une carte de son choix provenant du deck correspondant.",

        tie: "En cas d'égalité pour le plus faible Prestige, ignorer cette étape."
      },

      royalMarriages: {
        title: "Royal Marriages",

        botRule: "Les Bots ne retirent aucun de leurs {royalMarriage}.",

        scorePrestige: "Un joueur possédant au moins 1 {royalMarriage} en jeu marque {prestige1}.",

        normalRule: "Normalement, ce joueur doit ensuite retirer 1 {royalMarriage} du plateau, depuis un NPR si possible, ou payer 2 Ducats pour éviter de le retirer.",

        reciprocalRemoval: "Si un autre joueur retire son {royalMarriage} de votre Royaume et vous oblige ainsi à retirer le {royalMarriage} réciproque de son Royaume, vous devez tout de même retirer un autre {royalMarriage}, si vous en possédez un, ou payer 2 Ducats."
      }
    },

    finalScoringPhase: {
      title: "Final Scoring",

      intro:
        "Les Bots scorent le Prestige exactement comme les joueurs humains. Utiliser les règles normales de Final Scoring ci-dessous.",

      completePhase: "Terminer le Final Scoring",

      mainRulesReference:
        "Règles principales, p. 11",

      startFinalScoring: {
        title: "Déclenchement du Final Scoring",

        intro: "Le Final Scoring est normalement déclenché à la fin du dernier Round, après avoir terminé la Phase 5, lorsqu'une des conditions suivantes est remplie :",

        noEvents: "Il ne reste plus aucune Event Card dans les decks du scénario choisi à la fin d'un Round.",

        prestigeLead: "Un joueur possède au moins 100 Prestige et a au moins 20 Prestige d'avance sur tous les autres joueurs.",

        allTownsAndVassals: "Un joueur possède toutes ses {town} (Grandes et Petites) et tous ses {vassal} sur le plateau à la fin de la Phase 5."
      },

      scorePrestige: {
        title: "Scorer le Prestige",

        missions: "Révéler et scorer les Missions en main dont les conditions sont remplies. Ignorer les Mission Effects.",

        taxIncome: "Scorer un nombre de points de Prestige égal à la Base Tax + Vassal Tax actuelles.",

        cores: "Scorer {prestige1} par {core} en jeu.",

        royalMarriages: "Scorer {prestige1} par {royalMarriage} en jeu.",

        alliances: "Scorer {prestige2} par {alliance} en jeu.",

        papalController: "Le Papal Controller score un nombre de points de Prestige égal au nombre de PR catholiques.",

        emperor: "L'Empereur du HRE score un nombre de points de Prestige égal à l'{imperialAuthority} actuelle.",

        stability: "Scorer un nombre de points de Prestige égal à 2 × la {stability} actuelle. Une {stability} négative donne donc du Prestige négatif."
      },

      prestigePenalties: {
        title: "Pénalités de Prestige",

        occupiedTowns: "Soustraire {prestige1} par point de Tax Value de chaque {town} Occupied par des Rebelles ou des Ennemis.",

        interest: "Soustraire {prestige1} par {interest} dans la Treasury."
      },

      determineWinner: {
        title: "Déterminer le vainqueur",

        mostPrestige: "Le joueur possédant le plus de Prestige remporte la partie.",

        monarchPower: "En cas d'égalité, le joueur possédant le plus de {monarchPower} l'emporte.",

        ducats: "Si l'égalité persiste, le joueur possédant le plus de {ducats} dans sa Treasury l'emporte.",

        sharedVictory: "Si l'égalité persiste encore, les joueurs à égalité partagent la victoire."
      }
    },

    actionNames: {
      event: "Événement",
      military: "Militaire",
      diplomacy: "Diplomatie",
      naval: "Naval",
      explore: "Exploration",
      colonize: "Colonisation",
      unrest: "Agitation",
      papalCuria: "Curie papale",
      convert: "Conversion",
      idea: "Idée",
      spy: "Espionnage",
      focus: "Focus",
      focusEconomy: "Focus (Éco.)",
      focusExpansion: "Focus (Exp.)",
      focusPolitics: "Focus (Pol.)",
      focusWarfare: "Focus (Guerre)",
      defend: "Défense",
      siege: "Siège",
      landBattle: "Rés. Bataille terrestre",
      navalBattle: "Rés. Bataille navale",
      peace: "Résolution de paix",
    },
  }
};
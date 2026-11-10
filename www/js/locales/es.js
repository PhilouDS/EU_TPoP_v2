export const es = {
  common: {
    yes: "Sí",
    no: "No",
    previousStep: "Paso anterior",
    mainMenu: "Menú principal",
    botActionsMenu: "Menú de Acciones del Bot",
    confirm: "Confirmar",
    cardId: "Introduce el ID de la carta",
    invalidCardId: "Introduce un ID de carta del 1 al 24.",
    completeAction: "Completar acción",
    rollDie: "Haz clic aquí para lanzar el dado virtual",
    dieResult: "Resultado:",
    continue: "Continuar",
    playerResolutionsMenu: "Menú de Resoluciones de Jugadores",
  },

  home: {
    title: "Europa Universalis:<br>The Price of Power",
    botActions: "ACCIONES DEL BOT",
    botRealmTargetingCharts: "TABLAS DE OBJETIVOS DE LOS REINOS BOT",
    playerResolutions: "RESOLUCIONES DE JUGADORES",
    backToMainMenu: "VOLVER AL MENÚ PRINCIPAL",
    credits: "Créditos",
  },

  credits: {
    title: "Créditos — v2",
    appDevelopment: "APLICACIÓN COMPLEMENTARIA NO OFICIAL desarrollada y publicada por:",
    gameDesign: "Diseño y desarrollo del juego:",
    soloModeDesign: "Diseño del modo solitario:",
    gamePublishers: "Editores del juego*:",
    publisherDisclaimer: "*Aegir Games y Paradox Interactive no son los editores de la aplicación. Por favor, no contactes con ellos para ninguna consulta relacionada con ella.",
    rulebook: "Para el resto de créditos del juego, consulta el reglamento.",
  },

  playerResolutions: {
    landBattle: {
      title: "Resolución de Batalla Terrestre",
      appointAttackerGeneral: "El Atacante puede Nombrar/Asignar un General a su Ejército.",
      anyDefenderHuman: "¿Algún defensor es un jugador humano?",
      moreThanOnePrDefender: "¿Más de un PR defensor?",
      determineMainDefender: "Determina el Defensor Principal.",
      determineMainDefenderDetail: "El PR con más Unidades en esta Área es el Defensor Principal. En caso de empate, decide el PR defensor que haya realizado un Turno más recientemente.",
      appointDefenderGeneral: "El Defensor (Principal) puede Nombrar/Asignar un General a su Ejército.",
      appointDefenderGeneralDetail: "Solo si el Ejército está dentro de su propio Reino.",
      anyDefenderBot: "¿Algún defensor es un Bot?",
      goToBotLandBattle: "Ir a: Resolución de Batalla Terrestre del Bot",
      anyEnemyNprProvinces: "¿Hay Provincias NPR enemigas en el Área?",
      placeNprUnits: "Coloca en esta Área tantas Unidades NPR como la MC total de todos los defensores NPR.",
      placeNprUnitsEnemyAreas: "Las Áreas que contienen Unidades pertenecientes a Enemigos de un NPR no contribuyen a la MC de ese NPR.",
      placeNprUnitsAlreadyUsed: "Un Área cuya MC ya haya contribuido a otra Batalla este Turno no vuelve a contribuir.",
      largeNprOrRebelForce: "¿Hay 3+ Unidades Rebeldes/NPR defensoras y ningún defensor PR?",
      drawMilitaryCardForLeader: "Roba una Carta Militar para determinar si las fuerzas Rebeldes/NPR están dirigidas por un Líder.",
      accountMilitaryIdeas: "Ten en cuenta las Ideas Militares que surtan efecto antes de las tiradas de Dados de Batalla.",
      accountMilitaryIdeasOrder: "Primero el Atacante y después el Defensor Principal.",
      accountMilitaryIdeasExamples: "P. ej., “Military Drill” y “Noble Knights”.",
      playBattleActions: "Juega Acciones de Batalla {battleAction}.",
      playBattleActionsOrder: "Empieza el Atacante y después el Defensor Principal.",
      rollBattleDice: "Lanza los Dados de Batalla del Atacante y del/de los Defensor(es).",
      rollBattleDiceBase: "Cada bando lanza 3 Dados de Infantería.",
      rollBattleDiceAdditional: "Añade los Dados de Batalla proporcionados por el Líder y por las Acciones de Batalla.",
      assignCasualties: "Asigna Bajas a ambos bandos.",
      assignCasualtiesDetail: "Cada resultado de dado coincidente inflige 1 Baja a una Unidad Enemiga de ese tipo. Cada Unidad solo puede sufrir 1 Baja por tirada.",
      woundedGenerals: "Añade fichas {illHealth} a los Generales heridos.",
      anyUnitsRemaining: "¿Quedan Unidades en la Batalla?",
      onlyOneSideHasUnitsRemaining: "¿Solo uno de los bandos tiene Unidades restantes?",
      nprMustRetreat: "¿Alguna Unidad NPR defensora debe Retirarse?",
      resolveNprRetreat: "Retira las Unidades NPR que se Retiran.",
      bothSidesHaveUnitsAfterNprRetreat: "Tras la Retirada NPR, ¿siguen quedando Unidades de ambos bandos?",
      attackerRetreats: "¿Se Retira el Atacante?",
      defenderRetreats: "¿Se Retira el Defensor?",
      resolveRetreatAndRemoveNpr: "Todo jugador que se Retire sufre 1 Baja adicional y debe mover sus Unidades restantes a un Área adyacente Amiga o Neutral. A continuación, retira todas las Unidades NPR.",
      proclaimWinner: "El bando que conserve Unidades en el Área es declarado Ganador de la Batalla.",
      activePlayerReward: "Si el Jugador Activo ganó la Batalla y esta es su primera victoria en Batalla de este Turno, obtiene 1 {militaryPower}. Esta recompensa solo se aplica a Batallas durante la Fase de Acción.",
      endBattleNoWinner: "No quedan Unidades. La Batalla no tiene Ganador.",
      endBattle: "Fin de la Batalla",
      notes: {
        ignoreExistingHostileUnits: "No cuentes Provincias NPR si ya había allí Unidades Hostiles a ese NPR antes de este Turno.",
        doubleInfantry: "El icono de Infantería contorneado de un resultado {battleDoubleInfantry} cuenta como un impacto adicional de Infantería solo con las Ideas Militares “Tercios/Janissaries” o “Line Infantry”.",
        mixedUnitCasualties: "Fuerzas mixtas: alterna las Bajas entre Unidades Mercenarias, Regulares y Aliadas. Unidades Regulares → Agotadas; Unidades Mercenarias y Aliadas → Reserva General.",
        multiplePrCasualties: "Varios PR defensores: alterna las Bajas entre sus Reinos, empezando por el Reino con más Unidades. El Jugador Activo resuelve los empates.",
        woundedGenerals: "Por cada par de {battleDoubleInfantry} obtenido, el General Enemigo recibe 1 {illHealth} si su bando sufrió al menos 1 Baja. Un segundo {illHealth} mata al General.",
        nprRetreat: "Salvo que defiendan su Área de Capital o su última Área restante, las Unidades NPR se Retiran (son retiradas del tablero) si su bando tiene menos Unidades que el Enemigo.",
        rebelsNeverRetreat: "Las Unidades Rebeldes nunca se Retiran.",
        retreatNote6: "Los Atacantes deben Retirarse al lugar del que proceden.",
      }
    },

    navalBattle: {
      title: "Resolución de Batalla Naval",
      appointAttackerAdmiral: "El Atacante puede Nombrar/Asignar un Almirante a su Flota.",
      anyDefenderHuman: "¿Algún defensor es un jugador humano?",
      moreThanOnePrDefender: "¿Más de un PR defensor?",
      determineMainDefender: "Determina el Defensor Principal.",
      determineMainDefenderDetail: "El PR con más Barcos en esta Zona Marítima es el Defensor Principal. En caso de empate, decide el PR defensor que haya realizado un Turno más recientemente.",
      assignDefenderAdmiral: "El Defensor (Principal) puede Asignar un Almirante a su Flota.",
      anyDefenderBot: "¿Algún defensor es un Bot?",
      goToBotNavalBattle: "Ir a: Resolución de Batalla Naval del Bot",
      anyEnemyNprPorts: "¿Hay Puertos NPR enemigos frente a esta Zona Marítima?",
      placeNprShips: "Coloca en esta Zona Marítima tantos Barcos NPR como la NC total de todos los defensores NPR.",
      placeNprShipsEnemyAreas: "Las Áreas que contienen Unidades pertenecientes a Enemigos de un NPR no contribuyen a la NC de ese NPR.",
      placeNprShipsAlreadyUsed: "Un Área cuya NC ya haya contribuido a otra Batalla este Turno no vuelve a contribuir.",
      largePirateOrNprForce: "¿Hay 3+ Barcos Piratas/NPR defensores y ningún defensor PR?",
      drawMilitaryCardForLeader: "Roba una Carta Militar para determinar si las fuerzas Piratas/NPR están dirigidas por un Líder.",
      accountMilitaryIdeas: "Ten en cuenta las Ideas Militares que surtan efecto antes de las tiradas de Dados de Batalla.",
      accountMilitaryIdeasOrder: "Primero el Atacante y después el Defensor Principal.",
      playBattleActions: "Juega Acciones de Batalla {battleAction}.",
      playBattleActionsOrder: "Empieza el Atacante y después el Defensor Principal.",
      rollBattleDice: "Lanza los Dados de Batalla Naval del Atacante y del/de los Defensor(es).",
      rollBattleDiceBase: "Cada bando lanza 3 Dados de Artillería.",
      rollBattleDiceAdditional: "Añade los Dados de Batalla proporcionados por el Almirante y por las Acciones de Batalla.",
      assignCasualties: "Asigna Bajas a ambos bandos.",
      assignCasualtiesDetail: "Cada resultado {battleArtillery} inflige 1 Baja a un Barco Enemigo.",
      woundedAdmiralsAndCapturedShips: "Añade fichas {illHealth} a los Almirantes heridos. Comprueba si hay Barcos Capturados.",
      capturedShips: "Si te quedan Barcos y has eliminado todos los Barcos Enemigos, puedes Capturar Barcos Enemigos.",
      anyShipsRemaining: "¿Quedan Barcos en la Batalla?",
      onlyOneSideHasShipsRemaining: "¿Solo uno de los bandos tiene Barcos restantes?",
      nprMustRetreat: "¿Algún Barco NPR defensor debe Retirarse?",
      resolveNprRetreat: "Retira los Barcos NPR que se Retiran.",
      bothSidesHaveShipsAfterNprRetreat: "Tras la Retirada NPR, ¿siguen quedando Barcos de ambos bandos?",
      attackerRetreats: "¿Se Retira el Atacante?",
      defenderRetreats: "¿Se Retira el Defensor?",
      resolveRetreatAndRemoveNpr: "Todo jugador que se Retire pierde 1 Barco como Baja y después mueve sus Barcos restantes a una Zona Marítima adyacente no Hostil o a un Puerto Amigo adyacente. A continuación, retira todos los Barcos NPR.",
      proclaimWinner: "El bando que conserve Barcos en la Zona Marítima es declarado Ganador de la Batalla.",
      activePlayerReward: "Si el Jugador Activo ganó la Batalla y esta es su primera victoria en Batalla de este Turno, obtiene 1 {militaryPower}.",
      endBattleNoWinner: "No quedan Barcos. La Batalla no tiene Ganador.",
      endBattle: "Fin de la Batalla",
      notes: {
        noDefenderAdmiral: "Los Defensores no pueden Nombrar Almirantes al comienzo de una Batalla Naval.",
        ignoreExistingHostileShips: "No cuentes Puertos NPR si ya había en esta Zona Marítima Barcos Hostiles a ese NPR antes del Turno actual.",
        heavyShipAutomaticHit: "Cada Barco Pesado también inflige 1 impacto automático al Enemigo.",
        heavyShipCasualties: "Los Barcos Pesados pueden recibir 2 impactos. Coloca un Barco Pesado de lado tras el primer impacto. Un Barco Pesado dañado se repara si termina un Turno o una Ronda en un Puerto Amigo.",
        woundedAdmiralsAndCapturedShips: "Por cada par de {battleDoubleInfantry} obtenido, un Almirante Enemigo recibe 1 {illHealth} si su bando sufrió al menos 1 Baja. Un segundo {illHealth} mata al Almirante.<br><br>Por cada resultado {battleDoubleInfantry} obtenido en la última Ronda de Batalla, convierte 1 Baja Enemiga de esa Ronda en un Barco Capturado. El Enemigo decide qué Barcos son capturados. Sustituye cada Barco Capturado por uno de tus Barcos de la Reserva.",
        multiplePrCasualties: "Varios PR defensores: alterna las Bajas entre sus Reinos, empezando por el Reino con más Barcos. El Jugador Activo resuelve los empates.",
        nprRetreat: "Salvo que defiendan una Zona Marítima adyacente a su Capital, los Barcos NPR se Retiran —y son retirados del tablero— si su bando tiene menos Barcos que el Enemigo.",
        piratesNeverRetreat: "Los Piratas nunca se Retiran.",
        retreat: "Los Atacantes deben Retirarse al lugar del que proceden. Todos los Barcos que se Retiran y pertenecen al mismo Reino deben Retirarse a un único destino."
      }
    },

    peaceResolution: {
      title: "Resolución de Paz",
      automaticWhitePeace: "¿Alguna Guerra cumple las condiciones de Paz Blanca Automática?",
      resolveAutomaticWhitePeace: "Termina todas esas Guerras con condiciones de Paz Blanca. Cada PR pierde {prestige1} por cada Paz Blanca en la que participe. Coloca fichas de Tregua para todas esas Guerras.",
      anyTotalVictory: "¿Algún PR en Guerra cumple las condiciones de Victoria Total?",
      selectTotalVictoryPlayer: "Ve al primer jugador, según el orden de juego, que haya logrado una Victoria Total contra otro Reino.",
      playerOrderReminder: "Empieza por el Primer Jugador y continúa en sentido horario.",
      victorHuman: "¿El Vencedor es un jugador humano?",
      goToBotPeaceResolution: "Ir a: Resolución de Paz del Bot",
      loserHuman: "¿El Perdedor es un jugador humano?",
      wantsFullAnnexation: "¿El Vencedor quiere Imponer la Anexión Total?",
      loserBot: "¿El Perdedor es un Bot?",
      wantsVassalization: "¿El Vencedor quiere Imponer la Vasallización?",
      applyVassalization: "El Vencedor coloca {vassal} en todas las Provincias del Perdedor (retirando todos los {town}) y obtiene 2 {influence} en el Reino del nuevo Vasallo. Añade {unrest} a los {vassal} obtenidos en Áreas donde el Vencedor no Ocupaba ninguna Provincia.",
      annexationVassalizationCleanup: "Retira la(s) ficha(s) de Guerra, todas las fichas de Ocupado y todas las fichas PR salvo las del Vencedor del Reino del Perdedor. El Vencedor puede descartar {claim} de cualquier Área donde haya obtenido {town}/{vassal}, para retirar 2 {unrest} por cada {claim}. Si se Anexiona un NPR, un PR que retire un {activeAlly} pierde {prestige2}.",
      anyUnresolvedWars: "¿Hay PR con Guerras aún sin resolver?",
      anyoneWantsToEndWar: "¿Alguno de estos jugadores quiere terminar su Guerra?",
      selectActivePlayer: "El primer jugador en el orden general de Turno que participe en una Guerra en curso es seleccionado como Jugador Activo.",
      activePlayerHuman: "¿Es un jugador humano?",
      pickUnresolvedWar: "El Jugador Activo debe elegir una de sus Guerras sin resolver.",
      eitherSideSurrenders: "¿Se Rinde alguno de los bandos?",
      resolveSurrenderPrestige: "El Perdedor pierde {prestige2} y el Vencedor obtiene {prestige2}.",
      enemyHuman: "¿El Enemigo es un jugador humano?",
      eitherPlayerHasDoubleUnits: "¿Alguno de los jugadores tiene el doble de Unidades Terrestres Desplegadas que su Enemigo?",
      activePlayerOutnumbersNonHumanEnemy: "¿Las Unidades Terrestres Desplegadas del Jugador Activo superan las Unidades Terrestres Desplegadas de su Enemigo más el número total de {manpower} en sus Áreas?",
      enforcePeaceTerms: "¿El Vencedor quiere Imponer condiciones de Paz?",
      wantsHumiliation: "¿El Vencedor quiere Imponer Humillación?",
      applyHumiliation: "Todas las Provincias Ocupadas se devuelven a sus Propietarios Legítimos. El Vencedor obtiene {prestige} igual a 2 × Valor Fiscal de las Provincias devueltas al Perdedor (máx. 10 {prestige}). El Perdedor pierde la misma cantidad de {prestige}.",
      wantsKeepCurrentBoardState: "¿El Vencedor quiere Mantener el Estado Actual del Tablero?",
      returnOccupiedCapitals: "Las Capitales Ocupadas deben devolverse a su Propietario Legítimo, que debe pagar 10 {ducats} al Ocupante. Los Bots pierden 2 {botPower} en lugar de Ducados.",
      applyKeepCurrentBoardState: "Los Ocupantes conservan todas las Provincias que Ocupan actualmente. En lugar de conservar Provincias que Ocupa, el Vencedor puede:<br> - Cambiar cualquiera de ellas por sus propias Provincias de jure Ocupadas por el Enemigo de igual Valor Fiscal, o por 3 {ducats} × Valor Fiscal devuelto.<br> - Liberar cualquiera de ellas para obtener {prestige1} × Valor Fiscal Liberado, y obtener una {alliance} con un NPR Liberado y 2 {influence} en ese NPR.",
      keepBoardStateClaimsAndUnrest: "Los PR pueden descartar un {claim} de cualquier Área donde hayan obtenido Provincias para retirar 2 {unrest} de esa misma Área.",
      wantsSecureDesiredSuccession: "¿El Vencedor quiere Asegurar la Sucesión Deseada?",
      applySecureDesiredSuccession: "Retira todos los {royalMarriage}/{disputedSuccession} y {alliance}/{activeAlly} del Perdedor, excepto los del Vencedor. El Vencedor obtiene {prestige3} por cada {royalMarriage}/{disputedSuccession} retirado; sus propietarios pierden {prestige3}. El Vencedor voltea su {royalMarriage}, si tiene uno, y obtiene {prestige} igual a los Ingresos Fiscales del Perdedor (máx. {prestige5}). El Vencedor puede obtener una {alliance} con el Perdedor y, si el Perdedor es un NPR, 4 {influence} en el Área de Capital del Perdedor; si el Perdedor es un PR, sustituye al Gobernante del Perdedor por un Líder descartado.",
      wantsForceConversion: "¿El Vencedor quiere Imponer la Conversión?",
      applyForceConversion: "El Perdedor y su Área de Capital deben adoptar la Religión de Estado del Vencedor. El Vencedor obtiene {prestige3} y 2 {influence} en el Área de Capital del Perdedor. El Perdedor pierde {prestige5} y 4 {influence}.",
      negotiatedPeace: "Si ambos bandos son jugadores humanos, pueden intentar Negociar condiciones de Paz. En caso contrario, pasa al siguiente Nodo.",
      nonWhitePeaceTermsAgreed: "¿Se han acordado condiciones de Paz distintas de una Paz Blanca?",
      whitePeaceAgreed: "¿Se acuerda una Paz Blanca?",
      applyWhitePeacePrestige: "Cada PR pierde {prestige1}.",
      returnAllOccupiedProvinces: "Todas las Provincias Ocupadas se devuelven a sus Propietarios Legítimos.",
      placeTruceTokens: "Coloca fichas de Tregua según corresponda.",
      relocateNeutralLandUnits: "Todos los PR con Unidades Terrestres en Áreas Neutrales deben colocarlas en el Área Amiga más cercana.",
      flipWarTokens: "Voltea todas sus fichas de Guerra al lado de Paz.",
      returnAlliedUnits: "Devuelve todas las Unidades Aliadas de sus Ejércitos y Reserva de Manpower a la Reserva General.",
      endPeaceResolution: "Fin de la Resolución de Paz",
      notes: {
        note1: "Ningún bando de la Guerra Ocupa Provincias de su Enemigo (incluidas Provincias de cualquier Vasallo o Aliado Activo de su Enemigo).",
        note2: "Un PR debe Ocupar todas las Provincias de su Enemigo, mientras que el Enemigo no tenga Unidades Terrestres Desplegadas. Contra un Enemigo NPR, un Bot debe Ocupar la Capital del NPR y Provincias de Valor Fiscal ≥ ½ de los Ingresos Fiscales del NPR.",
        note3: "Una vez que un jugador haya respondido “no” a esta pregunta, no puede responder “sí” más adelante durante el paso de Resolución de Paz de esta Ronda.",
        note4: "El Vencedor debe Ocupar la Capital del Perdedor y al menos una de sus Provincias en otra de sus Áreas (si existe).",
        note5: "Un jugador que cumpla esta condición se considera el Vencedor de esta Guerra. Las Unidades en Continentes Lejanos donde el PR Enemigo no tenga {town} no cuentan.",
        note6: "Solo los jugadores humanos pueden Rendirse. Un jugador que se Rinde se considera el Perdedor de esa Guerra. El Vencedor debe Imponer una Paz cuyos requisitos pueda cumplir. El Vencedor puede Imponer Humillación aunque no Ocupe la Capital del Perdedor.",
        note7: "El Vencedor debe Ocupar la Capital del Perdedor, o el Enemigo debe haberse Rendido.",
        note8: "El Perdedor nunca puede ser obligado a pagar al Vencedor más de 2 × sus Ingresos Fiscales en total.",
        note9: "El Vencedor debe Ocupar la Capital del Perdedor, y debe haber al menos 1 {disputedSuccession} en la Capital del Perdedor.",
        note10: "El Vencedor debe Ocupar o Poseer todas las Provincias del Área de Capital del Perdedor. El Vencedor debe tener una Religión de Estado distinta de la del Perdedor.",
        automaticWhitePeaceActiveAllies: "Al comprobar la Paz Blanca Automática, cuenta un {activeAlly} del Enemigo como parte del Reino de ese Enemigo. La Paz Blanca con el PR también termina la Guerra con todos sus {activeAlly}.",
        fullAnnexation: "Solo con Victoria Total. El Perdedor debe ser un NPR o Bot. Las Provincias de jure del Perdedor se incorporan por completo al Reino del Vencedor.",
        note5NonHuman: "Las Unidades en Continentes Lejanos donde el otro Reino no tenga {town} no cuentan para este cálculo. Un NPR siempre se considera que tiene 0 Unidades Terrestres Desplegadas.",
        humiliationActiveAllies: "No se obtiene {prestige} por Provincias devueltas al {activeAlly} del Perdedor.",
        keepBoardStateLostProvinces: "Los PR que hayan perdido Provincias o Provincias Vasallas como consecuencia de esta Guerra pueden colocar un {claim} en cada Área donde hayan perdido al menos 1 Provincia.",
        negotiatedPeace: "Regla Avanzada. Ambas partes deben ser jugadores humanos. Pueden negociar tanto si se han cumplido las condiciones normales de Victoria como si no. La Vasallización y la Anexión Total siguen requiriendo sus condiciones normales.",
        whitePeaceAcceptance: "Un NPR siempre acepta una Paz Blanca si se le ofrece. Con un Resultado Inconcluso, un Bot acepta la Paz Blanca si su Enemigo ha capturado Provincias del Bot de mayor Valor Fiscal que las que el Bot ha capturado de ese Enemigo.",
        truceTokens: "Los antiguos Enemigos entran en Tregua hasta la Fase 3 de la siguiente Ronda. No coloques fichas de Tregua sobre el {activeAlly} de antiguos Enemigos ni sobre Reinos Vasallos.",
        relocateNeutralLandUnits: "Cada Área o Zona Marítima cuenta como una distancia de 1. Si varias Áreas Amigas están a la misma distancia, elige una. Este movimiento no cuesta {militaryPower}."
      }
    },
  },
  botRealmTargeting: {
    selectRealm: "Reino Bot",
    selectRealmPlaceholder: "Selecciona un Reino Bot",
    militaryChart: "Tabla de Objetivos Militares",
    diplomaticChart: "Tabla de Objetivos Diplomáticos",
    rolls: "Tiradas",
    fallbacks: "Alternativa",
    selectFirstValidTarget: "Selecciona el primer objetivo válido:",
    noneValid: "Ninguno es válido",
    selectedTarget: "Objetivo seleccionado",
    confirmTarget: "Confirmar objetivo",
    reroll: "Volver a tirar",
    backToCharts: "Volver a las Tablas de Objetivos",
    noTargetsRemain: "No quedan objetivos válidos en esta tabla.",
    easternEuropeNote: "* Los objetivos del mapa de Europa Oriental solo son válidos en escenarios que incluyan ese tablero.",
    realms: {
          aragon: "Aragón",
          austria: "Austria",
          barbary: "Berbería",
          bohemia: "Bohemia",
          brandenburg: "Brandeburgo/Prusia",
          burgundy: "Borgoña",
          castileSpain: "Castilla/España",
          denmark: "Dinamarca",
          england: "Inglaterra",
          france: "Francia",
          germany: "Alemania",
          horde: "Horda",
          hungary: "Hungría",
          italy: "Italia",
          kalmar: "Unión de Kalmar",
          lithuania: "Lituania",
          mamluk: "Mamelucos",
          muscovyRussia: "Moscovia/Rusia",
          netherlands: "Países Bajos",
          norway: "Noruega",
          novgorod: "Nóvgorod",
          ottoman: "Otomanos",
          persia: "Persia",
          poland: "Polonia",
          portugal: "Portugal",
          scotland: "Escocia",
          sweden: "Suecia",
          teutonic: "Orden Teutónica",
          venice: "Venecia"
        },
    targets: {
          ownerBrescia: "Propietario de Brescia",
          ownerFrancheComte: "Propietario de Franche-Comté",
          ownerLuxembourg: "Propietario de Luxembourg",
          ownerArtois: "Propietario de Artois",
          france: "Francia",
          venice: "Venecia",
          realmLombardy: "Reino en LOMBARDY",
          savoy: "Saboya",
          realmCentralItaly: "Reino en CENTRAL ITALY",
          ownerNapoli: "Propietario de Napoli",
          ownerMesina: "Propietario de Mesina",
          castile: "Castilla",
          bavaria: "Baviera",
          salzburg: "Salzburgo",
          realmRhineland: "Reino en RHINELAND",
          ownerNamur: "Propietario de Namur",
          ownerAntwerpen: "Propietario de Antwerpen",
          ownerGent: "Propietario de Gent",
          ownerAmsterdam: "Propietario de Amsterdam",
          realmNetherlands: "Reino en NETHERLANDS",
          ownerHolstein: "Propietario de Holstein",
          denmark: "Dinamarca",
          sweden: "Suecia",
          ownerKonigsberg: "Propietario de Königsberg",
          saxony: "Sajonia",
          brandenburgPrussia: "Brandeburgo/Prusia",
          bohemia: "Bohemia",
          ownerSilesia: "Propietario de Silesia",
          poland: "Polonia",
          ownerPozsony: "Propietario de Pozsony",
          opponentElectorAreas: "Oponente con {town}/{vassal} en 2+ Áreas de Electores originales",
          ownerPest: "Propietario de Pest",
          ragusa: "Ragusa",
          ownerBosnia: "Propietario de Bosnia",
          ownerAlbania: "Propietario de Albania",
          ownerKosovo: "Propietario de Kosovo",
          wallachia: "Valaquia",
          moldavia: "Moldavia",
          ownerBeograd: "Propietario de Beograd",
          ottomans: "Otomanos",
          realmBurgundy: "Reino en BURGUNDY",
          switzerland: "Suiza",
          realmCorsicaSardinia: "Reino en CORSICA & SARDINIA",
          realmLanguedoc: "Reino en LANGUEDOC",
          realmAragon: "Reino en ARAGON",
          portugal: "Portugal",
          realmWestphalia: "Reino en WESTPHALIA",
          realmFlandersWallonia: "Reino en FLANDERS & WALLONIA",
          realmLowerSaxony: "Reino en LOWER SAXONY",
          realmPrussia: "Reino en PRUSSIA",
          realmWielkopolska: "Reino en WIELKOPOLSKA",
          realmPomerania: "Reino en POMERANIA",
          realmEstoniaLivonia: "Reino en ESTONIA & LIVONIA",
          ownerFirenze: "Propietario de Firenze",
          papalStates: "Estados Pontificios",
          ownerSiena: "Propietario de Siena",
          realmSicily: "Reino en SICILY",
          realmSerbiaAlbania: "Reino en SERBIA & ALBANIA",
          ownerConstantinople: "Propietario de Constantinople",
          knights: "Caballeros",
          realmTranscaucasia: "Reino en TRANSCAUCASIA",
          adal: "Adal",
          ajuuraan: "Ajuuraan",
          albania: "Albania",
          allNprsIreland: "Todos los NPR en IRELAND",
          aqQoyunlu: "Aq Qoyunlu",
          aragon: "Aragón",
          austria: "Austria",
          basra: "Basra",
          benin: "Benin",
          bosnia: "Bosnia",
          brandenburg: "Brandeburgo",
          bremen: "Bremen",
          brittany: "Bretaña",
          brunswick: "Brunswick",
          burgundy: "Borgoña",
          byzantium: "Bizancio",
          castileSpain: "Castilla/España",
          cleanseHeresy: "PURGAR HEREJÍA*",
          crimea: "Crimea",
          cyprus: "Chipre",
          djerid: "Djerid",
          england: "Inglaterra",
          ethiopia: "Etiopía",
          florence: "Florencia",
          franceAdjacentLand: "Francia, si es adyacente por tierra",
          frankfurt: "Frankfurt",
          genoa: "Génova",
          georgia: "Georgia",
          granada: "Granada",
          greatHorde: "Gran Horda",
          hamburg: "Hamburg",
          hormuz: "Hormuz",
          hungary: "Hungría",
          japan: "Japón",
          kazan: "Kazán",
          kilwa: "Kilwa",
          kongo: "Kongo",
          liege: "Lieja",
          lithuania: "Lituania",
          livonianOrder: "Orden Livona",
          lorraine: "Lorena",
          madagascar: "Madagascar",
          magdeburg: "Magdeburg",
          mamluks: "Mamelucos",
          mantua: "Mantua",
          milan: "Milán",
          mongolia: "Mongolia",
          morocco: "Marruecos",
          muscovy: "Moscovia",
          muscovyRussia: "Moscovia/Rusia",
          najd: "Najd",
          naples: "Nápoles",
          navarra: "Navarra",
          nogai: "Nogai",
          norway: "Noruega",
          novgorod: "Nóvgorod",
          nprAdjacentEnglishChannel: "NPR adyacente a ENGLISH CH.",
          nprAdjacentLandAlgiers: "NPR adyacente por tierra a ALGIERS",
          nprAdjacentLeon: "NPR adyacente a LEON",
          nprIreland: "NPR en IRELAND",
          odoyev: "Odoyev",
          oirat: "Oirat",
          oneTaxNprMoscowRyazan: "NPR de Valor Fiscal 1 en MOSCOW & RYAZAN",
          ownerAdal: "Propietario de Adal",
          ownerAdana: "Propietario de Adana",
          ownerAkershus: "Propietario de Akershus",
          ownerAlQuds: "Propietario de Al-Quds",
          ownerAlexandria: "Propietario de Alexandria",
          ownerAngola: "Propietario de Angola",
          ownerAnjou: "Propietario de Anjou",
          ownerAntilles: "Propietario de Antilles",
          ownerAstrakhan: "Propietario de Astrakhan",
          ownerAthina: "Propietario de Athina",
          ownerAzov: "Propietario de Azov",
          ownerBaghdad: "Propietario de Baghdad",
          ownerBahia: "Propietario de Bahia",
          ownerBaleares: "Propietario de Baleares",
          ownerBalkh: "Propietario de Balkh",
          ownerBaluchistan: "Propietario de Baluchistan",
          ownerBangazi: "Propietario de Bangazi",
          ownerBarcelona: "Propietario de Barcelona",
          ownerBasarabia: "Propietario de Basarabia",
          ownerBasra: "Propietario de Basra",
          ownerBengal: "Propietario de Bengal",
          ownerBergenhus: "Propietario de Bergenhus",
          ownerBordeaux: "Propietario de Bordeaux",
          ownerBourgogne: "Propietario de Bourgogne",
          ownerBrugge: "Propietario de Brugge",
          ownerBrunei: "Propietario de Brunei",
          ownerCaffa: "Propietario de Caffa",
          ownerCalifornia: "Propietario de California",
          ownerCanada: "Propietario de Canada",
          ownerCapeGoodHope: "Propietario de Cape of Good Hope",
          ownerCapeOfGoodHope: "Propietario de Cape of Good Hope",
          ownerCaux: "Propietario de Caux",
          ownerCentralAmerica: "Propietario de Central America",
          ownerCeuta: "Propietario de Ceuta",
          ownerChagatai: "Propietario de Chagatai",
          ownerConstantinopleChristian: "Propietario de Constantinople (si es cristiano)",
          ownerCoromandel: "Propietario de Coromandel",
          ownerCorsica: "Propietario de Corsica",
          ownerCreta: "Propietario de Creta",
          ownerCrete: "Propietario de Crete",
          ownerCyprus: "Propietario de Cyprus",
          ownerDanzig: "Propietario de Danzig",
          ownerDeccan: "Propietario de Deccan",
          ownerDelhi: "Propietario de Delhi",
          ownerEdisanas: "Propietario de Edisanas",
          ownerFars: "Propietario de Fars",
          ownerFerrara: "Propietario de Ferrara",
          ownerFlorida: "Propietario de Florida",
          ownerFurdan: "Propietario de Furdan",
          ownerGalicia: "Propietario de Galicia",
          ownerGharb: "Propietario de Gharb",
          ownerGibraltar: "Propietario de Gibraltar",
          ownerGoa: "Propietario de Goa",
          ownerGoldCoast: "Propietario de Gold Coast",
          ownerGotland: "Propietario de Gotland",
          ownerGranadaMuslim: "Propietario de Granada (si es musulmán)",
          ownerGreatLakes: "Propietario de Great Lakes",
          ownerGujarat: "Propietario de Gujarat",
          ownerGuyana: "Propietario de Guyana",
          ownerHejaz: "Propietario de Hejaz",
          ownerHerat: "Propietario de Herat",
          ownerHormuz: "Propietario de Hormuz",
          ownerHudsonBay: "Propietario de Hudson Bay",
          ownerIsfahan: "Propietario de Isfahan",
          ownerIskandariyya: "Propietario de Iskandariyya",
          ownerJava: "Propietario de Java",
          ownerKaraman: "Propietario de Karaman",
          ownerKastamonu: "Propietario de Kastamonu",
          ownerKastamonu_dummy: "Propietario de Kastamonu",
          ownerKazakhstan: "Propietario de Kazakhstan",
          ownerKazan: "Propietario de Kazan",
          ownerKhiva: "Propietario de Khiva",
          ownerKijevas: "Propietario de Kijevas",
          ownerKleve: "Propietario de Kleve",
          ownerKobenhavn: "Propietario de København",
          ownerLaPlata: "Propietario de La Plata",
          ownerLisboa: "Propietario de Lisboa",
          ownerLorraine: "Propietario de Lorraine",
          ownerLubeck: "Propietario de Lübeck",
          ownerMadrid: "Propietario de Madrid",
          ownerMalacca: "Propietario de Malacca",
          ownerMali: "Propietario de Mali",
          ownerMalta: "Propietario de Malta",
          ownerMantova: "Propietario de Mantova",
          ownerMexico: "Propietario de Mexico",
          ownerMilano: "Propietario de Milano",
          ownerMississippi: "Propietario de Mississippi",
          ownerMoluccas: "Propietario de Moluccas",
          ownerMongolia: "Propietario de Mongolia",
          ownerMontpellier: "Propietario de Montpellier",
          ownerMorea: "Propietario de Morea",
          ownerMoskva: "Propietario de Moskva",
          ownerNantes: "Propietario de Nantes",
          ownerNavarra: "Propietario de Navarra",
          ownerNaxos: "Propietario de Naxos",
          ownerNeva: "Propietario de Neva",
          ownerNewEngland: "Propietario de New England",
          ownerNogai: "Propietario de Nogai",
          ownerNovgorod: "Propietario de Novgorod",
          ownerNyland: "Propietario de Nyland",
          ownerOdoyev: "Propietario de Odoyev",
          ownerOirat: "Propietario de Oirat",
          ownerOsterbotten: "Propietario de Österbotten",
          ownerPernambuco: "Propietario de Pernambuco",
          ownerPeru: "Propietario de Peru",
          ownerPfalz: "Propietario de Pfalz",
          ownerPhilippines: "Propietario de Philippines",
          ownerPicardie: "Propietario de Picardie",
          ownerPicardieAdjacentLand: "Propietario de Picardie, si es adyacente por tierra",
          ownerPoznan: "Propietario de Poznan",
          ownerProvence: "Propietario de Provence",
          ownerPskov: "Propietario de Pskov",
          ownerQafsah: "Propietario de Qafsah",
          ownerQahirah: "Propietario de Qahirah",
          ownerRagusa: "Propietario de Ragusa",
          ownerReval: "Propietario de Reval",
          ownerRhodes: "Propietario de Rhodes",
          ownerRiga: "Propietario de Riga",
          ownerRijeka: "Propietario de Rijeka",
          ownerRioDeJaneiro: "Propietario de Rio de Janeiro",
          ownerRoma: "Propietario de Roma",
          ownerRyazan: "Propietario de Ryazan",
          ownerSamarkand: "Propietario de Samarkand",
          ownerSardinya: "Propietario de Sardinya",
          ownerSavoie: "Propietario de Savoie",
          ownerShirvan: "Propietario de Shirvan",
          ownerSmolenskas: "Propietario de Smolenskas",
          ownerSonghai: "Propietario de Songhai",
          ownerSopron: "Propietario de Sopron",
          ownerSouthSumatra: "Propietario de South Sumatra",
          ownerStettin: "Propietario de Stettin",
          ownerStockholm: "Propietario de Stockholm",
          ownerTabriz: "Propietario de Tabriz",
          ownerTambov: "Propietario de Tambov",
          ownerTangiers: "Propietario de Tangiers",
          ownerTimbuktu: "Propietario de Timbuktu",
          ownerTimor: "Propietario de Timor",
          ownerTirgoviste: "Propietario de Tirgoviste",
          ownerTorda: "Propietario de Torda",
          ownerTrebizond: "Propietario de Trebizond",
          ownerTripoli: "Propietario de Tripoli",
          ownerTrondheim: "Propietario de Trondheim",
          ownerTunis: "Propietario de Tunis",
          ownerTver: "Propietario de Tver",
          ownerTyumen: "Propietario de Tyumen",
          ownerUpperEgypt: "Propietario de Upper Egypt",
          ownerValencia: "Propietario de Valencia",
          ownerVilnius: "Propietario de Vilnius",
          ownerVirginia: "Propietario de Virginia",
          ownerVogelkop: "Propietario de Vogelkop",
          ownerWarszawa: "Propietario de Warszawa",
          ownerXian: "Propietario de Xi'an",
          ownerYemen: "Propietario de Yemen",
          ownerZagreb: "Propietario de Zagreb",
          ownerZara: "Propietario de Zara",
          ownerZemaitija: "Propietario de Zemaitija",
          palatinate: "Palatinado",
          polandCommonwealth: "Polonia/Mancomunidad Polaco-Lituana",
          polandPlc: "Polonia/Mancomunidad Polaco-Lituana",
          provence: "Provenza",
          pskov: "Pskov",
          qaraQoyunlu: "Qara Qoyunlu",
          raid: "RAID*",
          realmAegeanArchipelago: "Reino en AEGEAN ARCHIPELAGO",
          realmAlgiers: "Reino en ALGIERS",
          realmAndalucia: "Reino en ANDALUCIA",
          realmAquitaine: "Reino en AQUITAINE",
          realmAragonAdjacentLand: "Reino en ARAGON, si es adyacente por tierra",
          realmAstrakhan: "Reino en ASTRAKHAN",
          realmBavaria: "Reino en BAVARIA",
          realmBavariaSwabia: "Reino en BAVARIA & SWABIA",
          realmBohemia: "Reino en BOHEMIA",
          realmBotCapitalArea: "Reino en el Área de Capital del Bot",
          realmBrittanyNormandy: "Reino en BRITTANY & NORMANDY",
          realmCaucasus: "Reino en CAUCASUS",
          realmCentralRussia: "Reino en CENTRAL RUSSIA",
          realmCircassia: "Reino en CIRCASSIA",
          realmCrimea: "Reino en CRIMEA",
          realmCroatiaBosnia: "Reino en CROATIA & BOSNIA",
          realmDalmatia: "Reino en DALMATIA",
          realmEastAnglia: "Reino en EAST ANGLIA",
          realmEasternUkraine: "Reino en EASTERN UKRAINE",
          realmEgypt: "Reino en EGYPT",
          realmFinland: "Reino en FINLAND",
          realmGotalandSkane: "Reino en GÖTALAND & SKÅNE",
          realmGreece: "Reino en GREECE",
          realmHungarianPlain: "Reino en HUNGARIAN PLAIN",
          realmIraq: "Reino en IRAQ",
          realmIreland: "Reino en IRELAND",
          realmJutland: "Reino en JUTLAND",
          realmKaraman: "Reino en KARAMAN",
          realmKarelia: "Reino en KARELIA",
          realmKurdistan: "Reino en KURDISTAN",
          realmLanguedocAdjacentLand: "Reino en LANGUEDOC, si es adyacente por tierra",
          realmLithuania: "Reino en LITHUANIA",
          realmMacaronesia: "Reino en MACARONESIA",
          realmMacedoniaThrace: "Reino en MACEDONIA & THRACE",
          realmMazoviaMalopolska: "Reino en MAZOVIA & MALOPOLSKA",
          realmMoldavia: "Reino en MOLDAVIA",
          realmMuscowRyazan: "Reino en MOSCOW & RYAZAN",
          realmNaples: "Reino en NAPLES",
          realmNorthMorocco: "Reino en NORTH MOROCCO",
          realmNorthSahara: "Reino en NORTH SAHARA",
          realmNorthernAnatolia: "Reino en NORTHERN ANATOLIA",
          realmNorthumbria: "Reino en NORTHUMBRIA",
          realmNovgorod: "Reino en NOVGOROD",
          realmOstlandet: "Reino en OSTLANDET",
          realmPerm: "Reino en PERM",
          realmPortugal: "Reino en PORTUGAL",
          realmRedRuthenia: "Reino en RED RUTHENIA",
          realmRoyalHungary: "Reino en ROYAL HUNGARY",
          realmRum: "Reino en RUM",
          realmSaratov: "Reino en SARATOV",
          realmSaxony: "Reino en SAXONY",
          realmScotland: "Reino en SCOTLAND",
          realmSeine: "Reino en SEINE",
          realmSwitzerland: "Reino en SWITZERLAND",
          realmSyria: "Reino en SYRIA",
          realmThraceMacedonia: "Reino en THRACE & MACEDONIA",
          realmTransylvania: "Reino en TRANSYLVANIA",
          realmTunisia: "Reino en TUNISIA",
          realmVenetia: "Reino en VENETIA",
          realmVologda: "Reino en VOLOGDA",
          realmWallachiaBulgaria: "Reino en WALLACHIA & BULGARIA",
          realmWesternUkraine: "Reino en WESTERN UKRAINE",
          realmWhiteRuthenia: "Reino en WHITE RUTHENIA",
          riga: "Riga",
          ryazan: "Riazán",
          scotland: "Escocia",
          serbia: "Serbia",
          shirvan: "Shirván",
          teutonicOrder: "Orden Teutónica",
          timbuktu: "Timbuktu",
          tlemcen: "Tlemcen",
          trebizond: "Trebisonda",
          tunis: "Túnez",
          tver: "Tver",
          uzbek: "Uzbekos",
          yemen: "Yemen"
        }
  },

  botActions: {
    title: "Acciones del Bot",
    mainTurnStructure: "Estructura Principal del Turno",
    chooseSpecificAction: "Elegir una Acción Específica",
    peaceAndRebels: "Fase de Paz y Rebeldes",
    incomeAndUpkeep: "Fase de Ingresos y Mantenimiento",
    cleanup: "Fase de Limpieza",
    finalScoring: "Puntuación Final",
    changeBotRealm: "Cambiar Reino Bot",

    mainTurn: {
      start: "Inicio",
      noBotPower: "¿{botPower} restante = 0, o no puede realizar más Turnos en esta Ronda?",
      pickedEvent: "¿Ha elegido un Evento?",
      goToEvent: "Ir a: Evento",
      underAttack: "¿Está siendo atacado por Enemigos o Rebeldes?",
      goToDefend: "Ir a: Defender",
      spend1BotPower: "Gasta 1 {botPower}",
      canSiege: "¿Hay un Ejército en el tablero y puede Asediar en la misma Área?",
      goToSiege: "Ir a: Asedio",
      canColonize: "¿Le quedan 3+ {botPower} y 1+ {colonist}?",
      goToColonize: "Ir a: Colonizar",
      spend2BotPower: "Gasta 2 {botPower}",
      spentMoreThanLeft: "¿{botPower} gastado > {botPower} restante?",
      hasBotCards: "¿Quedan cartas de Bot?",
      atWarEnoughPower: "¿Está en Guerra y le quedan 4+ {botPower}?",
      pass: "Pasar",
      firstToPass: "Primero en Pasar: obtiene 2 {botPower}",
      secondToPass: "Segundo en Pasar: obtiene 1 {botPower}",
      cardHasWarAction: "¿Está en Guerra y la carta tiene Acción de Guerra?",
      atWar: "¿Está en Guerra?",
      performWarAction: "Realiza la Acción de Guerra de la carta.",
      actionTookEffect: "¿La Acción tuvo efecto?",
      performFirstAction: "Realiza la primera Acción de la carta.",
      performSecondAction: "Realiza la segunda Acción de la carta, si la hay.",
      endTurn: "Fin del Turno",
      drawBotCard: "Roba una Carta de Bot.",
      spendShownCost: "Gasta el coste de {botPower} indicado.",
      discardActionCard: "Descarta una Carta de Acción si aparece el icono de descarte:",
      administrative: "Administrativa",
      diplomatic: "Diplomática",
      military: "Militar",
      scorePrestigeFromCard: "Obtén Prestigio = {botPower} gastado en la Carta de Bot robada.",
      spend1Score1: "Gasta 1 {botPower}, obtén {prestige1}",
      botCard: "Carta de Bot",
      firstActionLabel: "Primera Acción",
      secondActionLabel: "Segunda Acción",
      warActionLabel: "Guerra",

      notes: {
        underAttack: "Se considera que el Bot está siendo atacado si hay Unidades Enemigas o {rebelUnit} en cualquier Área con {town} del Bot, o si Enemigos o Rebeldes Ocupan cualquier {town} del Bot.",
        insufficientBotPower: "Si al Bot le queda menos {botPower} que el coste de {botPower} de la carta, gasta todo el {botPower} restante y ejecuta la carta."
      }
    },

    defend: {
      source: "(desde la Estructura Principal del Turno)",
      anyInvaders: "¿Alguna Área con Invasores?",
      canSiegeWith2BotPower: "¿Le quedan 2+ {botPower} y tiene un Ejército en un Área donde puede Asediar Provincias?",
      dieResult: "Resultado del dado",
      goToSiege: "Ir a: ASEDIO",
      gain1BotPower: "Obtén 1 {botPower}",
      armyDoubleInvaders: "¿Ejército ≥ 2× cualquier fuerza Invasora?",
      canRecruit: "¿Le quedan 2+ {botPower} y más {manpower}?",
      recruit: "Gasta 2 {botPower} para reclutar 7/9/11 Unidades.",
      armyAtLeastInvaders: "¿Ejército ≥ cualquier fuerza Invasora?",
      armyDeployedCanSiege: "¿Ejército Desplegado en un Área donde puede Asediar Provincias?",
      increaseArmyTo3: "Si el Ejército < 3 Unidades: aumenta su tamaño a 3 Unidades.",
      occupiedBotTownNoInvaders: "¿Alguna Área con {town} del Bot Ocupadas y sin Invasores?",
      placeArmySafeBotArea: "Coloca el Ejército en esa Área sin Unidades Hostiles. Comprueba la MAC.",
      placeArmySafeBotAreaDetail: "Prefiere el Área con el mayor Valor Fiscal de {town} propias Ocupadas por Enemigos/Rebeldes; después, el Área de Capital propia.",
      safeBotTownAvailable: "¿Alguna Área con {town} del Bot donde el Ejército no provoque una Batalla?",
      armyOnMap: "¿El Ejército está en el tablero?",
      macEnough: "¿Hay Invasores en algún Área donde la MAC del Bot ≥ fuerza Invasora?",
      placeArmyLargestInvaders: "Coloca el Ejército en el Área válida con la mayor fuerza Invasora. Comprueba la MAC.",
      preferPrEnemy: "Prefiere un Enemigo PR.",
      goToLandBattle: "Ir a: BATALLA TERRESTRE",
      gain1BotPowerIfVictorious: "Obtén 1 {botPower} si vence.",
      shipCanIncreaseMac: "¿Colocar un Barco puede aumentar suficientemente la MAC en un Área con Invasores?",
      placeShipNavalBridge: "Coloca un Barco para extender un Puente Naval hasta un Área válida.",
      triggersNavalBattle: "¿Provoca una Batalla Naval?",
      goToNavalBattle: "Ir a: BATALLA NAVAL",
      placeArmySmallestInvaders: "Coloca el Ejército en el Área con la menor fuerza Invasora. Comprueba la MAC.",
      preferPrEnemyForce: "Prefiere una fuerza Enemiga PR.",
      has2BotPower: "¿Tiene 2+ {botPower}?",
      goToSpy: "Ir a: ESPIONAJE",
      enemyTownSafeArea: "¿Alguna Área con {town} Enemiga donde el Ejército no provoque una Batalla y que sea adyacente por tierra o esté conectada mediante Puente Naval al Reino del Bot?",
      placeArmyEnemyTown: "Coloca el Ejército en esa Área con el mayor Valor Fiscal total de {town} Enemigas. Comprueba la MAC.",
      endTurn: "Fin del Turno",
      invadersDefinition: "Invasores = Unidades Hostiles en Áreas con {town} del Bot.",
      notes: {
        recruit: "El número de Unidades reclutadas por cada 2 {botPower} gastados viene determinado por el Nivel de Dificultad elegido.",
        macAvailability: "Ajusta la disponibilidad de Unidades del Ejército según la MAC (ver p. 5)."
      }
    },

    siege: {
      source: "(desde la Estructura Principal del Turno + desde las Acciones DEFENDER y MILITAR)",
      siegeProvinces: "Asedia Provincias Hostiles de hasta 3 de Valor Fiscal (el Bot ignora la Fuerza de Asedio). Gasta 1 {botPower} por cada punto de Valor Fiscal asediado.",
      preferredTargets: "Prefiere Provincias Core propias Ocupadas por el Enemigo, después {town}/{vassal} de cualquier Oponente y, por último, NPR.",
      atWarOrRebels: "¿Está en Guerra, o tiene {town} con {unrest} o {rebelTown} sobre ellas en esta Área?",
      removeArmy: "Retira el Ejército del tablero.",
      endTurn: "Fin del Turno",
      notes: {
        siegeRules: "Si el Bot solo tiene 1 {botPower} y no hay Provincias Pequeñas que Asediar, Asedia una Provincia Grande. Si el Bot tiene 3+ Ideas Militares, Asedia 2 de Valor Fiscal por cada {botPower} gastado (hasta 6 de Valor Fiscal en total). El Bot solo puede Asediar una Provincia Insular si tiene un Barco en una Zona Marítima adyacente, salvo que ignora este requisito para sus propias Provincias de jure. Consulta también los pasos 4–7 de 'Sieges & Occupation', reglas principales p. 28."
      }
    },

    spy: {
      source: "(desde la Acción DEFENDER + Cartas de Bot, 2.ª Acción: 13, 14; Cartas de Bot, Acción de Guerra: 13, 14)",
      atWarWithOpponent: "¿Está en Guerra con algún Oponente?",
      selectWarOpponent: "Selecciona ese Oponente.",
      opponentHas3Unrest: "¿El Oponente tiene 3+ {unrest}?",
      opponentRollRebelDice: "Acción Encubierta: el Oponente debe lanzar Dados de Rebeldes.",
      atWarWithNpr: "¿Está en Guerra con un NPR?",
      goToMilitary: "Ir a: MILITAR",
      selectOpponent: "Selecciona un Oponente.",
      add2Unrest: "Acción Encubierta: añade 2 {unrest} a una {town} del Oponente.",
      endTurn: "Fin del Turno"
    },

    colonize: {
      source: "(desde la Estructura Principal del Turno + Acción EXPLORAR + Carta de Bot: 12)",
      has2ColonistsAndConnectedClaim: "¿Tiene 2+ {colonist} y algún {claim} Colonial conectado a la Capital mediante una cadena continua de {town} y/o Barcos del Bot?",
      has3Colonists: "¿Tiene 3+ {colonist}?",
      remove3Colonists: "Retira 3 {colonist} del Bot de la Reserva de Colonos. Obtén 1 {botPower}.",
      removeAllColonists: "Retira todos los {colonist} del Bot de la Reserva de Colonos.",
      replaceColonialClaim: "Sustituye un {claim} Colonial por una {town} Pequeña.",
      preferredLocation: "Prefiere adyacente a una {town} del Bot y después Puertos.",
      goToExplore: "Ir a: EXPLORAR",
      endTurn: "Fin del Turno"
    },

    unrest: {
      source: "(Cartas de Bot: 13, 20, 21, 22, 23)",
      ownsProvincesWithUnrest: "¿Posee alguna Provincia con {unrest}?",
      removeUnrest: "Retira {unrest} de 2 Provincias Propiedad del Bot.",
      preferCapitalThenLargeTown: "Prefiere la Capital y después una {town} Grande.",
      hasLessThan2CoresAndCanPlace: "¿Tiene < 2 {core} en juego y puede colocar un {core}?",
      ownsEligibleAreaWithHigherTaxValue: "¿Posee todas las Provincias de un Área válida con mayor Valor Fiscal total que cualquier Área con {core} actual?",
      removeCore: "Retira el {core} en juego del Área con el menor Valor Fiscal total.",
      placeCore: "Coloca un {core} en el Área válida con el mayor Valor Fiscal total.",
      performSecondAction: "En su lugar, realiza la segunda Acción de la carta.",
      endTurn: "Fin del Turno",
      notes: {
        removeOtherBotsClaims: "Retira todos los {claim} de otros Bots de las Áreas donde se coloquen {core}."
      }
    },

    convert: {
      source: "(Cartas de Bot: 15, 16, 17, 18, 19)",
      anyAreasWithReligiousDissent: "¿Alguna Área con Disenso Religioso?",
      catholicAndAllAreasProtestantOrViceVersa: "¿Es Católico y todas sus Áreas son Protestantes, o viceversa?",
      allProvincesOwnedBySameReligion: "¿Todas las Provincias de un Área con disenso son Propiedad del Bot o de Reinos con la misma Religión de Estado?",
      changeStateReligion: "Cambia la Religión de Estado a la Religión mayoritaria. Obtén 1 {botPower}.",
      changeStateReligionEffects: "Pierde {prestige3} y un {royalMarriage}. Mueve 5 {influence}. Añade {unrest} y lanza Dados de Rebeldes.",
      convertArea: "Convierte el Área a la Religión de Estado. Obtén {prestige2}.",
      preferArea: "Prefiere el Área con la {town} propia de mayor Valor Fiscal.",
      performSecondAction: "En su lugar, realiza la segunda Acción de la carta.",
      endTurn: "Fin del Turno",
      notes: {
        changeStateReligion: "Mismo procedimiento que la Acción Change State Religion de la página 13 de las reglas principales."
      }
    },

    focus: {
      source: "(Cartas de Bot, 2.ª Acción: 16, 17, 18, 19, 20, 21, 22, 23)",
      cubeInFocusAreaAlready: "¿Ya hay {cube} en algún Área de Enfoque?",
      placeSpentBotPowerExistingArea: "Coloca el {botPower} gastado en esta Área de Enfoque.",
      placeSpentBotPowerNamedArea: "Coloca el {botPower} gastado en el Área de Enfoque indicada en la carta.",
      hasEnoughCubes: "¿Tiene ahora 2/3 {cube} en esta Área de Enfoque?",
      matchingMilestoneAvailable: "¿Hay disponible un Hito que coincida con el tipo de Enfoque?",
      scoreMatchingMilestone: "Puntúa un Hito que coincida con el tipo de Enfoque. Obtén 2 {botPower} y puntúa {prestige} de forma normal.",
      score3Prestige: "Obtén {prestige3}.",
      discardCubes: "Descarta todos los {cube} del Área de Enfoque.",
      putAsideBotCard: "Aparta la Carta de Bot.",
      notReshuffledThisAge: "(No se vuelve a barajar en esta Era)",
      endTurn: "Fin del Turno",
      notes: {
        difficultyLevel: "Según el nivel de dificultad elegido (ver p. 2)."
      }
    },

    idea: {
      source: "(Carta de Bot: 24)",
      cubeInNonEconomicFocusArea: "¿Hay {cube} en algún Área de Enfoque distinta de Economía?",
      availableIdeasMatchingFocus: "¿Hay Ideas disponibles que coincidan con este tipo de Enfoque?",
      selectFocusType: "Selecciona el tipo de Enfoque",
      manualSelection: "Selección manual",
      selectedFocusType: "Tipo de Enfoque seleccionado",
      pickIdea: "Elige una Idea que coincida con el tipo de Enfoque.",
      tagIdea: "Marca esta Idea y el espacio correspondiente de la Pista de Ideas del Tablero del Bot con una ficha de etiqueta.",
      scorePrestige: "Puntúa {prestige} de forma normal.",
      preferIdeas: "Prefiere Ideas no investigadas y después al azar.",
      endTurn: "Fin del Turno",
      focusTypes: {
        administrative: "Administrativo",
        diplomatic: "Diplomático",
        military: "Militar"
      }
    },

    papalCuria: {
      source: "(Carta de Bot: 14; Carta de Bot, 2.ª Acción: 15)",
      hasCatholicStateReligion: "¿Tiene Religión de Estado Católica?",
      uncontestedPapalController: "¿Es Controlador Papal sin oposición?",
      age1Or2: "¿Era I o II?",
      adjacentToMuslimArea: "¿Adyacente a un Área con 2+ Provincias Propiedad de Reinos Musulmanes y sin Excomunión/Cruzada activa?",
      catholicOpponentsNoActiveExcomCrusade: "¿Hay Oponentes Católicos y ninguna Excomunión/Cruzada activa?",
      papalControllerCanExcommunicate: "¿Es Controlador Papal, está en la Era I o II y puede usar la Excomunión para retirar un {cardinal} de un Oponente?",
      placeCardinal: "Coloca {cardinal} en el espacio n.º 1 de la Curia Papal.",
      ifNowPapalController: "Si ahora es Controlador Papal: retira la Excomunión sobre su propio Reino, si la hay.",
      excommunicateOpponent: "Excomulga a un Oponente. El Oponente pierde {prestige1} y 1 {cardinal}, y debe descartar 4 {influence} de Áreas Católicas.",
      placeCrusade: "Coloca una ficha de Cruzada y un {claim} en esa Área. Obtén {prestige1}. Recluta 2 Unidades si es posible.",
      preferAreaWithTown: "Prefiere un Área donde el Bot tenga {town}.",
      goToMilitary: "Ir a: MILITAR",
      militaryCrusadeTarget: "Selecciona un objetivo de Cruzada válido y salta directamente al paso Declarar la Guerra.",
      performSecondAction: "En su lugar, realiza la segunda Acción de la carta.",
      endTurn: "Fin del Turno"
    },

    military: {
      source: "(desde las Acciones PAPAL y ESPIONAJE + Cartas de Bot: 02, 03, 04; Cartas de Bot, Acción de Guerra: 05, 06, 12, 15)",

      goToMilitaryTargetChart: "Ir a: TABLA DE OBJETIVOS MILITARES",
      rollForTarget: "tira para determinar el objetivo: si es un NPR, coloca un {claim}",

      atWar: "¿Está en Guerra?",
      hasClaim: "¿Tiene {claim}?",
      doesRollMatchNonColonialClaim: "¿La tirada coincide con el n.º de un {claim} no Colonial?",
      anyAreaWithBattlegroundAdjacentBot: "¿Alguna Área con {battlegroundArea} adyacente al Bot?",
      botHasMarriage: "¿El Bot tiene {royalMarriage} con el lado {disputedSuccession} hacia arriba en un Área adyacente al Bot?",

      targetEligibleBotLessFourInfluence: "¿El objetivo es válido y el Bot tiene < 4 {influence} en las Áreas del objetivo si es un NPR?",
      hasCasusBelli: "¿Tiene Casus Belli?",
      targetIsOpponent: "¿El objetivo es un Oponente?",
      targetStrengthGreaterTwiceBotStrength: "¿Fuerza del objetivo ≥ 2× Fuerza del Bot?",

      botHasAlliesWithMoreTwoInfluence: "¿El Bot tiene Aliados NPR con 2+ {influence}, adyacentes al objetivo?",
      armySizeGreaterTwiceTargetStrength: "¿Tamaño del Ejército ≥ 2× Fuerza del objetivo?",
      hasMoreFourBotCubeLeft: "¿Le quedan 4+ {botPower} y más {manpower}?",

      dowTriggersNavalBattle: "¿La Declaración de Guerra provoca Batallas Navales?",
      dowTriggersLandBattle: "¿La Declaración de Guerra provoca Batallas Terrestres?",

      armyOnMapBoard: "¿El Ejército está en el tablero?",
      canSiegeInCurrentArea: "¿Puede Asediar en el Área actual?",

      hostileUnits: "¿Unidades Hostiles o Área a 1–2 espacios?",
      inclNavalBridge: "incl. Puente Naval",

      isPapalController: "¿Es Controlador Papal, puede Convocar una Cruzada y el objetivo es Musulmán?",

      triggerBattlePlaceArmy: "¿Provoca una Batalla?",
      triggerBattlePlaceShip: "¿Provoca una Batalla?",
      triggerBattleMoveArmy: "¿Provoca una Batalla?",

      canPlaceShip: "¿Puede colocar un Barco que resulte útil y no ha colocado ningún Barco este Turno?",

      placeClaimHere: "Coloca un {claim} aquí.",

      selectRealmThisClaimDisputedSuccessionValid: "Selecciona un Reino para el que este {claim}/{disputedSuccession} sea válido.",
      preferOpponent: "Prefiere Oponente",

      selectRealmThisClaimValid: "Selecciona un Reino para el que este {claim} sea válido.",
      preferOpponentThenHighestNPR: "Prefiere Oponente y después el NPR con mayor Fuerza",

      selectEnemyRealmGreatestStrength: "Selecciona el Reino Enemigo con mayor Fuerza.",

      forEachSuchAllyRemoveTwoInfluence: "Por cada Aliado de este tipo: retira 2 {influence} de las Áreas del NPR, obtén 2 {botPower} y voltea la {alliance} al lado {activeAlly}.",

      ifArmyLessThreeUnits: "Si el Ejército < 3 Unidades: aumenta el tamaño del Ejército a 3 Unidades.",

      spendTwoBotCubes: "Gasta 2 {botPower} para reclutar 7/9/11 Unidades.",

      checkForMAC: "Comprueba la MAC.",

      targetMaySendDefensiveCta: "Los objetivos pueden enviar CtA Defensivas (los NPR siempre lo hacen).",

      removeAllBotsInfluences: "Retira todos los {influence} del Bot de todas las Áreas del objetivo.",

      placeArmyOwnAreaClosestToEnemy: "Coloca el Ejército en el Área propia más cercana al Enemigo. Comprueba la MAC.",
      preferAreaWithEnemy: "Prefiere un Área con Enemigo y después la más cercana al Enemigo de mayor Fuerza.",

      moveArmyToEnemyArea: "Mueve el Ejército a un Área Enemiga dentro de su alcance.",
      preferLargestEnemy: "Prefiere: la mayor fuerza Enemiga que sea ≤ al propio Ejército. Después, un Área con {claim} propio.",

      placeShipToExtendNavalBridge: "Coloca un Barco para extender un Puente Naval.",

      placeClaimOnTarget: "Coloca {claim} sobre el objetivo.",
      preferAdjacentThenCapital: "Prefiere adyacente y después Capital",

      moveArmyToNonHostile: "Mueve el Ejército hasta 4 espacios a un Área no Hostil lo más cercana posible al Enemigo.",

      placeCrusadeTokenAndClaim: "Coloca una ficha de Cruzada y un {claim} en el Área del objetivo. Obtén {prestige1}. Recluta 2 Unidades.",

      declareWarOnTarget: "Declara la Guerra al objetivo. Gasta 1 {botPower} para reclutar 7/9/11 Unidades.",

      goToSiege: "Ir a: ASEDIO",
      gainBotPowerEqualsBotSpent: "Obtén {botPower} = {botPower} gastado en la Carta de Bot robada − 1",

      goNavalBattleAfterDow: "Ir a: BATALLA NAVAL",
      goToNavalBattle: "Ir a: BATALLA NAVAL",

      goLandBattleAfterDow: "Ir a: BATALLA TERRESTRE",
      goToLandBattle: "Ir a: BATALLA TERRESTRE",

      resolveAlphabeticOrder: "Resuelve en orden alfabético si hay varias Batallas.",

      endTurn: "Fin del Turno",
      gainBotCube: "Obtén 1 {botPower} si ganó una Batalla este Turno.",

      seeDowDescription: "Consulta las restricciones de Declaración de Guerra en la página 22 de las reglas principales para determinar si el objetivo es válido.",

      noteStrength: "Fuerza: NPR, ver reglas principales, página 36; PR = número de Unidades Desplegadas + {manpower} disponible.",

      botMustRemoveOneFewerInfluence: "El Bot debe retirar 1 {influence} menos si tiene un {royalMarriage} en el Reino objetivo.",

      numberUnitsDeterminedByDifficulty: "El número de Unidades reclutadas por cada {botPower} gastado viene determinado por el Nivel de Dificultad elegido.",

      adjustUnitAvailability: "Ajusta la disponibilidad de Unidades del Ejército según la MAC (ver p. 5)."
    },

    diplomacy: {
      source: "(Cartas de Bot: 05, 06, 07, 08)",

      allianceAndRoyalMarriageOnAdjacentNpr: "¿{alliance} + {royalMarriage} en algún NPR adyacente al Bot?",
      ignoreDistantNprs: "Ignora todos los NPR Lejanos a efectos de esta Acción.",

      allianceOnAdjacentNpr: "¿{alliance} en algún NPR adyacente al Bot?",

      twoPlusInfluenceNoAllianceAdjacentNpr: "¿2+ {influence} y ninguna {alliance} en algún NPR adyacente al Bot?",

      selectAdjacentNprHighestBaseTax: "Selecciona ese NPR con el mayor Impuesto Base.",
      preferNprMarriedToBot: "Prefiere un NPR con Matrimonio Real con el Bot.",

      allianceOnNprWithLessThanTwoInfluence: "¿{alliance} en algún NPR con < 2 {influence}?",

      selectNprHighestBaseTax: "Selecciona ese NPR con el mayor Impuesto Base.",
      preferAdjacentToBot: "Prefiere adyacente al Bot.",

      anyFreeSpaceInTargetAreas: "¿Hay algún espacio libre en las Áreas del objetivo?",

      addTwoInfluenceInTargetAreas: "Añade 2 {influence} en las Áreas del objetivo.",
      preferTargetCapital: "Prefiere la Capital del objetivo.",

      covertActionReplaceOpponentInfluence: "Acción Encubierta: sustituye 2 {influence} de un Oponente por 2 {influence} del Bot en las Áreas del objetivo.",

      goToDiplomaticTargetChart: "Ir a: TABLA DE OBJETIVOS DIPLOMÁTICOS",
      rollForTarget: "tira para determinar el objetivo",

      allianceOnTargetNpr: "¿{alliance} en el NPR objetivo?",

      rerollIfPreviousTarget: "tira para determinar el objetivo; vuelve a tirar si es igual a cualquier objetivo anterior de este Turno",

      botPowerLessThanTargetBaseTax: "¿{botPower} < Impuesto Base del objetivo?",

      spendTwoBotPowerAddTwoInfluenceInTargetRealm: "Gasta 2 {botPower} para añadir 2 {influence} en Áreas del Reino objetivo.",

      influenceAtLeastNprBaseTaxPlusOpponentInfluence: "¿Tiene {influence} ≥ Impuesto Base actual del NPR + {influence} de Oponentes en las Áreas del NPR?",
      ignorePapalStatesAndImperialInfluence: "Ignora los Estados Pontificios y la {influence} Imperial.",

      annexNprProvinces: "Anexiona todas las Provincias Propiedad de este NPR. Retira {influence} del Bot, igual al Impuesto Base actual del objetivo + {influence} de Oponentes, del Reino objetivo. Obtén {prestige3}.",
      preferNprAdjacentByLandThenHighestBaseTax: "Prefiere un NPR adyacente por tierra y después el de mayor Impuesto Base.",
      annexNprProvincesNote: "El Bot debe retirar 1 {influence} menos si tiene un {royalMarriage} en el Reino objetivo. Los Vasallos del objetivo son liberados como NPR independientes.",

      ownsAllProvincesInNewAreaAndLessThanTwoCores: "¿Ahora Posee todas las Provincias de una nueva Área y tiene < 2 {core} en juego?",

      spendBotPowerPlaceCore: "Si es posible, gasta 1 {botPower} para colocar un {core} en esa Área.",
      removeOtherBotsClaimsFromArea: "Retira todos los {claim} de otros Bots de esta Área.",

      higherBaseTaxThanNpr: "¿Tiene mayor Impuesto Base que el NPR?",

      hasDoubleBaseTaxOfNpr: "¿Tiene el doble del Impuesto Base del NPR?",

      canEnterRoyalMarriage: "¿Puede contraer un Matrimonio Real?",

      selectNprHighestBaseTaxForRoyalMarriage: "Selecciona ese NPR con el mayor Impuesto Base.",

      addTwoInfluenceInUnusedAreas: "Añade 2 {influence} en Áreas donde no se haya colocado {influence} este Turno.",
      preferTargetAreasThenAdjacentToBot: "Prefiere las Áreas del objetivo y después las adyacentes al Bot.",

      atPeaceAndHasSixPlusBotPowerLeft: "¿Está en Paz y le quedan 6+ {botPower}?",

      placeRoyalMarriageOnTargetCapital: "Coloca {royalMarriage} en la Capital del objetivo.",

      alliancePossibleForSelectedNpr: "¿Es posible una Alianza?",
      alliancePossibleForAddTwoInfluence: "¿Es posible una Alianza?",
      alliancePossibleNote: "Una Alianza requiere: el Bot está en Paz y tiene < 3 {alliance} en juego; el objetivo está en Paz y no es Aliado del Bot; y cualquier Aliado del objetivo tiene menos {influence} que el Bot en las Áreas del objetivo.",

      placeAllianceOnTargetCapital: "Coloca {alliance} en la Capital del objetivo y añade allí 1 {influence} si hay espacio.",

      diplomaticIdeasInfluenceNote: "Si el Bot ha investigado Ideas Diplomáticas, coloca {influence} adicional si tiene {influence} en su Reserva (el Bot ignora el límite de colocar un máximo de 2 {influence} en la misma Área):<br>1–2 Ideas Dipl.: +1 {influence}<br>3+ Ideas Dipl.: +2 {influence}.",

      endTurn: "Fin del Turno"
    },

    event: {
      source: "(desde la Estructura Principal del Turno + Carta de Bot: 01)",
      alreadyTakenEventAction: "¿Ya ha realizado una Acción de Evento?",
      restartMainTurn: "Descarta la Carta de Bot EVENTO. Vuelve a empezar: ESTRUCTURA PRINCIPAL DEL TURNO.",
      dieResult: "Resultado del dado",
      pickLeftmostEvent: "Elige el Evento revelado más a la izquierda. Obtén 1 {botPower} si hay {ducats} en el Evento.",
      pickSecondEvent: "Elige el segundo Evento revelado desde la izquierda. Obtén 1 {botPower} si hay {ducats} en el Evento.",
      pickRightmostEvent: "Elige el Evento revelado más a la derecha. Obtén 1 {botPower} si hay {ducats} en el Evento.",
      opponentEventRevealed: "¿Se ha revelado un Evento de un Oponente?",
      ownEventRevealed: "¿Se ha revelado un Evento propio?",
      atWarWithEventOpponent: "¿Está en Guerra con el Oponente cuyo Evento se ha revelado?",
      pickSuchEvent: "Elige ese Evento. Obtén 1 {botPower} si hay {ducats} en el Evento.",
      pickThisEvent: "Elige este Evento. Obtén 1 {botPower} si hay {ducats} en el Evento.",
      isOpponentsEvent: "¿Es un Evento de un Oponente?",
      resolveOptionA: "Resuelve la opción A) del Evento.",
      resolveOptionB: "Resuelve la opción B) del Evento.",
      resolveSecondaryEffects: "Resuelve los Efectos Secundarios del Evento.",
      canDevelopLargeTown: "¿Tiene 10+ {botPower} y < 8 {town} Grandes?",
      developLargeTown: "Gasta 2 {botPower} para desarrollar una {town} Pequeña y convertirla en una {town} Grande.",
      developLargeTownPreference: "Prefiere Provincia Core y después {town} sin {unrest}.",
      endTurn: "Fin del Turno"
    },

    navalBattle: {
      anyEnemyIsPr: "¿Algún Enemigo es un PR?",
      botIsAttacker: "¿El Bot es el atacante?",
      facingMultiplePrs: "¿Se enfrenta a varios PR?",
      determineMainDefender: "Determina el Defensor Principal.",
      seeMainDefender: "Ver p. 5",
      appointAdmiral: "El jugador humano puede Nombrar un Almirante.",
      playBattleActions: "El jugador humano puede jugar Acciones de Batalla aplicables.",
      rollBotBattleDice: "Lanza Dados de Batalla: los humanos no lanzan ningún dado.",
      botRollModifiers: "El/los Bot(s) lanzan:<br>0 Ideas Diplomáticas: 1 Dado de Artillería.<br>1+ Ideas Diplomáticas: 2 Dados de Artillería.<br>+1 dado por cada Barco Bot adyacente.<br>-1 dado si hay Acción de Batalla o Almirante.",
      scoreBotHits: "El/los Bot(s) consiguen un impacto por cada {battleArtillery} obtenido. Cada 2 Puertos adyacentes Propiedad de un Bot y cada 2 Barcos NPR que luchan del lado de un Bot cuentan como una tirada de {battleArtillery}.",
      botVsBot: "¿Bot contra Bot?",
      removeLowestHitBotShip: "Retira el Barco del Bot que haya conseguido menos impactos.",
      rerollIfTied: "Vuelve a tirar en caso de empate.",
      humanAssignCasualties: "El jugador humano debe asignar las Bajas. Cada Almirante recibe un {illHealth} por cada par de {battleDoubleInfantry} obtenido.",
      alternateShipTypes: "Alterna entre tipos de Barco al asignar impactos.",
      humanHasShipsLeft: "¿Al jugador humano le quedan Barcos?",
      humanReward: "El jugador humano puede recibir 1 {militaryPower}, si es el Jugador Activo. Roba 1 Barco Ligero si se jugó una Acción de Batalla o si tiene un Almirante.",
      removeBotShip: "Retira un Barco del Bot.",
      rollAgainstNpr: "Lanza Dados de Batalla: n.º de Dados de Artillería = n.º de Barcos Hostiles.",
      nprHitsEnough: "¿{battleArtillery} obtenidos ≥ 2 + Puertos del Bot adyacentes?",
      resolvingBotReward: "El Bot que resuelve obtiene 1 {botPower} si es la primera Batalla que gana este Turno.",
      endBattle: "Fin de la Batalla",
      notes: {
        firstBattleVictory: "El 1 {botPower} obtenido por la primera victoria en Batalla de un Turno para el Bot que resuelve (Jugador Activo) ya aparece indicado en la mayoría de los casos en las tablas de Acción del Bot correspondientes."
      }
    },

    landBattle: {
      anyEnemyIsPr: "¿Algún Enemigo es un PR?",
      botIsAttacker: "¿El Bot es el atacante?",
      facingMultiplePrs: "¿Se enfrenta a varios PR?",
      determineMainDefender: "Determina el Defensor Principal.",
      seeMainDefender: "Ver p. 5",
      battleInDefendersRealm: "¿La Batalla tiene lugar en el Reino del Defensor (Principal)?",
      appointGeneral: "El jugador humano puede Nombrar un General.",
      accountMilitaryIdeas: "Ten en cuenta las Ideas Militares.",
      militaryIdeasExample: "p. ej., \"Noble Knights\".",
      playBattleActions: "El jugador humano puede jugar Acciones de Batalla.",
      rollAgainstPr: "Lanza Dados de Batalla: los humanos lanzan dados de forma normal.",
      botRollModifiers: "El/los Bot(s) lanzan:<br>0 Ideas Militares: 5 Dados de Infantería.<br>1+ Ideas Militares: 6 Dados de Infantería.",
      assignCasualties: "Asigna las Bajas de forma normal.",
      seeCasualtyRules: "Ver Reglas Principales, p. 27",
      generalIllHealth: "El General del jugador humano recibe un {illHealth} por cada par de {battleDoubleInfantry} obtenido por el Bot.",
      anyBotHasUnitsRemaining: "¿Algún Bot tiene Unidades restantes?",
      bothSidesHaveUnitsRemaining: "¿Ambos bandos tienen Unidades restantes?",
      humanReward: "El jugador humano, si es el Jugador Activo, recibe 1 {militaryPower} si es su primera victoria en Batalla de este Turno.",
      resolvingBotReward: "Si al Bot que resuelve le quedan Unidades y es su primera victoria en Batalla de este Turno, recibe 1 {botPower}.",
      rollAgainstNonPr: "Lanza Dados de Batalla:<br>n.º de Dados de Infantería = n.º de Unidades Hostiles<br>Asigna Bajas:<br>n.º de Bajas del Bot = n.º de {battleInfantry}/{battleDoubleInfantry} obtenidos",
      botHasUnitsRemaining: "¿Al Bot le quedan Unidades?",
      removeAllHostileNonPrUnits: "Retira todas las Unidades {rebelUnit}/NPR.",
      removeNprAndRebels: "Retira todas las Unidades NPR. Retira {rebelUnit} = ½ del n.º inicial de Unidades del Ejército del Bot.",
      removeDefeatedArmies: "Retira del tablero los Ejércitos derrotados.",
      endBattle: "Fin de la Batalla",
      notes: {
        firstBattleVictory: "El 1 {botPower} obtenido por la primera victoria en Batalla de un Turno para el Bot que resuelve (Jugador Activo) ya aparece indicado en la mayoría de los casos en las tablas de Acción del Bot correspondientes."
      }
    },

    explore: {
      source: "(desde las Acciones NAVAL y COLONIZAR + Carta de Bot: 11)",
      has3ColonialClaims: "¿Tiene 3+ {claim} Coloniales?",
      vacantTerritoryAdjacentTown: "¿Territorio Vacante con un “1” adyacente a una {town} del Bot?",
      vacantTerritoryAdjacentShips: "¿Territorio Vacante con un “1” adyacente a Barcos del Bot?",
      hasQuestForNewWorld: "¿Tiene la Idea “Quest for the New World”?",
      researchQuestForNewWorld: "Investiga gratis la Idea “Quest for the New World”.",
      researchQuestForNewWorldDetail: "Puntúa {prestige} de forma normal y actualiza la Pista de Ideas del Bot.",
      canPlaceShipToExplore: "¿Puede colocar un Barco en una Zona Marítima desde la que pueda Explorar?",
      placeShipToExplore: "Coloca un Barco en esa Zona Marítima.",
      preferNewDistantTradeNode: "Prefiere una posición adyacente a un nuevo Nodo Comercial Lejano cuando sea posible.",
      triggersNavalBattle: "¿Provoca una Batalla Naval?",
      rollExploreDie: "Lanza el Dado de Exploración",
      has2BotPowerLeft: "¿Le quedan 2+ {botPower}?",
      spend1BotPower: "Gasta 1 {botPower}.",
      removeShipFromDistantContinent: "Retira un Barco de un Continente Lejano.",
      ifAny: "Si hay alguno.",
      rollMatchesEligibleTerritory: "¿La tirada coincide con un Territorio válido?",
      placeClaimEligibleTerritory: "Coloca {claim} en un Territorio válido. Obtén {prestige2}.",
      anyEligibleDistantProvinces: "¿Hay alguna Provincia Lejana válida por descubrir?",
      placeClaimDistantProvince: "Coloca {claim} en una de esas Provincias Lejanas.",
      preferDistantProvince: "Prefiere adyacente por tierra al Bot y después el Reino Lejano con mayor Impuesto Base.",
      addMatchingTradeCards: "Si este es el primer {claim} en este Continente Lejano, añade todas las Cartas Comerciales correspondientes.",
      couldPlaceShipWithin3Spaces: "¿Colocar un Barco podría situar al Bot a 3 espacios o menos de una nueva Zona Marítima Explorable?",
      colonialClaimConnected: "¿Algún {claim} Colonial está conectado al Área de Capital mediante una cadena de Áreas con {town} y/o Barcos del Bot?",
      has2Colonists: "¿Tiene 2+ {colonist}?",
      couldPlaceShipCloserConnection: "¿Colocar un Barco podría acercar al Bot a establecer una conexión?",
      placeShipQualifies: "Coloca un Barco en una Zona Marítima que cumpla los requisitos.",
      preferShortestRoute: "Prefiere la ruta más corta.",
      gainBotPowerAndColonist: "Obtén 1 {botPower} + 1 {colonist}.",
      scorePrestigeAndDiscard: "Obtén {prestige} = 2 + {colonist}. Descarta los {colonist} del Bot + {claim} Colonial.",
      goToNavalBattle: "Ir a: BATALLA NAVAL",
      gain1BotPowerIfVictorious: "Obtén 1 {botPower} si vence.",
      goToColonize: "Ir a: COLONIZAR",
      endTurn: "Fin del Turno",

      notes: {
        ignoreClaimedTerritories: "Ignora los Territorios donde el Bot ya tenga un {claim}.",
        questForNewWorldEvent: "Si el Bot es Castilla (o Portugal), y: el Bot no ha Investigado “QftNW”; el Bot todavía no ha elegido un Evento; y el Evento Christopher Columbus (o Casa da India) está expuesto: elige ese Evento y selecciona la opción A. Pagar esta Acción cuenta como pagar el coste de {botPower} de Investigar “QftNW”.",
        eligibleDistantLocation: "La Provincia/Territorio Lejano debe ser adyacente a una {town} o Barco del Bot. Los Territorios deben coincidir con el número obtenido.",
        addMatchingTradeCards: "Baraja en el Mazo Comercial cualquier Carta Comercial apartada cuyo número coincida con este Continente Lejano."
      }
    },

    naval: {
      source: "(Cartas de Bot: 09, 10; Cartas de Bot, Acción de Guerra: 11)",

      hostileSeaZoneAdjacent: "¿Alguna Zona Marítima Hostil adyacente a Puertos o Barcos del Bot?",
      placeShipHostileSeaZone: "Coloca un Barco en esa Zona Marítima.",
      preferBotPort: "Prefiere adyacente a un Puerto del Bot y después por orden alfabético.",

      goToNavalBattle: "Ir a: BATALLA NAVAL",
      gainBotPowerIfVictorious: "Obtén 1 {botPower} si vence.",

      emptySeaZoneAdjacentPorts: "¿Alguna Zona Marítima sin Barcos del Bot adyacente a Puertos del Bot?",
      has5ShipsMainMap: "¿Tiene 5+ Barcos en el Mapa Principal?",
      emptyMainMapSeaZoneAdjacentShips: "¿Alguna Zona Marítima del Mapa Principal sin Barcos del Bot adyacente a alguno de sus Barcos?",

      placeShipAvailableSeaZone: "Coloca un Barco en esa Zona Marítima.",
      preferTradeNodes: "Prefiere la que sea adyacente al mayor número de Nodos Comerciales y después por orden alfabético.",

      shipAdjacentPirates: "¿Tiene un Barco adyacente a algún Pirata?",

      removePirates: "Retira todos los Piratas de ese Nodo Comercial.",
      preferPirateTradeNode: "Prefiere el nodo con Mercader propio y después el que tenga menos Mercaderes.",

      drawTradeCardBots: "Roba una Carta Comercial: todos los Bots que puedan comerciar en algún nodo indicado en esta carta comerciarán en el nodo más alto para el que cumplan los requisitos. Para los Nodos Interiores, los Bots también necesitan una {town} adyacente. Los Bots obtienen 3 {ducats} si es un Nodo Lejano y 2 {ducats} si no lo es.",

      drawTradeCardHumans: "Cada jugador humano puede cobrar Ingresos Comerciales de cualquier nodo válido de esta carta donde tenga un Mercader. El Bot que resuelve obtiene {prestige2} por cada jugador humano que cobre Ingresos.",

      moveMerchant: "Mueve el Mercader de los Bots que hayan obtenido {botPower} al nodo válido más alto de la carta.",

      hasPlacedShipThisTurn: "¿Ha colocado un Barco este Turno?",

      canExplore: "¿Tiene < 3 {claim} Coloniales y algún Barco en una Zona Marítima Explorable o adyacente a ella?",

      goToExplore: "Ir a: EXPLORAR",

      endTurn: "Fin del Turno",

      notes: {
        ignoreDistantSeaZones: "Ignora las Zonas Marítimas Lejanas si el Bot no tiene “QftNW”.",
        piratesReduceIncome: "Los ingresos en {ducats} del Bot se reducen en 1 por cada Pirata en el nodo donde comercia.",
        noPrestigeWithoutMissions: "Si se juega sin Misiones para los jugadores humanos, no otorgues {prestige} a los Bots durante este paso."
      }
    },

    peace: {
      intro: "Sigue la secuencia normal de la Resolución de Paz (reglas principales p. 29) y usa esta tabla cada vez que sea el turno de un Bot de resolver una de sus Guerras.",

      automaticWhitePeace: "¿Paz Blanca Automática?",

      totalVictoryAgainstNpr: "¿Ha logrado una Victoria Total contra un Enemigo NPR?",

      annexEnemyNpr: "Anexiona todas las Provincias de jure del Enemigo que estén Controladas por el Enemigo o por el Bot (coloca {town}). Los Vasallos no Ocupados se liberan como NPR. Obtén {prestige} = Valor Fiscal de las Provincias Anexionadas.",
      removeOtherTokensAnnexedProvinces: "Retira cualquier otra ficha de todas las Provincias Anexionadas.",

      atWarHumanPlayer: "¿Está en Guerra con un jugador humano?",

      enemyPrSurrenders: "¿Se Rinde el PR Enemigo?",

      surrenderReturnProvinces: "Devuelve todas las Provincias a sus Propietarios Legítimos. El Bot obtiene y el Enemigo pierde {prestige2}, más {prestige2} por cada punto de Valor Fiscal devuelto por el Bot al Enemigo (máx. 12 {prestige}).",

      armyAtLeastDoubleEnemyPr: "¿Ejército ≥ 2× Unidades Terrestres Desplegadas por el PR Enemigo?",

      enemyPrLowIncomeNoBotTowns: "¿El PR Enemigo tiene actualmente Ingresos Fiscales inferiores a 8 y no Ocupa ninguna {town} del Bot?",

      returnUpTo5TaxValue: "Devuelve al Enemigo Provincias (incluida la Capital) por un valor de hasta 5 de Valor Fiscal. Obtén {prestige2} por cada punto de Valor Fiscal devuelto.",

      atWarAnotherBot: "¿Está en Guerra con otro Bot?",

      armyGreaterEnemyBot: "¿Ejército > Ejército del Bot Enemigo?",

      atWarNpr: "¿Está en Guerra con un NPR?",

      armyGreaterRebelUnits: "¿Ejército > {rebelUnit} en las Áreas del Bot?",

      occupiedTaxValueGreater: "¿Valor Fiscal de las Provincias de jure del Enemigo Ocupadas por el Bot > Valor Fiscal de las {town} propias Ocupadas por el Enemigo?",

      occupiedTaxValueGreaterOrEqual: "¿Valor Fiscal de las Provincias de jure del Enemigo Ocupadas por el Bot ≥ Valor Fiscal de las {town} propias Ocupadas por el Enemigo?",

      has2UnrestWithoutClaim: "¿Tiene 2+ {unrest} en Áreas sin {claim}?",

      offerWhitePeace: "El Bot ofrece Paz Blanca.",

      whitePeaceAccepted: "¿El Enemigo acepta la Paz Blanca?",

      returnAllProvincesLawfulOwners: "Devuelve todas las Provincias a sus Propietarios Legítimos.",

      endWarPrestigeLoss: "Termina la Guerra. Los PR (incluidos Bots) pierden {prestige1} cada uno.",

      offerKeepCurrentBoardState: "El Bot ofrece Paz con condiciones de Mantener el Estado Actual del Tablero.",

      peaceTermsAccepted: "¿El Enemigo acepta las Condiciones de Paz?",

      anyoneOccupiesEnemyCapital: "¿Alguien Ocupa la Capital del Enemigo?",

      capitalReturnEffects: "Todo Bot que devuelva la Capital al Enemigo obtiene {prestige2} y 4 {botPower}. Todo Bot que reciba de vuelta su Capital pierde 2 {botPower}. Los jugadores humanos pagan/reciben 10 {ducats} de forma normal.",

      enemyOccupiesBotTowns: "¿El Enemigo Ocupa alguna {town} del Bot?",

      swapIntro: "Si es posible, intercambia:",
      swapEnemyOccupiedByBot: "{town}/{vassal} Enemigas Ocupadas por el Bot",
      swapBotOccupiedByEnemy: "{town} del Bot Ocupadas por el Enemigo",
      swapMatchingTaxValue: "(de Valor Fiscal total equivalente)",

      endWarKeepCurrentBoardState: "Termina la Guerra y mantén el estado actual del tablero. Obtén {prestige} = Valor Fiscal de las Provincias Core Enemigas conservadas.",

      noPeaceConcluded: "No se ha concluido ninguna Paz.",

      willNotOfferPeace: "El Bot no ofrecerá ni impondrá Paz.",

      truceAndClaims: "Si el Enemigo sigue existiendo, voltea las fichas de Guerra a su lado de Tregua. Los PR de ambos bandos pueden añadir {claim} donde hayan perdido {town}.",
      botsAddMaxOneClaim: "Los Bots añaden como máximo 1 {claim}.",

      cleanupClaimsCores: "Retira los {claim} del Bot de las Áreas donde ahora Posea todas las Provincias. Por cada {claim} retirado, retira 2 {unrest} del Área del {claim} y obtén {prestige2}. Si es posible y hay < 2 {core} en juego, gasta 1 {botPower} para colocar un {core} aquí.",

      remainingWars: "¿Quedan Guerras por resolver durante este paso de la Resolución de Paz?",

      endResolution: "Fin de la Resolución de Paz del Bot",

      notes: {
        totalVictoryAgainstNpr: "El Bot debe Ocupar la Capital del NPR y Provincias de Valor Fiscal ≥ ½ de la Fuerza del NPR antes de la Guerra.",
        distantUnitsDoNotCount: "Las Unidades situadas en Continentes Lejanos donde el Bot no tenga {town} no cuentan.",
        whitePeaceAcceptance: "Los NPR siempre aceptan. Los Bots Enemigos aceptan si no pueden imponer Paz y tienen 2+ {unrest} en Áreas donde no tienen {claim}.",
        keepCurrentBoardStateAcceptance: "Los Bots Enemigos solo aceptan estas condiciones si ambos Ejércitos Bot tienen el mismo tamaño y el Valor Fiscal de las Provincias Ocupadas por cada bando es igual.",
        removeOtherBotClaims: "Retira todos los {claim} de otros Bots de las Áreas donde se coloquen {core}."
      }
    },

    peaceRebels: {
      title: "Fase de Paz y Rebeldes",
      intro: "Los Bots resuelven cada paso como se describe a continuación.",
      completePhase: "Completar Fase",

      normalRulesReminder: "Reglas Principales, p. 9",

      goToLandBattle: "Ir a: BATALLA TERRESTRE",
      goToBotPeaceResolution: "Ir a: RESOLUCIÓN DE PAZ DEL BOT",

      removeCasusBelliAndTruces: {
        title: "Retirar Casus Belli y Treguas",
        text: "Los Bots retiran las Treguas de forma normal. Los Bots nunca tienen fichas de CB."
      },

      nprInvasions: {
        title: "Invasiones NPR",
        text: "Los Bots pueden sufrir un máximo de 1 Invasión NPR. Resuelve la Invasión NPR que invada con más Unidades NPR (resuelve los empates por orden alfabético), después coloca el Ejército del Bot en el Área objetivo y resuelve la Batalla."
      },

      rebelsSiegeOrMove: {
        title: "Los Rebeldes Asedian o se Mueven",
        text: "Se resuelve de forma normal.",
        reminderIntro: "Si hay algún {rebelUnit} en el tablero, resuelve los siguientes pasos en orden. Dentro de cada paso, resuelve las Áreas desde la que tenga más {rebelUnit} hasta la que tenga menos, resolviendo los empates por orden alfabético.",
        withUnrest: "1. Áreas con {rebelUnit} y {unrest}: los {rebelUnit} Asedian cualquier {town} o {core} con {unrest} que puedan. Cada {rebelUnit} tiene una Fuerza de Asedio de 1. Asedia primero las Provincias Grandes cuando sea posible y después por orden alfabético.",
        coreProvinces: "Provincias Core: coloca un {rebelTown} sobre la {town} del propietario y cubre con un cubo el espacio vacío situado más a la derecha de su Pista de Ciudades.",
        nonCoreProvinces: "Las Provincias que no son Core son Liberadas: devuelve la {town} o el {core} al Tablero del jugador propietario y coloca una ficha de CB sobre el nuevo Propietario de la Provincia.",
        withoutUnrestMove: "2. Áreas con {rebelUnit} y sin {unrest}: mueve, si es posible, todos los {rebelUnit} menos 1 a un Área con {unrest} adyacente por Tierra. Prefiere el Área con más {unrest}, después la que tenga más {town} de PR y después por orden alfabético. Los {rebelUnit} no pueden moverse a un Área donde sean superados en número por Unidades Terrestres PR.",
        withoutUnrestBattle: "Resuelve inmediatamente una Batalla si hay Unidades Terrestres PR en esa Área, siguiendo las reglas normales para Rebeldes. Los Rebeldes no luchan contra otras Unidades Rebeldes.",
        withoutUnrestRemove: "Si ningún {rebelUnit} se movió durante el paso anterior, retira 1 {rebelUnit} del tablero."
      },

      peaceResolution: {
        title: "Resolución de Paz",
        turnOrder: "Se realiza en orden de Turno de forma normal.",
        humanPlayers: "Los jugadores humanos pueden resolver la Paz con Enemigos Bot como se describe en las reglas principales.",
        botTurn: "Cuando sea el turno de un Bot de resolver la Paz, utiliza el diagrama de flujo de la página 15.",
        removeArmy: "Si un Bot está ahora en Paz, retira el Ejército del Bot del tablero, salvo que tenga alguna {town} con {unrest} o {rebelTown} en el Área donde se encuentra su Ejército.",
        fullyAnnexed: "Si un Bot es Anexionado por Completo por un PR, consulta 'Replacing Bot Realms' en la página 6."
      },

      prestigePenalties: {
        title: "Penalizaciones de Prestigio",
        text: "Se resuelve de forma normal.",
        disputedSuccessionReminder: "Sucesión Disputada: voltea todas las fichas {royalMarriage} que aún muestren su lado {disputedSuccession}. Pierde {prestige3} por cada una que se voltee. Esta penalización puede evitarse si el jugador es el único PR con una {alliance} o {royalMarriage} en la Capital de ese Reino y además tiene allí la mayor cantidad de {influence} (mínimo 2 {influence} si es un NPR).",
        occupiedTownsReminder: "Ciudades Ocupadas: los jugadores cuyas {town} estén ahora Ocupadas por Enemigos o Rebeldes pierden Prestigio igual a su Valor Fiscal, hasta un máximo de 5."
      },

      interregnums: {
        title: "Interregnos",
        text: "Los Bots no se ven afectados por esto."
      },

      religiousDissent: {
        title: "Disenso Religioso",
        text: "Los Bots obtienen un máximo de 1 {unrest} en este paso."
      },

      gainRemoveUnrest: {
        title: "Obtener/Retirar Descontento",
        text: "Los Bots obtienen 2 {unrest} por estar en Guerra. Después, si un Bot tiene Ideas Administrativas, retirará 1–2 {unrest} según corresponda."
      },

      rollRebelDice: {
        title: "Lanzar Dados de Rebeldes",
        text: "Los Bots resuelven esto como se describe en 'Rebel Dice Rolls', en la página 4.",
        botRulesTitle: "Reglas de Dados de Rebeldes del Bot",
        allAtOnce: "Lanza a la vez los Dados de Rebeldes por todo el {unrest} del Bot, no Área por Área. Lanza un máximo de 5 Dados de Rebeldes.",
        maxBotPowerLoss: "Un Bot puede perder un máximo de 1 {botPower} cada vez que deba lanzar Dados de Rebeldes, independientemente del número de dados lanzados.",
        choiceProcess: "Usa el proceso de elección estándar del Bot al aplicar Rebeliones y retirar {unrest}. Sin embargo, aplica las Rebeliones en el Área donde se encuentre el Ejército del Bot siempre que sea posible.",
        liberatedProvince: "Si una Provincia del Bot es Liberada por Rebeldes, coloca un {claim} en esa Área.",
        resultsTitle: "Resultados de los Dados de Rebeldes",
        resultRebellion: "{rebelDieRebellion} Rebelión",
        resultLoseBotPower1: "{rebelDieLoseBotPower1} Pierde 1 {botPower}",
        resultLoseBotPower2: "{rebelDieLoseBotPower2} Pierde 1 {botPower}",
        resultLoseBotPower3: "{rebelDieLoseBotPower3} Pierde 1 {botPower}",
        resultNoEffect: "{rebelDieNoEffect} Sin efecto",
        resultRemoveUnrest: "{rebelDieRemoveUnrest} Retira 1 {unrest}"
      }
    },

    incomeUpkeep: {
      title: "Fase de Ingresos y Mantenimiento",

      intro:
        "Los Bots solo realizan los pasos específicos de Bot que se indican a continuación. Las Luchas de Poder y las Cruzadas se puntúan de forma normal; al final se incluye un recordatorio.",

      completePhase: "Completar Fase",

      refreshBotPower: {
        title: "Renovar Poder del Bot",
        text: "Descarta todo el {botPower} gastado y repone el {botPower} Disponible según el nivel de dificultad elegido.",
        townBonus: "Los Bots obtienen +1 {botPower} si tienen 20+ Ciudades Pequeñas u 8 Ciudades Grandes en juego (+2 {botPower} si se cumplen ambas condiciones).",
        difficultyTitle: "Poder del Bot por Dificultad",
        difficultyEasy: "Fácil: 6 {botPower}",
        difficultyNormal: "Normal: 7 {botPower}",
        difficultyHard: "Difícil: 8 {botPower}",
        difficultyVeryHard: "Muy Difícil: 9 {botPower}"
      },

      botEmperor: {
        title: "Emperador Bot — Autoridad Imperial y Poder del Bot",
        adjustAuthority: "Si el Emperador es un Bot, lanza un dado para determinar si {imperialAuthority} aumenta o disminuye, tal como se describe para los Emperadores NPR.",
        mainRulesReference: "Reglas Principales, p. 45",
        roll1: "Tirada 1: reduce {imperialAuthority} en 1.",
        roll2To5Lower: "Tirada 2–5: reduce {imperialAuthority} en 1 si la tirada es al menos 2 inferior a la {imperialAuthority} actual.",
        roll2To5Higher: "Tirada 2–5: aumenta {imperialAuthority} en 1 si la tirada es al menos 2 superior a la {imperialAuthority} actual.",
        roll6: "Tirada 6: aumenta {imperialAuthority} en 1.",
        gainBotPower: "Un Emperador Bot obtiene después {botPower} adicional igual al {diplomaticPower} + {militaryPower} proporcionado por el nivel actual de {imperialAuthority}.",
        gainPrestige: "Un Emperador Bot obtiene {prestige1} si está en +6 {imperialAuthority}."
      },

      papalControllerBonuses: {
        title: "Bonificaciones del Controlador Papal",
        botPower: "Si el Bot es el Controlador Papal, obtiene 1 {botPower}.",
        prestige: "Si tiene Control sin oposición de la Curia, también obtiene Prestigio igual al número de PR Católicos menos uno (máx. {prestige3})."
      },

      scoring: {
        title: "Puntuar Luchas de Poder y Cruzadas",
        intro: "Puntúa las Luchas de Poder y Cruzadas activas de forma normal.",
        powerStrugglesReference: "Reglas Principales, p. 43",
        powerStrugglesIntro: "Cualquier Lucha de Poder Activa se puntúa durante la Fase de Ingresos y Mantenimiento antes de ser descartada. Todos los jugadores que cumplan sus condiciones obtienen Prestigio como se describe a continuación.",
        powerStrugglesBattlegroundTax: "Por cada Área de Campo de Batalla, obtén {prestige1} por cada punto de Valor Fiscal de las Provincias controladas allí. El Valor Fiscal de {vassal} cuenta como la mitad.",
        powerStrugglesOnlyPr: "Obtén {prestige1} por ser el único PR con una {town} o {vassal} allí. Esto solo se aplica a Áreas de Campo de Batalla del Mapa Principal.",
        powerStrugglesDiplomacy: "Obtén {prestige1} por tener al menos 1 {alliance} o {royalMarriage} allí.",
        powerStrugglesAdditional: "Aplica cualquier criterio adicional de Prestigio indicado para esa Lucha de Poder. Los jugadores que cumplan esos criterios pueden obtener Prestigio adicional, mientras que algunos criterios pueden causar pérdida de Prestigio.",
        crusadeReference: "Reglas Principales, p. 46",
        crusadeIntro: "La Puntuación de Cruzada tiene lugar durante la Fase 4, Paso E, cuando la ficha de Cruzada está en el tablero. Retira la ficha cuando termine la Puntuación de Cruzada.",
        crusadeSuccess: "Cada Reino Católico Comprometido con la Cruzada obtiene {prestige2} si tiene alguna Unidad en el Área objetivo de la Cruzada y allí no quedan Provincias Propiedad de Reinos Musulmanes.",
        crusadeFailure: "En caso contrario, cada Reino Católico Comprometido con la Cruzada pierde {prestige2}.",
        crusadeNoCommitment: "Si en este momento ningún Reino está Comprometido con la Cruzada, el Controlador Papal pierde {prestige2}."
      }
    },

    cleanupPhase: {
      title: "Fase de Limpieza",

      intro:
        "Los Bots solo realizan los pasos que se indican a continuación. El Tablero de Estado se actualiza de forma normal.",

      completePhase: "Completar Fase",

      statusMat: {
        reference: "Reglas Principales, p. 10",
        text: "Pasa la ficha de Primer Jugador al jugador cuyo marcador de Estado de Ronda esté en el espacio Has Passed – 1st (o en el segundo espacio si el primer jugador en Pasar es el Primer Jugador actual), y después reinicia todos los marcadores de Estado de Ronda al espacio Event not Taken."
      },

      updateManpowerReserve: {
        title: "Actualizar la Reserva de Manpower",
        text: "Actualiza el {manpower} del Bot para que coincida con su Pista de Ciudades y {imperialAuthority}, de forma normal. El {manpower} mínimo del Bot es 3. Si se ha reducido el {manpower}, devuelve siempre primero Unidades de la Reserva de Manpower a la Reserva.",
        reference: "Reglas Principales, p. 10",
        reminder: "Normalmente, actualiza la Reserva de Manpower para reflejar cualquier cambio en su total. Las Unidades Regulares Desplegadas cuentan como parte de ese total. Si aumenta el Manpower, añade Unidades de la Reserva al Manpower Disponible. Si disminuye, deben devolverse Unidades a la Reserva."
      },

      colonists: {
        title: "Colonos",
        text: "Los Bots obtienen {colonist} por {claim} Colonial de forma normal. Descarta los {colonist} de un Bot si no tiene ningún {claim} Colonial y no quedan Territorios vacantes.",
        reference: "Reglas Principales, p. 10",
        reminder: "Añade a la Reserva de Colonos tantos {colonist} como {claim} Coloniales haya en el tablero. Un Reino puede añadir un máximo de 4 {colonist}."
      },

      alliancesEnd: {
        title: "Terminan todas las Alianzas entre Bots y PR",
        text: "Todas las {alliance} entre Bots y PR, si las hay, expiran y esas fichas {alliance} se retiran. Esto no tiene más consecuencias para ninguna de las partes."
      },

      botEmperor: {
        title: "Emperador Bot — Influencia Imperial",
        intro: "Si el Emperador es un Bot, ajusta su {influence} Imperial para que coincida con la {imperialAuthority} actual y después redistribúyela según las prioridades siguientes. Repite cada prioridad hasta que no haya ningún Área válida para ella o no quede {influence} Imperial, antes de pasar a la siguiente prioridad. Resuelve los empates prefiriendo Áreas con una {alliance} del Bot y después por orden alfabético.",
        priorityTitle: "Prioridades de Influencia Imperial",
        priority1: "El Área de Elector donde el Bot necesite la menor cantidad de {influence} Imperial para tener allí la mayor cantidad de {influence} —más que cualquier otro PR.",
        priority2: "Cualquier Área de Elector con espacio disponible.",
        priority3: "Cualquier Área del HRE con espacio disponible."
      },

      reshuffleBotDeck: {
        title: "Volver a barajar el Mazo del Bot",
        intro: "Las Cartas de Bot usadas se vuelven a barajar en el mazo según las reglas siguientes.",
        rulesTitle: "Rebarajado del Mazo del Bot",
        events: "Los EVENTOS siempre se vuelven a barajar.",
        ideas: "Las IDEAS siempre se vuelven a barajar.",
        focus: "Aparta las Cartas de Bot que se hayan usado para la Acción ENFOQUE. Estas no se vuelven a barajar.",
        remaining: "Vuelve a barajar la mitad de las demás Cartas de Bot usadas, redondeando hacia arriba.",
        removedCards: "Las cartas que no se vuelvan a barajar se retiran durante el resto de la Era actual."
      }
    },

    endOfAge: {
      title: "Rutina de Fin de Era",

      intro:
        "Al final de cada Era, resuelve las reglas específicas de Bot y la Rutina normal de Fin de Era que se indican a continuación.",

      completePhase: "Completar Rutina",

      mainRulesReference:
        "Reglas Principales, p. 11",

      resetBotDeck: {
        title: "Reiniciar el Mazo del Bot",
        text: "Reinicia todas las Cartas de Bot según la composición de mazo indicada para este Reino Bot y después baraja el Mazo del Bot completo."
      },

      prepareNextAge: {
        title: "Preparar la Siguiente Era",
        eventDeck: "Prepara y coloca el Mazo de Eventos de la siguiente Era.",
        noNextAge: "Si no hay una siguiente Era, procede a la Puntuación Final.",
        milestones: "Retira del juego todos los Hitos de la Era anterior y sustitúyelos por 4 Hitos robados del mazo correspondiente a la siguiente Era.",
        ideas: "Añade a sus mazos de Ideas cualquier Idea que pase a ser válida en la siguiente Era. Después sustituye cualquier Idea no Básica no investigada que esté expuesta por una Idea al azar del mismo tipo."
      },

      leastPrestige: {
        title: "Jugador con Menos Prestigio",
        text: "El jugador con menos Prestigio puede sustituir 1 nueva Idea o Hito expuesto por una carta de su elección del mazo correspondiente.",
        tie: "Si hay empate por el menor Prestigio, omite este paso."
      },

      royalMarriages: {
        title: "Matrimonios Reales",
        botRule: "Los Bots no retiran ninguno de sus {royalMarriage}.",
        scorePrestige: "Un jugador con al menos 1 {royalMarriage} en juego obtiene {prestige1}.",
        normalRule: "Normalmente, ese jugador debe retirar después 1 {royalMarriage} del tablero, de un NPR si es posible, o pagar 2 Ducados para evitar retirarlo.",
        reciprocalRemoval: "Si otro jugador retira su {royalMarriage} de tu Reino y esto te obliga a retirar el {royalMarriage} recíproco de su Reino, aún debes retirar otro {royalMarriage}, si tienes uno, o pagar 2 Ducados."
      }
    },

    finalScoringPhase: {
      title: "Puntuación Final",

      intro:
        "Los Bots obtienen Prestigio exactamente igual que los jugadores humanos. Usa las reglas normales de Puntuación Final que se indican a continuación.",

      completePhase: "Completar Puntuación Final",

      mainRulesReference:
        "Reglas Principales, p. 11",

      startFinalScoring: {
        title: "Cuándo Comienza la Puntuación Final",
        intro: "La Puntuación Final normalmente se inicia al final de la última Ronda, después de completar la Fase 5, cuando se cumple cualquiera de las siguientes condiciones:",
        noEvents: "Al final de una Ronda ya no quedan Cartas de Evento en los mazos del escenario elegido.",
        prestigeLead: "Un jugador tiene 100+ de Prestigio y al menos 20 de Prestigio más que cualquier otro jugador.",
        allTownsAndVassals: "Un jugador tiene todas sus {town} (Grandes y Pequeñas) y {vassal} en el tablero al final de la Fase 5."
      },

      scorePrestige: {
        title: "Puntuar Prestigio",
        missions: "Revela y puntúa cualquier Misión de tu mano cuyos requisitos se hayan cumplido. Ignora cualquier Efecto de Misión.",
        taxIncome: "Obtén Prestigio igual al Impuesto Base actual + Impuesto de Vasallos.",
        cores: "Obtén {prestige1} por cada {core} en juego.",
        royalMarriages: "Obtén {prestige1} por cada {royalMarriage} en juego.",
        alliances: "Obtén {prestige2} por cada {alliance} en juego.",
        papalController: "El Controlador Papal obtiene Prestigio igual al número de PR Católicos.",
        emperor: "El Emperador del HRE obtiene Prestigio igual a la {imperialAuthority} actual.",
        stability: "Obtén Prestigio igual a 2 × la {stability} actual. Por tanto, una {stability} negativa da Prestigio negativo."
      },

      prestigePenalties: {
        title: "Penalizaciones de Prestigio",
        occupiedTowns: "Resta {prestige1} por cada punto de Valor Fiscal de cada {town} Ocupada por Rebeldes o Enemigos.",
        interest: "Resta {prestige1} por cada {interest} en la Tesorería."
      },

      determineWinner: {
        title: "Determinar el Ganador",
        mostPrestige: "Gana el jugador con más Prestigio.",
        monarchPower: "En caso de empate, gana el jugador con más {monarchPower}.",
        ducats: "Si el empate continúa, gana el jugador con más {ducats} en la Tesorería.",
        sharedVictory: "Si todavía hay empate, los jugadores empatados comparten la victoria."
      }
    },

    actionNames: {
      event: "Evento",
      military: "Militar",
      diplomacy: "Diplomacia",
      naval: "Naval",
      explore: "Explorar",
      colonize: "Colonizar",
      unrest: "Descontento",
      papalCuria: "Curia Papal",
      convert: "Convertir",
      idea: "Idea",
      spy: "Espionaje",
      focus: "Enfoque",
      focusEconomy: "Enfoque (Eco.)",
      focusExpansion: "Enfoque (Exp.)",
      focusPolitics: "Enfoque (Pol.)",
      focusWarfare: "Enfoque (Guerra)",
      defend: "Defender",
      siege: "Asedio",
      landBattle: "Resolución de Batalla Terrestre",
      navalBattle: "Resolución de Batalla Naval",
      peace: "Resolución de Paz"
    },
  }
};

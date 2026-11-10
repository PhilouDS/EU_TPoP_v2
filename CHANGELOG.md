# Changelog — EU_TPoP

Ce fichier répertorie les principales modifications apportées à l'application **EU_TPoP** au fil des versions.

Les versions `0.x.x` correspondent à la phase de développement initiale.
La version `1.0.0` correspondra à la première version complète et utilisable de l'application.

---

## [2.0.0] — 2026-08-28

- Création du fichier `.apk`.
- Fonctionnalités validées sur un appareil Android.

---

## [0.28.0] — 2026-08-28

### Ajouté en 0.28.0

### Credits

- Activation de la page **Credits** depuis le menu principal.
- Reprise des crédits de l'application originale :
  - développement et publication de l'application : Philippe De Sousa ;
  - conception et développement du jeu : Eivind Vetlesen ;
  - conception du mode solo : Dávid Turczi ;
  - éditeurs du jeu : Aegir Games et Paradox Interactive.
- Ajout de la mention **v2** dans le titre de la page afin de distinguer cette nouvelle version de l'application originale.
- Ajout de l'avertissement précisant qu'Aegir Games et Paradox Interactive ne sont pas les éditeurs de l'application.
- Ajout du renvoi vers le livret de règles pour les autres crédits du jeu.
- Nouvelle présentation dédiée des crédits :
  - regroupement des informations dans une carte ;
  - mise en valeur distincte des fonctions et des noms ;
  - présentation spécifique de l'avertissement concernant les éditeurs ;
  - adaptation automatique aux thèmes clair et sombre.

### Nouveaux dictionnaires

- Ajout du dictionnaire allemand `de.js`.
- Ajout du dictionnaire espagnol `es.js`.
- Les dictionnaires allemand et espagnol reprennent intégralement la structure du dictionnaire anglais `en.js`.
- Conservation de toutes les clés de traduction et de tous les placeholders d'iconographie `{...}`.
- Conservation des abréviations de jeu devant rester identiques quelle que soit la langue, notamment PR, NPR, MAC, NC et CtA.
- Conservation des noms de zones utilisés sur les plateaux dans les Bot Realm Targeting Charts lorsque leur traduction empêcherait de retrouver directement le nom imprimé sur le jeu.
- Conservation du résultat spécial `RAID*` sans modification.

### Sélection de la langue

- Extension du système de traduction aux quatre langues disponibles :
  - 🇬🇧 EN ;
  - 🇫🇷 FR ;
  - 🇩🇪 DE ;
  - 🇪🇸 ES.
- Remplacement de l'ancien bouton de changement EN/FR par un menu déroulant.
- La langue actuellement utilisée est automatiquement sélectionnée dans le menu.
- Conservation de la langue choisie dans `localStorage`.
- Mise à jour automatique de l'attribut `lang` du document lors d'un changement de langue.

### Amélioration de l'interface

- Remplacement du bouton de changement de thème clair/sombre par un **switch** dédié.
- Ajout des symboles ☀ et ☾ de part et d'autre du switch pour identifier immédiatement les deux thèmes.
- Position du curseur :
  - à gauche pour le thème clair ;
  - à droite pour le thème sombre.
- Conservation du système existant de mémorisation du thème.
- Harmonisation visuelle du sélecteur de langue et du switch avec les autres contrôles de la barre de réglages.

### Validé en 0.28.0

- Navigation vers la page **Credits** depuis le menu principal.
- Présentation des crédits en modes clair et sombre.
- Affichage bilingue EN/FR de la page **Credits**.
- Menu déroulant de sélection de la langue.
- Sélection et mémorisation de la langue active.
- Switch de sélection du thème clair/sombre.
- Changement immédiat du thème depuis le switch.

---

## [0.27.0] — 2026-08-28

### Ajouté en 0.27.0

- Implémentation complète de **Peace Resolution** pour les joueurs humains.
- Activation du bouton **Peace Resolution** dans le menu **Player Resolutions**.
- Création du fichier de données dédié `peace-resolution.js`.
- Ajout d’un état et d’un historique propres à **Peace Resolution**.
- Ajout d’un renderer dédié dans `player-resolutions.js`.
- Conservation de la présentation séquentielle utilisée pour les autres diagrammes :
  - questions Oui / Non ;
  - actions à confirmer ;
  - rappels de règles contextuels ;
  - navigation **Previous Step** ;
  - boutons **Main Menu** et **Player Resolutions Menu**.
- Adaptation du diagramme imprimé à une navigation interactive tout en conservant ses embranchements et son ordre de résolution.
- Conservation des notes numérotées du diagramme comme références principales, sans réécriture de leur contenu anglais.
- Ajout ponctuel de rappels courts issus des règles lorsque ceux-ci apportent une information utile au moment de résoudre une étape.

### Peace Resolution

- Implémentation des différentes parties de la résolution de Paix :
  - **Automatic White Peace** ;
  - **Total Victory** ;
  - résolution des **Remaining Wars** ;
  - application des différents **Peace Terms** ;
  - conséquences finales de la **Peace Resolution**.
- Intégration de **Automatic White Peace** avec :
  - vérification de ses conditions ;
  - perte de Prestige correspondante ;
  - placement des Truce tokens ;
  - prise en compte des Vassals et Active Allies.
- Intégration de la détection des **Total Victories**.
- Ajout de la note officielle précisant :
  - les conditions normales de Total Victory contre un PR ;
  - le cas particulier d’un Bot contre un NPR.
- Gestion de l’ordre de résolution des Total Victories selon le player order.
- Gestion du cas où le Victor est un Bot avec renvoi vers le **Bot Peace Resolution** déjà existant.
- Conservation de l’état du diagramme humain lors de ce renvoi.
- Retour automatique vers **Total Victory** après la fin du **Bot Peace Resolution**, afin de poursuivre la résolution des autres Guerres.
- Gestion du type de Loser pour déterminer les branches disponibles :
  - joueur humain ;
  - Bot ;
  - NPR.
- Intégration de la branche **Full Annexation**.
- Intégration de la branche **Vassalization**.
- Ajout de l’action commune suivant Full Annexation ou Vassalization :
  - retrait des War tokens ;
  - retrait des Occupied tokens ;
  - retrait des tokens des PR autres que ceux du Victor ;
  - gestion des Claims et de l’Unrest ;
  - gestion du retrait éventuel d’un Active Ally.
- Utilisation du symbole `{activeAlly}` lorsque le diagramme ou l’interface nécessite l’icône Active Ally.

### Remaining Wars

- Intégration de la vérification des PR possédant encore des Guerres non résolues.
- Intégration de la question demandant si l’un de ces joueurs souhaite mettre fin à sa Guerre.
- Ajout de la note officielle précisant qu’un joueur ayant répondu **No** ne peut plus répondre **Yes** plus tard durant la même Peace Resolution.
- Sélection de l’Active Player selon l’ordre général du Turn.
- Gestion du cas où l’Active Player est un Bot avec renvoi vers **Bot Peace Resolution**.
- Sélection par l’Active Player de l’une de ses Guerres non résolues.
- Intégration de la question **Either side Surrenders?** avant la détermination du type d’Enemy.
- Ajout de la note officielle concernant la Surrender :
  - seuls les joueurs humains peuvent Surrender ;
  - le joueur qui Surrenders devient le Loser ;
  - son Enemy devient le Victor ;
  - les Peace Terms applicables suivent les conditions précisées par le diagramme.
- Intégration de la perte de 2 Prestige pour le Loser et du gain de 2 Prestige pour le Victor après une Surrender.
- Intégration de la branche spéciale permettant ensuite au Victor de choisir une **Humiliation**.
- Gestion de la question déterminant si l’Enemy est un joueur humain.
- Intégration des deux conditions de Partial Victory :
  - comparaison des Deployed Land Units entre deux joueurs humains ;
  - comparaison des Deployed Land Units du joueur actif avec les Deployed Land Units et la Manpower d’un Enemy non humain.
- Ajout de la note officielle concernant les Units présentes sur les Distant Continents.

### Peace Terms

- Implémentation des différents Peace Terms du diagramme :
  - **Full Annexation** ;
  - **Vassalization** ;
  - **Humiliation** ;
  - **Keep Current Board State** ;
  - **Secure Desired Succession** ;
  - **Force Conversion** ;
  - **Negotiated Peace** ;
  - **White Peace**.
- Conservation de l’ordre exact des questions et actions du diagramme, notamment :
  - Vassalization avant Keep Current Board State lorsque le Loser est un NPR ;
  - Humiliation avant Keep Current Board State lorsqu’elle est accessible ;
  - Secure Desired Succession après le refus de Keep Current Board State ;
  - Force Conversion après le refus de Secure Desired Succession.
- Intégration de toutes les notes officielles 1 à 10 aux étapes correspondantes.
- Correction volontaire de la coquille `Surrrenders` présente sur le diagramme imprimé en utilisant `Surrenders` dans l’application.
- Intégration de **Humiliation** :
  - retour des Provinces Occupées ;
  - gains et pertes de Prestige ;
  - condition particulière lorsque le Loser a Surrendered.
- Intégration de **Keep Current Board State** :
  - retour des Capitales Occupées ;
  - paiement de Ducats ou perte de Bot Power ;
  - conservation des Provinces Occupées ;
  - échanges éventuels de Provinces ;
  - retour de Provinces contre des Ducats ;
  - Libération de Provinces ;
  - gains éventuels de Prestige, Alliance et Influence.
- Intégration de **Secure Desired Succession** avec :
  - Royal Marriages ;
  - Disputed Succession ;
  - Alliances ;
  - Active Allies ;
  - Prestige ;
  - Influence ;
  - effets éventuels sur le Ruler du Loser.
- Intégration de **Force Conversion** :
  - changement de State Religion ;
  - gains et pertes de Prestige ;
  - gains et pertes d’Influence.
- Intégration de **Negotiated Peace** lorsque les deux camps sont des joueurs humains.
- Ajout de la question **Non-White Peace terms agreed?**.
- Gestion de **White Peace** lorsque les autres Peace Terms ne sont pas conclus.
- Retour vers la vérification des **Total Victories** lorsqu’une White Peace n’est pas acceptée.
- Retour de toutes les Provinces Occupées à leurs Lawful Owners lorsqu’un Peace Term l’exige.
- Placement des **Truce tokens** après la conclusion d’une Paix.
- Ajout d’un rappel contextuel issu des règles concernant :
  - la durée des Truces ;
  - les Active Allies ;
  - les Vassal Realms.
- Ajout, après le placement des Truce tokens, de l’action permettant aux PR de défausser des Claims dans les Areas où ils ont gagné des Provinces afin de retirer de l’Unrest.
- Retour vers la vérification des **Total Victories** après la résolution complète d’une Guerre.

### Fin de Peace Resolution

- Intégration du déplacement des Land Units présentes dans des Neutral Areas vers la Friendly Area la plus proche.
- Ajout du rappel des règles concernant :
  - le calcul de la distance par Areas et Sea Zones ;
  - le choix en cas d’égalité ;
  - l’absence de coût en Military Power.
- Intégration du retour des War tokens sur leur face Peace pour les PR désormais en Paix.
- Intégration du retour des Allied Units présents dans les Armies et la Manpower Reserve vers la General Supply.
- Ajout de l’écran **End Peace Resolution**.

### Dictionnaires et iconographie

- Extension complète des dictionnaires anglais et français avec les textes de **Peace Resolution**.
- Conservation fidèle du texte anglais des notes officielles 1 à 10.
- Ajout de leur traduction française.
- Utilisation des icônes existantes dans les différentes actions et règles, notamment :
  - Ducats ;
  - Prestige ;
  - Bot Power ;
  - Town ;
  - Vassal ;
  - Claim ;
  - Unrest ;
  - Alliance ;
  - Influence ;
  - Royal Marriage ;
  - Disputed Succession ;
  - Active Ally ;
  - Manpower ;
  - Military Power.
- Utilisation de l’icône `{activeAlly}` lorsque le symbole Active Ally est requis, tout en conservant exceptionnellement le texte littéral **Active Allies** dans la note officielle 1 afin de respecter le texte imprimé.

### Validé en 0.27.0

- Parcours complet de **Peace Resolution**.
- Validation de la branche **Automatic White Peace**.
- Validation des différentes branches de **Total Victory**.
- Validation du renvoi vers **Bot Peace Resolution** et du retour correct vers la vérification des Total Victories.
- Validation des branches **Full Annexation** et **Vassalization**.
- Validation de la résolution des **Remaining Wars**.
- Validation de la branche **Surrender**.
- Validation des branches de Partial Victory contre :
  - un joueur humain ;
  - un Bot ;
  - un NPR.
- Validation des différents Peace Terms.
- Validation des embranchements complexes liés aux nombreuses flèches croisées du diagramme imprimé.
- Validation de **Negotiated Peace** et **White Peace**.
- Validation du placement des Truce tokens puis de la gestion des Claims et de l’Unrest.
- Validation de la fin complète de **Peace Resolution**.
- Validation de la navigation **Previous Step** sur l’ensemble du diagramme.
- **Player Resolutions** dispose désormais de ses trois résolutions fonctionnelles :
  - **Land Battle Resolution** ;
  - **Naval Battle Resolution** ;
  - **Peace Resolution**.

---

## [0.26.1] — 2026-08-28

### Supprimé en 0.26.1

- Suppression de la variable inutilisée `currentBotActionEntryStep` dans `app.js`.
- Suppression de la fonction inutilisée `renderPlaceholderPage()` dans `app.js`.

### Ajouté en 0.25.0 et 0.26.0

- Début de l'implémentation de la dernière grande partie de l'application : **Player Resolutions**.
- Remplacement de la page temporaire **Player Resolutions** par un véritable menu dédié.
- Ajout dans ce menu des trois résolutions destinées aux joueurs humains :
  - **Land Battle Resolution** ;
  - **Naval Battle Resolution** ;
  - **Peace Resolution**.
- Implémentation complète et validation des diagrammes :
  - **Land Battle Resolution** ;
  - **Naval Battle Resolution**.
- Conservation de **Peace Resolution** comme entrée désactivée dans l'attente de son implémentation.
- Utilisation des diagrammes officiels comme structure de référence, tout en adaptant leur présentation au fonctionnement séquentiel de l'application.
- Ajout de rappels de règles courts et contextuels sous forme de « pense-bêtes », uniquement lorsqu'ils apportent une information utile à l'étape en cours.
- Conservation d'une présentation volontairement légère afin que l'utilisation de l'application reste plus rapide et agréable que la consultation directe du livret de règles.

### Player Resolutions

- Création du renderer dédié aux **Player Resolutions** dans `js/features/player-resolutions/player-resolutions.js`.
- Création du dossier de données dédié `js/features/player-resolutions/data/`.
- Ajout d'états et d'historiques indépendants pour les résolutions de batailles terrestre et navale.
- Intégration du bouton **Previous Step** avec restauration de l'étape et de l'état correspondant.
- Ajout d'un bouton **Player Resolutions Menu** permettant de revenir directement au menu des résolutions du joueur.
- Conservation du bouton **Main Menu**.
- Activation individuelle des entrées du menu uniquement lorsque leur résolution est implémentée.
- Intégration des nouvelles résolutions dans la navigation existante sans modifier le fonctionnement général du routeur.

### Land Battle Resolution

- Création du fichier de données dédié `land-battle.js`.
- Implémentation du diagramme complet de **Land Battle Resolution** destiné aux joueurs humains.
- Intégration de la nomination ou de l'assignation d'un Général pour l'attaquant.
- Gestion du cas où plusieurs PR participent à la défense.
- Intégration de la détermination du **Main Defender** :
  - PR possédant le plus d'Units dans l'Area ;
  - départage par le PR défenseur ayant joué le plus récemment.
- Intégration de la nomination ou de l'assignation d'un Général par le Défenseur principal lorsque son Army se trouve dans son propre Realm.
- Gestion des défenseurs Bot avec renvoi vers le **Bot Land Battle Resolution** déjà existant.
- Intégration des Enemy NPR Provinces et du placement des NPR Units selon leur MC.
- Ajout des rappels concernant :
  - les NPR Provinces contenant déjà des Units Hostile avant le Turn ;
  - les Areas ne contribuant pas à la MC lorsqu'elles contiennent des Units appartenant aux Enemies du NPR ;
  - l'impossibilité pour une même MC de contribuer à plusieurs Battles au cours du même Turn.
- Intégration du tirage d'une Military Card pour déterminer la présence éventuelle d'un Leader lorsque 3+ Rebel/NPR Units défendent sans PR.
- Intégration de la prise en compte des **Military Ideas** avant les jets de Battle Dice.
- Intégration des **Battle Actions** avec rappel de l'ordre :
  - Attacker ;
  - Main Defender.
- Ajout de l'icône `{battleAction}` correspondant au caractère `€` de la police **ThePriceOfPowerIcons**.
- Intégration des jets de **Land Battle Dice** :
  - 3 Infantry Dice de base par camp ;
  - ajout des Battle Dice fournis par les Leaders ;
  - ajout des Battle Dice fournis par les Battle Actions.
- Ajout d'un rappel concernant le résultat spécial `{battleDoubleInfantry}` et les Military Ideas permettant d'utiliser sa seconde touche d'Infantry.
- Intégration de l'assignation des Casualties.
- Ajout d'un rappel concernant l'alternance des Casualties entre Mercenary, Regular et Allied Units lorsque plusieurs catégories sont présentes.
- Ajout conditionnel d'un rappel supplémentaire lorsque plusieurs PR défendent la même Battle.
- Intégration des blessures des Generals avec utilisation de l'icône `{illHealth}`.
- Ajout d'un rappel concernant :
  - les paires de résultats `{battleDoubleInfantry}` ;
  - la nécessité que le camp du General ait subi au moins une Casualty ;
  - la mort d'un General recevant un second `{illHealth}`.
- Gestion de la fin d'un Battle Round selon les Units encore présentes.
- Intégration des règles de Retreat des NPR Units.
- Conservation du rappel selon lequel les Rebel Units ne Retreat jamais.
- Décomposition interactive de la décision de Retreat :
  - décision de l'Attacker ;
  - puis décision du Defender si l'Attacker reste.
- Retour à **Play Battle Actions** lorsqu'aucun camp ne Retreat et qu'un nouveau Battle Round commence.
- Conservation comme étape commune de la case du diagramme concernant les joueurs qui Retreat :
  - 1 Casualty supplémentaire ;
  - déplacement des Units restantes vers une Friendly ou Neutral adjacent Area ;
  - retrait de toutes les NPR Units.
- Ajout de la note rappelant que l'Attacker doit Retreat vers son point de départ.
- Détermination du Winner après la résolution des Retreats.
- Intégration du gain de 1 `{militaryPower}` pour l'Active Player lorsqu'il remporte sa première Battle du Turn pendant l'Action Phase.

### Naval Battle Resolution

- Création du fichier de données dédié `naval-battle.js`.
- Implémentation du diagramme complet de **Naval Battle Resolution** destiné aux joueurs humains en réutilisant la structure validée avec **Land Battle Resolution**.
- Intégration de la nomination ou de l'assignation d'un Admiral par l'Attacker.
- Gestion du cas où plusieurs PR participent à la défense.
- Intégration de la détermination du **Main Defender** selon le nombre de Ships présents dans la Sea Zone.
- Intégration de l'assignation d'un Admiral par le Main Defender.
- Ajout du rappel selon lequel un Defender peut **Assign** un Admiral disponible mais ne peut pas **Appoint** un nouvel Admiral au début d'une Naval Battle.
- Gestion des défenseurs Bot avec renvoi vers le **Bot Naval Battle Resolution** déjà existant.
- Intégration des Enemy NPR Ports et du placement des NPR Ships selon leur NC.
- Ajout des rappels concernant :
  - les NPR Ports dont les Hostile Ships étaient déjà présents avant le Turn ;
  - les Areas ne contribuant pas à la NC lorsqu'elles contiennent des Units appartenant aux Enemies du NPR ;
  - l'impossibilité pour une même NC de contribuer à plusieurs Battles au cours du même Turn.
- Intégration du tirage d'une Military Card pour déterminer la présence éventuelle d'un Leader lorsque 3+ Pirate/NPR Ships défendent sans PR.
- Intégration des **Military Ideas** et **Battle Actions** avant les jets de Battle Dice.
- Intégration des jets de **Naval Battle Dice** :
  - 3 Artillery Dice de base par camp ;
  - ajout des Battle Dice fournis par les Admirals ;
  - ajout des Battle Dice fournis par les Battle Actions.
- Ajout du rappel selon lequel chaque **Heavy Ship** inflige également 1 hit automatique.
- Intégration de l'assignation des Casualties aux Ships.
- Ajout d'un rappel concernant les Heavy Ships :
  - 2 hits nécessaires pour les éliminer ;
  - Ship couché après le premier hit ;
  - réparation lorsqu'un Heavy Ship termine un Turn ou un Round dans un Friendly Port.
- Intégration des blessures des Admirals avec utilisation de l'icône `{illHealth}`.
- Intégration des **Captured Ships** avec rappel de leurs conditions et de leur procédure.
- Ajout conditionnel du rappel concernant l'alternance des Casualties lorsque plusieurs PR défendent.
- Gestion de la fin d'un Battle Round selon les Ships encore présents.
- Intégration des règles de Retreat des NPR Ships.
- Conservation du rappel selon lequel les Pirates ne Retreat jamais.
- Décomposition interactive de la décision de Retreat entre Attacker et Defender.
- Retour à **Play Battle Actions** lorsqu'aucun camp ne Retreat et qu'un nouveau Battle Round commence.
- Intégration de la case commune de Retreat :
  - perte de 1 Ship comme Casualty ;
  - déplacement des Ships restants vers une adjacent non-Hostile Sea Zone ou un adjacent Friendly Port ;
  - retrait de tous les NPR Ships.
- Ajout des rappels concernant :
  - le retour de l'Attacker vers son point de départ ;
  - l'obligation pour tous les Ships d'un même Realm de Retreat vers une seule destination.
- Détermination du Winner après la résolution des Retreats.
- Intégration du gain de 1 `{militaryPower}` pour l'Active Player lorsqu'il remporte sa première Battle du Turn.

### Extension des dictionnaires

- Extension des dictionnaires anglais et français avec l'ensemble des textes nécessaires aux **Player Land Battle Resolution** et **Player Naval Battle Resolution**.
- Ajout de traductions dédiées pour :
  - les instructions principales des diagrammes ;
  - les questions interactives ;
  - les précisions directement liées aux étapes ;
  - les rappels de règles contextuels.
- Conservation des abréviations **PR**, **MC** et **NC** lorsqu'elles correspondent à la terminologie utilisée par le jeu et l'application.
- Ajout de l'icône `battleAction` dans `icons.js`.
- Association de `battleAction` au caractère `€` de la police **ThePriceOfPowerIcons**.
- Réutilisation des icônes de bataille existantes pour les Infantry Dice, Artillery Dice, Military Power et Ill Health.
- Conservation du fonctionnement de `formatIcons()` pour l'affichage automatique des symboles dans les textes traduits.

---

## [0.24.0] — 2026-08-28

### Ajouté en 0.24.0

- Extension complète des **Bot Realm Targeting Charts** aux 29 Bot Realms du jeu de base et des extensions.
- Ajout des fichiers de données dédiés aux 28 Bot Realms qui n'étaient pas encore implémentés.
- Conservation de `austria.js`, déjà utilisé comme modèle et validé lors du développement initial du moteur de Targeting Charts.
- Mise à jour de `realms.js` afin d'enregistrer les 29 Bot Realms.
- Ajout de toutes les nouvelles cibles nécessaires aux **Military Targeting Charts** et **Diplomatic Targeting Charts** dans les dictionnaires anglais et français.
- Réutilisation des mêmes clés de traduction lorsqu'une cible est commune à plusieurs Bot Realms.
- Conservation de l'architecture et du moteur de Targeting Charts développés et validés avec Austria.

### Bot Realms

- Les 29 Bot Realms disposent désormais de leurs données de ciblage Military et Diplomatic :

  - Aragon ;
  - Austria ;
  - Barbary ;
  - Bohemia ;
  - Brandenburg/Prussia ;
  - Burgundy ;
  - Castile/Spain ;
  - Denmark ;
  - England ;
  - France ;
  - Germany ;
  - Horde ;
  - Hungary ;
  - Italy ;
  - Kalmar Union ;
  - Lithuania ;
  - Mamluk ;
  - Muscovy/Russia ;
  - Netherlands ;
  - Norway ;
  - Novgorod ;
  - Ottoman ;
  - Persia ;
  - Poland ;
  - Portugal ;
  - Scotland ;
  - Sweden ;
  - Teutonic Order ;
  - Venice.

### Données des Targeting Charts

- Création d'un fichier `.js` dédié pour chaque nouveau Bot Realm dans `js/features/bot-realm-targeting/data/`.
- Transcription des embranchements des **Military Targeting Charts**.
- Transcription des embranchements des **Diplomatic Targeting Charts**.
- Conservation du fonctionnement existant du moteur :

  - jet de d6 ;
  - sélection de la branche correspondant au résultat ;
  - progression dans les Targeting Charts ;
  - vérification de l'éligibilité de la cible ;
  - possibilité de poursuivre vers une cible secondaire ;
  - retour en arrière dans le Targeting Chart lorsque nécessaire.
- Normalisation des identifiants et des `labelKey` afin qu'une même cible réutilise la même traduction lorsqu'elle apparaît dans plusieurs Targeting Charts.
- Conservation des noms géographiques des Areas et Provinces tels qu'ils apparaissent sur les Targeting Charts.

### Cas particuliers des extensions

- Conservation du résultat spécial **RAID*** tel qu'il apparaît dans certains Targeting Charts d'extension.
- **RAID*** n'est actuellement pas interprété par l'application : le résultat est simplement conservé comme cible spéciale dans les données.
- Conservation du résultat spécial **CLEANSE HERESY*** du Teutonic Order tel qu'il apparaît dans son Targeting Chart.
- **CLEANSE HERESY*** n'est actuellement pas interprété par l'application : le résultat est simplement conservé comme cible spéciale dans les données.
- Ces règles spécifiques pourront être intégrées ultérieurement après étude des règles des extensions correspondantes.

### Poland

- Correction volontaire d'une omission présente dans le **Diplomatic Targeting Chart** imprimé de Poland.
- Pour **Owner of Edisanas**, le diagramme original indique :

  - `1-2-3` pour la première branche ;
  - `5-6` pour la seconde branche ;
  - aucun résultat n'est indiqué pour `4`.
- Le résultat a été interprété dans l'application comme :

  - `1-2-3` pour la première branche ;
  - `4-5-6` pour la seconde branche.

### Bot Realm Targeting

- Mise à jour de `realms.js` avec les imports et les entrées des 29 Bot Realms.
- Les 29 Bot Realms sont désormais enregistrés dans `TARGETING_REALMS`.
- Les nouveaux Bot Realms utilisent le même mécanisme que Austria pour accéder à leurs données de ciblage.
- Aucun changement du fonctionnement général du moteur de Targeting Charts n'a été nécessaire.
- Les Bot Realms enregistrés peuvent être utilisés par les mécanismes existants de sélection du Bot Realm et par les appels aux Targeting Charts depuis les actions **MILITARY** et **DIPLOMACY**.

### Dictionnaires

- Extension de `botRealmTargeting.realms` dans les dictionnaires anglais et français avec les 29 Bot Realms.
- Extension de `botRealmTargeting.targets` avec toutes les nouvelles cibles nécessaires aux Targeting Charts.
- Ajout des traductions françaises des noms de Bot Realms.
- Ajout des traductions françaises des formulations de ciblage.
- Conservation des noms propres des Provinces et Areas afin de faciliter leur identification sur le plateau.
- Conservation des termes spéciaux **RAID** et **CLEANSE HERESY** sans traduction ni interprétation supplémentaire.

---

## [0.23.0] — 2026-08-27

### Ajouté en 0.23.0

- Implémentation complète de la **Cleanup Phase** dans le menu **Bot Actions**.
- Implémentation complète de la **End of Age Routine**, ajoutée comme nouvelle entrée du menu **Bot Actions**.
- Implémentation complète du **Final Scoring** dans le menu **Bot Actions**.
- Réutilisation, pour ces trois nouvelles sections, de la présentation graphique validée avec **Peace & Rebels Phase** et **Income & Upkeep Phase** :

  - cartes successives ;
  - pastilles numérotées ;
  - titres d'étapes mis en valeur ;
  - corps de texte agrandi pour la lecture sur téléphone ;
  - rappels de règles dans des encadrés distincts ;
  - navigation **Previous Step / Continue** ;
  - bouton de fin de phase ou de routine ;
  - compatibilité avec les modes jour et nuit.
- Correction du centrage vertical des chiffres dans les pastilles des phases numérotées par l'utilisation d'une police adaptée pour :

  - Income & Upkeep ;
  - Cleanup ;
  - End of Age Routine ;
  - Final Scoring.

### Cleanup Phase

- Création du fichier de données dédié `cleanup.js`.
- Ajout d'un état et d'un historique propres à la **Cleanup Phase**.
- Ajout d'un renderer dédié.
- Ajout de l'accès à **Cleanup Phase** depuis le menu **Bot Actions**.
- Intégration des cinq étapes :

  - **1. Update Manpower Reserve** ;
  - **2. Colonists** ;
  - **3. All Bot-to-PR Alliances End** ;
  - **4. Bot Emperor — Imperial Influence** ;
  - **5. Reshuffle Bot Deck**.
- Ajout d'un rappel des règles principales concernant la mise à jour du **Status Mat**.
- Intégration de la mise à jour de la **Manpower** du Bot selon :

  - sa Town Track ;
  - l'Imperial Authority ;
  - une Manpower minimale de 3.
- Intégration de la règle selon laquelle, en cas de diminution de Manpower, les Units de la **Manpower Reserve** sont renvoyées en priorité vers la Supply.
- Ajout d'un rappel des règles principales sur l'ajustement normal de la Manpower Reserve.
- Intégration du gain de **Colonists** lié aux Colonial Claims.
- Intégration du cas particulier où les Colonists du Bot sont défaussés si :

  - le Bot ne possède plus aucun Colonial Claim ;
  - aucun Territory vacant ne subsiste.
- Ajout d'un rappel des règles principales sur le renouvellement des Colonists.
- Intégration de la fin de toutes les **Bot-to-PR Alliances** pendant Cleanup, sans autre conséquence pour les parties concernées.
- Intégration de la redistribution de l'**Imperial Influence** lorsqu'un Bot est Emperor.
- Utilisation de l'icône `{influence}` pour représenter graphiquement l'Imperial Influence dans les instructions, conformément aux règles.
- Intégration des priorités de placement de l'Imperial Influence :

  - Elector Area dans laquelle le Bot nécessite le moins d'Influence supplémentaire pour dépasser tous les autres PR ;
  - toute Elector Area avec un emplacement libre ;
  - toute HRE Area avec un emplacement libre.
- Intégration de la répétition de chaque priorité jusqu'à son épuisement avant de passer à la suivante.
- Intégration des départages pour l'Imperial Influence :

  - préférence pour une Area contenant une Alliance du Bot ;
  - puis ordre alphabétique.
- Intégration des règles de **Reshuffle Bot Deck** :

  - les EVENTs sont toujours remélangés ;
  - les IDEAs sont toujours remélangées ;
  - les Bot Cards utilisées pour FOCUS sont mises de côté ;
  - la moitié des autres Bot Cards utilisées est remélangée, en arrondissant au supérieur ;
  - les cartes non remélangées restent retirées pour le reste de l'Age.

### End of Age Routine

- Ajout de **End of Age Routine** comme nouvelle entrée du menu **Bot Actions**, entre **Cleanup Phase** et **Final Scoring**.
- Création du fichier de données dédié `end-of-age.js`.
- Ajout d'un état et d'un historique propres à la routine.
- Ajout d'un renderer dédié.
- Intégration des quatre écrans de la routine :

  - **1. Reset Bot Deck** ;
  - **2. Prepare the Next Age** ;
  - **3. Player with Least Prestige** ;
  - **4. Royal Marriages**.
- Intégration de la règle spécifique Bot demandant de reconstituer entièrement le **Bot Deck** selon la composition propre au Bot Realm à chaque nouvel Age, puis de le mélanger.
- Ajout d'un rappel des règles principales, p. 11, pour la préparation de l'Age suivant :

  - préparation de l'Event Deck ;
  - passage au Final Scoring s'il n'existe pas d'Age suivant ;
  - remplacement des Milestones ;
  - ajout des nouvelles Ideas devenues éligibles ;
  - remplacement des Ideas non-Basic non recherchées présentes sur le display.
- Ajout du rappel concernant le joueur ayant le moins de Prestige :

  - possibilité de remplacer une nouvelle Idea ou un nouveau Milestone par une carte choisie dans le deck correspondant ;
  - étape ignorée en cas d'égalité pour le plus faible Prestige.
- Intégration de la règle spécifique selon laquelle les Bots **ne retirent aucun de leurs Royal Marriages** à la fin d'un Age.
- Conservation du rappel des règles normales concernant :

  - le gain de Prestige associé aux Royal Marriages ;
  - le retrait normal d'un Royal Marriage ;
  - le paiement éventuel de 2 Ducats pour éviter ce retrait ;
  - le cas particulier du retrait réciproque d'un Royal Marriage.
- Correction de la clé utilisée par le bouton du menu afin d'éviter l'affichage `[object Object]` et réutilisation de `botActions.endOfAge.title`.

### Final Scoring

- Création du fichier de données dédié `final-scoring.js`.
- Ajout d'un état et d'un historique propres au **Final Scoring**.
- Ajout d'un renderer dédié.
- Activation du bouton **Final Scoring** dans le menu **Bot Actions**.
- Intégration de quatre étapes :

  - **1. When Final Scoring Begins** ;
  - **2. Score Prestige** ;
  - **3. Prestige Penalties** ;
  - **4. Determine the Winner**.
- Intégration du principe selon lequel les Bots scorent le Prestige **exactement comme les joueurs humains**.
- Ajout d'un rappel des conditions normales pouvant déclencher le Final Scoring :

  - absence d'Event Cards restantes pour le scénario ;
  - joueur possédant au moins 100 Prestige avec au moins 20 Prestige d'avance ;
  - joueur ayant toutes ses Towns et tous ses Vassals sur le plateau à la fin de la Phase 5.
- Ajout du rappel complet du scoring final du Prestige :

  - Missions accomplies ;
  - Base Tax + Vassal Tax ;
  - Prestige par Core ;
  - Prestige par Royal Marriage ;
  - Prestige par Alliance ;
  - Prestige du Papal Controller ;
  - Prestige de l'Emperor selon l'Imperial Authority ;
  - Prestige lié à la Stability.
- Ajout des pénalités finales :

  - perte de Prestige selon la Tax Value des Towns occupées par des Rebels ou des Enemies ;
  - perte de Prestige pour les Interest Tokens présents dans la Treasury.
- Ajout du rappel des départages pour déterminer le vainqueur :

  - plus grand total de Prestige ;
  - puis plus grand total de Monarch Power ;
  - puis plus grand nombre de Ducats en Treasury ;
  - victoire partagée si l'égalité persiste.
- Ajout ou utilisation des icônes nécessaires au Final Scoring, notamment :

  - Monarch Power ;
  - Interest ;
  - Imperial Authority ;
  - Stability ;
  - Core ;
  - Royal Marriage ;
  - Alliance ;
  - Town ;
  - Vassal.

### Menu Bot Actions

- Le menu **Bot Actions** dispose désormais des entrées fonctionnelles suivantes :

  - Main Turn Structure ;
  - Choose a Specific Action ;
  - Peace & Rebels Phase ;
  - Income & Upkeep Phase ;
  - Cleanup Phase ;
  - End of Age Routine ;
  - Final Scoring.
- **End of Age Routine**, absente de la conception initiale du menu, est désormais intégrée à sa position logique entre Cleanup et Final Scoring.

### Validé en 0.23.0

- Accès à la **Cleanup Phase** depuis le menu Bot Actions.
- Parcours complet des cinq étapes de Cleanup.
- Navigation correcte avec **Continue** et **Previous Step**.
- Affichage correct des rappels de règles de Cleanup.
- Affichage de l'Imperial Influence avec le symbole d'Influence approprié.
- Affichage correctement centré des chiffres dans les pastilles.
- Accès à la **End of Age Routine** depuis le menu Bot Actions.
- Parcours complet de la End of Age Routine.
- Affichage correct de la règle Bot concernant les Royal Marriages.
- Affichage correct des rappels des règles principales de fin d'Age.
- Accès au **Final Scoring** depuis le menu Bot Actions.
- Parcours complet des quatre étapes du Final Scoring.
- Affichage correct des règles de scoring, pénalités et départages.
- Fonctionnement des boutons de fin des trois nouvelles sections.
- Validation de l'ensemble **Cleanup Phase + End of Age Routine + Final Scoring**.

---

## [0.22.0] — 2026-08-27

### Ajouté en 0.22.0

- Implémentation complète de la **Income & Upkeep Phase** dans le menu **Bot Actions**.
- Création du fichier de données dédié `income-upkeep.js`.
- Ajout d'un état et d'un historique propres à la **Income & Upkeep Phase**.
- Ajout d'un renderer spécifique pour cette phase.
- Réutilisation de la présentation graphique validée pour la **Peace & Rebels Phase** :

  - carte dédiée à chaque étape ;
  - pastille numérotée ;
  - titre d'étape mis en valeur ;
  - texte principal agrandi pour une meilleure lecture sur téléphone ;
  - blocs de rappel de règles ;
  - navigation **Previous Step / Continue** ;
  - compatibilité avec les modes jour et nuit.
- Ajout de l'icône :

  - **Imperial Authority** : `E`.
- Intégration des quatre étapes de la phase :

  - **1. Refresh Bot Power** ;
  - **2. Bot Emperor — Imperial Authority and Bot Power** ;
  - **3. Papal Controller Bonuses** ;
  - **4. Score Power Struggles & Crusades**.
- Ajout de l'accès direct à **Income & Upkeep Phase** depuis le menu **Bot Actions**.
- Ajout du bouton **Complete Phase / Terminer la Phase** à la fin de la phase.

### Refresh Bot Power

- Intégration de la règle de renouvellement de la Bot Power disponible en fonction du niveau de difficulté.
- Ajout d'un rappel des valeurs de Bot Power par niveau de difficulté :

  - **Easy** : 6 Bot Power ;
  - **Normal** : 7 Bot Power ;
  - **Hard** : 8 Bot Power ;
  - **Very Hard** : 9 Bot Power.
- Intégration du bonus lié au nombre de Towns en jeu :

  - +1 Bot Power pour au moins 20 Small Towns ;
  - +1 Bot Power pour au moins 8 Large Towns ;
  - +2 Bot Power si les deux conditions sont remplies.

### Bot Emperor

- Intégration des règles spécifiques lorsqu'un Bot est Emperor.
- Ajout du rappel de la procédure **NPR Emperor** issue des **Main Rules, p. 45**.
- Intégration des effets du d6 sur l'Imperial Authority :

  - résultat **1** : diminuer l'Imperial Authority de 1 ;
  - résultat **2–5** : diminuer l'Imperial Authority de 1 si le résultat est inférieur d'au moins 2 à sa valeur actuelle ;
  - résultat **2–5** : augmenter l'Imperial Authority de 1 si le résultat est supérieur d'au moins 2 à sa valeur actuelle ;
  - résultat **6** : augmenter l'Imperial Authority de 1.
- Intégration du gain supplémentaire de Bot Power d'un Bot Emperor égal au **Diplomatic Power + Military Power** fourni par le niveau actuel d'Imperial Authority.
- Intégration du gain de **1 Prestige** lorsque le Bot Emperor est à **+6 Imperial Authority**.

### Papal Controller Bonuses

- Intégration du gain de **1 Bot Power** si le Bot est Papal Controller.
- Intégration du gain de Prestige en cas d'**Uncontested Control of the Curia** :

  - Prestige égal au nombre de PR catholiques moins un ;
  - maximum de 3 Prestige.

### Power Struggles

- Ajout d'un rappel détaillé du scoring des **Power Struggles** issu des **Main Rules, p. 43**.
- Rappel du scoring pour chaque Battleground Area :

  - 1 Prestige par point de Tax Value des Provinces contrôlées ;
  - la Tax Value des Vassals compte pour moitié ;
  - 1 Prestige si le joueur est le seul PR à y posséder une Town ou un Vassal sur la Main Map ;
  - 1 Prestige si le joueur y possède au moins une Alliance ou un Royal Marriage.
- Rappel de l'application des éventuels critères de Prestige supplémentaires propres au Power Struggle concerné.
- Rappel qu'un Power Struggle actif est scoré pendant l'Income & Upkeep Phase avant d'être défaussé.

### Crusades

- Ajout d'un rappel détaillé du **Crusade Scoring** issu des **Main Rules, p. 46**.
- Rappel que le Crusade Scoring est effectué pendant la Phase 4, étape E, lorsque le Crusade token est présent.
- Rappel du retrait du Crusade token après résolution.
- Intégration des conditions de réussite :

  - chaque Catholic Realm **Committed to Crusade** marque 2 Prestige s'il possède des Units dans la Zone cible ;
  - aucune Province de cette Zone ne doit encore être possédée par un Muslim Realm.
- Intégration de la pénalité en cas d'échec :

  - chaque Catholic Realm **Committed to Crusade** perd 2 Prestige.
- Intégration du cas où aucun Realm n'est encore **Committed to Crusade** :

  - le Papal Controller perd 2 Prestige.

### Validé en 0.22.0

- Accès à la **Income & Upkeep Phase** depuis le menu **Bot Actions**.
- Parcours complet des étapes **1 à 4**.
- Navigation correcte avec **Continue** et **Previous Step**.
- Affichage correct des icônes et notamment de l'**Imperial Authority**.
- Affichage correct des valeurs de Bot Power selon la difficulté.
- Affichage correct des règles du **Bot Emperor**.
- Affichage correct du rappel de variation de l'Imperial Authority.
- Affichage correct des bonus du **Papal Controller**.
- Affichage correct des rappels de scoring des **Power Struggles**.
- Affichage correct des rappels de scoring des **Crusades**.
- Fonctionnement du bouton **Terminer la Phase**.
- Validation de l'ensemble de la **Income & Upkeep Phase**.

---

## [0.21.0] — 2026-08-27

### Ajouté en 0.21.0

- Implémentation complète de la **Peace & Rebels Phase** dans le menu **Bot Actions**.
- Création du fichier de données dédié `peace-rebels.js`.
- Ajout d'un état et d'un historique propres à la **Peace & Rebels Phase**.
- Ajout d'un renderer spécifique adapté à la structure linéaire de cette phase.
- Intégration des neuf étapes officielles de la phase :

  - **A. Remove Casus Belli and Truces** ;
  - **B. NPR Invasions** ;
  - **C. Rebels Siege or Move** ;
  - **D. Peace Resolution** ;
  - **E. Prestige Penalties** ;
  - **F. Interregnums** ;
  - **G. Religious Dissent** ;
  - **H. Gain/Remove Unrest** ;
  - **I. Roll Rebel Dice**.
- Navigation séquentielle entre les étapes avec bouton **Continue**.
- Ajout de **Previous Step / Étape précédente** avec conservation de l'historique de navigation.
- Ajout du bouton **Complete Phase / Terminer la Phase** à la fin de l'étape I.
- Ajout d'un accès direct à la **Peace & Rebels Phase** depuis le menu **Bot Actions**.
- Réutilisation du mécanisme `call / return` pour :

  - **Peace & Rebels → Land Battle Resolution → Peace & Rebels** depuis l'étape B ;
  - **Peace & Rebels → Bot Peace Resolution → Peace & Rebels** depuis l'étape D.
- Adaptation de **Bot Peace Resolution** afin qu'elle puisse retourner à la phase appelante après résolution.
- Ajout d'une présentation CSS dédiée à la **Peace & Rebels Phase** :

  - carte d'étape distincte ;
  - grande lettre A à I ;
  - titre d'étape mis en valeur ;
  - texte principal agrandi pour une meilleure lecture sur téléphone ;
  - navigation intégrée au bas de la carte ;
  - compatibilité avec les modes jour et nuit.
- Suppression de l'indicateur de progression redondant `A / I`, `B / I`, etc.
- Ajout de blocs visuels dédiés aux **rappels de règles**.
- Ajout de références explicites aux règles d'origine dans les encadrés :

  - **Main Rules, p. 9 / Règles principales, p. 9** pour les règles normales de la phase ;
  - rappels issus des règles Bot pour les **Rebel Dice Rolls**.
- Intégration d'un rappel détaillé des règles normales pour **C. Rebels Siege or Move**, notamment :

  - ordre de résolution des Zones contenant des Rebel Units ;
  - résolution des Sièges dans les Zones avec Unrest ;
  - traitement des Core Provinces ;
  - libération des Non-Core Provinces ;
  - déplacement des Rebel Units vers des Zones avec Unrest ;
  - résolution éventuelle d'une Bataille ;
  - retrait d'une Rebel Unit lorsqu'aucun déplacement n'est possible.
- Intégration d'un rappel détaillé des règles normales pour **E. Prestige Penalties** :

  - pénalité liée aux **Disputed Successions** ;
  - pénalité liée aux **Occupied Towns**.
- Intégration des règles spécifiques aux Bots pour **I. Roll Rebel Dice** :

  - résolution de tous les Rebel Dice du Bot en une seule fois ;
  - maximum de 5 Rebel Dice ;
  - perte maximale de 1 Bot Power par résolution de Rebel Dice ;
  - utilisation du processus de choix standard du Bot pour les Rebellions et le retrait d'Unrest ;
  - priorité donnée, si possible, à la Zone où se trouve l'Armée du Bot pour appliquer une Rebellion ;
  - placement d'un Claim lorsqu'une Province du Bot est libérée par les Rebels.
- Ajout des six faces du **Rebel Die** dans le système d'icônes :

  - `r` : Rebellion ;
  - `p` : Lose 1 Bot Power ;
  - `q` : Lose 1 Bot Power ;
  - `o` : Lose 1 Bot Power ;
  - `⚫` : No effect ;
  - `n` : Remove 1 Unrest.
- Ajout des textes EN/FR nécessaires à l'ensemble de la **Peace & Rebels Phase** et de ses rappels de règles.

### Validé en 0.21.0

- Accès à la **Peace & Rebels Phase** depuis le menu **Bot Actions**.
- Parcours complet des étapes **A à I**.
- Navigation correcte avec **Continue** et **Previous Step**.
- Retour correct sur l'étape **B** après une **Land Battle Resolution**.
- Retour correct sur l'étape **D** après une **Bot Peace Resolution**.
- Fonctionnement du bouton **Terminer la Phase** à l'étape I.
- Affichage correct des icônes utilisées dans les textes et rappels.
- Affichage correct des six résultats du **Rebel Die**.
- Affichage correct des rappels issus des règles principales et des règles Bot.
- Validation de la présentation dédiée de la phase sur écran de téléphone.
- Validation de l'ensemble de la **Peace & Rebels Phase**.

---

## [0.20.0] — 2026-08-27

### Ajouté en 0.20.0

- Finalisation et implémentation complète de l’action **MILITARY** à partir du brouillon créé en v0.19.1.
- Ajout de **MILITARY** dans le menu **Choose a Specific Action** afin de permettre son test direct.
- Accès à **MILITARY** depuis les Bot Cards correspondantes, y compris comme War Action.
- Ajout d’un état et d’un historique propres à **MILITARY**.
- Ajout des textes, détails et notes de l’action **MILITARY** dans les dictionnaires EN/FR.
- Ajout des icônes :

  - **Disputed Succession** ;
  - **Active Ally** ;
  - **Battleground Area**.
- Implémentation des différentes étapes du diagramme **MILITARY** :

  - vérification de l’état de Guerre du Bot ;
  - recherche d’un Claim utilisable ;
  - lancer de d6 et comparaison avec le numéro d’un Claim non colonial ;
  - prise en compte des Battleground Areas adjacentes au Bot ;
  - prise en compte des Royal Marriages avec Disputed Succession ;
  - sélection d’une cible par le **Military Targeting Chart** ;
  - vérification de l’éligibilité de la cible ;
  - prise en compte du Casus Belli ;
  - comparaison de la Force de la cible avec celle du Bot ;
  - gestion des Alliés NPR adjacents à la cible ;
  - comparaison de la taille de l’Armée avec la Force de la cible ;
  - recrutement d’Unités ;
  - vérification de la MAC ;
  - envoi éventuel de Defensive CtAs ;
  - retrait de l’Influence du Bot dans les Zones de la cible ;
  - Déclaration de Guerre ;
  - résolution éventuelle des Batailles navales et terrestres déclenchées par la Déclaration de Guerre ;
  - placement ou déplacement d’Armées ;
  - vérification de la possibilité d’un Siège ;
  - placement éventuel d’un Navire afin d’étendre un Naval Bridge ;
  - déclenchement éventuel de Batailles ;
  - placement de Claims ;
  - gestion d’une Croisade lorsque le Bot est Papal Controller ;
  - fin du Tour.
- Intégration du **Military Targeting Chart** dans le déroulement de **MILITARY**.
- Réutilisation du moteur générique des Bot Realm Targeting Charts et retour de la cible sélectionnée vers l’action **MILITARY**.
- Réutilisation du mécanisme existant `call / return` pour :

  - **MILITARY → Naval Battle Resolution → MILITARY** ;
  - **MILITARY → Land Battle Resolution → MILITARY**.
- Respect de l’enchaînement spécifique après une Déclaration de Guerre :

  - résolution des éventuelles **Naval Battles** ;
  - retour vers la vérification des **Land Battles** ;
  - résolution des éventuelles **Land Battles** ;
  - passage à **End Turn**.
- Réutilisation d’un `goto` pour :

  - **MILITARY → SIEGE**.
- Ajout de la prise en charge d’un lancer de dé possédant une sortie unique (`roll + next`) lorsque le résultat doit être interprété par le joueur à l’étape suivante.
- Ajout de la prise en charge de plusieurs notes sur une même étape via `noteKeys`.
- Affichage simultané des deux notes liées au placement de l’Armée dans la Zone du Bot la plus proche de l’Ennemi :

  - définition de la Force ;
  - ajustement de la disponibilité des Unités selon la MAC.
- Ajout d’une présentation spécifique pour le cadre **Declare War on target** afin de reprendre son fond rose caractéristique du diagramme original.
- Ajout d’une entrée spéciale dans **MILITARY** depuis **PAPAL CURIA**, permettant de commencer directement à **Declare War on target** sans repasser par le début du diagramme.
- Conservation du contexte de navigation lors de cette entrée spécifique depuis **PAPAL CURIA**.
- Correction de l’espacement du bouton **Confirm** lors du retour d’un `Go to` ne comportant ni détail ni note.
- Correction de plusieurs éléments du brouillon `military.js` créé en v0.19.1 :

  - correction de l’identifiant `selectRealmThisClaimDisputedSuccessionValid` ;
  - suppression du faux embranchement du lancer de d6 précédant la comparaison avec un Claim non colonial ;
  - correction des retours après les Naval et Land Battles déclenchées par une Déclaration de Guerre ;
  - ajout de la seconde note manquante sur le placement de l’Armée ;
  - correction de l’étape d’entrée depuis **PAPAL CURIA** ;
  - utilisation de la clé propre `botActions.military.endTurn`.
- Gestion de l’historique des étapes avec **Previous Step**.

### Validé en 0.20.0

- Accès direct à **MILITARY** depuis **Choose a Specific Action**.
- Accès à **MILITARY** depuis les Bot Cards correspondantes.
- Parcours des différentes branches du diagramme **MILITARY**.
- Lancer de d6 sans embranchement automatique puis comparaison du résultat avec un Claim non colonial.
- Appel du **Military Targeting Chart** depuis **MILITARY**.
- Sélection et confirmation d’une cible puis retour correct dans le diagramme **MILITARY**.
- Affichage correct des détails, notes et icônes du diagramme.
- Affichage des deux notes sur une même étape.
- Navigation avec **Previous Step / Étape précédente**.
- Passage vers **SIEGE** depuis **MILITARY**.
- Appel de **Naval Battle Resolution** puis retour au bon emplacement dans **MILITARY**.
- Appel de **Land Battle Resolution** puis retour au bon emplacement dans **MILITARY**.
- Enchaînement correct des Naval et Land Battles après une Déclaration de Guerre.
- Affichage spécifique du cadre **Declare War on target**.
- Entrée directe dans **MILITARY** depuis **PAPAL CURIA** au niveau de **Declare War on target**.
- Fonctionnement complet du cas particulier **PAPAL CURIA → MILITARY**.
- Retour correct vers la Main Turn Structure lorsqu’une action **MILITARY** provient d’une Bot Card.
- Validation de l’ensemble du diagramme **MILITARY**.

---

## [0.19.0] — 2026-08-27

### Ajouté en 0.19.1

- Création de `military.js` et du diagramme manuellement. En attente de validation et des modifications relevées.

### Ajouté en 0.19.0

- Implémentation complète de l’action **DIPLOMACY**.
- Ajout de **DIPLOMACY** dans le menu **Choose a Specific Action**.
- Accès à **DIPLOMACY** depuis les Bot Cards correspondantes via la Main Turn Structure.
- Ajout des textes, détails et notes de l’action **DIPLOMACY** dans les dictionnaires EN/FR.
- Intégration du **Diplomatic Targeting Chart** dans le déroulement de **DIPLOMACY**.
- Extension du moteur des Bot Realm Targeting Charts afin qu’un Targeting Chart puisse être appelé depuis une Bot Action et renvoyer la cible sélectionnée à l’action appelante.
- Ajout de **Confirm Target / Confirmer la cible** lors de l’utilisation d’un Targeting Chart depuis **DIPLOMACY**.
- Ajout de **Re-roll / Relancer** pour le second appel au Diplomatic Targeting Chart. Ce bouton permet au joueur de recommencer entièrement le processus de ciblage lorsqu’il constate que la cible obtenue est identique à une cible précédente du même Tour.
- Le bouton **Re-roll / Relancer** est disponible directement sur l’écran présentant les cibles obtenues, avant la sélection de la cible.
- Adaptation de **Previous Step / Étape précédente** lors de l’utilisation d’un Targeting Chart depuis **DIPLOMACY** afin de conserver une navigation cohérente.
- Conservation du fonctionnement existant des jets automatiques de d6 et de la recherche alternative par **Fallback** dans les Targeting Charts.
- Sélection d’un **Bot Realm** désormais obligatoire avant tout accès au menu **Bot Actions**.
- Ajout d’une page dédiée à la sélection et à la confirmation du Bot Realm.
- Affichage du Bot Realm actif dans le menu **Bot Actions**.
- Ajout de **Change Bot Realm / Changer le Royaume du Bot** dans le menu Bot Actions.
- Le Realm actif reste présélectionné lors de l’utilisation de **Change Bot Realm**.
- Réinitialisation du Bot Realm actif lors du retour au **Main Menu**, imposant une nouvelle sélection lors de la prochaine entrée dans **Bot Actions**.
- Ajout d’une route dédiée à la sélection préalable du Bot Realm.

### Validé en 0.19.0

- Sélection obligatoire du Bot Realm avant l’accès aux Bot Actions.
- Changement du Bot Realm depuis le menu Bot Actions.
- Réinitialisation du Realm lors du retour au Main Menu.
- Accès direct à **DIPLOMACY** depuis **Choose a Specific Action**.
- Accès à **DIPLOMACY** depuis les Bot Cards correspondantes.
- Parcours des différentes branches du diagramme **DIPLOMACY**.
- Jet de d6 du Royal Marriage et résolution des branches 1–2 / 3–6.
- Appel du **Diplomatic Targeting Chart** depuis **DIPLOMACY**.
- Sélection et confirmation d’une cible puis retour correct dans le diagramme **DIPLOMACY**.
- Fonctionnement du second appel au Diplomatic Targeting Chart avec **Re-roll** manuel.
- Re-roll complet avec nouveaux jets et nouvelle recherche de cible.
- Navigation **Previous Step / Étape précédente** entre DIPLOMACY et le Diplomatic Targeting Chart.
- Fonctionnement des Targeting Charts existants conservé après leur intégration aux Bot Actions.

---

## [0.18.0] - 2026-08-26

### Ajouté en 0.18.0

- Ajout du module indépendant **Bot Realm Targeting Charts**.
- Ajout d’un sélecteur de Bot Realm dans le menu des diagrammes de ciblage.
- Ajout du **Military Targeting Chart** complet de l’Autriche.
- Ajout du **Diplomatic Targeting Chart** complet de l’Autriche.
- Ajout des jets de d6 automatiques pour parcourir les diagrammes de ciblage.
- Affichage de la séquence complète des jets afin de permettre leur vérification par le joueur.
- Affichage des cibles potentielles dans leur ordre de priorité, avec sélection directe de la première cible valide.
- Ajout du bouton **None are valid / Aucune n’est valide** permettant de poursuivre automatiquement la recherche lorsqu’aucune des cibles proposées n’est valide.
- Mémorisation des cibles déjà déclarées invalides afin qu’elles ne soient pas proposées à nouveau pendant la même recherche.
- Ajout de la recherche automatique des branches alternatives avec progression vers les branches suivantes, remontée dans le diagramme et recherche des autres branches disponibles.
- Affichage séparé des jets de dés réels et des valeurs utilisées lors de la recherche alternative.
- Ajout de **Previous Step / Étape précédente** dans les diagrammes de ciblage.
- Ajout de la prise en charge des cibles marquées d’un astérisque `*`, avec affichage de la note relative à la carte **Eastern Europe**.
- Ajout de la prise en charge des icônes du jeu dans les textes des cibles, notamment les symboles **Town** et **Vassal**.
- Ajout du fichier `js/features/bot-realm-targeting/data/austria.js` contenant les données des diagrammes militaire et diplomatique de l’Autriche.
- Ajout du fichier `js/features/bot-realm-targeting/data/realms.js` servant de registre central des Bot Realms disponibles.
- Généralisation de `territory-selection.js` afin que le moteur de ciblage soit indépendant du Bot Realm et du type de diagramme.
- Génération automatique de la liste des Bot Realms disponibles à partir du registre `realms.js`.
- Mutualisation du moteur de navigation, des jets de dés, de la recherche alternative, de l’historique et du rendu entre les diagrammes Military et Diplomatic.
- Préparation de l’architecture pour permettre l’ajout des autres Bot Realms sans modifier le moteur générique de ciblage.
- Les Bot Realm Targeting Charts restent volontairement indépendants du système **Bot Actions** dans cette version ; leur intégration future dans les actions **MILITARY** et **DIPLOMACY** n’est pas encore réalisée.

---

## [0.17.0] — 2026-08-25

### Ajouté en 0.17.0

- Implémentation complète de **Bot Peace Resolution**.
- Ajout de **Peace Resolution** dans le menu **Choose a Specific Action** afin de permettre son test direct.
- Ajout d’un état et d’un historique propres à **Peace Resolution**.
- Implémentation de la boucle permettant de résoudre plusieurs Guerres successivement au cours d’une même étape de Résolution de paix.
- Implémentation des différentes étapes du diagramme **Bot Peace Resolution** :
  - gestion de l’Automatic White Peace ;
  - vérification d’une Total Victory contre un NPR ;
  - annexion des Provinces de jure d’un NPR vaincu ;
  - gestion des Guerres contre un joueur humain ;
  - gestion de la reddition d’un PR ennemi ;
  - comparaison des forces terrestres ;
  - prise en compte de la Tax Income et des Towns occupées ;
  - gestion des Guerres contre un autre Bot ;
  - gestion des Guerres contre un NPR ;
  - prise en compte des Rebel Units présentes dans les Zones du Bot ;
  - vérification de l’Unrest dans les Zones sans Claim ;
  - proposition d’une White Peace ;
  - gestion de l’acceptation ou du refus de la White Peace ;
  - proposition d’une paix selon les conditions **Keep Current Board State** ;
  - gestion de l’acceptation ou du refus de ces conditions ;
  - gestion de l’occupation de la Capitale ennemie ;
  - gestion des gains et pertes de Prestige, Bot Power et Ducats liés au retour des Capitales ;
  - vérification de l’occupation des Towns du Bot par l’Ennemi ;
  - échange éventuel de Provinces occupées ;
  - fin de Guerre avec conservation de l’état actuel du plateau ;
  - création des Trêves ;
  - placement éventuel de Claims après perte de Towns ;
  - retrait des Claims devenues inutiles ;
  - retrait d’Unrest ;
  - placement éventuel d’un Core ;
  - vérification de l’existence d’autres Guerres à résoudre ;
  - fin de **Bot Peace Resolution**.
- Distinction explicite entre les deux comparaisons de Tax Value du diagramme :
  - comparaison stricte `>` ;
  - comparaison large `≥`.
- Respect du chemin spécifique d’une Total Victory contre un NPR :
  - annexion ;
  - passage directement aux Trêves et Claims ;
  - sans passage par la perte de Prestige associée à une White Peace automatique.
- Ajout des cinq notes de bas de page de **Bot Peace Resolution**.
- Affichage des notes sans leur numéro de renvoi.
- Respect de la distinction entre :
  - texte principal contenu dans un cadre ;
  - indication secondaire située hors du cadre ;
  - note de bas de page.
- Traitement comme textes secondaires des indications :
  - retrait des autres jetons des Provinces annexées ;
  - limite d’un Claim maximum ajouté par un Bot.
- Ajout d’une présentation spécifique pour le cadre d’échange des Provinces occupées :
  - Town/Vassal ennemi occupé par le Bot ;
  - symbole d’échange `▼▲` ;
  - Town du Bot occupée par l’Ennemi ;
  - rappel de la Tax Value totale équivalente.
- Réutilisation des icônes existantes :
  - Town ;
  - Vassal ;
  - Claim ;
  - Core ;
  - Unrest ;
  - Rebel Unit ;
  - Bot Power ;
  - Ducats ;
  - Prestige.
- Ajout du titre **Peace Resolution** dans `actionNames`, sans champ `title` redondant.
- Conservation de **Peace Resolution** comme diagramme autonome :
  - aucun `call` ;
  - aucun `goto` ;
  - aucun `return` vers un autre diagramme ;
  - boucle interne pour les Guerres restantes.
- Gestion de l’historique des étapes avec **Previous Step**.

### Validé en 0.17.0

- Accès direct à **Peace Resolution** depuis **Choose a Specific Action**.
- Validation des principales branches du diagramme.
- Validation de la distinction entre les comparaisons `>` et `≥`.
- Validation du chemin de Total Victory contre un NPR.
- Validation des branches de White Peace.
- Validation des branches **Keep Current Board State**.
- Validation de la gestion des Capitales.
- Validation du cadre spécifique d’échange des Provinces occupées.
- Validation des cinq notes.
- Validation de la boucle permettant de résoudre plusieurs Guerres successivement.
- Validation de la navigation avec **Previous Step**.

---

## [0.16.0] — 2026-08-25

### Ajouté en 0.16.0

- Implémentation complète de l’action **Naval**.
- Ajout de **Naval** dans le menu **Choose a Specific Action** afin de permettre son test direct.
- Accès à **Naval** depuis les cartes Bot correspondantes, y compris comme War Action.
- Implémentation des différentes étapes du diagramme **Naval** :
  - recherche d’une Sea Zone hostile adjacente aux Ports ou Ships du Bot ;
  - placement éventuel d’un Ship dans une Sea Zone hostile ;
  - recherche d’une Sea Zone sans Ship du Bot adjacente à ses Ports ;
  - vérification du nombre de Ships présents sur la Main Map ;
  - recherche d’une Sea Zone de la Main Map adjacente à un Ship du Bot ;
  - placement d’un Ship dans une Sea Zone disponible ;
  - vérification de la présence de Pirates ;
  - retrait éventuel de Pirates ;
  - tirage et résolution d’une Trade Card ;
  - déplacement des Merchants des Bots ayant gagné du Bot Power ;
  - vérification du placement d’un Ship pendant le Tour ;
  - vérification des conditions permettant de poursuivre vers **Explore** ;
  - fin du tour.
- Implémentation des priorités de placement des Ships :
  - préférence pour une Sea Zone adjacente à un Port du Bot ;
  - préférence pour une Sea Zone adjacente au plus grand nombre de Trade Nodes ;
  - départage alphabétique lorsque nécessaire.
- Implémentation de la priorité de retrait des Pirates :
  - préférence pour le Trade Node contenant un Merchant du Bot ;
  - puis celui contenant le moins de Merchants.
- Ajout des trois notes du diagramme **Naval** :
  - exclusion des Distant Sea Zones lorsque le Bot ne possède pas `QftNW` ;
  - réduction du revenu en Ducats liée aux Pirates ;
  - absence de gain de Prestige lorsque la partie est jouée sans Missions pour les joueurs humains.
- Affichage des notes sans leur numéro de renvoi.
- Ajout d’une présentation spécifique du grand cadre **Draw a Trade Card** :
  - premier bloc consacré aux Bots ;
  - note relative aux Pirates ;
  - second bloc consacré aux joueurs humains ;
  - note relative au mode sans Missions ;
  - un seul bouton **Confirm** pour l’ensemble de l’étape.
- Réutilisation du mécanisme existant `call / return` pour :
  - **Naval → Naval Battle Resolution → Naval**.
- Ajout de la reprise de **Naval** après **Naval Battle Resolution** via le mécanisme existant `returnedCall`.
- Réutilisation d’un `goto` pour :
  - **Naval → Explore**.
- Conservation du contexte de retour vers **Main Turn Structure** lors des enchaînements issus d’une carte Bot.
- Réutilisation des icônes existantes :
  - Bot Power ;
  - Ducats ;
  - Town ;
  - Claim ;
  - Prestige.
- Correction de l’instruction **Move Merchant of Bots that gained...** afin d’utiliser l’icône **Bot Power** et non Ducats.
- Correction de la branche **Has 5+ Ships on Main Map?** :
  - `YES` mène directement à **Has Ship adjacent to any Pirates?** ;
  - `NO` poursuit vers la recherche d’une Sea Zone disponible sur la Main Map.
- Gestion de l’historique des étapes avec **Previous Step**.

### Validé en 0.16.0

- Accès direct à **Naval** depuis **Choose a Specific Action**.
- Validation des principales branches du diagramme.
- Validation de la présentation spécifique de **Draw a Trade Card**.
- Validation des trois notes.
- Validation de la navigation avec **Previous Step**.
- Validation du cycle :
  - **Naval** ;
  - appel de **Naval Battle Resolution** ;
  - résolution de la Bataille navale ;
  - **End Battle** ;
  - retour correct dans **Naval**.
- Validation du renvoi **Naval → Explore**.
- Validation de l’enchaînement depuis la carte Bot 11 :
  - **Bot Card 11** ;
  - **Naval** ;
  - **Naval Battle Resolution** ;
  - retour dans **Naval** ;
  - retour correct vers **Main Turn Structure**.

---

## [0.15.0] — 2026-08-25

### Ajouté en 0.15.0

- Implémentation complète de l’action **Explore**.
- Ajout de **Explore** dans le menu **Choose a Specific Action** afin de permettre son test direct.
- Accès à **Explore** depuis la carte Bot correspondante via **Main Turn Structure**.
- Implémentation des différentes étapes du diagramme **Explore** :
  - vérification du nombre de Claims coloniales ;
  - recherche de Territoires vacants éligibles ;
  - prise en compte de l’Idée **Quest for the New World** ;
  - recherche gratuite éventuelle de cette Idée ;
  - placement éventuel d’un Navire pour permettre l’Exploration ;
  - vérification des conditions déclenchant une Bataille navale ;
  - utilisation du dé spécial d’Exploration ;
  - gestion des résultats numériques et des résultats spéciaux du dé ;
  - dépense éventuelle de Bot Power après un résultat spécial ;
  - retrait éventuel d’un Navire d’un Continent lointain ;
  - sélection d’un Territoire éligible en fonction du résultat du dé ;
  - découverte éventuelle d’une Province lointaine ;
  - placement de Claims ;
  - ajout éventuel des cartes Trade correspondantes ;
  - recherche d’une nouvelle Zone maritime Explorable ;
  - vérification de la connexion d’une Claim coloniale à la Zone de la Capitale ;
  - gain éventuel de Bot Power et de Colonist ;
  - gain éventuel de Prestige et défausse des Colonists et de la Claim coloniale ;
  - renvoi vers **Colonize** lorsque les conditions sont remplies ;
  - fin du tour.
- Réutilisation du moteur de dés générique existant pour le dé spécial **Explore**.
- Ajout de l’affichage de l’image dédiée du dé d’Exploration.
- Gestion des faces spécifiques du dé d’Exploration :
  - `1` ;
  - `2` ;
  - résultat spécial à 2 symboles ;
  - résultat spécial à 3 symboles.
- Gestion du lancer virtuel et de la saisie manuelle des résultats du dé d’Exploration.
- Utilisation des glyphes spécifiques du dé d’Exploration dans les choix manuels et l’affichage du résultat.
- Réutilisation des mécanismes existants de navigation :
  - `goto` pour **Explore → Colonize** ;
  - `call / return` pour **Explore → Naval Battle Resolution → Explore**.
- Ajout de la reprise d’**Explore** après un appel à **Naval Battle Resolution** via le mécanisme existant `returnedCall`.
- Conservation du contexte de retour vers **Main Turn Structure** lorsqu’Explore est déclenchée depuis une carte Bot.
- Gestion de l’historique des étapes avec **Previous Step**.
- Ajout et gestion des quatre notes de bas de page du diagramme **Explore**.
- Affichage des notes sans reprise de leur numéro de renvoi.
- Respect de la distinction entre texte principal du cadre, texte secondaire et note de bas de page.

### Validé en 0.15.0

- Accès direct à **Explore** depuis **Choose a Specific Action**.
- Accès à **Explore** depuis la carte Bot correspondante.
- Validation des principales branches du diagramme.
- Validation du dé spécial d’Exploration :
  - lancer virtuel ;
  - saisie manuelle ;
  - affichage de l’image dédiée ;
  - affichage des glyphes spéciaux.
- Validation des quatre notes de bas de page.
- Validation du retour **Previous Step**.
- Validation du cycle :
  - **Explore** ;
  - appel de **Naval Battle Resolution** ;
  - résolution de la Bataille navale ;
  - **End Battle** ;
  - retour correct dans **Explore**.
- Validation du renvoi **Explore → Colonize**.
- Validation du retour vers **Main Turn Structure** après une résolution d’Explore issue d’une carte Bot.

---

## [0.14.0] — 2026-08-25

### Ajouté en 0.14.0

- Implémentation complète de **Land Battle Resolution**.
- Remplacement du placeholder **Land Battle** par la véritable résolution de bataille terrestre du Bot.
- Ajout de **Land Battle Resolution** dans le menu **Choose a Specific Action** afin de permettre son test direct.
- Intégration de la résolution terrestre au mécanisme existant de navigation `call / return`.
- Retour vers le diagramme appelant à la fin de **Land Battle Resolution** via **End Battle**, sans terminer le tour.
- Réutilisation du mécanisme déjà validé avec **Naval Battle Resolution** et préparé pour les appels depuis **DEFEND**.
- Implémentation des différentes étapes de **Land Battle Resolution** :
  - vérification de la présence d’un PR parmi les Ennemis ;
  - distinction entre Bot attaquant et Bot défenseur ;
  - gestion des batailles impliquant plusieurs PR ;
  - détermination du Défenseur principal ;
  - vérification du Royaume dans lequel se déroule la bataille ;
  - possibilité pour le joueur humain de nommer un Général ;
  - prise en compte des Idées Militaires ;
  - possibilité pour le joueur humain de jouer des Actions de Bataille ;
  - détermination des dés de Bataille lancés par les Bots ;
  - assignation normale des pertes ;
  - gestion des effets d’Ill Health sur le Général du joueur humain ;
  - vérification des Unités restantes chez les Bots ;
  - vérification des Unités restantes dans les deux camps ;
  - gestion des rounds de bataille supplémentaires ;
  - attribution éventuelle de Military Power au joueur humain ;
  - attribution éventuelle de Bot Power au Bot qui résout la bataille ;
  - résolution des batailles contre des Rebelles et/ou NPR ;
  - retrait des Unités NPR et Rebel Units selon le résultat de la bataille ;
  - retrait des Armées vaincues du plateau ;
  - fin de la bataille et retour au diagramme appelant.
- Réutilisation des pictogrammes de résultats des dés de Bataille déjà ajoutés pour **Naval Battle Resolution** :
  - infanterie simple ;
  - double infanterie ;
  - cavalerie ;
  - artillerie.
- Réutilisation des icônes **Ill Health**, **Military Power**, **Bot Power** et **Rebel Unit**.
- Réutilisation du titre général **Land Battle Resolution** depuis `actionNames`, sans duplication d’un champ `title`.
- Gestion de l’historique des étapes avec **Previous Step**.
- Réutilisation de la convention de présentation des indications secondaires :
  - les véritables annotations du diagramme sont affichées sous le cadre principal ;
  - leurs parenthèses ne sont pas reproduites dans l’application.
- Réutilisation, avec autorisation spécifique, de l’exception de présentation introduite pour **Naval Battle Resolution** :
  - l’instruction principale du lancer de dés reste dans le cadre ;
  - les détails déterminant le nombre de dés du Bot sont affichés sous le cadre, dans un texte plus petit ;
  - cette exception reste propre aux résolutions de bataille et ne doit pas être généralisée automatiquement aux autres diagrammes.

### Validé en 0.14.0

- Validation de toutes les principales branches de **Land Battle Resolution**.
- Validation des branches avec et sans PR.
- Validation des cas où le Bot est attaquant ou défenseur.
- Validation des batailles impliquant plusieurs PR.
- Validation de la boucle permettant de jouer plusieurs rounds tant que les deux camps possèdent encore des Unités.
- Validation des branches contre des Rebelles et/ou NPR.
- Validation de l’affichage des pictogrammes et des indications secondaires.
- Validation de la navigation avec **Previous Step**.
- Validation de la fin de résolution par **End Battle**.
- Validation du cycle complet :
  - **DEFEND** ;
  - appel de **Land Battle Resolution** ;
  - résolution de la bataille ;
  - **End Battle** ;
  - retour correct dans **DEFEND**.

---

## [0.13.0] — 2026-08-25

### Ajouté en 0.13.0

- Implémentation complète de **Naval Battle Resolution**.
- Remplacement du placeholder **Naval Battle** par la véritable résolution de bataille navale du Bot.
- Ajout de **Naval Battle Resolution** dans le menu **Choose a Specific Action** afin de permettre son test direct.
- Intégration de la résolution navale au mécanisme existant de navigation `call / return`.
- Retour vers le diagramme appelant à la fin de **Naval Battle Resolution** via **End Battle**, sans terminer le tour.
- Réutilisation du mécanisme déjà préparé pour les appels depuis **DEFEND**.
- Implémentation des différentes étapes de **Naval Battle Resolution** :
  - vérification de la présence d’un PR parmi les Ennemis ;
  - distinction entre Bot attaquant et Bot défenseur ;
  - gestion des batailles impliquant plusieurs PR ;
  - détermination du Défenseur principal ;
  - possibilité pour le joueur humain de nommer un Amiral ;
  - possibilité pour le joueur humain de jouer des Actions de Bataille applicables ;
  - détermination du nombre de dés de Bataille lancés par les Bots ;
  - résolution des touches obtenues par les Bots ;
  - prise en compte des Ports adjacents et des Navires NPR ;
  - gestion d’une bataille Bot contre Bot ;
  - retrait du Navire du Bot ayant obtenu le moins de touches ;
  - assignation des pertes par le joueur humain ;
  - gestion des effets d’Ill Health sur les Amiraux ;
  - vérification des Navires restant au joueur humain ;
  - attribution éventuelle de Military Power au joueur humain ;
  - vol éventuel d’un Navire Léger ;
  - résolution des batailles contre des Navires NPR ;
  - gain éventuel de Bot Power pour la première Bataille remportée pendant le Tour ;
  - fin de la bataille et retour au diagramme appelant.
- Ajout au système d’icônes des résultats de dés de Bataille nécessaires aux résolutions :
  - infanterie simple ;
  - double infanterie ;
  - cavalerie ;
  - artillerie.
- Ajout des icônes **Ill Health** et **Military Power** utilisées par la résolution.
- Clarification des noms d’actions :
  - **Land Battle Resolution** ;
  - **Naval Battle Resolution** ;
  afin de les distinguer des actions Bot correspondantes.
- Conservation des noms d’actions dans le dictionnaire général `actionNames`, sans duplication d’un champ `title`.
- Gestion de l’historique des étapes avec **Previous Step**.
- Respect de la distinction entre :
  - le texte contenu dans les cadres du diagramme ;
  - les indications secondaires affichées sous les cadres.
- Traitement des indications entre parenthèses du diagramme comme textes secondaires, affichés sans parenthèses dans l’application.
- Ajout d’une exception de présentation pour les instructions de lancer de dés :
  - l’instruction principale reste dans le cadre ;
  - les détails déterminant le nombre de dés du Bot sont affichés sous le cadre, dans un texte plus petit ;
  - cette exception est également prévue pour **Land Battle Resolution**, mais ne doit pas être généralisée automatiquement aux autres diagrammes.

### Validé en 0.13.0

- Affichage des différentes branches de **Naval Battle Resolution**.
- Affichage des pictogrammes de résultats des dés de Bataille.
- Affichage des icônes **Ill Health**, **Military Power** et **Bot Power**.
- Affichage séparé des indications secondaires telles que :
  - **See p. 5** ;
  - **Re-roll if tied** ;
  - **Alternate between Ship types when assigning hits**.
- Présentation spécifique et plus lisible du calcul des dés du Bot.
- Navigation avec **Previous Step**.
- Fin de la résolution par **End Battle**.

---

## [0.12.0] — 2026-08-25

### Ajouté en 0.12.0

- Implémentation complète de l’action **Event**.
- Ajout de **Event** dans le menu **Choose a Specific Action**.
- Accès à **Event** depuis **Main Turn Structure** et depuis la carte Bot correspondante.
- Implémentation des différentes étapes du diagramme **Event** :
  - vérification qu’une Action Event a déjà été effectuée ou non ;
  - gestion du redémarrage complet de **Main Turn Structure** lorsqu’une nouvelle Action Event ne doit pas être effectuée ;
  - jet d’un d6 permettant de déterminer la sélection de l’Event ;
  - sélection de l’Event révélé le plus à gauche, du deuxième en partant de la gauche ou du plus à droite ;
  - vérification de la présence d’un Event d’un Adversaire ;
  - vérification de la présence d’un Event du Bot ;
  - prise en compte de l’état de Guerre avec l’Adversaire associé à un Event ;
  - résolution de l’option A ou B de l’Event ;
  - résolution des effets secondaires indiqués par l’Event ;
  - vérification des conditions permettant de développer une Small Town en Large Town ;
  - gestion des priorités de développement ;
  - fin du tour.
- Réutilisation du composant générique de jet de d6 avec :
  - lancer virtuel ;
  - saisie manuelle des résultats `1`, `2`, `3`, `4` et `5–6` ;
  - affichage du résultat obtenu avant de poursuivre le diagramme.
- Ajout de l’icône **Ducats** au système d’icônes.
- Utilisation des icônes **Bot Power**, **Ducats**, **Town** et **Unrest** dans le diagramme.
- Ajout de la mention d’origine du diagramme **Event**.
- Gestion du cas **Discard EVENT Bot Card / Start over: MAIN TURN STRUCTURE** :
  - abandon de l’action Event en cours ;
  - suppression du contexte de retour de la carte ;
  - réinitialisation de **Main Turn Structure** ;
  - reprise directement au début de la structure principale sans passer par **Did Action take effect?**.
- Retour normal vers **Did Action take effect?** lorsqu’une action **Event** issue d’une carte Bot est résolue normalement.
- Gestion de l’historique des étapes de **Event** avec **Previous Step**.
- Validation de l’action **Event** :
  - depuis **Choose a Specific Action** ;
  - depuis **Main Turn Structure** ;
  - depuis la carte Bot correspondante ;
  - avec toutes les branches du diagramme ;
  - avec le lancer virtuel et les résultats manuels du d6 ;
  - avec le redémarrage complet de **Main Turn Structure**.

### Non intégré à l’application

- Les blocs de règles situés sous le diagramme **Event**, notamment **GENERAL EVENT RULES** et **SECONDARY EFFECTS**, ne sont volontairement pas intégrés à l’application.
- Ces règles feront ultérieurement l’objet d’une carte de référence imprimable séparée réalisée avec **LuaLaTeX**.

---

## [0.11.0] — 2026-08-25

### Ajouté en 0.11.0

- Implémentation complète de l’action **Papal Curia**.
- Ajout de **Papal Curia** dans le menu **Choose a Specific Action**.
- Accès à **Papal Curia** depuis les cartes Bot correspondantes via **Main Turn Structure**.
- Implémentation des différentes étapes du diagramme **Papal Curia** :
  - vérification de la Religion d’État catholique ;
  - vérification du contrôle incontesté de la Curie papale ;
  - prise en compte de l’Âge en cours ;
  - vérification des conditions permettant de lancer une Croisade ;
  - vérification des conditions permettant d’excommunier un Adversaire ;
  - placement d’un Cardinal dans la Curie papale ;
  - retrait éventuel de l’Excommunication du Royaume du Bot ;
  - excommunication d’un Adversaire et application de ses effets ;
  - placement d’un jeton de Croisade et d’un Claim ;
  - recrutement éventuel de 2 Unités ;
  - gain de Prestige ;
  - fin du tour.
- Ajout de l’icône **Cardinal** au système d’icônes.
- Ajout de la mention d’origine du diagramme **Papal Curia**.
- Réutilisation du mécanisme **Perform second Action on card instead**.
- Gestion particulière des différentes positions de **Papal Curia** sur les cartes Bot :
  - depuis la première action de la carte 14, passage directement à la seconde action de la carte ;
  - depuis la seconde action de la carte 15, retour directement vers **Did Action take effect?** afin d’éviter une boucle vers la même action.
- Ajout du renvoi `goto` de **Papal Curia** vers **Military**.
- Préparation d’un point d’entrée spécifique permettant au futur diagramme **Military** de commencer directement à l’étape **Declare War** lorsqu’il est appelé depuis une Croisade.
- Gestion de l’historique des étapes de **Papal Curia** avec **Previous Step**.
- Validation de l’action **Papal Curia** :
  - depuis **Choose a Specific Action** ;
  - depuis la carte Bot 14 ;
  - depuis la carte Bot 15 ;
  - avec toutes les principales branches du diagramme ;
  - avec le renvoi provisoire vers **Military**.

---

## [0.10.0] — 2026-08-25

### Ajouté en 0.10.0

- Implémentation complète de l’action **Idea**.
- Ajout de **Idea** dans le menu **Choose a Specific Action**.
- Accès à **Idea** depuis la carte Bot correspondante via **Main Turn Structure**.
- Implémentation des différentes étapes du diagramme **Idea** :
  - vérification de la présence d’un Cube dans une Zone de Focus autre qu’Économie ;
  - vérification de la disponibilité d’Ideas correspondant au type de Focus ;
  - sélection du type de Focus à l’aide d’un d6 :
    - 1–2 : Administrative ;
    - 3–4 : Diplomatic ;
    - 5–6 : Military ;
  - possibilité de sélectionner manuellement le type de Focus pour faciliter les tests ;
  - répétition du choix du type de Focus lorsqu’aucune Idea correspondante n’est disponible ;
  - sélection d’une Idea correspondant au type de Focus ;
  - placement d’un Cube sur l’Idea et sur l’emplacement approprié de l’Idea Track ;
  - gain normal de Prestige ;
  - gestion des priorités de sélection des Ideas ;
  - fin du tour.
- Création d’une présentation spécifique pour le choix du type de Focus afin d’améliorer la lisibilité sur téléphone.
- Affichage séparé des correspondances du d6 et des boutons de sélection manuelle.
- Utilisation du symbole générique de Prestige à la place du mot « Prestige » dans les diagrammes lorsque le pictogramme est utilisé dans le jeu.
- Retour vers **Did Action take effect?** après la résolution de **Idea** depuis une carte Bot.
- Gestion de l’historique des étapes de **Idea** avec **Previous Step**.
- Validation de l’action **Idea** :
  - depuis **Choose a Specific Action** ;
  - depuis la carte Bot correspondante via **Main Turn Structure** ;
  - avec le lancer virtuel du d6 ;
  - avec la sélection manuelle du type de Focus ;
  - avec les différentes boucles et branches du diagramme.

### Menu choix d'actions

- Réorganisation du menu **Choose a Specific Action** sur deux colonnes.
- Classement alphabétique des actions dans la version anglaise de l’interface.
- Placement permanent du bouton **Bot Actions Menu** en dernière position de la colonne de droite.
- Différenciation visuelle du bouton **Bot Actions Menu** en utilisant la couleur associée aux fins de tour des diagrammes.

---

## [0.9.0] — 2026-08-25

### Ajouté en 0.9.0

- Implémentation complète de l’action **Focus**.
- Ajout de **Focus** dans le menu **Choose a Specific Action**.
- Accès à **Focus** depuis les secondes actions des cartes Bot correspondantes via **Main Turn Structure**.
- Implémentation des différentes étapes du diagramme **Focus** :
  - vérification de la présence d’un Cube dans une Zone de Focus ;
  - placement du Bot Power dépensé dans une Zone de Focus existante ou dans celle indiquée sur la carte ;
  - vérification du nombre de Cubes présents dans la Zone de Focus ;
  - vérification de la disponibilité d’un Milestone correspondant au type de Focus ;
  - résolution d’un Milestone correspondant ;
  - gain de Bot Power ;
  - gain normal de Prestige ;
  - gain alternatif de 3 Prestige ;
  - retrait des Cubes de la Zone de Focus ;
  - mise de côté de la Carte Bot lorsqu’elle ne doit pas être remélangée pendant l’Âge ;
  - fin du tour.
- Ajout du symbole générique **Cube** au système d’icônes.
- Ajout du symbole générique **Prestige** au système d’icônes.
- Ajout de la note liée au niveau de difficulté sur la question correspondante du diagramme.
- Réutilisation du système générique de notes pour afficher une note directement sous une question.
- Gestion de l’historique des étapes de **Focus** avec **Previous Step**.
- Ajout de la mention d’origine du diagramme **Focus**.
- Retour vers **Did Action take effect?** après la résolution de **Focus** depuis une carte Bot.
- Validation de l’action **Focus** :
  - depuis **Choose a Specific Action** ;
  - depuis les cartes Bot correspondantes via **Main Turn Structure** ;
  - avec toutes les branches du diagramme ;
  - avec affichage correct des symboles et de la note de règles.

---

## [0.8.0] — 2026-08-25

### Ajouté en 0.8.0

- Implémentation complète de l’action **Convert**.
- Ajout de **Convert** dans le menu **Choose a Specific Action**.
- Accès à **Convert** depuis les cartes Bot correspondantes via **Main Turn Structure**.
- Implémentation des différentes étapes du diagramme **Convert** :
  - vérification de la présence de Dissidence religieuse ;
  - vérification du cas où le Bot est catholique et toutes ses Zones protestantes, ou inversement ;
  - changement éventuel de Religion d’État ;
  - gestion des effets associés au changement de Religion d’État ;
  - conversion d’une Zone à la Religion d’État ;
  - gain de Prestige ;
  - gestion des priorités de sélection de Zone ;
  - fin du tour.
- Ajout de la note de règles associée à **Change State Religion**.
- Ajout des icônes nécessaires à l’action **Convert** :
  - Prestige 2 ;
  - Prestige 3 ;
  - Royal Marriage ;
  - Influence.
- Gestion de l’historique des étapes de **Convert** avec **Previous Step**.
- Ajout de la mention d’origine du diagramme **Convert**.
- Réutilisation du mécanisme **Perform second Action on card instead** déjà introduit avec **Unrest**.
- Retour direct vers la seconde action de la carte lorsque **Convert** ne peut pas être effectuée.
- Retour normal vers **Did Action take effect?** lorsque **Convert** est résolue.
- Validation de l’action **Convert** :
  - depuis **Choose a Specific Action** ;
  - depuis les cartes Bot concernées via **Main Turn Structure** ;
  - avec les différentes branches du diagramme ;
  - avec affichage correct des icônes et de la note de règles.

---

## [0.7.0] — 2026-08-25

### Ajouté en 0.7.0

- Implémentation complète de l’action **Unrest**.
- Ajout de **Unrest** dans le menu **Choose a Specific Action**.
- Accès à **Unrest** depuis les cartes Bot correspondantes via **Main Turn Structure**.
- Implémentation des différentes étapes du diagramme **Unrest** :
  - vérification de Provinces possédant de l’Unrest ;
  - retrait de l’Unrest de Provinces du Bot ;
  - gestion des priorités Capitale puis Grande Town ;
  - vérification du nombre de Core tokens en jeu ;
  - vérification des conditions de placement d’un Core ;
  - déplacement éventuel d’un Core depuis une Zone de faible Valeur de Taxe ;
  - placement d’un Core dans une Zone éligible ;
  - retrait des Claim tokens des autres Bots lorsque nécessaire ;
  - fin du tour.
- Ajout de l’icône **Core** au système d’icônes.
- Ajout de la note de règles associée au placement d’un Core.
- Gestion de l’historique des étapes de **Unrest** avec **Previous Step**.
- Ajout de la mention d’origine du diagramme **Unrest**.
- Gestion de la branche **Perform second Action on card instead** en réutilisant le contexte de retour existant vers **Main Turn Structure**.
- Retour direct vers la seconde action de la carte sans passer par **Did Action take effect?** lorsque le diagramme l’exige.
- Retour normal vers **Did Action take effect?** lorsque **Unrest** est résolue.
- Validation de l’action **Unrest** :
  - depuis **Choose a Specific Action** ;
  - depuis les cartes Bot concernées via **Main Turn Structure** ;
  - avec toutes les branches du diagramme.

---

## [0.6.0] — 2026-08-25

### Ajouté en 0.6.0

- Implémentation complète de l’action **Colonize**.
- Ajout de **Colonize** dans le menu **Choose a Specific Action**.
- Accès à **Colonize** depuis **Main Turn Structure**.
- Accès à **Colonize** depuis la carte Bot correspondante.
- Préparation de l’accès à **Colonize** depuis l’action **Explore**, qui sera raccordé lors de l’implémentation de cette action.
- Implémentation des différentes étapes du diagramme **Colonize** :
  - vérification du nombre de Colonists disponibles ;
  - vérification de l’existence d’une Colonial Claim reliée à la Capitale ;
  - gestion des deux cas de retrait des Colonists ;
  - gain éventuel de 1 Bot Power ;
  - remplacement d’une Colonial Claim par une Small Town ;
  - gestion des priorités de placement ;
  - fin du tour.
- Gestion de l’historique des étapes de **Colonize** avec **Previous Step**.
- Ajout de l’icône **Claim** au système d’icônes.
- Ajout de la mention d’origine du diagramme **Colonize**.
- Gestion du renvoi `goto` de **Colonize** vers **Explore** sans retour automatique vers **Colonize**.
- Conservation du contexte de retour vers **Main Turn Structure** lorsque **Colonize** provient d’une carte Bot et enchaîne vers **Explore**.
- Retour automatique vers **Did Action take effect?** après la résolution complète de **Colonize** lorsqu’elle provient d’une carte Bot.
- Validation de l’action **Colonize** depuis :
  - **Choose a Specific Action** ;
  - **Main Turn Structure** ;
  - une action issue d’une carte Bot via **Main Turn Structure**.
- Déplacement de **Credits** du menu **Bot Actions** vers le menu principal afin de mieux refléter son rôle global dans l’application.

---

## [0.5.0] — 2026-08-25

### Ajouté en 0.5.0

- Implémentation complète de l’action **Spy**.
- Ajout de **Spy** dans le menu **Choose a Specific Action**.
- Accès à **Spy** depuis l’action **Defend**.
- Accès à **Spy** depuis les cartes Bot concernées via **Main Turn Structure**.
- Implémentation des différentes étapes du diagramme **Spy** :
  - vérification d’une Guerre contre un Adversaire ;
  - sélection de l’Adversaire concerné ;
  - vérification de son niveau d’Unrest ;
  - déclenchement éventuel d’un jet de dés Rebelles ;
  - ajout de 2 Unrest à une Town adverse ;
  - vérification d’une Guerre contre un NPR ;
  - renvoi vers l’action **Military** lorsque nécessaire ;
  - fin du tour.
- Gestion de l’historique des étapes de **Spy** avec **Previous Step**.
- Utilisation des icônes **Unrest** et **Town** dans le diagramme.
- Ajout de la mention d’origine du diagramme **Spy**, incluant **Defend** et les cartes Bot correspondantes.
- Gestion du renvoi `goto` de **Spy** vers **Military** sans retour automatique vers **Spy**.
- Conservation du contexte de retour vers **Main Turn Structure** lorsqu’une action issue d’une carte Bot enchaîne vers une autre action.
- Retour automatique vers **Did Action take effect?** après la résolution complète de **Spy** lorsqu’elle provient d’une carte Bot.
- Ajout du bouton **Complete Action** en fin d’action lorsque le contexte exige un retour vers **Main Turn Structure**.
- Amélioration du positionnement de **Complete Action** sous les écrans de fin de diagramme.
- Validation de l’action **Spy** depuis :
  - **Choose a Specific Action** ;
  - **Defend** ;
  - une action issue d’une carte Bot via **Main Turn Structure**.

---

## [0.4.0] — 2026-08-23

### Ajouté en 0.4.0

- Implémentation complète de l’action **Siege**.
- Ajout de **Siege** dans le menu **Choose a Specific Action**.
- Accès à **Siege** depuis **Main Turn Structure**.
- Accès à **Siege** depuis l’action **Defend**.
- Préparation de l’accès à **Siege** depuis l’action **Military**, qui sera raccordé lors de l’implémentation de cette action.
- Implémentation des différentes étapes du diagramme **Siege** :

  - résolution du siège des Provinces hostiles ;
  - gestion des priorités de sélection des Provinces ;
  - prise en compte de la note de règles associée au siège ;
  - vérification de l’état de Guerre, de l’Unrest et des Rebel Towns ;
  - retrait éventuel de l’Armée du plateau ;
  - fin du tour.
- Gestion de l’historique des étapes de **Siege** avec **Previous Step**.
- Ajout des icônes nécessaires à **Siege** :

  - Vassal ;
  - Unrest ;
  - Rebel Town.
- Ajout de la mention d’origine du diagramme **Siege** indiquant ses différents points d’entrée dans les règles du jeu.
- Validation de l’action **Siege** depuis :

  - **Choose a Specific Action** ;
  - **Main Turn Structure** ;
  - **Defend**.

---

## [0.3.0] — 2026-08-23

### Ajouté en 0.3.0

- Début de l’implémentation des actions Bot individuelles.
- Implémentation complète de l’action **Defend**.
- Ajout du menu **Choose a Specific Action** permettant de lancer directement les actions Bot disponibles.
- Ajout de **Defend** dans le menu **Choose a Specific Action**.
- Accès à **Defend** depuis **Main Turn Structure** conformément au diagramme du jeu.
- Implémentation des 30 nœuds du diagramme **Defend** :
  - questions Oui / Non ;
  - actions à effectuer ;
  - jets de dés ;
  - fins de tour ;
  - renvois vers d’autres actions ou résolutions.
- Gestion de l’historique des étapes de **Defend** avec **Previous Step**.
- Ajout des notes de règles propres au diagramme **Defend**.
- Ajout d’un système générique de rappels contextuels, utilisé notamment pour rappeler la définition de **Invaders** uniquement lorsqu’elle est utile.
- Ajout d’un composant générique de jet de dé :
  - lancement aléatoire d’un dé virtuel ;
  - affichage du résultat obtenu ;
  - sélection manuelle d’un résultat pour faciliter les tests des diagrammes ;
  - prise en charge du d6 standard ;
  - préparation du dé spécial utilisé par l’action **Explore**.
- Ajout des symboles `2-skull` et `3-skull` du dé spécial **Explore** dans le système d’icônes.
- Ajout de l’illustration `assets/img/explore_dice.png` destinée au futur dé spécial **Explore**.
- Mise en place d’un système de navigation entre diagrammes distinguant :
  - les renvois sans retour (`goto`) ;
  - les appels temporaires avec retour (`call / return`).
- Mise en place d’une pile de retour permettant à une résolution appelée depuis une action de revenir au bon nœud du diagramme appelant.
- Raccordement de **Defend** vers :
  - **Siege** ;
  - **Spy** ;
  - **Land Battle** ;
  - **Naval Battle**.
- Validation du retour vers **Defend** après une **Land Battle** ou une **Naval Battle**.
- Ajout des styles spécifiques des renvois vers **Land Battle** et **Naval Battle**.
- Ajout de la mention d’origine du diagramme **Defend** : `(from Main Turn Structure)`.
- Amélioration de l’espacement et de la présentation des différents éléments des diagrammes.

---

## [0.2.0] — 2026-08-23

### Ajouté en 0.2.0

- Module Bot Actions.
- Menu principal des actions Bot.
- Implémentation complète de Main Turn Structure.
- Gestion interactive des questions Oui / Non.
- Gestion des actions, fins de tour et liens vers les actions Bot.
- Intégration des 24 cartes Bot et de leurs coûts, premières actions, secondes actions et actions de Guerre.
- Saisie de l’identifiant d’une carte Bot.
- Sélection automatique de l’action à effectuer selon la carte et l’état de Guerre.
- Gestion de Did Action take effect?.
- Historique des étapes avec retour à l’étape précédente.
- Conservation de l’état de Main Turn Structure lors d’un changement de langue ou de thème.
- Navigation générique vers une action Bot.
- Mise en place d’un contexte de retour permettant à une action issue d’une carte Bot de revenir automatiquement à Main Turn Structure.
- Intégration de la police d’icônes The Price of Power dans les diagrammes.

---

## [0.1.0] — Fondations de l'application — 2026-08-23

### Ajouté en 0.1.0

- Création de la structure initiale du projet.
- Création du fichier principal `index.html`.
- Création de la structure CSS :
  - `base.css`
  - `components.css`
  - `layout.css`
  - `themes.css`
- Création du système JavaScript principal :
  - `app.js`
  - `router.js`
- Création des modules communs :
  - `diagram-engine.js`
  - `i18n.js`
  - `icons.js`
  - `settings.js`
- Création du système multilingue avec :
  - `locales/en.js`
  - `locales/fr.js`
- Préparation des trois grands modules de l'application :
  - **Bot Actions**
  - **Bot Realm Targeting**
  - **Player Resolutions**
- Préparation des dossiers `data` destinés à contenir les diagrammes sous forme de données.
- Ajout de la fonte spéciale `ThePriceOfPowerIcons.otf`.

### Interface

- Création de l'écran d'accueil.
- Mise en place de la navigation entre les trois grands modules.
- Création des écrans provisoires des modules non encore développés.
- Affichage du numéro de version sur l'écran d'accueil.

### Réglages

- Mise en place du choix **FR / EN**.
- Conservation de la langue choisie avec `localStorage`.
- Mise en place du mode **jour / nuit**.
- Conservation du thème choisi avec `localStorage`.
- Mise en place du réglage de la taille du texte.
- Ajout des commandes `A−` et `A+`.
- Affichage du niveau de taille de texte.
- Possibilité de réinitialiser la taille du texte.
- Conservation de la taille choisie avec `localStorage`.

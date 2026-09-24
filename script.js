(() => {
  "use strict";

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";

  const storage = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        /* storage unavailable (private mode) */
      }
    },
  };

  /* ==========================================================================
     Translations
     ========================================================================== */

  const translations = {
    fr: {
      meta_desc: "Portfolio développeur : 20 ans d'expérience informatique, Lua, logiciels Windows, Roblox, automatisation, bots Discord, API, IA, modèles locaux, serveurs de jeux et extensions Chrome.",
      og_title: "MSDOS | Portfolio développeur",
      og_desc: "Portfolio : 20 ans d'expérience informatique, Lua, tools Windows, automatisation, Roblox, bots Discord, API, IA, modèles locaux, serveurs de jeux et logiciels local-first.",
      site_title: "MSDOS | Portfolio développeur",
      skip_link: "Aller au contenu",
      brand_tagline: "Outils, Automation, High Tech & IA",
      nav_about: "Profil",
      nav_projects: "Projets",
      nav_skills: "Compétences",
      nav_contact: "Contact",
      hero_status: "Ouvert aux projets &amp; collaborations",
      hero_date: "Portfolio Logiciels & Systèmes — 2026",
      hero_title: 'Outils, automation, <span class="dim">high tech &amp; IA.</span>',
      hero_lead: "Passionné d'informatique depuis mes 13 ans, je conçois des solutions sur mesure pour répondre à des défis concrets. Je maîtrise plusieurs langages de programmation, souvent sur plusieurs projets en parallèle, tout en continuant d'apprendre de nouveaux langages et technologies pour intégrer les derniers workflows IA. Mon objectif : bâtir des systèmes stables, automatisés et intelligents.",
      btn_projects: "Voir les projets",
      btn_contact: "Me contacter",
      terminal_content: "C:\\>PROFILE.EXE /SCAN\n\n[SCAN DU PROFIL...]\nEXPERIENCE=20_ANS\nFOCUS=TOOLS,AUTOMATION,ROBLOX,APIS,IA\nLANGAGE=LUA\nWORKFLOW=MULTI_PROJETS,ORIENTE_BESOIN\nSERVEURS=MINECRAFT,GMOD,FIVEM\nLEGACY=PREMIERS_ANTICHEATS_GMOD\nIA_STACK=CLAUDE,GEMINI,DEEPSEEK,LOCAL\nMODE=PASSION_DRIVEN,LOCAL_FIRST",
      stat_years: "Années d'informatique",
      stat_scripts: "Scripts Lua écrits",
      stat_bench: "Fichiers gagnés face à 7-Zip",
      stat_audit: "Backdoors &amp; trojans audités",
      metric_years: "ans",
      metric_it: "Informatique",
      metric_lang: "Langage Principal",
      metric_watch: "Veille",
      metric_tech: "Tech & IA",
      focus_eyebrow: "Ce que je construis",
      focus_title: "Des outils qui résolvent des problèmes concrets",
      focus_desktop: "Applications Desktop",
      focus_desktop_desc: "Optimisation Windows, maintenance, debloat Android, traduction locale et gestion d'outils.",
      focus_automation: "Automation & Bots",
      focus_automation_desc: "Bots Discord complets, APIs perso, automatisation web, modération, logs et systèmes persistants.",
      focus_gaming: "Expériences de Jeu",
      focus_gaming_desc: "Jeux Roblox, serveurs ultra moddés, génération de cartes semi-3D et gameplay long terme.",
      exp_eyebrow: "Parcours",
      exp_title: "Vingt ans, des serveurs de jeux à l'IA locale.",
      exp_20_title: "20 ans d'expérience",
      exp_20_desc: "Dans l'informatique depuis mes 13 ans, avec une pratique continue des outils, serveurs, scripts et logiciels.",
      exp_anticheat_title: "Anticheats GMod / DarkRP",
      exp_anticheat_desc: "Travail sur des anticheats durant les premières années de GMod/DarkRP, parmi les premiers projets du genre.",
      strip_servers_title: "Serveurs & Communautés",
      strip_servers_desc: "Modérateur, Head Mod et Développeur sur plusieurs serveurs de jeux et communautés actives (Minecraft, GMod, FiveM).",
      exp_api_title: "APIs & Passion",
      exp_api_desc: "Utilisation et création d'APIs personnelles pour connecter des outils, automatiser des workflows et aller plus vite.",
      exp_ai_title: "IA & Modèles Locaux",
      exp_ai_desc: "Travail avec Claude, Gemini, DeepSeek, versions CLI et de nombreux modèles locaux pour tester, comparer et intégrer l'IA.",
      exp_learning_title: "Apprentissage Continu",
      exp_learning_desc: "Base principale en Lua, exploration d'autres langages, veille permanente sur les nouvelles technologies et travail en parallèle sur plusieurs projets.",
      projects_eyebrow: "Projets",
      projects_title: "Sélection de réalisations",
      security_notice_eyebrow: "Sécurité & Éthique",
      security_notice_title: "Recherche autorisée uniquement",
      security_notice_body: "Mes logiciels et recherches liés à la sécurité sont conçus et utilisés uniquement dans un cadre autorisé : apprentissage, recherche, challenge, audit ou tests sur mes propres environnements ou avec accord explicite. Je ne les utilise pas pour accéder, maintenir un accès, contourner, altérer, exfiltrer ou perturber des systèmes ou données sans droit ; toute découverte sensible est traitée de manière responsable et conforme aux lois françaises et internationales applicables.",
      search_placeholder: "Rechercher un projet ou une compétence",
      filter_all: "Tout",
      filter_desktop: "Desktop",
      filter_automation: "Automation",
      filter_game: "Jeux",
      filter_security: "Sécurité",
      filter_extension: "Extensions",
      filter_research: "Recherche",
      no_results: "Aucun projet ne correspond à cette recherche.",
      reset_filters: "Réinitialiser les filtres",
      group_research: "Recherche &amp; Ingénierie",
      group_desktop: "Outils Windows &amp; Desktop",
      group_games: "Jeux &amp; Automation",
      type_codec: "Recherche compression",
      type_firmware: "Firmware Custom",
      type_desktop: "App Desktop",
      type_windows: "Outil Windows",
      type_security: "Sensibilisation",
      type_game_sec: "Sécurité Jeu",
      type_utility: "Utilitaire",
      type_game_tool: "Outil Jeu",
      type_roblox: "Roblox",
      type_legacy: "Historique",
      type_servers: "Serveurs de jeu",
      type_local: "App Locale",
      type_android: "Outil Android",
      type_discord: "Bot Discord",
      type_maintenance: "Maintenance",
      type_browser: "Extensions Web",
      type_ai: "Workflows IA",
      type_workspace: "Workspace Windows",
      title_orpane: "Orpane Compressor",
      p_orpane: "Codec de compression lossless expérimental qui surpasse 7-Zip -mx9 sur 100% des fichiers de benchmark (53/53, +2,4 Mo économisés). Vérification bit-exact SHA-256 + BLAKE3. Décompresseur natif Rust publié.",
      link_orpane: "Voir le Proof Package",
      title_firmware: "Firmware Android — LineageOS 18.1",
      p_firmware: "Firmware Android custom pour clone fake Samsung S25 Ultra (MT6739) : 46 backdoors et trojans audités, remplacés par un LineageOS 18.1 propre avec microG, Magisk root et flasher automatique 1-clic.",
      link_firmware: "Voir le Thread XDA",
      p_rbx_manager: "Manager Roblox nouvelle génération avec beaucoup de features, pensé pour gérer rapidement plusieurs comptes et actions.",
      link_discord: "Rejoindre le Discord",
      link_rbx_manager: "Voir sur GitHub",
      p_rbx_creation: "Création d'expériences complètes.",
      title_highpriority: "HighPriority Booster",
      p_highpriority: "Permet de lancer n'importe quelle application en mode Haute Priorité CPU automatiquement sans changer l'application ou ses réglages.",
      title_keyboardlocker: "KeyboardLocker",
      p_keyboardlocker: "Logiciel très léger et portable (sans installation) pour bloquer les entrées clavier et souris, avec un raccourci clavier personnalisable.",
      title_bypass: "Bypass Sécurité ChatGPT 5.5",
      p_bypass: "Démonstration technique d'un contournement des sécurités de ChatGPT 5.5 en Mai 2026. Analyse de vulnérabilité et rapport éthique.",
      title_gemini_bypass: "Gemini 3.5 Security Bypass",
      p_gemini_bypass: "Cas de recherche sécurité autour de Gemini 3.5, documenté comme test de robustesse et analyse responsable sans détails d'implémentation publics.",
      title_sliderman: "Sliderman : Gemini et modules custom pour Windows",
      p_sliderman: "Workspace Windows modulaire intégrant Gemini, Google Discover sur PC et des modules personnalisés ajoutables en quelques secondes, déplaçables librement.",
      title_optimizer: "Tool d'optimisation technicien",
      p_optimizer: "Outil hyper complet pour accélérer, nettoyer, diagnostiquer et appliquer des réglages utiles sur PC.",
      title_cameras: "Audit de caméras exposées",
      p_cameras: "Découverte de caméras mal sécurisées à des fins d'audit, de sensibilisation et de prévention.",
      title_anticheat: "Anticheats GMod / DarkRP",
      p_anticheat: "Travail sur des anticheats dans les premières années de GMod/DarkRP, parmi les premiers projets du genre.",
      title_restart: "Redémarrage PC simple",
      p_restart: "Logiciel minimaliste pour redémarrer un PC rapidement avec une interface claire et directe.",
      title_parallax: "Génération de cartes semi-3D",
      p_parallax: "Génération automatique de cartes avec couches Parallax pour produire un rendu semi-3D.",
      title_rbx_games: "Jeux vidéos Roblox",
      p_rbx_games: "Création de plusieurs expériences Roblox avec systèmes de gameplay, progression et interfaces.",
      title_rbx_exploit: "Roblox Exploit (Terminé)",
      p_rbx_exploit: "Création massive de scripts (2K+) pour Roblox. Cette activité est désormais close mais a forgé une expertise solide en Lua.",
      legacy_status: "[ TERMINÉ ]",
      scripts_label: "Scripts Lua",
      title_servers: "Serveurs de jeux ultra moddés",
      p_servers: "Création de serveurs Minecraft, GMod, FiveM et autres environnements lourdement customisés.",
      title_subtitles: "Traducteur de sous-titres en masse",
      p_subtitles: "Traduction rapide de sous-titres en plusieurs langues, full local et facile à prendre en main.",
      title_android: "Debloater Android PC",
      p_android: "Outil PC pour nettoyer un appareil Android, retirer les apps inutiles et simplifier la maintenance.",
      title_discord: "Bot Discord complet",
      p_discord: "Mini-jeux, jeu complet donjon/trading/farming, modération, logs et maintenance continue depuis 2 ans+.",
      title_updater: "Mise à jour logiciels en 1 clic",
      p_updater: "Mise à jour rapide des applications installées, avec récupération depuis les sources officielles.",
      title_extension: "Chrome Extensions",
      p_extension: "Visualizer audio, prix au kilo pour comparer les commandes food, automatisations web et outils pratiques.",
      title_ai: "Expérimentation IA et modèles locaux",
      p_ai: "Claude, Gemini, DeepSeek, versions CLI et dizaines de modèles locaux testés pour comparer leurs comportements et les intégrer à des outils.",
      type_ytdl: "Extension Web",
      title_ytdl: "YT Downloader",
      p_ytdl: "Un seul bouton ajouté directement sur la page YouTube pour tout télécharger — MP4, MKV, WebM, MP3, FLAC, WAV, AAC, M4A, Opus et OGG, jusqu'en 8K, avec sous-titres, miniatures et métadonnées.",
      skills_eyebrow: "Compétences",
      skills_title: "Ce que je maîtrise",
      skill_dev_title: "Développement",
      skill_dev_1: "Applications Desktop",
      skill_dev_2: "Interfaces simples et efficaces",
      skill_dev_3: "Logiciels créés pour mes besoins",
      skill_dev_4: "Création d'APIs personnelles",
      skill_dev_5: "IA, LLMs et modèles locaux",
      skill_dev_6: "Projets en parallèle",
      skill_dev_7: "Automation de Workflows",
      skill_sys_title: "Système & Maintenance",
      skill_sys_1: "Optimisation Windows",
      skill_sys_2: "Diagnostic et Nettoyage",
      skill_sys_3: "Mise à jour logicielle",
      skill_sys_4: "ADB / Debloat Android",
      skill_sys_5: "Scripts Technicien",
      skill_game_title: "Gaming & Communautés",
      skill_game_1: "Roblox / Lua",
      skill_game_2: "Lua comme Langage Principal",
      skill_game_3: "Systèmes de Gameplay",
      skill_game_4: "Serveurs Minecraft / GMod / FiveM",
      skill_game_5: "Anticheats GMod / DarkRP",
      skill_game_6: "Bots Discord",
      skill_game_7: "Économies Farming/Trading",
      skill_web_title: "Web & Extensions",
      skill_web_1: "Extensions Chrome",
      skill_web_2: "Automation Web",
      skill_web_3: "Claude / Gemini / DeepSeek CLI",
      skill_web_4: "Veille nouvelles technologies",
      skill_web_5: "Audio Visualizers",
      skill_web_6: "Comparateurs Pratiques",
      skill_web_7: "UX Utilitaire",
      contact_eyebrow: "Contact",
      contact_title: "Discutons d'un projet ou d'une collaboration",
      contact_desc: "L'email et Discord sont disponibles. Les démos publiques peuvent être ajoutées projet par projet.",
      contact_email_action: "Envoyer un email",
      copied: "Pseudo Discord copié",
      back_to_top: "Retour en haut",
      zoom_hint: "Agrandir",
      copyright: "&copy; 2026 MSDOS - Tous droits réservés.",
      private_notice_eyebrow: "Confidentialité",
      private_notice_title: "Sources privées, disponibles sur demande",
      private_notice_body: "Une grande partie des codes sources, preuves de concept et éléments techniques de ces projets est volontairement conservée en privé — pour des raisons évidentes de sécurité (vulnérabilités, techniques sensibles, divulgation responsable) et pour protéger la vie privée et les données de tiers. Ils peuvent être partagés en privé, au cas par cas, dans le cadre d'une collaboration, d'une revue technique, d'une preuve d'antériorité ou de toute autre demande légitime.",
      private_notice_cta: "Demander un accès",
      private_source: "Source privée",
      type_server: "Reconstruction serveur",
      title_firefall: "Firefall — Reconstruction du serveur (PIN)",
      p_firefall: "Reconstruction complète du serveur de Firefall, le MMO de Red 5 Studios fermé en 2017, menée seul à partir des fichiers de base des développeurs du projet PIN (Pirate Intelligence Network). Stack serveur autoritaire en C# / .NET 9 visant la parité avec le client prod-1962 (patch 1.6–1.7) : réseau, monde, physique, combat, IA, aptitudes, véhicules, missions, économie et social.",
      ff_stat_phases: "phases terminées",
      ff_stat_tests: "tests réussis",
      ff_stat_projects: "projets, 0 warning",
      ff_stat_subsystems: "sous-systèmes fonctionnels",
      ff_f1_t: "Réseau",
      ff_f1_d: "Handshake Matrix, multiplexage GSS sur 4 canaux, réassemblage des paquets fragmentés et durcissement du protocole par fuzzing.",
      ff_f2_t: "Monde & streaming",
      ff_f2_d: "Chargement des zones, attribution d'instances et transitions de frontière sans coupure.",
      ff_f3_t: "Mouvement & physique",
      ff_f3_d: "Jetpacks, planeurs, collisions BepuPhysics2, anti-triche de position côté serveur et véhicules multi-passagers.",
      ff_f4_t: "Combat",
      ff_f4_d: "Simulation balistique des projectiles, matrice d'hostilité des factions, headshots, coups critiques et courbes de mitigation d'armure.",
      ff_f5_t: "Aptitudes",
      ff_f5_d: "Moteur d'aptitudes autoritaire côté serveur — 27 jalons de commandes implémentés et testés.",
      ff_f6_t: "Moteur d'IA",
      ff_f6_d: "Boucle d'IA à 4 Hz, pathfinding A* sur NavMesh, bonds des arachnides, tactiques sniper et juggernaut des Chosen.",
      ff_f7_t: "Rencontres & missions",
      ff_f7_d: "Thumpers à vagues dynamiques et éruptions de ruches, chaînes de missions, objectifs et succès.",
      ff_f8_t: "Économie",
      ff_f8_d: "Butin 3D au sol, tables de loot récursives, boutique Red Bean, place de marché, crafting et distributeurs de jetons.",
      ff_f9_t: "Social",
      ff_f9_d: "Armées avec rangs et effectifs, amis et présence en ligne, chat multi-canaux (zone, escouade, armée, messages privés).",
      ff_f10_t: "Qualité",
      ff_f10_d: "164/164 tests automatisés, 0 warning de compilation sur 25 projets, tests d'endurance et de charge à 50 joueurs simultanés.",
      type_ide: "Extension d'IDE",
      title_antigravity: "Antigravity+",
      p_antigravity: "Surcouche pour l'IDE IA Antigravity : indicateurs d'activité en direct sur les projets, favoris épinglés, recherche instantanée dans la barre latérale et jauges de quotas Gemini / Claude en temps réel — le tout porté par un moteur de performance sans reflow.",
      ag_f1_t: "Projets actifs mis en évidence",
      ag_f1_d: "Point vert pulsant et liseré latéral intelligent sur les projets qui exécutent une tâche ou un sous-agent — zéro lag, sub-milliseconde.",
      ag_f2_t: "Projets épinglés & favoris",
      ag_f2_d: "Épinglez vos projets préférés en tête de la barre latérale pour un accès instantané.",
      ag_f3_t: "Recherche rapide (Ctrl+F)",
      ag_f3_d: "Barre de recherche intégrée à la barre latérale pour filtrer immédiatement projets et conversations.",
      ag_f4_t: "Double jauge de quotas en temps réel",
      ag_f4_d: "Indicateurs en direct pour Gemini et Claude/Opus dans la barre de titre : limites hebdomadaires et sur 5 h, compte à rebours de réinitialisation et synchronisation continue.",
      ag_f5_t: "Gardien DOM ciblé",
      ag_f5_d: "Surveillance confinée aux conteneurs nécessaires — 0 % de reflow sur document.body.",
      ag_f6_t: "Cache disque asynchrone & clic droit source",
      ag_f6_d: "Indexation en tâche de fond et ouverture instantanée des dossiers de code.",
      ag_f7_t: "React 19 & sélecteurs résilients",
      ag_f7_d: "Mémoïsation O(1) et sélecteurs conçus pour résister aux futures mises à jour d'Antigravity.",
      ag_f8_t: "Mises à jour",
      ag_f8_d: "Affichage de la version installée et vérification des mises à jour en un clic.",
      type_roblox_tool: "Outil Roblox",
      title_pet_tracker: "Roblox Pet Tracker",
      p_pet_tracker: "PetRift Tracker, application web compagnon de Pet Rift : le serveur de jeu Roblox pousse automatiquement l'inventaire de chaque joueur vers un backend Firebase sécurisé, et n'importe qui peut consulter une collection — pets possédés et manquants, complétion, variantes — sans aucune mise à jour manuelle.",
      pt_f1_t: "Synchronisation serveur automatique",
      pt_f1_d: "Un script Luau côté serveur Roblox pousse l'inventaire des joueurs vers une Cloud Function protégée par clé secrète : pas d'usurpation possible, pas de limite de l'API Roblox.",
      pt_f2_t: "Profils publics",
      pt_f2_d: "Recherche par pseudo Roblox : avatar, pets possédés, manquants et total, date de dernière synchro et pourcentage de complétion.",
      pt_f3_t: "Explorateur de collection",
      pt_f3_d: "Recherche, filtres par rareté (Common à Secret), variantes, pets Huge et Giant, quantités en double.",
      pt_f4_t: "Score de collectionneur & votes",
      pt_f4_d: "Score de collectionneur noté en étoiles et votes de la communauté sur les profils.",
      pt_f5_t: "Classement",
      pt_f5_d: "Meilleurs collectionneurs avec podium.",
      pt_f6_t: "Offres d'échange",
      pt_f6_d: "Création, consultation et remise en ligne d'offres d'échange, avec expiration automatique.",
      pt_f7_t: "Wishlist, suivi & listes",
      pt_f7_d: "Liste de souhaits, suivi des pets manquants et listes personnalisées.",
      pt_f8_t: "Rotation des Huge",
      pt_f8_d: "Planning des rotations de pets Huge avec compte à rebours en direct et recherche de la prochaine apparition.",
      pt_f9_t: "Aide au mailbox",
      pt_f9_d: "Affiche les pets manquants d'un joueur pour pouvoir les lui envoyer via le mailbox du jeu.",
      pt_f10_t: "Liaison du compte Roblox",
      pt_f10_d: "Connexion vérifiée par un code à usage unique révélé en jeu.",
      title_rifty: "Rifty · SnitchersBot",
      group_tooling: "Appareils, IoT &amp; Outillage",
      type_robotics: "Robotique &amp; IoT",
      title_quantum: "QuantumClean Pro 2026",
      p_quantum: "Suite desktop en Python qui prend le contrôle total d'un robot aspirateur-laveur Tuya, conçue par rétro-ingénierie de l'application Android officielle Tuya et de son bytecode MiniApp : pilotage LAN local chiffré avec bascule cloud instantanée, gestion prédictive de la batterie, navigation autonome anti-blocage et cartographie 2D interactive des pièces.",
      qc_f1_t: "Rétro-ingénierie",
      qc_f1_d: "Client Android officiel Tuya et bytecode JavaScript MiniApp analysés pour cartographier 20 DataPoints propriétaires — modes, statut, aspiration, eau, consommables et bitmap de 7 défauts matériels.",
      qc_f2_t: "Communication double pile",
      qc_f2_d: "Protocole LAN local chiffré (v3.4) avec bascule instantanée et non bloquante vers l'OpenAPI Tuya Cloud (~0,25 s) et fusion cumulative de la télémétrie.",
      qc_f3_t: "Gestion prédictive de la batterie",
      qc_f3_d: "Moteur à 7 composants : lissage EMA et rejet des pics, profils de décharge par mode, détection des effondrements de tension avec seuil de coupure appris, fusion de capteurs, scores de confiance et de risque, vérification de faisabilité avant chaque départ.",
      qc_f4_t: "Navigation intelligente &amp; sécurité",
      qc_f4_d: "Bouclier anti-poussée autour de la base, détection des pièges de pieds de chaise, routine de déblocage adaptative en 3 étapes et boost automatique sur tapis.",
      qc_f5_t: "Routines de nettoyage avancées",
      qc_f5_d: "Double passage, aspiration puis lavage, zone de précision à 4 coins (5 phases) et lavage premium en 6 phases.",
      qc_f6_t: "SLAM 2D &amp; cartographie",
      qc_f6_d: "Enveloppe concave alpha-shape par triangulation de Delaunay (seuil auto-ajusté), repli en enveloppe convexe, scan de périmètre multi-tours avec fermeture de boucle, détection des murs virtuels et modélisation du mobilier.",
      qc_f7_t: "Ancrage RF de l'odométrie",
      qc_f7_d: "Latence et gigue réseau mesurées via le routeur, utilisées comme contrainte de distance pour garder l'odométrie dans le plan connu.",
      qc_f8_t: "Interface desktop",
      qc_f8_d: "Interface CustomTkinter sombre : télémétrie en direct, canevas 2D interactif (pan, zoom, glisser), pilotage D-pad et clavier (ZQSD), diagnostic 7 capteurs, consommables et journal d'événements — livrée en exécutable Windows autonome, avec BMS testé unitairement.",
      type_telemetry: "Hub montre connectée",
      title_watch7: "Watch7Manager",
      p_watch7: "Hub de gestion desktop pour la Samsung Galaxy Watch7 (Wear OS 5) via ADB Wi-Fi — lanceur natif C#, backend Node.js et interface React : télémétrie en temps réel, données santé en direct, gestionnaire d'apps et debloater, installation d'APK et optimisation de la batterie en un clic.",
      w7_f1_t: "Lanceur natif &amp; garde des processus",
      w7_f1_d: "Lanceur C# WinForms qui rattache Node, Vite, Express et ADB à un Job Object Win32 : le fermer ne laisse aucun processus orphelin. Recompilation autonome via le csc.exe intégré à Windows.",
      w7_f2_t: "Assistant de connexion sans fil",
      w7_f2_d: "Appairage TLS Android 11+ et connexion en 3 étapes, avec reconnexion automatique persistante.",
      w7_f3_t: "Télémétrie temps réel",
      w7_f3_d: "Jauges néon pour la batterie (température, tension, source d'alimentation), le stockage, la RAM et la charge CPU par cœur, processus actifs et profil matériel/firmware.",
      w7_f4_t: "Données santé en direct",
      w7_f4_d: "Samsung Knox chiffrant les données biométriques brutes, fréquence cardiaque, stress et pas sont capturés en direct depuis un flux logcat relayé en WebSocket. Simulateur synthétique Wear Health Services inclus.",
      w7_f5_t: "Gestionnaire d'apps &amp; debloater",
      w7_f5_d: "Inventaire complet avec filtres et moteur de métadonnées à 3 niveaux (cache local, scraping Play Store, heuristiques Wear OS) qui indique ce qui peut être désactivé sans risque ; activer, désactiver ou désinstaller.",
      w7_f6_t: "Mises à jour Play Store",
      w7_f6_d: "Ouvre le Play Store de la montre et diffuse la progression des téléchargements et installations en WebSocket.",
      w7_f7_t: "Installation d'APK",
      w7_f7_d: "Glisser-déposer, installation directe sur la montre et nettoyage automatique des fichiers temporaires.",
      w7_f8_t: "Optimisation batterie en un clic",
      w7_f8_d: "Always-On Display, réveil par inclinaison, délai de mise en veille, luminosité et désactivation de l'écoute Bixby en arrière-plan.",
      type_ambient: "Éclairage d'ambiance",
      title_jellybite: "JellyBite",
      p_jellybite: "Compagnon Windows ultra léger qui reproduit l'expérience Philips Ambilight : un halo doux et flouté, synchronisé sur les bords de la vidéo, projeté derrière les fenêtres Jellyfin, Edge et Chrome — y compris les lecteurs Picture-in-Picture flottants.",
      jb_f1_t: "Suivi intelligent des fenêtres",
      jb_f1_d: "Chaîne de priorité — Picture-in-Picture d'abord, puis fenêtre au premier plan, verrouillage de la cible et scan Z-order — avec limites DWM exactes et zone vidéo précise.",
      jb_f2_t: "Capture sous-échantillonnée",
      jb_f2_d: "GDI StretchBlt directement dans un tampon 80×48 : aucune capture d'écran pleine résolution.",
      jb_f3_t: "Détection des bandes noires",
      jb_f3_d: "Les bandes noires (film 21:9 sur écran 16:9) sont rognées automatiquement pour échantillonner les vrais bords de l'image.",
      jb_f4_t: "Étalonnage &amp; lissage",
      jb_f4_d: "Boost de saturation et d'intensité en HSV avec atténuation en basse lumière, et lissage exponentiel par zone contre le scintillement.",
      jb_f5_t: "Moteur de halo",
      jb_f5_d: "Extrusion des bords au quart de résolution avec fondu des coins, flou gaussien et atténuation alpha cubique qui ne teinte jamais la vidéo.",
      jb_f6_t: "Overlay traversable",
      jb_f6_d: "Fenêtre superposée, traversable au clic, placée juste derrière la cible (au premier plan pour le PiP) et invisible dans Alt+Tab.",
      jb_f7_t: "Contrôles &amp; préréglages",
      jb_f7_d: "Icône de notification : application cible, préréglages (Doux &amp; apaisant, Équilibré, Cinéma vif), taille du halo, intensité, lissage, mode démo et démarrage automatique avec Windows.",
      jb_f8_t: "Performance",
      jb_f8_d: "Boucle de rendu régulée à 35 FPS (15 à 60), livrée en exécutable portable autonome.",
      p_rifty: "Compagnon Discord événementiel pour le jeu Roblox Pet Rift, écrit en Lua sur le runtime Luvit avec Discordia : télémétrie Roblox en direct et suivi des hatchs, synchro avec le portail PetRift Tracker, économie RPG complète (boss, donjons, pêche, cartes, boutiques et classes), moteur de conversation auto-apprenant et outils complets de modération et d'anti-arnaque — optimisé pour des milliers d'utilisateurs, et bien plus encore.",
      rf_stat_lines: "lignes de Lua (cœur)",
      rf_stat_years: "ans en production",
      rf_stat_tiers: "niveaux de commandes",
      rfm_live: "Stats Roblox live",
      rfm_hatch: "Suivi des hatchs",
      rfm_plaza: "Moniteur Plaza",
      rfm_eco: "Économie &amp; échanges",
      rfm_boss: "Boss mondiaux",
      rfm_dungeon: "Vagues de donjon",
      rfm_fish: "Pêche",
      rfm_cards: "Cartes à collectionner",
      rfm_shops: "Boutiques &amp; classes",
      rfm_ai: "IA auto-apprenante",
      rfm_mod: "Modération &amp; logs",
      rfm_sec: "Sécurité anti-arnaque",
      rf_f1_t: "Télémétrie Roblox en direct",
      rf_f1_d: "Interroge les univers Pet Rift, affiche le nombre de joueurs en direct dans le nom des salons vocaux et enregistre les pics quotidiens.",
      rf_f2_t: "Moniteur des serveurs Plaza",
      rf_f2_d: "Surveille les serveurs publics du Trading Plaza toutes les 30 secondes et publie des alertes auto-supprimées lors des pics ou chutes de joueurs.",
      rf_f3_t: "Suivi des hatchs",
      rf_f3_d: "Ingère les webhooks des serveurs de jeu, analyse les hatchs Huge, Giant, Secret, Shiny, Golden et Diamond avec numéros de série, relie les joueurs Roblox à leur compte Discord, envoie félicitations et MP, et alimente des classements en direct.",
      rf_f4_t: "Synchro PetRift Tracker",
      rf_f4_d: "Lit les inventaires synchronisés dans Firestore pour les liens de profil web et les comparaisons de collections directement dans le chat.",
      rf_f5_t: "Économie &amp; échanges",
      rf_f5_d: "Monnaie de points, transferts, enchères, classements et ajustements administrateur.",
      rf_f6_t: "Pets &amp; stockage PC",
      rf_f6_d: "Pets équipés, PC virtuel pour stocker les pets en trop avec améliorations de stockage, et évolution des pets.",
      rf_f7_t: "Boss mondiaux",
      rf_f7_d: "Apparitions automatiques de boss avec points de vie, alertes et boucle d'auto-attaque passive.",
      rf_f8_t: "Vagues de donjon",
      rf_f8_d: "Épreuve multijoueur avec dégâts croissants, points de vie des joueurs, soins et multiplicateurs de survie.",
      rf_f9_t: "Pêche",
      rf_f9_d: "Niveaux de canne, compteurs de pitié, tables de poissons communs et rares, numéros de série et rappels.",
      rf_f10_t: "Cartes à collectionner",
      rf_f10_d: "Paquets de cartes en raretés Basic, Rare, Epic, Legendary et Shiny, suivi de complétion et classement des cartes Shiny.",
      rf_f11_t: "Boutiques &amp; classes",
      rf_f11_d: "Boutiques tournantes et secrètes, et perks de classe comme le soin du Médecin ou le vol du Voleur.",
      rf_f12_t: "IA de conversation auto-apprenante",
      rf_f12_d: "Jeu de dialogues appris, associé par similarité Jaro-Winkler pour des réponses naturelles — sans API payante.",
      rf_f13_t: "Communauté",
      rf_f13_d: "Récompenses de relance du chat, alertes d'arrivée du staff et des partenaires, mariages, jetons de confiance et commandes d'action.",
      rf_f14_t: "Modération &amp; logs",
      rf_f14_d: "5 niveaux de commandes (membres, boosters, helpers et modérateurs, RPG, administrateurs) : mutes, avertissements, logs de hatch, verrouillage de salons et redémarrages forcés.",
      rf_f15_t: "Sécurité anti-arnaque",
      rf_f15_d: "Listes de référence des arnaqueurs, listes de surveillance, filtrage des insultes et de leurs variantes obfusquées, et détection des contournements de ban via la liaison des comptes.",
      rf_f16_t: "Couche de performance « Opti »",
      rf_f16_d: "Inventaires fragmentés par utilisateur remplaçant un fichier monolithique de 7 Mo, cache d'écriture en mémoire, JSON compact, nettoyage automatique des listeners, superviseur de redémarrage et watchdog mémoire.",
      dialog_project: "Projet",
    },
    en: {
      meta_desc: "Developer Portfolio: 20 years of IT experience, Lua, Windows software, Roblox, automation, Discord bots, API, AI, local models, game servers and Chrome extensions.",
      og_title: "MSDOS | Developer Portfolio",
      og_desc: "Portfolio: 20 years of IT experience, Lua, Windows tools, automation, Roblox, Discord bots, API, AI, local models, game servers and local-first software.",
      site_title: "MSDOS | Developer Portfolio",
      skip_link: "Skip to content",
      brand_tagline: "Tools, Automation, High Tech & AI",
      nav_about: "About",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_contact: "Contact",
      hero_status: "Open to projects &amp; collaboration",
      hero_date: "Software & Systems Portfolio — 2026",
      hero_title: 'Tools, automation, <span class="dim">high tech &amp; AI.</span>',
      hero_lead: "Since the age of 13, technology has been my sandbox. I build custom solutions to solve real-world challenges, utilizing a wide range of programming languages across several projects in parallel. I am constantly learning new languages and technologies to stay at the forefront of AI workflows and deliver stable, automated systems.",
      btn_projects: "View Projects",
      btn_contact: "Contact Me",
      terminal_content: "C:\\>PROFILE.EXE /SCAN\n\n[SCANNING PROFILE...]\nEXPERIENCE=20_YEARS\nFOCUS=TOOLS,AUTOMATION,ROBLOX,APIS,AI\nLANGUAGE=LUA\nWORKFLOW=MULTI_PROJECT,NEEDS_DRIVEN\nSERVERS=MINECRAFT,GMOD,FIVEM\nLEGACY=EARLY_ANTICHEATS_GMOD\nAI_STACK=CLAUDE,GEMINI,DEEPSEEK,LOCAL\nMODE=PASSION_DRIVEN,LOCAL_FIRST",
      stat_years: "Years in computing",
      stat_scripts: "Lua scripts written",
      stat_bench: "Benchmark files won vs 7-Zip",
      stat_audit: "Backdoors &amp; trojans audited",
      metric_years: "years",
      metric_it: "Computing",
      metric_lang: "Primary Language",
      metric_watch: "Watch",
      metric_tech: "Tech & AI",
      focus_eyebrow: "What I Build",
      focus_title: 'Tools that solve <span class="nowrap">real-world</span> problems',
      focus_desktop: "Desktop Applications",
      focus_desktop_desc: "Windows optimization, maintenance, Android debloating, local translation, and tool management.",
      focus_automation: "Automation & Bots",
      focus_automation_desc: "Complete Discord bots, personal APIs, web automation, moderation, logs, and persistent systems.",
      focus_gaming: "Gaming Experiences",
      focus_gaming_desc: "Roblox games, ultra-modded servers, semi-3D map generation, and long-term gameplay.",
      exp_eyebrow: "Journey",
      exp_title: "Twenty years, from game servers to local AI.",
      exp_20_title: "20 Years of Experience",
      exp_20_desc: "In computing since age 13, with continuous practice of tools, servers, scripts, and software.",
      exp_anticheat_title: "GMod / DarkRP Anticheats",
      exp_anticheat_desc: "Work on anticheats during the early years of GMod/DarkRP, among the first projects of its kind.",
      strip_servers_title: "Servers & Communities",
      strip_servers_desc: "Moderator, Head Mod, and Developer on several game servers and active communities (Minecraft, GMod, FiveM).",
      exp_api_title: "APIs & Passion",
      exp_api_desc: "Use and creation of personal APIs to connect tools, automate workflows, and go faster.",
      exp_ai_title: "AI & Local Models",
      exp_ai_desc: "Work with Claude, Gemini, DeepSeek, CLI versions, and many local models to test, compare, and integrate AI.",
      exp_learning_title: "Continuous Learning",
      exp_learning_desc: "Primary base in Lua, exploration of other languages, permanent watch on new technologies, and parallel work on multiple projects.",
      projects_eyebrow: "Projects",
      projects_title: "Selection of Work",
      security_notice_eyebrow: "Security & Ethics",
      security_notice_title: "Authorized research only",
      security_notice_body: "My security-related tools and research are designed and used only in authorized contexts: learning, research, challenges, audits, or tests on my own environments or with explicit permission. I do not use them to access, maintain access to, bypass, alter, exfiltrate, or disrupt systems or data without authorization; sensitive findings are handled responsibly and in line with applicable French and international law.",
      search_placeholder: "Search for a project or skill",
      filter_all: "All",
      filter_desktop: "Desktop",
      filter_automation: "Automation",
      filter_game: "Games",
      filter_security: "Security",
      filter_extension: "Extensions",
      filter_research: "Research",
      no_results: "No project matches this search.",
      reset_filters: "Reset filters",
      group_research: "Research &amp; Engineering",
      group_desktop: "Windows Tools &amp; Desktop",
      group_games: "Games &amp; Automation",
      type_codec: "Compression research",
      type_firmware: "Custom Firmware",
      type_desktop: "Desktop app",
      type_windows: "Windows tool",
      type_security: "Security awareness",
      type_game_sec: "Game security",
      type_utility: "Utility",
      type_game_tool: "Game tool",
      type_roblox: "Roblox",
      type_legacy: "Legacy",
      type_servers: "Game servers",
      type_local: "Local app",
      type_android: "Android tool",
      type_discord: "Discord bot",
      type_maintenance: "Maintenance",
      type_browser: "Browser extensions",
      type_ai: "AI workflows",
      type_workspace: "Windows workspace",
      title_orpane: "Orpane Compressor",
      p_orpane: "Experimental lossless compression codec that beats 7-Zip -mx9 on 100% of benchmarks (53/53, +2.4 MB saved). Bit-exact SHA-256 + BLAKE3 verification. Native Rust standalone decompressor published.",
      link_orpane: "View Proof Package",
      title_firmware: "Android Firmware — LineageOS 18.1",
      p_firmware: "Custom Android firmware for fake Samsung S25 Ultra clone (MT6739): audited 46 backdoors &amp; trojans, replaced with clean LineageOS 18.1, microG, Magisk root, 1-click automated flasher.",
      link_firmware: "View XDA Thread",
      p_rbx_manager: "New generation Roblox Manager with many features, designed to quickly manage multiple accounts and actions.",
      link_discord: "Join Discord",
      link_rbx_manager: "View on GitHub",
      p_rbx_creation: "Creation of full experiences.",
      title_highpriority: "HighPriority Booster",
      p_highpriority: "Allows you to launch any application in High CPU Priority mode automatically without changing the application or its settings.",
      title_keyboardlocker: "KeyboardLocker",
      p_keyboardlocker: "Lightweight and portable software (no installation) to block keyboard and mouse inputs, with a customizable keyboard shortcut.",
      title_bypass: "ChatGPT 5.5 Security Bypass",
      p_bypass: "Technical demonstration of bypassing ChatGPT 5.5 security measures in May 2026. Includes vulnerability analysis and ethical reporting.",
      title_gemini_bypass: "Gemini 3.5 Security Bypass",
      p_gemini_bypass: "Security research case around Gemini 3.5, documented as robustness testing and responsible analysis without public implementation details.",
      title_sliderman: "Sliderman: Gemini & Custom Windows Modules",
      p_sliderman: "Modular Windows workspace integrating Gemini, Google Discover on PC, and custom modules that can be added in seconds and positioned freely.",
      title_optimizer: "Technician Optimization Tool",
      p_optimizer: "Hyper-complete tool to speed up, clean, diagnose, and apply useful settings on PC.",
      title_cameras: "Exposed Cameras Audit",
      p_cameras: "Discovery of poorly secured cameras for audit, awareness, and prevention purposes.",
      title_anticheat: "GMod / DarkRP Anticheats",
      p_anticheat: "Work on anticheats in the early years of GMod/DarkRP, among the first projects of its kind.",
      title_restart: "Simple PC Restart",
      p_restart: "Minimalist software to restart a PC quickly with a clear and direct interface.",
      title_parallax: "Semi-3D Card Generation",
      p_parallax: "Automatic generation of cards with Parallax layers to produce a semi-3D rendering.",
      title_rbx_games: "Roblox Video Games",
      p_rbx_games: "Creation of several Roblox experiences with gameplay, progression, and interface systems.",
      title_rbx_exploit: "Roblox Exploit (Legacy)",
      p_rbx_exploit: "Massive creation of scripts (2K+) for Roblox. This activity is now closed but forged a solid expertise in Lua.",
      legacy_status: "[ DONE ]",
      scripts_label: "Lua scripts",
      title_servers: "Ultra-Modded Game Servers",
      p_servers: "Creation of Minecraft, GMod, FiveM servers, and other heavily customized environments.",
      title_subtitles: "Bulk Subtitle Translator",
      p_subtitles: "Quick translation of subtitles into multiple languages, full local and easy to use.",
      title_android: "PC Android Debloater",
      p_android: "PC tool to clean an Android device, remove useless apps, and simplify maintenance.",
      title_discord: "Complete Discord Bot",
      p_discord: "Mini-games, complete dungeon/trading/farming game, moderation, logs, and continuous maintenance for 2+ years.",
      title_updater: "1-Click Software Update",
      p_updater: "Quick update of installed applications, with retrieval from official sources.",
      title_extension: "Chrome Extensions",
      p_extension: "Audio visualizer, price per kilo to compare food orders, web automations, and practical tools.",
      title_ai: "AI Experimentation & Local Models",
      p_ai: "Claude, Gemini, DeepSeek, CLI versions, and dozens of local models tested to compare behaviors and integrate them into tools.",
      type_ytdl: "Web Extension",
      title_ytdl: "YT Downloader",
      p_ytdl: "A single button added directly on the YouTube page to download everything — MP4, MKV, WebM, MP3, FLAC, WAV, AAC, M4A, Opus and OGG, up to 8K, with subtitles, thumbnails and metadata.",
      skills_eyebrow: "Skills",
      skills_title: "What I Know",
      skill_dev_title: "Development",
      skill_dev_1: "Desktop Applications",
      skill_dev_2: "Simple & Effective Interfaces",
      skill_dev_3: "Software created for my needs",
      skill_dev_4: "Creation of Personal APIs",
      skill_dev_5: "AI, LLMs & Local Models",
      skill_dev_6: "Parallel Projects",
      skill_dev_7: "Workflow Automation",
      skill_sys_title: "System & Maintenance",
      skill_sys_1: "Windows Optimization",
      skill_sys_2: "Diagnosis & Cleaning",
      skill_sys_3: "Software Update",
      skill_sys_4: "ADB / Android Debloating",
      skill_sys_5: "Technician Scripts",
      skill_game_title: "Gaming & Communities",
      skill_game_1: "Roblox / Lua",
      skill_game_2: "Lua as Primary Language",
      skill_game_3: "Gameplay Systems",
      skill_game_4: "Minecraft / GMod / FiveM Servers",
      skill_game_5: "GMod / DarkRP Anticheats",
      skill_game_6: "Discord Bots",
      skill_game_7: "Farming/Trading Economies",
      skill_web_title: "Web & Extensions",
      skill_web_1: "Chrome Extensions",
      skill_web_2: "Web Automation",
      skill_web_3: "Claude / Gemini / DeepSeek CLI",
      skill_web_4: "New Tech Watch",
      skill_web_5: "Audio Visualizers",
      skill_web_6: "Practical Comparators",
      skill_web_7: "Utility UX",
      contact_eyebrow: "Contact",
      contact_title: "Let's discuss a project or collaboration",
      contact_desc: "Email and Discord are available. Public demos can be added project by project.",
      contact_email_action: "Send an email",
      copied: "Discord username copied",
      back_to_top: "Back to top",
      zoom_hint: "Enlarge",
      copyright: "&copy; 2026 MSDOS - All rights reserved.",
      private_notice_eyebrow: "Confidentiality",
      private_notice_title: "Private sources, available on request",
      private_notice_body: "A large part of the source code, proofs of concept and technical evidence behind these projects is deliberately kept private — for obvious security reasons (vulnerabilities, sensitive techniques, responsible disclosure) and to protect privacy and third-party data. They can be shared privately, case by case, for a collaboration, a technical review, proof of authorship or any other legitimate request.",
      private_notice_cta: "Request access",
      private_source: "Private source",
      type_server: "Server reconstruction",
      title_firefall: "Firefall — Server Reconstruction (PIN)",
      p_firefall: "Full reconstruction of the server behind Firefall, Red 5 Studios' MMO shut down in 2017, carried out solo on top of the base files from the PIN (Pirate Intelligence Network) developers. A server-authoritative C# / .NET 9 stack targeting parity with client prod-1962 (patch 1.6–1.7): networking, world, physics, combat, AI, abilities, vehicles, missions, economy and social systems.",
      ff_stat_phases: "phases complete",
      ff_stat_tests: "tests passing",
      ff_stat_projects: "projects, 0 warnings",
      ff_stat_subsystems: "subsystems working",
      ff_f1_t: "Networking",
      ff_f1_d: "Matrix handshake, 4-channel GSS multiplexing, split-packet reassembly and protocol hardening through fuzzing.",
      ff_f2_t: "World & streaming",
      ff_f2_d: "Zone loading, instance assignment and seamless border transitions.",
      ff_f3_t: "Movement & physics",
      ff_f3_d: "Jetpacks, gliders, BepuPhysics2 collisions, server-side position anti-cheat and multi-passenger vehicles.",
      ff_f4_t: "Combat",
      ff_f4_d: "Ballistic projectile simulation, faction hostility matrix, headshots, critical hits and armor mitigation curves.",
      ff_f5_t: "Abilities",
      ff_f5_d: "Server-authoritative aptitude engine — 27 command milestones implemented and tested.",
      ff_f6_t: "AI engine",
      ff_f6_d: "4 Hz AI loop, A* NavMesh pathfinding, arachnid leap attacks, Chosen sniper and juggernaut tactics.",
      ff_f7_t: "Encounters & missions",
      ff_f7_d: "Thumpers with dynamic waves and hive eruptions, mission chains, objectives and achievements.",
      ff_f8_t: "Economy",
      ff_f8_d: "3D world loot drops, recursive loot tables, Red Bean store, marketplace, crafting and token vending machines.",
      ff_f9_t: "Social",
      ff_f9_d: "Armies with ranks and rosters, friends and online presence, multi-channel chat (zone, squad, army, whispers).",
      ff_f10_t: "Quality",
      ff_f10_d: "164/164 automated tests, 0 compiler warnings across 25 projects, soak testing and 50-player concurrent load tests.",
      type_ide: "IDE extension",
      title_antigravity: "Antigravity+",
      p_antigravity: "Enhancement layer for the Antigravity AI IDE: live activity indicators on projects, pinned favorites, instant sidebar search and real-time Gemini / Claude quota gauges — all powered by a zero-reflow performance engine.",
      ag_f1_t: "Active project highlighting",
      ag_f1_d: "Pulsing green dot and smart side border on projects running a task or sub-agent — zero lag, sub-millisecond.",
      ag_f2_t: "Pinned projects & favorites",
      ag_f2_d: "Pin favorite projects to the top of the sidebar for instant access.",
      ag_f3_t: "Quick search (Ctrl+F)",
      ag_f3_d: "Search bar built into the sidebar to filter projects and conversations instantly.",
      ag_f4_t: "Real-time dual quota gauge",
      ag_f4_d: "Live gauges for Gemini and Claude/Opus in the title bar: weekly and 5-hour limits, reset countdowns and continuous sync.",
      ag_f5_t: "Scoped DOM Guardian",
      ag_f5_d: "Observation confined to the required containers — 0% reflow on document.body.",
      ag_f6_t: "Async disk cache & source right-click",
      ag_f6_d: "Background indexing and instant opening of code folders.",
      ag_f7_t: "React 19 & resilient selectors",
      ag_f7_d: "O(1) memoization and selectors designed to survive future Antigravity updates.",
      ag_f8_t: "Updates",
      ag_f8_d: "Installed version display and one-click update check.",
      type_roblox_tool: "Roblox tool",
      title_pet_tracker: "Roblox Pet Tracker",
      p_pet_tracker: "PetRift Tracker, a companion web app for Pet Rift: the Roblox game server automatically pushes each player's inventory to a secured Firebase backend, and anyone can look up a collection — owned and missing pets, completion, variants — with no manual updates.",
      pt_f1_t: "Automatic server sync",
      pt_f1_d: "A Luau script on the Roblox game server pushes player inventories to a Cloud Function protected by a secret key — no spoofing, no Roblox API rate limits.",
      pt_f2_t: "Public profiles",
      pt_f2_d: "Search by Roblox username: avatar, owned, missing and total pets, last sync date and completion percentage.",
      pt_f3_t: "Collection browser",
      pt_f3_d: "Search, rarity filters (Common to Secret), variants, Huge and Giant pets, duplicate counts.",
      pt_f4_t: "Collector score & votes",
      pt_f4_d: "Star-rated collector score and community votes on profiles.",
      pt_f5_t: "Leaderboard",
      pt_f5_d: "Top collectors with a podium.",
      pt_f6_t: "Trade offers",
      pt_f6_d: "Create, browse and relist trade offers, with automatic expiry.",
      pt_f7_t: "Wishlist, watchlist & lists",
      pt_f7_d: "Wishlist, watchlist of missing pets and custom lists.",
      pt_f8_t: "Huge rotation tracker",
      pt_f8_d: "Huge pet rotation schedule with a live countdown and next-appearance lookup.",
      pt_f9_t: "Mailbox helper",
      pt_f9_d: "Shows which pets a player is missing so they can be sent through the in-game mailbox.",
      pt_f10_t: "Roblox account linking",
      pt_f10_d: "Login verified by a one-time code revealed in-game.",
      title_rifty: "Rifty · SnitchersBot",
      group_tooling: "Devices, IoT &amp; Tooling",
      type_robotics: "Robotics &amp; IoT",
      title_quantum: "QuantumClean Pro 2026",
      p_quantum: "Python desktop suite that takes full control of a Tuya robot vacuum & mop, built by reverse-engineering the official Tuya Android app and its MiniApp bytecode: encrypted local LAN control with instant cloud failover, predictive battery management, autonomous anti-trap navigation and interactive 2D room mapping.",
      qc_f1_t: "Reverse engineering",
      qc_f1_d: "Official Tuya Android client and embedded MiniApp JavaScript bytecode analyzed to map 20 proprietary DataPoints — modes, status, suction, water, consumables and a 7-fault hardware bitmap.",
      qc_f2_t: "Dual-stack communication",
      qc_f2_d: "Encrypted local LAN protocol (v3.4) with instant, non-blocking failover to the Tuya Cloud OpenAPI (~0.25 s) and cumulative telemetry merging.",
      qc_f3_t: "Predictive battery management",
      qc_f3_d: "7-component engine: EMA smoothing and spike rejection, per-mode discharge profiles, voltage-collapse detection with a learned shutdown floor, sensor fusion, confidence and risk scoring, and a pre-flight feasibility check before every run.",
      qc_f4_t: "Smart navigation &amp; safety",
      qc_f4_d: "Dock anti-push shield, chair-leg anti-trap clustering, 3-stage adaptive unstuck routine and carpet auto-boost.",
      qc_f5_t: "Advanced cleaning routines",
      qc_f5_d: "Double pass, sweep-then-mop, 4-corner precision zone (5 phases) and 6-phase premium wash.",
      qc_f6_t: "2D SLAM &amp; room mapping",
      qc_f6_d: "Alpha-shape concave hull via Delaunay triangulation (auto-tuned threshold), convex-hull fallback, multi-lap perimeter scan with loop closure, virtual wall detection and furniture modeling.",
      qc_f7_t: "RF odometry anchoring",
      qc_f7_d: "Network latency and jitter measured through the router, used as a distance constraint that keeps odometry inside the known floorplan.",
      qc_f8_t: "Desktop interface",
      qc_f8_d: "Dark CustomTkinter UI: live telemetry, interactive 2D canvas (pan, zoom, drag), D-pad and keyboard control, 7-point sensor diagnostics, consumables and event log — shipped as a standalone Windows executable with a unit-tested BMS.",
      type_telemetry: "Smartwatch hub",
      title_watch7: "Watch7Manager",
      p_watch7: "Desktop management hub for the Samsung Galaxy Watch7 (Wear OS 5) over Wi-Fi ADB — a native C# launcher, a Node.js backend and a React interface: real-time telemetry, live health data, app manager & debloater, APK sideloading and one-click battery optimization.",
      w7_f1_t: "Native launcher &amp; process guard",
      w7_f1_d: "C# WinForms launcher that binds Node, Vite, Express and ADB to a Win32 Job Object: closing it leaves zero orphan processes. It recompiles itself with the csc.exe built into Windows.",
      w7_f2_t: "Wireless connection wizard",
      w7_f2_d: "Android 11+ TLS pairing and connection in 3 steps, with persistent auto-reconnect.",
      w7_f3_t: "Real-time telemetry",
      w7_f3_d: "Neon gauges for battery (temperature, voltage, power source), storage, RAM and per-core CPU load, top processes and hardware/firmware profile.",
      w7_f4_t: "Live health data",
      w7_f4_d: "Samsung Knox encrypts raw biometric data, so heart rate, stress and step values are captured live from a logcat stream relayed over WebSocket. Includes a Wear Health Services synthetic simulator.",
      w7_f5_t: "Package manager &amp; debloater",
      w7_f5_d: "Full app inventory with filters and a 3-tier metadata engine (local cache, Play Store scraping, Wear OS heuristics) that flags what is safe to disable; enable, disable or uninstall.",
      w7_f6_t: "Play Store updater",
      w7_f6_d: "Opens the watch's Play Store and streams download and install progress over WebSocket.",
      w7_f7_t: "APK sideloading",
      w7_f7_d: "Drag & drop upload, direct install on the watch and automatic cleanup of temporary files.",
      w7_f8_t: "One-click battery optimization",
      w7_f8_d: "Always-On Display, tilt-to-wake, screen timeout, brightness and Bixby background listener debloat.",
      type_ambient: "Ambient lighting",
      title_jellybite: "JellyBite",
      p_jellybite: "Low-overhead Windows companion that recreates the Philips Ambilight experience: a soft, blurred glow synchronized to the video's edges, projected behind Jellyfin, Edge and Chrome windows — including floating Picture-in-Picture players.",
      jb_f1_t: "Smart window tracking",
      jb_f1_d: "Priority chain — Picture-in-Picture first, then foreground window, target lock-on and Z-order scan — with exact DWM bounds and precise video-area mapping.",
      jb_f2_t: "Downsampled capture",
      jb_f2_d: "GDI StretchBlt straight into an 80×48 buffer: no full-resolution screenshots.",
      jb_f3_t: "Letterbox detection",
      jb_f3_d: "Black bars (21:9 films on 16:9 screens) are cropped automatically to sample the real picture edges.",
      jb_f4_t: "Color grading &amp; smoothing",
      jb_f4_d: "HSV saturation and intensity boost with low-light attenuation, plus per-zone exponential smoothing against flicker.",
      jb_f5_t: "Glow engine",
      jb_f5_d: "Quarter-scale edge extrusion with corner blending, Gaussian blur and a cubic alpha falloff that never tints the video.",
      jb_f6_t: "Click-through overlay",
      jb_f6_d: "Layered, click-through window placed right behind the target (topmost for PiP) and hidden from Alt+Tab.",
      jb_f7_t: "Tray controls &amp; presets",
      jb_f7_d: "Tray icon with target app, presets (Soft &amp; soothing, Balanced, Vivid cinema), halo size, intensity, smoothing, demo mode and Windows autostart.",
      jb_f8_t: "Performance",
      jb_f8_d: "Render loop regulated at 35 FPS (15 to 60), shipped as a standalone portable executable.",
      p_rifty: "Event-driven Discord companion for the Roblox game Pet Rift, written in Lua on the Luvit runtime with Discordia: live Roblox telemetry and hatch tracking, sync with the PetRift Tracker portal, a full RPG economy (bosses, dungeons, fishing, card packs, shops and classes), a self-learning chat engine and complete moderation & anti-scam tooling — optimized to serve thousands of users, and much more.",
      rf_stat_lines: "lines of core Lua",
      rf_stat_years: "years in production",
      rf_stat_tiers: "command tiers",
      rfm_live: "Live Roblox stats",
      rfm_hatch: "Hatch tracker",
      rfm_plaza: "Plaza monitor",
      rfm_eco: "Economy &amp; trading",
      rfm_boss: "World bosses",
      rfm_dungeon: "Dungeon waves",
      rfm_fish: "Fishing",
      rfm_cards: "Card packs",
      rfm_shops: "Shops &amp; classes",
      rfm_ai: "Self-learning AI",
      rfm_mod: "Moderation &amp; logs",
      rfm_sec: "Anti-scam security",
      rf_f1_t: "Live Roblox telemetry",
      rf_f1_d: "Polls the Pet Rift universes, shows live player counts in voice-channel names and logs daily peaks.",
      rf_f2_t: "Plaza server monitor",
      rf_f2_d: "Watches the Trading Plaza public servers every 30 seconds and posts self-deleting alerts when player counts surge or drop.",
      rf_f3_t: "Hatch tracker",
      rf_f3_d: "Ingests game-server webhooks, parses Huge, Giant, Secret, Shiny, Golden and Diamond hatches with serial numbers, links Roblox players to their Discord accounts, sends congratulations and DMs, and feeds live leaderboards.",
      rf_f4_t: "PetRift Tracker sync",
      rf_f4_d: "Reads synchronized inventories from Firestore for web profile links and player collection comparisons right in the chat.",
      rf_f5_t: "Economy &amp; trading",
      rf_f5_d: "Points currency, transfers, bidding, leaderboards and admin adjustments.",
      rf_f6_t: "Pets &amp; PC storage",
      rf_f6_d: "Equipped pets, a virtual PC for extra pets with storage upgrades, and pet evolution.",
      rf_f7_t: "World bosses",
      rf_f7_d: "Automated boss spawns with health pools, alerts and an idle auto-attack loop.",
      rf_f8_t: "Dungeon waves",
      rf_f8_d: "Multiplayer gauntlet with escalating damage, player HP, healing and survival multipliers.",
      rf_f9_t: "Fishing",
      rf_f9_d: "Rod levels, pity counters, common and rare fish tables, serial numbers and reminders.",
      rf_f10_t: "Collectible cards",
      rf_f10_d: "Card packs across Basic, Rare, Epic, Legendary and Shiny rarities, completion tracking and a Shiny card leaderboard.",
      rf_f11_t: "Shops &amp; classes",
      rf_f11_d: "Rotating and secret shops, plus class perks such as Medic healing or Thief robbing.",
      rf_f12_t: "Self-learning chat AI",
      rf_f12_d: "Learned dialogue dataset matched with Jaro-Winkler similarity for natural replies — no paid API.",
      rf_f13_t: "Community",
      rf_f13_d: "Chat revive rewards, staff and partner arrival alerts, marriages, trust tokens and action commands.",
      rf_f14_t: "Moderation &amp; logs",
      rf_f14_d: "5 command tiers (members, boosters, helpers and moderators, RPG, administrators): soft mutes, warnings, hatch logs, channel locks and forced restarts.",
      rf_f15_t: "Anti-scam security",
      rf_f15_d: "Scammer reference lists, watchlists, bad-word and obfuscation filtering, and ban-bypass detection through account linking.",
      rf_f16_t: "“Opti” performance layer",
      rf_f16_d: "Per-user sharded inventories replacing a 7 MB monolith, in-memory write cache, compact JSON, automatic listener cleanup, auto-restart supervisor and memory watchdog.",
      dialog_project: "Project",
    },
  };

  let currentLang = storage.get("portfolio-lang") === "fr" ? "fr" : "en";
  const t = (key) => translations[currentLang][key] ?? translations.en[key] ?? "";

  /* ==========================================================================
     Theme
     ========================================================================== */

  const themeMeta = $('meta[name="theme-color"]');
  const themeToggle = $("[data-theme-toggle]");

  if (root.dataset.theme !== "light" && root.dataset.theme !== "dark") root.dataset.theme = "dark";

  function syncThemeMeta() {
    themeMeta?.setAttribute("content", root.dataset.theme === "light" ? "#f6f6f4" : "#09090b");
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    storage.set("portfolio-theme", theme);
    syncThemeMeta();
    document.dispatchEvent(new CustomEvent("themechange"));
  }

  syncThemeMeta();

  themeToggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    if (!document.startViewTransition || reduceMotion.matches) {
      applyTheme(next);
      return;
    }
    const rect = themeToggle.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const transition = document.startViewTransition(() => applyTheme(next));
    transition.ready
      .then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 700, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" }
        );
      })
      .catch(() => {});
  });

  /* ==========================================================================
     Text scramble (nav hover)
     ========================================================================== */

  const GLYPHS = "!<>-_\\/[]{}=+*^?#01";
  const scrambles = new Map();

  function scramble(el) {
    if (reduceMotion.matches || scrambles.has(el)) return;
    const final = el.textContent;
    el.dataset.final = final;
    let frame = 0;
    const step = () => {
      const settled = Math.floor(frame / 2);
      let out = "";
      for (let i = 0; i < final.length; i += 1) {
        const ch = final[i];
        out += i < settled || ch === " " ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      el.textContent = out;
      frame += 1;
      if (settled < final.length) {
        scrambles.set(el, requestAnimationFrame(step));
      } else {
        el.textContent = final;
        scrambles.delete(el);
      }
    };
    scrambles.set(el, requestAnimationFrame(step));
  }

  function cancelScrambles() {
    scrambles.forEach((id, el) => {
      cancelAnimationFrame(id);
      el.textContent = el.dataset.final ?? el.textContent;
    });
    scrambles.clear();
  }

  $$("[data-scramble]").forEach((el) => {
    el.addEventListener("pointerenter", () => scramble(el));
    el.addEventListener("focus", () => scramble(el));
  });

  /* ==========================================================================
     Hero title — split into words for the mask reveal
     ========================================================================== */

  const heroTitle = $("[data-hero-title]");

  function splitWords(el) {
    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const fragment = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              fragment.append(document.createTextNode(" "));
              return;
            }
            const word = document.createElement("span");
            word.className = "w";
            const inner = document.createElement("span");
            inner.textContent = part;
            word.append(inner);
            fragment.append(word);
          });
          child.replaceWith(fragment);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          walk(child);
        }
      });
    };
    walk(el);
    el.classList.add("is-split");
  }

  function animateHeroTitle() {
    if (!heroTitle || reduceMotion.matches) return;
    $$(".w > span", heroTitle).forEach((span, index) => {
      span.animate([{ transform: "translateY(105%)" }, { transform: "translateY(0)" }], {
        duration: 1200,
        delay: 120 + index * 70,
        easing: EASE_OUT,
        fill: "backwards",
      });
    });
  }

  /* ==========================================================================
     Terminal
     ========================================================================== */

  const terminalEl = $("[data-terminal]");
  let terminalToken = 0;

  const span = (className, text) => {
    const el = document.createElement("span");
    el.className = className;
    el.textContent = text;
    return el;
  };

  const cursor = () => {
    const el = document.createElement("span");
    el.className = "term-cursor";
    el.setAttribute("aria-hidden", "true");
    return el;
  };

  function buildTerminalLine(raw) {
    const line = document.createElement("div");
    line.className = "term-line";
    if (!raw.trim()) return line;

    const prompt = raw.match(/^([A-Z]:\\>)(.*)$/);
    if (prompt) {
      line.append(span("term-prompt", prompt[1]), span("term-cmd", prompt[2]));
      return line;
    }
    if (/^\[.*\]$/.test(raw)) {
      line.append(span("term-dim", raw));
      return line;
    }
    const eq = raw.indexOf("=");
    if (eq > 0) {
      line.append(span("term-key", raw.slice(0, eq)), span("term-dim", "="));
      raw
        .slice(eq + 1)
        .split(",")
        .forEach((part, index) => {
          if (index) line.append(span("term-dim", ","));
          line.append(span("term-val", part));
        });
      return line;
    }
    line.textContent = raw;
    return line;
  }

  function renderTerminal(animate) {
    if (!terminalEl) return;
    const token = ++terminalToken;
    const lines = t("terminal_content").split("\n").map(buildTerminalLine);
    const last = document.createElement("div");
    last.className = "term-line";
    last.append(span("term-prompt", "C:\\>"), cursor());
    lines.push(last);
    terminalEl.replaceChildren(...lines);

    const command = $(".term-cmd", lines[0]);
    if (!animate || reduceMotion.matches || !command) return;

    const full = command.textContent;
    const typing = cursor();
    command.textContent = "";
    lines[0].append(typing);
    lines.slice(1).forEach((line) => line.classList.add("is-pending"));

    let index = 0;
    const type = () => {
      if (token !== terminalToken) return;
      if (index <= full.length) {
        command.textContent = full.slice(0, index);
        index += 1;
        setTimeout(type, 40 + Math.random() * 60);
        return;
      }
      typing.remove();
      lines.slice(1).forEach((line, i) => {
        setTimeout(() => {
          if (token === terminalToken) line.classList.remove("is-pending");
        }, 220 + i * 95);
      });
    };
    setTimeout(type, 900);
  }

  /* ==========================================================================
     Counters
     ========================================================================== */

  const counters = $$("[data-countup]");
  const formatNumber = (value) => new Intl.NumberFormat(currentLang === "fr" ? "fr-FR" : "en-US").format(value);

  function runCounter(el) {
    const target = Number(el.dataset.countup);
    if (reduceMotion.matches) {
      el.textContent = formatNumber(target);
      el.dataset.done = "true";
      return;
    }
    const start = performance.now();
    const duration = 1800;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      el.textContent = formatNumber(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
      else el.dataset.done = "true";
    };
    requestAnimationFrame(tick);
  }

  counters.forEach((el) => {
    if (!reduceMotion.matches) el.textContent = formatNumber(0);
  });

  /* ==========================================================================
     Language
     ========================================================================== */

  const langButtons = $$("[data-lang]");

  function applyLanguage(lang, { initial = false } = {}) {
    currentLang = lang;
    cancelScrambles();
    const dict = translations[lang];

    $$("[data-t]").forEach((el) => {
      const value = dict[el.dataset.t];
      if (value !== undefined) el.innerHTML = value;
    });
    $$("[data-t-placeholder]").forEach((el) => {
      const value = dict[el.dataset.tPlaceholder];
      if (value !== undefined) el.placeholder = value;
    });
    $$("[data-t-aria]").forEach((el) => {
      const value = dict[el.dataset.tAria];
      if (value !== undefined) el.setAttribute("aria-label", value);
    });
    $$("[data-t-content]").forEach((el) => {
      const value = dict[el.dataset.tContent];
      if (value !== undefined) el.setAttribute("content", value);
    });

    root.lang = lang;
    langButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === lang)));

    if (heroTitle) splitWords(heroTitle);
    counters.forEach((el) => {
      if (el.dataset.done) el.textContent = formatNumber(Number(el.dataset.countup));
    });

    if (!initial) {
      renderTerminal(false);
      applyFilters();
      moveIndicator(true);
    }
  }

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      if (lang === currentLang) return;
      storage.set("portfolio-lang", lang);
      applyLanguage(lang);
    });
  });

  /* ==========================================================================
     Projects — filters & search
     ========================================================================== */

  const cards = $$(".card");
  const groups = $$("[data-group]");
  const filterButtons = $$("[data-filter]");
  const indicator = $(".filters-indicator");
  const searchInput = $("[data-project-search]");
  const emptyState = $("[data-work-empty]");
  let activeFilter = "all";

  const normalize = (value) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const categoriesOf = (card) => (card.dataset.category ?? "").split(/\s+/).filter(Boolean);

  $$("[data-count-for]").forEach((el) => {
    const key = el.dataset.countFor;
    el.textContent = key === "all" ? cards.length : cards.filter((card) => categoriesOf(card).includes(key)).length;
  });

  function applyFilters() {
    const query = normalize(searchInput?.value.trim() ?? "");
    let total = 0;

    cards.forEach((card) => {
      const haystack = normalize(
        [card.textContent, card.dataset.title, card.dataset.summary, card.dataset.tags].join(" ")
      );
      const visible =
        (activeFilter === "all" || categoriesOf(card).includes(activeFilter)) && (!query || haystack.includes(query));
      const wasHidden = card.hidden;
      card.hidden = !visible;
      if (visible) total += 1;
      if (visible && wasHidden && card.classList.contains("is-visible") && !reduceMotion.matches) {
        card.animate(
          [
            { opacity: 0, transform: "translateY(12px) scale(0.98)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 550, easing: EASE_OUT }
        );
      }
    });

    groups.forEach((group) => {
      const count = $$(".card", group).filter((card) => !card.hidden).length;
      group.hidden = count === 0;
      const counter = $("[data-group-count]", group);
      if (counter) counter.textContent = String(count).padStart(2, "0");
    });

    if (emptyState) emptyState.hidden = total !== 0;
  }

  function moveIndicator(instant = false) {
    const active = filterButtons.find((button) => button.dataset.filter === activeFilter);
    if (!active || !indicator) return;
    if (instant) indicator.style.transition = "none";
    indicator.style.width = `${active.offsetWidth}px`;
    indicator.style.transform = `translateX(${active.offsetLeft}px)`;
    if (instant) {
      void indicator.offsetWidth;
      indicator.style.transition = "";
    }
  }

  function setFilter(filter) {
    activeFilter = filter;
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    moveIndicator();
    applyFilters();
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setFilter(button.dataset.filter ?? "all");
      const wrap = button.parentElement;
      if (wrap && wrap.scrollWidth > wrap.clientWidth) {
        wrap.scrollTo({
          left: button.offsetLeft - (wrap.clientWidth - button.offsetWidth) / 2,
          behavior: reduceMotion.matches ? "auto" : "smooth",
        });
      }
    });
  });

  searchInput?.addEventListener("input", applyFilters);

  $("[data-reset-filters]")?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    setFilter("all");
    searchInput?.focus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target;
    if (target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return;
    if (document.querySelector("dialog[open]")) return;
    event.preventDefault();
    searchInput?.focus({ preventScroll: true });
    searchInput?.scrollIntoView({ block: "center", behavior: reduceMotion.matches ? "auto" : "smooth" });
  });

  window.addEventListener("resize", () => moveIndicator(true));
  document.fonts?.ready.then(() => moveIndicator(true));

  /* Card spotlight follows the pointer */
  document.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType !== "mouse") return;
      const card = event.target instanceof Element ? event.target.closest(".card") : null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    },
    { passive: true }
  );

  /* ==========================================================================
     Project dialog + zoom
     ========================================================================== */

  const dialog = $("[data-project-dialog]");
  const dialogMedia = $("[data-dialog-visual]");
  const dialogType = $("[data-dialog-type]");
  const dialogTitle = $("[data-dialog-title]");
  const dialogSummary = $("[data-dialog-summary]");
  const dialogFeatures = $("[data-dialog-features]");
  const dialogLinks = $("[data-dialog-links]");
  const dialogTags = $("[data-dialog-tags]");
  const zoomDialog = $("[data-zoom-dialog]");
  const zoomImg = $("[data-zoom-img]");
  let gallery = [];
  let galleryIndex = 0;
  let lastTrigger = null;

  const zoomIcon =
    '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M8 11h6M11 8v6"/></svg>';

  function showGalleryImage(index) {
    const stageImg = $(".dialog-stage img", dialogMedia);
    if (!stageImg || !gallery[index]) return;
    galleryIndex = index;
    stageImg.src = gallery[index].src;
    stageImg.alt = gallery[index].alt;
    $$(".dialog-thumb", dialogMedia).forEach((thumb, i) => {
      thumb.classList.toggle("is-active", i === index);
      thumb.setAttribute("aria-current", String(i === index));
    });
  }

  function buildDialogMedia(card) {
    dialogMedia.replaceChildren();
    const visual = $(".card-visual", card);
    const useClone = visual?.dataset.dialog === "clone";
    gallery = useClone ? [] : $$("img", visual ?? card).map((img) => ({ src: img.currentSrc || img.src, alt: img.alt }));
    galleryIndex = 0;

    if (!gallery.length) {
      const clone = $(".card-visual", card)?.cloneNode(true);
      if (clone) dialogMedia.append(clone);
      return;
    }

    const stage = document.createElement("button");
    stage.type = "button";
    stage.className = "dialog-stage";
    stage.setAttribute("aria-label", t("zoom_hint"));
    const stageImg = document.createElement("img");
    stageImg.decoding = "async";
    const hint = document.createElement("span");
    hint.className = "dialog-zoom-hint";
    hint.innerHTML = `${zoomIcon}<span>${t("zoom_hint")}</span>`;
    stage.append(stageImg, hint);
    stage.addEventListener("click", () => openZoom(gallery[galleryIndex]));
    dialogMedia.append(stage);

    if (gallery.length > 1) {
      const thumbs = document.createElement("div");
      thumbs.className = "dialog-thumbs";
      gallery.forEach((item, index) => {
        const thumb = document.createElement("button");
        thumb.type = "button";
        thumb.className = "dialog-thumb";
        thumb.setAttribute("aria-label", `${index + 1} / ${gallery.length}`);
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = "";
        thumb.append(img);
        thumb.addEventListener("click", () => showGalleryImage(index));
        thumbs.append(thumb);
      });
      dialogMedia.append(thumbs);
    }
    showGalleryImage(0);
  }

  function openDialog(card, trigger) {
    if (!dialog || !dialogMedia) return;
    lastTrigger = trigger ?? null;
    buildDialogMedia(card);

    dialogType.textContent = $(".card-type", card)?.textContent.trim() || t("dialog_project");
    dialogTitle.textContent = $(".card-title", card)?.textContent.trim() ?? "";
    dialogSummary.innerHTML = $(".card-desc", card)?.innerHTML ?? card.dataset.summary ?? "";

    const features = $$(".card-features li", card).map((item) => item.cloneNode(true));
    dialogFeatures.replaceChildren(...features);
    dialogFeatures.hidden = features.length === 0;

    const links = $$(".card-links a", card).map((link) => {
      const clone = link.cloneNode(true);
      clone.className = "btn btn-ghost btn-sm";
      return clone;
    });
    dialogLinks.replaceChildren(...links);
    dialogLinks.hidden = links.length === 0;

    dialogTags.replaceChildren(
      ...(card.dataset.tags ?? "")
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
        .map((tag) => {
          const li = document.createElement("li");
          li.textContent = tag;
          return li;
        })
    );

    dialog.showModal();
    root.classList.add("is-locked");
    $(".dialog-body", dialog).scrollTop = 0;
    $(".dialog-shell", dialog).scrollTop = 0;
  }

  function closeDialog() {
    if (!dialog?.open || dialog.dataset.closing) return;
    if (reduceMotion.matches) {
      dialog.close();
      return;
    }
    dialog.dataset.closing = "true";
    const animation = dialog.animate(
      [
        { opacity: 1, transform: "none" },
        { opacity: 0, transform: "translateY(12px) scale(0.985)" },
      ],
      { duration: 220, easing: "ease-in", fill: "forwards" }
    );
    animation.onfinish = () => {
      delete dialog.dataset.closing;
      dialog.close();
      animation.cancel();
    };
  }

  function openZoom(item) {
    if (!zoomDialog || !zoomImg || !item) return;
    zoomImg.src = item.src;
    zoomImg.alt = item.alt;
    zoomDialog.showModal();
  }

  $$(".card-open").forEach((button) => {
    button.addEventListener("click", () => openDialog(button.closest(".card"), button));
  });

  $("[data-dialog-close]")?.addEventListener("click", closeDialog);
  dialog?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDialog();
  });
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog?.addEventListener("close", () => {
    root.classList.remove("is-locked");
    lastTrigger?.focus({ preventScroll: true });
  });
  dialog?.addEventListener("keydown", (event) => {
    if (gallery.length < 2 || zoomDialog?.open) return;
    if (event.key === "ArrowRight") showGalleryImage((galleryIndex + 1) % gallery.length);
    if (event.key === "ArrowLeft") showGalleryImage((galleryIndex - 1 + gallery.length) % gallery.length);
  });

  zoomDialog?.addEventListener("click", () => zoomDialog.close());

  /* ==========================================================================
     Copy to clipboard + toast
     ========================================================================== */

  const toast = $("[data-toast]");
  let toastTimer = 0;

  function showToast(message) {
    if (!toast) return;
    toast.innerHTML =
      '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg><span></span>';
    toast.lastElementChild.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
  }

  function legacyCopy(text) {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.cssText = "position:fixed;opacity:0;pointer-events:none";
    document.body.append(area);
    area.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    area.remove();
    return ok;
  }

  $$("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copy ?? "";
      let ok = false;
      try {
        await navigator.clipboard.writeText(text);
        ok = true;
      } catch {
        ok = legacyCopy(text);
      }
      showToast(ok ? t("copied") : text);
    });
  });

  /* ==========================================================================
     Header, scroll progress, scrollspy, mobile menu
     ========================================================================== */

  const header = $("[data-header]");
  const toTop = $("[data-back-to-top]");
  let scrollTicking = false;

  function onScroll() {
    scrollTicking = false;
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header?.classList.toggle("is-scrolled", y > 8);
    toTop?.classList.toggle("is-visible", y > 640);
    toTop?.style.setProperty("--progress", max > 0 ? Math.min(1, y / max).toFixed(4) : "0");
  }

  window.addEventListener(
    "scroll",
    () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(onScroll);
    },
    { passive: true }
  );
  onScroll();

  toTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
  });

  const navLinks = $$(".site-nav a, .mobile-menu a");
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${id}`) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["top", "about", "projets", "competences", "contact"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }

  const menuButton = $("[data-menu-toggle]");
  const mobileMenu = $("[data-mobile-menu]");

  function setMenu(open) {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", String(open));
    mobileMenu.hidden = !open;
    header?.classList.toggle("is-menu-open", open);
    if (open && !reduceMotion.matches) {
      $$("a", mobileMenu).forEach((link, index) => {
        link.animate([{ opacity: 0, transform: "translateY(-8px)" }, { opacity: 1, transform: "none" }], {
          duration: 450,
          delay: index * 45,
          easing: EASE_OUT,
          fill: "backwards",
        });
      });
    }
  }

  menuButton?.addEventListener("click", () => setMenu(mobileMenu?.hidden ?? false));
  $$("a", mobileMenu ?? document.createElement("div")).forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu && !mobileMenu.hidden) setMenu(false);
  });
  window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
  });

  /* ==========================================================================
     Reveal on scroll
     ========================================================================== */

  function reveal(el, delay = 0) {
    el.classList.add("is-visible");
    if (reduceMotion.matches) return;
    el.animate(
      [
        { opacity: 0, translate: "0 28px", filter: "blur(6px)" },
        { opacity: 1, translate: "0 0", filter: "blur(0px)" },
      ],
      { duration: 1100, delay, easing: EASE_OUT, fill: "backwards" }
    );
  }

  const revealTargets = $$("[data-reveal]");
  const statsBlock = $(".hero-stats");

  if ("IntersectionObserver" in window && !reduceMotion.matches) {
    const revealer = new IntersectionObserver(
      (entries) => {
        let batch = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealer.unobserve(entry.target);
          const base = Number(entry.target.dataset.reveal) || 0;
          reveal(entry.target, base * 110 + batch * 80);
          batch += 1;
          if (entry.target === statsBlock) setTimeout(() => counters.forEach(runCounter), base * 110 + 200);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );
    revealTargets.forEach((el) => revealer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
    counters.forEach(runCounter);
  }

  /* ==========================================================================
     ASCII plasma field (hero background)
     ========================================================================== */

  function createAsciiField(canvas, host) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const RAMP = " .,:-=+*#%@";
    const CELL_W = 12;
    const CELL_H = 20;
    const FRAME_MS = 1000 / 30;
    let dpr = 1;
    let cols = 0;
    let rows = 0;
    let atlas = null;
    let running = false;
    let inView = true;
    let rafId = 0;
    let last = 0;
    let time = Math.random() * 40;
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, power: 0, target: 0 };

    function buildAtlas() {
      const styles = getComputedStyle(root);
      const colors = [styles.getPropertyValue("--ink-3").trim() || "#777", styles.getPropertyValue("--accent").trim() || "#ffb224"];
      atlas = document.createElement("canvas");
      atlas.width = Math.ceil(RAMP.length * CELL_W * dpr);
      atlas.height = Math.ceil(2 * CELL_H * dpr);
      const actx = atlas.getContext("2d");
      actx.scale(dpr, dpr);
      actx.font = '500 12px "Geist Mono", ui-monospace, monospace';
      actx.textAlign = "center";
      actx.textBaseline = "middle";
      colors.forEach((color, row) => {
        actx.fillStyle = color;
        for (let i = 1; i < RAMP.length; i += 1) actx.fillText(RAMP[i], i * CELL_W + CELL_W / 2, row * CELL_H + CELL_H / 2);
      });
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      cols = Math.ceil(rect.width / CELL_W);
      rows = Math.ceil(rect.height / CELL_H);
      buildAtlas();
      draw();
    }

    function draw() {
      if (!atlas) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const sw = CELL_W * dpr;
      const sh = CELL_H * dpr;
      const levels = RAMP.length - 1;
      const tm = time;
      const { x: px, y: py, power } = pointer;
      const falloff = 1 / (2 * 95 * 95);

      for (let y = 0; y < rows; y += 1) {
        const ny = y / rows;
        const cy = y * CELL_H + CELL_H / 2;
        for (let x = 0; x < cols; x += 1) {
          const nx = x / cols;
          // Classic demoscene plasma: a sum of interfering sine waves
          let v =
            Math.sin(nx * 6.2 + tm * 0.9) +
            Math.sin(ny * 4.6 - tm * 0.7) +
            Math.sin((nx * 3.4 + ny * 5.2) + tm * 0.5) +
            Math.sin(Math.sqrt((nx - 0.74) * (nx - 0.74) * 10 + (ny - 0.36) * (ny - 0.36) * 5) * 9 - tm * 1.3);
          v = (v + 4) / 8;
          v = Math.max(0, (v - 0.38) / 0.62);

          let heat = 0;
          if (power > 0.01) {
            const dx = x * CELL_W + CELL_W / 2 - px;
            const dy = cy - py;
            heat = Math.exp(-(dx * dx + dy * dy) * falloff) * power;
            v = Math.min(1, v + heat * 0.4);
          }

          const level = Math.round(v * levels);
          if (level <= 0) continue;
          const hot = v > 0.96 || heat > 0.55;
          ctx.globalAlpha = hot ? 0.3 + v * 0.45 : 0.1 + v * 0.45;
          ctx.drawImage(atlas, level * sw, hot ? sh : 0, sw, sh, x * sw, y * sh, sw, sh);
        }
      }
      ctx.globalAlpha = 1;
    }

    function frame(now) {
      rafId = requestAnimationFrame(frame);
      if (now - last < FRAME_MS) return;
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      time += dt * 0.45;
      pointer.x += (pointer.tx - pointer.x) * 0.16;
      pointer.y += (pointer.ty - pointer.y) * 0.16;
      pointer.power += (pointer.target - pointer.power) * 0.06;
      draw();
    }

    function start() {
      if (running || reduceMotion.matches || !inView || document.hidden) return;
      running = true;
      last = performance.now();
      rafId = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    host.addEventListener(
      "pointermove",
      (event) => {
        if (event.pointerType !== "mouse") return;
        const rect = canvas.getBoundingClientRect();
        pointer.tx = event.clientX - rect.left;
        pointer.ty = event.clientY - rect.top;
        if (pointer.power < 0.02) {
          pointer.x = pointer.tx;
          pointer.y = pointer.ty;
        }
        pointer.target = 1;
      },
      { passive: true }
    );
    host.addEventListener("pointerleave", () => {
      pointer.target = 0;
    });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      }).observe(canvas);
    }

    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    document.addEventListener("themechange", () => {
      buildAtlas();
      draw();
    });
    reduceMotion.addEventListener?.("change", () => (reduceMotion.matches ? stop() : start()));
    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(canvas);
    else window.addEventListener("resize", resize);

    resize();
    start();
    document.fonts?.ready.then(() => {
      buildAtlas();
      draw();
    });
    return { start, stop };
  }

  const asciiCanvas = $("[data-ascii]");
  const hero = $("[data-hero]");
  if (asciiCanvas && hero) createAsciiField(asciiCanvas, hero);

  /* ==========================================================================
     Boot
     ========================================================================== */

  applyLanguage(currentLang, { initial: true });
  applyFilters();
  moveIndicator(true);
  renderTerminal(true);
  animateHeroTitle();
  if (reduceMotion.matches) $$("svg").forEach((svg) => svg.pauseAnimations?.());
})();

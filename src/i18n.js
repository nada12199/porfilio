import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Traductions
const resources = {
  en: {
    translation: {
      projects: 'Projects',
      aboutMe: 'About Me',
      contact: 'Contact',
      hireMe: 'Contact me',
      subject: 'Subject',
      email: 'Email',
      message: 'Message',
      sendRequest: 'Send',
      alertSuccessSubject: 'Success !',
      alertSuccessDesc: 'Your action was successful.',
      alertEchecSubject: 'Error !',
      alertEchecDesc: 'An error occurred. Please try again.',
      emailValidatio: 'Invalid email',
      entityValidation: 'This field is required',
      name: 'Hi, I am Nada Fennani',
      job: 'a Full-Stack engineer ',
      downloadCv: 'Download CV',
      fullStack: 'Full Stack JS Engineer',
      category1: 'Professional experience',
      ingénieurAlternance: 'Ingenieur in apprenticeship',
      développeurDevops: 'DevOps Developer',
      développeur: 'SpringBoot / Angular Developer',
      category2: 'Academic project',
      allProjects: 'All Projects',
      searchProjects: 'Search Projects',
      followMe: 'Follow me',
      Yearsofexperience: 'Years of experience',
      descriptioAboutMe:
        'A sharp sense of listening and service, honed during my two years of experience collaborating on various projects. My journey has led me to work in different professional environments, later specializing in web development. Driven by the constant desire to progress and supported by solid foundations acquired throughout my journey, I find genuine satisfaction in taking on new challenges.',
      ContactDetails: 'Contact details',
      address: 'Aouina , Tunis , Tunisia',
      myEmail: 'fannaninada5@gmail.com',
      years: 'years',
      certification: 'Certifications',
      dateJava: '(Coursera 2020) 7 August 2020',
      dateReact: '(Coursera 2023) 18 April 2023',
      spf_title: 'Full Stack Engineer Next/Nest JS',
      spf_publishDate: 'Since August 2022',
      cc_name: 'CodeCooperation',
      cc_title: 'About the society ',
      cc_web: 'https://www.codecooperation.com/',
      nom: 'Name',
      technologies: 'Tools & Technologies',
      projet: 'Project',
      equipe: 'Team',
      spf_team: 'Product Owner, technical lead, 5 développors, QA.',
      spf_details1:
        'Senioren Platz Finder" is a German startup that helps users find retirement homes that suit their needs.',
      spf_details2:
        'User and retirement homes registration and authentication. Management of users and retirement homes.',
      spf_details3: 'Creation and management of requests.',
      spf_details4: 'Creation and management of offers.',
      spf_details5:
        'Development of advanced filtering algorithms based on common interests, values, and shared goals among users.',
      spf_details6: 'Management and automation of scheduled email delivery.',
      spf_details7:
        "Management of a 'White label solutions' solution, allowing establishments to customize the theme of the application while retaining the essential functionalities of the base application.",
      web_url: 'Web URL',
      baus_title: 'Engineering Intern',
      baus_publishDate: 'December 2021 to July 2022',
      baus_details1: 'Web platform for tracking building projects that allows:',
      baus_details2: 'Helping contractors find the talent they need.',
      baus_details3: 'Helping subcontractors find the best contracts.',
      baus_details4:
        'Providing the German industry with an effective collaboration platform in the construction field.',

      baus_team: 'PO, technical lead, 2 developers, QA',
      spf_name: 'Seniorenplatzfinder',
      baus_name: 'Bauscout',
      med_name: 'Med.tn',
      projet_academic1: 'Dari.tn',
      projet_academic2: 'Devops',
      poste: 'Workstation',
      screenshots: 'Graphic charters',
      LandingPage: 'Landing Page',
      spfLogin: 'Login Interface',
      spfRegister: 'Facility User Registration',
      spfFilter: 'Dashboard Page',
      spfBrand: 'Branding homepage',
      competence: 'Skills',
      database: 'Database',
      projectManagement: 'Project Management',
      language: 'Languages',
      arabic: 'Arabic',
      frensh: 'Frensh',
      english: 'English',
      maternelle: 'Native language',
      formation: 'Education',
      ingenierie: 'Computer Engineering Program',
      prepa: 'Mathematics and Physics preparatory course',
      ingenierie_date: 'September 2019 to June 2022',
      prepa_date: 'September 2017 to July 2019',
      prepa_name:
        'PREPARATORY INSTITUTE FOR ENGINEERING STUDIES, SFAX: TUNISIA',
      baudTarification: 'Pricing Interface',
      bausAddProject: 'XML file import to add a project',
      bausProject: "View mission list in the entrepreneur's Dashboard",
      bausReview: 'Subcontractor evaluation input modal',
      med_publishDate: 'July 2021 to September 2021',
      med_detail1:
        "Setting up personalized patient records according to the doctor's specialty.",
      med_detail2:
        'Helping the doctor to fill out a form assigned to the patient in an orderly manner.',
      med_detail3:
        'Making it easier for the doctor to find all necessary information about a patient.',
      medOphtalmologue:
        'The Medical Consultation section for an ophthalmologist',
      medOrdonnance: 'The prescription section for all specialties',
      medLasers: 'The laser section for a dermatologist',
      medGeneraliste:
        "The Personal Information section of the patient for a general practitioner's form",
      devops_publishDate: 'October 2021 to November 2021',
      esprit_team: '3 developers',
      devops_details1: 'Applying DevOps tools on a SpringBoot project',
      devops_details2:
        'Adding lines of code for logging and adding unit test classes',
      devops_details3:
        "Running Sonar on the project and deploying the project's deliverable on Nexus",
      devops_details4: 'Automating Continuous Delivery tasks with Docker',
      dari_publishDate: 'February 2021 to May 2021',
      dari_details1: 'Web platform for real estate management.',
      dari_details2:
        'Allows the user to buy or sell, to lease or rent properties.',
      dari_details3:
        'Enables the user to estimate their property value, among many other real estate-related features.',
      dariLogin: 'Authentication page',
      dariDashbord: 'Home page',
      darAppointement: 'Add Appointment page',
    },
  },
  fr: {
    translation: {
      projects: 'Projets',
      aboutMe: 'À propos de moi',
      contact: 'Contact',
      hireMe: 'Contactez-moi',
      subject: 'Sujet',
      email: 'Email',
      message: 'Message',
      sendRequest: 'Envoyer le message',
      alertSuccessSubject: 'Success !',
      alertSuccessDesc: 'Votre action a réussi."',
      alertEchecSubject: 'Error !',
      alertEchecDesc: "Une erreur s'est produite. Veuillez réessayer.",
      emailValidatio: 'Email invalide',
      entityValidation: 'Ce champ est requis',
      name: 'Bonjour, je suis Nada Fennani',
      job: 'Ingénieur Full-Stack',
      downloadCv: 'Télécharger CV',
      fullStack: 'Ingénieur Full Stack ',
      category1: 'Expérience professionnelle',
      ingénieurAlternance: 'Ingénieur en alternance',
      développeurDevops: 'Développeur DevOps',
      développeur: 'Développeur SpringBoot / Angular',
      category2: 'Projet académique',
      allProjects: 'Tous les projets',
      searchProjects: 'Rechercher des projets',
      followMe: 'Suivez-moi',
      Yearsofexperience: "Années d'expérience",
      descriptioAboutMe:
        "Un sens aiguisé de l'écoute et du service, forgé au cours de mes deux années d'expérience à collaborer sur divers projets. Mon parcours m'a conduit à évoluer au sein de différents environnements professionnels, me spécialisant ultérieurement dans le développement web. Animée par le désir constant de progresser et soutenu par des bases solides acquises au fil de mon parcours, j'éprouve une réelle satisfaction à relever de nouveaux défis.",
      ContactDetails: 'Coordonnées',
      address: 'Aouina , Tunis , Tunisie',
      myEmail: 'fannaninada5@gmail.com',
      years: 'ans',
      certification: 'Certifications',
      dateJava: '(Coursera 2020) 7 Août 2020',
      dateReact: '(Coursera 2023) 18 Avril 2023',
      spf_title: 'Ingénieur Full Stack Next/Nest JS',
      spf_publishDate: 'Depuis août 2022',
      cc_name: 'CodeCooperation',
      cc_title: 'Concernant la société',
      cc_web: 'https://www.codecooperation.com/',
      nom: 'Nom',
      technologies: 'Outils et Technologies',
      projet: 'Projet',
      equipe: 'Equipe',
      spf_team: 'Product Owner, technical lead, 5 développeurs, QA.',
      spf_details1:
        'Senioren Platz Finder est une start up allemande qui aide les utilisateurs à trouver les maisons de retraites qui leur correspondent.',
      spf_details2:
        'Registration des utilisateurs et des maisons de retraite et Authentification. Gestion des utilisateurs et des maisons de retraite.',
      spf_details3: 'Création et gestion des demandes.',
      spf_details4: 'Création et gestion des offres.',
      spf_details5:
        'Développement d’algorithmes avancés de filtrage basés sur les intérêts communs, les valeurs et les objectifs partagés entre les utilisateurs.',
      spf_details6:
        "Gestion et automatisation de l'envoi d'e-mails programmés.",
      spf_details7:
        "Gestion d'une solution 'White label solutions', permettant aux établissements de personnaliser le thème de l'application tout en conservant les fonctionnalités essentielles de l'application de base.",
      web_url: 'URL du site web',
      baus_title: 'Ingénieur en alternance',
      baus_publishDate: 'Décembre 2021 à juillet 2022',
      baus_details1:
        'Plateforme Web de suivi des projets de bâtiments qui permet de :',
      baus_details2:
        'Aider les entrepreneurs à trouver les talents dont ils ont besoin.',
      baus_details3: 'Aider les sous-traitants à trouver le meilleur contrat.',
      baus_details4:
        'Fournir à l’industrie allemande une plateforme de collaboration efficace dans le domaine de construction.',
      baus_team: 'PO, technical lead, 2 développeurs, QA',
      spf_name: 'Seniorenplatzfinder',
      baus_name: 'Bauscout',
      med_name: 'Med.tn',
      projet_academic1: 'Dari.tn',
      projet_academic2: 'Devops',
      poste: 'Poste',
      screenshots: 'Chartes graphiques',
      LandingPage: "Page d'atterrissage",
      spfLogin: 'Interface de connexion',
      spfRegister: "Inscription d'utilisateur des maisons de retraite",
      spfFilter: 'Page du tableau de bord',
      spfBrand: "Page d'accueil de branding",
      competence: 'Compétences',
      database: 'Base de données',
      projectManagement: 'Gestion de projet',
      language: 'Langues',
      arabic: 'Arabe',
      frensh: 'Français',
      english: 'Anglais',
      maternelle: 'Langue maternelle',
      formation: 'Formation',
      ingenierie: 'Cycle Ingénieur Informatique',
      prepa: 'Cycle préparatoire Maths Physique',
      ingenierie_date: 'Septembre 2019 à juin 2022',
      prepa_date: 'Septembre 2017 à juillet 2019',
      prepa_name:
        "INSTITUT PRÉPARATOIRE AUX ETUDES D'INGÉNIEUR, SFAX : TUNISIE ",
      baudTarification: 'Interface de tarification',
      bausAddProject: 'Importation de fichier xml pour ajouter un projet',
      bausProject: 'Consultation liste mission dans le Dashboard entrepreneur',
      bausReview: "Modale de saisie de l'évaluation de sous-traitant",
      med_publishDate: 'Juillet 2021 à septembre 2021',
      med_detail1:
        'La mise en place des fiches patients personnalisées selon la spécialité de médecin.',
      med_detail2:
        'Aider le médecin à remplir un formulaire assigné au patient de manière ordonnée',
      med_detail3:
        "Faciliter au médecin de trouver toutes les informations nécessaires d'un patient.",
      medOphtalmologue: 'La partie Consultation Médicale pour un ophtalmologue',
      medOrdonnance: 'La partie ordonnance pour tout les spécialités',
      medLasers: 'La partie lasers pour un dermatologue',
      medGeneraliste:
        "La partie Informations Personnelles du patient pour le formulaire d'un généraliste",
      devops_publishDate: 'Octobre 2021 à novembre 2021',
      esprit_team: '3 développeurs',
      devops_details1: 'Application des outils DevOps sur un projet SpringBoot',
      devops_details2:
        'Ajouter des lignes de code pour journaliser et ajouter des classes de tests unitaires',
      devops_details3:
        'Lancer sonar sur le projet et mettre le livrable du projet sur Nexus.',
      devops_details4: 'Automatiser les tâches Livraison continue avec Docker',
      dari_publishDate: 'Février 2021 à mai 2021',
      dari_details1: "Plateforme web pour la gestion d' immobiliers.",
      dari_details2:
        'l’utilisateur permet d’acheter ou de vendre, de mettre en location ou de louer.',
      dari_details3:
        "l'utilisateur permet d'estimer son bien, et bien d’autres fonctionnalités autour de l’immobilier.",
      dariLogin: "Page d'authentification",
      dariDashbord: "Page d'accueil",
      darAppointement: "Page d'ajout de rendez-vous",
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

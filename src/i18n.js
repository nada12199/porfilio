import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Traductions
const resources = {
  en: {
    translation: {
      projects: 'Projects',
      aboutMe: 'About Me',
      contact: 'Contact',
      hireMe: 'Hire Me',
      subject: 'Subject',
      email: 'Email',
      message: 'Message',
      sendRequest: 'Send Request',
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
      développeur: 'Spring Boot / Angular Developer',
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
      myNumber: '+21694320384',
    },
  },
  fr: {
    translation: {
      projects: 'Projets',
      aboutMe: 'À propos de moi',
      contact: 'Contact',
      hireMe: 'Engagez-moi',
      subject: 'Sujet',
      email: 'Email',
      message: 'Message',
      sendRequest: 'Envoyer la requête',
      alertSuccessSubject: 'Success !',
      alertSuccessDesc: 'Votre action a réussi."',
      alertEchecSubject: 'Error !',
      alertEchecDesc: "Une erreur s'est produite. Veuillez réessayer.",
      emailValidatio: 'Email invalide',
      entityValidation: 'Ce champ est requis',
      name: 'Bonjour, je suis Nada Fennani',
      job: 'une ingénieur Full-Stack',
      downloadCv: 'Télécharger CV',
      fullStack: 'Ingénieur Full Stack ',
      category1: 'Expérience professionnelle',
      ingénieurAlternance: 'Ingénieur en alternance',
      développeurDevops: 'Développeur DevOps',
      développeur: 'Développeur Spring Boot / Angular',
      category2: 'Projet académique',
      allProjects: 'Tous les projets',
      searchProjects: 'Rechercher des projets',
      followMe: 'Suivez-moi',
      Yearsofexperience: "Années d'expérience",
      descriptioAboutMe:
        "Un sens aiguisé de l'écoute et du service, forgé au cours de mes deux années d'expérience à collaborer sur divers projets. Mon parcours m'a conduit à évoluer au sein de différents environnements professionnels, me spécialisant ultérieurement dans le développement web. Animé par le désir constant de progresser et soutenu par des bases solides acquises au fil de mon parcours, j'éprouve une réelle satisfaction à relever de nouveaux défis.",
      ContactDetails: 'Coordonnées',
      address: 'Aouina , Tunis , Tunisie',
      myEmail: 'fannaninada5@gmail.com',
      myNumber: '+21694320384',
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

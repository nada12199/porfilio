import codecooperation from '../images/codecooperation.svg'
import spf from '../images/spf.jpeg'
import spfLanding from '../images/spf-landing.png'
import spfLogin from '../images/spf-login.png'
import spfRegister from '../images/spf_registerFacility.png'
import spfFilter from '../images/spf-filter.png'
import spfBrand from '../images/spf-brand.png'
import { FiLink } from 'react-icons/fi'
import bauscout from '../images/bauscout.png'
import baudTarification from '../images/baud-tarification.png'
import bausAddProject from '../images/baus-add-project.png'
import bausProject from '../images/baus-project.png'
import bausReview from '../images/baus-review.png'
import medtnLogo from '../images/medtn_logo.jpeg'
import medLasers from '../images/med-lasers.png'
import medGeneraliste from '../images/med-generaliste.png'
import medOphtalmologue from '../images/med-ophtalmologue.png'
import medOrdonnance from '../images/med-ordonnance.png'
import esprit from '../images/esprit.jpeg'
import dari from '../images/dari-logo.png'
import devopsLogo from '../images/devops-logo.webp'
import dariLogin from '../images/dari_login.png'
import darAppointement from '../images/dar_appointement.png'
import dariDashbord from '../images/dari_dashbord.png'
export const singleProjectData = [
  {
    project_Post: 'spf_title',
    ProjectId: 1,
    logo: spf,
    ProjectHeader: {
      title: 'spf_name',
      publishDate: 'spf_publishDate',
      tags: 'cc_name',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'codecooperation',
        img: codecooperation,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'cc_title',
      CompanyInfo: [
        {
          id: 1,
          title: 'nom',
          details: 'cc_name',
        },
        {
          id: 3,
          title: 'Website',
          details: 'cc_web',
        },
      ],
      ObjectivesHeading: 'equipe',
      ObjectivesDetails: 'spf_team',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'next.js',
            'nestJs',
            'Amazon S3',
            'Scrum',
            'Git',
            'MySQL',
            'Material UI',
            'Mailjet',
            'DigitalOcean',
            'Figma',
          ],
        },
      ],
      ProjectDetailsHeading: 'projet',
      ProjectDetails: [
        {
          id: 1,
          details: 'spf_details1',
        },
        {
          id: 2,
          details: 'spf_details2',
        },
        {
          id: 3,
          details: 'spf_details3',
        },
        {
          id: 4,
          details: 'spf_details4',
        },
        {
          id: 5,
          details: 'spf_details5',
        },
        {
          id: 6,
          details: 'spf_details6',
        },
        {
          id: 7,
          details: 'spf_details7',
        },
      ],

      SocialSharing: [
        {
          id: 1,
          name: 'web_url',
          icon: <FiLink />,
          url: 'https://seniorenplatzfinder.com/',
        },
      ],
      ProjectImages: [
        {
          id: 1,
          title: 'LandingPage',
          img: spfLanding,
        },
        {
          id: 2,
          title: 'spfLogin',
          img: spfLogin,
        },
        {
          id: 3,
          title: 'spfRegister',
          img: spfRegister,
        },
        {
          id: 4,
          title: 'spfFilter',
          img: spfFilter,
        },
        {
          id: 5,
          title: 'spfBrand',
          img: spfBrand,
        },
      ],
    },
  },
  {
    project_Post: 'ingénieurAlternance',
    ProjectId: 2,
    logo: bauscout,
    ProjectHeader: {
      title: 'baus_name',
      publishDate: 'baus_publishDate',
      tags: 'cc_name',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'codecooperation',
        img: codecooperation,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'cc_title',
      CompanyInfo: [
        {
          id: 1,
          title: 'nom',
          details: 'cc_name',
        },
        {
          id: 3,
          title: 'Website',
          details: 'cc_web',
        },
      ],
      ObjectivesHeading: 'equipe',
      ObjectivesDetails: 'baus_team',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'ReactJs',
            'Material UI',
            'Amazon S3',
            'Thymeleaf',
            'Scrum',
            'Git',
            'MySQL',
            'Spring Boot',
          ],
        },
      ],
      ProjectDetailsHeading: 'projet',
      ProjectDetails: [
        {
          id: 1,
          details: 'baus_details1',
        },
        {
          id: 2,
          details: 'baus_details2',
        },
        {
          id: 3,
          details: 'baus_details3',
        },
        {
          id: 4,
          details: 'baus_details4',
        },
      ],
      ProjectImages: [
        {
          id: 1,
          title: 'baudTarification',
          img: baudTarification,
        },
        {
          id: 2,
          title: 'bausAddProject',
          img: bausAddProject,
        },
        {
          id: 3,
          title: 'bausProject',
          img: bausProject,
        },
        {
          id: 4,
          title: 'bausReview',
          img: bausReview,
        },
      ],
    },
  },
  {
    project_Post: 'ingénieurAlternance',
    ProjectId: 3,
    logo: '',
    ProjectHeader: {
      title: 'Med.tn',
      publishDate: 'med_publishDate',
      tags: 'Med.tn',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Med.tn',
        img: medtnLogo,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'cc_title',
      CompanyInfo: [
        {
          id: 1,
          title: 'nom',
          details: 'Med.tn',
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://www.med.tn/',
        },
      ],
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React.js', 'Symfony 5', 'Git', 'Formio', 'MySQL'],
        },
      ],
      ProjectDetailsHeading: 'projet',
      ProjectDetails: [
        {
          id: 1,
          details: 'med_detail1',
        },
        {
          id: 2,
          details: 'med_detail2',
        },
        {
          id: 3,
          details: 'med_detail3',
        },
      ],
      ProjectImages: [
        {
          id: 1,
          title: 'medOphtalmologue',
          img: medOphtalmologue,
        },
        {
          id: 2,
          title: 'medOrdonnance',
          img: medOrdonnance,
        },
        {
          id: 3,
          title: 'medLasers',
          img: medLasers,
        },
        {
          id: 4,
          title: 'medGeneraliste',
          img: medGeneraliste,
        },
      ],
    },
  },
  {
    project_Post: 'développeurDevops',
    ProjectId: 4,
    logo: devopsLogo,
    ProjectHeader: {
      title: 'Devops',
      publishDate: 'devops_publishDate',
      tags: 'ESPRIT',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'esprit',
        img: esprit,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'cc_title',
      CompanyInfo: [
        {
          id: 1,
          title: 'nom',
          details: 'Esprit',
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://esprit.tn/',
        },
      ],
      ObjectivesHeading: 'equipe',
      ObjectivesDetails: 'esprit_team',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'Spring Boot',
            'Maven',
            'Log4j',
            'JUnit',
            'Git',
            'sonar',
            'Nexus',
            'Jenkins',
            'Docker',
          ],
        },
      ],
      ProjectDetailsHeading: 'projet',
      ProjectDetails: [
        {
          id: 1,
          details: 'devops_details1',
        },
        {
          id: 2,
          details: 'devops_details2',
        },
        {
          id: 3,
          details: 'devops_details3',
        },
        {
          id: 4,
          details: 'devops_details4',
        },
      ],
    },
  },
  {
    project_Post: 'développeur',
    ProjectId: 5,
    logo: dari,
    ProjectHeader: {
      title: 'Dari.tn',
      publishDate: 'dari_publishDate',
      tags: 'Esprit',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'esprit',
        img: esprit,
      },
    ],
    ProjectInfo: {
      CompanyInfo: [
        {
          id: 1,
          title: 'nom',
          details: 'Esprit',
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://esprit.tn/',
        },
      ],
      ObjectivesHeading: 'equipe',
      ObjectivesDetails: 'esprit_team',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Spring Boot', 'Spring Security', 'Angular', 'MySQL', 'git'],
        },
      ],
      ProjectDetailsHeading: 'projet',
      ProjectDetails: [
        {
          id: 1,
          details: 'dari_details1',
        },
        {
          id: 2,
          details: 'dari_details2',
        },
        {
          id: 3,
          details: 'dari_details3',
        },
      ],

      ProjectImages: [
        {
          id: 1,
          title: 'dariLogin',
          img: dariLogin,
        },
        {
          id: 2,
          title: 'dariDashbord',
          img: dariDashbord,
        },
        {
          id: 3,
          title: 'darAppointement',
          img: darAppointement,
        },
      ],
    },
  },
]

import React from 'react'
import { useTranslation } from 'react-i18next'
import StarRating from '../shared/StarRating'
import '../../i18n'

const TechnologieList = () => {
  const { t } = useTranslation()

  const technologies = {
    frontend: [
      { name: 'ReactJS', rating: 5 },
      { name: 'TypeScript', rating: 4 },
      { name: 'Redux', rating: 4 },
      { name: 'Next.js', rating: 5 },
      { name: 'Javascript', rating: 5 },
      { name: 'Jest', rating: 4 },
    ],
    backendDevOps: [
      { name: 'NestJs', rating: 5 },
      { name: 'Mailjet', rating: 5 },
      { name: 'Spring Security', rating: 4.5 },
      { name: 'Node JS', rating: 5 },
      { name: 'Spring Boot', rating: 4.5 },
      { name: 'Sonar', rating: 4 },
      { name: 'Nexus', rating: 3 },
      { name: 'Git', rating: 5 },
      { name: 'Docker', rating: 4 },
      { name: 'Maven', rating: 3 },
      { name: 'Jenkins', rating: 3 },
      { name: 'Amazon S3', rating: 4 },
    ],
    database: [{ name: 'MySQL', rating: 5 }],
    design: [
      { name: 'Material UI', rating: 5 },
      { name: 'Figma', rating: 4 },
      { name: 'Styled Components', rating: 5 },
      { name: 'Tailwind', rating: 4 },
    ],
    projectManagement: [
      { name: 'Git', rating: 5 },
      { name: 'Scrum', rating: 5 },
      { name: 'Jira', rating: 5 },
      { name: 'Notion', rating: 4.5 },
    ],
  }

  const renderTechnologies = (category) => (
    <ul>
      {technologies[category].map((tech, index) => (
        <li key={index} className="flex space-x-2">
          <span className="mr-2">{tech.name}</span>
          <StarRating rating={tech.rating} />
        </li>
      ))}
    </ul>
  )

  return (
    <div className="container mx-auto px-4 text-ternary-dark dark:text-ternary-light">
      <div className="text-center mt-8 mb-8">
        <span className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light ">
          {t('competence')}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-start">
        <div className="px-2">
          <h2 className="text-xl font-semibold mb-2 sm:mb-4">Frontend</h2>
          {renderTechnologies('frontend')}
        </div>

        <div className="px-2">
          <h2 className="text-xl font-semibold mb-2 sm:mb-4">
            Backend & DevOps
          </h2>
          {renderTechnologies('backendDevOps')}
        </div>

        <div className="px-2">
          <h2 className="text-xl font-semibold mb-2 sm:mb-4">
            {t('database')}
          </h2>
          {renderTechnologies('database')}
        </div>

        <div className="px-2">
          <h2 className="text-xl font-semibold mb-2 sm:mb-4">Design</h2>
          {renderTechnologies('design')}
        </div>

        <div className="px-2">
          <h2 className="text-xl font-semibold mb-2 sm:mb-4">
            {t('projectManagement')}
          </h2>
          {renderTechnologies('projectManagement')}
        </div>
      </div>
    </div>
  )
}

export default TechnologieList

import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../i18n'
const TechnologieList = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className="container mx-auto px-4 text-ternary-dark dark:text-ternary-light">
      <div className="text-center mt-8 mb-8">
        <span className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light ">
          {t('competence')}
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-center">
        <div class="px-2">
          <h2 class="text-xl font-semibold mb-2 sm:mb-4">Frontend</h2>
          <ul>
            <li>ReactJS</li>
            <li>TypeScript</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>Javascript</li>
            <li>Jest</li>
          </ul>
        </div>

        <div class="px-2">
          <h2 class="text-xl font-semibold mb-2 sm:mb-4">Backend & DevOps</h2>
          <ul>
            <li>NestJs</li>
            <li>Mailjet</li>
            <li>Spring Security</li>
            <li>Node JS</li>
            <li>Spring Boot</li>
            <li>Sonar</li>
            <li>Nexus</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Maven</li>
            <li>Jenkins</li>
            <li>Amazon S3</li>
          </ul>
        </div>

        <div class="px-2">
          <h2 class="text-xl font-semibold mb-2 sm:mb-4">{t('database')}</h2>
          <ul>
            <li>MySQL</li>
          </ul>
        </div>

        <div class="px-2">
          <h2 class="text-xl font-semibold mb-2 sm:mb-4">Design</h2>
          <ul>
            <li>Material UI</li>
            <li>Figma</li>
            <li>Styled Components</li>
            <li>Tailwind</li>
          </ul>
        </div>

        <div class="px-2">
          <h2 class="text-xl font-semibold mb-2 sm:mb-4">
            {t('projectManagement')}
          </h2>
          <ul>
            <li>Git</li>
            <li>Scrum</li>
            <li>Jira</li>
            <li>Notions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TechnologieList

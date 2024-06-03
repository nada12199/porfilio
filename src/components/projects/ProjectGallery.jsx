import { useContext } from 'react'
import SingleProjectContext from '../../context/SingleProjectContext'
import { useTranslation } from 'react-i18next'
import '../../i18n'
const ProjectGallery = ({ id }) => {
  const { singleProjectData } = useContext(SingleProjectContext)
  const { t } = useTranslation()
  const project = singleProjectData.find(
    (project) => parseInt(project.ProjectId) === parseInt(id),
  )
  return (
    <div className="flex gap-0 sm:gap-10 mt-14 flex-col sm:flex-row">
      <div className="w-full sm:w-1/3 ">
        {project.ProjectImages.map((project) => {
          return (
            <img
              src={project.img}
              className="rounded-xl shadow-lg sm:shadow-none mb-3 bg-white p-4 "
              alt={project.title}
              key={project.id}
              height={300}
              width={300}
            />
          )
        })}
      </div>
      <div className="mb-7">
        <div className="mb-5">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {t('poste')}
          </p>
          <span className="font-general-regular text-ternary-dark dark:text-ternary-light ">
            {t(project?.project_Post)}
          </span>
        </div>
        <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
          {t(project.ProjectInfo.ClientHeading)}
        </p>
        <ul className="leading-loose">
          {project.ProjectInfo.CompanyInfo.map((info) => {
            return (
              <li
                className="font-general-regular text-ternary-dark dark:text-ternary-light"
                key={info.id}
              >
                <span>{t(info.title)}: </span>
                <a
                  href={t(info.details)}
                  className={
                    info.title === 'Website'
                      ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                      : ''
                  }
                  aria-label="Project Website and Phone"
                >
                  {t(info.details)}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProjectGallery

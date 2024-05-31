import { useContext } from 'react'
import { FiClock, FiMapPin } from 'react-icons/fi'
import SingleProjectContext from '../../context/SingleProjectContext'
import { useTranslation } from 'react-i18next'
import '../../i18n'
const ProjectSingleHeader = ({ id }) => {
  const { singleProjectData } = useContext(SingleProjectContext)
  const { t, i18n } = useTranslation()
  const project = singleProjectData.find(
    (project) => parseInt(project.ProjectId) === parseInt(id),
  )

  return (
    <div>
      <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {t(project.ProjectHeader.title)}
      </p>
      <div className="flex">
        <div className="flex items-center mr-10">
          <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {t(project.ProjectHeader.publishDate)}
          </span>
        </div>
        <div className="flex items-center">
          <FiMapPin className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {t(project.ProjectHeader.tags)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectSingleHeader

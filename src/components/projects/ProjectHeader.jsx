import { useContext } from 'react'
import { FiClock, FiMapPin } from 'react-icons/fi'
import SingleProjectContext from '../../context/SingleProjectContext'
import { useTranslation } from 'react-i18next'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import '../../i18n'
const ProjectSingleHeader = ({ id }) => {
  const navigate = useNavigate()
  const { singleProjectData } = useContext(SingleProjectContext)
  const { t, i18n } = useTranslation()
  const project = singleProjectData.find(
    (project) => parseInt(project.ProjectId) === parseInt(id),
  )
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <div className="flex mt-14 sm:mt-20">
        <div className="mt-10 text-xl mr-4">
          <IoIosArrowBack
            className=" cursor-pointer rounded-lg"
            onClick={handleBack}
          />
        </div>
        <div>
          <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-8  mb-7">
            {t(project.ProjectHeader.title)}
          </p>
        </div>
      </div>
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

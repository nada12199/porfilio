import { useContext } from 'react'
import SingleProjectContext from '../../context/SingleProjectContext'
import { useTranslation } from 'react-i18next'
import '../../i18n'
import ImageCarousel from '../shared/ImageCarousel'
const ProjectInfo = ({ id }) => {
  const { singleProjectData } = useContext(SingleProjectContext)
  const { t } = useTranslation()
  const project = singleProjectData.find(
    (project) => parseInt(project.ProjectId) === parseInt(id),
  )
  return (
    <div>
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {project.logo && (
            <img
              src={project.logo}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={project.title}
              key={project.id}
              height={300}
              width={300}
            />
          )}
        </div>

        {/*  Single project right section */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {t(project.ProjectInfo.ProjectDetailsHeading)}
          </p>
          {project.ProjectInfo.ProjectDetails.map((details) => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {details.id !== 1 && <span>- </span>}
                {t(details.details)}
              </p>
            )
          })}
          {/* Single project objectives */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {t(project.ProjectInfo.ObjectivesHeading)}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {t(project.ProjectInfo.ObjectivesDetails)}
            </p>
          </div>

          {/* Single project technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {t(project.ProjectInfo.Technologies[0].title)}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {t(project.ProjectInfo.Technologies[0].techs.join(', '))}
            </p>
          </div>

          {/* Single project social sharing */}
          <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {t(project.ProjectInfo.SocialSharingHeading)}
            </p>

            <div className="flex items-center gap-3 mt-5">
              {project.ProjectInfo.SocialSharing &&
                project.ProjectInfo.SocialSharing.map((social) => {
                  return (
                    <div className="flex items-center mr-10">
                      <a
                        key={social.id}
                        href={social.url}
                        target="__blank"
                        aria-label="Share Project"
                        className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                      >
                        <span className="text-lg lg:text-2xl">
                          {social.icon}
                        </span>
                      </a>
                      <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                        {t(social.name)}
                      </span>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>

      {project.ProjectInfo.ProjectImages && (
        <div className="block sm:flex gap-0 sm:gap-10 mt-14">
          <div className="w-full sm:w-1/3 text-left">
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
              {t('screenshots')}
            </p>
          </div>
          <div className="flex items-center w-full sm:w-2/3 text-left mt-10 sm:mt-0">
            <ImageCarousel images={project.ProjectInfo.ProjectImages} />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectInfo

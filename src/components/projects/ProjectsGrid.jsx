import { useContext } from 'react'
import { FiSearch } from 'react-icons/fi'
import CardSingle from '../shared/CardSingle'
import { ProjectsContext } from '../../context/ProjectsContext'
import ProjectsFilter from './ProjectsFilter'
import { useTranslation } from 'react-i18next'
import '../../i18n'

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext)

  const { t, i18n } = useTranslation()
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center ">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          {t('projects')}
        </p>
      </div>

      <div className="mt-10 sm:mt-16 ">
        <div
          className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                       flex-col sm:flex-row"
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value)
              }}
              className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder={t('searchProjects')}
              aria-label="Name"
            />
          </div>
          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 ">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <CardSingle
                title={t(project.title)}
                category={t(project.category)}
                image={project.img}
                key={project.id}
                isProject={true}
                id={project.id}
              />
            ))
          : searchProject
          ? searchProjectsByTitle.map((project) => (
              <CardSingle
                title={t(t(project.title))}
                category={t(project.category)}
                image={project.img}
                key={project.id}
                isProject={true}
                id={project.id}
              />
            ))
          : projects.map((project) => (
              <CardSingle
                title={t(project.title)}
                category={t(project.category)}
                image={project.img}
                key={project.id}
                isProject={true}
                id={project.id}
              />
            ))}
      </div>
    </section>
  )
}

export default ProjectsGrid

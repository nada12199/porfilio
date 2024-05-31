import { useState, createContext } from 'react'
import { projectsData } from '../data/projects'
import { useTranslation } from 'react-i18next'
import '../i18n'
// Create projects context
export const ProjectsContext = createContext()

// Create the projects context provider
export const ProjectsProvider = (props) => {
  const { t, i18n } = useTranslation()
  const [projects, setProjects] = useState(projectsData)
  const [searchProject, setSearchProject] = useState('')
  const [selectProject, setSelectProject] = useState('')

  // Search projects by project title
  const searchProjectsByTitle = projects.filter((item) => {
    const result = t(item.title)
      .toLowerCase()
      .includes(searchProject.toLowerCase())
      ? item
      : searchProject === ''
      ? item
      : ''
    return result
  })

  // Select projects by project category
  const selectProjectsByCategory = projects.filter((item) => {
    let category = t(item.category)
    return category.includes(selectProject)
  })

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        searchProject,
        setSearchProject,
        searchProjectsByTitle,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  )
}

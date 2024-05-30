import { useTranslation } from 'react-i18next'
import '../../i18n'
const selectOptions = ['category1', 'category2']

const ProjectsFilter = ({ setSelectProject }) => {
  const { t, i18n } = useTranslation()
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value)
      }}
      className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
    >
      <option value={setSelectProject} className="text-sm sm:text-md">
        {t('allProjects')}
      </option>

      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option}>
          {t(option)}
        </option>
      ))}
    </select>
  )
}

export default ProjectsFilter

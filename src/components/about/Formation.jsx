import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../i18n'
const FormationList = () => {
  const { t } = useTranslation()
  return (
    <div className="container mx-auto px-4 ">
      <div className="text-center mt-8 mb-8">
        <span className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light ">
          {t('formation')}
        </span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-8 text-center ">
        <div class="px-2 text-ternary-dark dark:text-ternary-light">
          <h2 class="text-xl font-semibold mb-2 sm:mb-4">{t('ingenierie')}</h2>
          <ul>
            <li>ESPRIT</li>
            <li>{t('ingenierie_date')}</li>
          </ul>
        </div>

        <div class="px-2 text-ternary-dark dark:text-ternary-light">
          <h2 class="text-xl font-semibold mb-2 sm:mb-4">{t('prepa')}</h2>
          <ul>
            <li>{t('prepa_name')}</li>
            <li>{t('prepa_date')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FormationList

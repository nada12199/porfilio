import React from 'react'
import { useTranslation } from 'react-i18next'
import CounterItem from './CounterItem'

import '../../i18n'
const LangueList = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className=" py-20 text-ternary-dark dark:text-ternary-light">
      <div className="font-general-medium container mx-auto  block sm:flex sm:justify-between items-center">
        <CounterItem measurement={t('arabic')} title={t('maternelle')} />
        <CounterItem measurement={t('frensh')} title={'b2'} />
        <CounterItem measurement={t('english')} title={'b2'} />
      </div>
    </div>
  )
}

export default LangueList

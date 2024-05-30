import { useCountUp } from 'react-countup'
import CounterItem from './CounterItem'
import { useTranslation } from 'react-i18next'
import '../../i18n'
const AboutCounter = () => {
  useCountUp({ ref: 'experienceCounter', end: 2, duration: 1 })
  const { t, i18n } = useTranslation()

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title={t('Yearsofexperience')}
          counter={<span id="experienceCounter" />}
          measurement=""
        />
      </div>
    </div>
  )
}

export default AboutCounter

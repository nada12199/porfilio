import profileImage from '../../images/profile.png'
import { useTranslation } from 'react-i18next'
import '../../i18n'
const AboutMeBio = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0 mx-auto">
        <img src={profileImage} className="rounded-lg w-96" alt="" />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          {t('descriptioAboutMe')}
        </p>
      </div>
    </div>
  )
}

export default AboutMeBio

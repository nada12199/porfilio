import CardSingle from '../../components/shared/CardSingle'
import { useTranslation } from 'react-i18next'
import '../../i18n'
import { certificationData } from '../../data/certification'
const CertificationGrid = () => {
  const { t, i18n } = useTranslation()
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          {t('certification')}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 ">
        {certificationData.map((certification) => (
          <CardSingle
            title={certification.title}
            category={t(certification.category)}
            image={certification.img}
            key={certification.id}
            link={certification.link}
            isProject={false}
          />
        ))}
      </div>
    </section>
  )
}

export default CertificationGrid

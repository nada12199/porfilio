import AboutMeBio from '../components/about/AboutMeBio'
import AboutCounter from '../components/about/AboutCounter'
import { motion } from 'framer-motion'
import TechnologieList from '../components/about/Technologie'
import LangueList from '../components/about/Langue'
import FormationList from '../components/about/Formation'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../i18n'

const About = () => {
  const [activeTab, setActiveTab] = useState('bio')
  const { t } = useTranslation()

  const renderComponent = () => {
    switch (activeTab) {
      case 'bio':
        return (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1 } }}
              exit={{ opacity: 0 }}
              className="container mx-auto"
            >
              <AboutMeBio />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1 } }}
              exit={{ opacity: 0 }}
            >
              <AboutCounter />
            </motion.div>
          </>
        )
      case 'technologie':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            exit={{ opacity: 0 }}
            className="container mx-auto"
          >
            <TechnologieList />
          </motion.div>
        )
      case 'langue':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            exit={{ opacity: 0 }}
          >
            <LangueList />
          </motion.div>
        )
      case 'formation':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            exit={{ opacity: 0 }}
            className="container mx-auto"
          >
            <FormationList />
          </motion.div>
        )
      default:
        return (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1 } }}
              exit={{ opacity: 0 }}
              className="container mx-auto"
            >
              <AboutMeBio />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1 } }}
              exit={{ opacity: 0 }}
            >
              <AboutCounter />
            </motion.div>
          </>
        )
    }
  }

  return (
    <>
      <div className="w-full p-8">
        <div className="relative right-0">
          <ul
            className="relative flex flex-col sm:flex-row list-none rounded-lg p-5 justify-center list-reset flex border-b"
            data-tabs="tabs"
          >
            <li className="z-30 flex-auto text-center">
              <button
                className={`z-30 flex items-center justify-center w-full text-l px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  activeTab === 'bio'
                    ? 'text-ternary-dark font-bold bg-primary-light'
                    : 'text-ternary-dark dark:text-ternary-light'
                }`}
                role="tab"
                aria-selected={activeTab === 'bio'}
                onClick={() => setActiveTab('bio')}
              >
                <span className="ml-1">{t('aboutMe')}</span>
              </button>
            </li>
            <li className="z-30 flex-auto text-center">
              <button
                className={`z-30 flex items-center justify-center text-l w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  activeTab === 'technologie'
                    ? 'text-ternary-dark  font-bold  bg-primary-light'
                    : 'text-ternary-dark dark:text-ternary-light'
                }`}
                role="tab"
                aria-selected={activeTab === 'technologie'}
                onClick={() => setActiveTab('technologie')}
              >
                <span className="ml-1">{t('competence')}</span>
              </button>
            </li>
            <li className="z-30 flex-auto text-center">
              <button
                className={`z-30 flex items-center justify-center w-full text-l px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal${
                  activeTab === 'langue'
                    ? 'text-ternary-dark  font-bold  bg-primary-light'
                    : 'text-ternary-dark dark:text-ternary-light'
                }`}
                role="tab"
                aria-selected={activeTab === 'langue'}
                onClick={() => setActiveTab('langue')}
              >
                <span className="ml-1">{t('language')}</span>
              </button>
            </li>
            <li className="z-30 flex-auto text-center">
              <button
                className={`z-30 flex items-center justify-center w-full text-l px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  activeTab === 'formation'
                    ? 'text-ternary-dark  font-bold  bg-primary-light'
                    : 'text-ternary-dark dark:text-ternary-light'
                }`}
                role="tab"
                aria-selected={activeTab === 'formation'}
                onClick={() => setActiveTab('formation')}
              >
                <span className="ml-1">{t('formation')}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {renderComponent()}
    </>
  )
}

export default About

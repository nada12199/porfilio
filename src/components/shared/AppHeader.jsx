import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'
import HireMeModal from '../HireMeModal'
import logoLight from '../../images/logo-light.png'
import logoDark from '../../images/logo-dark.png'
import { motion } from 'framer-motion'
import Button from '../reusable/Button'
import { useTranslation } from 'react-i18next'
import '../../i18n'
const AppHeader = () => {
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [activeTheme, setTheme] = useThemeSwitcher()
  const [language, setLanguage] = useState('fr')

  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    setLanguage(lng)
    i18n.changeLanguage(lng)
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName('html')[0]
        .classList.add('overflow-y-hidden')
      setShowModal(true)
    } else {
      document
        .getElementsByTagName('html')[0]
        .classList.remove('overflow-y-hidden')
      setShowModal(false)
    }
  }

  useEffect(() => {
    if (showMenu) {
      setShowMenu(false)
    }
    // eslint-disable-next-line
  }, [location.pathname])

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link to="/">
              {activeTheme === 'dark' ? (
                <img src={logoDark} className="w-36" alt="Dark Logo" />
              ) : (
                <img src={logoLight} className="w-36" alt="Dark Logo" />
              )}
            </Link>
          </div>

          {/* Theme switcher small screen */}

          <div className="grid grid-cols-2 justify-between gap-3">
            <div
              className="rounded flex items-center justify-center space-x-4 block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer "
              aria-label="Theme Switcher"
              onClick={() => setTheme(activeTheme)}
            >
              {activeTheme === 'dark' ? (
                <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
              ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
              )}
            </div>
            <div className="rounded flex items-center justify-center  block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark  shadow-sm rounded-xl cursor-pointer ">
              {' '}
              {/* Added space-x-4 here as well */}
              {language === 'fr' ? (
                <span
                  onClick={() => changeLanguage('en')}
                  className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"
                >
                  En
                </span>
              ) : (
                <span
                  onClick={() => changeLanguage('fr')}
                  className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"
                >
                  Fr
                </span>
              )}
            </div>
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <span
              className="focus:outline-none cursor-pointer"
              aria-label="Hamburger Menu"
            >
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </span>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
              : 'hidden'
          }
        >
          <Link
            to="/projects"
            className={`block text-lg text-left ${
              location.pathname === '/projects'
                ? 'text-indigo-500 dark:text-ternary-light underline'
                : 'text-primary-dark dark:text-ternary-light'
            }  hover:text-indigo-500 dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark`}
            aria-label="Projects"
          >
            {t('projects')}
          </Link>
          <Link
            to="/certification"
            className={`block text-lg text-left ${
              location.pathname === '/certification'
                ? 'text-indigo-500 dark:text-ternary-light underline'
                : 'text-primary-dark dark:text-ternary-light'
            }  hover:text-indigo-500 dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark`}
            aria-label="Certification"
          >
            {t('certification')}
          </Link>
          <Link
            to="/about"
            className={`block text-lg text-left ${
              location.pathname === '/about'
                ? 'text-indigo-500 dark:text-ternary-light underline'
                : 'text-primary-dark dark:text-ternary-light'
            }  hover:text-indigo-500 dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark`}
            aria-label="About Me"
          >
            {t('aboutMe')}
          </Link>
          <Link
            to="/contact"
            className={`block text-lg text-left ${
              location.pathname === '/contact'
                ? 'text-indigo-500 dark:text-ternary-light underline'
                : 'text-primary-dark dark:text-ternary-light'
            }  hover:text-indigo-500 dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark`}
            aria-label="Contact"
          >
            {t('contact')}
          </Link>
          <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <span
              onClick={showHireMeModal}
              className="font-general-medium sm:hidden  text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-5 py-2 mt-2 duration-300 w-1/3"
              aria-label="Hire Me Button"
            >
              <Button title={t('hireMe')} />
            </span>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <Link
            to="/projects"
            className={`block text-lg text-left ${
              location.pathname === '/projects'
                ? 'text-indigo-500 dark:text-ternary-light underline'
                : 'text-primary-dark dark:text-ternary-light'
            }  hover:text-indigo-500 dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2`}
            aria-label="Projects"
          >
            {t('projects')}
          </Link>
          <Link
            to="/certification"
            className={`block text-lg text-left ${
              location.pathname === '/certification'
                ? 'text-indigo-500 dark:text-ternary-light underline'
                : 'text-primary-dark dark:text-ternary-light'
            }  hover:text-indigo-500 dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2`}
            aria-label="Certification"
          >
            {t('certification')}
          </Link>
          <Link
            to="/about"
            className={`block text-lg text-left ${
              location.pathname === '/about'
                ? 'text-indigo-500 dark:text-ternary-light underline'
                : 'text-primary-dark dark:text-ternary-light'
            }  hover:text-indigo-500 dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2`}
            aria-label="About Me"
          >
            {t('aboutMe')}
          </Link>
          <Link
            to="/contact"
            className={`block text-lg text-left ${
              location.pathname === '/contact'
                ? 'text-indigo-500 dark:text-ternary-light underline'
                : 'text-primary-dark dark:text-ternary-light'
            }  hover:text-indigo-500 dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2`}
            aria-label="Contact"
          >
            {t('contact')}
          </Link>
        </div>

        {/* Header right section buttons */}
        <div className="hidden sm:flex justify-between items-center flex-col sm:flex-row gap-3">
          <div className="hidden sm:flex">
            <span
              onClick={showHireMeModal}
              className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
              aria-label="Hire Me Button"
            >
              <Button title={t('hireMe')} />
            </span>
          </div>

          {/* Theme switcher large screen */}

          <div className="grid grid-cols-2  justify-between gap-3 ">
            <div
              className="rounded flex items-center justify-center space-x-4  bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
              aria-label="Theme Switcher"
              onClick={() => setTheme(activeTheme)}
            >
              {/* Added space-x-4 to add horizontal space between items */}
              {activeTheme === 'dark' ? (
                <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
              ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
              )}
            </div>
            <div className="rounded flex items-center justify-center space-x-4  bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer">
              {' '}
              {/* Added space-x-4 here as well */}
              {language === 'fr' ? (
                <span
                  onClick={() => changeLanguage('en')}
                  className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"
                >
                  En
                </span>
              ) : (
                <span
                  onClick={() => changeLanguage('fr')}
                  className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"
                >
                  Fr
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Hire me modal */}
      <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        ) : null}
        {showModal ? showHireMeModal : null}
      </div>
    </motion.nav>
  )
}

export default AppHeader

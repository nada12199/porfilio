import { motion } from 'framer-motion'
import { t } from 'i18next'
import { FiX } from 'react-icons/fi'
import Button from './reusable/Button'
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import * as Yup from 'yup'

// Define the validation schema
const validationSchema = Yup.object().shape({
  senderEmail: Yup.string()
    .email(t('emailValidatio'))
    .required(t('entityValidation')),
  subject: Yup.string().required(t('entityValidation')),
  message: Yup.string().required(t('entityValidation')),
})

const HireMeModal = ({ onClose, onRequest }) => {
  const [formData, setFormData] = useState({
    senderEmail: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [echec, setEchec] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Validate the form data
      await validationSchema.validate(formData, { abortEarly: false })
      // Clear errors if validation passes
      setErrors({})

      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        formData,
        process.env.REACT_APP_EMAIL_USER_ID,
      )
      setSuccess(true)
      setTimeout(() => {
        onClose()
      }, 3000)
    } catch (error) {
      if (error.name === 'ValidationError') {
        // Set validation errors
        const validationErrors = {}
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message
        })
        setErrors(validationErrors)
      } else {
        console.error('Error sending email:', error)
        setEchec(true)
        setTimeout(() => {
          onClose()
        }, 3000)
      }
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
      >
        {/* Modal Backdrop */}
        <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

        {/* Modal Content */}
        <main className="flex flex-col items-center justify-center h-full w-full">
          <div className="modal-wrapper flex items-center z-30">
            <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl sm:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
              <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
                <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                  {t('hireMe')}
                </h5>
                <button
                  onClick={onClose}
                  className="px-4 font-bold text-primary-dark dark:text-primary-light"
                >
                  <FiX className="text-3xl" />
                </button>
              </div>
              <div className="modal-body p-5 w-full h-full">
                <form
                  onSubmit={handleSubmit}
                  className="max-w-xl m-4 text-left"
                >
                  <div className="">
                    <input
                      className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="subject"
                      name="subject"
                      type="text"
                      required=""
                      placeholder={t('subject')}
                      aria-label="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && (
                      <p className="text-red text-sm mt-4">{errors.subject}</p>
                    )}
                  </div>
                  <div className="mt-6">
                    <input
                      className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="senderEmail"
                      name="senderEmail"
                      type="text"
                      required=""
                      placeholder="Email"
                      aria-label={t('email')}
                      value={formData.senderEmail}
                      onChange={handleChange}
                    />
                    {errors.senderEmail && (
                      <p className="text-red text-sm mt-4">
                        {errors.senderEmail}
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <textarea
                      className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                      id="message"
                      name="message"
                      cols="14"
                      rows="6"
                      aria-label="Details"
                      placeholder={t('message')}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red text-sm mt-4">{errors.message}</p>
                    )}
                  </div>

                  <div className="mt-6 pb-4 sm:pb-1">
                    <span
                      type="submit"
                      className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                      aria-label="Submit Request"
                    >
                      <Button title={t('sendRequest')} />
                    </span>
                  </div>
                  {success && (
                    <div className={`bg-green text-green px-4 py-3 rounded`}>
                      <strong className="font-bold capitalize">
                        {t('alertSuccessSubject')}
                      </strong>
                      <span className="block sm:inline">
                        {t('alertSuccessDesc')}
                      </span>
                    </div>
                  )}
                  {echec && (
                    <div className={`bg-red text-red px-4 py-3 rounded`}>
                      <strong className="font-bold capitalize">
                        {t('alertEchecSubject')}
                      </strong>
                      <span className="block sm:inline">
                        {t('alertEchecDesc')}
                      </span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </>
  )
}

export default HireMeModal

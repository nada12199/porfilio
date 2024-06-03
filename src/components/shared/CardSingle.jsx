import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const CardSingle = ({ title, category, image, link, isProject, id }) => {
  const navigate = useNavigate()
  const handleLink = () => {
    if (isProject) {
      navigate('/projects/' + id)
    } else {
      window.open(link, '_blank')
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div onClick={handleLink} aria-label="Single Project">
        <div
          className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
          style={{ height: '550px' }}
        >
          <div>
            <img
              src={image}
              className="rounded-t-xl border-none"
              alt="Single Project"
              style={{ height: '400px', width: '800px' }}
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg sm:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CardSingle

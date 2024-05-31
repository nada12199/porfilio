import CertificationGrid from '../components/Certification/CertificationGrid'
import { motion } from 'framer-motion'

const Certification = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto"
    >
      <CertificationGrid />
    </motion.div>
  )
}

export default Certification

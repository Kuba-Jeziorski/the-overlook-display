import { motion } from "framer-motion";
import PropTypes from "prop-types";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function AnimatedPage({ children }) {
  console.log(`animated`);
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;

AnimatedPage.propTypes = {
  children: PropTypes.node,
};

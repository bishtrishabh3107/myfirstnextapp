import { motion } from 'framer-motion';
function Card({ title, description, content }) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
      <div className="bg-gradient-to-r from-blue-200 via-pink-300 to-red-400 h-64 rounded  m-10 shadow-lg">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{content}</p>
      </div>
    </motion.div>
  );
}

export default Card;

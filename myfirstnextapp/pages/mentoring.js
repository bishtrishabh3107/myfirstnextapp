import Card from '../components/organ/Card';
import { motion } from 'framer-motion';

function mentoring() {
  return (
    <div className="py-20 px-16 h-screen col-span-6 text-left sm:p-5">
      <motion.div
        initial={{ scale: 0.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl font-medium text-red-400 my-5">
          Learn With Us -
        </h1>
        <h1 className="text-5xl font-semibold my-2">Our Trainings</h1>
        <h2 className="text-2xl">
          New technologies combined with constantly evolving computing tools
          makes continuous learning a no-brainer for IT professionals. Training
          from RBLabs ensures that you and your company stay on the leading
          edge.
        </h2>
      </motion.div>
      <div className="mx-16 md:mx-5 sm:mx-0">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default mentoring;

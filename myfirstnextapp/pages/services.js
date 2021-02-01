import Card from '../components/organ/Card';
import { motion } from 'framer-motion';
function services() {
  return (
    <div className="py-20 px-16 h-screen col-span-6 text-left sm:p-5">
      <motion.div
        initial={{ scale: 0.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl font-medium text-red-400 my-5">What We Do -</h1>
        <h1 className="text-5xl font-semibold my-2">Our Services</h1>
        <h2 className="text-2xl">
          World class web developers, leveraging the power of modern technology
          to build your business.
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

export default services;

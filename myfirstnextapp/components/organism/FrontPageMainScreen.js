import Card from '../organ/Card';
import { motion } from 'framer-motion';

function FrontPageMainScreen() {
  return (
    <div className="py-20 h-screen col-span-7 text-center">
      <motion.div
        initial={{ scale: 0.3 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="animate-pulse text-5xl font-semibold">
          Hi ! I am Rishabh
        </h1>
        <h2 className="text-2xl">Full Stack Web Engineer based in India.</h2>
      </motion.div>
      <h1 className="animate-bounce text-4xl font-medium mt-40 mx-20 text-red-400">
        <div>Our Projects</div>
        <div>!</div>
      </h1>
      <div className="mx-16 md:mx-4 sm:mx-0">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default FrontPageMainScreen;

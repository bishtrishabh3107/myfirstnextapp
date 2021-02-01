import { Button } from '@chakra-ui/react';
import BlogCard from '../components/organ/BlogCard';
import { motion } from 'framer-motion';

function Blogs({ articles }) {
  return (
    <div className="py-20 px-16 h-screen col-span-6 text-left sm:p-5">
      <motion.div
        initial={{ scale: 0.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl font-medium text-red-400 my-5">
          Our Insight -
        </h1>
        <h1 className="text-5xl font-semibold my-2">Blogs for your help</h1>
        <h2 className="text-2xl">
          We provide teams with technical leaders who bring deep knowledge of
          the web platform. We help teams set new standards, and deliver results
          predictably.
        </h2>
      </motion.div>
      <div className="text-center my-10">
        <Button colorScheme="teal" variant="ghost">
          NextJs
        </Button>
        <Button colorScheme="teal" variant="ghost">
          Gatsby
        </Button>
        <Button colorScheme="teal" variant="ghost">
          React
        </Button>
        <Button colorScheme="teal" variant="ghost">
          SEO
        </Button>
        <Button colorScheme="teal" variant="ghost">
          Backend
        </Button>
      </div>
      <div className="grid grid-cols-8 mx-20 my-20">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/blogs?_limit=8`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

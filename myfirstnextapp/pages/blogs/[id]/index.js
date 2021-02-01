// import { useRouter } from 'next/router';
import Link from 'next/link';

function blog({ article }) {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div className="p-7 text-l font-bold bg-gradient-to-r from-blue-200 via-pink-300 to-red-400 h-screen rounded col-span-4 m-10 shadow-lg">
      <h1 className="p-10 text-3xl">{article.title}</h1>
      <p className="p-6 text-2xl">{article.description}</p>
      <p className="p-2">{article.body}</p>
      <Link href="/blogs">Go Back</Link>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/blogs/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/blogs`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default blog;

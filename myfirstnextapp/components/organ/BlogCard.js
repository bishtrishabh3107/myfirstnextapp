import Link from 'next/link';

function BlogCard({ article }) {
  return (
    <Link href="/blogs/[id]" as={`/blogs/${article.id}`}>
      <div className="p-7 text-l font-bold bg-gradient-to-r from-blue-200 via-pink-300 to-red-400 h-64 rounded col-span-4 m-10 shadow-lg hover:bg-gray-50">
        <h1>{article.title}</h1>
      </div>
    </Link>
  );
}

export default BlogCard;

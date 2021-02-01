import { blogs } from '../../../data/blogs';

export default function handler({ query: { id } }, res) {
  const filtered = blogs.filter((blog) => blog.id == id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Blog with id ${id} is not available` });
  }
}

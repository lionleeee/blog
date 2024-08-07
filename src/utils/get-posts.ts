import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export type Post = {
  id: string;
  year: string;
  slug: string;
  title: string;
  description: string;
  date: string;
};

const postRoot = join(process.cwd(), 'app/(post)');

const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []): string[] => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(join(dirPath, file));
    }
  });

  return arrayOfFiles;
};

const getPostSlugs = () => {
  const files = getAllFiles(postRoot);
  const paths = files.map((file) => file.replace(postRoot + '/', '').replace('/page.mdx', ''));

  return paths.filter((path) => path.split('/').length === 2);
};

const getPostBySlug = (slug: string): Post => {
  const [year, id] = slug.split('/');
  const fullPath = join(postRoot, `${slug}/page.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    id,
    year,
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
  };
};

export const getPosts = () => {
  const slugs = getPostSlugs();
  const posts = slugs.map(getPostBySlug).sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
};

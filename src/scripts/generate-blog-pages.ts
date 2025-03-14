import fs from 'fs';
import path from 'path';
import blogData from '../data/blog.json';

const blogDir = path.join(process.cwd(), 'src/app/blog');

blogData.posts.forEach((_, index) => {
  const pageDir = path.join(blogDir, index.toString());
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  fs.writeFileSync(
    path.join(pageDir, 'page.tsx'),
    `export { default } from '../[id]/page';`
  );
}); 
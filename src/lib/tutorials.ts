import fs from 'fs/promises';
import path from 'path';

const episodesDirectory = path.join(process.cwd(), 'src/episodes');

export async function getTutorialSlugs() {
  const filenames = await fs.readdir(episodesDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export async function getTutorialContent(slug: string) {
  const filePath = path.join(episodesDirectory, `${slug}.md`);
  try {
    const markdownContent = await fs.readFile(filePath, 'utf-8');
    return markdownContent;
  } catch (error) {
    console.error(`Failed to read markdown file for slug: ${slug}`, error);
    return null;
  }
}

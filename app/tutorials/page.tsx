import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

export default async function TutorialsList() {
  const episodesDirectory = path.join(process.cwd(), 'episodes');
  let filenames: string[] = [];

  try {
    filenames = await fs.readdir(episodesDirectory);
  } catch (error) {
    console.error('Failed to read episodes directory:', error);
    return <div className="container mx-auto px-6 py-12 text-center text-red-500">No tutorials found.</div>;
  }

  const tutorials = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    // You might want to read the markdown file here to extract title/description
    // For now, we'll just use the slug as the title
    return { slug, title: slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) };
  });

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold font-space mb-12 text-center">Tutorials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map((tutorial) => (
          <Link key={tutorial.slug} href={`/tutorials/${tutorial.slug}`} className="block p-6 border border-border rounded-lg hover:bg-card/30 transition-colors">
            <h2 className="text-2xl font-bold text-foreground mb-2">{tutorial.title}</h2>
            <p className="text-muted-foreground">Read this tutorial to learn more.</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

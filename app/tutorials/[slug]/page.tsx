export default async function TutorialPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Tutorial: {params.slug}</h1>
    </div>
  );
}
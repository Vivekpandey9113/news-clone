import Layout from '@/components/Layout';
import Image from 'next/image';
import { getAllSlugs, getArticleBySlug } from '@/data/articles';

export default function ArticlePage({ article }) {
  if (!article) {
    return (
      <Layout title="Article not found">
        <p className="mt-4">Article not found.</p>
      </Layout>
    );
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    image: article.imageUrl,
  };

  return (
    <Layout title={article.title} description={article.description}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative w-full h-60 md:h-80">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="p-4 md:p-6">
          <p className="text-xs text-red-600 font-semibold mb-1">
            {article.category}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{article.title}</h1>
          <p className="text-xs text-gray-500 mb-4">
            {article.author} •{' '}
            {new Date(article.publishedAt).toLocaleString('hi-IN')}
          </p>
          <p className="text-base leading-relaxed text-gray-800 whitespace-pre-line">
            {article.content}
          </p>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = getAllSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug);
  return {
    props: { article: article || null },
  };
}

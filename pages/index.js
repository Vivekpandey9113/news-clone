import Layout from '@/components/Layout';
import NewsCard from '@/components/NewsCard';
import { getAllArticles } from '@/data/articles';

export default function Home({ articles }) {
  const [mainArticle, ...otherArticles] = articles;

  return (
    <Layout
      title="LiveHindustan Clone – Hindi News"
      description="A simplified Hindi news front page built with Next.js."
    >
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <NewsCard article={mainArticle} variant="main" />
        </div>

        <aside className="space-y-3">
          <h3 className="text-lg font-semibold border-b pb-1">टॉप खबरें</h3>
          <div className="space-y-2">
            {otherArticles.map((article) => (
              <NewsCard key={article.id} article={article} variant="side" />
            ))}
          </div>
        </aside>
      </div>

      <section className="mt-6">
        <h3 className="text-lg font-semibold mb-3 border-b pb-1">अन्य खबरें</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} variant="grid" />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = getAllArticles();
  return {
    props: { articles },
  };
}

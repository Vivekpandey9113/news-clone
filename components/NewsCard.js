import Link from 'next/link';
import Image from 'next/image';

export default function NewsCard({ article, variant = 'main' }) {
  const isMain = variant === 'main';

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article
        className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition ${
          isMain ? 'md:flex' : ''
        }`}
      >
        <div className={isMain ? 'md:w-1/2 relative h-52 md:h-auto' : 'relative h-40'}>
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes={isMain ? '(min-width: 768px) 50vw, 100vw' : '50vw'}
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>

        <div className={isMain ? 'md:w-1/2 p-4 space-y-1' : 'p-3'}>
          <p className="text-xs text-red-600 font-semibold">{article.category}</p>
          <h2
            className={`font-bold leading-snug group-hover:text-red-700 ${
              isMain ? 'text-lg md:text-xl' : 'text-sm'
            }`}
          >
            {article.title}
          </h2>
          <p className="text-xs md:text-sm text-gray-700">
            {article.description}
          </p>
          <p className="text-[11px] text-gray-500 mt-1">
            {article.author} • {new Date(article.publishedAt).toLocaleDateString('hi-IN')}
          </p>
        </div>
      </article>
    </Link>
  );
}

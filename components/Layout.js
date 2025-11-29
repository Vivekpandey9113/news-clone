import Head from 'next/head';

export default function Layout({ children, title, description }) {
  const pageTitle = title ? `${title} | News Clone` : 'LiveHindustan Clone';
  const pageDescription =
    description || 'Hindi news front page built with Next.js for assignment.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-100">
        <header className="bg-red-700 text-white">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
            <div className="text-2xl font-bold tracking-tight">LiveHindustan</div>
            <nav className="hidden md:flex space-x-4 text-sm font-medium">
              <button>देश</button>
              <button>राज्य</button>
              <button>क्रिकेट</button>
              <button>बिज़नेस</button>
              <button>मनोरंजन</button>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-4">
          {children}
        </main>

        <footer className="bg-gray-900 text-gray-300 text-sm mt-6">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
            <span>© {new Date().getFullYear()} News Clone</span>
            <span>Built with Next.js</span>
          </div>
        </footer>
      </div>
    </>
  );
}

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import { FC } from 'react';

export const NxWelcome: FC = () => {
  return (
    <div className='min-h-screen bg-[#0C0E12]'>
      {/* Header */}
      <header className='sticky top-0 z-50 border-b border-gray-800 bg-[#13161B]'>
        <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center space-x-8'>
            <a href='/' className='flex items-center'>
              <img src='/logo.svg' alt='Logo' className='h-8 w-auto' />
            </a>
            <nav className='hidden md:flex items-center space-x-6'>
              <a
                href='#'
                className='text-sm font-medium text-gray-400 hover:text-white transition-colors'
              >
                Home
              </a>
              <a
                href='#'
                className='text-sm font-medium text-gray-400 hover:text-white transition-colors'
              >
                Products
              </a>
              <a
                href='#'
                className='text-sm font-medium text-gray-400 hover:text-white transition-colors'
              >
                Resources
              </a>
              <a
                href='#'
                className='text-sm font-medium text-gray-400 hover:text-white transition-colors'
              >
                Pricing
              </a>
            </nav>
          </div>
          <div className='flex items-center space-x-4'>
            <button className='text-sm font-medium text-gray-400 hover:text-white transition-colors'>
              Sign In
            </button>
            <button className='rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors'>
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='py-10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Sidebar */}
            <aside className='w-full lg:w-64 flex-shrink-0'>
              <div className='sticky top-24'>
                <div className='rounded-lg border border-gray-800 bg-[#13161B] p-4'>
                  <h2 className='text-lg font-medium text-white mb-4'>Categories</h2>
                  <nav className='flex flex-col space-y-3'>
                    <a
                      href='#'
                      className='text-sm text-gray-400 hover:text-white transition-colors'
                    >
                      All Articles
                    </a>
                    <a
                      href='#'
                      className='text-sm text-gray-400 hover:text-white transition-colors'
                    >
                      Getting Started
                    </a>
                    <a
                      href='#'
                      className='text-sm text-gray-400 hover:text-white transition-colors'
                    >
                      Development
                    </a>
                    <a
                      href='#'
                      className='text-sm text-gray-400 hover:text-white transition-colors'
                    >
                      Design
                    </a>
                  </nav>
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <div className='flex-1'>
              <div className='mb-8'>
                <h1 className='text-2xl font-bold text-white sm:text-3xl'>Documentation</h1>
                <div className='mt-6 flex items-center space-x-4'>
                  <div className='relative flex-1'>
                    <input
                      type='search'
                      placeholder='Search documentation...'
                      className='w-full rounded-lg border border-gray-700 bg-[#13161B] py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
                    />
                    <svg
                      className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      />
                    </svg>
                  </div>
                  <button className='inline-flex items-center rounded-lg border border-gray-700 bg-[#13161B] px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors'>
                    Filters
                  </button>
                </div>
              </div>

              {/* Article Grid */}
              <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {[1, 2, 3, 4, 5, 6].map(item => (
                  <article
                    key={item}
                    className='group relative rounded-lg border border-gray-800 bg-[#13161B] overflow-hidden hover:border-gray-700 transition-colors'
                  >
                    <div className='aspect-w-16 aspect-h-9'>
                      <img
                        src={`/article-${item}.jpg`}
                        alt={`Article ${item}`}
                        className='h-full w-full object-cover'
                      />
                    </div>
                    <div className='p-4'>
                      <div className='flex items-center space-x-2'>
                        <span className='inline-flex items-center rounded-full bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-400'>
                          Category
                        </span>
                      </div>
                      <h3 className='mt-2 text-lg font-medium text-white'>
                        <a href='#' className='hover:text-blue-500'>
                          Article Title
                        </a>
                      </h3>
                      <p className='mt-2 text-sm text-gray-400 line-clamp-2'>
                        Brief description of the article content goes here...
                      </p>
                      <div className='mt-4 flex items-center justify-between'>
                        <span className='text-xs text-gray-400'>5 min read</span>
                        <a
                          href='#'
                          className='text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors'
                        >
                          Read More →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <nav className='mt-8 flex items-center justify-center space-x-2'>
                <button className='inline-flex items-center rounded-lg border border-gray-700 bg-[#13161B] px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors'>
                  Previous
                </button>
                <button className='inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors'>
                  1
                </button>
                <button className='inline-flex items-center rounded-lg border border-gray-700 bg-[#13161B] px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors'>
                  2
                </button>
                <button className='inline-flex items-center rounded-lg border border-gray-700 bg-[#13161B] px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors'>
                  3
                </button>
                <button className='inline-flex items-center rounded-lg border border-gray-700 bg-[#13161B] px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors'>
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NxWelcome;

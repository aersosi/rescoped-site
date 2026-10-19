import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';

export default function BlogComp({ children, sidebar, toc }) {
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <div className="p-4 lg:px-16 lg:py-8 bg-theme">
      <div className="flex gap-4 lg:gap-8">
        {hasSidebar && (
          <aside className="hidden md:block w-full max-w-fit">
            <nav
              className="sticky top-[4.75rem] mr-2 lg:mr-6"
              aria-label={translate({
                id: 'theme.blog.sidebar.navAriaLabel',
                message: 'Blog recent posts navigation',
                description: 'The ARIA label for recent posts in the blog sidebar',
              })}
            >
              <div className="mb-4 text-md font-bold">{sidebar.title}</div>
              <ul className="text-base max-w-[36ch]">
                {sidebar.items.map(item => (
                  <li key={item.permalink} className="pb-2">
                    <Link
                      isNavLink
                      to={item.permalink}
                      className=""
                      activeClassName="text-avo-green-green"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
        <main itemScope itemType="http://schema.org/Blog" className="w-full">
          {children}
        </main>
        {toc && <div className="hidden md:block w-full max-w-[36ch]">{toc}</div>}
      </div>
    </div>
  );
}

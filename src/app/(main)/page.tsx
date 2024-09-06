import _map from 'lodash/map';

import Banners from '@/pageTemplates/home/Banners';
import CategoryButton from '@/pageTemplates/home/CategoryButtons';
import PersonalizedCategorySection from '@/pageTemplates/home/PersonalizedCategorySection';
import PersonalizedItems from '@/pageTemplates/home/PersonalizedItems';
import { headers } from 'next/headers';
import { Suspense } from 'react';

async function getLandingPageSections() {
  try {
    const header = headers();
    const headersObject = new Headers(header); // E
    const res = await fetch(`${process.env.NEXT_JS_CMS_API_ORIGIN}/api`, {
      next: { revalidate: 4000 },
      headers: headersObject,
    });
    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
  }
}

export default async function Home() {
  const data = await getLandingPageSections();
  const { banners, ...restCategory } = data;

  return (
    <main className="font-bold">
      <Banners banners={banners} />
      {/* @ts-expect-error for section */}
      {_map(restCategory, (section, idx) => {
        const { type, itemsToDisplay = [] } = section;
        if (type === 'categoryButton') {
          return (
            <Suspense key={section.title}>
              <CategoryButton {...section} />
            </Suspense>
          );
        }
        if (itemsToDisplay.length) {
          return (
            <Suspense key={section.title}>
              <PersonalizedItems {...section} />
            </Suspense>
          );
        }
        return (
          <Suspense key={section.title}>
            <PersonalizedCategorySection {...section} />
          </Suspense>
        );
      })}
    </main>
  );
}

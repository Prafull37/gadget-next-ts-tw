import Filters from '@/pageTemplates/products/filters';

async function getFilters() {
  try {
    const response = await fetch(
      `${process.env.NEXT_JS_API_ORIGIN}/api/products/filter`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

type FilterProps = {
  searchParams: {
    categories?: string;
  };
};

export default async function Page(props: FilterProps) {
  const filters = await getFilters();
  return (
    <div>
      <Filters filters={filters} searchParams={props.searchParams} />
    </div>
  );
}

import New from '@/pageTemplates/products/[id]/reviews/new';
import { headers } from 'next/headers';

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page(props: PageProps) {
  const { id } = props.params;

  const onFormSubmit = async (data: FormData) => {
    'use server';
    console.log('data', data);
  };

  return (
      <form action={onFormSubmit}>
        <label htmlFor="userName">Name</label>
        <input type="text" name="userName" id="userName" />
        <label htmlFor="userName">Password</label>
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
  );
}

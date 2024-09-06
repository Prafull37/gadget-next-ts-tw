import { MinimalPage } from '@/components/template/Page';
import { headers } from 'next/headers';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = headers();
  const currentUrl = header.get('client-location');

  return (
    <MinimalPage
      hideFooter={true}
      headerTitle={
        currentUrl?.includes('new') ? (
          <h1>New Review </h1>
        ) : (
          <h1>All Reviews</h1>
        )
      }
    >
      {children}
    </MinimalPage>
  );
}

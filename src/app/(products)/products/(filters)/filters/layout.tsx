import { MinimalPage } from '@/components/template/Page';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MinimalPage hideFooter={true}>{children}</MinimalPage>;
}

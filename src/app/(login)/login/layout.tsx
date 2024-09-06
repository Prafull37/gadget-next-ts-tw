import { MinimalPage } from '@/components/template/Page';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MinimalPage>{children}</MinimalPage>;
}

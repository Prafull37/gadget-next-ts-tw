import { LandingPage } from '@/components/template/Page';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LandingPage>{children}</LandingPage>;
}

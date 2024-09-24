import { MinimalPage } from '@/components/template/Page';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactDOM.ReactNode;
}>) {
  return <MinimalPage hideFooter={true} headerTitle={"Cart"}>{children}</MinimalPage>;
}

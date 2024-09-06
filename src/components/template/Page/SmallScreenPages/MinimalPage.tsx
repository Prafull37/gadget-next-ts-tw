import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

type MinimalPageProps = {
  children: React.ReactNode;
  hideFooter?: boolean;
  headerTitle?: React.ReactNode;
};

export default function LandingPage(props: MinimalPageProps) {
  const { children, hideFooter = false, headerTitle } = props;
  return (
    <div className="pageContainer">
      <Header
        showBackButton={true}
        showSearchIcon={true}
        showCartIcon={true}
        showUserIcon={true}
        headerTitle={headerTitle}
      />
      <div className="bg-[#e9e9fca3] p-4 overflow-y-auto">{children}</div>
      {!hideFooter && <Footer />}
    </div>
  );
}

import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

export default function LandingPage(props: { children: React.ReactNode }) {
  return (
    <div className="pageContainer">
      <Header showSearchInput={true} showCartIcon={true} showUserIcon={true} />
      <div className="bg-[#e9e9fca3] p-4 overflow-y-auto">{props.children}</div>
      <Footer />
    </div>
  );
}

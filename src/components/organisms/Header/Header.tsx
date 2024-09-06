import { HeaderNotifcations, ShoppingCart } from './HeaderComponents';
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaSearch,
  FaUserCircle,
} from 'react-icons/fa';

import { SearchInput } from '@/components/atoms/Input';
import SidepanelContainer from './HeaderComponents/SidepanelContainer/SidepanelContainer';
import Link from 'next/link';
import GoBackButton from '@/components/molecules/GoBackButton';

type HeaderProps = {
  showSearchInput?: boolean;
  showSearchIcon?: boolean;
  showUserIcon?: boolean;
  showCartIcon?: boolean;
  showBackButton?: boolean;
  headerTitle?: React.ReactNode;
};

export default function Header(props: HeaderProps) {
  const {
    showSearchInput = false,
    showSearchIcon = false,
    showUserIcon = false,
    showCartIcon = false,
    showBackButton = false,
    headerTitle = 'Gadgets...',
  } = props;

  const goBack = () => {
    'use client';
    history.back();
  };

  return (
    <header>
      <HeaderNotifcations>Notification Text</HeaderNotifcations>
      <div className="px-4 py-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {showBackButton && (
              <GoBackButton className="mx-2">
                <FaArrowAltCircleLeft size={'1rem'} />
              </GoBackButton>
            )}
            {typeof headerTitle === 'string' ? (
              <h1 className="basis-1/4 text-xl self-center">{headerTitle}</h1>
            ) : (
              headerTitle
            )}
          </div>

          <div className="flex justify-end items-center basis-1/4">
            {showCartIcon && <ShoppingCart />}
            {showUserIcon && (
              <div className="mx-2">
                <Link href="/login">
                  <FaUserCircle size={'1rem'} />
                </Link>
              </div>
            )}
            {showSearchIcon && (
              <div className="mx-2">
                <Link href="/search">
                  <FaSearch size={'1rem'} />
                </Link>
              </div>
            )}
            <SidepanelContainer />
          </div>
        </div>
        {showSearchInput && !showSearchIcon && (
          <div className="my-2">
            {/* for mobile redirect to search page */}
            <Link href="/search">
              <SearchInput
                placeholder="Search by Product Name,Category"
                // onFocus={() => {}}
              />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

'use client';

import { useRouter } from 'next/navigation';

type GoBackButtonProps = {
  children: React.ReactNode;
  className?: string;
  url?: string;
};

export default function GoBackButton(props: GoBackButtonProps) {
  const { children, url = '', className = '' } = props;
  const isUrlProvided = !!url;
  const router = useRouter();

  const onClick = () => {
    if (isUrlProvided) {
      router.replace(url);
    } else {
      router.back();
    }
  };

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

type HeaderNotificationProps = {
  children: React.ReactNode;
};

export default function HeaderNotification(props: HeaderNotificationProps) {
  return (
    <div className="bg-[#101827]  p-3 flex align-middle justify-center w-full text-white text-sm">
      {props.children}
    </div>
  );
}

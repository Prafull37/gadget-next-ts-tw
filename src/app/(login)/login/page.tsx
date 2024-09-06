import { MobileNumber } from '@/pageTemplates/login';
import OTP from '@/pageTemplates/login/OTP';

export type LoginPageProps = {
  searchParams: {
    stage: 'otp' | 'mobileNumber';
    action: 'login' | 'signup';
    identifier: string;
    prefix: string;
  };
};

export default function Login(props: LoginPageProps) {
  const {
    stage = 'mobileNumber',
    action,
    identifier = '',
    prefix,
  } = props.searchParams;

  return (
    <div className="bg-white rounded-sm p-4">
      {stage === 'mobileNumber' ? (
        <MobileNumber mobileNumber={identifier} />
      ) : (
        <OTP action={action} identifier={identifier} prefix={prefix} />
      )}
    </div>
  );
}

'use client';
import Button from '@/components/atoms/Button';
import { OTPInput } from '@/components/atoms/Input';
import { Country } from '@/constants/localization.constants';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

//if we can move to a constant
const otplegnthForLogin = 4;

export type OTPProps = {
  action?: 'login' | 'signup';
  identifier: string;
  prefix?: string;
};

export default function OTP(props: OTPProps) {
  const { action = 'login', identifier, prefix = '' } = props;
  const [otp, setOtp] = useState('');

  const onEnterOtp = (value: string) => {
    setOtp(value);
  };

  const onRequestOTP = () => {
    //Do Async stuff and navigate accordingly from server end
  };

  return (
    <div>
      {action === 'signup' && (
        <h4 className="text-lg  font-bold">Signup to Gadgets..</h4>
      )}
      <label className="inline text-xs font-light">
        {' '}
        Please enter the verification code we have sent you on : {prefix}
        {prefix && '-'}
        {identifier}
      </label>
      <Link
        href={`/login?action=${action}&stage=mobileNumber&prefix=${prefix}&identifier=${identifier}`}
        className="inline text-xs text-blue-600 underline underline-offset-2 ml-1"
      >
        Edit
      </Link>

      <div className="flex flex-col mt-2">
        <div className="mb-4">
          <OTPInput value={otp} onChange={onEnterOtp} />
        </div>
        <div className="my-2 flex flex-col justify-center items-center">
          <Button
            onChange={() => {
              console.log('hello');
            }}
            disabled={otplegnthForLogin === otp.length}
          >
            Verify & {'Login'}
          </Button>
          <Link
            href="/"
            className="inline text-xs text-blue-600 underline underline-offset-2 mt-2"
          >
            {' '}
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

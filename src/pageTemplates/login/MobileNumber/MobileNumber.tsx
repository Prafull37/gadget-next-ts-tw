'use client';
import Button from '@/components/atoms/Button';
import { MobileNumberInput } from '@/components/atoms/Input';
import { Country } from '@/constants/localization.constants';
import Link from 'next/link';
import { useState } from 'react';

type MobileNumber = {
  mobileNumber: string;
};

export default function MobileNumber(props: MobileNumber) {
  const { mobileNumber } = props;
  const [mobileNumberInput, setMobileNumberInput] = useState(mobileNumber);
  const [isValid, setIsValid] = useState(mobileNumber.length === 10 || false);

  const onChangeMobileNumber = ({
    value,
    isValid,
  }: {
    value: string;
    isValid: boolean;
  }) => {
    setIsValid(isValid);
    setMobileNumberInput(value);
  };

  const onRequestOTP = () => {
    //Do Async stuff and navigate accordingly from server end
  };

  return (
    <div>
      <h4 className="text-lg  font-bold">Login to shop</h4>
      <label className="inline-block text-xs mb-2 font-light">
        {' '}
        Enter your mobile number
      </label>
      <div className="flex flex-col">
        <div className="mb-4">
          <MobileNumberInput
            label="Mobile Number"
            id="mobileNumber"
            value={mobileNumberInput}
            country={Country.INDIA}
            //@ts-expect-error check letter why there is ts error
            onChange={onChangeMobileNumber}
          />
        </div>
        <div className="my-2 flex flex-col justify-center items-center">
          <Button
            onChange={() => {
              console.log('hello');
            }}
            disabled={!isValid}
          >
            Request OTP
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

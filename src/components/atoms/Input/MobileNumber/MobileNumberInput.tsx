'use client';
import { COUNTRY_CODE } from '@/constants/localization.constants';
import { MobileNumberInputProps } from '../index.types';
import TextInputWithLabel from '../TextInput/TextInputWithLabel';
import { ChangeEvent, useEffect, useState } from 'react';
import { COUNTRY_CODE_VS_VALIDATOR } from '@/utils/localization.utils';
import { alwaysTrue } from '@/utils/lodash.utils';

export default function MobileNumberInput(props: MobileNumberInputProps) {
  const { country, value, onChange: onChangeFromProps, ...restProps } = props;
  const [mobileNo, setMobileNumber] = useState(value);
  const leftIcon = country ? { leftIcon: COUNTRY_CODE[country] } : {};
  const validator = country ? COUNTRY_CODE_VS_VALIDATOR[country] : alwaysTrue;

  useEffect(() => {
    setMobileNumber(value);
  }, [value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = validator(value);
    onChangeFromProps({ value, isValid });
  };

  return (
    <TextInputWithLabel
      {...restProps}
      {...leftIcon}
      value={mobileNo}
      onChange={onChange}
    />
  );
}

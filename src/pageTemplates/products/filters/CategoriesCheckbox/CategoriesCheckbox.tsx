'use client';

import _map from 'lodash/map';
import _includes from 'lodash/includes';
import _replace from 'lodash/replace';
import _filter from 'lodash/filter';
import _join from 'lodash/join';
import _split from 'lodash/split';

import { CheckboxWithLabel } from '@/components/atoms/Checkbox';
import { Category } from '@/types/Category';

type CategoryCheckboxProps = {
  selectedValues: string;
  allowedValues: Category[];
  onChange: (value: string) => void;
};

export default function CategoryCheckbox(props: CategoryCheckboxProps) {
  const { selectedValues, allowedValues, onChange } = props;

  const onSelect = (newValue: string) => {
    let newCategories = _split(selectedValues, ',');
    if (_includes(selectedValues, newValue)) {
      // Replace the old value with the new one
      let values = _map(newCategories, (value: string) =>
        value === newValue ? newValue : value
      );

      // Filter out any empty strings that could lead to invalid commas
      newCategories = _filter(values, (value: string) => value.trim() !== '');
    } else {
      newCategories.push(newValue);
    }
    onChange(_join(newCategories, ','));
  };

  return (
    <div className="px-1">
      {_map(allowedValues, (category: Category) => {
        return (
          <div key={category.id}>
            <CheckboxWithLabel
              label={category.title}
              value={category.id}
              //@ts-expect-error check why and how to handle enum in ts
              checkboxSize="xs"
              id={category.id}
              checked={_includes(selectedValues, category.id)}
              onChange={() => {
                onSelect(category.id);
              }}
              labelClass="text-sm"
            />
          </div>
        );
      })}
    </div>
  );
}

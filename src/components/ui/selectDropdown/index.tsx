import React from 'react';
import {
  Select,
  SelectHolder,
  SelectLabel,
} from '@/components/ui/selectDropdown/StyledSelectDropdown';
import { SelectOption } from '@/types/global';

interface SelectDropdownProps {
  label: string;
  name: string;
  value: string;
  options: SelectOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  label,
  name,
  options,
  onChange,
  value,
}) => {
  return (
    <SelectHolder>
      <SelectLabel htmlFor={name}>{label}</SelectLabel>
      <Select name={name} id={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </SelectHolder>
  );
};

export default SelectDropdown;

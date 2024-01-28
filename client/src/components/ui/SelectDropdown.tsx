import React from 'react';
import styled from 'styled-components';

const SelectHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SelectLabel = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.textGray};
  text-transform: capitalize;
`;

const Select = styled.select`
  min-width: 100px;
  border-radius: 4px;
  height: 24px;
`;

export interface SelectOption {
  label: string;
  value: string;
}

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

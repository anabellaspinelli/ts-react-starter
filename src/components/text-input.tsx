import { ChangeEventHandler } from 'react';
import { toCamelCase } from 'src/utils';

type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
};

export const TextInput = ({ value = '', onChange, label }: InputProps) => {
  return (
    <label className="mb-4 flex flex-col text-sm">
      {label}
      <input
        autoComplete="off"
        className="px-2 py-1"
        name={toCamelCase(label)}
        onChange={onChange}
        type="text"
        value={value}
      />
    </label>
  );
};

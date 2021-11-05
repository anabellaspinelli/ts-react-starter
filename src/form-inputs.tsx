import { FieldHookConfig, useField } from 'formik';

type InputProps = FieldHookConfig<string> & { label: string };

export const TextInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        className="ml-2 p-1"
        placeholder={props.placeholder}
        type={props.type}
      />
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500 font-medium">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const Select = ({ label, children, ...props }: InputProps) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field}>{children}</select>
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500 font-medium">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const Checkbox = ({ children, ...props }: InputProps) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input
          {...field}
          className="ml-2 p-1"
          placeholder={props.placeholder}
          type="checkbox"
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500 font-medium">{meta.error}</div>
      ) : null}
    </div>
  );
};

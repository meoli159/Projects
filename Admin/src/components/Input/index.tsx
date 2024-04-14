import './style.css';

type TProps = {
  label?: string;
  type: string;
  id: string;
  name: string;
  className?: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
export const Input = ({
  label,
  type,
  id,
  name,
  className,
  placeholder,
  value,
  onChange,
  onKeyDown,
}: TProps) => {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className={`input-original ${className}`}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

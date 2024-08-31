import { InputAnnotation } from '../InputAnnotation';
import { InputLabel } from '../InputLabel';
import { InputText } from '../InputText';
import './InputGroup.css';

export interface InputGroupProps {
  position: 'top' | 'side';
  type: string;
  labelText: string;
  id: string;
  tooltip: string;
  required: boolean;
  disabled: boolean;
  size: 'xs' | 'md' | 'lg' | 'xl';
  error: boolean;
  placeholder: string;
  value: string;
  handleChange: (value: string) => void;
  quiet: boolean;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  position,
  type,
  labelText,
  id,
  tooltip,
  required,
  disabled,
  size,
  error,
  placeholder,
  value,
  handleChange,
  quiet,
}) => {
  const className = `${
    position === 'side' ? 'input-group--side' : 'input-group--top'
  }`;

  return (
    <div className='input-group'>
      <div className={className}>
        <InputLabel
          labelText={labelText}
          id={id}
          tooltip={tooltip}
          required={required}
          disabled={disabled}
        />
        <InputText
          type={type}
          id={id}
          size={size}
          error={error}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          handleChange={handleChange}
          quiet={quiet}
        />
      </div>
      {position === 'top' && (
        <InputAnnotation error={error} disabled={disabled}>
          This is a hint text to help user.
        </InputAnnotation>
      )}
    </div>
  );
};

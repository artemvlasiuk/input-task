import './InputLabel.css';
import icon from './img/info.svg';

export interface InputLabelProps {
  labelText: string;
  required: boolean;
  disabled: boolean;
  id: string;
  tooltip: string;
}

export const InputLabel: React.FC<InputLabelProps> = ({
  labelText,
  required,
  disabled,
  id,
  tooltip,
}) => {
  const className = `input-label ${disabled ? 'input-label--disabled' : ''}`;

  const label = `${labelText} ${required ? '(required)' : ''}`;

  return (
    <div className='input-label-wrapper'>
      <label htmlFor={id} className={className}>
        {label}
      </label>
      <img src={icon} alt='Info icon' title={tooltip} />
    </div>
  );
};

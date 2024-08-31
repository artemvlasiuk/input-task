import './InputText.css';
import searchIcon from './img/search.svg';
import searchIconError from './img/searchError.svg';
import searchIconDisabled from './img/searchDisabled.svg';
import helpIcon from './img/help.svg';
import helpIconError from './img/helpError.svg';
import helpIconDisabled from './img/helpDisabled.svg';
import shortKeyIcon from './img/shortkey.svg';

export interface InputTextProps {
  type: string;
  size: 'xs' | 'md' | 'lg' | 'xl';
  error: boolean;
  disabled: boolean;
  id: string;
  placeholder: string;
  value: string;
  handleChange: (value: string) => void;
  quiet: boolean;
}

export const InputText: React.FC<InputTextProps> = ({
  type,
  size,
  error,
  disabled,
  id,
  placeholder,
  value,
  handleChange,
  quiet,
}) => {
  const boxClassname = `input-text input-text--${size} ${
    error ? 'input-text--error' : ''
  } ${quiet ? 'input-text--quiet' : ''}`;

  const inputClassName = `input-text-field input-text-field--${size} ${
    disabled ? 'input-text-field--disabled' : ''
  }`;

  return (
    <div className={boxClassname}>
      {!quiet && (
        <img
          src={
            disabled ? searchIconDisabled : error ? searchIconError : searchIcon
          }
          alt='Search Icon'
          className='input-text-search'
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        className={inputClassName}
        disabled={disabled}
        onChange={(e) => handleChange(e.target.value)}
      />
      {!quiet && (
        <div className='input-text-help'>
          <img
            src={disabled ? helpIconDisabled : error ? helpIconError : helpIcon}
            alt='Help Icon'
          />
          <img src={shortKeyIcon} alt='Short key' />
        </div>
      )}
    </div>
  );
};

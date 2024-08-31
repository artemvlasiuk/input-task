import { ReactNode } from 'react';
import './InputAnnotation.css';

export interface InputAnnotationProps {
  children: ReactNode;
  disabled: boolean;
  error: boolean;
}

export const InputAnnotation: React.FC<InputAnnotationProps> = ({
  children,
  error,
  disabled,
}) => {
  const className = `input-annotation ${
    error ? 'input-annotation--error' : ''
  } ${disabled ? 'input-annotation--disabled' : ''}`;

  return <p className={className}>{children}</p>;
};

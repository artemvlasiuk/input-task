import { Meta, StoryObj } from '@storybook/react';
import { InputAnnotation, InputAnnotationProps } from './InputAnnotation';

const meta: Meta<InputAnnotationProps> = {
  title: 'Components/InputAnnotation',
  tags: ['autodocs'],
  component: InputAnnotation,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'InputAnnotation is used to display annotation text with optional error and disabled states.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<InputAnnotationProps>;

export const Default: Story = {
  args: {
    children: 'This is a hint text to help user.',
    disabled: false,
    error: false,
  },
};

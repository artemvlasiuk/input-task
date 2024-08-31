import { Meta, StoryObj } from '@storybook/react';
import { InputText, InputTextProps } from './InputText';

const meta: Meta<InputTextProps> = {
  title: 'Components/InputText',
  tags: ['autodocs'],
  component: InputText,
  argTypes: {
    type: { control: 'text' },
    size: {
      options: ['xs', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    id: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    handleChange: { action: 'changed' },
    quiet: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'InputText is a component that renders an input field with optional error, disabled, and quiet states.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<InputTextProps>;

export const Default: Story = {
  args: {
    type: 'text',
    size: "md",
    error: false,
    disabled: false,
    id: 'input-id',
    placeholder: 'Enter text',
    value: '',
    quiet: false,
  },
};

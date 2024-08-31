import { Meta, StoryObj } from '@storybook/react';
import { InputGroup, InputGroupProps } from './InputGroup';

const meta: Meta<InputGroupProps> = {
  title: 'Components/InputGroup',
  tags: ['autodocs'],
  component: InputGroup,
  argTypes: {
    position: {
      options: ['top', 'side'],
      control: { type: 'radio' },
    },
    type: { control: 'text' },
    labelText: { control: 'text' },
    id: { control: 'text' },
    tooltip: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: {
      options: ['xs', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
    error: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    handleChange: { action: 'changed' },
    quiet: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'InputGroup is a component that combines InputLabel, InputText, and InputAnnotation to create a complete input field with label and annotation.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<InputGroupProps>;

export const Default: Story = {
  args: {
    position: 'top',
    type: 'text',
    labelText: 'Label',
    id: 'input-id',
    tooltip: 'This is a tooltip',
    required: false,
    disabled: false,
    size: 'md',
    error: false,
    placeholder: 'Input...',
    value: '',
    quiet: false,
  },
};

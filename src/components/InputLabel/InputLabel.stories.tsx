import { Meta, StoryObj } from '@storybook/react';
import { InputLabel, InputLabelProps } from './InputLabel';

const meta: Meta<InputLabelProps> = {
  title: 'Components/InputLabel',
  tags: ['autodocs'],
  component: InputLabel,
  argTypes: {
    labelText: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    id: { control: 'text' },
    tooltip: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'InputLabel is used to display a label for an input field with optional tooltip, required, and disabled states.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<InputLabelProps>;

export const Default: Story = {
  args: {
    labelText: 'Email',
    required: false,
    disabled: false,
    id: 'input-id',
    tooltip: 'This is a tooltip',
  },
};

import { Meta, StoryObj } from '@storybook/react';
import { AddToCartButton } from '../components/AddToCartButton';

const meta = {
  component: AddToCartButton,
  title: 'Components/AddToCartButton',
} satisfies Meta<typeof AddToCartButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleAddCartState: () => {
      return;
    },
    handleDeleteCartState: () => {
      return;
    },
    id: 0,
  },
};

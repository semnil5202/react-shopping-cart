import React from 'react';
import { Typography as Title } from '../ui/Typography';
import * as Styled from './styles/CartList.styles';
import { CartItemContainer } from '../components/CartItemContainer';

export const CartList = () => {
  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Title size="28px" weight="600">
          장바구니
        </Title>
      </Styled.TitleWrapper>
      <Styled.CartInfoWrapper>
        <CartItemContainer />
      </Styled.CartInfoWrapper>
    </Styled.Wrapper>
  );
};

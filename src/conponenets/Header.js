import React from 'react';
import { Logo, Nav, StyledHeader } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';
export const Header = () => {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo src="" alt="" />
          <Button>Try It Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

import React, { ReactNode } from 'react';
import styled from 'styled-components';

const BaseContainer = ({ children }: { children: ReactNode }): JSX.Element => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 92%;
  max-width: 1000px;
  margin: 0 auto;
`;

export default BaseContainer;

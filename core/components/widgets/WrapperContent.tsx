import { ReactNode } from 'react';
// import AppProvider from '../providers/AppProvider';
import LocaleProvider from '../../providers/LocaleProvider';
import { styled } from 'styled-components'

const StyledWrapper = styled.div`
  height:100vh;
  background-image: url('/assets/images/rectangle.svg');
  background-size: cover;
  background-position: center;
`;

type IPropType = {
  children: ReactNode;
}

export default function WrapperContent({children}: IPropType) {
  return (
    <StyledWrapper>
      <LocaleProvider>
          {children}
      </LocaleProvider>
    </StyledWrapper>
  )
}
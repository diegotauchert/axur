import Image from 'next/image'
import { FormattedMessage } from 'react-intl';
import { styled } from 'styled-components'

const StyledFooter = styled.footer`
  width: 100vw;
  border-top: 1px solid #DDD;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.45rem 0;
  text-align: center;
  background-color: rgba(255, 255, 255, .5);
  box-shadow: 1px 1px 13px 3px rgba(0,0,0,.15);
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  font-size: .7rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink
        href="https://www.axur.com/pt-br/home"
        target="_blank"
        rel="noopener noreferrer"
        id="powered"
      >
        <FormattedMessage id="app.powered" /> <Image src="/assets/images/logo.webp" alt="Axur" width={72} height={16} />
      </StyledLink>
    </StyledFooter>
  )
}

export default Footer;
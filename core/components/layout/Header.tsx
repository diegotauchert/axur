import { FormattedMessage } from 'react-intl';
import { styled } from 'styled-components'
import Menu from '@/widgets/Menu';

const StyledHeader = styled.header`
  width: 100vw;
  border-top: 1px solid #DDD;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: .56rem 0;
  text-align: center;
  background-color: rgba(255, 255, 255, .5);
  box-shadow: 1px 1px 13px 3px rgba(0,0,0,.15);

  a{
    color: #666;
    font-size: .78rem;

    &:hover{
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const Footer = () => {
  return (
    <StyledHeader>
        <a 
          href="https://diegotauchert.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="app.developedBy" />
        </a>

        <Menu />
    </StyledHeader>
  )
}

export default Footer;
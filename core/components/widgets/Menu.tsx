import Link from 'next/link';
import { styled } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { BiAddToQueue, BiTime } from 'react-icons/bi';
import {useRouter} from 'next/router';

const StyledMenu = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  padding: 1rem 0 .5rem 0;

  .active{
    color: #930000;
  }
`;

const Menu = () => {
  const router = useRouter()

  return (
    <StyledMenu>
      <Link href="/" className={router.pathname === '/' ? 'active' : ''}><BiAddToQueue /> <FormattedMessage id="menu.option1" /></Link>
      <Link href="/historic" className={router.pathname === '/historic' ? 'active' : ''}><BiTime /> <FormattedMessage id="menu.option2" /></Link>
    </StyledMenu>
  )
}

export default Menu;
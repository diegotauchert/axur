import Link from 'next/link';
import { styled } from 'styled-components';
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
      <Link href="/" className={router.pathname === '/' ? 'active' : ''}><BiAddToQueue /> Add Inspection</Link>
      <Link href="/historic" className={router.pathname === '/historic' ? 'active' : ''}><BiTime /> Historic</Link>
    </StyledMenu>
  )
}

export default Menu;
import { styled } from 'styled-components'
import AddForm from '../core/components/widgets/AddForm';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function HomePage() {
  return (
    <StyledMain>
      <AddForm />
    </StyledMain>
  )
}

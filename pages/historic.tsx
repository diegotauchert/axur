import { styled } from 'styled-components'
import Historic from '../core/components/widgets/Historic';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function HistoricPage() {
  return (
    <StyledMain>
      <Historic />
    </StyledMain>
  )
}

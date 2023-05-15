import { styled } from 'styled-components'
import HistoricView from '../core/components/widgets/HistoricView';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function HistoricPage() {
  return (
    <StyledMain>
      <HistoricView />
    </StyledMain>
  )
}

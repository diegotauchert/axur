import { useEffect, useContext, useState } from 'react';
import { CrawlContext } from '@/contexts/CrawlContext';
import { FormattedMessage } from 'react-intl';
import { styled } from 'styled-components';
import CrawlerService from '../../services/CrawlerService';
import { CrawlInterfaceFull, CrawlInterface } from '@/interfaces/CrawlInterface';
import TableHistoric from '@/widgets/TableHistoric';

const StyledMain = styled.div`
  min-width: 50vw;
  max-height: 70vh;
  overflow-y: auto;

  h1{
    text-align: center;
  }
`;

const StyledFormContainer = styled.div`
  position: relative;
`;

const StyledNotFound = styled.p`
  margin-top: 1rem;
  text-align: center;
`;

const Historic = () => {
  const [result, setResult] = useState<CrawlInterfaceFull[]>([] as CrawlInterfaceFull[]);
  const CrawlServiceInstance = new CrawlerService();
  const { ids } = useContext(CrawlContext);

  const fetchData = async (id: CrawlInterface) => {
    await CrawlServiceInstance.get(id.id).then((res) => {
      const newResult = {...res, term: id.term, date: id.date};
      setResult(current => [...current, newResult]);
    });
  }

  const refreshTable = () => {
    if(ids.length > 0){
      ids.map((id: CrawlInterface) => {
        fetchData(id);
      })
    }
  }

  useEffect(() => {
    refreshTable();
  }, []);

  return (
    <StyledMain>
      <h1>
        <FormattedMessage id="app.title" /><small> / <FormattedMessage id="app.historic" /></small>
      </h1>

      <StyledFormContainer>
        { result?.length > 0 ? 
          <TableHistoric data={result} refreshTable={refreshTable}  />
        : 
          <StyledNotFound><FormattedMessage id="text.noData" /></StyledNotFound>
        }
      </StyledFormContainer>
    </StyledMain>
  )
}

export default Historic;
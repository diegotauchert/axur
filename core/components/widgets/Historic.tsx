import { useEffect, useContext, useState } from 'react';
import { CrawlContext } from '@/contexts/CrawlContext';
import { FormattedMessage } from 'react-intl';
import { styled } from 'styled-components';
import CrawlerService from '../../services/CrawlerService';
import { CrawlInterfaceFull, CrawlInterface } from '@/interfaces/CrawlInterface';
import TableHistoric from '@/widgets/TableHistoric';
import { BiRefresh } from 'react-icons/bi';
import { sortByDate } from '@/helpers/utils';

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

const StyledLoading = styled.div`
  min-width: 50vw;
  min-height: 30vh;
  background-color: rgba(255,255,255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;
`;

const Historic = () => {
  const [result, setResult] = useState<CrawlInterfaceFull[]>([] as CrawlInterfaceFull[]);
  const [loading, setLoading] = useState<boolean>(false);
  const CrawlServiceInstance = new CrawlerService();
  const { ids } = useContext(CrawlContext);

  const fetchData = async (id: CrawlInterface) => {
    setLoading(true);
    await CrawlServiceInstance.get(id.id).then((res) => {
      const newResult = {...res, term: id.term, date: id.date};
      setResult((current:CrawlInterfaceFull[]) => {
        const currentFiltered = current.filter((el:CrawlInterfaceFull) => el.id !== newResult.id);
        return (
          [...currentFiltered, newResult]
        )
      });
    }).finally(() => setLoading(false));
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
        {loading ? 
          <StyledLoading><BiRefresh /> <span>Loading</span></StyledLoading>
        :
          <>
            { result?.length > 0 ? 
              <TableHistoric data={sortByDate(result)} refreshTable={refreshTable} />
            : 
              <StyledNotFound><FormattedMessage id="text.noData" /></StyledNotFound>
            }
          </>
        }
      </StyledFormContainer>
    </StyledMain>
  )
}

export default Historic;
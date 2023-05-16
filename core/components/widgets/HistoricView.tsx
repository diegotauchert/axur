import { useEffect, useContext, useState } from 'react';
import { CrawlContext } from '@/contexts/CrawlContext';
import { FormattedMessage } from 'react-intl';
import { styled } from 'styled-components';
import CrawlerService from '../../services/CrawlerService';
import { CrawlInterfaceFull } from '@/interfaces/CrawlInterface';
import TableHistoric from '@/widgets/TableHistoric';
import { BiRefresh } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/router';

const StyledMain = styled.div`
  min-width: 50vw;
  max-height: 70vh;
  overflow-y: auto;

  h1, h2{
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
  const router = useRouter();
  const viewID = router.query.id;
  const { ids } = useContext(CrawlContext);

  const fetchData = async () => {
    if(ids.length === 0){
      router.push({
        pathname: '/'
      });
      return;
    }
    setLoading(true);
    const idToFetch = ids.find(el => el.id === viewID);
    await CrawlServiceInstance.get(idToFetch.id).then((res) => {
      const newResult = {...res, term: idToFetch.term, date: idToFetch.date};
      setResult((current:CrawlInterfaceFull[]) => {
        const currentFiltered = current.filter((el:CrawlInterfaceFull) => el.id !== newResult.id);
        return (
          [...currentFiltered, newResult]
        )
      });
    }).finally(() => setLoading(false));
  }

  useEffect(() => {
    if(viewID){
      fetchData();
    }
  }, [viewID]);

  return (
    <StyledMain>
      <h1>
        <button id="btnBack" onClick={() => router.back()}><BsArrowLeft size="25" /></button> <FormattedMessage id="app.title" /><small> / <FormattedMessage id="app.historic" /> <small>/ <FormattedMessage id="app.view" /></small></small>
      </h1>
      <h2><small>ID: #{viewID}</small></h2>

      <StyledFormContainer>
        {loading ? 
          <StyledLoading><BiRefresh /> <span>Loading</span></StyledLoading>
        :
          <>
            { result?.length > 0 ? 
              <TableHistoric data={result} />
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
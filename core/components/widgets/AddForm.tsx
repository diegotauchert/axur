import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {InputText} from '../base/InputText';
import {Button} from '../base/Button';
import { FiSearch } from 'react-icons/fi';
import { styled } from 'styled-components';
import CrawlerService from '../../services/CrawlerService';
import { CrawlInterface } from '../../interfaces/CrawlInterface';

const StyledFormContainer = styled.div`
  position: relative;

  Button{
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const AddForm = () => {
  const CrawlServiceInstance = new CrawlerService();
  const [request, setRequest] = useState<string>('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    await CrawlServiceInstance.post(request).then((res:CrawlInterface) => {
      console.log(res)
    });
  }


  return (
    <div>
      <h1>
        <FormattedMessage id="app.title" />
      </h1>

      <StyledFormContainer>
        <form onSubmit={handleSubmit} method="POST" autoComplete="off">
          <InputText 
            minLength={4} 
            maxLength={32} 
            required 
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setRequest(e.target.value)} 
          />
          <Button 
            type="submit" 
            value={<FiSearch size={25} />}
           />
        </form>
      </StyledFormContainer>
    </div>
  )
}

export default AddForm;
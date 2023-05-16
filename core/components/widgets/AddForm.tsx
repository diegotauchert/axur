import { useState, useContext, memo } from 'react';
import { CrawlContext } from '@/contexts/CrawlContext';
import { FormattedMessage } from 'react-intl';
import {InputText} from '../base/InputText';
import {Button} from '../base/Button';
import {Alert} from '@/base/Alert';
import { FiSearch } from 'react-icons/fi';
import { styled } from 'styled-components';
import CrawlerService from '../../services/CrawlerService';
import { CrawlInterface } from '../../interfaces/CrawlInterface';
import { INPUT_MINLENGTH, INPUT_MAXLENGTH } from '@/constants/globalVars';
import { checkValidation } from '@/helpers/utils';

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
  const [message, setMessage] = useState<{type: string, message: string}>();
  const { crawlIdsSaved } = useContext(CrawlContext)

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const validate = checkValidation(INPUT_MINLENGTH, INPUT_MAXLENGTH,request);
    if(validate){
      setMessage({type: 'error', message: validate});
      return;
    }

    setRequest("...");

    await CrawlServiceInstance.post(request).then((res:CrawlInterface) => {
      crawlIdsSaved(res);
      setMessage({type: 'success', message: "Saved with success"});
    }).catch(err => setMessage({type: 'error', message: err}))
    .finally(() => setRequest(""));
  }

  const handleCloseAlert = () => {
    setMessage({type: '', message: ''})
  }

  const handleChange = (e) => {
    setRequest(e.target.value);
    handleCloseAlert();
  }

  return (
    <div>
      <h1>
        <FormattedMessage id="app.title" />
      </h1>

      {message?.message && 
        <Alert message={message} handleCloseAlert={handleCloseAlert} />
      }

      <StyledFormContainer>
        <form onSubmit={handleSubmit} method="POST" autoComplete="off">
          <InputText 
            name="newRequestToCrawl"
            minLength={INPUT_MINLENGTH} 
            maxLength={INPUT_MAXLENGTH} 
            required 
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)} 
            value={request}
          />
          <Button 
            type="submit" 
            value={<FiSearch size={25} />}
            id="btnSubmit"
           />
        </form>
      </StyledFormContainer>
    </div>
  )
}

export default memo(AddForm);
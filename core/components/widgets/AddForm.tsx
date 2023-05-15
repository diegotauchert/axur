import { FormattedMessage } from 'react-intl';
import {InputText} from '../base/InputText';
import {Button} from '../base/Button';
import { FiSearch } from 'react-icons/fi';
import { styled } from 'styled-components'

const StyledFormContainer = styled.div`
  position: relative;

  Button{
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const AddForm = () => {
  return (
    <div className="form">
      <h1>
        <FormattedMessage id="app.title" />
      </h1>

      <StyledFormContainer>
        <InputText />
        <Button type="submit" value={<FiSearch size={25} />} />
      </StyledFormContainer>
    </div>
  )
}

export default AddForm;
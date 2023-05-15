import { ChangeEventHandler } from 'react';
import { useIntl } from 'react-intl';
import { styled } from 'styled-components'

const StyledContainer = styled.div`
  margin-top: 1rem;
`;

const StyledInput = styled.input`
  background: 0;
  border: 0;
  border-bottom: 3px solid #bdc3c7;
  outline: none;
  width: 80vw;
  max-width: 400px;
  font-size: 1.5em;
  transition: padding 0.3s 0.2s ease;
  position:relative;

  &:focus {
    padding-bottom: 5px;
    border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  }
`;

type IPropType = {
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const InputText = ({minLength, maxLength, required, onChange}: IPropType) => {

  const intl = useIntl();

  return (
    <StyledContainer>
      <StyledInput 
        type="text"
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        onChange={onChange}
        placeholder={intl.formatMessage({id: "input.placeholder"})}
      />
    </StyledContainer>
  )
}
import { styled } from 'styled-components'

const StyledAlert = styled.div`
  position: relative;
  padding: .75rem 1.25rem;
  margin: .5rem 0 1rem 0;
  border: 1px solid #EEE;
  border-radius: .25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.success{
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  &.error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
`;

const StyledCloseAlert = styled.button`
  padding: .4rem .6rem;
  background-color: #FFF;
  color: #155724;
  border-radius: 50%;
  font-size: .7rem;
  box-shadow: 1px 1px 1px rgba(0,0,0,.15);
`;

type IPropType = {
  message: {type: string, message: string};
  handleCloseAlert: () => void
}

export const Alert = ({message, handleCloseAlert}: IPropType) => {
  return (
      <StyledAlert className={`alert ${message.type}`}>
        <span>{message.message}</span>

        <StyledCloseAlert onClick={handleCloseAlert}>X</StyledCloseAlert>
      </StyledAlert>
  )
}
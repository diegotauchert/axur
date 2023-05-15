import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { FaTimesCircle } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { styled } from 'styled-components'
import { CrawlInterfaceFull } from '@/interfaces/CrawlInterface';

const StyledTable = styled.table`
  width: 100%;
  margin-top: 1.2rem;

  tr{
    cursor: pointer;
    border-bottom: 1px solid #EEE;

    &:nth-child(even){
      background-color: #EEE;
    }
  }

  td{
    font-size: 13px;
    padding: .65rem 0;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  display: flex;
  gap: .5rem;
  text-align:center;
  width:100%;
  margin-top:1rem;
  justify-content: center;
  align-items: center;
  border: 1px solid #DDD;
  border-radius: 4px;
  padding: .7rem 0;
  background-color: rgba(255,255,255,.4);
  transition: .5s ease all;
  font-size:14px;
  box-shadow: 1px 1px 12px 3px rgba(0,0,0,.2);

  &:hover{
    background-color: rgba(255,255,255,1);
    box-shadow: 1px 1px 12px 3px rgba(0,0,0,.4);
  }
  &:active{
    box-shadow: 1px 1px 12px 3px rgba(0,0,0,.8);
    background-color: #EEE;
  }
`;

type IPropType = {
  data: CrawlInterfaceFull[];
  refreshTable: () => void
}

const TableHistoric = ({data, refreshTable}: IPropType) => {

  const handleClick = (id:string) => {
    alert(id)
  }

  return (
    <>
      <StyledTable cellSpacing={0} cellPadding={0} border={0}>
        <thead>
          <tr>
            <th><FormattedMessage id="label.id" /></th>
            <th><FormattedMessage id="label.term" /></th>
            <th><FormattedMessage id="label.date" /></th>
            <th><FormattedMessage id="label.status" /></th>
            <th><FormattedMessage id="label.urls" /></th>
            <th><FormattedMessage id="label.see" /></th>
          </tr>
        </thead>

        <tbody>
          {data.map((el:CrawlInterfaceFull, key: number) => (
            <tr key={key} onClick={() => handleClick(el.id)}>
              <td><small><strong>{el.id}</strong></small></td>
              <td>{el.term}</td>
              <td>
                {el.date.toLocaleDateString()} {' '} 
                <strong>
                  {el.date.toLocaleTimeString(navigator.language, {
                    hour: '2-digit',
                    minute:'2-digit',
                    second:'2-digit'
                  })}
                </strong>
              </td>
              <td>{el.status ? <AiFillCheckCircle color='green' /> : <FaTimesCircle color='red' />}</td>
              <td>
                {el.urls?.length > 0 ?
                el.urls.map(url => <p key={url}>{url}</p>) 
                : '--'}
              </td>
              <td><FiSearch size={18} /></td>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <StyledButton type="button" onClick={refreshTable}>
        <BiRefresh size="20" /> <FormattedMessage id="btn.updateTable" />
      </StyledButton>
    </>
  )
}

export default memo(TableHistoric);
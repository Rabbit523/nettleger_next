import styled from 'styled-components'

export const ModuleCovidCardBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 25px;
  border-radius: 25px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border: 1px solid transparent;
  background: #fff;
  label, span {
    font-family: 'Poppins-bold';
    font-size: 20px;
  }
  span {
    color: #0080f6;
    font-size: 20px;
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  @media (min-width: 320px) {
    margin: 25px 0;
    &:first-child {
      margin-top: 0;
    }
  }
  @media (min-width: 1280px) {
    margin: 0px 10px;
  }
`
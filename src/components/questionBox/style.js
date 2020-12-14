import styled from 'styled-components'

export const QuestionTag = styled.div`
  margin-top: 15px;
  .question-tag--header {
    max-width: 50px;
    background: #47ffb3;
    display: flex;
    justify-content: center;
    padding: 5px;
    font-family: 'Poppins-Bold';
  }
  .question-tag--body {
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 135px;
    p {
      margin: 0;
      font-family: 'Poppins-Bold';
      font-size: 18px;
    }
  }
  .question-tag--footer {
    display: flex;
  }
`
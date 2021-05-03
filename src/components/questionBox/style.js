import styled from 'styled-components'

export const QuestionTag = styled.div`
  margin: 15px 0;
  .question-tag--header {
    max-width: 50px;
    background: #0080f6;
    color: #fff;
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
    text-align: center;
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
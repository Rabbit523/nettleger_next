import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`
export const Title = styled.div`
  position: relative;
  height: 240px;
  h1 {
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    font-size: 252px;
    font-weight: 900;
    margin: 0px;
    color: #262626;
    text-transform: uppercase;
    letter-spacing: -40px;
    margin-left: -20px;
    span {
      text-shadow: -8px 0px 0px #fff;
    }
  }
  h3 {
    font-family: 'Cabin', sans-serif;
    position: relative;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #262626;
    margin: 0px;
    letter-spacing: 3px;
    padding-left: 6px;
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 162px;
      height: 150px;
      line-height: 162px;
    }
  }
`
export const Description = styled.div`
  text-align: center;
  h2 {
    font-family: 'Cabin', sans-serif;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    color: #000;
    margin-top: 0px;
    margin-bottom: 25px;
  }
  p {
    font-weight: 300;
    max-width: 600px;
    margin: 0 auto 24px;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    letter-spacing: 0.5px;
    padding: 0 20px;
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 16px;
    }
  }
`

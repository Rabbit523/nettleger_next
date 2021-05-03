import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
  &.info {
    max-width: 64rem;
    margin-right: auto;
    margin-left: auto;
  }
`
export const Title = styled.div`
  position: relative;
  height: 240px;
  &.info {
    height: auto;
    width: 100%;
    text-align: center;
    h2 {
      font-family: 'Poppins-Bold';
      font-size: 1.875rem;
      line-height: 2.25rem;
      @media (min-width: 40em) {
        font-size: 2.5rem;
        line-height: 3rem;
      }
      @media (min-width: 64em) {
        font-size: 50px;
        line-height: 3.75rem;
      }
    }
  }
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
  &.info {
    h2 {
      text-transform: unset;
    }
    p {
      max-width: none;
      margin: 0 0 1em 0;
      padding: unset;
    }
  }
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
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0;
  width: 100%;
`
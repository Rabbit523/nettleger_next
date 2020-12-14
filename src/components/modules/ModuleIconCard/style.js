import styled from 'styled-components'

export const ModuleCardBox = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  .module-card--body {
    padding: 20px 20px 0 20px;
    .module-card-body--flex {
      display: flex;
      align-items: center;
      p {
        padding-left: 5px;
        font-weight: bold;
        font-size: 18px;
        margin: 0;
        &.no-padding {
          padding: 0;
        }
      }
      .image-wrapper {
        width: 35px;
        height: 35px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .module-card--footer {
    background: #47ffb3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    p {
      font-weight: bold;
      margin-bottom: 0;
    }
    &.no-back {
      background: transparent;
    }
  }
`
export const SButton = styled.div`
  background: ${props => props.background ? props.background : 'transparent'};
  padding: 5px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    text-transform: uppercase;
    font-weight: bold;
    padding-right: 5px;
    &.no-padding {
      padding: 0;
    }
  }
`
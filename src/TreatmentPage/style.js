import styled from 'styled-components'
import { Layout, Button } from 'antd'

export const SLayout = styled(Layout)`
  background: #fbfbfb;
`
export const PageContainer = styled.div`
  margin-top: 64px;
  background: #fbfbfb;
  min-height: calc(100vh - 64px);
`
export const SContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    max-width: 540px;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    max-width: 720px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    max-width: 960px;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`
export const SContent = styled.div`
  margin: 80px 0;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    max-width: 540px;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    max-width: 720px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    max-width: 960px;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    max-width: 700px;
  }

  .ant-steps-item {
    .ant-steps-item-icon {
      border: none;
      span {
        font-family: 'Poppins-bold';  
        color: #000 !important;
      }
    }
    .ant-steps-item-title {
      font-family: 'Poppins-bold';
      color: #000 !important;
    }
    .ant-steps-item-content {
      margin-top: 0;
    }
    .ant-steps-item-tail {
      &::after {
        background-color: #e1e1e1;
      }
    }
    &.ant-steps-item-wait {
      .ant-steps-item-icon {
        background-color: #e1e1e1;
        border: none;
      }
    }
    &.ant-steps-item-active {
      .ant-steps-item-icon {
        background: #47ffb3;
        border: none;
      }
      .ant-steps-item-title {
        color: #47ffb3 !important;
      }
    }
    &.ant-steps-item-finish {
      .ant-steps-item-tail {
        &::after {
          background-color: #47ffb3;
        }
      }
      .ant-steps-item-icon {
        background: #47ffb3;
        border: none;
      }
      .ant-steps-item-title {
        color: #47ffb3 !important;
      }
    }
  }
  .steps-content {
    margin-top: 50px;
  }

  .steps-action {
    margin-top: 24px;
    display: flex;
  }
`
export const SButton = styled(Button)`
  background: ${props => props.color};
  border: none;
  display: flex;
  align-items: center;
  padding: ${props => props.padding ? props.padding : '10px 45px'};
  height: auto;
  width: auto;
  span {
    color: #000;
    font-family: 'Poppins-bold';
    text-transform: uppercase;
  }
  &:hover, &:focus {
    background: ${props => props.hover};
  }
`
export const Treatment1Box = styled.div`
  h1 {
    font-size: 40px;
    font-family: 'Poppins-bold';
  }
  h5 {
    font-size: 18px;
    font-family: 'Poppins-bold';
  }
  ul {
    margin-left: -20px;
    li {
      color: #5e5e5e;
      font-size: 16px;
    }
  }
  .img-btn-group {
    display: flex;
    align-items: center;
    button {
      width: 70px;
      height: 50px;
      background: transparent;
      border: none;
      margin-right: 15px;
      border: 1px solid transparent;
      cursor: pointer;
      img {
        width: 100%;
      }
      &:focus {
        outline: none;
        border-color: #e1e1e1;
      }
    }
  }
`
export const STreatment2Box = styled.div`
  h2 {
    font-size: 30px;
    font-family: 'Poppins-bold';
  }
`
export const STreatment3Box = styled.div`
  h2 {
    font-size: 30px;
    font-family: 'Poppins-bold';
  }
  p {
    a {
      text-decoration: underline;
    }
  }
`
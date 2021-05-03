import styled from 'styled-components'
import { Layout, Button, Divider } from 'antd'

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
  .ant-steps-vertical {
    flex-direction: row;
  }
  @media (min-width: 320px) {
    .ant-steps-item {
      .ant-steps-item-content {
        display: none;
      }
    }
  }
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
    max-width: 760px;
    .ant-steps-item-icon {
      margin: 0 8px 0 0;
    }
    .ant-steps-item-title {
      padding-right: 8px;
      font-size: 14px;
    }
  }
  @media (min-width: 1024px) {
    .ant-steps-item {
      .ant-steps-item-content {
        display: inline-block;
      }
    }
  }
  .ant-steps-item {
    .ant-steps-item-icon {
      border: none;
      span {
        font-family: 'Poppins-bold';
        color: #fff;
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
        background: #0080f6;
        border: none;
      }
      .ant-steps-item-title {
        color: #0080f6 !important;
      }
    }
    &.ant-steps-item-finish {
      .ant-steps-item-tail {
        &::after {
          background-color: #0080f6;
        }
      }
      .ant-steps-item-icon {
        background: #0080f6;
        border: none;
      }
      .ant-steps-item-title {
        color: #0080f6 !important;
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
  border-radius: 25px;
  span {
    color: #fff;
    font-family: 'Poppins-bold';
    text-transform: uppercase;
  }
  &:hover, &:focus {
    background: ${props => props.hover};
  }
`
export const Treatment1Box = styled.div`
  h1 {
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
  .img-group {
    display: flex;
    align-items: center;
    .img-wrapper {
      width: 70px;
      height: 50px;
      background: transparent;
      border: none;
      margin-right: 15px;
      border: 1px solid transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
      &:focus {
        outline: none;
        border-color: #e1e1e1;
      }
    }
  }
  @media (min-width: 320px) {
    h1 {
      font-size: 30px;
    }
  }
  @media (min-width: 414px) {
    h1 {
      font-size: 36px;
    }
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 40px;
    }
  }
`
export const CovidStep1Box = styled.div`
  h1 {
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
  .img-group {
    display: flex;
    align-items: center;
    .img-wrapper {
      width: 70px;
      height: 50px;
      background: transparent;
      border: none;
      margin-right: 15px;
      border: 1px solid transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
      &:focus {
        outline: none;
        border-color: #e1e1e1;
      }
    }
  }
  @media (min-width: 320px) {
    h1 {
      font-size: 30px;
    }
  }
  @media (min-width: 414px) {
    h1 {
      font-size: 36px;
    }
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 40px;
    }
  }
`
export const CovidStep2Box = styled.div`
  min-height: calc(100vh - 300px);
  height: ${props => props.height ? `${props.height}px` : '640px'};
  iframe {
    border: none;
    overflow-y: hidden;
  }
`
export const SDivider = styled(Divider)`
  margin: 12px 0;
`
export const PaymentListBox = styled.div`
  span.card-name {
    font-size: 15px;
  }
  div.btn-group {
    float: right;
  }
  button.btn-cancel {
    margin-right: 10px;
  }
`
export const ProcessPaymentBox = styled.div`
  div.card {
    display: flex;
    flex-direction: row;
    div.card-info {
      flex: 5;
      div.card-info-row {
        display: flex;
        flex-direction: row;
        div.stype {
          flex: 3;
        }
        div.svalue {
          flex: 4;
          #cvv2 {
            width: 100%;
          }
        }
      }
    }
    div.card-img {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  div.btn-group {
    float: right;
  }
  button.btn-cancel, button.btn-previous {
    margin-right: 10px;
  }
`
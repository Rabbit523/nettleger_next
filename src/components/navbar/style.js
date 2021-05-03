import styled from 'styled-components'
import { Layout, Space, Button, Menu } from 'antd'

const { Header } = Layout

export const SMenu = styled(Menu)`
  min-width: 170px;
  margin-top: 13px;
  margin-right: -14px;
`
export const SHeader = styled(Header)`
  background: #fff;
  box-shadow: 2px 2px 0px -1px #ccc;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  img {
    width: 14em;
    height: 3em;
  }
  button {
    align-self: center;
    border: none;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    span {
      padding-right: 10px;
    }
    &:hover, &:focus {
      outline: none;
    }
    &.menu {
      span {
        color: #000;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      }
    }
  }
  @media (min-width: 320px) {
    padding: 0;
  }
  @media (min-width: 768px) {
    padding: 0 50px;
  }
`
export const SContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: ${props => props.align ? props.align : 'center'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 320px) {
    flex-direction: column;
    &.nav-container {
      flex-direction: ${props => props.direction ? props.direction : 'row'};  
    }
  }
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
    flex-direction: ${props => props.direction ? props.direction : 'row'};
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`
export const SBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
export const SMenuItem = styled.div`
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  max-height: 64px;
  a {
    padding: 8px 15px 0 15px;
    text-transform: capitalize;
    font-family: 'Poppins-bold';
    color: #000;
  }
  &:hover {
    border-bottom: 2px solid #0080f6;
    a {
      color: #0080f6;
    }
  }
`
export const SNavButtonGroup = styled(Space)`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const SNavButton = styled(Button)`
  background: #0080f6;
  color: #fff;
  font-size: 12px !important;
  text-transform: uppercase;
  font-family: 'Poppins-Bold';
  padding: 5px 15px;
  border-radius: 25px;
  span {
    padding: 0 !important;
  }
  &:hover, &:focus, &:active {
    background: #83b9ea;
    color: #fff;
  }
`
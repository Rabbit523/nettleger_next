import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { Layout, Typography } from 'antd'

const { Title } = Typography

export const SLayout = styled(Layout)`
  background: #fbfbfb;
`
export const PageContainer = styled.div`
  margin-top: 64px;
  background: #fbfbfb;
  min-height: calc(100vh - 64px);
`
export const SContent = styled.div`
  min-height: ${props => props.src ? '490px' : 'unset'};
  background-image:  ${props => props.src ? `url(${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.src})` : null};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
  justify-content: center;
  position: relative;
  padding: 50px 0;
  margin-top: ${props => props.isMarginTop ? '180px' : '0'};
  background: ${props => props.background};
  .banner {
    p {
      font-size: ${props => props.src ? '24px' : 'initial'};
    }
  }
  &::before {
    content: '';
    width: 100%;
    min-height: ${props => props.src ? '490px' : '0'};
    background-color: rgba(0,0,0,0.4);
    display: block;
    position: absolute;
  }
  max-width: ${props => props.type === 'multiple' && !props.src ? '1200px' : 'unset'};
  padding-right: ${props => props.type === 'multiple' && !props.src ? '15px' : 'unset'};
  padding-left: ${props => props.type === 'multiple' && !props.src ? '15px' : 'unset'};
  margin-right: ${props => props.type === 'multiple' && !props.src ? 'auto' : 'unset'};
  margin-left: ${props => props.type === 'multiple' && !props.src ? 'auto' : 'unset'};
  @media (min-width: 320px) {
    margin-top: ${props => props.isMarginTop ? '650px' : '0'};
    padding: 48px 0;
    flex-direction: column;
  }
  @media (min-width: 576px) {
    max-width: ${props => props.type === 'multiple' && !props.src ? '540px' : 'unset'};
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    max-width: ${props => props.type === 'multiple' && !props.src ? '720px' : 'unset'};
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    max-width: ${props => props.type === 'multiple' && !props.src ? '960px' : 'unset'};
    margin-top: ${props => props.isMarginTop ? '180px' : '0'};
    flex-direction: ${props => props.type === 'multiple' ? 'row' : 'column'};
    padding: ${props => props.src ? '0' : '48px 0' };
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    max-width: ${props => props.type === 'multiple' && !props.src ? '1140px' : 'unset'};
  }
`
export const STextComponent = styled.div`
  flex: 1.5;
  @media (min-width: 320px) {
    margin-left: auto;
    margin-right: auto;
    padding: 0 15px;
  }
  @media (min-width: 1024px) {
    margin-right: 25px;
  }
`
export const STitle = styled(Title)`
  color: ${props => props.src ? '#fff!important' : '#000'};
  font-size: ${props => props.src ? '50px!important' : '30px !important'};
  margin: 0;
  margin-bottom: ${props => props.src ? '18px!important' : '25px !important'};
  text-align: ${props => props.src ? 'unset' : props.center === 'true' ? 'center' : 'left'};
`
export const SSpace = styled.div`
  z-index: ${props => props.src ? 1 : 'unset'};
  width: ${props => props.src ? '47%' : '100%'};
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: ${props => props.src ? '47%' : '100%'};
  }
`
export const SModuleWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  align-items: ${props=> props.direction ? 'unset' : 'center'};
  justify-content: ${props=> props.direction ? 'unset' : 'space-between'};
  position: ${props => props.isBottom ? 'absolute' : 'relative'};
  bottom: ${props => props.isBottom ? '-120px' : 0};
  width: 100%;
  flex: 1;
  .behandlinger {
    width: 100%;
  }
  @media (min-width: 320px) {
    bottom: ${props => props.isBottom ? '-680px' : 0};
  }
  @media (min-width: 1024px) {
    bottom: ${props => props.isBottom ? '-120px' : 0};
  }
`
export const ModuleCardBox = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: 25px;
  border-radius: 25px;
  border: 1px solid transparent;
  .module-card--body {
    display: flex;
    flex-direction: column;
    p {
      font-weight: bold;
      font-size: 18px;
      margin: 0;
      padding-bottom: 15px;
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
  .module-card--footer {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    p {
      font-weight: bold;
      margin-bottom: 0;
    }
    &.no-back {
      background: transparent;
    }
  }
  &:hover {
    background: #f1f5ff;
    border: 1px solid #407bff;
    cursor: pointer;
  }
  @media (min-width: 320px) {
    max-width: 100%;
    margin-bottom: 25px;
  }
  @media (min-width: 1024px) {
    max-width: 350px;
    margin-bottom: 0;
  }
`
export const SButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 25px 0;
`
export const SButton = styled.a`
  background: ${props => props.background};
  padding: ${props => props.padding ? props.padding : '5px 15px'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  width: ${props => props.width};
  color: #fff;
  border-radius: 25px;
  &:hover {
    background: #83b9ea;
    color: #fff;
  }
`

export const STreatmentCard = React.forwardRef(({ onClick, href, ...props }, ref) => {
  const { title, description, cost } = props
  return (
    <ModuleCardBox>
      <div className="module-card--body">
        <p>{title}</p>
        {parse(description)}
      </div>
      <div className="module-card--footer">
        <p>{cost}, -</p>
        <SButton background="#0080f6" href={href} onClick={onClick} ref={ref}>bestill</SButton>
      </div>
    </ModuleCardBox>
  )
})
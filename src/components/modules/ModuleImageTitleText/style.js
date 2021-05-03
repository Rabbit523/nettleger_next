import styled from 'styled-components'

export const ModuleImageTitleTextCard = styled.div`
  .module_image_title_text--body {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: ${props => props.direction};
    box-shadow: ${props => props.direction === 'row' ? 'unset' : '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'};
    max-width: ${props => props.direction === 'row' ? 'none' : '320px'};
    .module_image_title_text {
      display: flex;
      flex-direction: column;
      flex: 1;
      @media (min-width: 320px) {
        align-items: center;
        text-align: center;
        margin-bottom: 16px;
      }
      @media (min-width: 1024px) {
        align-items: initial;
        text-align: initial;
        margin-bottom: 0;
      }
    }
    .module_image_title_img {
      flex: 1;
      width: 100%;
      img {
        width: 100%;
      }  
    }
    &.left {
      @media (min-width: 320px) {
        flex-direction: column;
      }
      @media (min-width: 1024px) {
        flex-direction: row-reverse;
        .module_image_title_img {
          margin: 0 175px 0 0;
        }
      }
    }
    &.right {
      @media (min-width: 320px) {
        flex-direction: column;
      }
      @media (min-width: 1024px) {
        flex-direction: row;
        .module_image_title_text {
          margin: 0 175px 0 0;
        }
      }
    }
    .module_image_title_text--img-wrapper {
      background: #f1f5ff;
      width: 100%;
      height: 305px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: auto;
      }
    }
    .module_image_title_text--texts {
      background: #fff;
      padding: 25px;
      label {
        font-size: 20px;
        font-family: 'Poppins-Bold';
        padding-bottom: 15px;
      }
    }
    @media (min-width: 320px) {
      flex-direction: column;
      max-width: 100%;
      margin-bottom: 25px;
      margin-top: 50px;
      &:first-child {
        margin-top: 35px;
      }
      &.single {
        max-width: 100%;
      }
    }
    @media (min-width: 1024px) {
      flex-direction: ${props => props.direction};
      margin-bottom: 0px;
      margin-top: 0px;
      &.single {
        max-width: 320px;
      }
    }
  }
`
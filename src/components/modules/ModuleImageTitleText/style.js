import styled from 'styled-components'

export const ModuleImageTitleTextCard = styled.div`
  .module_image_title_text--body {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: ${props => props.direction};
    box-shadow: ${props => props.direction === 'row' ? 'unset' : '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'};
    max-width: ${props => props.direction === 'row' ? 'none' : '320px'};
    .module_image_title_text--left {
      flex: 1;
      margin-right: 175px;
    }
    .module_image_title_text--right {
      flex: 1;
      margin-left: 25px;
      img {
        width: 100%;
        height: 100%;
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
        width: 100px;
        height: 100px;
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
  }
`
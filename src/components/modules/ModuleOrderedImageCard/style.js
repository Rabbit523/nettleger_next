import styled from 'styled-components'

export const ModuleOrderedImageCardBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 0 25px;
  .module_ordered_image_card_module--image {
    width: 280px;
    height: 235px;
    padding-bottom: 25px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .module_ordered_image_card_module--body {
    display: flex;
    align-items: center;
    p {
      margin: 0;
      line-height: 15px;
      &.number {
        color: #407bff;
        font-family: 'Poppins-Bold';
        font-size: 30px;
        padding-right: 1rem;
      }
    }
  }
`
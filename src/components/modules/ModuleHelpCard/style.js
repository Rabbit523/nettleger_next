import styled from 'styled-components'

export const ModuleHelpCardBox = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  max-width: 320px;
  max-height: 100px;
  flex: 1;
  border: 1px solid transparent;
  border-radius: 15px;
  .module_help_card--left {
    display: flex;
    .img-wrapper {
      width: 50px;
      height: 60px;
      padding-right: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text-group {
      label {
        font-size: 20px;
        font-family: 'Poppins-bold';
      }
      p {
        margin: 0;
      }
    }
  }
  .module_help_card--right {
    svg {
      width: 1.5em;
      height: 1.5em;
    }
  }
  &:hover {
    background: #f1f5ff;
    border: 1px solid #0080f6;
    cursor: pointer;
    .module_help_card--left {
      .text-group {
        label {
          color: #0080f6;
        }
      }
    }
  }
  @media (min-width: 320px) {
    max-width: 100%;
    margin-bottom: 25px;
  }
  @media (min-width: 1024px) {
    max-width: 320px;
    margin-bottom: 0;
  }
`
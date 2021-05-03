import styled from 'styled-components'

export const SFooter = styled.div`
  background: #407bff;
  padding: 65px 0 45px 0;
  color: #fff;
  .footer--body {
    display: flex;
    align-items: flex-start;
    .footer-body--basic {
      flex: 3;
      margin-right: 25px;
      a.logo {
        width: 200px;
        height: 60px;
        display: flex;
        img {
          width: 100%;
        }
      }
    }
    .footer-body--links {
      flex: 4;
      margin-left: 25px;
      display: flex;
      justify-content: space-between;
      label {
        font-size: 20px;
        font-weight: 'Poppins-bold';
      }
      .link-group {
        display: flex;
        flex-direction: column;
        padding-top: 23px;
        a {
          color: #fff;
          padding: 5px 0;
          span {
            padding-right: 5px;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .footer--bottom {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 35px 0 15px 0;
    justify-content: space-between;
    p {
      margin: 0;
    }
    a {
      text-decoration: underline;
      color: #fff;
      &.icon {
        background: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content:center;
        padding: 5px;
        text-transform: none;
      }
    }
    .footer-bottom--social {
      display: flex;
      align-items: center;
      a {
        margin: 0 0.5em;
        color: #1890ff;
      }
    }
  }
  @media (min-width: 320px) {
    .footer--body {
      flex-direction: column;
      .footer-body--links {
        flex-direction: column;
        margin: 0;
      }
    }
  }
  @media (min-width: 1024px) {
    .footer--body {
      flex-direction: row;
      .footer-body--links {
          flex-direction: row;
          margin-left: 25px;
        }
    }
  }
`
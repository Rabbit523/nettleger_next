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
      background: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content:center;
      padding: 5px;
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
`
import styled from 'styled-components'

export const HeaderStyle = styled.div`
  background: black;
  .headerMain {
    height: 70px;
    line-height: 70px;
    ${(props) => props.theme.mixin.content};
    display: flex;
  }
  .icon {
    ${(props) => props.theme.mixin['sprite_01']};
    width: 157px;
    margin-right: 30px;
    background-position: 0 0;
    height: 70px;
  }
  .linkStyle {
    display: flex;
    position: relative;
    flex: 1;
    justify-content: space-between;
    & .hot {
      ${(props) => props.theme.mixin['sprite_01']};
      width: 28px;
      height: 14px;
      background-position: -192px 0;
      position: absolute;
      top: 20px;
      right: -14px;
    }
    .linkPath {
      position: relative;
    }
    .active {
      color: #fff;
      &::after {
        content: '';
        width: 12px;
        height: 6px;
        background-color: red;
        position: absolute;
        left: 50%;
        bottom: 0px;
        transform: translate(-50%, 0%);
        ${(props) => props.theme.mixin['sprite_01']};
        background-position: -225px 0;
      }
    }
  }
  .lineColor {
    min-height: 5px;
    width: 100vw;
    ${(props) => props.theme.color}
  }
  .showDiscove {
    height: 40px;
    line-height: 40px;
    ${(props) => props.theme.mixin.content};
    margin: 0 auto;
    display: flex;
    padding-left: 348px;
    a {
      width: 100px;
      text-align: center;
    }
    .active {
      color: white;
    }
    .headerInput {
      width: 158px;
      height: 32px;
    }
  }
  .headerInput {
    width: 158px;
    height: 32px;
  }
  .buttons {
    margin-left: 50px;
    .headerButton {
      height: 32px;
      margin: 19px 0 0 12px;
      box-sizing: border-box;
      padding-left: 16px;
      border: 1px solid #4f4f4f;
      background-position: 0 -140px;
      line-height: 22px;
      color: #ccc;
      border-radius: 20px;
    }
    .login {
      color: #787878;
      cursor: pointer;
    }
  }
`

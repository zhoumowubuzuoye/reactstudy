import styled from 'styled-components'

export const HeaderStyle = styled.div`
  background: black;
  height: 70px;
  line-height: 70px;
  .headerMain {
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
    flex:1;
    justify-content:space-between;
    & .hot {
      ${(props) => props.theme.mixin['sprite_01']};
      width: 28px;
      height: 14px;
      background-position: -192px 0;
      position: absolute;
      top: 20px;
      right: -14px;
    }
  }
`

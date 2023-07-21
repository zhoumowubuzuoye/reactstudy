import styled from 'styled-components'

export const SongItemStyle = styled.div`
  width: 140px;
  height: 204px;
  margin-bottom: 20px;
  .songImg {
    width: 140px;
    height: 140px;
    position: relative;
    img {
      width: 140px;
    }
    .songNumber {
      position: absolute;
      bottom: 0;
      height: 27px;
      ${(props) => props.theme.mixin['sprite_cover']};
      width: 100%;
      background-position: 0 -537px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 10px;
      .number {
        color:#ccc;
        &::before {
          ${(props) => props.theme.mixin['sprite_icon']};
          display: inline-block;
          width: 20px;
          height: 16px;
          background-position: 0 -18px;
          content: '';

        }
      }
      .start {
        ${(props) => props.theme.mixin['sprite_icon']};
        display: inline-block;
        width: 16px;
        height: 16px;
        background-position: 0 0px;
      }
    }
  }
  .SongDes {
    margin-top: 10px;
    color: rgb(0, 0, 0);
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
`

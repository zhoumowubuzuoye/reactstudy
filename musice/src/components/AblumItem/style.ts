import styled from 'styled-components'

export const AblumItemStyle = styled.div`
  height: 150px;
  width: 118px;
  .ablumImg {
    width: 118px;
    height: 100px;
    ${(props) => props.theme.mixin['sprite_cover']};
    background-position: 0 -570px;
    cursor: pointer;
    div {
      position: relative;
      &:hover {
        .start {
          width: 22px;
          height: 22px;
          ${(props) => props.theme.mixin['sprite_icon']}
          background-position: 0 -110px;
          position: absolute;
          bottom: 4px;
          right: 22px;
        }
      }
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
  .ablumDes {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
    .name {
      color: #000;
      width: 90%;
      font-size: 12px;
      font-family: Arial, Helvetica, sans-serif;
    }
    .author {
      font-size: 12px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`

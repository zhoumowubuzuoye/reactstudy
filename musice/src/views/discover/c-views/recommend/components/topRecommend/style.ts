/*
 * @Author: xiewenhao
 * @Date: 2023-07-21 16:18:59
 * @LastEditTime: 2023-07-21 16:52:24
 * @Description:
 */
import styled from 'styled-components'

export const TopRecommendStyle = styled.div`
  margin-top: 20px;
`

export const TopTableStyle = styled.div`
  height: 472px;
  margin-top: 20px;
  background: url(${require('@/assets/images/recommend-top-bg.png')});
  display: flex;
`

export const TableLiStyle = styled.div`
  flex: 1;
  .top {
    padding: 20px 20px;
    display: flex;
  }
  .topImg {
    width: 80px;
    height: 80px;
    img {
      width: 100%;
    }
  }
  .topDo {
    margin-left: 10px;
    color: #333;
    font-size: 14px;
    margin-left: 8px;
    .name {
      cursor: pointer;
      height: 20px;
      span {
        &:hover {
          border-bottom: 1px solid #333;
        }
      }
    }
    .doList {
      display: flex;
      margin-top: 10px;
      .doImg {
        width: 22px;
        height: 22px;
        ${(props) => props.theme.mixin['sprite_02']}
        cursor:pointer;
      }
      .start {
        background-position: -267px -205px;
        &:hover {
          background-position: -267px -235px;
        }
      }
      .save {
        background-position: -300px -205px;
        margin-left: 8px;
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      height: 32px;
      line-height: 32px;
      font-size: 16px;
      &:nth-child(-n + 3) .index {
        color: #c10d0c;
      }
      .index {
        margin-left: 40px;
      }
      .name {
        font-size: 12px;
        margin-left:4px
      }
    }
  }
`

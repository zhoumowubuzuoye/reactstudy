import styled from 'styled-components'

export const HotStyle = styled.div`
  .hotSpecial {
    margin-left: 20px;
    display: flex;
    height: 20px;
    line-height: 20px;
    margin-top: 8px;
  }
  .special {
    padding: 0px 10px;
    span {
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid #bbb;
      }
    }
  }
  .borderShow {
    border-right: 1px solid #ccc;
  }
`

export const HotRecommendStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  margin-top:20px;
`

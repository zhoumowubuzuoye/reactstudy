import styled from 'styled-components'

export const RecommendTitleStyle = styled.div`
  line-height: 34px;
  border-bottom: 2px solid #c10d0c;
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  .titleLeft {
    display: flex;
  }
  .circle {
    width: 33px;
    height: 33px;
    ${(props) => props.theme.mixin['sprite_02']};
    background-position: -225px -153px;
  }
  .title {
    font-size: 20px;
    font-weight: normal;
  }
  .more {
    padding-right: 10px;
    &::after {
      content: '';
      ${(props) => props.theme.mixin['sprite_02']};
      background-position: 0 -240px;
      width: 10px;
      height: 10px;
      display: inline-block;
    }
  }
`

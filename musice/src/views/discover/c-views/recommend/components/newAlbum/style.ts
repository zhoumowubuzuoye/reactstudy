/*
 * @Author: xiewenhao
 * @Date: 2023-07-20 16:00:27
 * @LastEditTime: 2023-07-21 13:37:09
 * @Description:
 */
import styled from 'styled-components'

export const NewAblumStyle = styled.div``

export const AblumSwapperStyle = styled.div`
  height: 184px;
  margin: 0 auto;
  padding: 0 16px;
  background: #f5f5f5;
  border: 1px solid #fff;
  margin-top: 20px;
  width: 645px;
  padding-top: 14px;
  position: relative;
  .position {
    ${(props) => props.theme.mixin['sprite_02']};
    width: 18px;
    height: 18px;
    position: absolute;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .ablumLeft {
    background-position: -260px -75px;
    left: 0px;
    top: 50%;
  }
  .ablumRight {
    background-position: -300px -75px;
    right: 0px;
    top: 50%;
  }
`
export const SwiperItemStyle = styled.div`
  display: flex !important;
  justify-content: space-between;
  padding: 8px 12px;
`

import styled from 'styled-components'

export const DiscoverSwapper = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .imgs {
    display: flex;
    width: 982px;
    margin: 0 auto;
    position: relative;
  }
  .direction {
    background-image: url(${require('@/assets/images/banner_sprite.png')});
    width: 37px;
    height: 63px;
    background-repeat: no-repeat;
  }
`

export const SwapperLeftStyle = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: -90px;
  .direction {
    background-position: 0 -360px;
    &:hover {
      background-position: 0 -430px;
    }
  }
`
export const SwapperRightStyle = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: -90px;
  .direction {
    background-position: 0 -508px;
    &:hover {
      background-position: 0 -578px;
    }
  }
`

export const SwapperDownloadStyle = styled.div`
  flex: 1;
  height: 285px;
  background-image: url(${require('@/assets/images/download.png')});
  position: relative;
  .swapperDes {
    text-align: center;
    color: #8d8d8d;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .download {
    background-image: url(${require('@/assets/images/download.png')});
    width: 215px;
    height: 56px;
    position: absolute;
    top: 185px;
    left: 19px;
    background-position: -19px -185px;
    cursor: pointer;
    &:hover {
      background-position: 0px 64px;
    }
  }
`

export const SwapperCenterStyle = styled.div`
  margin: 0 auto;
  width: 730px;
  position: relative;
  .swapperImg {
    height: 285px;
  }
  .dots {
    display: flex;
    width: 160px;
    position: absolute;
    justify-content: space-between;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    .dot {
      display: flex;
      width: 8px;
      height: 8px;
      background: red;
      border-radius: 50%;
      background-color: #ccc;
      cursor: pointer;
      &.active {
        background-color: red;
      }
    }
  }
`
export const SwapperMainStyle = styled.div`
  width: 982px;
  margin: 0 auto;
  display: flex;
  border: 1px solid #d3d3d3;
  border-top: none;
`

export const MainLeftStyle = styled.div`
  flex: 1;
  padding: 20px 20px 40px;
  background: white;
`
export const MainRightStyle = styled.div`
  width: 250px;
  background: blue;
`

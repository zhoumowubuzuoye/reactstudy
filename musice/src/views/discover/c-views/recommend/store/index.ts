import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../services'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { SongItem, AblumItem, PlayList } from '@/contants/type'
import { IdList } from './contant'

export interface BannerItem {
  bannerBizType: 'force_banner'
  encodeId: string
  exclusive: boolean
  imageUrl: string
  scm: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
}

interface IRecommend {
  banners: BannerItem[]
  hotRecommends: SongItem[]
  newAlbums: AblumItem[]
  rankings: PlayList[]
}

const initialState: IRecommend = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: []
}

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  (arg, { dispatch }) => {
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecomments(res.result))
    })
    getNewAlbum().then((res) => {
      dispatch(changeNewAblums(res.albums))
    })
  }
)

export const fetchGetRankingListAction = createAsyncThunk(
  'rankings',
  (arg, { dispatch }) => {
    const promises: Promise<any>[] = []
    IdList.map((id) => promises.push(getPlaylistDetail(id)))
    Promise.all(promises).then((res) => {
      const list = res.map((item) => item.playlist)
      dispatch(changeRankings(list as PlayList[]))
    })
  }
)

const recommendSlice = createSlice({
  name: 'recommend',
  reducers: {
    changeBannersAction(state, action: PayloadAction<BannerItem[]>) {
      state.banners = action.payload
    },
    changeHotRecomments(state, action: PayloadAction<SongItem[]>) {
      state.hotRecommends = action.payload
    },
    changeNewAblums(state, action: PayloadAction<AblumItem[]>) {
      state.newAlbums = action.payload
    },
    changeRankings(state, action: PayloadAction<PlayList[]>) {
      state.rankings = action.payload
    }
  },
  initialState
})

export const {
  changeBannersAction,
  changeHotRecomments,
  changeNewAblums,
  changeRankings
} = recommendSlice.actions

export default recommendSlice

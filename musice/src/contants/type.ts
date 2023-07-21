import { DefaultType } from './defalut'

export interface SongItem extends DefaultType {
  alg: string
  canDislike: boolean
  copywriter: string
  highQuality: boolean
  playCount: number
  trackCount: number
  trackNumberUpdateTime: number
}

export interface AblumItem extends DefaultType {
  blurPicUrl: string
  status: number
  [propName: string]: any
}

export interface PlayList extends DefaultType {
  coverImgUrl: string
  description: string
  trackIds: []
}

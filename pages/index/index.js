import {fetch} from '../../utils/utils.js'
const app = getApp()

Page({
  data: {
    swiperData: [],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 500
  },
  onLoad() {
    this.getData()
  },
  getData() {
    fetch.get('/swiper').then(res => {
      this.setData({
        swiperData: res.data
      })
    })
  }
})
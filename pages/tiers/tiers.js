// pages/tiers.js
Page({

  /**
   * Page initial data
   */
  data: {
    markers: [],
    customCalloutMarkerIds: [],
    num: 1,
    show: false,  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    const sh_coordination = [31.224361, 121.469170]
    this.setData({
      mapParams: {
        latitude: sh_coordination[0], // 纬度
        longitude: sh_coordination[1], // 经度 
        markers: [{
          id: 1,
          latitude: 31.2304,
          longitude: 121.4737,
          title: 'School A',
          width: 30,
          height: 30,
        }],
        subKey: '4KFBZ-UY3LF-DZHJX-NRLR7-A5HL5-ECFVP',
        scale: "12",
        showLocation: true,
        showScale: true,
        showCompass: true,
        skew: 0,
        rotate: 0,
        layerStyle: 1,
        enableZoom: true,
        enableScroll: true,
        enableRotate: false,
        enable3D: true,
        enableOverlooking: false,
        enableSatellite: false,
        enableTraffic: false,
    }
    })

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },

  markerTap(e) {
    console.log("tap", e)
    const markerId = e.markerId;
    const selectedMarker = this.data.markers.find(marker => marker.id === markerId);

    // Show a pop-up or navigate to a school details page with more information.
    wx.showToast({
      title: `School: ${selectedMarker.title}`,
    });
  },
})
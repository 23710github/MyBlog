

/**
 * 高德天气实时数据接口返回的一条记录
 */
export type WeatherLive= {
  /** 行政区划代码（6 位数字） */
  adcode: string,

  /** 城市/区县名称 */
  city: string,

  /** 相对湿度（字符串格式，带 %） */
  humidity: string,

  /** 相对湿度（浮点字符串，不带 %） */
  humidity_float: string,

  /** 省份名称 */
  province: string,

  /** 数据上报时间，格式：yyyy-MM-dd HH:mm:ss */
  reporttime: string,

  /** 当前温度（字符串格式，带单位 °C） */
  temperature: string,

  /** 当前温度（浮点字符串，不带单位） */
  temperature_float: string,

  /** 天气现象文字描述，如“雾”“晴”等 */
  weather: string,

  /** 风力等级 */
  windpower: string,

  /** 风向文字描述，如“西南”“东北”等 */
  winddirection: string,
}
/**
 * Created by dell on 2017/8/10.
 */
export default {
  OPERATE: {
    NEXT: 1,
    PRE: -1
  },
  weeks: ['日', '一', '二', '三', '四', '五', '六'],
  options: {
    minDate: null, // 最小可选日期
    maxDate: null, // 最大可选日期

    onlyOneDay: false, // 只选择一个日期
    date: null,       //  只选择一个日期的时间

    startDate: null, // 默认起始时间
    endDate: null,    // 默认结束时间

    weekDisable: false, // 周末是否可选
    datesDisable: [],    // 某些日期不可选

    dayRangeMax: 0,   // 最多可选择的天数
    format: 'yyyy-MM-dd', // 日期格式
    defaultText: '至', // 连接两个日期的内容

    calendars: 2      // 展示的月份数，最大是2
  }
}

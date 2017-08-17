let _id = 0

export function DomDateItem () {
  this._id = _id++
  this.text = ''
  this.value = ''
  this.disabled = false
}

function getDomMonthDays (date, options) {
  var domDates = []

  // 当月第一天
  let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
  let domDateBegin = new Date(date.getFullYear(), date.getMonth(), 1)
  // 获取当前的星期
  var w = domDateBegin.getDay()
  // 计算应该开始的日期
  domDateBegin.setDate(1 - w)

  // 当月最后一天
  var lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  var domDateEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  w = domDateEnd.getDay()
  // 计算应该结束的日期
  domDateEnd.setDate(domDateEnd.getDate() + 6 - w)

  let index = 0
  let rowDomDates = []
  for (let d = domDateBegin; d.getTime() <= domDateEnd.getTime(); d.setDate(d.getDate() + 1)) {
    (function () {
      var currentD = new Date(d.getTime())
      let domDateItem = new DomDateItem()
      domDateItem.text = currentD.getDate()
      domDateItem.value = currentD
      // 当前日期之前的日期
      if (currentD.getTime() < firstDayOfMonth.getTime() || currentD.getTime() > lastDayOfMonth.getTime() ||
        (options.maxDate && options.maxDate.getTime() < currentD.getTime()) ||
        (options.minDate && options.minDate.getTime() > currentD.getTime()) ||
        (options.weekDisable && (index % 7 === 0 || index % 7 === 6)) ||
        (options.datesDisable.indexOf(currentD.getTime()) !== -1)) {
        domDateItem.disabled = true
      }
      rowDomDates.push(domDateItem)
      index % 7 === 6 ? domDates.push(rowDomDates) : false
      index % 7 === 6 && index >= 6 ? rowDomDates = [] : false
      index++
    })()
  }
  if (rowDomDates.length !== 0) {
    domDates.push(rowDomDates)
  }
  return domDates
}

export function initMixin (DatePicker) {
  DatePicker.prototype.initDom = function (startDate, endDate) {
    if (startDate.getTime() > endDate.getTime()) {
      let flag = startDate
      startDate = endDate
      endDate = flag
    }

    let domMonthDays1 = {}
    let domMonthDays2 = {}
    this._startDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1)
    this._endDate = new Date(endDate.getFullYear(), endDate.getMonth(), 1)

    if (startDate.getFullYear() === endDate.getFullYear() && startDate.getMonth() === endDate.getMonth()
    ) {
      domMonthDays1 = getDomMonthDays(this._startDate, this.options)
      this._endDate.setMonth(this._endDate.getMonth() + 1)
      domMonthDays2 = getDomMonthDays(this._endDate, this.options)
    } else {
      domMonthDays1 = getDomMonthDays(this._startDate, this.options)
      domMonthDays2 = getDomMonthDays(this._endDate, this.options)
    }
    this.domMonthDays = {}
    this.domMonthDays[this._startDate.getFullYear() + '/' + (this._startDate.getMonth() + 1)] = domMonthDays1
    this.domMonthDays[this._endDate.getFullYear() + '/' + (this._endDate.getMonth() + 1)] = domMonthDays2
  }
  DatePicker.prototype.init = function () {
    let startDate = this.options.startDate
    let endDate = this.options.endDate
    this.initDom(startDate, endDate)
    this.initSelectedDate(startDate, endDate)
    return true
  }
}

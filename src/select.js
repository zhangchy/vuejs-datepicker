import {DomDateItem} from './init'
export function initSelectDate (DatePicker) {
  DatePicker.prototype.selectDate = function (domDateItem) {
    if (this.first && !this.last) {
      this.last = domDateItem
      if (this.first.value.getTime() > domDateItem.value.getTime()) {
        this.last = this.first
        this.first = domDateItem
      }
    } else if (this.last && this.first) {
      this.first = domDateItem
      this.last = null
    } else {
      this.first = domDateItem
    }
  }
  DatePicker.prototype.initSelectedDate = function (startDate, endDate) {
    if (startDate.getTime() > endDate.getTime()) {
      let flag = startDate
      startDate = endDate
      endDate = flag
    }
    this.first = new DomDateItem()
    this.first.text = startDate.getDate()
    this.first.value = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
    this.last = new DomDateItem()
    this.last.text = endDate.getDate()
    this.last.value = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())
  }

  DatePicker.prototype.recentDays = function (days) {
    let current = new Date()
    let _startDateMonth = this._startDate.getMonth() + 1
    let _endDateMonth = this._endDate.getMonth() + 1

    this.startDate = current
    this.endDate = new Date(current.getFullYear(), current.getMonth(), current.getDate())
    this.endDate.setDate(current.getDate() - days)

    let startDateMonth = this.startDate.getMonth() + 1
    let endDateMonth = this.endDate.getMonth() + 1

    if (_startDateMonth >= startDateMonth && _endDateMonth <= endDateMonth) {
      this.initSelectedDate(this.startDate, this.endDate)
    } else {
      this.initSelectedDate(this.startDate, this.endDate)
      this.initDom(this.startDate, this.endDate)
    }
  }

  DatePicker.prototype.clear = function () {
    let self = this
    self.date = null
    self.startDate = null
    self.endDate = null
    self.first = null
    self.last = null
  }
}

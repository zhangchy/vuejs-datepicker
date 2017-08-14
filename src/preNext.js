export function initPreNext (DatePicker) {
  DatePicker.prototype.preNext = function (startDate, endDate) {
    this.initDom(startDate, endDate)
  }
}

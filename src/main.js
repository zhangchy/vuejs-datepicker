/*!
 * Vue.js v2.4.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
import config from './config'
import {initMixin} from './init'
import {initSelectDate} from './select.js'
import {initPreNext} from './preNext.js'

function DatePicker (options) {
  this.options = Object.assign({}, config.options)
  for (let property in options) {
    if (property === 'datesDisable') {
      this.options[property] = []
      for (let date of options[property]) {
        let current = new Date(date.getFullYear(), date.getMonth(), date.getDate())
        this.options[property].push(current.getTime())
      }
    } else {
      this.options[property] = options[property]
    }
  }
  this.weeks = config.weeks
  this.first = null
  this.last = null
  this.startDate = this.options.startDate
  this.endDate = this.options.endDate
  this.date = this.options.date
  /* this.showOneMonth = null
  this.showTwoMonth = null */
  this.init()
}

DatePicker.version = '1.0.0'

initMixin(DatePicker)
initSelectDate(DatePicker)
initPreNext(DatePicker)

export default DatePicker

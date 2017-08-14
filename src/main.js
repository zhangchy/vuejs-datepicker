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
  this.options = config.options
  for (let property in options) {
    this.options[property] = options[property]
  }
  this.weeks = config.weeks
  this.first = null
  this.last = null
  this.init()
}

DatePicker.version = '1.0.0'

initMixin(DatePicker)
initSelectDate(DatePicker)
initPreNext(DatePicker)

export default DatePicker

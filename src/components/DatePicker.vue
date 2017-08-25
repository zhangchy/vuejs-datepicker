<template>
  <div style="position:relative;" class="datepicker">
    <input type="text" @focus="openContent()" ref="selectDates"/>
    <div  v-show="showDateContent" class="ta_calendar cf" style="display: none; left: 0px; top: 25px;">
      <div  class="ta_calendar_cont cf">
        <table class="dateRangeDateTable" v-for="(tableValues, tableKey, tableIndex) in datepicker.domMonthDays">
          <caption>{{tableKey}}</caption>
          <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td colspan="7" style="text-align: center;">
              <a href="javascript:void(0);" id="dateRangePreMonth_1502346319266">
                <!--<i class="i_pre" v-if="tableIndex == 0 ? datepicker.showOneMonth = tableKey : false" @click="preMonth(tableKey)"></i>
                <i class="i_next" v-if="tableIndex == 1? datepicker.showTwoMonth = tableKey : false" @click="nextMonth(tableKey)"></i>-->
                <i class="i_pre" v-if="tableIndex == 0" @click="preMonth(tableKey)"></i>
                <i class="i_next" v-if="tableIndex == 1 || datepicker.options.calendars == 1" @click="nextMonth(tableKey)"></i>
              </a>
            </td>
          </tr>
          <tr v-for="(row, rowIndex) in tableValues.length">
            <td v-for="(item, index) in tableValues[rowIndex]"
                :class="{
                        'ta_dateRangeGray':item.disabled,
                        'ta_dateRangeSelected': (!datepicker.options.onlyOneDay && !item.disabled && datepicker.first && datepicker.last && item.value.getTime() > datepicker.first.value.getTime() && item.value.getTime() < datepicker.last.value.getTime()),
                        'onlyOne': ((datepicker.options.onlyOneDay && !item.disabled && datepicker.first && item.value.getTime() == datepicker.first.value.getTime()) || (!item.disabled && datepicker.first && !datepicker.last && item.value.getTime() == datepicker.first.value.getTime())),
                        'first': (!datepicker.options.onlyOneDay && !item.disabled && datepicker.first && datepicker.last && item.value.getTime() == datepicker.first.value.getTime()),
                        'last': (!datepicker.options.onlyOneDay && !item.disabled && datepicker.last && item.value.getTime() == datepicker.last.value.getTime())
                        }"
                :style="{cursor: (item.disabled || (datepicker.options.dayRangeMax != 0 && datepicker.first && !datepicker.last && (datepicker.first.value.getTime() + (datepicker.options.dayRangeMax - 1) * 24*60*60*1000) < item.value.getTime()))? 'default' : 'pointer'}"
                :value=item.value
                @click="!item.disabled && !(item.disabled || (datepicker.options.dayRangeMax != 0 && datepicker.first && !datepicker.last && (datepicker.first.value.getTime() + (datepicker.options.dayRangeMax - 1) * 24*60*60*1000) < item.value.getTime())) ? datepicker.selectDate(item) : false"
            >{{item.text}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="ta_calendar_footer cf">
        <div class="frm_msg">
          <input type="text" class="ta_ipt_text_s ta_dateRangeSelected" :value="formatDate(datepicker.first?datepicker.first.value:null)"
                 readonly=""
                 style="background-repeat: repeat;">
          <span class="joinLine" v-if="!datepicker.options.onlyOneDay"> - </span>
          <input type="text" v-if="!datepicker.options.onlyOneDay" class="ta_ipt_text_s" :value="formatDate(datepicker.last?datepicker.last.value:null)" readonly="">
          <br>
        </div>
        <div class="frm_btn">
          <a href="javascript:void(0)" v-if="!datepicker.options.onlyOneDay" @click="datepicker.recentDays(7)">最近7天</a>
          <a href="javascript:void(0)" v-if="!datepicker.options.onlyOneDay" @click="datepicker.recentDays(30)">最近30天</a>
          <a href="javascript:void(0)" @click="datepicker.clear()">清空</a>
          <input class="ta_btn ta_btn_primary" type="button"  value="确定" @click="submitDates()">
          <input class="ta_btn" type="button" value="取消" @click="showDateContent = false">
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped src="~assets/css/dateRange.css"></style>
<script>
import DatePicker from '../main.js'
import {format} from '../utils/DateUtil'
export default {
  name: 'date-picker',
  data () {
    return {
      showDateContent: false, // 开始日期选择内容框是关闭的
      datepicker: {},
      id: ''
    }
  },
  methods: {
    openContent () {
      // this.$refs.datesContent.style.display = 'block'
      this.showDateContent = true
      this.datepicker.init()
    },
    preMonth (current) {
      current = current.split('/')
      let currentDate = new Date(current[0], current[1] - 1, 1)
      let preDate = new Date(current[0], current[1] - 2, 1)
      // this.datepicker.showTwoMonth = this.datepicker.showOneMonth
      // this.datepicker.showOneMonth = preDate.getFullYear() + '/' + (preDate.getMonth() + 1)
      this.datepicker.preNext(preDate, currentDate)
    },
    nextMonth (current) {
      current = current.split('/')
      let currentDate = new Date(current[0], this.datepicker.options.calendars === 2 ? current[1] - 1 : current[1], 1)
      let nextDate = new Date(current[0], current[1], 1)
      // this.datepicker.showOneMonth = this.datepicker.showTwoMonth
      // this.datepicker.showTwoMonth = nextDate.getFullYear() + '/' + (nextDate.getMonth() + 1)
      this.datepicker.preNext(currentDate, nextDate)
    },
    formatDate (date) {
      if (!date) return ''
      return format(date, this.datepicker.options.format)
    },
    submitDates: function () {
      this.showDateContent = false
      let datesResult = {
        dates: [],
        range: '',
        startDate: null,
        endDate: null
      }

      let range = ''
      if (!this.datepicker.options.onlyOneDay) {
        let first = new Date(document.getElementsByClassName('first')[0].getAttribute('value'))
        datesResult.dates.push(first)
        datesResult.startDate = first

        let selects = document.getElementsByClassName('ta_dateRangeSelected')
        for (let select of selects) {
          datesResult.dates.push(new Date(select.getAttribute('value')))
        }
        let last = new Date(document.getElementsByClassName('last')[0].getAttribute('value'))
        datesResult.dates.push(last)
        datesResult.endDate = last

        this.datepicker.startDate = first
        this.datepicker.endDate = last

        range = this.formatDate(this.datepicker.first ? this.datepicker.first.value : null) + this.datepicker.options.defaultText + this.formatDate(this.datepicker.last ? this.datepicker.last.value : null)
      } else {
        let onlyOne = document.getElementsByClassName('onlyOne')[0].getAttribute('value')
        onlyOne = new Date(onlyOne)
        datesResult.date = onlyOne
        this.datepicker.date = onlyOne
        range = this.formatDate(onlyOne)
      }

      datesResult.range = range
      this.$refs.selectDates.value = range
      this.$emit('complete', datesResult)
    }
  },
  props: ['options', 'datesResult'],
  created () {
    this.datepicker = new DatePicker(this.options)
    console.log('*************wewewew************')
    console.log(this.options)
    console.log('*************wewewew************')
  },
  mounted () {
    // this.$refs.selectDates.value = this.formatDate(this.datepicker.first ? this.datepicker.first.value : null) + (this.datepicker.last ? '-' : '') + this.formatDate(this.datepicker.last ? this.datepicker.last.value : null)
    // this.submitDates()
    this.id = Math.random()
    let range = ''
    if (!this.datepicker.options.onlyOneDay) {
      range = this.formatDate(this.datepicker.first ? this.datepicker.first.value : null) + this.datepicker.options.defaultText + this.formatDate(this.datepicker.last ? this.datepicker.last.value : null)
    } else {
      range = this.formatDate(this.datepicker.first ? this.datepicker.first.value : null)
    }
    this.$refs.selectDates.value = range
  },
  beforeUpdate () {
  },
  updated (data) {
    console.log('=====update================')
    console.log(this)
    console.log('========update=============')
  },
  beforeDestroy () {
  },
  destroyed () {
  }
}
</script>

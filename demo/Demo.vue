<template>
  <div id="app">
    <date-picker :options="options1" id="test1" @complete='completeCb'></date-picker>
    <date-picker :options="options2" id="test2" @complete='completeCb'></date-picker>
    <div class="onlyOne">

    </div>
  </div>
</template>
<script>
  import DatePicker from '../src/index.js'
  export default{
    data () {
      return {
        datesResult: null,
        options1: {
          maxDate: new Date(2017, 10, 10),
          minDate: new Date(2017, 2, 10),
          startDate: new Date(2017, 7, 15),
          endDate: new Date(2017, 7, 25),
          weekDisable: true,
          calendars:2,
          format: 'yyyy年MM月dd日',
          datesDisable: [new Date(2017, 7, 16), new Date(2017, 7, 12)]
        },
        options2: {
          maxDate: new Date(2017, 10, 10),
          minDate: new Date(2017, 2, 10),
          date: new Date(2017, 7, 25),
          weekDisable: true,
          onlyOneDay: true,
          calendars:1,
          format: 'yyyy年MM月dd日',
          datesDisable: [new Date(2017, 7, 16), new Date(2017, 7, 12)]
        }
      }
    },
    methods: {
      completeCb (result) {
        this.datesResult = result
      }
    },
    components: {
      datePicker: DatePicker
    }
  }
</script>

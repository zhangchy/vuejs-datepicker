<template>
  <main>
    <date-picker :options="options" @complete='completeCb'></date-picker>
    <date-picker :options="options" @complete='completeCb'></date-picker>
  </main>
</template>
<script>
  import DatePicker from '../src/index.js'
  export default{
    data () {
      return {
        datesResult: null,
        options: {
          maxDate: new Date(2017, 10, 10),
          minDate: new Date(2017, 2, 10),
          startDate: new Date(2017, 7, 15),
          endDate: new Date(2017, 7, 25),
          weekDisable: true,
          dayRangeMax: 3,
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

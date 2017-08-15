<template>
  <main>
    <date-picker id="logo" :options="options"></date-picker>
  </main>
</template>
<script>
  import DatePicker from '../src/index.js'
  export default{
    data () {
      return {
        options: {
          maxDate: new Date(2017, 10, 10),
          minDate: new Date(2017, 2, 10),
          startDate: new Date(2017, 7, 15),
          endDate: new Date(2017, 7, 25)
        }
      }
    },
    components: {
      datePicker: DatePicker
    }
  }
</script>

# vuejs-datepicker

> datepicker component for Vue.js.

Built depends on Vue.js v2.0.1+.

## Installation

### npm

```bash
$ npm install vue-datepicker-easy
```

### Manual

Just download `production` and include it in your HTML file:

```html
<script src="path/to/vue-datepicker/production/vue-datepicker.js"></script>
<link rel="stylesheet" type="text/css" href="path/to/vue-datepicker/production/dateRange.css">
```

## Usage

### ES Modules with NPM

```js
import Vue from 'vue'
import DatePicker from 'vue-datepicker-easy'

// register component to use
```

### CommonJS with NPM without ES Next support

```js
var Vue = require('vue')

// requiring the UMD module
var Datepicker = require('vue-datepicker-easy')

// register component to use
```

## Using the component

```vue
<template>
<date-picker :options="polar"></date-picker>
</template>

```

See more examples [here](https://github.com/zhangchy/vuejs-datepicker/tree/master/demo).

### Properties

* `maxDate`

  This property indicates Datepicker instance max date can be selected. 最大可选日期

* `minDate`

This property indicates Datepicker instance min date can be selected.最小可选日期

* `startDate`

This property indicates Datepicker instance selected start date.当为时间范围选择时，起始日期

* `endDate`

This property indicates Datepicker instance selected end date.当为时间范围选择时，结束日期

* `onlyOneDay`

This property indicates Datepicker only one day can be select.是否只选择一项具体日期

* `date`

This property indicates Datepicker the only one day default date.当onlyOneDay为true时，默认的日期

* `dayRangeMax`

This property indicates Datepicker max range days. 当为时间范围选择时，可选择的最大天数范围

* `format`

This property indicates Datepicker date format. 日期格式

* `defaultText`

This property indicates Datepicker the default content to split dates.当为时间范围选择时，两个日期之间的分割符

* `calendars`

This property indicates Datepicker the calendars count.日历的数量

Open `http://localhost:8080/demo` to see the demo.

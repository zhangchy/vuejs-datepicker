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

  This property indicates Datepicker instance max date can be selected.
  
* `minDate`

This property indicates Datepicker instance min date can be selected.

* `startDate`

This property indicates Datepicker instance selected start date.
  
* `endDate`

This property indicates Datepicker instance selected end date.

Open `http://localhost:8080/demo` to see the demo.

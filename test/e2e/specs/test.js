// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
/*
* visibility != hidden
  display != none（其父元素包含此属性也是一样的）
  opacity != 0 (点击时并不会如此校验)
  height以及width 都 > 0
  对于input标签，没有hidden属性
*/
module.exports = {
  '@tags': ['unit'],
  'only on day select': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app')
      .click(".datepicker[0]", function(response) {
        console.log(response)
      })
      .assert.elementPresent('.ta_calendar')
      .end()
  }
}

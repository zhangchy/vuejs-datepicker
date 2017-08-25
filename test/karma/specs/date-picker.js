import { createTest, destroyVM } from '../util'
import DatePicker from '../../../src/index.js'
import Vue from 'vue'
describe('DatePicker', () => {
  let vm
  let dateResult = {}
  afterEach(() => {
    destroyVM(vm)
  })
  it('two default date select', done => {
    vm = createTest(DatePicker, {
      options: {
        maxDate: new Date(2017, 10, 10),
        minDate: new Date(2017, 2, 10),
        startDate: new Date(2017, 7, 15),
        endDate: new Date(2017, 7, 25),
        weekDisable: true,
        calendars: 2,
        format: 'yyyy年MM月dd日',
        datesDisable: [new Date(2017, 7, 16), new Date(2017, 7, 12)]
      },
      dateResult: dateResult
    }, true)
    const input = vm.$el.querySelector('.datepicker>input')

    input.focus()
    input.blur()
    Vue.nextTick(_ => {
      expect(input.value).toEqual('2017年08月15日至2017年08月25日')
      /* expect(vm.picker.start).to.equal('08:30');
      expect(vm.picker.end).to.equal('18:30');
      expect(vm.picker.step).to.equal('00:15');
      expect(vm.$el.querySelector('input').getAttribute('placeholder')).to.equal('test'); */
      destroyVM(vm)
      done()
    })
  })

  it('only one date can be selected', done => {
    vm = createTest(DatePicker, {
      options: {
        maxDate: new Date(2017, 10, 10),
        minDate: new Date(2017, 2, 10),
        date: new Date(2017, 7, 15),
        endDate: new Date(2017, 7, 25),
        onlyOneDay: true,
        weekDisable: true,
        calendars: 1,
        format: 'yyyy-MM-dd'
      },
      dateResult: dateResult
    }, true)
    const input = vm.$el.querySelector('.datepicker>input')

    input.focus()
    input.blur()
    Vue.nextTick(_ => {
      expect(input.value).toEqual('2017-08-15')
      /* expect(vm.picker.start).to.equal('08:30');
       expect(vm.picker.end).to.equal('18:30');
       expect(vm.picker.step).to.equal('00:15');
       expect(vm.$el.querySelector('input').getAttribute('placeholder')).to.equal('test'); */
      destroyVM(vm)
      done()
    })
  })

  /* it('select time', done => {
    vm = createVue({
      template: `
        <div>
          <el-time-select ref="compo" v-model="value">
          </el-time-select>
        </div>
      `,

      data() {
        return {
          value: ''
        };
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.focus();
    input.blur();

    Vue.nextTick(_ => {
      const items = vm.$refs.compo.picker.$el.querySelectorAll('.time-select-item');
      const target = items[4];
      const time = target.textContent;

      target.click();
      Vue.nextTick(_ => {
        expect(vm.value).to.equal(time);
        destroyVM(vm);
        done();
      });
    });
  });

  it('set default value', done => {
    vm = createTest(TimeSelect, {
      value: '14:30'
    }, true);
    const input = vm.$el.querySelector('input');

    input.focus();
    input.blur();

    setTimeout(_ => {
      expect(input.value).to.equal('14:30');
      expect(vm.picker.$el.querySelector('.selected')).to.be.ok;
      expect(vm.picker.$el.querySelector('.selected').textContent).to.equal('14:30');
      destroyVM(vm);
      done();
    }, 50);
  });

  it('set minTime', done => {
    vm = createVue(`
      <el-time-select
        ref="picker"
        :picker-options="{
          minTime: '14:30'
        }">
      </el-time-select>
    `, true);
    const input = vm.$el.querySelector('input');
    const picker = vm.$refs.picker;

    input.focus();
    input.blur();

    setTimeout(_ => {
      const elms = picker.picker.$el.querySelectorAll('.disabled');
      const elm = elms[elms.length - 1];

      expect(elm.textContent).to.equal('14:30');
      destroyVM(vm);
      done();
    }, 50);
  });

  it('minTime < value', done => {
    vm = createVue({
      template: `
        <el-time-select
          ref="picker"
          v-model="value"
          :picker-options="{
            minTime: '14:30'
          }">
        </el-time-select>
      `,
      data() {
        return { value: '09:30' };
      }
    }, true);
    const input = vm.$el.querySelector('input');
    const picker = vm.$refs.picker;

    input.focus();
    input.blur();

    setTimeout(_ => {
      vm.value = '10:30';

      setTimeout(_ => {
        expect(picker.picker.value).to.equal('09:30');
        destroyVM(vm);
        done();
      }, 50);
    }, 50);
  });

  it('set maxTime', done => {
    vm = createVue(`
      <el-time-select
        ref="picker"
        :picker-options="{
          maxTime: '14:30',
          step: '00:30'
        }">
      </el-time-select>
    `, true);
    const input = vm.$el.querySelector('input');
    const picker = vm.$refs.picker;

    input.focus();
    input.blur();

    setTimeout(_ => {
      const elm = picker.picker.$el.querySelector('.disabled');

      expect(elm.textContent).to.equal('14:30');
      destroyVM(vm);
      done();
    }, 50);
  });

  it('maxTime > value', done => {
    vm = createVue({
      template: `
        <el-time-select
          ref="picker"
          v-model="value"
          :picker-options="{
            maxTime: '14:30'
          }">
        </el-time-select>
      `,
      data() {
        return { value: '09:30' };
      }
    }, true);
    const input = vm.$el.querySelector('input');
    const picker = vm.$refs.picker;

    input.focus();
    input.blur();

    setTimeout(_ => {
      vm.value = '10:30';

      setTimeout(_ => {
        expect(picker.picker.value).to.equal('09:30');
        destroyVM(vm);
        done();
      }, 50);
    }, 50);
  }); */
})

import { mount } from '@vue/test-utils'
import Button from '../../src/components/Button.vue'

test('Test pass props to the Button', () => {
  const wrapper = mount(Button, {
    propsData: {
      btnText: 'Submit'
    }
  })

  expect(wrapper.props().btnText).toEqual('Submit')
})
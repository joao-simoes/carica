import { mount } from '@vue/test-utils'
import Homepage from '@/views/Homepage.vue'

describe('Homepage.vue', () => {
  it('renders tab 1 Tab1Page', () => {
    const wrapper = mount(Homepage)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})

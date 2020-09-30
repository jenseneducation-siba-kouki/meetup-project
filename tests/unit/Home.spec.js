import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';


describe('Home', () => {
  test('find the tag with "Meetup"', () => {
    const wrapper = shallowMount(Home)
    const msg = 'Meetup'

    const element = wrapper.find('h1').text()

    expect(element).toBe(msg)
  })
})

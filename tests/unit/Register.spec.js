import Register from "@/views/Register.vue";
import { shallowMount } from "@vue/test-utils";


describe('Register', () => {
   test('find there is an image src', () => {
        const wrapper = shallowMount(Register)
        const elements = wrapper.find('img')
        expect(elements.contains('img')).toBe(true)
    })
  })


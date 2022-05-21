/**
* @vitest-environment jsdom
*/

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import VInput from './VInput.vue';


describe('VInput component', () => {
  it('VInput should render', () => {
    const wrapper = mount(VInput);
    expect(wrapper.find('input')).exist.toBeTruthy();
  })

  it('VInput submit', async () => {
    const wrapper = mount(VInput);
    await wrapper.find('input[type="text"]').setValue('is testing');
  })
})

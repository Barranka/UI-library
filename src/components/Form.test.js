/**
* @vitest-environment jsdom
*/

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import Form from './Form.vue';


describe('Form component', () => {
  it('Form should render', () => {
    const wrapper = mount(Form);
    expect(wrapper.find('button')).exist.toBeTruthy();
  })

  it('Form has main components', async () => {
    const wrapper = mount(Form);
    await wrapper.find('input[type="text"]').setValue('is testing');
  })
})

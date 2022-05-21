/**
* @vitest-environment jsdom
*/

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import VButton from './VButton.vue';


describe('VButton component', () => {
  it('VButton should render', () => {
    const wrapper = mount(VButton, { props: {
      buttonType: String,
      buttonStyles: String,
      buttonClass: String,
      buttonDisabled: {
        type: Boolean,
        default: false,
      },
    }});
    expect(wrapper.find('button')).exist.toBeTruthy();
  })

  it('VButton submit', async () => {
    const wrapper = mount(VButton);
    await wrapper.find('button').trigger('click');
  })
})

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ColorShade from './ColorShade.vue'

describe('ColorShade', () => {
  it('propsを正しくレンダリングする', () => {
    const wrapper = mount(ColorShade, {
      props: {
        shade: '500',
        value: '#ff0000',
      },
    })

    expect(wrapper.text()).toContain('500')
    expect(wrapper.text()).toContain('#ff0000')
  })

  it('RGB値を正しく表示する', () => {
    const wrapper = mount(ColorShade, {
      props: {
        shade: '500',
        value: '#ff0000',
      },
    })

    expect(wrapper.text()).toContain('rgb(255,0,0)')
  })

  it('HSL値を正しく表示する', () => {
    const wrapper = mount(ColorShade, {
      props: {
        shade: '500',
        value: '#ff0000',
      },
    })

    expect(wrapper.text()).toContain('hsl(0,100%,50%)')
  })

  it('暗い色の場合は白テキストを使用する', () => {
    const wrapper = mount(ColorShade, {
      props: {
        shade: '900',
        value: '#000000',
      },
    })

    const textDiv = wrapper.find('.flex-none > div')
    expect(textDiv.classes()).toContain('text-white')
  })

  it('明るい色の場合は黒テキストを使用する', () => {
    const wrapper = mount(ColorShade, {
      props: {
        shade: '100',
        value: '#ffffff',
      },
    })

    const textDiv = wrapper.find('.flex-none > div')
    expect(textDiv.classes()).toContain('text-black')
  })
})

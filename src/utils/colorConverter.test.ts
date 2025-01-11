import { describe, it, expect } from 'vitest'
import { hexToRgb, rgbToHsl } from './colorConverter'

describe('hexToRgb', () => {
  it('正しいHEX値からRGB値に変換できる', () => {
    expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 })
    expect(hexToRgb('#00ff00')).toEqual({ r: 0, g: 255, b: 0 })
    expect(hexToRgb('#0000ff')).toEqual({ r: 0, g: 0, b: 255 })
    expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 })
    expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 })
  })

  it('#なしのHEX値も処理できる', () => {
    expect(hexToRgb('ff0000')).toEqual({ r: 255, g: 0, b: 0 })
    expect(hexToRgb('00ff00')).toEqual({ r: 0, g: 255, b: 0 })
  })

  it('無効なHEX値の場合はnullを返す', () => {
    expect(hexToRgb('invalid')).toBeNull()
    expect(hexToRgb('#xyz')).toBeNull()
    expect(hexToRgb('#12')).toBeNull()
    expect(hexToRgb('')).toBeNull()
  })
})

describe('rgbToHsl', () => {
  it('基本的なRGB値からHSL値に変換できる', () => {
    // 赤
    expect(rgbToHsl(255, 0, 0)).toEqual({ h: 0, s: 100, l: 50 })
    // 緑
    expect(rgbToHsl(0, 255, 0)).toEqual({ h: 120, s: 100, l: 50 })
    // 青
    expect(rgbToHsl(0, 0, 255)).toEqual({ h: 240, s: 100, l: 50 })
  })

  it('白黒のRGB値を正しく変換できる', () => {
    // 白
    expect(rgbToHsl(255, 255, 255)).toEqual({ h: 0, s: 0, l: 100 })
    // 黒
    expect(rgbToHsl(0, 0, 0)).toEqual({ h: 0, s: 0, l: 0 })
    // グレー
    expect(rgbToHsl(128, 128, 128)).toEqual({ h: 0, s: 0, l: 50 })
  })

  it('中間的な色も正しく変換できる', () => {
    // 黄色
    expect(rgbToHsl(255, 255, 0)).toEqual({ h: 60, s: 100, l: 50 })
    // シアン
    expect(rgbToHsl(0, 255, 255)).toEqual({ h: 180, s: 100, l: 50 })
    // マゼンタ
    expect(rgbToHsl(255, 0, 255)).toEqual({ h: 300, s: 100, l: 50 })
  })
})

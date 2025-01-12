import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useClipboard } from './useClipboard'

describe('useClipboard', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('クリップボードにコピーできる', async () => {
    const { showCopied, copyToClipboard } = useClipboard()
    const mockClipboard = {
      writeText: vi.fn().mockResolvedValue(undefined),
    }
    vi.stubGlobal('navigator', { clipboard: mockClipboard })

    await copyToClipboard('テストテキスト')

    expect(mockClipboard.writeText).toHaveBeenCalledWith('テストテキスト')
    expect(showCopied.value).toBe(true)

    vi.advanceTimersByTime(1500)
    expect(showCopied.value).toBe(false)
  })
})

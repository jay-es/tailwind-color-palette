import { ref } from 'vue'

export function useClipboard(timeout = 1500) {
  const showCopied = ref(false)
  let timeoutId: number | undefined

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      showCopied.value = true
      timeoutId = window.setTimeout(() => {
        showCopied.value = false
        timeoutId = undefined
      }, timeout)
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
    }
  }

  return {
    showCopied,
    copyToClipboard,
  }
}

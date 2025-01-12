<script setup lang="ts">
import { computed } from 'vue'
import { hexToRgb, rgbToHsl } from '@/utils/colorConverter'
import { useClipboard } from '@/composables/useClipboard'
import ColorValue from './ColorValue.vue'

interface Props {
  shade: string
  value: string
}

const props = defineProps<Props>()
const { showCopied, copyToClipboard } = useClipboard()

const rgbResult = computed(() => hexToRgb(props.value))

const rgb = computed(() => {
  if (!rgbResult.value) return null
  const { r, g, b } = rgbResult.value
  return `rgb(${r},${g},${b})`
})

const hsl = computed(() => {
  if (!rgbResult.value) return null
  const { r, g, b } = rgbResult.value
  const { h, s, l } = rgbToHsl(r, g, b)
  return `hsl(${h},${s}%,${l}%)`
})
</script>

<template>
  <div class="flex-none w-32 p-2 rounded relative" :style="{ backgroundColor: value }">
    <div :class="parseInt(shade) > 500 ? 'text-white' : 'text-black'">
      <div class="font-medium">{{ shade }}</div>
      <div class="text-xs font-mono">
        <ColorValue :value="value" @copy="copyToClipboard" />
        <ColorValue v-if="rgb" :value="rgb" @copy="copyToClipboard" />
        <ColorValue v-if="hsl" :value="hsl" @copy="copyToClipboard" />
      </div>
    </div>
    <span
      class="absolute top-1 right-1 px-1.5 py-0.5 text-xs text-white bg-gray-800/75 rounded shadow-lg transition-opacity"
      :class="showCopied ? 'opacity-100' : 'opacity-0'"
    >
      Copied!
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { hexToRgb, rgbToHsl } from '@/utils/colorConverter'

interface Props {
  shade: string
  value: string
}

const props = defineProps<Props>()

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
  <div class="flex-none w-32 p-2 rounded" :style="{ backgroundColor: value }">
    <div :class="parseInt(shade) > 500 ? 'text-white' : 'text-black'">
      <div class="font-medium">{{ shade }}</div>
      <div class="text-xs space-y-0.5 opacity-75 font-mono">
        <div>{{ value }}</div>
        <div v-if="rgb">{{ rgb }}</div>
        <div v-if="hsl">{{ hsl }}</div>
      </div>
    </div>
  </div>
</template>

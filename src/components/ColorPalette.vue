<script setup lang="ts">
import colors from 'tailwindcss/colors'
import ColorShade from './ColorShade.vue'

// 不要なカラーを除外
const excludeColors = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray']
const colorEntries = Object.entries(colors)
  .filter((entry) => !excludeColors.includes(entry[0]))
  .filter((entry): entry is [string, Record<string, string>] => typeof entry[1] === 'object')
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-8">Tailwind CSS Color Palette</h1>
    <div class="space-y-8">
      <div v-for="[colorName, shades] in colorEntries" :key="colorName">
        <h2 class="text-xl font-semibold capitalize mb-2">{{ colorName }}</h2>
        <div class="flex flex-nowrap gap-1">
          <ColorShade v-for="(value, shade) in shades" :key="shade" :shade="shade" :value="value" />
        </div>
      </div>
    </div>
  </div>
</template>

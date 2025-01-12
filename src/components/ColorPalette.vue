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
  <div class="px-6 py-4">
    <header class="space-y-1 mb-8">
      <h1 class="text-3xl font-bold">Tailwind CSS Color Palette</h1>
      <p class="text-gray-600">
        A comprehensive collection of Tailwind CSS colors with their RGB and HSL values.
        <a href="https://github.com/jay-es" target="_blank">
          &copy;<span class="underline">jay-es</span>
        </a>
      </p>
    </header>

    <div class="space-y-4">
      <div v-for="[colorName, shades] in colorEntries" :key="colorName">
        <h2 class="text-lg font-semibold capitalize mb-2">{{ colorName }}</h2>
        <div class="flex flex-nowrap gap-1">
          <ColorShade v-for="(value, shade) in shades" :key="shade" :shade="shade" :value="value" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  copy: [value: string]
}>()
</script>

<template>
  <div>
    <span
      class="opacity-75 cursor-pointer transition-opacity hover:underline hover:opacity-100 active:opacity-75"
      @click="emit('copy', value)"
      title="Click to copy"
    >
      {{ value }}
    </span>
  </div>
</template>

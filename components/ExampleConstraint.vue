<template>
  <form @submit.prevent>
    <p>
      <label>
        Pick an image file for your photo
        <input type="file" ref="el" accept="image/*" />
      </label>
      <span></span>
    </p>
    <p>
      <button type="submit">Save</button>
    </p>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

const MAX_SIZE = { label: '100 KB', bytes: 100 * 1024 }

onMounted(() => {
  const field = el.value
  const next = field.closest('label').nextElementSibling
  const kbFormatter = new Intl.NumberFormat('en-US', { style: 'unit', unit: 'kilobyte', unitDisplay: 'short', maximumFractionDigits: 0 })

  field.addEventListener('change', () => {
    if (field.files.length > 0) {
      next.textContent = ` (${kbFormatter.format(field.files[0].size / 1024)})`
    }

    if (field.files.length > 0 && field.files[0].size > MAX_SIZE.bytes) {
      field.setCustomValidity(`Photo file cannot exceed ${MAX_SIZE.label}`)
    } else {
      field.setCustomValidity('')
    }
  })
})

</script>

<style scoped>
input[type=file]:invalid {
  color: red;
}
input[type="file"]::file-selector-button {
  border: 1px solid #107aca;
  border-radius: 0.2rem;
  background: #eee !important;
  padding: 0 0.3rem;
  color: #107aca;
}
input[type=file]:invalid::file-selector-button {
  color: red;
  border-color: red;
}
label + span { color: gray; }
</style>
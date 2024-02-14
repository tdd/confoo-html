<template>
  <form ref="el">
    <p>
      <label>
        Select multiple files:
        <input type="file" multiple />
      </label>
    </p>
    <p>Selected files: <span></span></p>

    <p>
      <label>
        Type multiple e-mails:
        <input type="email" multiple autocomplete="email" />
        <span></span>
      </label>
    </p>
    <p>E-mail values: <span></span></p>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() => {
  for (const field of el.value.querySelectorAll('input')) {
    initTracking(field)
  }
})

function initTracking(field) {
  const next = field.closest('p').nextElementSibling.querySelector('span')

  field.addEventListener('change', track)

  track()

  function track() {
    if (field.type === 'file') {
      next.textContent = field.files.length > 0 ? JSON.stringify(Array.from(field.files ?? [], ({ name }) => name)) : ''
    } else {
      next.textContent = field.value
    }
  }
}
</script>

<style scoped>

p > span {
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
}

</style>

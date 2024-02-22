<template>
  <table ref="el">
    <tbody>
      <tr>
        <th><code>type="date"</code></th>
        <td><input type="date" /></td>
        <td></td>
      </tr>
      <tr>
        <th><code>type="time"</code></th>
        <td><input type="time" min="09:00" max="18:00" /></td>
        <td></td>
      </tr>
      <tr>
        <th><code>type="datetime-local"</code></th>
        <td><input type="datetime-local" /></td>
        <td></td>
      </tr>
      <tr>
        <th><code>type="month"</code></th>
        <td><input type="month" /></td>
        <td></td>
      </tr>
      <tr>
        <th><code>type="week"</code></th>
        <td><input type="week" /></td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
  const cell = field.closest('td')
  const next = cell.nextElementSibling

  // Detect unsupported types, e.g. month/week on Firefox and Safari as of Feb 2024
  if (field.getAttribute('type') !== field.type) {
    cell.innerText = '(Unsupported on this browser)'
    next.textContent = ''
    return
  }


  field.addEventListener('change', (e) => {
    next.textContent = field.value
  })

  if (field.type === 'month') {
    field.value = new Date().toISOString().split('-', 2).join('-')
  } else {
    field.valueAsNumber = Math.trunc(Date.now() / 60000) * 60000
  }
  next.textContent = field.value
}
</script>

<style scoped>

table {
  /* flex-grow: 1; */
  background: #E7F4FD;
}

th, td {
  white-space: nowrap;
}

td:last-child {
  width: 100%;
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
}

/* input {
  border: 1px solid silver;
  border-radius: 0.2rem;
} */

</style>

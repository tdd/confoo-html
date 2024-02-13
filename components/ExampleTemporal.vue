<template>
  <table  id="temporalDemo">
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
import { onMounted } from 'vue'

onMounted(() => {
  const scope = document.getElementById('temporalDemo')
  console.log(scope)
  for (const field of scope.querySelectorAll('input')) {
    initTracking(field)
  }
})

function initTracking(field) {
  console.log(field)
  const next = field.closest('td').nextElementSibling

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

<style>

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

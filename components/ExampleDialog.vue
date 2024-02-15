<template>
  <p>
    <button ref="el1">Open dialog</button>
     
    <span ref="el3"></span>
  </p>

  <dialog ref="el2">
    <form>
      <h1>🤔 Are you sure?</h1>
      <main>
      <p>Using built-in features makes for greater accessibility, lighter bundles and overall increased happiness.</p>
      <p>Please confirm you don't want to stay in bloat-land.</p>
      </main>
      <footer>
        <button type="submit" formmethod="dialog" value="yes" autofocus>Yes, I want to smile!</button>
        <button type="submit" formmethod="dialog" value="no">Nope, I like being sad</button>
      </footer>
    </form>
  </dialog>
</template>

<style scoped>

dialog {
  border: 0.2rem solid #107aca;
  border-radius: 0.5rem;
  user-select: none;
}

dialog form {
  padding: 0;
  background: transparent;
}

::backdrop {
  background-color: black;
  opacity: 0.4;
}

dialog h1 {
  margin: 0;
  font-size: 1.3em;
  font-weight: bold;
  color: white !important;
  background: #107aca;
  padding: 0 0.5rem;
}

dialog main {
  padding: 0 0.5rem;
}

dialog button:focus {
  color: #107aca;
  border-color: #107aca;
}

dialog footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

</style>

<script setup>
import { ref, onMounted } from 'vue'

const el1 = ref()
const el2 = ref()
const el3 = ref()

onMounted(() => {
  const trigger = el1.value
  const dialog = el2.value
  const dialogResult = el3.value

  trigger.addEventListener('click', () => {
    dialog.showModal()
  })

  dialog.addEventListener('close', (e) => {
    if (dialog.returnValue) {
      dialogResult.textContent = `Dialog result: ${dialog.returnValue}`
    }
  })
})

</script>
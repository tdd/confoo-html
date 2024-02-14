<template>
  <form @submit.prevent ref="el">
    <p>
      <label>
        Get a photo from the forward cam
        <input type="file" accept="image/*" capture="environment" />
      </label>
      <img style="display: none"/>
    </p>
    <p>
      <label>
        Record a video from the facing cam
        <input type="file" accept="video/*" capture="user" />
      </label>
      <video style="display: none" controls />
    </p>
    <p>
      <label>
        Record audio from your microphone
        <input type="file" accept="audio/*" capture="user" />
      </label>
      <audio style="display: none" controls />
    </p>
    <p>
      <label>
        Get a photo from the gallery
        <input type="file" accept="image/*" />
      </label>
      <img style="display: none"/>
    </p>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() => {
  for (const field of el.value.querySelectorAll('input[type="file"]')) {
    trackFile(field)
  }
})

function trackFile(field) {
  const next = field.closest('label').nextElementSibling

  field.addEventListener('change', () => {
    if (field.files.length > 0) {
    const url = URL.createObjectURL(field.files[0])
    next.src = url
    next.style.display = ''
    } else {
      next.src = ''
      next.style.display = 'none'
    }
  })
}

</script>

<style scoped>
p {
  display: flex;
  align-items: center;
  gap: 1rem;
}
input[type="file"]::file-selector-button {
  border: 1px solid #107aca;
  border-radius: 0.2rem;
  background: #eee !important;
  padding: 0 0.3rem;
  color: #107aca;
}
img, video { max-height: 150px !important; }
</style>
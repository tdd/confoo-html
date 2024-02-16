<template>
  <form @submit.prevent>
    <p>
      Check out the <a href="https://developer.mozilla.org/docs/Web/CSS/:focus-visible" target="_blank" rel="noreferer noopener">MDN docs</a> for <code>:focus-visible</code>.
    </p>
    <p>
      <label>Your name: <input name="name" /></label>
      <button type="submit">Go</button>
    </p>
  </form>
</template>

<style scoped>
:focus-visible { outline: 0.2rem solid red; }
button {
  margin-left: 0.5rem;
}
button:active {
  border-color: black;
  background: white !important;
}
</style>
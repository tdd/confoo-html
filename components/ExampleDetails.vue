<template>
  <details>
    <summary>Deep dive</summary>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis enim deleniti nulla perferendis aliquid, rerum eligendi velit dolor ullam…</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis enim deleniti nulla perferendis aliquid, rerum eligendi velit dolor ullam…</p>
  </details>
</template>

<style scoped>
details {
  border: 1px solid silver;
  border-radius: 0.2rem;
  padding: 0.5rem 0.5rem 0;
}
details summary {
  margin: -0.5rem -0.5rem 0;
  padding: 0.5rem;
}
details[open] {
  padding: 0.5rem; 
}
details[open] summary {
  border-bottom: 1px solid silver;
  margin-bottom: 0.5rem;
}
</style>
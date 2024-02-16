<template>
  <ul>
    <li>Montréal</li>
    <li>Québec</li>
    <li>Toronto</li>
    <li>Ottawa</li>
  </ul>
</template>

<style scoped>
  ul { list-style-type: square; }
  li::marker {
    color: #ff4773;
    font-size: 1.3em;
    animation: 2s linear infinite rotate;
  }
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>
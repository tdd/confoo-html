<template>
  <div>
    <p><a href="#target-demo">This is a local link to the demo target</a></p>
    <p><a href="25">This links to the previous slide</a></p>
    <p><a href="https://developer.mozilla.org">This links to the MDN</a></p>
    <p id="target-demo">This is a demo target</p>
  </div>
</template>

<style scoped>
p:target { background: #107aca; color: white; }
a:local-link { color: #ff4773; }
div:target-within {
  background: #FFCD4D; /* Doctolib Honeywell */
}
</style>
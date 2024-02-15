<template>
  <div class="meters">
    <p>
      <label for="compression">Image compression</label>
      <meter id="compression" value="70" min="0" max="100">70%</meter>
    </p>
    <p>
      <label for="opti">Optimization level</label>
      <meter id="opti" value="85" min="0" max="100" low="30" high="80" optimum="100">85%</meter>
    </p>
    <p>
      <label for="correct">Correct answers</label>
      <meter id="correct" value="5" min="0" max="20" low="10" high="15" optimum="20">7</meter>
    </p>
    <p>
      <label for="disk">Disk occupation</label>
      <meter id="disk" value="85" min="0" max="100" low="20" high="80" optimum="0">85%</meter>
    </p>
  </div>
</template>

<style scoped>
.meters {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
label { display: block; }
</style>
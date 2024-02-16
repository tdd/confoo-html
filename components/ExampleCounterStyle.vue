<template>
  <ul>
    <li>Cloudy</li>
    <li>With a Chance</li>
    <li>Of Meatballs</li>
    <li>(but Cloudy)</li>
  </ul>
</template>

<style scoped>
  @counter-style custom-icons {
    system: cyclic;
    symbols: "☁️" "🎱" "🥩";
    suffix: " ";
  }
  ul { list-style-type: custom-icons; }
</style>
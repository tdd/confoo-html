<template>
  <form @submit.prevent>
    <p>
      <label>
        Pick a conference:
        <input type="text" name="conference" list="conferences" />
      </label>
    </p>
    <p>
      <label>
        Accent color:
        <input type="color" name="accent" list="colors" />
      </label>
    </p>
    <p>
      <label>
        Preferred lunch time:
        <input type="time" name="lunch" list="lunchTimes" />
      </label>
    </p>
    <p>
      <label>
        Game difficulty:
        <input type="range" name="difficulty" min="1" max="10" step="1" value="9" list="difficulties" />
      </label>
    </p>
  </form>
  
  <datalist id="colors">
    <option value="#00264C"/>
    <option value="#107ACA"/>
    <option value="#00BFFF"/>
    <option value="#FFFFFF"/>
    <option value="#FFCD4D"/>
    <option value="#FF4773"/>
  </datalist>

  <datalist id="difficulties">
    <option value="1">N00b</option>
    <option value="8">Hard</option>
    <option value="9">Nightmare</option>
    <option value="10">Evil</option>
  </datalist>

  <datalist id="conferences">
    <option>ConFoo Montréal</option>
    <option>DevOpsDays Montréal</option>
    <option>dotJS</option>
    <option>Paris Web</option>
    <option>Rails World</option>
    <option>React Connection</option>
    <option>Web à Québec</option>
  </datalist>

  <datalist id="lunchTimes">
    <option value="12:00"/>
    <option value="12:30"/>
    <option value="13:00"/>
    <option value="13:30"/>
    <option value="14:00"/>
  </datalist>
</template>

<style scoped>
p { text-align: right; }
input { width: 18rem; margin-left: 0.5rem; }
input[type="time"] { width: 5rem; margin-right: 13rem; }
</style>
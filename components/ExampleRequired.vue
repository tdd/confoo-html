<template>
  <form @submit.prevent>
    <p>
      <label for="userName">User name</label>
      <input id="userName" name="user_name" required />
    </p>
    <p>
      <button type="submit">Submit</button>
    </p>
  </form>
</template>

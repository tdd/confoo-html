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

<style>

form {
  flex-grow: 1;
  background: #E7F4FD;
  padding: 0 0.5rem;
}

button[type="submit"] {
  border: 1px solid gray;
  border-radius: 0.2rem;
  background: #eee !important;
  padding: 0 0.3rem
}

label:has(+ input:required)::after {
  content: '*';
  color: red;
  margin-right: 0.5rem;
}

input {
  border: 1px solid silver;
  border-radius: 0.2rem;
}

input:user-invalid { border-color: red; }

input:user-valid { border-color: green; }

</style>

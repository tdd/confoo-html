<template>
  <form @submit.prevent>
    <p>
      <label for="userName">User name</label>
      <input id="userName" name="user_name" required pattern="\w+" />
      <span></span>
    </p>
    <p>
      <label for="packageName">Package name</label>
      <input id="packageName" name="package_name" required
      pattern="(?:@[0-9a-z\-]+\/)?[0-9a-z\-]+" />
      <span></span>
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

input + span {
  margin-left: 0.3rem;
}

input:user-invalid { border-color: red; }
input:user-invalid + span::before {
  content: '❌'
}

input:user-valid { border-color: green; }
input:user-valid + span::before { content: '✅' }

</style>

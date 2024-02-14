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

<template>
  <form @submit.prevent>
    <fieldset>
      <legend>Billing address</legend>
      <p><label>Name: <input name="billing_name" autocomplete="billing name" /></label></p>
      <p><label>Address: <input name="billing_address" autocomplete="billing street-address" /></label></p>
      <p><label>City: <input name="billing_city" autocomplete="billing address-level2" /></label></p>
      <p><label>State: <input name="billing_state" autocomplete="billing address-level1" /></label></p>
      <p><label>Zip code: <input name="billing_zip" autocomplete="billing postal-code" /></label></p>
    </fieldset>
    <fieldset>
      <legend>Credit card information</legend>
      <p><label>Holder: <input name="cc_name" autocomplete="cc-name" /></label></p>
      <p><label>Number: <input name="cc_number" autocomplete="cc-number" placeholder="XXXX XXXX XXXX XXXX" /></label></p>
      <p><label>Expiry: <input name="cc_expiry" autocomplete="cc-exp" placeholder="MM/YY" /></label></p>
      <p><label>CSC: <input name="cc_csc" autocomplete="cc-csc" /></label></p>
    </fieldset>
    <fieldset>
      <legend>Credentials</legend>
      <p><label>Password: <input name="pwd" type="password" autocomplete="current-password" /></label></p>
      <p><label>New password: <input name="new_pwd" type="password" autocomplete="new-password" /></label></p>
      
      <p>Also cool stuff about OTP and Web Authentication<br/>(but harder to demonstrate here)</p>
    </fieldset>
  </form>
</template>

<style scoped>
form {
  font-size: 0.8rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
fieldset { width: 19em; border: 1px solid silver; border-radius: 0.2rem; padding: 1rem; margin-bottom: 0.6rem; }
fieldset p { text-align: right; }
fieldset:last-of-type { flex-grow: 1; }
input { width: 12em; }
input[autocomplete~="postal-code"] { width: 5em; margin-right: 7em; }
input[autocomplete~="cc-exp"],input[autocomplete~="cc-csc"] { width: 4em; margin-right: 8em; }
</style>

<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() => {
})

</script>
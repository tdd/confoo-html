---
layout: cover
background: /covers/leon-dewiwje-ldDmTgf89gU-unsplash.jpg
---

# Forms

A treasure trove of native, accessible behavior

---

# Field requirements

Good ol' `required` attribute.  Also `:required` / `:optional` pseudo-classes and `::after` pseudo-element.

<div style="display: flex; align-items: top; gap: 1rem">

<div>

```html
<p>
  <label for="userName">User name</label>
  <input id="userName" name="user_name" required />
</p>
```

```css
label:has(+ input:required)::after {
  content: '*';
  color: red;
}

input:user-invalid { border-color: red; }
input:user-valid { border-color: green; }
```

</div>

<ExampleRequired />

</div>

Cool pseudo-classes for fields: `:valid` and `:invalid`, but favor `:user-valid` and `:user-invalid`.

<Footnote>

Careful: blank (whitespace-only) content satisfies `required`! [MDN Docs](https://developer.mozilla.org/docs/Web/HTML/Attributes/required)

</Footnote>

---

# So what if I don't want blank content either?

Just as for textual format, use `pattern`:

<div style="display: flex; align-items: top; gap: 1rem">

<div>

```html
<input name="user_name" required pattern="\w+" />
<span></span>

<input name="package_name" required
  pattern="(?:@[0-9a-z\-]+/)?[0-9a-z\-]+" />
<span></span>
```

```css
input:user-invalid + span::before { content: '❌' }
input:user-valid + span::before { content: '✅' }
```

</div>

<ExamplePattern />

</div>

<Footnote>

`pattern` covers the *entire* input (no need to use `^` and `$` anchors, for instance). Works on all textual input types. [MDN Docs](https://developer.mozilla.org/docs/Web/HTML/Attributes/pattern)

</Footnote>

---

# Built-in, solid patterns

**Don't** try to create your own patterns for e-mails, URLs, etc. unless you're trying to narrow these down.

We have textual **presets** that provide full patterns *and* get the **appropriate virtual keyboard** on touch devices.

<div style="display: flex; align-items: top; gap: 1rem">

```html
<!-- Keyboard + pattern -->
<input type="email" />
<input type="url" />

<!-- Keyboard -->
<input type="search" />
<input type="tel" />
```

<img src="/screenshot-input-tel.png" alt="A screenshot of a phone-related virtual phone keyboard" style="max-height: 200px"/>

<img src="/screenshot-input-email.png" alt="A screenshot of an email-related virtual phone keyboard" style="max-height: 200px"/>

<img src="/screenshot-input-search.png" alt="A screenshot of a search-related virtual phone keyboard" style="max-height: 200px"/>

</div>

<Footnote>

You can also use `pattern` with `inputmode` instead (e.g. local phone, public URLs).  MDN Docs for [`email`](https://developer.mozilla.org/docs/Web/HTML/Element/input/email), [`url`](https://developer.mozilla.org/docs/Web/HTML/Element/input/url), [`search`](https://developer.mozilla.org/docs/Web/HTML/Element/input/search) and [`tel`](https://developer.mozilla.org/docs/Web/HTML/Element/input/tel).<br/>Also see [`enterkeyhint`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/enterkeyhint).

</Footnote>

---

# A word about `readonly` vs. `disabled`…

### Any field can be `disabled`.

It is then **non-interactive** (not even focusable!) and **not submitted with the form** (including `FormData` usage).

### Most textual fields can be `readonly`.

They remain interactive (hence focusable) but their values can't be changed.

In particular, `readonly` has no effect on dropdowns (`<select>`), checkboxes, radio buttons, and inputs of types `color`, `range` or `file`

<Footnote>

Relevant CSS pseudo-classes: `:disabled`, `:enabled`, `:read-only` and `:read-write`. MDN Docs for [`disabled`](https://developer.mozilla.org/docs/Web/HTML/Attributes/disabled) and [`readonly`](https://developer.mozilla.org/docs/Web/HTML/Attributes/readonly).

</Footnote>

---

# Numerical fields

Use `<input type="number"/>` with care. UX is not always ideal…

If you want greater format flexibility (e.g. you want a custom `pattern`, or use more advanced live client-side formatting) but wish to get a relevant virtual keyboard, favor `inputmode` (values `decimal` or `numeric`), perhaps combined with a custom `pattern`.

However, just `inputmode="numeric"` won't give you the `type="number"` validation features (`min`, `max`, `step`) and UX (spin buttons, vertical arrow keys behavior).

It all depends on the nature of the numerical data you're asking for.

<div style="display: flex; align-items: top; gap: 1rem">

<div>

```html
// Quantity: `number` is likely best,
// especially if working in batches
<input type="number" name="qty"
  min="6" max="96" step="6" />
```

</div>

<div>

```html
// French Zip code: +/- UX (arrow keys, spinbuttons)
// makes no real sense, so…
<input inputmode="numeric" pattern="\d{5}"
  autocomplete="postal-code" name="zipCode" />
```

</div>

</div>

---

# Temporal fields

If you don't absolutely insist on a custom UX for these, there's a **wealth** of built-in input types you can use.  Most allow `min`, `max` and `step`, just like `number` fields.  Values are ISO8601 representations

<ExampleTemporal/>

<Footnote>

`time` / `datetime-local` may go all the way to the millisecond (picker included), depending on the granularity of the value you're setting it up with. Defaults to minute granularity.

</Footnote>

---

# A word about placeholders…

Placeholders are **not for important guidance**.

They're only shown **when there is no value** (and usually dimmed), so the moment the user starts typing or autocompletes, they're gone.  For useful guidance, favor persisting text below / after the field.

```html
<!-- ✅  Correct: "true" (discardable) placeholder -->
<input type="email" placeholder="john.mclane@nakatomi.co.jp" />

<!-- ❌  Incorrect: user guidance that should persist -->
<input type="ssn" placeholder="Use XXX-XX-XXXX format" />
```

You can **style placeholders** using the `::placeholder` pseudo-element and the `:placeholder-shown` pseudo-class (which is more specific than `:empty`, as it only targets empty textual fields *with a placeholder*).  

**Don't use the same rendering style as actual values though!** This would confuse your users.

---

# `multiple` is not just for `<select>`!

It also works for:

- `<input type="file" />` — allows multiple file selection<br/>
  (use the `files` property rather than `value`, which would only return the first name)
- `<input type="email" />` — allows multiple address input (separated by commas).
  - Spec weirdness: on `<input type="email" multiple />`, the `required` attribute is ignored! 😨

<ExampleMultiple />

---

# Built-in autocompletion: use proper scope & granularity

The `autocomplete` attribute is not just `"on"` and `"off"`… It has [a truckload of normalized values](https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete#values).

You can **scope** these by:

- standardized context (e.g. `shipping` and `billing` for address components and `home` / `work` / `mobile` / `fax` / `pager` for contact details such as phone numbers or e-mail)
- custom context with `scope-*` (e.g. personal vs. business credentials, or other distinct identity providers).

Some options totally rule, like `new-password`, `one-time-code` or `webauthn`. Check them out!

Using these judiciously helps craft a **delightful UX**.

How many times have you encountered an online payment form that didn't autocomplete your CC info properly? Or had your shipping address overwritten when autocompleting your billing address? That's what you get when someone didn't do this right.

<Footnote>

You can style an input that was filled through autocompletion using the `:autofill` pseudo-class.

</Footnote>

---

# Built-in autocompletion: use proper scope & granularity

<ExampleAutocomplete />

---

# Built-in autocompletion: providing your own values

Almost all data input types (except `password`, `file`, `checkbox` and `radio`) support a `list=` attribute referencing a `<datalist>` element where you can provide a **specific list** for built-in autocompletion.

The actual UI depends on the input type (e.g. first-phase dropdown, color palette, clickable slider ticks, etc.).

<div style="display: flex; align-items: top; gap: 1rem">

```html
<input type="text" name="conference"
  list="conferences" />

<datalist id="conferences">
  <option>ConFoo Montréal</option>
  <option>DevOpsDays Montréal</option>
  <option>dotJS</option>
  …
</datalist>
```

  <ExampleDatalist />
</div>


<Footnote>

Note that so far, accessibility isn't on par with default autocompletion (font zooming, CSS availability, screen reading…). YMMV.

</Footnote>

---

# Using the webcam, mic or local image gallery 🤯

And this, **without `getUserMedia()`** (but **mostly on mobile devices**).

<!-- 

  multimédia (capture audio / vidéo) (type="file" capture=)
    ::file-selector-button
 -->

<ExampleCapture />

```html
<input type="file" accept="image/*" capture="environment" />
<input type="file" accept="video/*" capture="user" />
<input type="file" accept="audio/*" capture="user" />
<input type="file" accept="image/*" />
```

---

# Submitter power-ups

Did you know you can have a submitter **outside** of the form? Just use the `form=` attribute!

```html
<button type="submit" form="yourFormId">Apply</button>
```

Also you can have **multiple submitters with distinct behaviors** in the same form?

```html
<button type="submit" formmethod="post" formaction="/accounts/42">Update account</button>

<button type="submit" formmethod="get" formaction="/accounts">Search accounts</button>
```

<Footnote>

Also `formenctype` (for file uploads), `formnovalidate` and `formtarget`.

</Footnote>

---

# Manipulating form data

Time to stop using `form.elements` and tons of custom checks: use [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData)!

Interoperable with `fetch()` and `URLSearchParams`, and a JS synchronous iterable too (e.g. `for…of` loops, `Array.from()` or `Object.fromEntries()`).  Does reflect what would actually be submitted (e.g. filtering disabled fields, unchecked boxes, etc.). Plus, it's mutable (e.g. `append()`, `delete()`, `set()`).

<div style="display: flex; align-items: top; gap: 1rem">

```html
<form id="form">
  <input name="text1" value="foo" />
  <input name="text2" value="bar" />
  <input name="text2" value="baz" />
  <input name="text3" disabled value="quux" />
  <input type="checkbox" name="c" checked disabled />
  <select name="text4" multiple>
    <option value="hello" selected>Hello</option>
    <option value="world">World</option>
    <option value="cool" selected>Cool</option>
  </select>
</form>
```

```js
// You can also pass a specific
// submitter as 2nd arg
const data = new FormData(form) 

for (const [key, value] of formData) {
  console.log(`${key}: ${value}`)
  // 'text1: foo', 'text2: bar',
  // 'text2: baz', 'text4: hello',
  // 'text4: cool'
}
console.log(formData.getAll('text4'))
// => 'hello,cool'
```

</div>

---

# Blending custom validation

So far we've only mentioned built-in navigation: `required`, `pattern`, `min`, `max`, `minlength`, etc.

Major benefit: **built-in error-reporting UI**.

But what about our business-logic validations? Are we doomed to re-implementing error reporting there?

Enter the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation).

Validation is triggered by interactive form submission or explicit calls to `checkValidity()` / `reportValidity()` methods on forms or fields.

We can provide custom validity info on any field by calling its `setCustomValidity()` method. You can also use it when eximining the field's `validity` information to replace built-in error messages with custom ones.

---

# Blending custom validation

```html
<input type="file" id="photo" name="photo" accept="image/*" />
```

```js
const MAX_SIZE = { label: '100 KB', bytes: 100 * 1024 }

const field = document.getElementById('photo')
field.addEventListener('change', () => {
  if (field.files.length > 0 && field.files[0].size > MAX_SIZE.bytes) {
    field.setCustomValidity(`Photo file cannot exceed ${MAX_SIZE.label}`)
  } else {
    field.setCustomValidity('')
  }
})
```

<ExampleConstraint />
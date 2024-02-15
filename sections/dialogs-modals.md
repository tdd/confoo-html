---
layout: cover
background: /covers/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg
---

# Dialogs & modals

We don't need no library for this!

---

# Native dialogs FTW!

The `<dialog>` element, its API and the `::backdrop` pseudo-element go a long way. They're completely unstyled (so your hands are free) but provide all the UX and accessibility for you. Can work in modal or non-modal mode.

<ExampleDialog />

```html
<dialog>
  <form>
    …
    <button type="submit" formmethod="dialog" value="yes" autofocus>Yes!</button>
    <button type="submit" formmethod="dialog" value="no">Nope…</button>
  </form>
</dialog>
```

```js
trigger.addEventListener('click', () => {
  dialog.showModal() // .show() would be non-modal
})
dialog.addEventListener('close', () => {
  // See dialog.returnValue -- not updated on Esc-based exit!
})
```
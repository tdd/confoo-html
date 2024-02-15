---
layout: cover
background: /covers/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg
---

# Dialogs, modals and more!

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

---

# Collapsible views

Getting more popular recently, e.g. on GitHub and in tech docs: `<details>` + `<summary>`.

Unstyled, you do you!

```html
<details> <!-- open attribute auto-opens -->
  <summary>Deep dive</summary>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit…</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit…</p>
</details>
```

<ExampleDetails />

---

# Meters and progressbars

The `<progress>` element is a progress-report widget with optional value and maximum.

When no value is provided it is **indeterminate**, which is nice for ongoing operations with no clear ETA, such as a network request.

The `<meter>` element is always determinate, but beyond providing explicit `min`/`max` and `value`, you can also define `low`/`optimum`/`high`, and the color of the bar will change accordingly:

<ExampleMeter />

```html
<meter id="compression" value="70" min="0" max="100">70%</meter>
<meter id="opti" value="85" min="0" max="100" low="30" high="80" optimum="100">85%</meter>
<meter id="correct" value="5" min="0" max="20" low="10" high="15" optimum="20">7</meter>
<meter id="disk" value="85" min="0" max="100" low="20" high="80" optimum="0">85%</meter>
```

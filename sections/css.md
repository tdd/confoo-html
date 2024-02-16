---
layout: cover
background: /covers/maik-jonietz-_yMciiStJyY-unsplash.jpg
---

# Styling native behavior with CSS

Gotta grab'em all

---

# Targeting links

You likely know `:visited`, `:hover`, `:focus` and `:active`. But wait, there's more!

`:target` targets the element whose ID matches the current URL's anchor part.

Coming soon in browsers:

- `:local-link` targets links within the current page (as opposed to links to other pages).
- `:target-within` for elements that are, or contain, the target of the current URL's anchor part.

<ExampleCSSTargets />

---

# Focus time

So you likely know `:focus`, which targets the element that currently holds the keyboard focus.

It does create a dilemma between accessibility and UI design, though.  Having a very strong "focus ring" is important for usage categories (e.g. keyboard navigation, cognitive challenges) but distracting or even confusing for others (e.g. focusing *via* mouse click).

The newer `:focus-visible` pseudo-class refines the semantics of `:focus` with browser heuristics determining that strong focus rings are desirable (in practice this is mostly about keyboard navigation).

```css
a:focus-visible, input:focus-visible { outline: 0.2rem solid red; }
```

<ExampleFocus />

<!-- 
  :focus vs. :focus-visible vs. :focus-within
 -->

 <Footnote>
 
 Want to learn more? [Sara Soueidan](https://www.sarasoueidan.com/blog/focus-indicators/#showing-the-focus-indicator-only-for-keyboard-users) and [Dequeue](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) have great articles about this. Also check out [`:focus-within`](https://developer.mozilla.org/docs/Web/CSS/:focus-within).
 
 </Footnote>

---

# YOLO list markers

Good ol' `list-style-type` and `list-style-image` can get you quite far.

But the former requires a full counter style (or predefined marker types), whilst the latter provides a single image for all items (and requires an actual image file). Also, they're all about the **contents** of the marker, not about the **style** of it.

If you want to customize the appearance of the marker, you can target it with `::marker`.

```css
ul { list-style-type: square; }
li::marker { color: #ff4773; font-size: 1.3em; animation: 2s linear infinite rotate; }
```

<ExampleMarker />

---

# By the way, counter styles?

Did you know we've long* been able to define fully custom counter styles for lists?

```css
@counter-style custom-icons {
  system: cyclic;
  symbols: "☁️" "🎱" "🥩";
  suffix: " ";
}
ul { list-style-type: custom-icons; }
```

<ExampleCounterStyle />

<Footnote>

\* Well, Safari only got it at 17 (last Fall), but everyone else has had it for long…

</Footnote>
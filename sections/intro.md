# `whoami`

```js
const christophe = {
  family: { wife: "👩🏻‍🦰 Élodie", sons: ["👦🏻 Maxence", "👦🏻 Elliott"] },
  city: "Paris, FR",
  company: {
    name: "Doctolib",
    hiring: true,
    superCool: true
  },
  webDevSince: 1995,
  mightBeKnownFor: [
    "Prototype.js",
    "Prototype and Script.aculo.us (“The Bungie Book”)",
    "dotJS",
    "Paris Web",
    "NodeSchool Paris",
  ],
};
```

---

# A word about <img src="/logo-doctolib.png" alt="Doctolib" style="height: 1em; margin: 0; padding: 0; display: inline;" />…

[Doctolib](https://www.doctolib.fr/) is **the leading healthcare technology company in Europe**

We provide a **top-notch** "operating system" of services and tools to **care teams and patients** in multiple countries

Two core missions:

- **Improve the daily lives of care teams**
- **Improve everyone's health and healthcare access**

**700+ developers** and tech staff among 2,800+ Doctolibers. Great culture.

Tech stack: Ruby / Rails, Java / Spring Boot, React/TypeScript, PostgreSQL, MongoDB, AWS.

Offices in Paris (HQ), Nantes, Niort, Berlin and Milan, nice hybrid working policies.

We're always hiring talented tech staff! Check out our [careers page](https://careers.doctolib.com/tech-doctolib/)!

---
layout: cover
background: /covers/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg
---

# JavaScript or ECMAScript?!

ECMA, TC39, ECMAScript and JavaScript

---

# ECMA and TC39

**ECMA** is an international standards body
(much like ISO, IETF, W3C or the WHATWG, for instance)

**ES = ECMAScript**. The official standard for JavaScript\*

**TC39** = Technical Committee 39. Caretaker of several standards:
ECMAScript (ECMA-262), Intl (ECMA-402), JSON (ECMA-404), etc.

<Footnote>

Which happens to be, for the U.S., a registered trademark of Oracle Corp. I know. 🤢

</Footnote>

---

# How TC39 moves JavaScript forward

Meets every two months (remote, in-room, hybrid)

**Yearly release cycle:** feature-freezing in January or March, official release in June.

“ES6” = ES2015, “ES7” = ES2016, and we now say ES2024, etc.

This is all [transparent and public](https://github.com/tc39).

---

# The [**5 stages**](https://tc39.github.io/process-document/) of ~~grief~~ the TC39 process

<table>
  <thead>
    <tr>
      <th>Stage</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr v-click>
      <th><strong>0 Strawman</strong></th>
      <td>“Say, wouldn't a unicorn (🦄) operator be awesome for…”</td>
    </tr>
    <tr v-click>
      <th><strong>1 Proposal</strong></th>
      <td>A TC39 member becomes the proposal's “champion.”  General API is defined and most cross-cutting concerns are handled.</td>
    </tr>
    <tr v-click>
      <th><strong>2 Draft</strong></th>
      <td>Initial <em>Spec Text</em> is done, which covers all critical aspects and tech semantics.</td>
    </tr>
    <tr v-click>
      <th><strong>3 Candidate</strong></th>
      <td>Spec is finalized, duly reviewed and approved. API is finalized, all edge cases are handled.</td>
    </tr>
    <tr v-click>
      <th><strong>4 Finished</strong></th>
      <td>Full Test262 coverage, 2+ native implementations (often v8 and Spidermonkey), significant real-world feedback, and <em>Spec Editor</em> sign-off. Will ship in the next feature freeze (January/March), and then in the follow-up official release.</td>
    </tr>
  </tbody>
</table>

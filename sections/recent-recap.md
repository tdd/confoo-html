---
layout: cover
background: /covers/aaron-burden-CKlHKtCJZKk-unsplash.jpg
---

# Quick refresher:<br/>ES2020–2023

A curated list of things too few people heard about 😉

---

# ES2020: `String#matchAll`

Captures **all groups** for a sticky or **global** regex.

```js
const text = 'Get in touch at tel:0983450176 or sms:478-555-1234'

text.match(/(?<protocol>[a-z]{3}):(?<number>[\d-]+)/g)
// => ['tel:0983450176', 'sms:478-555-1234'] -- 😞 DUDE, WHERE ARE MY GROUPS?!
```

```js
Array.from(text.matchAll(/([a-z]{3}):([\d-]+)/g)).map(
  ([, protocol, number]) => ({ protocol, number })
)
// => [{ number: '0983450176', protocol: 'tel' }, { number: '478-555-1234', protocol: 'sms' }]

Array.from(text.matchAll(/(?<protocol>[a-z]{3}):(?<number>[\d-]+)/g)).map((mr) => mr.groups)
// => [{ number: '0983450176', protocol: 'tel' }, { number: '478-555-1234', protocol: 'sms' }]
```

---

# ES2020 / ES2021: `Promise.allSettled`/`any`

The two missing combinators: `any` short-circuits on the **first fulfillment**, whilst `allSettled` doesn't short-circuit at all: you get all settlements for analysis.

Together with `all` (short-circuits on first rejection) and `race` (short-circuits on first settlement) from ES2015, we now cover all scenarios.

```js
// May the fastest strategy win!
const data = await Promise.any([fetchFromDB(), fetchFromCache(), fetchFromHighSpeedLAN()])

// Run all tests in parallel, no short-circuit!
await Promise.allSettled(tests)
// => [
//   { status: 'fulfilled', value: Response… },
//   { status: 'fulfilled', value: undefined },
//   { status: 'rejected', reason: Error: snapshot… }
// ]
```

---

# ES2022: `at()` on position-based native iterables 🤩

You know how `Array` and `String` let you use negative indices with `slice`, `splice`, etc. but not with `[…]`? This novelty lets you grab last elements without a cringe.

From now on, **all position-based native iterables** offer `.at(…)` that understands negative indices!

```js
const cities = ['Freiburg', 'Antwerp', 'San Francisco', 'New York']
cities.at(-1) // => 'New York'
cities.at(-2) // => 'San Francisco'
```

---

# ES2023: Find From Last 😙

`Array`s have had `find` and `findIndex` for quite a while (ES2015), but what about searching **from the end**?

After all, we've had `reduceRight` and `lastIndexOf` since forever, right?

Until recently you had to roll your own loops 😔 or bring out the big guns and do a (mutative!) `reverse()` first, but not anymore!

```js
const leaderboard = [
  { id: 'Bart', score: 91, firstTime: false },
  { id: 'Lisa', score: 102, firstTime: true },
  { id: 'Homer', score: 115, firstTime: true },
  { id: 'Marge', score: 138, firstTime: false },
]

const bestFirstTimer = leaderboard.findLast(({ firstTime }) => firstTime)
// => { id: 'Homer', score: 115, firstTime: true }
const bestUsualIndex = leaderboard.findLastIndex(({ firstTime }) => !firstTime)
// => 3
```

---

# ES2023: Change Array by Copy

A series of cool utilities that let you derive arrays (yay immutability). `Array`'s API so far exposed 8 derivative methods (producing new arrays) and 9 mutative methods (modifying arrays in place), including `reverse()` and `sort()`, which many folks didn't realize were mutative!

```js
const todaysOtherKnownSpeakers = ['Christine', 'Elliot', 'Miriam', 'Harrison']

todaysOtherKnownSpeakers.toReversed() // => ['Harrison', 'Miriam', 'Elliot', 'Christine']
todaysOtherKnownSpeakers.toSorted() // => ['Miriam', 'Harrison', 'Elliot', 'Christine']
todaysOtherKnownSpeakers.toSpliced(-2, 2) // => ['Miriam', 'Harrison']
todaysOtherKnownSpeakers.with(-2, 'Suzanne') // => ['Christine', 'Elliot', 'Suzanne', 'Harrison']

todaysOtherKnownSpeakers // => ['Christine', 'Elliot', 'Miriam', 'Harrison']
```

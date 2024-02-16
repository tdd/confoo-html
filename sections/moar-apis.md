---
layout: cover
background: /covers/james-harrison-vpOeXr5wmR4-unsplash.jpg
---

# Moar APIs!

JS' standard library is full of surprises.

---

# Slicing and dicing URLs

I still see people hacking on raw strings 😮‍💨

We've had `URL` and `URLSearchParams` for **ages** (also in Node). Can be used standalone or combined.

```js
const url = new URL('/info', window.location)
url.searchParams.append('foo', 42)
url.searchParams.append('foo', 21)
url.searchParams.append('bar', 'so nice')
url.toString()
// => 'http://localhost:3030/info?foo=42&foo=21&bar=so+nice'
```

By far the most robust way of analyzing a URL's components and building / tweaking a URL from individual parts.  Search params are iterable, hence easy to consume in multiple ways.

<Footnote>

Here's an [in-depth article in French](https://delicious-insights.com/fr/articles-et-tutos/url-search-params/).

(Even in Node, using these globals is now preferred over the legacy `url` and `querystring` built-in modules.)

</Footnote>

---

# Formatting dates, times and temporal ranges

We're going to spend a few slides on the **amazing** `Intl` API. It's very well supported across the board.

```js
const ft = new Intl.DateTimeFormat('fr-CA', { dateStyle: 'full', timeZone: 'America/Montreal' })
const relative = new Intl.RelativeTimeFormat('fr-CA', { numeric: 'auto' })

ft.format(new Date()) // => 'mercredi 21 février 2024'
ft.format(new Date('2024-02-16T03:42+09:00')) // => 'jeudi 15 février 2024'

new Date().toLocaleString('fr-CA', { timeStyle: 'short' }) // => '14 h 30'
new Date().toLocaleString('en-CA', { timeStyle: 'short' }) // => '02:30 p.m.'

ft.formatRange(new Date('2024-02-21'), new Date('2024-02-23'))
// => 'mardi 20 – vendredi 23 février 2024'
ft.formatRange(new Date('2024-02-21'), new Date('2024-03-22'))
// => 'mardi 20 février – vendredi 22 mars 2024'

relative.format(-2, 'days') // => 'avant-hier'
relative.format(1, 'week') // => 'la semaine prochaine'
```

---

# Formatting numbers and currencies

It's just as amazing when working with numeric values…

```js
const fr = new Intl.NumberFormat('fr-CA')
const us = new Intl.NumberFormat('en-US')

fr.format(3415.69) // => '3 415,69'
us.format(3415.69) // => '3,415.69'

const cash = 3415.69, speed = 2.3456, fileSizeMB = 4238394 / (2**20)
cash.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) // => '$3,415.69'
cash.toLocaleString('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'name' })
// => '3,415.69 US dollars'

speed.toLocaleString('fr-CA', { style: 'unit', unit: 'kilometer-per-hour' }) // => '2,346 km/h'
fileSizeMB.toLocaleString('fr-CA', { style: 'unit', unit: 'megabyte', notation: 'compact' })
// => '4 Mo' -- notice how it skipped decimals as it was "very close" to 4 (compact mode)
```

<Footnote>

Here's a [deep-dive](https://delicious-insights.com/en/posts/js-number-formatting/) article.

</Footnote>

---

# Sorting like a boss

`localeCompare()` on Strings has long been useful.  `Intl.Collator` takes it to the next level!

```js
const names = ['Élodie', 'christophe', 'Maxence', 'Elliott', 'Mårk']
names.sort((s1, s2) => s1.localeCompare(s2))
// => ['christophe', 'Elliott', 'Élodie', 'Mårk', 'Maxence'] 😍

const dimensions = [
  '40cm × 50cm', '40cm* × 45cm', '100cm × 120cm',
  '100cm × 50cm', '40cm × 40cm', '30cm × 40cm',
]
const sorter = new Intl.Collator('en-CA', { numeric: true, ignorePunctuation: true })
dimensions.sort(sorter.compare)
// => ['30cm × 40cm', '40cm × 40cm', '40cm* × 45cm',
//     '40cm × 50cm', '100cm × 50cm', '100cm × 120cm']
```

<Footnote>

Here's a [deep-dive](https://delicious-insights.com/en/posts/js-array-sorting/) article.

</Footnote>

---

# Standard reference lists (countries, languages, etc.)

Behold `Intl.DisplayNames` and `Intl.supportedValuesOf()`!

```js
Intl.supportedValuesOf('timeZone')
// => (428) ['Africa/Abidjan', … 'America/Montreal', … 'Europe/Paris', … 'Pacific/Wallis']

const regions = ['CA', 'ES', 'FR', 'MX', 'JP']
const cl = new Intl.DisplayNames('fr-CA', { type: 'region' })
regions.map(cl.of, cl) // => ['Canada', 'Espagne', 'France', 'Mexique', 'Japon']

const langs = ['fr-CA', 'nl', 'nl-BE', 'br', 'pt-BR']
const ll = new Intl.DisplayNames('en-US', { type: 'language' })
langs.map(ll.of, ll)
// => ['Canadian French', 'Dutch', 'Flemish', 'Breton', 'Brazilian Portuguese']

const cl = new Intl.DisplayNames('es-US', { type: 'currency', fallback: 'none' })
Intl.supportedValuesOf('currency').map(cl.of, cl).filter(Boolean).sort()
// => (158) ['afgani', … 'dólar estadounidense', … 'euro', … 'peso mexicano', … 'yuan']
```

---

# Slicing text appropriately

You might know that `String`'s legacy API (`slice()`, `[…]`, `charAt()`, `length` etc.) is based on *code units* (16-bit units), which are not *codepoints* (Unicode "atoms"). However, `String` is *iterable based on Unicode* (codepoints):

```js
'Salut ! 👋'.length    // => 10 🤔
'Salut ! 👋'.charAt(8) // => '\uD83D' 😡

const cps = Array.from('Salut ! 👋')
cps.length // => 9 ✅
cps.at(-1) // => '👋' ✅
```

But it doesn't handle *graphemes* or *grapheme clusters*. You can get them through `Intl.Segmenter`:

```js
'Us: 👨‍👩‍👧‍👦'.length // => 15
Array.from('Us: 👨‍👩‍👧‍👦').length // => 11
[...new Intl.Segmenter('en-US', { granularity: 'grapheme' }).segment('Us: 👨‍👩‍👧‍👦')].length // => 5
```

---

# Montréal-special bonus round

```js
const canadianWords = new Intl.Segmenter('fr-CA', { granularity: 'word' })
const question = 'Ostie d’calice t’as-tu donc fini d’niaiser avec le puck ?!'

Array.from(canadianWords.segment(question))
  .filter((s) => s.isWordLike)
  .map((s) => s.segment)
// => (8) ['Ostie', 'd’calice', 't’as', 'tu', 'donc', 'fini', 'd’niaiser', 'avec', 'le', 'puck']
```

---

# Formatting enumerations

Oxford comma, or not? Commas or words? Formatting an enumeration is not *that* hard, but varies based on locale, so why bother doing it ourselves?

```js
const names = ['Christophe', 'Elliot', 'Élodie', 'Maxence']
new Intl.ListFormat('fr-CA').format(names)
// => 'Christophe, Elliot, Élodie et Maxence'

new Intl.ListFormat('en-US').format(names)
// => 'Christophe, Elliot, Élodie, and Maxence'

new Intl.ListFormat('en-US').format(['Jane', 'John'])
// => 'Jane and John'

new Intl.ListFormat('en-US', { type: 'disjunction' }).format(names)
// => 'Christophe, Elliot, Élodie, or Maxence'
```
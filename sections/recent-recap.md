---
layout: cover
background: /covers/aaron-burden-CKlHKtCJZKk-unsplash.jpg
---

# Petits rappels rapides :<br/>ES2020–2023

Une liste choisie des trucs que trop de gens on loupé 😉

---

# ES2020 : `String#matchAll`

Capture **tous les groupes** pour une regex **globale** ou sticky.

```js
const text = 'Get in touch at tel:0983450176 or sms:478-555-1234'

text.match(/(?<protocol>[a-z]{3}):(?<number>[\d-]+)/g)
// => ['tel:0983450176', 'sms:478-555-1234'] -- 😞 BAH ILS SONT OÙ MES GROUPES ?!
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

# ES2020 / ES2021 : `Promise.allSettled`/`any`

Les deux combinateurs qui manquaient : `any` court-circuite sur le **premier accomplissement**, tandis que`allSettled` ne court-circuite pas : on obtient tous les établissements pour analyse.

Avec les `all`(court-circuite sur premier rejet) et `race` (court-circuite sur premier établissement) d'ES2015, on couvre désormais tous les cas.

```js
// Que le succès le plus rapide gagne !
const data = await Promise.any([fetchFromDB(), fetchFromHighSpeedLAN()])

// Exécute les tests en parallèle, sans court-circuit !
await Promise.allSettled(tests)
// => [
//   { status: 'fulfilled', value: Response… },
//   { status: 'fulfilled', value: undefined },
//   { status: 'rejected', reason: Error: snapshot… }
// ]
```

---

# ES2022 : `at()` sur les itérables natifs 🤩

Tu vois comme `Array` et `String` te permettent d'utiliser des indices négatifs avec `slice`, `splice`, etc. mais ne les reconnaissent pas dans `[…]` ? Cette nouveauté permet d'aller récupérer les derniers éléments sans râler.

Désormais, sur **tous les itérables natifs** on a `.at(…)` qui autorise les indices négatifs !

```js
const cities = ['Antibes', 'Cannes', 'Nice', 'Toulon']
cities.at(-1) // => 'Toulon'
cities.at(-2) // => 'Nice'
```

---

# ES2023 : Find From Last 😙

Les `Array` ont `find` et `findIndex` depuis un bail (ES2015), mais quid de la recherche **depuis la fin** ?

Après tout, on a `reduceRight` et `lastIndexOf` depuis longtemps, pas vrai ?

Jusque-là on devait se fader nos propres boucles 😔 ou sortir la grosse artillerie en faisant un `reverse()` (mutatif !) d'abord, mais plus maintenant !

```js
const codeInTheDarkLeaderboard = [
  { id: 'Bart', score: 91, firstTime: false },
  { id: 'Lisa', score: 102, firstTime: true },
  { id: 'Homer', score: 115, firstTime: true },
  { id: 'Marge', score: 138, firstTime: false },
]

const bestFirstTimer = codeInTheDarkLeaderboard.findLast(({ firstTime }) => firstTime)
// => { id: 'Homer', score: 115, firstTime: true }
const bestUsualIndex = codeInTheDarkLeaderboard.findLastIndex(({ firstTime }) => !firstTime)
// => 3
```

---

# ES2023 : Change Array by Copy

Une série de petits utilitaires en plus pour dériver des tableaux (immuable donc).  L'API de `Array` comptait jusqu'alors 8 méthodes dérivatives (produisant un nouveau tableau) pour 9 méthodes mutatives (qui modifient le tableau d'origine), y compris `reverse()` et `sort()`, ce que beaucoup de gens ne réalisaient pas !

```js
const sameSlotSpeakers = ['Jean-Philippe', 'Gérard', 'Aleš', 'Benjamin']

sameSlotSpeakers.toReversed() // => ['Benjamin', 'Aleš', 'Gérard', 'Jean-Philippe']
sameSlotSpeakers.toSorted() // => ['Aleš', 'Benjamin', 'Gérard', 'Jean-Philippe']
sameSlotSpeakers.toSpliced(-2, 2) // => ['Aleš', 'Benjamin']
sameSlotSpeakers.with(-2, 'Paligot') // => ['Jean-Philippe', 'Gérard', 'Paligot', 'Benjamin']

sameSlotSpeakers // => ['Jean-Philippe', 'Gérard', 'Aleš', 'Benjamin']
```

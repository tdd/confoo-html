---
layout: cover
background: /covers/jan-tinneberg-tVIv23vcuz4-unsplash.jpg
---

# ES2025 et après

---

# Temporal 🥳 <span class="stage">stade 3</span>

Marre de le prédire pour la prochaine, je prends plus de risques…

Va (avantageusement) remplacer Moment, Luxon, date-fns, etc.  On a déjà `Intl` pour le formatage, mais là on parle de calculs furieux. API en style immuable, précise à la nanoseconde, avec toutes les TZ, qui distingue entre temps absolu et local, durée et intervalle, etc.  Le top !

```js
const meeting1 = Temporal.Date.from('2020-01-01')
const meeting2 = Temporal.Date.from('2020-04-01')
const time = Temporal.Time.from('10:00:00')
const timeZone = new Temporal.TimeZone('America/Montreal')

const absolute1 = timeZone.getAbsoluteFor(meeting1.withTime(time))
// => 2020-01-01T15:00:00.000Z
const absolute2 = timeZone.getAbsoluteFor(meeting2.withTime(time))
// => 2020-01-01T14:00:00.000Z
```

Allez voir [les docs](https://tc39.es/proposal-temporal/docs/), [le cookbook](https://tc39.es/proposal-temporal/docs/cookbook.html) et [le talk de Maggie à dotJS 2019](https://www.dotconferences.com/2019/12/maggie-johnson-pint-making-time-make-sense) !

---

# Groupement de tableaux 🎉 <span class="stage">stade 2</span>

Encore un clou dans le cercueil de Lodash.

```js
const schedule = [
  { label: 'Enregistrement et petit déjeuner', time: '08:20', type: 'hallway' },
  { label: 'Keynote organisateurs', time: '09:00', type: 'stage' },
  { label: 'Les tendances du recrutement IT en 2023 !', time: '09:20', type: 'stage' },
  { label: 'Présentation des talks et des ateliers', time: '10:00', type: 'stage' },
  // …
]
schedule.group(({ type }) => type)
// {
//   hallway: [{ label: 'Enregistrement…'… }],
//   stage: [{ label: 'Keynote…'… }, { label: 'Les tendances……'… }, { label: 'Présentation des…'… }]
// }

schedule.groupToMap(({ type }) => type)
// => La même chose, **en tant que Map** (donc n’importe quel type de clé !)
```

---

# Normalisation de collection et `Map#emplace()` <span class="stage">stade 2</span>

Permet d'intervenir à la volée sur les arrivées de données dans les `Map`, pour les normaliser / nettoyer voire les contraindre / refuser. Quant à `emplace()`, elle permet de gérer *l'upsert* de façon atomatique, avec des comportement différenciables.

```js
const headers = new Map(undefined, {
  coerceKey: (name) => name.toLowerCase()
})
headers.set('X-Requested-With', 'politeness')
headers // => Map { 'x-requested-with': 'politeness' }

function addVisit(path) {
  visitCounts.emplace(path, {
    insert: () => 0,                     // Arguments: key, map
    update: (existing) => existing + 1   // Arguments: existing, key, map
  })
}
```

---

# `Iterator.range` 🤩 <span class="stage">stade 2</span>

On aurait enfin un générateur de séquence arithmétique ! Avec les utilitaires d'itération, c'est juste le bonheur…

```js
Iterator.range(0, 5).toArray()
// => [0, 1, 2, 3, 4]

Iterator.range(1, 10, 2).toArray()
// => [1, 3, 5, 7, 9]

Iterator.range(1, 7, { step: 3, inclusive: true })
  .map((n) => '*'.repeat(n))
  .toArray()
// => ['*', '****', '*******']
```

Jouez avec le [playground](https://tc39.es/proposal-iterator.range/playground.html) !

---

# Records &amp; Tuples : l'immutabilité en force 💖 <span class="stage">stade 2</span>

Objets (records) et tableaux (tuples) immuables en profondeur et natifs.  On bénéficie de tous les avantages de l'immutabilité (ex. l'identité référentielle), et ça aide à promouvoir la programmation fonctionnelle en JS.

Tous les opérateurs et API habituels fonctionnent (`in`, `Object.keys()`, `Object.is()`, `===`, etc.), et ça interagit très bien avec la bibliothèque standard du langage.  On peut facilement convertir depuis des version modifiables, grâce à des *factories*.  Et en prime, on a `JSON.parseImmutable()` !

```js
// Records
const grace1 = #{ given: 'Grace', family: 'Hopper' }
const grace2 = #{ given: 'Grace', family: 'Kelly' }
const grace3 = #{ ...grace2, family: 'Hopper' }
grace1 === grace3 // => true !
Object.keys(grace1) // => ['family', 'given'] -- trié !

// Tuples
#[1, 2, 3] === #[1, 2, 3] // => true !
```

<Footnote>

Amusez-vous avec le super [tutoriel](https://tc39.es/proposal-record-tuple/tutorial/), le [playground](https://rickbutton.github.io/record-tuple-playground/#eyJjb250ZW50IjoiLy8gU2FsdXQgbCdhdWRpdG9pcmUgZGUgUml2aWVyYURFViAhXG5cbi8vIFJlY29yZHNcbmNvbnN0IGdyYWNlMSA9ICN7IGdpdmVuOiAnR3JhY2UnLCBmYW1pbHk6ICdIb3BwZXInIH1cbmNvbnN0IGdyYWNlMiA9ICN7IGdpdmVuOiAnR3JhY2UnLCBmYW1pbHk6ICdLZWxseScgfVxuY29uc3QgZ3JhY2UzID0gI3sgLi4uZ3JhY2UyLCBmYW1pbHk6ICdIb3BwZXInIH1cblxuZ3JhY2UxID09PSBncmFjZTMgLy8gPT4gdHJ1ZaAhXG5PYmplY3Qua2V5cyhncmFjZTEpIC8vID0+IFsnZmFtaWx5JywgJ2dpdmVuJ10gLS0gdHJp6aAhXG5cbi8vIFR1cGxlc1xuI1sxLCAyLCAzXSA9PT0gI1sxLCAyLCAzXSAvLyA9PiB0cnVloCEiLCJzeW50YXgiOiJoYXNoIiwiZG9tTW9kZSI6ZmFsc2V9) sympa et le [cookbook](https://tc39.es/proposal-record-tuple/cookbook/) incroyable !

</Footnote>

---

# `Object.pick()` / `omit()` 🥹 <span class="stage">stade 1</span>

Il serait temps qu'on n'ait plus besoin de Lodash pour ça…  C'est récent (juillet 2022), ça accepte des jeux de clés ou un prédicat (avec un spécificateur `this` optionnel).


```js
  const conference = { name: 'RivieraDEV', year: 2023, city: 'Sophia Antipolis', speakers: 84 }
  Object.pick(conference, ['name', 'year'])
  // => { name: 'RivieraDEV', year: 2023 }

  Object.pick(conference, (value) => typeof value === 'number')
  // => { year: 2023, speakers: 84 }

  Object.omit(conference, (value) => typeof value === 'number')
  // => { name: 'RivieraDEV', city: 'Sophia Antipolis' }
```

On aura *peut-être* même droit à du sucre syntaxique pour la récupération par clés :

```js
  conference.{name, year} // => { name: 'RivieraDEV', year: 2023 }

  const keys = ['name', 'city']
  conference.[...keys] // => { name: 'RivieraDEV', city: 'Sophia Antipolis' }
```

---

# L'opérateur *pipeline* 🪄 <span class="stage">stade 2</span>

Nettoie considérablement les chaînes de traitement à base d'appels imbriqués, d'interpolation, d'arithmétique, etc.

<div style="display: flex; gap: 1em; justify-content: space-between">

```js
// AVANT 🤮
console.log(
  chalk.dim(
    `$ ${Object.keys(envars)
      .map(envar =>
        `${envar}=${envars[envar]}`)
      .join(' ')
    }`,
    'node',
    args.join(' ')))

const result = Array.from(
  take(3,
    map((v) => v + 1,
      filter((v) => v % 2 === 0, numbers))))
```

```js
// APRÈS 🤩
Object.keys(envars)
  .map(envar => `${envar}=${envars[envar]}`)
  .join(' ')
  |> `$ ${%}`
  |> chalk.dim(%, 'node', args.join(' '))
  |> console.log(%)


const result = numbers
  |> filter(%, (v) => v % 2 === 0)
  |> map(%, (v) => v + 1)
  |> take(%, 3)
  |> Array.from
```

</div>

<Footnote>

Notez que la syntaxe de substitution (`%`) n'est [pas du tout gravée dans le marbre](https://github.com/tc39/proposal-pipeline-operator/issues/91).

</Footnote>

---

# Pattern matching 🤯 <span class="stage">stade 1</span>

Expression `match`, qui fournit une sorte de `switch` structurel.  On a des équivalents en Rust, Python, F#, Elixir/Erlang, etc.  Je ne mets ici qu'un **minuscule aperçu** de ce que ça prévoit :

```js
match (res) {
  when ({ status: 200, body, ...rest }): handleData(body, rest)
  when ({ status, destination: url }) if (300 <= status && status < 400):
    handleRedirect(url)
  when ({ status: 500 }) if (!this.hasRetried): do {
    retry(req)
    this.hasRetried = true
  }
  default: throwSomething()
}

const commandResult = match (command) {
  when ([ 'go', dir and ('north' or 'east' or 'south' or 'west')]): go(dir);
  when ([ 'take', item and /[a-z]+ ball/ and { weight }]): take(item);
  default: lookAround()
}
```

---

# Enfin des regex *vraiment* lisibles ! 🎉 <span class="stage">stade 1</span>

Après Perl, C#, Ruby… JS pourrait enfin lui aussi recevoir une syntaxe étendue pour les regex.  Elle ignore le *whitespace* (dont les retours chariots) et les commentaires.  Miam !

```js
  const TAG_REGEX = new RegExp(String.raw`
    <
    # Nom de la balise
    (?<tag>[\w-]+)
    \s+
    # Attributs
    (?<attrs>.+?)
    >
    # Contenu
    (?<content>.+?)
    # Balise fermante, qui correspond à l’ouvrante
    </\k<tag>>
  `, 'x')
```

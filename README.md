## Example

```console
$ docker container run -it --rm -v "${PWD}":/work node:24 node /work/run.js
=== filter.js ===
filter: 36.299ms
for: 24.521ms

=== flag.js ===
no reassignment IIFE: 13.658ms
no reassignment func call: 2.213ms
reassignment: 2.425ms

=== foreach.js ===
forEach: 18.815ms
for-of: 6.615ms
for-in: 173.926ms
for: 5.662ms

=== map.js ===
map: 31.43ms
for: 39.232ms
```

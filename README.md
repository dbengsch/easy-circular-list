h1. A simple circular list implementation for Javascript

h2. Why yet another one ?

I needed to have an iterable list with not too crappy performances; searched, found nothing, did it myself.

h2. Install

```
npm install easy-circular-list
```

h2. Start to use

```
var CircularList = require('easy-circular-list');
var data = [1, 2, 3];

var list = new CircularList(data);
```

h2. Functions


h3. list.iterate()

Iterates the pointer of the list forward

h3. list.forward()

Iterates the pointer of the list forward

h3. list.backward()

Iterates the pointer of the list backward

h3. list.rewind()

Iterates to the first element

h3. list.end()

Iterates to the end of the list

h3. list.getSize()

Returns list size

h3. list.getCurrent()

Returns current value

h3. list.getNext()

Iterates to next and returns the value

h3. list.getPrevious()

Iterates to previous and returns the value

h3. list.add(value)

Adds a value to the list

h3. list.remove(value)

Removes a value from the list, updates the pointer accordingly

h2. LICENSE

This library is published under [Apache 2 License](LICENSE)

# A simple circular list implementation for Javascript

## Why yet another one ?

I needed to have an iterable list with not too crappy performances; searched, found nothing, did it myself.

## Install it

```
npm install easy-circular-list
```

## Use it

```
var CircularList = require('easy-circular-list');
var data = [1, 2, 3];

var list = new CircularList(data);
```

## Functions

### list.iterate()

Iterates the pointer of the list forward

### list.forward()

Iterates the pointer of the list forward

### list.backward()

Iterates the pointer of the list backward

### list.rewind()

Iterates to the first element

### list.end()

Iterates to the end of the list

### list.getSize()

Returns list size

### list.getCurrent()

Returns current value

### list.getNext()

Iterates to next and returns the value

### list.getPrevious()

Iterates to previous and returns the value

### list.getArray()

Returns an array representation of the list

### list.add(value)

Adds a value to the list

### list.remove(value)

Removes a value from the list, updates the pointer accordingly

## LICENSE

This library is published under [Apache 2 License](LICENSE)

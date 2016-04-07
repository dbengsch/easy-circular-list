h1. A simple circular list implementation for Javascript

h2. Why yet another one ?

I needed to have an iteratable list with not too crappy performances; searched, found nothing, did it myself.

h2. Install

```
npm install easy-circular-list
```

h2. Start

```
var CircularList = require('easy-circular-list');
var data = [1, 2, 3];

var myList = new CircularList(data);
```

h2. API

CircularList.prototype.iterate = function ()
CircularList.prototype.forward = function ()
CircularList.prototype.backward = function ()
CircularList.prototype.rewind = function ()
CircularList.prototype.end = function ()
CircularList.prototype.getSize = function ()
CircularList.prototype.getCurrent = function ()
CircularList.prototype.getNext = function ()
CircularList.prototype.getPrevious = function ()
CircularList.prototype.add = function (value)
CircularList.prototype.remove = function (value)

h2. LICENSE

This library is published under [Apache 2 License](LICENSE)

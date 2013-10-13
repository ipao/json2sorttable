json2sorttable
==============

create sortable html table from json format.

##Preparation

* Add script to html file <script src="jsonTable.js"></script>
* Your json (array) format should be an array which contains objects that have the same property like this...

```
var yourJSON = [{a:1,b:'c'},{a:3,b:'b'},{a:5,b:'a'},...];
```

##How to used

* Declare variable with your JSON for prepare them.

```
var table = new jsonTable(yourJSON);
```

* Add it to your element with addTo(element).

```
table.addTo(document.getElementById('contain'));
```

* Write your own styles with css if you want.

##Manually sort
* Just use sortWith(fieldName, element)

```
table.sortWith('a', document.getElementById('contain'));
```

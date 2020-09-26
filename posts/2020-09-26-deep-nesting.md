---
title: Deep Nesting
description: clean code with javascript
date: '2020-09-26 08:12:39'
image: assets/img/1200px-Unofficial_JavaScript_logo_2.svg.png
category: snippets
background: '#fff'
---
```javascript
const exampleArray = [ [ [ 'value' ] ] ]

// bad
exampleArray.forEach((array1) => {
 array1.forEach((array2) => {
  array2.forEach((el) => {
   console.log(el)
  })
 })
})

//good
const retrieveFinalValue = (element) => {
 if(Array.isArray(element)) {
  return retrieveFinalValue(element[0])
 }

 return element
}
```

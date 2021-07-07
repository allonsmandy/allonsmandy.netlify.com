---
title: Deep Nesting
description: clean code with javascript
code:
  code: |-
    const exampleArray = [ [ [ 'value' ] ] ]

    // bad
    exampleArray.forEach((array1) => {
     array1.forEach((array2) => {
      array2.forEach((el) => {
       console.log(el)
      })
     })
    })

    // good
    const retrieveFinalValue = (element) => {
     if(Array.isArray(element)) {
      return retrieveFinalValue(element[0])
     }

     return element
    }
  lang: javascript
---

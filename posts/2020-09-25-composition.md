---
title: 'composition '
description: composition in javascript
date: '2020-09-24 11:00:48'
image: assets/img/1200px-Unofficial_JavaScript_logo_2.svg.png
category: snippets
background: '#fff'
---
```javascript
function composition(...funcoes) {
  return function(valor) {
    return funcoes.reduce((acc, fn) => {
      return fn(acc)
    }, valor)
  }
}
```

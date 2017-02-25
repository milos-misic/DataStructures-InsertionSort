#! /usr/bin/env node

// To test run node insertion-sort.js
// right now this is static and the random
// array length is defined on the last line
// NOTE: add args to handle randomArray

function randomArray(n) {
  var unsortedArray = new Array

  for(var i = 0; i < n; i++) {
    var randomNumber = Math.random()
    var roundNumber = Math.floor(randomNumber * 10000)

    unsortedArray[i] = roundNumber
  }

  return unsortedArray
}

function insertSort(array) {
  console.time('Performance: ')
  for(var j = 1; j < array.length; j++) {
    var key = array[j]
    var i = j - 1
    while (i > -1 && array[i] > key) {
      array[i + 1] = array[i]
      i = i - 1
    }
    array[i + 1] = key
  }
  console.timeEnd('Performance: ')
  return array
}

console.log(insertSort(randomArray(90)))

function mergeSort(l, r) {
  let sortedArr = [];
  let leftPointer = 0;
  let rightPointer = 0;

  // [2,5,7] [1,4,8,10]
  while(l[leftPointer] !== undefined && r[rightPointer] !== undefined) {
    if(l[leftPointer] < r[rightPointer]) {
      sortedArr.push(l[leftPointer])
      leftPointer++;
    } else {
      sortedArr.push(r[rightPointer]);
      rightPointer++;
    }
  }

  let pointerInArr;
  let targetArr;

  if(l[leftPointer] === undefined) {
    pointerInArr = rightPointer;
    targetArr = r;
  } else {
    pointerInArr = leftPointer;
    targetArr = l;
  }

while(targetArr[pointerInArr] !== undefined){
  sortedArr.push(targetArr[pointerInArr]);
  pointerInArr++;
}
return sortedArr;
}

function split(arr){
  if (arr.length === 1) {
    return arr;
  }

  let pivot = Math.floor((arr.length / 2));

  let left = split(arr.slice(0,pivot));
  let right = split(arr.slice(pivot));

  // let [left,right] = extraneousSplit(arr);

  let mergedArr = mergeSort(left, right);

  return mergedArr;
}

console.log(split([1,7,5,3,21,332]));

function extraneousSplit(arr) {



  let pivot = Math.floor((arr.length / 2));

  let left = split(arr.slice(0,pivot));
  let right = split(arr.slice(pivot));

  return [left, right];

}

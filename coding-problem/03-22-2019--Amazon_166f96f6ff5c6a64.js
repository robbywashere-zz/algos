/*




Given a pivot x, and a list lst, partition the list into three parts.



 * The first part contains all elemenets in lst that are less than x

 * The first part contains all elemenets in lst that are equal to x

 * The first part contains all elemenets in lst that are larger than x



Ordering within a part can be arbitrary.



For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may

be `[9, 3, 5, 10, 10, 12, 14]



*/

function swap(a,b,list){
  let tmp = list[a];
  list[a] = list[b];
  list[b] = tmp;
}

function flagSort(list, pivot){
  let low = 0;
  let mid = 0;
  let high = list.length-1;

  let count = 0;
  while (mid < high) {
    if (list[mid] < pivot) swap(mid++,low++,list);
    else if (list[mid] > pivot) swap(mid,high--,list);
    else if (list[mid] === pivot) mid++;
  }
  return list;
}

console.log(flagSort([-1, 9, 10, 11, 17, 0, 10, 12, 3, 5, 14, 10, 10, 22, 8, 11, 10, 24, -1, 10, 8], 10));







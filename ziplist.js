const lista = ['a', 'b', 'c'];
const listb = [1, 2, 3];

function ziplist(list1, list2) {
  const finalList = [];
  for (let i = 0; i < list1.length; i++) {
    finalList.push(list1[i]);
    finalList.push(list2[i]);
  }
  return finalList;
}

console.log(ziplist(lista, listb));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(lista, listb));

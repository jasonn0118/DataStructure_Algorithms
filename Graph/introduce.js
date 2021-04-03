//Edge List
const graph = [[0,2], [2,3], [2,1], [1,3]];
//Edge list simply shows connection.

//Adjacent List
const graph = [[2], [2,3], [0,1,3], [1,2]];
//Object with key and value. here, we use index as value.

//Adjacent Matrix
const graph = {
 0: [0, 0, 1, 0], //It means node 0 connects to 3
 1: [0, 0, 1, 1], // Node 1 ==> 2,3
 2: [1, 1, 0, 1], // Node 2 ==> 0,1,3
 3: [0, 1, 1, 0]  // Node 3 ==> 1,2

}
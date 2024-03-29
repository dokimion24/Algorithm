function solution(array, commands) {
  const answer = [];

  commands.forEach((el) => {
    const newArray = array.slice(el[0] - 1, el[1]).sort((a, b) => a - b);
    answer.push(newArray[el[2] - 1]);
  });

  return answer;
}

// console.log(
//   solution(
//     [1, 5, 2, 6, 3, 7, 4],
//     [
//       [2, 5, 3],
//       [4, 4, 1],
//       [1, 7, 3],
//     ]
//   )
// );
// console.log(solution([10, 2], [[1, 2, 1]]));

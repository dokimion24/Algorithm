function solution(numbers) {
  const answer = numbers
    .map((el) => String(el))
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer.startsWith("0") ? "0" : answer;
}

console.log(solution([3, 30, 34, 5, 0]));

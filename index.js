const solutions = (s) => {
  let arr = []
  for (let i = 1; i <= s; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("Frontend Backend")
    } else if (i % 3 === 0) {
      arr.push("Frontend")
    } else if (i % 5 === 0) {
      arr.push("Backend")
    } else {
      arr.push(i)
    }
  }
  return arr.toString()
}
console.log(solutions(50))

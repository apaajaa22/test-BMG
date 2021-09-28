//bisa di bagi 3  &  5 & 15

const solutions =  (s) => {
  let arr = []
  for (let i= 1; i <= s; i++ ){
    if (i%3===0 && i%5===0){
      arr.push(i,'Frontend Backend')
    }
    else if (i%3===0){
      arr.push(i,'Frontend')
    }else if (i%5===0){
      arr.push(i,'Backend')
    }else {
      arr.push(i)
    }
  }
  return arr
}

console.log(solutions(50))
// solutions(50)
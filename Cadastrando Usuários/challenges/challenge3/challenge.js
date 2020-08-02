function challenge(x) {
  const result = x*2

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.floor(result))
    }, Math.random()*100)
  });
}

async function f1() {
  let x
  x = await challenge(2)
  console.log(x)
  x = await challenge(4)
  console.log(x)
  x = await challenge(8)
  console.log(x)
  x = await challenge(16)
  console.log(x)
}

function challenge2(x, y) {
  const result2 = x*2 + y

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.floor(result2))
    }, Math.random()*100)
  })
}

async function f2() {
  let x
  x = await challenge2(5, 0)
  console.log(x)
  x = await challenge2(12, x)
  console.log(x)
  x = await challenge2(2, x)
  console.log(x)
}

f2()
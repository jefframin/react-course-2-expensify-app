const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //  resolve('resolved; success!')
        reject('rejected; BAD!')
    }, 1500)
})

console.log('before')
promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})
console.log('after')
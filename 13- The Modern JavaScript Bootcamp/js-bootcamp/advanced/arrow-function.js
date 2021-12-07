const obj = [
    {name:'ahmed',age: 20},
    {name:'ali',age: 21},
    {name:'moh',age: 20},
    {name:'medo',age: 10},
]

const result = obj.find((obj) => obj.age === 20)
console.log(result)

const results = obj.filter((obj) => obj.age === 20)
console.log(results)
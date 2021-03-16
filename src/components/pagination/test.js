let list = [
    {
        id: 1,
        name: 'huong'
    },
    {
        id: 2,
        name: 'linh'
    },
    {
        id: 3,
        name: 'guy'
    },
    {
        id: 4,
        name: 'hung'
    },
    {
        id: 5,
        name: 'hin'
    },
    {
        id: 6,
        name: 'gea'
    },
    {
        id: 7,
        name: 'oi'
    },
    {
        id: 8,
        name: 'aw'
    },
]

let page = 6
let start = page - 1
let end = start + 5
let list2 = [1, 2, 3, 4, 5, 78, 90]
let check = list2.slice(start, end)
check

let arr = [
    { number: 1, isActive: false },
    { number: 2, isActive: false },
    { number: 3, isActive: false },
    { number: 4, isActive: false },
]



let modify = arr.map(item => {
    if (item.number === 1) {
        item.isActive = true
        return item
    } else { return item }
})
modify
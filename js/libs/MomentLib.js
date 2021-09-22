const now = moment()

now.set({
    month: 8,
    date: 10,
    hour: 14
})
now.add(2, 'd')

console.log(now.format('D MMMM YYYY HH:mm:ss'))

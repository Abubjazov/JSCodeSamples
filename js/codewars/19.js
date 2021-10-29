function formatDuration (time) {

    if (time === 0) return 'now'

    const resObj = {
        years:   Math.floor((time / (60 * 60 * 24 * 365))),
        days:    Math.floor((time / (60 * 60 * 24)) % 365),
        hours:   Math.floor((time / (60 * 60)) % 24),
        minutes: Math.floor((time / 60) % 60),
        seconds: Math.floor(time % 60)
    }

    let resArr = []

    if (resObj.years > 0)   resObj.years === 1 ? resArr.push(`${resObj.years} year`) : resArr.push(`${resObj.years} years`)
    if (resObj.days > 0)    resObj.days === 1 ? resArr.push(`${resObj.days} day`) : resArr.push(`${resObj.days} days`)
    if (resObj.hours > 0)   resObj.hours === 1 ? resArr.push(`${resObj.hours} hour`) : resArr.push(`${resObj.hours} hours`)    
    if (resObj.minutes > 0) resObj.minutes === 1 ? resArr.push(`${resObj.minutes} minute`) : resArr.push(`${resObj.minutes} minutes`) 
    if (resObj.seconds > 0) resObj.seconds === 1 ? resArr.push(`${resObj.seconds} second`) : resArr.push(`${resObj.seconds} seconds`)

    if (resArr.length === 1) return `${resArr[0]}`
    if (resArr.length === 2) return `${resArr[0]} and ${resArr[1]}`
    if (resArr.length === 3) return `${resArr[0]}, ${resArr[1]} and ${resArr[2]}`
    if (resArr.length === 4) return `${resArr[0]}, ${resArr[1]}, ${resArr[2]} and ${resArr[3]}`
    if (resArr.length === 5) return `${resArr[0]}, ${resArr[1]}, ${resArr[2]}, ${resArr[3]} and ${resArr[4]}`
}


// Test.assertEquals(formatDuration(1), "1 second");
// Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
// Test.assertEquals(formatDuration(120), "2 minutes");
// Test.assertEquals(formatDuration(3600), "1 hour");
// Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(120))
console.log(formatDuration(3600))
console.log(formatDuration(3662))

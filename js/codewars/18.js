function humanReadable (inputTime) {
    const seconds = ('0' + inputTime % 60).slice(-2),
          minutes = ('0' + parseInt(inputTime / 60) % 60).slice(-2),
          hourse = ('0' + parseInt(inputTime / 3600)).slice(-2)
  
  return `${hourse}:${minutes}:${seconds}`
}


// strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
// strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
// strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
// strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
// strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
// strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
// strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
// strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
// strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
// strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');

console.log(humanReadable(254275))
console.log(humanReadable(252757 ))
console.log(humanReadable(86400))
console.log(humanReadable(359999))

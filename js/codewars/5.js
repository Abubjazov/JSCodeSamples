function findShort(s){
    return s.split(' ').map(item => item.length).sort(function(a, b) { return a - b })[0]  
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

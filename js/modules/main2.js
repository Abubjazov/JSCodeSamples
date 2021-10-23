//ES6+
import {one as first, two} from "./moduleB"
// import * as data from "./moduleB"
import sayHi from "./moduleB"

console.log(`${first} != ${two}`)

// data.sayHi()
sayHi()

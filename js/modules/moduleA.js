//Common JS
function myModuleA() {
    this.hello = function() {
        console.log('hello')
    }

    this.goodbye = function() {
        console.log('goodbye')
    }
}

module.exports = myModuleA

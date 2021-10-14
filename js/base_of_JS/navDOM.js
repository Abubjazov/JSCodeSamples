// console.log(document.head)
// console.log(document.documentElement)
// console.log(document.documentURI)
// console.log(document.body.childElementCount)
console.log(document.body.childNodes)
// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)
// console.log(document.body.lastChild)
// console.log(document.querySelector('#btn_id').parentNode)
// console.log(document.querySelector('#btn_id').parentElement)
// console.log(document.querySelector('#btn_id').parentNode.parentNode)
// console.log(document.querySelector('[data-current="2"]'))
// console.log(document.querySelector('[data-current="2"]').nextSibling)
// console.log(document.querySelector('[data-current="2"]').previousSibling)
// console.log(document.querySelector('[data-current="2"]').nextElementSibling)
// console.log(document.querySelector('[data-current="2"]').previousElementSibling)

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text' || node.nodeName == '#comment') {
        continue
    }

    console.log(node)
}

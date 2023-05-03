basic.forever(function() {

})
const data = '@dfhfhdhdf'
console.log(String.fromCharCode(64))
console.log("@dfhfhdhdf".charCodeAt(0))
console.log(data.charCodeAt(1))
function pack(cisla:[number]//x: number, y: number, z: number
): string
{
    console.log(cisla.length)
    for (let i = 0; i < cisla.length; i++) {
        console.log(cisla[i])
// let xmod = x + 1024 // posun do kladného intervalu
//     xmod = Math.floor(xmod / 8) //redukce intervalu

    }
    
    
    // String.fromCharCode(64) // vrátí @
    // "@dfhfhdhdf".charCodeAt(0) // 0 znamená: dej mi znak na první pozici
    return ""//String.fromCharCode(xmod)
}

input.onButtonPressed(Button.A, function() {
    let x = 1022 // <-1024; 1023>
    let y = -950
    let z = 12
    //radio.sendString("")
    console.log(pack([x, y, z]))
})

radio.onReceivedNumber(function(receivedNumber: number) {
    basic.showNumber(receivedNumber)
})
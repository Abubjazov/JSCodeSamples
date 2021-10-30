// Входные данные:
//
// Есть бинарный код: device.encode(data)
//
// Есть подсказки от программиста:
//      console.log (device.encode ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) ;
//      console.log (device.encode ('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')) ;  
//      console.log (device.encode ('!@#$%^&*()_+-')) ;
//      console.log ('abcdefghijklmnopqrstuvwxyz') ;
//      console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//        return device.encode (a) ;
//      }).join ('')) ;
//      console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//        return device.encode ('_'+a)[1] ;
//      }).join ('')) ;
//      console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//        return device.encode ('__'+a)[2] ;
//      }).join ('')) ;
//
// Задача: реализовать функцию device.decode(data) на основе подсказок и использования "чёрного ящика" - device.encode(data)

// Решение:

// 1) Вычисляем поведение и особенности алгоритма при помощи device.encode(data):

        // console.log (device.encode ('What is this ?')) ;                                                     //EFhZINtl3rgKW9
        // console.log (device.encode ('What the hell')) ;                                                      //EFhZIgsgxr3Oo
        // console.log (device.encode ('The quick brown fox jumped over the lazy developer.')) ;                //yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz
        // console.log (device.encode ('abc')) ;                                                                //bhx                                          
        // console.log (device.encode ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) ; //bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa
        // console.log (device.encode ('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')) ; //dhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHab
        // console.log (device.encode ('cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc')) ; //flxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIc
        // console.log (device.encode ('dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd')) ; //hpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabd
        // console.log (device.encode ('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')) ; //1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA
        // console.log (device.encode ('                                                                  ')) ; //?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG 
        // console.log (device.encode ('abcdefghijklmnopqrstuvwxyz')) ;                                         //bhx,zWyLZ3pOGIhzeXTYtjAaDW
        // console.log (device.encode ('!@#$%^&*()_+-')) ;                                                      //!@#$%^&*()_+-
//
// 2) Выводы о поведении и особенностях алгоритма функции device.encode(data):
//
//      encode frase: abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH

//      input letters: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
//      input digits: 0123456789
//      input symbols: ',', ' ', '?', '.'
//      ignore symbols: !@#$%^&*()_+-
//
//      function call options: (device.encode ('_'+ a)[1]), (device.encode ('__'+ a)[2])
//    
//      Кодирование ведётся посимвольно с учётом индекса символа в входной последовательности как смещения по encodefrase.
//      Алгоритм кодирования: 
//          1) получаем индекс кодируемого элемента в входной последовательности [ИКЭ]
//          2) получаем индекс кодируемого элемента в encodefrase [ИКЭef]
//          1) если это не {!@#$%^&*()_+-} возвращаем элемент из encodefrase под индексом [[ИКЭef] + [encodefrase.length + 1]] % [encodefrase.length] + [ИКЭ]

//      Проверка верности алгоритма:
//          Encoding:
            // const encodeFrase = 'abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH',
            //       inputSequence = 'What is this ?' //EFhZINtl3rgKW9

            
            // let indexIS = 0
            // let indexEF = encodeFrase.indexOf(inputSequence[indexIS]) 
            // let char = encodeFrase.charAt((indexEF + encodeFrase.length + 1) % encodeFrase.length + indexIS)

            // console.log(indexEF, char)

//          Decoding:
            // const encodeFrase = 'abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH',
            //       inputSequence = 'EFhZINtl3rgKW9' //What is this ?

            
            // let indexIS = 3
            // let indexEF = encodeFrase.indexOf(inputSequence[indexIS]) 
            // let char = encodeFrase.charAt((indexEF + encodeFrase.length - 1) % encodeFrase.length - indexIS)

            // console.log(indexEF, char)
//
//Реализация функции:

function decode(inputSequence, encodeFrase = 'abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH', ignorSequence = '!@#$%^&*()_+-') {
        let resultSequence = ''
        
        for (let i = 0; i < inputSequence.length; i++) {
                if (ignorSequence.indexOf(inputSequence[i]) !== -1) { resultSequence += inputSequence[i] }
                else { resultSequence += encodeFrase.charAt((encodeFrase.indexOf(inputSequence[i]) + encodeFrase.length - i - 1) % encodeFrase.length) }
        }
        
  return resultSequence 
}

console.log(decode('bhx,zWyLZ3pOGIhzeXTYtjAaDW-+()'))


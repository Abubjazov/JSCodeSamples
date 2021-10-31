// Входные данные:
// text          =  "HELLOWORLD"
// original key  =  "ABCXYZ"
// repeated key  =  "ABCXYZABCX" (superfluous "YZ" at the end was removed)

// ENCODING:
// text:      H    E    L    L    O    W    O    R    L    D
//           ------------------------------------------------
// key:       A    B    C    X    Y    Z    A    B    C    X
//           ------------------------------------------------
// shift:     0    1    2   23   24   25    0    1    2   23
//           ------------------------------------------------
// result:    H    F    N    I    M    V    O    S    N    A

// DECODING:
// text:      H    F    N    I    M    V    O    S    N    A
//           ------------------------------------------------
// key:       A    B    C    X    Y    Z    A    B    C    X
//           ------------------------------------------------
// shift:     0   -1   -2  -23  -24  -25    0   -1   -2  -23
//           ------------------------------------------------
// result:    H    E    L    L    O    W    O    R    L    D

// key = "CODEWARS"
// EncodedText = "NSWXARWJGEXIJCZWUZLOAWFJFTUIMUVFEWHWPEEVVCYENYSGVVECSRZLGFDRZBPKWPMIYTFFGQDRJOKOTWWIWNVKUOBEXOLLZFDCOWZLJCXXQSZFITUIMUVFVLVEJDKZGSVWWYNANZKERERFKRLSOYEUTOWMYLVLVSUJNEHMGBFCEFKZGSVWWYZKCPRYPTYWHFHUQEELWGHSBXISAGWSPRVSVNHFNAJAPEDXWRUAHTHVANKSWHKSNSYSXSKEXIKKYVLGDCRFDSUIBLVUVSGMJTYWKFXWAOWDGHWINSYWOWQKSAPKYFLXENXKVMOIBOIWZOPTHEZKXWVMXLPVKTIINEELHFRQBALDMBHVOLVLVSUFEGISOHUMCRREYCUHBRVIWSQGEEJOQFGPANXLJOQHOEELGBFIHEEYVVFEJBVUCZFYHAKWFTRVOPVUKTLGWUKZQFVEJDLKGRWSLRFNGCUHESGJQJHEQTYGTGKMLOWLGLWWAVVFHCUEQTYGTGZLKSVKVMOIOAIWPCWWKDZNGFJIJTRUEIUEPERNGFDKALVLVSUJNEHMGBFMASTSPCQPUBVYNSDRADSQCBDPUZZFIOOENGVSOCXRPOWJGDUIOEELCHLZATVPVKLXDTYWCJDMHASANWWCKFDGFSURYODHWHLRCAEVECOPACKAQBVSBLRJISWITTTGTDRVWSLUJQDPYUCSVWRROAIWGOVMHYDSFSHBWMGDGGFEJBVVTOZRBRFECJDVEEKQQTVSQRTWUDUIOSIWRCUXENXJGZLKEOLKVSAXOSTAGBWMBITLGLWWWNUYGBHVWLWAEHLSJAEVVVHVAAIWFWIJARVFESVIOPVUKOOPUFFJISQINACXKQWMKNNAVVWLAPFKKHLSJOWZCBGMSIKZJPHGKMZFIARVACFEOCQLARSWTHVDEMZFJWVGHAJKKQLRPRFVWQWSNYTJADWSCRRHJMWITTTGFSVEJDJWEFHXSRZLKBJKEVVKVVHIJGCAUVOIPTVJHFHUQEEUAGHUQEEUGOVIPAFFTWVLZLWUOIJCLWSNMXAUVTYWOCVXYODEQBOIPTVJROLVOAJLJVHEJRVWTWQSJAKFFGWIOEEGHHHIZOILKVLEOTFSPRWLAMFKVQRQIOEVQIEPADCWVHHVOAJDNSHWOOFLVTIVNNEHRQFXDEKGRHZIHVVDGHWINSTGODUMOERTQIWSBTYWVCWEHUJSISWLATFHGWJLPLVLVSUWYODHTWVIWBFMVCIXDEKGVOOYOAXWNSWXARWJGEXIJCPSUOIYJCKAQBRJNAECEOQFAFZLVSGAALCTAGHZARRDTOQOBUEUVWRROWZLJHKIPWFHCFDQATVJECFLKBVLCFDRGFLFEHLSJBVAPUWLABVKVOQSPHVJTOQOBUEUVWRRSIKZPCDHFUJLCPOIBRVWROUEIEKWTOOWKFZLUHKIHEKLGFIVAQLWPQBHESKJKPXXEOEJGOVSJASDAKHPHTYWUOPIBUEUVWRRDAJTGSQYOEULQTLXPHVSOWQSWCZVHFHUQEEUAWQTNOKWKBVIMUVFESVEOPPMUWQKPHVNKQFMLHVJQFVSIEFLJSUGEPYWTPDWADFFCGWVWDUDKBJGDETCGFESWRULADLGWLCQWGHWWMEWOCQMYSLUJOVEOIELQSUVZRFHRWQKPHVKGQRRZRKGTSPIIBVJVVHXKPVAIVWGDAISEHHVOTYWWGHSBLVLVSUJNEHMGBFMASRFFTUIMUVFEMDRWLPKKGSPWYJSHIQHWMVFVOOVKLVAPQUCLTFYTOPWWNUKGJHVWLNGTRSYVZCWIOPIOIEUNIGMJGYSPUPEJSTJCPEPAAEVVVHXALVNKGLSJGREGGKSSWYWGZRJBOILWBHSJEFXVVHIWRCAGGWHASTJKDWMKNZFEZDWOITSNZLXARRLWFHSBAGHNMLRCTYWMBRAHEUYGCIIJGCAUVOIPTVJHFHUQEEUAHRWKLMAPUDGNYGLQUUEIIJXQIQHENVSRCHWBADGWGVXKRPLJSJSHDSMIKKINEKZGAHXDOUAUGXGYEJKHIOPUAGHNWHHPOUWEWSLARREGGVECEZFUHUYYTZFICQXDENZGFHEXOLLUCIEPRVSUIUIDIUVGBECYAGLCWQOEDUDGHWINFIWSIHRYIVKJOGEOTIGPUHJBETLQBWLADVKKUQSBSFEGYHCXORJFZDCKUKKVVHQKSKXTSTYANKDGHWINSRJGCQXDESGVHRQNONGHHKIXLZUMSQWZEIXGFWCLENJKHHVWNULJSKSIEIGYCIXDEUNQFDOOIDHNWIMADBWAPREND"


// Задача:
// Реализовать функцию, которая может определить, какой ключ использовался при шифровании шифром Виженера, учитывая полученный зашифрованный текст и длину этого ключа.

// Решение:

// 1) Анализ входных данных:

// 'CODEWARS' =>'ABCDEFGHIJKLMNOPQRSTUVWXYZ' => '2 14 3 4 22 0 17 18 '

// abcSeq = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// key = 'CODEWARS'
// digKeySeq = []

// for (let i = 0; i < key.length; i++) {
//     digKeySeq.push(abcSeq.indexOf(key[i]))
// }

// console.log(digKeySeq)

let key = 'CODEWARS',
      encodedString = "NSWXARWJGEXIJCZWUZLOAWFJFTUIMUVFEWHWPEEVVCYENYSGVVECSRZLGFDRZBPKWPMIYTFFGQDRJOKOTWWIWNVKUOBEXOLLZFDCOWZLJCXXQSZFITUIMUVFVLVEJDKZGSVWWYNANZKERERFKRLSOYEUTOWMYLVLVSUJNEHMGBFCEFKZGSVWWYZKCPRYPTYWHFHUQEELWGHSBXISAGWSPRVSVNHFNAJAPEDXWRUAHTHVANKSWHKSNSYSXSKEXIKKYVLGDCRFDSUIBLVUVSGMJTYWKFXWAOWDGHWINSYWOWQKSAPKYFLXENXKVMOIBOIWZOPTHEZKXWVMXLPVKTIINEELHFRQBALDMBHVOLVLVSUFEGISOHUMCRREYCUHBRVIWSQGEEJOQFGPANXLJOQHOEELGBFIHEEYVVFEJBVUCZFYHAKWFTRVOPVUKTLGWUKZQFVEJDLKGRWSLRFNGCUHESGJQJHEQTYGTGKMLOWLGLWWAVVFHCUEQTYGTGZLKSVKVMOIOAIWPCWWKDZNGFJIJTRUEIUEPERNGFDKALVLVSUJNEHMGBFMASTSPCQPUBVYNSDRADSQCBDPUZZFIOOENGVSOCXRPOWJGDUIOEELCHLZATVPVKLXDTYWCJDMHASANWWCKFDGFSURYODHWHLRCAEVECOPACKAQBVSBLRJISWITTTGTDRVWSLUJQDPYUCSVWRROAIWGOVMHYDSFSHBWMGDGGFEJBVVTOZRBRFECJDVEEKQQTVSQRTWUDUIOSIWRCUXENXJGZLKEOLKVSAXOSTAGBWMBITLGLWWWNUYGBHVWLWAEHLSJAEVVVHVAAIWFWIJARVFESVIOPVUKOOPUFFJISQINACXKQWMKNNAVVWLAPFKKHLSJOWZCBGMSIKZJPHGKMZFIARVACFEOCQLARSWTHVDEMZFJWVGHAJKKQLRPRFVWQWSNYTJADWSCRRHJMWITTTGFSVEJDJWEFHXSRZLKBJKEVVKVVHIJGCAUVOIPTVJHFHUQEEUAGHUQEEUGOVIPAFFTWVLZLWUOIJCLWSNMXAUVTYWOCVXYODEQBOIPTVJROLVOAJLJVHEJRVWTWQSJAKFFGWIOEEGHHHIZOILKVLEOTFSPRWLAMFKVQRQIOEVQIEPADCWVHHVOAJDNSHWOOFLVTIVNNEHRQFXDEKGRHZIHVVDGHWINSTGODUMOERTQIWSBTYWVCWEHUJSISWLATFHGWJLPLVLVSUWYODHTWVIWBFMVCIXDEKGVOOYOAXWNSWXARWJGEXIJCPSUOIYJCKAQBRJNAECEOQFAFZLVSGAALCTAGHZARRDTOQOBUEUVWRROWZLJHKIPWFHCFDQATVJECFLKBVLCFDRGFLFEHLSJBVAPUWLABVKVOQSPHVJTOQOBUEUVWRRSIKZPCDHFUJLCPOIBRVWROUEIEKWTOOWKFZLUHKIHEKLGFIVAQLWPQBHESKJKPXXEOEJGOVSJASDAKHPHTYWUOPIBUEUVWRRDAJTGSQYOEULQTLXPHVSOWQSWCZVHFHUQEEUAWQTNOKWKBVIMUVFESVEOPPMUWQKPHVNKQFMLHVJQFVSIEFLJSUGEPYWTPDWADFFCGWVWDUDKBJGDETCGFESWRULADLGWLCQWGHWWMEWOCQMYSLUJOVEOIELQSUVZRFHRWQKPHVKGQRRZRKGTSPIIBVJVVHXKPVAIVWGDAISEHHVOTYWWGHSBLVLVSUJNEHMGBFMASRFFTUIMUVFEMDRWLPKKGSPWYJSHIQHWMVFVOOVKLVAPQUCLTFYTOPWWNUKGJHVWLNGTRSYVZCWIOPIOIEUNIGMJGYSPUPEJSTJCPEPAAEVVVHXALVNKGLSJGREGGKSSWYWGZRJBOILWBHSJEFXVVHIWRCAGGWHASTJKDWMKNZFEZDWOITSNZLXARRLWFHSBAGHNMLRCTYWMBRAHEUYGCIIJGCAUVOIPTVJHFHUQEEUAHRWKLMAPUDGNYGLQUUEIIJXQIQHENVSRCHWBADGWGVXKRPLJSJSHDSMIKKINEKZGAHXDOUAUGXGYEJKHIOPUAGHNWHHPOUWEWSLARREGGVECEZFUHUYYTZFICQXDENZGFHEXOLLUCIEPRVSUIUIDIUVGBECYAGLCWQOEDUDGHWINFIWSIHRYIVKJOGEOTIGPUHJBETLQBWLADVKKUQSBSFEGYHCXORJFZDCKUKKVVHQKSKXTSTYANKDGHWINSRJGCQXDESGVHRQNONGHHKIXLZUMSQWZEIXGFWCLENJKHHVWNULJSKSIEIGYCIXDEUNQFDOOIDHNWIMADBWAPREND"

const retFirst = (encodedString, keyLength) => {
    const abcSeq = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''

    for (let u = 0; u < keyLength; u++) {
        let selectedString = '', i = u

        while (i < encodedString.length) {
            selectedString += encodedString[i]
            i += keyLength
        }

        setString = [...(new Set([...selectedString]))]
        selectedString = [...selectedString]

        let letFreq = 0, letFreq1 = 0, letSimb = '', letSimb1 = '', eSeq = ''

        setString.forEach(item => {           
            if (((selectedString.filter(i => i === item)).length > letFreq)) { 
                letFreq1 = letFreq
                letSimb1 = letSimb
                letFreq = (selectedString.filter(i => i === item)).length
                letSimb = item
            }       
        })        

        eSeq = 'EFGHIJKLMNOPQRSTUVWXYZABCD'

        if (keyLength > 2) letSimb = (letFreq - letFreq1) < 8 ? abcSeq.charAt(eSeq.indexOf(letSimb1)) : abcSeq.charAt(eSeq.indexOf(letSimb))
        else letSimb = abcSeq.charAt(eSeq.indexOf(letSimb))

        result += letSimb
    }

    return result
}

console.log(retFirst(encodedString, 8)) 

        // if (freqPercent >= 12.702) {eSeq = 'EFGHIJKLMNOPQRSTUVWXYZABCD'}
        // if (freqPercent >= 9.056)  {eSeq = 'TUVWXYZABCDEFGHIJKLMNOPQRS'}
        // if (freqPercent >= 8.167)  {eSeq = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
        // if (freqPercent >= 7.507)  {eSeq = 'OPQRSTUVWXYZABCDEFGHIJKLMN'}
        // if (freqPercent >= 6.966)  {eSeq = 'IJKLMNOPQRSTUVWXYZABCDEFGH'}
        // if (freqPercent >= 6.749)  {eSeq = 'NOPQRSTUVWXYZABCDEFGHIJKLM'}
        // if (freqPercent >= 6.327)  {eSeq = 'STUVWXYZABCDEFGHIJKLMNOPQR'}
        // if (freqPercent >= 6.094)  {eSeq = 'HIJKLMNOPQRSTUVWXYZABCDEFG'}
        // if (freqPercent >= 5.987)  {eSeq = 'RSTUVWXYZABCDEFGHIJKLMNOPQ'}
        // if (freqPercent >= 4.253)  {eSeq = 'DEFGHIJKLMNOPQRSTUVWXYZABC'}
        // if (freqPercent >= 4.025)  {eSeq = 'LMNOPQRSTUVWXYZABCDEFGHIJK'}
        // if (freqPercent >= 2.782)  {eSeq = 'CDEFGHIJKLMNOPQRSTUVWXYZAB'}
        // if (freqPercent >= 2.758)  {eSeq = 'UVWXYZABCDEFGHIJKLMNOPQRST'}
        // if (freqPercent >= 2.406)  {eSeq = 'MNOPQRSTUVWXYZABCDEFGHIJKL'}
        // if (freqPercent >= 2.360)  {eSeq = 'WXYZABCDEFGHIJKLMNOPQRSTUV'}
        // if (freqPercent >= 2.228)  {eSeq = 'FGHIJKLMNOPQRSTUVWXYZABCDE'}
        // if (freqPercent >= 2.015)  {eSeq = 'GHIJKLMNOPQRSTUVWXYZABCDEF'}
        // if (freqPercent >= 1.974)  {eSeq = 'YZABCDEFGHIJKLMNOPQRSTUVWX'}
        // if (freqPercent >= 1.929)  {eSeq = 'PQRSTUVWXYZABCDEFGHIJKLMNO'}
        // if (freqPercent >= 1.492)  {eSeq = 'BCDEFGHIJKLMNOPQRSTUVWXYZA'}
        // if (freqPercent >= 0.978)  {eSeq = 'VWXYZABCDEFGHIJKLMNOPQRSTU'}
        // if (freqPercent >= 0.772)  {eSeq = 'KLMNOPQRSTUVWXYZABCDEFGHIJ'}
        // if (freqPercent >= 0.153)  {eSeq = 'JKLMNOPQRSTUVWXYZABCDEFGHI'}
        // if (freqPercent >= 0.150)  {eSeq = 'XYZABCDEFGHIJKLMNOPQRSTUVW'}
        // if (freqPercent >= 0.095)  {eSeq = 'QRSTUVWXYZABCDEFGHIJKLMNOP'}


        // if (freqPercent >= 12.702) {eSeq = 'EFGHIJKLMNOPQRSTUVWXYZABCD'}
        // if (freqPercent < 12.702)  {eSeq = 'TUVWXYZABCDEFGHIJKLMNOPQRS'}
        // if (freqPercent < 9.056)   {eSeq = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
        // if (freqPercent < 8.167)   {eSeq = 'OPQRSTUVWXYZABCDEFGHIJKLMN'}
        // if (freqPercent < 7.507)   {eSeq = 'IJKLMNOPQRSTUVWXYZABCDEFGH'}
        // if (freqPercent < 6.966)   {eSeq = 'NOPQRSTUVWXYZABCDEFGHIJKLM'}
        // if (freqPercent < 6.749)   {eSeq = 'STUVWXYZABCDEFGHIJKLMNOPQR'}
        // if (freqPercent < 6.327)   {eSeq = 'HIJKLMNOPQRSTUVWXYZABCDEFG'}
        // if (freqPercent < 6.094)   {eSeq = 'RSTUVWXYZABCDEFGHIJKLMNOPQ'}
        // if (freqPercent < 5.987)   {eSeq = 'DEFGHIJKLMNOPQRSTUVWXYZABC'}
        // if (freqPercent < 4.253)   {eSeq = 'LMNOPQRSTUVWXYZABCDEFGHIJK'}
        // if (freqPercent < 4.025)   {eSeq = 'CDEFGHIJKLMNOPQRSTUVWXYZAB'}
        // if (freqPercent < 2.782)   {eSeq = 'UVWXYZABCDEFGHIJKLMNOPQRST'}
        // if (freqPercent < 2.758)   {eSeq = 'MNOPQRSTUVWXYZABCDEFGHIJKL'}
        // if (freqPercent < 2.406)   {eSeq = 'WXYZABCDEFGHIJKLMNOPQRSTUV'}
        // if (freqPercent < 2.360)   {eSeq = 'FGHIJKLMNOPQRSTUVWXYZABCDE'}
        // if (freqPercent < 2.228)   {eSeq = 'GHIJKLMNOPQRSTUVWXYZABCDEF'}
        // if (freqPercent < 2.015)   {eSeq = 'YZABCDEFGHIJKLMNOPQRSTUVWX'}
        // if (freqPercent < 1.974)   {eSeq = 'PQRSTUVWXYZABCDEFGHIJKLMNO'}
        // if (freqPercent < 1.929)   {eSeq = 'BCDEFGHIJKLMNOPQRSTUVWXYZA'}
        // if (freqPercent < 1.492)   {eSeq = 'VWXYZABCDEFGHIJKLMNOPQRSTU'}
        // if (freqPercent < 0.978)   {eSeq = 'KLMNOPQRSTUVWXYZABCDEFGHIJ'}
        // if (freqPercent < 0.772)   {eSeq = 'JKLMNOPQRSTUVWXYZABCDEFGHI'}
        // if (freqPercent < 0.153)   {eSeq = 'XYZABCDEFGHIJKLMNOPQRSTUVW'}
        // if (freqPercent < 0.150)   {eSeq = 'QRSTUVWXYZABCDEFGHIJKLMNOP'}


// keylen: 1 key: E this: 2ms tot: 53ms
// keylen: 1 key: A this: 2ms tot: 55ms
// keylen: 1 key: X this: 1ms tot: 57ms
// keylen: 1 key: F this: 1ms tot: 58ms
// keylen: 1 key: C this: 1ms tot: 60ms
// keylen: 1 key: F this: 3ms tot: 63ms
// keylen: 1 key: I this: 1ms tot: 67ms
// keylen: 1 key: R this: 1ms tot: 69ms
// keylen: 1 key: W this: 1ms tot: 70ms
// keylen: 1 key: O this: 1ms tot: 72ms
// keylen: 1 key: I this: 1ms tot: 74ms
// keylen: 1 key: W this: 1ms tot: 75ms
// keylen: 1 key: C this: 1ms tot: 77ms
// keylen: 1 key: V this: 1ms tot: 79ms
// keylen: 1 key: P this: 1ms tot: 80ms
// keylen: 1 key: O this: 1ms tot: 82ms
// keylen: 1 key: Z this: 1ms tot: 83ms
// keylen: 1 key: T this: 1ms tot: 85ms
// keylen: 1 key: C this: 1ms tot: 87ms
// keylen: 1 key: Y this: 2ms tot: 89ms
// keylen: 2 key: NQ this: 1ms tot: 90ms
// keylen: 2 key: BZ this: 1ms tot: 92ms
// keylen: 2 key: FA this: 1ms tot: 94ms
// keylen: 2 key: ZD this: 1ms tot: 95ms
// keylen: 2 key: GP this: 12ms tot: 107ms
// keylen: 2 key: OK this: 1ms tot: 108ms
// keylen: 2 key: RB this: 1ms tot: 109ms
// keylen: 2 key: QA this: 0ms tot: 110ms
// keylen: 2 key: SV this: 5ms tot: 116ms
// keylen: 2 key: FH this: 1ms tot: 117ms
// keylen: 2 key: JK this: 1ms tot: 118ms
// keylen: 2 key: IK this: 1ms tot: 119ms
// keylen: 2 key: CM this: 1ms tot: 121ms
// keylen: 2 key: XP this: 1ms tot: 122ms
// keylen: 2 key: BK this: 1ms tot: 123ms
// keylen: 2 key: XJ this: 2ms tot: 129ms
// keylen: 2 key: RE this: 1ms tot: 130ms
// keylen: 2 key: PB this: 1ms tot: 131ms
// keylen: 2 key: VS this: 1ms tot: 132ms
// keylen: 2 key: XL this: 1ms tot: 134ms

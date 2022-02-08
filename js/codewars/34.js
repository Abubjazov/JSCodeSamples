//key = EPSDUCVWYM+ZLKXNBTFGORIJHAQ



// square 1   square 2   square 3   

//   1 2 3      1 2 3      1 2 3    
// 1 E P S    1 M + Z    1 F G O    
// 2 D U C    2 L K X    2 R I J    
// 3 V W Y    3 N B T    3 H A Q    

// D E F E N D T H E E A S T W A L L O F T H E C A S T L E +
// 1 1 3 1 2 1 2 3 1 1 3 1 2 1 3 2 2 3 3 2 3 1 1 3 1 2 2 1 2
// 2 1 1 1 3 2 3 3 1 1 3 1 3 3 3 2 2 1 1 3 3 1 2 3 1 3 2 1 1
// 1 1 1 1 1 1 3 1 1 1 2 3 3 2 2 1 1 3 1 3 1 1 3 2 3 3 1 1 2

// D E F E N  D T H E E  A S T W A  L L O F T  H E C A S  T L E +
// 1 1 3 1 2  1 2 3 1 1  3 1 2 1 3  2 2 3 3 2  3 1 1 3 1  2 2 1 2
// 2 1 1 1 3  2 3 3 1 1  3 1 3 3 3  2 2 1 1 3  3 1 2 3 1  3 2 1 1 
// 1 1 1 1 1  1 3 1 1 1  2 3 3 2 2  1 1 3 1 3  1 1 3 2 3  3 1 1 2

// 113 122 111 311 111  123 112 331 113 111  312 133 133 323 322
// S   U   E   F   E    C   P   H   S   E    G   Y   Y   J   I   

// 223 322 211 311 313  311 313 123 111 323   221 232 113 112
// X   I   M   F   O    F   O   C   E   J     L   B   S   P

// DEFEND THE EAST WALL OF THE CASTLE+ => SUEFECPHSEGYYJIXIMFOFOCEJLBSP Period = 5

function trifidEncode(key, period, data) {

}

function trifidDecode(key, period, data) {

}

// describe("Encoder Static Tests", function(){
//     it("Defense Test", function(){
//       let key="EPSDUCVWYM+ZLKXNBTFGORIJHAQ";
//       let data = "DEFENDTHEEASTWALLOFTHECASTLE+";
//       let expected = "SUEFECPHSEGYYJIXIMFOFOCEJLBSP";
//       Test.assertEquals(trifidEncode(key, 5, data), expected);
//       Test.assertEquals(trifidEncode(key, 6, "ABCDEFG"), "RSAMXEG");
//     });
//     it("Alphabet Test", function(){
//       let key="ABCDEFGHIJKLMNOPQRSTUVWXYZ+";
//       Test.assertEquals(trifidEncode(key, 5, "HELLO+WORLD"), "BOJN+ZOOH+D");
//       Test.assertEquals(trifidEncode(key, 7, "HELLO+AGAIN"), "BOHBTRYAPVH");
//       Test.assertEquals(trifidEncode(key, 3, "TOP+SECRET"), "WFPYTTDHZT");
//     });
//   });

//   describe("Decoder Static Tests", function(){
//     it("Defense Test", function(){
//       let key="EPSDUCVWYM+ZLKXNBTFGORIJHAQ";
//       Test.assertEquals(trifidDecode(key, 5, "SUEFECPHSEGYYJIXIMFOFOCEJLBSP"), "DEFENDTHEEASTWALLOFTHECASTLE+");
//       Test.assertEquals(trifidDecode(key, 7, "RSQLPNPQBLB"), "ABCDEFGHIJK");
//       Test.assertEquals(trifidDecode(key, 2, "JJTAUBLJOEMIESXWYIKM"), "ATTACK+THE+WEST+WALL");

//     });
//     it("Alphabet Test", function(){
//       let key="ABCDEFGHIJKLMNOPQRSTUVWXYZ+";
//       Test.assertEquals(trifidDecode(key, 7, "WYBYKUFLVW"), "TOP+SECRET");
//       Test.assertEquals(trifidDecode(key, 5, "RTSJERFYPXX"), "MYSTERY+BOX");
//       Test.assertEquals(trifidDecode(key, 3, "BVOOF+WORJP"), "HELLO+WORLD");
//     });
//   });

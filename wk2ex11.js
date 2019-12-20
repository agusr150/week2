function balikKata(kata) {
    // you can only write your code here!
    var a = kata.length - 1
    var b = 0
    var balik1 = ''
    while(a>=0){
        balik=kata[a]
        balik1 = balik1.concat(balik)
    a--
    b++
    }
    return balik1
    
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS
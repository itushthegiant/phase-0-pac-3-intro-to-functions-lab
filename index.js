function shout(string) {
    return string.toUpperCase();
  } 

  function whisper(hello) {
    return hello.toLowerCase();
  } 


  function logWhisper(shalom) {
      console.log(shalom.toLowerCase())
  }

  function logShout(muayThai) {
      console.log(muayThai.toUpperCase())  
  }

  function sayHiToGrandma(s) {
    if (s === s.toUpperCase()) {
      return "YES INDEED!"
    }
    else if (s === s.toLowerCase()) {
      return "I can't hear you!"
    }
    else if (s === "I love you, Grandma.") {
      return "I love you, too."
    } 
  }

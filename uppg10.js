function uppg10(){
  
  // skapa tre arrayer - bigEven, smallOdd, other

  let bigEven = []
  let smallOdd = []
  let other = []

    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal

    const listOfNumbers = [2, 5, 7, 9, 12, 13, 18, 20, 25, 28]

    for(let n of listOfNumbers){
        
      if(n > 10 && n % 2 === 0){
      bigEven.push(n)
      }
      else if(n < 10 && n % 2 === 1){
        smallOdd.push(n)
      }
      else{other.push(n)
      }
    }
    
    // returnera ett objekt med de tre arrayerna
    let objNumbers = {bigEven, smallOdd, other}
    return console.log(objNumbers)
  }

  uppg10()
  
  module.exports = { uppg10 };
  
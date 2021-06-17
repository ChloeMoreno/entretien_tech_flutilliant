const smallerPrime = (limit) => {
  let prime = []
  for (let i = 2; i <= limit; i++){
    let number = 1;
    let racine = Math.floor(Math.sqrt(i));
    do{
      number++
    }while(number <= racine && i%number != 0);
      if(number > racine){
      prime.push(i)
      }
    }
  return prime
 };

console.log(smallerPrime(10));
// 2 3 5 7





function addToZero(arr) {

    if (arr.length < 2) {
      return false
    }
    
  
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return true
        }
      }
  }
  return false
  }
  addToZero([1, 2, 3, -2])
// runtime O(n^2)

function findLongestWord(arr) {
    let longest = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i]
        }
        
    }
    console.log(longest.length)

}

findLongestWord(["hi", "hello", "sheeeeeeeeeeeee"])

//runtime O(n)


function isPangram(str) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", " "];
  
    str = str.split('')
  
    console.log(alphabet.every(x => str.includes(x)))
  
  }
  
  isPangram("the quick brown fox jumps over the lazy dog")

  //runtime O(n)
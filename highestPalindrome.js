function highestPalindrome(s, k){
  let arr = s.split("");
  const n = arr.length;
  let changed = new Array(n).fill(false);

  function makePalindrome(left, right, k){
    if(left >= right) return k;

    if(arr[left] === arr[right]){
      return makePalindrome(left + 1, right -1, k);
    }

    if (k <=0) return -1;

    if(arr[left] > arr[right]){
      arr[right] = arr[left];
      changed[right] = true
    }else{
      arr[left] = arr[right];
      changed[left] = true;
    }
    const next = makePalindrome(left+1, right -1, k-1);
    if(next < 0) return -1;
    return next;

   
  }

  function maximize(left, right, k){
    if(left > right) return;

    if(left === right){
      if(k > 0) arr[left] = "9";
      return;
    }
    if(arr[left] !== "9"){
      if(changed[left] || changed[right]){
        if(k > 0){
          arr[left] = arr[right] = "9";
          maximize(left + 1, right -1, k-1);

          return;
        }
      }else{
        if(k > 1){
          arr[left] = arr[right] = "9";
          maximize(left + 1, right -1, k - 2);
          return;
        }
      }
    }
    maximize(left + 1, right -1 , k);
  }

  const remaining = makePalindrome(0, n -1, k);
  if(remaining < 0) return "-1";

  maximize(0, n -1, remaining);

  return arr.join("");
}

console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("934439", 2));
console.log(highestPalindrome("1231", 1));
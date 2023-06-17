var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  for(i=0;i<iterable.length;++i){
    if(iterable[i]==iterable[i+1]){
      iterable = iterable.replace(iterable[i+1], "")
      i--
    }
    else{
      console.log("hi")
    }
  }
  return iterable.split("")
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"))


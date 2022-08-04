function join(first, last) {
    var full;
    full = first + last;
    return full;
  }
  function secondFunction() {
    var result;
    result = join("hello", "world");
    return result;
  }
  
  var output = secondFunction();
  console.log("Output", output);
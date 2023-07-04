const sentence = "hello there from lighthouse labs";
const typewriter = function (string) {
  let timer = 0;
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(`${char}`)
    }, timer);
    timer += 50
  } 
  setTimeout(() => {
    console.log("\n")
  }, timer)
}

typewriter(sentence)



const sentence = "hello there from lighthouse labs\n";
let timer = 1000;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);

  timer += 500;
  
}
let sum = 0;
let n = prompt("Enter the number= ");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i;
  document.write(sum);
}

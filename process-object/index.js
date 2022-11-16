const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;
// new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com'
// })

for (let i = 0; i <= 1000; i++) {

}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Pengunnan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
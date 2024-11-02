import EventEmitter from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("change", (date) => {
    console.log(`Siz kiritdingiz: ${date.trim()}`);
});

let input = process.stdin;

process.stdin.setEncoding("utf-8");

console.log('Nimadur kiriting:');

input.on("data", (date) => {
    if(date.includes("exit") && date.length === 6){
        process.exit();
    }
    eventEmitter.emit("change", date);
    console.log('Nimadur kiriting:');
});

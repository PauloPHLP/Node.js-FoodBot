const fs = require('fs');
const commandLineArgs = require('command-line-args');

const optionsDefinitions = [
    {name: 'name', type: String},
    {name: 'order', type: String},
    {name: 'payment', type: Number},
    {name: 'exit', type: Boolean}
];

let getJson = fs.readFileSync('db.json');
let data = JSON.parse(getJson);

const options = commandLineArgs(optionsDefinitions);

const save = (newData) => {
    const toString = JSON.stringify(newData);
    fs.writeFileSync('db.json', toString);
}

if (options.name) {
    data.name = options.name;

    console.log(`Hello, ${options.name}! We are serving cake, coxinha and pie.`);

    save(data);
} else if (options.order) {
    data.order = options.order;

    console.log(`Good, that would be $10. You will pay with...`);

    save(data);
} else if (options.payment) {
    data.payment = options.payment;

    console.log(`Your change is ${options.payment - 10}. Thank you for eating at Paulo's. Type --exit to get the order.`);

    save(data);
} else if (options.exit) {
    console.log(`Thank you.`);

    data.name = '';
    data.order = '';
    data.payment = '';

    save(data);
} else {
    console.log('Hello, may I have your name?');
}
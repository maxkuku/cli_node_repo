#!/usr/bin/env node


const fs = require("fs");
// npm install yargs
// const yargs = require("yargs");
const path = require("path");
// const readline = require("readline");
const inquirer = require("inquirer");
const currentDirectory = process.cwd();



// const options = yargs
//     .usage("Usage: -p <path>")
//     .option("p", {
//         alias: "path",
//         describe: "Path to file",
//         type: "string",
//         demandOption: true
//     })
//     .argv;


// const filePath = path.join(__dirname, options.path);



// fs.readFile(filePath, "utf8", (err, data) => {
//     console.log(data);
// });


// запуск npm start -- -p accessPart.log
// в package.json scripts "start": "node index.js"
// запуск npm run start


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//     });


// rl.on("close", function() {
//     process.exit(0);
//     });


// rl.question("Please enter the path to the file: ", function(inputedPath) {
//     const filePath = path.join(__dirname, inputedPath);
//         fs.readFile(filePath,'utf8', (err, data) => {
//             console.log(data);
//             rl.close();
//         });
//     });






// метод prompt содержит
// 1. name — название переменной, по которой будет доступно введённое пользователем
// значение.
// 2. type — тип вопроса. Есть следующие типы вопросов:
// a. input — вопрос, ответ на который вводит пользователь;
// b. number — вопрос, в ответ на который надо ввести число;
// c. confirm — вопрос, который даёт пользователю выбрать «Да» или «Нет» и возвращать
// булево значение;
// d. list — вопрос, в котором пользователю предоставляется выбор одного ответа из
// представленного списка;
// e. checkbox — вопрос, где пользователь выбирает несколько вариантов ответов из списка
// в отличие от list;
// f. password — в таком типе вопроса все данные, введённые пользователем, будут
// скрыты;
// 3. message — сообщение, которое будет показано пользователю;
// 4. choices — массив вариантов ответов, которые будут показаны пользователю, если тип вопроса
// поддерживает варианты ответов, например, list или checkbox.


// Метод promt — асинхронный, возвращает промис. Ответ на вопрос, введённый пользователем,
// доступен в методе then.


const isFile = fileName => {
    return fs.lstatSync(fileName).isFile();
}
// const list = fs.readdirSync(__dirname).filter(isFile);
const list = fs.readdirSync(currentDirectory).filter(isFile);

inquirer
    .prompt([{
        name: "fileName",
        type: "list",
        message: "Choose file:",
        choices: list,
    }])
    .then((answer) => {
        console.log(answer.fileName);
        // const filePath = path.join(__dirname, answer.fileName);
        const filePath = path.join(currentDirectory, answer.fileName);
        fs.readFile(filePath, 'utf8', (err, data) => {
            console.log(data);
        });
    });

// находясь в папке – chmod +x cli.js
// Добавим в package.json секцию bin:
// "bin": {
//     "reader": "index.js" ?? наверно cli.js
//     },

// npm link чтобы запускать программу из любой папки терминала

// to run type readAndConsoleFile



// вместо __dirname использовать метод process.cwd(), который
// ссылается на ту директорию, из которой Node.js-программа запустилась.
// вставим const currentDirectory = process.cwd();
// и заменим list на const list = fs.readdirSync(currentDirectory).filter(isFile);
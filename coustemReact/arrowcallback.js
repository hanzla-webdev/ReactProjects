function addvalluee() {

}

const addvalue = (parameters) => { }

// if function has only onw parameter so parenthesis can be omitted
// just like

const addvawlue = parametr => { }

// if the bidy hav e only on word the curlky braces cannot be compulsory to written just like

const adddcalur = paramerter => hanzla

// now going to written the arrow function as a practie

const add = (a, b) => a + b
add(3, 3)


//                  CallBack Functions


// two types of callback functions are there synchornus and asyncohronus

// synchrounus are there 

function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
}

function afterGreeting() {
    console.log('This is the callback function being executed.');
}

greet('Alice', afterGreeting);


//   Asynchronus are there

function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched.');
        callback();
    }, 2000);
}

function processData() {
    console.log('Processing data.');
}

fetchData(processData);


// inline callback functions

doSomething(arg1, arg2, function () {
    console.log('Callback executed inline.');
});

doSomething(arg1, arg2, preCounter => counter);
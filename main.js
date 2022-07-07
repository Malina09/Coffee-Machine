const input = require('sync-input');


let mlWater = 400;
let mlMilk = 540;
let gramsCoffeeBeans = 120;
let disposableSmallCups = 9;
let disposableMiddleCups = 9;
let disposableBigCups = 9;
let money = 550;
let sugar = 7;

function action() {
    console.log("Write action (buy, fill, take, remaining, exit:)");
    let choiceAction = input();

        switch (choiceAction) {
            case "buy":
                buy();
                action();
                break;
            case "fill":
                fill();
                action();
                break;
            case "take":
                take();
                action();
                break;
            case "remaining":
                remaining();
                action();
                break;
            default: break;
        }

}

function status(){
    console.log("The coffee machine has:");
    console.log(mlWater + " ml of water");
    console.log(mlMilk + " ml of milk");
    console.log(gramsCoffeeBeans + " g of coffee beans");
    console.log(disposableSmallCups + " disposable small cups");
    console.log(disposableMiddleCups + " disposable middle cups");
    console.log(disposableBigCups + " disposable big cups");
    console.log("$" + money + " of money");
}

function buy(){
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
    let choiceTypeOfCoffee = input();

        switch (choiceTypeOfCoffee) {
            case "1":
                let expressoSize = input();
                expressoCupsSize();
                spoonsOfSugar();
                action();
                break;
            case "2":
                let latteSize = input();
                latteCupSize();
                spoonsOfSugar();
                action();
                break;
            case "3":
                let cappuccinoSize = input();
                cappuccinoCupSize();
                spoonsOfSugar();
                action();
                break;
            case "back":
                break;
        }

    action();
};

function fill(){
    console.log("Write how many ml of water you want to add:");
    let addWater = Number(input());
    mlWater += addWater;

    console.log("Write how many ml of milk you want to add:");
    let addMilk = Number(input());
    mlMilk += addMilk;

    console.log("Write how many grams of coffee beans you want to add:");
    let addCoffeeBeans = Number(input());
    gramsCoffeeBeans += addCoffeeBeans;

    console.log("Write how many disposable coffee cups you want to add:");
    let addDisposableCups = Number(input());
    disposableCups += addDisposableCups;

    action();
};

function take(){
console.log("I gave you $" + money);
money -= money;
action();
};

function remaining(){
    status();
    action();
}

function exit() {
    shutdown();
}

function expressoCupsSize(expressoSize){
    switch (expressoSize){
        case "small":
            if (mlWater >= 250 && gramsCoffeeBeans >= 16 && disposableSmallCups >= 1){
                mlWater -= 250;
                gramsCoffeeBeans -= 16;
                money += 4;
                disposableSmallCups -= 1;
            } else {
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        case "middle":
            if (mlWater >= 500 && gramsCoffeeBeans >= 32 && disposableMiddleCups >= 1){
                mlWater -= 500;
                gramsCoffeeBeans -= 32;
                money += 6;
                disposableMiddleCups -= 1;

            } else {
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        case "big":
            if (mlWater >= 800 && gramsCoffeeBeans >= 45 && disposableMiddleCups >= 1){
                mlWater -= 800;
                gramsCoffeeBeans -= 45;
                money += 8;
                disposableMiddleCups -= 1;

            } else {
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        default:
            console.log("error! Please do some choice!");
    }

}

function latteCupSize(){
    let size = input();
    switch (size){
        case "small":
            if (mlWater >= 350 && mlMilk >= 75 && gramsCoffeeBeans >= 20 && disposableSmallCups >= 1) {
                mlWater -= 350;
                mlMilk -= 75;
                gramsCoffeeBeans -= 20;
                money += 7;
                disposableSmallCups -= 1;
            }
             else {
                console.log("I have enough resources, making you a coffee!");
             }
            break;
        case "middle":
            if (mlWater >= 700 && mlMilk >= 150 && gramsCoffeeBeans >= 40 && disposableSmallCups >= 1) {
                mlWater -= 700;
                mlMilk -= 150;
                gramsCoffeeBeans -= 40;
                money += 9;
                disposableSmallCups -= 1;
            }
            else {
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        case "big":
            if (mlWater >= 900 && mlMilk >= 200 && gramsCoffeeBeans >= 50 && disposableSmallCups >= 1) {
                mlWater -= 900;
                mlMilk -= 200;
                gramsCoffeeBeans -= 50;
                money += 11;
                disposableSmallCups -= 1;
            }
            else {
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        default:
            console.log("error! Please do some choice!");
    }
}

function cappuccinoCupSize(cappuccinoSize){
    switch (cappuccinoSize){
        case "small":
            if (mlWater >= 200 && mlMilk >= 100 && gramsCoffeeBeans >= 12 && disposableSmallCups >= 1) {
                mlWater -= 200;
                mlMilk -= 100;
                gramsCoffeeBeans -= 12;
                money += 6;
                disposableSmallCups -= 1;
            } else {
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        case "middle":
            if (mlWater >= 400 && mlMilk >= 200 && gramsCoffeeBeans >= 24 && disposableSmallCups >= 1) {
                mlWater -= 400;
                mlMilk -= 200;
                gramsCoffeeBeans -= 24;
                money += 8;
                disposableSmallCups -= 1;
            } else {
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        case "big":
            if (mlWater >= 600 && mlMilk >= 300 && gramsCoffeeBeans >= 38 && disposableSmallCups >= 1) {
                mlWater -= 600;
                mlMilk -= 300;
                gramsCoffeeBeans -= 38;
                money += 10;
                disposableSmallCups -= 1;
            } else {
                console.log("I have enough resources, making you a coffee!");
            }
            break;
        default:
            console.log("error! Please do some choice!");
    }

}

function spoonsOfSugar(){
    console.log("How many spoons of sugar do you want? (Not more then 4)");
    let spoonsOfSugar = input();
    switch (spoonsOfSugar){
        case "1":
            sugar -= 1;
            break;
        case "2":
            sugar -= 2;
            break;
        case "3":
            sugar -= 3;
            break;
        case "4":
            sugar -= 4;
            break;
        default:
            break;
    }
}
action();
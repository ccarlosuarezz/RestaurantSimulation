const input_capacity = document.getElementById('input_capacity');
const input_time = document.getElementById('input_time');
const button = document.getElementById('button');
const results = document.getElementById('results');

const MAX_STATIONS = 3;
const MAX_TABLES = 15;

let productList = [];
let stationList = [];
let tableList = [];

button.addEventListener('click', simulation);

function simulation() {
    if(input_capacity.value && input_time.value) {
        let tableCpacity = input_capacity.value;
        let simulationTime = input_time.value;
        for (let i = 0; i < simulationTime; i++) {
            
        }
    } else {
        window.alert('Ingrese los parametros requeridos')
    }
}

function createProducts() {
    productList.push(new Product('Hot dog express', 3, 17));
    productList.push(new Product('Hot dog special', 5, 10));
    productList.push(new Product('hamburguesa sencilla', 4, 13));
    productList.push(new Product('hamburguesa especial', 6, 6));
    productList.push(new Product('hamburguesa super', 10, 4));
    productList.push(new Product('Lasgna sencilla', 10, 7));
    productList.push(new Product('Lasagna special', 15, 5));
    productList.push(new Product('Piza personal', 8, 20));
    productList.push(new Product('Alitas', 7, 15));
    productList.push(new Product('ceviche', 6, 3));
}

function createStations(maxStations) {
    for (let i = 0; i < maxStations; i++) {
        stationList.push(new PreparationStation(i+1, 1));
    }
}

function createTables(maxTables, capacity) {
    for (let i = 0; i < maxTables; i++) {
        tableList.push(new Table(capacity));
    }
}

function createComensalGroup() {
    
}
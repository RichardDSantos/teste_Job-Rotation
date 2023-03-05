/*
4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?
IMPORTANTE:
a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.
b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)
c) Explique como chegou no resultado.
*/

const franca = 100;
const ribPreto = 100;  
const distance = franca + ribPreto; 
const speedCar = 110; // km/h
const speedTruck = 80; // km/h
const tollStopTime = 5; // minutos

const timeTollHours = tollStopTime / 60; //converti os minutos para segundos

const timeMeeting = distance / (speedCar + speedTruck); //Somei as velocidades e dividi pela distância das duas cidades

const carDistance = speedCar * (timeMeeting - timeTollHours);

const TruckDistance = speedTruck * timeMeeting;

const theClosest = carDistance > TruckDistance ? "caminhão" : "carro";

console.log(`O ${theClosest} está mais próximo de Ribeirão Preto.`);


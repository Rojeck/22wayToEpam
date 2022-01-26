// let numberOfFilms = prompt("коко фільмов вже посмотрели?");
// let oersonalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genders: [],
//     privat: false,
// 
// 
// };
// let last = prompt('last film which you have watched?');
// let estimate = prompt('how many films you have watched?');
// let movies = {
//     [estimate]: last,
// };
// console.log(oersonalMovieDB);
// console.log(movies);
// (50 == 50) ? console.log('da') : console.log('net');
// 
// switch (52) {
//     case 51: 
//     console.log("net");
//     break;
//     case 50:
//         console.log('da');
//         break;
//         default:
//             console.log ('default');
//             break;
// }
// let num = 2;
// do {
//     num ++;
//     console.log(num);
// } while (num !== 100);
// 

let personalMovieDB = {
  

};
let num = 4;
while (num >= 0){
    personalMovieDB['user ' + num] = prompt("як вас звати");
    if (personalMovieDB['user ' + num].length <= 2){
        continue;
    }
    personalMovieDB['numberOfFilmsUser ' + num] = prompt('кіко фільмів дивився');
    personalMovieDB['lastFilmOfUser ' + num] = prompt('який ласт?');
    num--;
    if (personalMovieDB['numberOfFilmsUser ' + num] <= 10){
        alert ("too less");
    } else if (personalMovieDB['numberOfFilmsUser ' + num] > 10 && personalMovieDB['numberOfFilmsUser ' + num] <= 50) {
        alert ('norm');
    }
    else {
        alert('too many');
    }
    console.log (num);



}
console.log (personalMovieDB);
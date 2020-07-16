/**-------Feet to Mile---------*/
var feet = 0;
function feetToMile(feet){
    if (feet < 0) {
        console.log("Please enter a positive number") ;
    } else {
        var mile = feet * 0.000189394;
        return mile.toFixed(2);
    }
}
var result = feetToMile(1000);
console.log(result);




/**-------Wood Calculator---------*/
function woodCalculator(chair, table, bed) {
    if (chair || table || bed <0) {
        console.log("Please enter a valid number");
    } else {
        chair *= 1;
        table *= 3;
        bed *= 5;
        total = chair + table + bed;
        return total;
    }
}
var wood = woodCalculator(-100,2,0);
console.log(wood);





/**-------Bricks Calculator---------*/
function brickCalculator(floor) {
    var feetUnderTen = 15;
    var feetUnderTwenty = 12;
    var floorTwentyPlus = 10;
    var floorCount10= 0;
    var floorCount20= 0;
    var brickPerFeet = 1000;
    if (floor <=10) {
        var bricks = floor * feetUnderTen * brickPerFeet;
    } 
    else if(floor <=20) {
        var floorAboveTen = (floor - 10) * brickPerFeet;
        floorCount10= feetUnderTen * 10 * brickPerFeet;
        floorCount20 = floorAboveTen * feetUnderTwenty;
        bricks = floorCount10 + floorCount20;
    }
    else{
        var floorAboveTwenty = floor - 20;
        var h = floor - floorAboveTwenty;
        var floor10 = h - 10;
        floorCount10= feetUnderTen * floor10 * brickPerFeet;
        floorCount20 = floor10 * feetUnderTwenty * brickPerFeet;
        var sum = floorCount10+ floorCount20;
        var m = floorAboveTwenty * floorTwentyPlus * brickPerFeet;
        bricks = sum + m;
    }
    return bricks;
}
var result = brickCalculator(5);
console.log("Total bricks needed : " + result);




/**-------Find Tiny Friend--------*/
function tinyFriend(friends) {
    var tiny = friends[0];
    for (var index = 0; index < friends.length; index++) {
        var element = friends[index];
        if(element.length < tiny.length){
            tiny = element;
        } 
    }
    return tiny;
}
var result = tinyFriend(["Robi", "Shahalom", "Roky", "Sumon", "Sojol", "Abu", "Wadud", "Tony", "Sohan"]);
console.log(result);
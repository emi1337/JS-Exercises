function squareNumber(number){
	var square = number * number;
	return square;
}

function halfNumber(whole){
    var half = whole/2;
    return half;
}

function areaOfCircle(radius){
    var pi = 3.14
    var circle = radius + radius * pi
    return circle;
}

function percentOf(smaller, bigger){
    var percent = smaller/bigger*100;
    return percent;
}

function doMath(number){
    halved = halfNumber(number);
    console.log("Half of " + number + " is " + halved)
    squared = squareNumber(number);
    console.log("The square of " + number + " is " + squared)
    area = areaOfCircle(squared)
    console.log("The area of a circle with " + squared + " as the radius is " + area)
    percent = percentOf(area, squared)
    console.log(area + " is " + percent + " percent of " + squared)
    percent2 = percentOf(2, 10)
    console.log(2 + " is " + percent2 + " percent of " + 10)
}

doMath(5);

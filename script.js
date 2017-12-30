
// JavaScript array methods


// -----------------------------ForEach
/*
array.forEach(function(value, index, array) {

    The callback function will be executed x times,
    where x is in accordance to the total elements 
    in the array. 

    -value, index, array-
    All three parameters do not have to be used when working
    with forEach. However, the order is important.
     (array is the entire array)

     *forEach returns undefined*
})
*/

/* An implementation of what forEach could look like.
function forEach(array, callback) {
    for(var i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
*/

// -----------------------------Map
// map method functions similar to the forEach method, however
// instead of returning undefined map will create a new array and 
// add the result of the operations performed inside of the callback funciton
// to the new array, and return it.

/*
function map(arr, callback) {
    var newArray = [];
    for (let x = 0; x < array.length; x++) {
        newArray.push(callback(arr[i], i, arr));
    }
    return newArray;
}
*/

// -----------------------------Filter
// filter method works similar to map in that filter will return a new array.
// However, when running the callback function on each value in the array
// the callback will return true or false. If the callback returns true, then
// the value will be added to the new array. If the callback returns false,
// that value will be excluded from the array.

/*
function filter(array, callbaxk) {
    var newArray = [];
    for (let x = 0; x < array.length; x++) {
        if(callback(array[x]) {
            newArray.push(array[x]);
        });
    }
    return newArray;
}
*/

// -----------------------------Some
// The some array method will iterate through an entire array
// and run a callback on each value in the array.
// If the callback returns true for at least one single value,
// then some will return true.
// Otherwise, it returns false.

/*
function some(array, callback) {
    for (let x = 0; x < array.length; x++) {

        if(callback(array[x]) == true) {
            return true;
        }
    }
    return false;
}
*/

// -----------------------------Every
// Operates similar to some, except if one value in the array
// returns false the some method will return false.

/*
function every(array, callback) {

    for (let x = 0; x < array.length; x++) {

        if (callback(array[x]) == false)
            return false;
    }
    return true;
}
*/

// -----------------------------Reduce
// Accepts a callback function and an optional second parameter.
// Will iterate through the entire array and run the callback function
// on each value in the array.
// The first parameter to the callback is either the first value in the
// array or the optional second parameter.
// The first parameter to the callback is often called the "accumulator"
// The returned value from the callback becomes the new value of the accumulator.
// ******Value returned from callback is added to accumulator******

/*
[1,2,3,4,5].reduce(function(accumulator, nextValue, index, array), {

    return accumulator + nextValue;

}, optional)

The above accumulator will be initiated as the first value in the array (1).
if the optional second parameter is passed in the accumulator will be initiated
with whatever value is stored in optional.

The above will be executed five times, and the variables involved will contain the
folowing values after each iteration.

accumulator     nextValue       returned value
-----------     ---------       --------------
    1              2                  3
    3              3                  6
    6              4                  10
    10             5                  15 

    Ultimately 15 will be returned as the reduce function finishes its
    last iteration.

***************************************************

var names = ["Tim", "Matt", "Colt", "Elie"];
names.reduce(function(accumulaotr, nextValue) {
    return accumulator += " " + nextValue;
}, 'The instructors are');

accumulator              nextValue       returned value
-----------              ---------       --------------
'The instructors are'     'Tim'         'The instructors are 
                                        Tim'

'The instructors are      'Matt'        'The instructors are
Tim'                                     Tim Matt'

'The instructors are      'Colt'        'The instructors are
Tim Matt'                               Tim Matt Colt'

'The instructors are      'Elie'        'The instructors are
Tim Matt Colt'                          Tim Matt Colt Elie'

    Ultimately reduce will return "The instructors are Tim Matt Colt Elie"

***************************************************

var arr = [5,4,1,4,5];
arr.reduce(function(accumulator, nextValue) {
    if(nextValue in accumulator) {
        accumulator[nextValue]++;
    } else {
        accumulator[nextValue] = 1;
    }
    return accumulator;
}, {});

accumulator      nextValue    returned value
-----------      ---------    --------------
{}                  5           {5:1}
{5:1}               4           {5:1, 4:1}
{5:1, 4:1}          1           {5:1, 4:1, 1:1}
{5:1, 4:1, 1:1}     4           {5:1, 4:2, 1:1}
{5:1, 4:2, 1:1}     5           {5:2, 4:2, 1:1}

    Ultimately reduce will return {5:2, 4:2, 1:1}
*/


window.onload = function() {

    var array = [1,2,3,4,5];

    // The parameters passed to each of these functions
    // are optional (except for value), and do not have
    // to be named value, index, array.
    array.forEach(function(value, index, array) {
        console.log(value);
    });

    // map will return a new array containing values
    // double that of the original array passed to it.
    console.log(array.map(function(value) {
        return value * 2;
    }));

    // Avoid using if statements when writing the callback
    // function. (Stick to conditional operators).
    // Only the values greater than 3 will be returned.
    console.log(array.filter(function(value) {
        return value > 3;
    }));

    // True will be printed to console only if the array
    // passed to some contains values less than 4.
    console.log(array.some(function(value) {
        return value < 4;
    }));

    // True will be printed to console only if every
    // value in the array passed to it contains values
    // greater than 4.
    console.log(array.every(function(value) {
        return value > 4;
    }));

    // 15 will be printed to console
    console.log(array.reduceRight(function(accumulator, nextValue) {
        return accumulator + nextValue;
    }));
}



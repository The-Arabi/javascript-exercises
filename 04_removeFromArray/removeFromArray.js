//1st solution
/*const removeFromArray = function(array, ...value) {
    let final_array = [];
    for (let item of array) {
            if (value.indexOf(item) == -1) {
                final_array.push(item);
            }
    }
    return final_array;
};*/ 

// 2nd solution
const removeFromArray = function(array, ...value) {
    for (item of value) {
        if (array.indexOf(item) != -1) {
            array.splice(array.indexOf(item),1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

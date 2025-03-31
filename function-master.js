//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 //I: function that takes an object as it's param
//O: returns an array of the input objects values
//C:none
//E: none
function objectValues(object) {
   
    // return Object.values;
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 //I: function takes an object as param
//O: return objects keys in a string each separated with a space
//C:none
//E:none
function keysToString(object) {
   
    
    // return objects keys in a string each separated with a space using Object.Keys and .join
     return  Object.keys(object).join(' ');


}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function takes an object as the param
//O:  return all string values of the input object in a string each separated with a space
//C: none
//E: none
function valuesToString(object) {
    
    //empty var set up to strings
    var strings = [];
    // collect values into the output array
     var arrayValues = Object.values(object);
     
    //loop iterate over the array of values
    for(var i = 0; i < arrayValues.length; i++){
        // conditional stamtement to determine if element is string
        if(typeof arrayValues[i] === 'string'){
            //strings.push(arrayValues[i]);
            strings.push(arrayValues[i]);
        }
    } //return strings.join
    return strings.join(' ');
    
    

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I:function takes one param of unknown value 
//O:return 'array' if its an array and 'object' if its an object
//C:none
//E:none
function arrayOrObject(collection) {
    //create conditional stmt to determine if array
    if(Array.isArray(collection) === true){
 //return 'array'
        return 'array';
    } 
    //create conditional stmt to determine if collection is object
    if(Array.isArray(collection) === false && typeof collection === 'object' && collection !== null && collection instanceof Date === false){
        //return 'object
        return 'object';
    }
   
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function take a string of one word
//O: return the input string with its first letter capitalized
//C:none
//E:none
function capitalizeWord(string) {
    var string
    // return string with first letter capitalized using toUpperCase and strin index and slice
    return string[0].toUpperCase() + string.slice(1); 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function take a string of words
//O: return a string with all the words capitalized 
//C: only the first letter of each word is capitalized
//E: none
function capitalizeAllWords(string) {

// create holder array for output
var output =[]; 
 // spit string into an array
var array1 = string.split(' ');
 // loop over the array
for(var i = 0; i < array1.length; i++){
//change the capitalization at array[i]// push results to holder array
output.push(array1[i][0].toUpperCase() + array1[i].slice(1));
}
// return string using .join 
 return output.join(' ');
   
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function take an object with a name property
//O:return 'Welcome <Name>!'"
//C: first letter of of object value must be capitalized
//E:none
function welcomeMessage(object) {
        // return welcome value at object name with first letter capitalized
return 'Welcome ' + object['name'][0].toUpperCase(0) + object['name'].slice(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function take an object with a name an a species
//O: return '<Name> is a <Species>'"
//C: name and species first letter must be capitalized
//E: none
function profileInfo(object) {
    // init var to create capitalized object name
    var theName = object['name'][0].toUpperCase() + object['name'].slice(1);
     // init var to create capitalized object species
    var theSpecies = object['species'][0].toUpperCase() + object['species'].slice(1);
    //return string with capped name and species
    return theName + ' ' + 'is a ' + theSpecies;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function take an object
//O: if this object has a noises array return them as a string separated by a space,
// if there are no noises return 'there are no noises'"
//C: none
//E: noise array is empty
function maybeNoises(object) {
    //create conditional chain to determine if there is noise array, or if the noise array is empty
    if(object.hasOwnProperty('noises') === true){
        if(object.noises.length === 0 ){
            return 'there are no noises';
        }   else {
             return object.noises.join(' ');
        }
    }else {
        return 'there are no noises';
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I:function takes two params a string of words and a word 
//O:return true if <word> is in <string of words>, otherwise return false.
//C: none
//O: none
function hasWord(string, word) {
// create a conditional stmt to determine if string contains word 
if(string.includes(word)){
    return true;//return true string has word
} else{
    return false;//return false string does not have word
}

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I:function takes as param a name and an object
//O: return object with the name added to the input object's friends array
//C:none
//E:none
function addFriend (name, object) {
    // push name into object
    object['friends'].push(name);
    //return object with the name added to the friends array
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//I: function takes as param a name and an object 
//O: return true if <name> is a friend of <object> and false otherwise
//C: none
//E: object is empty
// create conditional stmt to determine if object is empty
if(Object.keys(object).length !== 0){
    //create conditional stmt to determine if name is included as part of friends
    if(object.friends.includes(name)){
        return true;
    } else{
        return false;
    }
} else {
    return false;
}

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function takes as param string (name) and an array (list of people)
//O: return a list of all the names that <name> is not friends with
//C: none
//E: friends property array is empty
function nonFriends(name, array) {
//create container var for collected output
var output = [];
//create for loop to iterate over the array
for(var i = 0; i < array.length; i++){
    // create conditional stmt to determine friends
    if(!array[i]['friends'].includes(name) && name !== array[i]['name']){
        output.push(array[i]['name'] );
    //}
}


}return output;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Should take an object, a key and a value. 
//O: Should update the property <key> on <object> with new <value>. 
//C:none
//E:If <key> does not exist on <object> create it.
function updateObject(object, key, value) {
   // update add key value pair 
    object[key] = value;
     //return object
return object;
    

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function takes an object and an array of strings as param 
//O: return object with properties removed that are listed in array
//C:none
//E: if array is empty
function removeProperties(object, array) {
    //create loop to iterate over object
    for ( var key in object){
 // create conditional stmt that compares object to array
        if(array.includes(key)){
            delete object[key];
    }
   
   }
  

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function takes an array 
//O:return an array with all the duplicates removed
//C:none
//E:none
function dedup(array) {
    //create output array 
    var output = [];
    //create loop to iterate over array
    for(var i = 0; i < array.length; i++ ){
        // create condition to determine if items in the array are duplicates
            if(!output.includes(array[i])) {
              //push non duplicates to output array
             output.push(array[i]);
    }
    
}
    // return array
    return output;
     
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
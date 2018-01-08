// -- unshift/shift --
var numbers = [1,2,3];
console.log(numbers); //[1,2,3]
numbers[3]=4;
console.log(numbers); //[1,2,3,4]
numbers.push(5);
console.log(numbers); //[1,2,3,4,5]
numbers.pop();
console.log(numbers); //[1,2,3,4]

// -- unshift/shift --
numbers.unshift("Hello")
console.log(numbers); //["Hello",1,2,3,4]
numbers.shift();
console.log(numbers); //[1,2,3,4]

// --- indexOf ---
var friends=["Charlie", "Liz", "David", "Mattias", "Liz"];
friends.indexOf("David",); //2
friends.indexOf("Liz",); //1 not 4
friends.indexOf("Lee"); //-1

// --- slice ---
var slicedFriends = friends.slice(2,4); // slicedFriends = [David", "Mattias"], friends = ["Charlie", "Liz", "David", "Mattias", "Liz"] 
var otherSlicedFriends = slicedFriends.slice(); // both = [David", "Mattias"]

// --- some practic --
var nums = [22, 65, 57, 85, 38];
console.log(nums[nums.length]); // undefined

//--
var friendGroups = [
  ["Harry", "Ron", "Hermione"],
  ["Malfoy", "Crabbe", "Goyle"],
  ["Mooney", "Wormtail", "Prongs"]
];

console.log(friendGroups[2][0]);
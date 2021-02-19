/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) { 
	if(splitReturn(s).length != splitReturn(t).length) return false; 
    else if (sortReturn(s) == sortReturn(t)) return true;
    else return false;
};

sortReturn = function(str){
	return str.split('').sort().join();
}
splitReturn = function(str){
	return str.split('');
}

console.log(isAnagram("anagram","nagaram"));
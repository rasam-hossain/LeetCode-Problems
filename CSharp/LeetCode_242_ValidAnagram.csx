public class Solution {
    public bool IsAnagram(string s, string t) {
    	//case 001: if the string length is different
    	//otherwise: sort and string comparison

    	if(s.Length() != t.Length()) 
    		return false;
        return true;
    }

    Console.WriteLine(IsAnagram("rasam", "qwertyu"));
}


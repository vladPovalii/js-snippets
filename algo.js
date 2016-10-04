// checking if two words are anagrams
var str1 = this.word1.toLowerCase().split('').sort().join('').trim();
var str2 = this.word2.toLowerCase().split('').sort().join('').trim();

if (str1 === str2) {
    this.isAnagram = true;
} else {
    this.isAnagram = false;
}


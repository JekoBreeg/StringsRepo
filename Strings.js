// This is the function I created to check if the word the user chose is a palindrome or not.
function checkPalindrome() {
    // These variables get the user's word as well as the result
    var word = document.getElementById('wordInput').value.toLowerCase();
    var resultElement = document.getElementById('result');

    // This variable reverses the user's word.
    var reversedWord = "";
    // This 'for' loop reverses the user's word and checks the length of it and compares to the forward spelled version.
    for (var i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    // This 'for' loop checks if the user's word is a palindrome or not and display the result accordingly. If it is a palindrome, the top strong is displayed, if not, then the bottom strong is displayed.
    if (word === reversedWord) {
        resultElement.innerHTML = 'This IS a palindrome! YAY!!!';
    } else {
        resultElement.innerHTML = 'This is NOT a palindrome';
    }
}
// This function resets the palindrome checker so the user can try again. Although they can just input another word and try again, I thought two buttons/options might be a little easier for some users.
function reset() {
    // This part clears the user's input and result, and I added an encouraging message, should the bottom button be used.
    document.getElementById('wordInput').value = '';
    document.getElementById('result').innerHTML = 'You Got This!';
}

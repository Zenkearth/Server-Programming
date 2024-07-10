function wave() {
    let word
    while (true) {
        word = prompt("enter your word");
        if (word.length >= 10) {
            break;
        }
        else {
            alert("Please enter a word with more than 10 characters !");
        }
    }
    word = word.toLowerCase();
    let partOfWord = word.split("");
    let result = [];
    for (let i = 0; i < word.length; i++) {
        let tempArr = partOfWord.slice();
        tempArr[i] = tempArr[i].toUpperCase();
        result.push(tempArr.join(''));
    }
    let outputDiv = document.getElementById('output');
    let arrText = document.createTextNode(JSON.stringify(result));
    outputDiv.appendChild(arrText);
}
var uniqueMorseRepresentations = function(words) {
    const dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const s = new Set();
    words.map(word => {
        let output = '';
        for (let i = 0; i < word.length; i++) {
            output += dict[word.charCodeAt(i) - 97]
        }
        if(!s.has(output)) s.add(output);
    });
    return s.size
};

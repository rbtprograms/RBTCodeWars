function capitalize(s){
    let word1 = s.split('');
    let word2 = s.split('');
        
    for (let i = 0; i < word1.length; i+=2) {
        let upperCase = word1[i].toUpperCase();
        word1.splice(i, 1, upperCase)
    }
    for (let i = 1; i < word2.length; i+=2) {
        let upperCase = word2[i].toUpperCase();
        word2.splice(i, 1, upperCase)
    }

    return [word1.join(''), word2.join('')];

  };

  console.log(capitalize('string'));

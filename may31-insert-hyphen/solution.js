function insertDash(num) {
    let breakup = num.toString().split('');
    for (let i = 1; i < breakup.length; i++) {
        if(breakup[i]%2 !== 0 && breakup[i-1]%2 !==0) {
            breakup.splice(i, 0, "-");
            i++;
        }
    }
    let joined = breakup.join('');
    return joined;
    //code me
 }

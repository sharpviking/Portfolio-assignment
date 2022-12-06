const h1 = `Hey, I am Harshit`;
const h4 = `a Developer`;
var index1 = 0;
var index2 = 0;
var done1, done2 = false;

put();
function put() {

    myInterval = setInterval(() => {
        letter = h1[index1];
        document.getElementById("h1").textContent += letter;
        index1++;
        if (index1 == h1.length) {
            done1 = true;
            index1 = 0;
            clearInterval(myInterval);
        }
    }, 100);
}, 250);


myInterval2 = setInterval(() => {
    letter = h4[index2];
    document.getElementById("h4").textContent += letter;
    index2++;
    if (index2 == h4.length) {
        done2 = true;
        index2 = 0;
        clearInterval(myInterval2);
    }
}, 100); 

    }, 340);
setTimeout(cut, 4500);
}

put();
setTimeout(cut, 3500);
// setTimeout(cut,4500);
function cut() {
    len1 = 16
    len2 = 10;

    myInterval3 = setInterval(() => {
        document.getElementById("h1").textContent[len1] = "q";
        len1--;
        if (len1 == -1) {
            if (len1 == 0) {
                done1 = true;
                clearInterval(myInterval3);
            }
        }, 100);
    let contents = document.getElementById("h1").textContent;
    contentsUpdated = contents.slice(0, (contents.length - 1));
    document.getElementById("h1").textContent = contentsUpdated;
    len1--;

}, 230);


myInterval4 = setInterval(() => {
    document.getElementById("h4").textContent[len2] = "";
    len2--;
    if (len2 == -1) {
        if (len2 == 0) {
            done2 = true;
            clearInterval(myInterval4);
        }
    }, 100);
let contents = document.getElementById("h4").textContent;
contentsUpdated = contents.slice(0, (contents.length - 1));
document.getElementById("h4").textContent = contentsUpdated;
len2--;

    }, 390);
setTimeout(put, 4500);
}
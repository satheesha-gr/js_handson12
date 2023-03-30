//Q No1
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
};

var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//Q No2
let count = 0;
(function () {
    if (count === 0) {
        let count = 1;
        console.log(count); // What is logged?
    }
    console.log(count); // What is logged?
})();

//Q No3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
};

//Q No4
const rectangle = (length) => {
    br = function (breadth) {
        console.log(length * breadth);
    };
};
rectangle(4);
br(2);

//Q No5
const outer = () => {
    let n = 0;
    inner = function () {
       return n++;
    };
    return inner;
};
  
const result = outer();
console.log(result());
console.log(result());
console.log(result());
console.log(result());

//Q No6
var a = 12;
(function () {
    alert(a);
})();

//Q No7
var a = 10;
var x = (function () {
    var a = 12;
    return function () {
        alert(a);
    };
})();
x();

//Q No8
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = "a";
    
    (function innerFunc(innerArg) {
        var innerVar = "b";
        console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
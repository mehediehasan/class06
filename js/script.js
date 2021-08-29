var numA = 1500;
var numB = 1600;
var numC = 1300;

console.log("************* Find out smallest number *************");

// if (numA < numB) {
//     console.log("num_A is smallest");
// }else if (numB < numC) {
//     console.log("num_B is smallest");
// }else {
//     console.log("num_C is smallest");
// }

if (numA < numB) {
    if (numA < numC) {
        console.log("num_A is smallest");
    } else {
        console.log("num_C is smallest");
    }
} else {
    console.log("num_B is smallest");
}

console.log("************* Find out equal number *************");
var numA = 600;
var numB = 1200;
var numC = 1200;

if (numA == numB) {
    console.log("num_A and num_B is equal");
} else {
    if (numA == numC) {
        console.log("num_A and num_C is equal");
    } else {
        if (numB == numC) {
            console.log("num_B and num_C is equal");
        } else {
            console.log("There are no equal number");
        }
    }
}

console.log("************* Grade System *************");
var mehedi = 85;

if (mehedi < 100 && mehedi > 80) {
    console.log("Mehedi Got A+ Grade");
} else {
    if (mehedi < 80 && mehedi > 70) {
        console.log("Mehedi Got A Grade");
    } else {
        if (mehedi < 70 && mehedi > 60) {
            console.log("Mehedi Got A- Grade");
        } else {
            if (mehedi < 60 && mehedi > 50) {
                console.log("Mehedi Got B Grade");
            } else {
                if (mehedi < 50 && mehedi > 40) {
                    console.log("Mehedi Got C Grade");
                } else {
                    if (mehedi < 40 && mehedi > 33) {
                        console.log("Mehedi Got D Grade");
                    } else {
                        if (mehedi > 100) {
                            console.log("Mehedi got abnormal result");
                        } else {
                            console.log("Mehedi is failed");
                        }
                    }
                }
            }
        }
    }
}

console.log("************* Grade System with else if *************");

var mahdi = 55;

if (mahdi > 80 && mahdi < 100) {
  console.log("Mahdi got A+ Grade");
} else if (mahdi > 70 && mahdi < 80) {
  console.log("Mahdi got A Grade");
} else if (mahdi > 60 && mahdi < 70) {
  console.log("Mahdi got A- Grade");
} else if (mahdi > 50 && mahdi < 60) {
  console.log("Mahdi got B Grade");
} else if (mahdi > 40 && mahdi < 50) {
  console.log("Mahdi got C Grade");
} else if (mahdi > 33 && mahdi < 40) {
  console.log("Mahdi got D Grade");
} else if (mahdi > 100) {
  console.log("Mahdi got Abnormal Result");
} else {
   console.log("Mahdi is failed");
}

console.log("************* For Loop Work 1 *************");

var sum = 0;

for (var index = 1; index < 12; index += 2) {
    var sum =  sum + index;
}
console.log(sum);

console.log("************* For Loop Work 2 *************");

var sum = 0;

for (var index = 2; index < 13; index += 2) {
    var sum =  sum + index;
}
console.log(sum);

console.log("************* String lop *************");

var strName = ["Sohel", "Kamal", "Mehedi", "Jasim", "Khaled", "Hosen"];

for (var index = 0; index < strName.length; index++) {
    console.log(strName[index]);
}
console.log("************* All star *************");
for (var index = 0; index < strName.length; index++) {
    console.log(strName[index]+"*");
}

console.log("************* Specific Index *************");

for (var index = 0; index < strName.length; index++) {
    if (strName[index] === "Mehedi") {
        console.log(`${index}`);
        break;
    }
   
}

console.log("************* Specific star *************");

for (var index = 0; index < strName.length; index++) {
    if (strName[index] === "Mehedi") {
        console.log(`${strName[index]}` + "*");
        break;
    }
   
}

console.log("************* Specific star among all *************");

for (var index = 0; index < strName.length; index++) {
    if (strName[index] === "Mehedi") {
        console.log(`${strName[index]}` + "*");
    } else {
        console.log(strName[index]);
    }
   
}
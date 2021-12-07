function grade(grade, total=100) { //the default for the total grade is 100%
    if(typeof grade !== 'number' || typeof total !== 'number') {
        throw Error('Please provide numbers only')
    }
    let gradePercentage = (grade / total)*100;

    // if(gradePercentage <= 100 && gradePercentage >= 95)
    if(gradePercentage >= 95){
        letter = "A+"
    }else if(gradePercentage <= 94.99 && gradePercentage >= 90){
        letter = "A"
    }else if(gradePercentage <= 89.99 && gradePercentage >= 85){
        letter = "B+"
    }else if(gradePercentage <= 84.99 && gradePercentage >= 80){
        letter = "B"
    }else if(gradePercentage <= 79.99 && gradePercentage >= 75){
        letter = "C+"
    }else if(gradePercentage <= 74.99 && gradePercentage >= 70){
        letter = "C"
    }else if(gradePercentage <= 69.99 && gradePercentage >= 65){
        letter = "D+"
    }else if(gradePercentage <= 64.99 && gradePercentage >= 50){
        letter = "D"
    }else {
        letter = "F"
    }
    console.log(`You got a ${letter} ${gradePercentage}%`)
}

try {
grade(20,20)
grade(19,40)
grade(80)
grade(77)
grade(55)
grade(100)
grade(14,20)
grade(99)
grade(12,30)
grade(11,15)
grade(10,20)
grade(9,20)
grade(77,100)
} catch (e) {
    console.log(e.message)
}

/** Another solution */

// function grade(grade, total=100) { //the default for the total grade is 100%
//     if(typeof grade === 'number' && typeof total === 'number') {
//         let gradePercentage = (grade / total)*100;

//         // if(gradePercentage <= 100 && gradePercentage >= 95)
//         if(gradePercentage >= 95){
//             letter = "A+"
//         }else if(gradePercentage <= 94.99 && gradePercentage >= 90){
//             letter = "A"
//         }else if(gradePercentage <= 89.99 && gradePercentage >= 85){
//             letter = "B+"
//         }else if(gradePercentage <= 84.99 && gradePercentage >= 80){
//             letter = "B"
//         }else if(gradePercentage <= 79.99 && gradePercentage >= 75){
//             letter = "C+"
//         }else if(gradePercentage <= 74.99 && gradePercentage >= 70){
//             letter = "C"
//         }else if(gradePercentage <= 69.99 && gradePercentage >= 65){
//             letter = "D+"
//         }else if(gradePercentage <= 64.99 && gradePercentage >= 50){
//             letter = "D"
//         }else {
//             letter = "F"
//         }
//         console.log(`You got a ${letter} ${gradePercentage}%`)
//     } else {
//         throw Error('Please provide numbers only')
//     }
// }

// try {
// grade(20,20)
// grade(19,40)
// grade(80)
// grade(77)
// grade(55)
// grade(100)
// grade(14,20)
// grade(99)
// grade(12,30)
// grade(11,15)
// grade(10,20)
// grade(9,20)
// grade(77,100)
// } catch (e) {
//     console.log(e.message)
// }
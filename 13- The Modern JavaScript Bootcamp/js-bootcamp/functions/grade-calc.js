function grade(grade, total=100) { //the default for the total grade is 100%
    if(typeof grade !== 'number' || typeof total !== 'number') {
        throw Error('Please provide numbers only')
    }
    let gradePresentage = (grade / total)*100;

    // if(gradePresentage <= 100 && gradePresentage >= 95)
    if(gradePresentage >= 95){
        letter = "A+"
    }else if(gradePresentage <= 94.99 && gradePresentage >= 90){
        letter = "A"
    }else if(gradePresentage <= 89.99 && gradePresentage >= 85){
        letter = "B+"
    }else if(gradePresentage <= 84.99 && gradePresentage >= 80){
        letter = "B"
    }else if(gradePresentage <= 79.99 && gradePresentage >= 75){
        letter = "C+"
    }else if(gradePresentage <= 74.99 && gradePresentage >= 70){
        letter = "C"
    }else if(gradePresentage <= 69.99 && gradePresentage >= 65){
        letter = "D+"
    }else if(gradePresentage <= 64.99 && gradePresentage >= 50){
        letter = "D"
    }else {
        letter = "F"
    }
    console.log(`You got a ${letter} ${gradePresentage}%`)
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
//         let gradePresentage = (grade / total)*100;

//         // if(gradePresentage <= 100 && gradePresentage >= 95)
//         if(gradePresentage >= 95){
//             letter = "A+"
//         }else if(gradePresentage <= 94.99 && gradePresentage >= 90){
//             letter = "A"
//         }else if(gradePresentage <= 89.99 && gradePresentage >= 85){
//             letter = "B+"
//         }else if(gradePresentage <= 84.99 && gradePresentage >= 80){
//             letter = "B"
//         }else if(gradePresentage <= 79.99 && gradePresentage >= 75){
//             letter = "C+"
//         }else if(gradePresentage <= 74.99 && gradePresentage >= 70){
//             letter = "C"
//         }else if(gradePresentage <= 69.99 && gradePresentage >= 65){
//             letter = "D+"
//         }else if(gradePresentage <= 64.99 && gradePresentage >= 50){
//             letter = "D"
//         }else {
//             letter = "F"
//         }
//         console.log(`You got a ${letter} ${gradePresentage}%`)
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
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }


//     static whoIsOld(old1, old2) {//i can change old1 to this o just dont write it, and use this in the if to dont declare and dont use static
//         if (old1.age > old2.age) {
//             return (`${old1.name} è più vecchio di ${old2.name}`)

//         }
//         else {

//             return (`${old2.name} è più vecchio di ${old1.name}`)
//         }
//     }


// }
// let kindaOld = new Person("Jordan", "29")

// let reallyOld = new Person("Julian", "30")


// console.log(Person.whoIsOld(kindaOld, reallyOld))


class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }


    whoIsOld(old2, old3) {//i can change old1 to this o just dont write it, and use this in the if to dont declare and dont use static
        if (this.age > old2.age && this.age > old3.age) {
            return (`${this.name} con ${this.age} è più vecchio di tutti`)
        }
        else if (old2.age > old3.age || old2.age > this.age) {
            return (`${old2.name} con ${old2.age} è più vecchio di tutti`)
        }
        else {
            return (`${old3.name} con ${old3.age} è più vecchio di tutti`)
        }
    }


}

let kindaOld = new Person("Jordan", 39)
let reallyOld = new Person("Julian", 40)
let reallyReallyOld = new Person("Juliaannngyy", 33)

console.log(kindaOld.whoIsOld(reallyOld, reallyReallyOld))
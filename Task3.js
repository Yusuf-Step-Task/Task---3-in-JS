//Task - 1
const Student = {
    name: "Yusuf",
    age: 16,
    group: "Step-FSDE_2_56",
    skills: ["HTML", "CSS", "JavaScript", "C#", "Python", "Java", "C++", "SQL"]
};
Student.averageScore = 600;
Student["averageScore"] = 600;
console.log(`First Skill: ${Student.skills[0]}`);
console.log(`Skills Count: ${Student.skills.length}`);

Student.introduce = function() {
    console.log(`Salam, mənim adim ${this.name} və mən Frontend öyrənirəm!`);
};
Student.introduce();

const mentor = {
    name: "Amil",
    age: 20,
    group: "Mentor",
    skills: ["HTML", "CSS", "JavaScript"]
};
console.log(`Mentor ${mentor.name} tələbə ${Student.name}-ni öyrədir.`);


// Task 2 
let fruits = ["apple", "banana", "orange"];

fruits.push("grape");
fruits.splice(1 , 1);
console.log(`Count: ${fruits.length}`)
for(let i = 0; i < fruits.length ; i++)
    {
        console.log(`${i + 1}. ${fruits[i]}`);// +1 yazdim cunki 0 ci indexden baslayirda ama ekranda 1 den baslamalidir. 
    }

let Numbers = [12 , 323 , 2 , 0 , 10];

Numbers.sort((a, b) => a - b);
console.log(`Sorted: ${Numbers}`);

let newArray = Numbers.slice(1, 4);
console.log("Slice:", newArray);

Numbers.splice(3 , 0 , 100);
console.log("Splice:", Numbers);
sumArray(Numbers);
function sumArray(Numbers)
{
    let count = 0;
    for(let i = 0 ; i < Numbers.length; i++)
        {
            count += Numbers[i];
        }
        return count;
}
console.log(`Sum: ${sumArray(Numbers)}`);



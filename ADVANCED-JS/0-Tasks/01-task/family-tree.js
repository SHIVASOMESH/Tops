const family_tree = {
    id: "001",
    name: "Narasayya",
    age: 75,
    children: [
        {
            id: "002",
            name: "Raghu",
            age: 50,
            occupation: 35000,
            children: [
                {
                    id: "003",
                    name: "Somesh",
                    age: 25,
                    occupation: 20000,
                    vehicle: "Gj0599686",
                },
                {
                    id: "004",
                    name: "Eshwar",
                    age: 20,
                    occupation: 15000,
                    vehicle: "Gj05996",
                },
                {
                    id: "005",
                    name: "Ravali",
                    age: 20,
                    occupation: 15000,
                    vehicle: "Gj0599686",
                },
            ],
        },
        {
            id: "006",
            name: "Srinu",
            age: 45,
            occupation: 3000,
            vehicle: "Gj059968",
            children: [
                {
                    id: "007",
                    name: "Omkar",
                    age: 23,
                    occupation: 25000,
                    vehicle: "Gj0599686",
                },
                {
                    id: "008",
                    name: "Kalki",
                    age: 16,
                },
            ],
        },
        {
            id: "009",
            name: "Arun Kumar",
            age: 42,
            occupation: 3000,
            vehicle: "Gj059968",
            children: [
                {
                    id: "010",
                    name: "Rocky",
                    age: 27,
                    occupation: 250000,
                    vehicle: "KGF Rocky",
                },
                {
                    id: "011",
                    name: "Srinidhi",
                    age: 25,
                    occupation: 250000,
                    vehicle: "KGF",
                },
            ],
        },
    ],
};

function printFamilyTree(person, indent = "") {
    console.log(indent + `Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}, Vehicle: ${person.vehicle}`);
    for (const child of person.children) {
        printFamilyTree(child, indent + "  ");
    }
}

// Print the family tree starting from the root
printFamilyTree(family_tree);

// let x = family_tree;
// console.log(x.children); // Access the children array of the root node

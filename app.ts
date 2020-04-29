function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 9.7;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Udochi",
  age: 27,
  hobbies: ["TV", "Blogs"],
  role: [20, "Admin"],
};

for (const hobby of person.hobbies) {
  console.log(hobby);
}

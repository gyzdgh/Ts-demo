class Student {
    姓名: string;
    constructor(public 姓,public 名) {
        this.姓名 = 姓 + 名;
    }
}

interface Person {
    姓: string;
    名: string;
}

function greeter(person : Person) {
    return "Hello, " + person.姓 + person.名;
}

let 全名 = new Student("高","远");

console.log(greeter(全名))
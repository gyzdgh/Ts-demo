#!/usr/bin/env ts-node
function createTabs(n: number): string{
    return '---'.repeat(n);
}
class Person{
    public children: Person[] = [];
    constructor(public name){}
    //添加一个后代
    addChild(child: Person): void{
        this.children.push(child);
    }
    introduceFamily(n?: number): void{
        n = n || 0;
        console.log(`${createTabs(n)}${this.name}`);
        //遍历所有的后代
        this.children.forEach(person =>{
            person.introduceFamily(n + 1);
        });
    }
}

const grandPa = new Person('张一');
const person1 = new Person('张二');
const person2 = new Person('张三');
const child11 = new Person('张一二');
const child12 = new Person('张二一');
const child21 = new Person('张一三');
const child22 = new Person('张三一');

grandPa.addChild(person1);
grandPa.addChild(person2);

person1.addChild(child11);
person1.addChild(child12);
person2.addChild(child21);
person2.addChild(child22);

grandPa.introduceFamily();
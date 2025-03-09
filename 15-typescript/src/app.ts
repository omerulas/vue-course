// let a: number = 25
// let b: string = "Ömer"
// let isUpdate:boolean = true

// function display(id:number, name:string){
//     console.log(id, name)
// }

// display(a, b)

// const first: number = 123;
// const second: number = 0x37CF;

// const value:string = 'Ömer Ulaş'

// const value:boolean = true

/* string değerlerden oluşan bir array olduğunu ifade eder */
// const value:string[] = ["Ömer", 'Ayşe', 'Faruk']
// const value: Array<string> = ["Ömer", 'Ayşe', 'Faruk']
// const value: Array<number> = [1,2,3]

// const value: (string | number)[] = [1, 2, "3"]
// const value: Array<string | number> = [1, 2, "3"]

// Tuple
// let value : [number, string] = [1, 'Ömer']

// Tuple Array
// let value : [number, string][] = [[1, 'Ömer'], [2, 'Faruk']]

// type Person = { // Interface tanımlandı
//     firstname: string,
//     lastname: string,
//     age: number,
//     jobTitle: string
// }
// let value : Person;

// 2. yol
// let value : { // Interface tanımlandı
//     firstname: string,
//     lastname: string,
//     age: number,
//     jobTitle: string
// }
// value = {
//     firstname: 'Ömer',
//     lastname: 'Ulaş',
//     age: 25,
//     jobTitle: 'System Specialist'
// };

// enum value{
//     Newspaper = 1, // Başlangıc değeri belirlenebilir
//     Newsletter,
//     Magazine,
//     Book
// }
// console.log(value.Book)
// console.log(value["Book"])
// console.log(value[1])

// enum value {
//     Newspaper = "NEWSPAPER", // Başlangıc değeri belirlenebilir
//     Newsletter = "NEWSLETTER",
//     Magazine = "MAGAZINE",
//     Book = "BOOK"
// }
// console.log(value.Newsletter)
// console.log(value["Magazine"])

// enum HttpStatus {
//     OK = 200,
//     NotFound = 404,
//     InternalServerError = 500
// }

// console.log(HttpStatus.OK)

// Union değer birden fazla tip alabilir
// const value : string | number = 1

// const value : any = 1

// const value = (): void => console.log('Selam')
// function value(): void { console.log('Selam') }
// value()

// Type never a hiçbir değer atanmaz bir iş yapabilir
// const value = (): never => { throw new Error('API could not return any value') }

// function increase(counter: number): number { // number türünde dönüş yapıyor
//     return counter++
// }

// let code: any = 123

// let empCode = <number>code

// // b opsiyonel
// function fonksiyon(a: number, b?: number): string {
//     return ''
// }

// Function Overloading
// function add(a: string, b: string): string;
// function add(a: number, b: number): number;

// function add(a: any, b: any): any {
//     return a + b
// }

// console.log(add(5, 6))
// console.log(add("5", "6"))

// Rest parameter: pythondaki *args / **kwargs
// function toplam(...numbers: number[]): number {
//     let total = 0;
//     numbers.forEach(n => total += n)
//     return total
// }

// console.log(toplam(1,2,3,4,5,6,7,8,9))

// function birlestir(message: string,...names: Array<string>){
//     console.log(message, ' ', names.join(","))
// }

// birlestir('Selamlar', 'Ömer', 'Elif', 'Kazım')

// class Person {
//     public id: number;
//     /*
//     Private ön eki almış parametreler
//     ancak nesnenin içerisinde ulaşılabilir
//     */
//     private fn: string;
//     /*
//     Protected ön eki almış parametreler
//     ancak nesnenin içerisinde ve
//     kalıtım almış nesnelerde ulaşılabilir
//     */
//     protected ln: string;
//     /**
//      * Değer dışardan değiştirilemez
//      */
//     readonly sc: string;

//     constructor(
//         id: number,
//         fn: string,
//         ln: string,
//         sc: string,
//     ) {
//         this.id = id;
//         this.fn = fn;
//         this.ln = ln
//         this.sc = sc
//     }

//     getFN() {
//         return `${this.fn} ${this.ln}`
//     }

//     static greet(){
//         console.log('Hi Everyone!')
//     }
// }

// let p = new Person(25, 'Ömer', 'Ulaş', 'Gazi Uni')
// console.log(p)
// console.log(p.getFN())
// Person.greet()

// class Employee extends Person{
//     constructor(
//         id: number,
//         fn: string,
//         ln: string,
//         sc: string,
//     ){
//         super(id, fn, ln, sc)
//     }
// }

// let e  = new Employee(29, 'Can', 'Boz', 'Galatasaray Uni')
// console.log(e)
// Employee.greet()
// console.log(e.getFN())

// abstract class Department {
//     // New ile instance oluşturulamaz
//     // Yalnızca kalıtım alınabilirler
//     constructor(public name: string) { }

//     printName(): void {
//         console.log(this.name)
//     }

//     abstract printMeeting(): void;
// }

// class Accounting extends Department {

//     constructor() {
//         // public name: string
//         super('Accounting and Auditing')
//     }

//     printMeeting(): void {
//         console.log('At 10.00.')
//     }

//     // Abstract classta bu metot olarak tanımlamadığı için
//     // abstract class ın tip olarak atandığı nesnede çıkmaz.
//     generateReport(): void{
//         console.log('Greate Report.')
//     }
// }

// const a = new Accounting()
// a.printName()
// a.printMeeting()
// a.generateReport()

// // abstract classlar tip olarak değişkene atanabilir
// // Ancak new keywordü ile bir instance oluşturulamaz
// let department: Department;
// department = new Accounting()
// department.printMeeting()
// department.printName()
// console.log(department.name)

// Interface
// interface Person {
//     fn: string,
//     md?: string,
//     ln: string,
//     readonly age: number
// }

// function getName(person: Person) {
//     if(person.md){
//         return `${person.fn} ${person.md} ${person.ln}`
//     }
//     return `${person.fn} ${person.ln}`
// }

// // Fazlasında problem yok ancak eksik olursa sıkıntı!!!
// let person1: Person = { fn: 'Ömer', ln: 'Ulaş', age: 25 }
// let person2: Person = { fn: 'İbrahim', md:'Can', ln: 'Boz', age: 25 }

// console.log(getName(person1))
// console.log(getName(person2))

// Fonksiyonlarda interface kullanımı
// interface StringFormat {
//     (str: string, isUpper: boolean): string
// }

// let format: StringFormat;
// format = function (str: string, isUpper: boolean): string {
//     return isUpper ? str.toUpperCase() : str.toLowerCase()
// }

// console.log(format('ömer faruk ulaş', true))

// interface IPerson {
//     n: string, g: string
// }

// interface IEmployee extends IPerson {
//     // n ve g ye de sahip
//     eN: number
// }

// interface IWorker extends IEmployee {
//     d: string
// }

// let e: IEmployee;
// let w: IWorker;
// e = { eN: 1, g: 'E', n: 'Ömer Ulaş' }
// w = { eN: 2, g: 'K', n: 'Ceren Naz', d: 'Muhasebe' }
// console.log(e)
// console.log(w)

// interface IPerson {
//     n: string; g: string
// }

// class Employee implements IPerson{
//      eN: number;
//      n: string;
//      g: string;
//      constructor(en: number, n: string, g: string){
//         this.eN = en;
//         this.n = n;
//         this.g = g
//      }
// }

// const e = new Employee(1, 'Ömer Ulaş', 'Erkek')
// console.log(e)

// interface BusinessPartner {
//     name: string;
//     credit: number;
// }

// interface Identity {
//     name: string;
//     id: number;
// }

// interface Contact {
//     email: string;
//     phone: string;
// }

// /*
//  * Identity ve Contact alanlarını
//  * tutan yeni bir nesne oldu.
//  */
// type Employee = Identity & Contact;

// let p1: Employee = {
//     id: 54, name: 'Ömer Ulaş', email: 'omer@email.com', phone: '5325451585'
// }

// let p2: Employee = {
//     id: 48, name: 'Nuray Kemik', email: 'nuray@email.com', phone: '5325451585'
// }

// let p3: Employee = {
//     id: 98, name: 'Kazım Saz', email: 'kazim@email.com', phone: '5325451585'
// }

// let _p: Array<Employee> = [p1, p2, p3]

// console.log(_p)

// type Customer = BusinessPartner & Contact;
// let a1: Customer = {
//     credit: 10, name: 'Ömer Ulaş', email: 'omer@email.com', phone: '5325451585'
// }

// console.log(a1)

// type tip = string | number;

// function add(a: tip, b:tip){
//     if(typeof a !== typeof b){
//         throw new Error('Değer tipleri aynı olmalıdır')
//     }else{
//         if(typeof a === 'number' && typeof b === 'number'){
//             return a + b
//         }else if(typeof a === 'string' && typeof b === 'string'){
//             return a.concat(b)
//         }
//     }
// }

// console.log(add(5, 6))
// console.log(add("5", "6"))
// console.log(add("5", 6))

// function getRandomNumber(items: number[]): number {
//     const i = Math.floor(Math.random() * items.length)
//     return items[i]
// }

// console.log(getRandomNumber([1,54,65,7,8]))

// function getRandomString(items: string[]): string {
//     const i = Math.floor(Math.random() * items.length)
//     return items[i]
// }

// console.log(getRandomString(["ömer","merve","kazım","elif","can"]))

// function getRandomElement(items: any[]): any {
//     const i = Math.floor(Math.random() * items.length)
//     return items[i]
// }

// console.log(getRandomElement([1,54,65,7,8]))
// console.log(getRandomElement(["ömer","merve","kazım","elif","can"]))

// // Hangi girdi tipinde deger verdiyle o tipte değer çıkışı olacak
// function getRandomElement2<T>(items: T[]): T {
//     const i = Math.floor(Math.random() * items.length)
//     return items[i]
// }


// console.log(getRandomElement2([1,54,65,7,8]))
// console.log(getRandomElement2(["ömer","merve","kazım","elif","can"]))
// console.log(getRandomElement2([true, true, false, true, false, false]))

// // Tipe zorlamak
// console.log(getRandomElement2<number>([1,54,65,7,8]))
// console.log(getRandomElement2<string>(["ömer","merve","kazım","elif","can"]))
// console.log(getRandomElement2<boolean>([true, true, false, true, false, false]))

// function merge<U extends object, V extends object>(obj1: U, obj2: V) {
//     return {
//         ...obj1,
//         ...obj2
//     }
// }

// let person = merge(
//     {name:'Ömer'},
//     {age: 25}
// )

// console.log(person)

// U, V bilinmeyen tipi karşılamak için atanır
// interface Month<U, V> {
//     key: U,
//     value: V
// }

// let m: Month<number, string> = { key: 1, value: 'January' }
// let m2: Month<string, string> = { key: "2", value: 'January' }
// console.log(m)
// console.log(m2)

// interface Collection<T> {
//     add(o: T): void;
//     remove(o: T): void;
// }

// class List<T> implements Collection<T> {
//     private items: T[] = []

//     add(o: T): void {
//         this.items.push(o)
//         console.log(this.items)
//     }

//     remove(o: T): void {
//         let i = this.items.indexOf(o)
//         // Eğer eleman dizide varsa siler
//         if(i > -1){this.items.splice(i, 1)}    
//     }
// }

// let l = new List<number>()
// for (let i = 0; i < 10; i++) {
//     l.add(i)  
// }

class Stack<T> {
    private elements: T[] = []

    constructor(private size: number) {

    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    isFull(): boolean {
        return this.elements.length === this.size
    }

    push(element: T): void {
        if (this.elements.length == this.size) {
            throw new Error('The stack is overflow!')
        }
        this.elements.push(element)
    }

    pop(): void {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!')
        }
        this.elements.pop()
    }

}

// Stack<number> belli olmayan tipi belirledi
let s = new Stack<number>(5)

while (!s.isFull()) {
    let n = Math.random();
    console.log(`Push ${n} into the stack`)
    s.push(n)
}

while (!s.isEmpty()) {
    let n = s.pop();
}




















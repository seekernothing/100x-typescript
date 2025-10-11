
/*function greeting  (name:string) : void {
console.log(` Hello ${name}`)
}

greeting("Abhi")*/

/*function sumOfNums(a:number,  b:number):number {
 return a+b
}

let ans = sumOfNums(4,6)

console.log(ans)*/

/*function callback ( fnp: ()=>void){

    setTimeout(fnp,6000)
     return "callback scheduled";

}

function fn(){
    console.log("This will gets printed after sometime")
   
}

let ans = callback(fn)

console.log(ans)*/



/// Interfaces ----> mainly used to assign types to objects

interface User{
    name:string,
    lastname:string,
    age:number,
    email:string
}



let user = {
    name: "Abhishek",
    lastname:"Biradar",
    age:23,
    email:"ab@gmail.com"


}

function greetUser(user:User){
    return `Hello ${user.lastname}`
}

const res = greetUser(user)

console.log(res);




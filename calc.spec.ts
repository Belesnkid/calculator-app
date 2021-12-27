import {add, multiply, subtract} from "./calc-functions"
describe("Calculator Tests", () =>{
    
    it("Should add 2 + 2", ()=>{
        const sum = add(2,2);
        expect(sum).toBe(4);
    });

    it("Should subract 2 from 2", () =>{
        const diff = subtract(2,2);
        expect(diff).toBe(0);
    })

    it("Should multiply 3 and 2", () =>{
        const prod = multiply(3,2);
        expect(prod).toBe(6);
    })
})
import {add} from "./calc-functions"
describe("Calculator Tests", () =>{
    it("Should add 2 + 2", ()=>{
        const sum = add(2,2);
        expect(sum).toBe(4);
    })
})
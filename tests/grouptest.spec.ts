import {test,expect} from "@playwright/test";

test.describe("2 Tests ",()=>{

    test("One @one",async({page})=>{
        console.log("Inside group 1")
    });
    test("Two  @Two",async({page})=>{
    console.log("Inside group 2")
    });

}) ;


//To Run individual Group Run like this npx playwright test grouptest.spec.ts --grep "@Two"

//Opposite npx playwright test grouptest.spec.ts --grep-invert  "@Two"
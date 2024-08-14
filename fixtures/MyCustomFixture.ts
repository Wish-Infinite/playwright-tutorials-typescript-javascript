import {test as baseTest} from "@playwright/test";

type MyFixtures = {
    fixture1:any;

}

type MyWorkerFixtures = {
    workerFixture1 : any;

}

export const test = baseTest.extend<MyFixtures , MyWorkerFixtures>({
    
    fixture1: async({}, use)=>{
        const fixture1 = "I am Fixture 1 ";
        console.log("Before part of Fixture 1");
        await use(fixture1);
        console.log("After part of Fixture 1");
    },

    workerFixture1 : [async({}, use)=>{
        const workerFixture1 = "I am worker Fixture 1 ";
        console.log("Before part of Worker Fixture 1");
        await use(workerFixture1);
        console.log("After part of Worker Fixture 1");
    },{scope:"worker"}]

})
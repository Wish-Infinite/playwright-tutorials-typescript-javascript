import { test, expect } from "@playwright/test";

test("Annotate Test Practice Test 1", {
    annotation: {
        type: "Jira Story",
        description: "https://wishinfinite1.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-1"
    }
}, async ({ page }) => {
    await page.goto(`https://www.google.com`);
    await expect(page).toHaveTitle("Google");
})

test.skip("Annotate Test Practice Test 2", {
    tag: "@UI",
    annotation: [{
        type: "Skip Reason",
        description: "Requirement change is going to happen"
    }, {
        type: "Jira Story",
        description: "https://wishinfinite1.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-1"
    }],

}, async ({ page }) => {
    await page.goto(`https://www.google.com`);
    await expect(page).toHaveTitle("Google");
})

test.describe("Describe Block 1", {
    annotation: {
        type: "Jira Story",
        description: "https://wishinfinite1.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-1"
    }
}, async () => {

    test("Practice Test1", async ({ }) => {
        console.log("Practice Test 1")
    })

    test("Practice Test2", async ({ }) => {
        console.log("Practice Test 2")
    })

    test("Practice Test3", async ({ }) => {
        console.log("Practice Test 3")
    })
})
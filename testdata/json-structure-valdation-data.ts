import { expect } from '@playwright/test'

export const respStructure = expect.objectContaining({
    firstname: expect.any(String),
    lastname: expect.any(String),
    totalprice: expect.any(Number),
    depositpaid: expect.any(Boolean),
    bookingdates: expect.objectContaining({
        checkin: expect.any(String),
        checkout: expect.any(String)
    })
})

export const dataStructure = expect.objectContaining({
    id: expect.anything(),
    name: expect.any(String),
    age: expect.any(Number),
    food: expect.arrayContaining([expect.any(String)]),
    device: 'Laptop'
})
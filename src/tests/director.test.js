const request = require ('supertest')
const app = require('../app')


const BASE_URL = '/api/v1/directors'

const director = {
    firstName:'yoneison',
    lastName:'Bayona',
    nationality:'brazil',
    image:'vdfhgdshdgh',
    birthday:'1994-02-11'


    
}
let directorId

test("Post -> BASE_URL , should return status code 201,  res.body.name === genre.name", async()=>{

    const res = await request(app)
    .post(BASE_URL)
    .send(director)

    directorId = res.body.id

    expect(res.statusCode).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(director.name)
})

test('GET -> BASE_URL, should return statuscode 200, res.body.name=== 1',async () => { 

    const res = await request (app)
    .get(BASE_URL)
 
 
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
     
 
 })
 
 test('GET -> BASE_URL/:id, should return statusCode 200, and res.body.name === director.name', async () => { 
      
     const res = await request(app)
       .get(`${BASE_URL}/${directorId}`)
 
     expect(res.statusCode).toBe(200)
     expect(res.body).toBeDefined()
     expect(res.body.name).toBe(director.name)  
 
  })
 
  test('PUT -> BASE_URL/directorId, should return statusCode 200, res.body.name=== bodyUpdate.name', async() => {
 
     const bodyUpdate = {
        firstName:'yoneisonk',
        lastName:'Bayonahh',
        nationality:'brazilh',
        image:'vdfhgdshdghh',
        birthday:'1994-02-09'
     }
 
     const res = await request(app)
        .put(`${BASE_URL}/${directorId}`)
        .send(bodyUpdate)
 
     expect(res.status).toBe(200)
     expect(res.body).toBeDefined()
     expect(res.body.name).toBe(bodyUpdate.name)   
  })
 
  test('DELETE -> BASE_URL/directorId, should return statusCode 204',async() => {
 
     const res = await request(app)
      .delete(`${BASE_URL}/${directorId}`)
 
      expect(res.status).toBe(204)
  })
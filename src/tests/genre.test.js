const request = require ('supertest')
const app = require('../app')

const BASE_URL = '/api/v1/genres'

const genre = {
    name:'Vallento'
}
let genreId

test("Post -> BASE_URL , should return status code 201,  res.body.name === genre.name", async()=>{

    const res = await request(app)
    .post(BASE_URL)
    .send(genre)

    genreId = res.body.id

    expect(res.statusCode).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(genre.name)
})

test('GET -> BASE_URL, should return statuscode 200, res.body.name=== 1',async () => { 

   const res = await request (app)
   .get(BASE_URL)


   expect(res.statusCode).toBe(200)
   expect(res.body).toBeDefined()
   expect(res.body).toHaveLength(1)
    

})

test('GET -> BASE_URL/:id, should return statusCode 200, and res.body.name === genre.name', async () => { 
     
    const res = await request(app)
      .get(`${BASE_URL}/${genreId}`)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(genre.name)  

 })

 test('PUT -> BASE_URL/genreId, should return statusCode 200, res.body.name=== bodyUpdate.name', async() => {

    const bodyUpdate = {
        name: 'salsa'
    }

    const res = await request(app)
       .put(`${BASE_URL}/${genreId}`)
       .send(bodyUpdate)

    expect(res.status).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(bodyUpdate.name)   
 })

 test('DELETE -> BASE_URL/genreId, should return statusCode 204',async() => {

    const res = await request(app)
     .delete(`${BASE_URL}/${genreId}`)

     expect(res.status).toBe(204)
 })
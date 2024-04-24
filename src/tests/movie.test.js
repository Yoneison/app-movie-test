const request = require ('supertest')
const app = require('../app')

const BASE_URL = '/api/v1/movies'

const movie = {
    name:'la carta',
    image:'eyryfyyljyd',
    synopsis:'comedia',
    releaseYear:'2023-09-03'

}
let movieId

test("Post -> BASE_URL , should return status code 201,  res.body.name === movie.name", async()=>{

    const res = await request(app)
    .post(BASE_URL)
    .send(movie)

    movieId = res.body.id

    expect(res.statusCode).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(movie.name)
})

test('GET -> BASE_URL, should return statuscode 200, res.body.name=== 1',async () => { 

   const res = await request (app)
   .get(BASE_URL)


   expect(res.statusCode).toBe(200)
   expect(res.body).toBeDefined()
   expect(res.body).toHaveLength(1)
    

})

test('GET -> BASE_URL/:id, should return statusCode 200, and res.body.name === movie.name', async () => { 
     
    const res = await request(app)
      .get(`${BASE_URL}/${movieId}`)

      console.log(res.body);

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(movie.name)  

 })

 test('PUT -> BASE_URL/movieId, should return statusCode 200, res.body.name=== bodyUpdate.name', async() => {

    const bodyUpdate = {
        name:'la cartajj',
        image:'eyryfyyljydpp',
        synopsis:'comediao',
        releaseYear:'2023-09-07'
    }

    const res = await request(app)
       .put(`${BASE_URL}/${movieId}`)
       .send(bodyUpdate)

    expect(res.status).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(bodyUpdate.name)   
 })

 test('DELETE -> BASE_URL/movieId, should return statusCode 204',async() => {

    const res = await request(app)
     .delete(`${BASE_URL}/${movieId}`)

     expect(res.status).toBe(204)
 })
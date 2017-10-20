import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Contact } from '.'

const app = () => express(routes)

let contact

beforeEach(async () => {
  contact = await Contact.create({})
})

test('POST /contacts 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ prenom: 'test', nom: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.prenom).toEqual('test')
  expect(body.nom).toEqual('test')
})

test('GET /contacts 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /contacts/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${contact.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(contact.id)
})

test('GET /contacts/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /contacts/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${contact.id}`)
    .send({ prenom: 'test', nom: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(contact.id)
  expect(body.prenom).toEqual('test')
  expect(body.nom).toEqual('test')
})

test('PUT /contacts/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ prenom: 'test', nom: 'test' })
  expect(status).toBe(404)
})

test('DELETE /contacts/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${contact.id}`)
  expect(status).toBe(204)
})

test('DELETE /contacts/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})

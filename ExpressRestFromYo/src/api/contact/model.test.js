import { Contact } from '.'

let contact

beforeEach(async () => {
  contact = await Contact.create({ prenom: 'test', nom: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = contact.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contact.id)
    expect(view.prenom).toBe(contact.prenom)
    expect(view.nom).toBe(contact.nom)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = contact.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contact.id)
    expect(view.prenom).toBe(contact.prenom)
    expect(view.nom).toBe(contact.nom)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})

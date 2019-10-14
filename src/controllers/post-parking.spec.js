import makePostParking from './post-parking';
import makeFakeParking from '../../__test__/fixture/parking';


describe('POST parking controler',()=>{

    it('Publicado com sucesso um parking', async ()=>{
        const postParking = makePostParking({ addParking: p => p })
        const fakeParking = makeFakeParking()

        const request ={
            headers: {
                'Content-Type': 'application/json',
              },
            body:fakeParking
        }

        const expected = {
            headers: {
                'Content-Type': 'application/json',
                'Last-Modified': new Date(request.body.modifiedAt).toUTCString()
              },
            statusCode: 201,
            body: { reserva:request.body.id }
        }

        const actual = await postParking(request)
        expect(actual).toEqual(expected)
    })

    it("retorna um error ao publicar um parking", async ()=>{
        const postParking = makePostParking({
            addParking:()=>{
                throw new Error("error mock!")
            }
        })

        const fakeParking = makeFakeParking()

        const request ={
            headers: {
                'Content-Type': 'application/json',
              },
            body:fakeParking
        }

        const expected = {
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 400,
            body: { error: 'error mock!' }
          }
          const actual = await postParking(request)
          expect(actual).toEqual(expected)
    })
})
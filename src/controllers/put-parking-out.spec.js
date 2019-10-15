import makePutParkingOut from './put-parking-out'
import makeFakeParking from '../../__test__/fixture/parking';


describe("PUT parking out", () => {

    it("deve fazer uma saida com sucesso", async () => {
        const fakeParking = makeFakeParking({ paid: true });
        const putParkingOut = makePutParkingOut({
            exitParking: () => {
                return { ...fakeParking, left: true, modifiedAt: Date.now() }
            }
        });

        const request = {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                id: fakeParking.id
            }
        }

        const expected = {
            headers: {
                'Content-Type': 'application/json',
                'Last-Modified': new Date(fakeParking.modifiedAt).toUTCString()
            },
            statusCode: 200,
            body: { message: `reserva ${fakeParking.id}, saida realizada com sucesso.` }
        }

        const actual = await putParkingOut(request)

        expect(actual).toEqual(expected)


    })

    it('deve retornar um erro ao realizar uma saida', async () => {

        const putParkingOut = makePutParkingOut({
            exitParking: () => {
                throw new Error("ERRO MOCK!!!")
            }
        });

        const fakeParking = makeFakeParking()
        const request = {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                id: fakeParking.id
            }
        }

        const expected = {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 400,
            body: { error: 'ERRO MOCK!!!' }
        }

        const actual = await putParkingOut(request)

        expect(actual).toEqual(expected)
    })
})
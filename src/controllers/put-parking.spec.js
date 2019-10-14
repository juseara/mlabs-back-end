import makePutParking from './put-parking';
import makeFakeParking from '../../__test__/fixture/parking';


describe('PUT parking controller',()=>{

    it('Relizar pagamento da vaga com sucesso',async ()=>{
        const fakeParking = makeFakeParking();
        
        const putParking = makePutParking({ paymentParking: (p)=> {
            return {...fakeParking,paid:true,modifiedAt:Date.now()}
        } });

        const request = {
            headers:{
                'Content-Type': 'application/json',
            },
            params:{
                id: fakeParking.id
            }
        }

        const expected = {
            headers: {
                'Content-Type': 'application/json',
                'Last-Modified': new Date(fakeParking.modifiedAt).toUTCString()
              },
              statusCode: 200,
              body: { message:`reserva ${fakeParking.id} paga com sucesso.` }
        }

        const actual = await putParking(request)
        
        expect(actual).toEqual(expected)
    })
})
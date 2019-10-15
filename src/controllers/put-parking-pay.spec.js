import makePutParkingPay from './put-parking-pay';
import makeFakeParking from '../../__test__/fixture/parking';


describe('PUT parking controller',()=>{

    it('Relizar pagamento da vaga com sucesso',async ()=>{
        const fakeParking = makeFakeParking();
        
        const putParkingPay = makePutParkingPay({ paymentParking: ()=> {
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

        const actual = await putParkingPay(request)
        
        expect(actual).toEqual(expected)
    })

    it("Deve retornar um erro ao realizar pagamento",async()=>{

        const putParkingPay = makePutParkingPay({
            paymentParking:()=>{
                throw new Error("error mock!")
            }
        })  

        const fakeParking = makeFakeParking()

        const request ={
            headers: {
                'Content-Type': 'application/json',
              },
            params:{
                id: fakeParking.id
            }
        }

        const expected = {
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 400,
            body: { error: 'error mock!' }
          }
          const actual = await putParkingPay(request)
          expect(actual).toEqual(expected)
    })
})
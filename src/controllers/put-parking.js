export default function makePutParking({ paymentParking }){
    return async function putParking (httpRequest){
        try {
            
            const id = httpRequest.params.id

            const paymentedParking = await paymentParking({id})
            
            return {
                headers:{
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(paymentedParking.modifiedAt).toUTCString()
                },
                statusCode: 200,
                body: { message:`reserva ${paymentedParking.id} paga com sucesso.` }
            }

        } catch (error) {
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    error: error.message
                }
            }
        }
    }
}
export default function makePutParkingOut({ exitParking }){
    return async function putParkingOut(httpRequest){
        try {
            
            const id = httpRequest.params.id

            const exitedParking = await exitParking({id})

            return {
                headers:{
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(exitedParking.modifiedAt).toUTCString()
                },
                statusCode: 200,
                body: { message:`reserva ${exitedParking.id}, saida realizada com sucesso.` }
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
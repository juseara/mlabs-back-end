export default function makePostParking({ addParking }){
    return async function postParking(httpRequest){
        try {
            
            const { ...parkingInfo } = httpRequest.body
            const parking = await addParking({...parkingInfo})
            
            return {
                headers: {
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(parking.modifiedAt).toUTCString()
                },
                statusCode: 201,
                body: { 
                    reserva: parking.id
                }
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
export default function makeGetParkingHistory({ historyParking }){
    return async function getParkingHistory(httpRequest){
        const headers = {
            'Content-Type': 'application/json'
          }
        
        try {

            const history = await historyParking({plate:httpRequest.params.plate})
            
            return{
                headers,
                statusCode:200,
                body:history
            }
            
        } catch (error) {
            return {
                headers,
                statusCode: 400,
                body: {
                  error: e.message
                }
              }
        }
    }
}
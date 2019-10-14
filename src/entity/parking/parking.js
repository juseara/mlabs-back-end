export default function buildMakeParking({ Id, validations }) {
    return function makeParking({
        id = Id.makeId(),
        plate,
        paid = false,
        left = false,
        createdAt = Date.now(),
        modifiedAt = Date.now(),
    } = {}) {

        if (!Id.isValidId(id)) {
            throw new Error("Vaga de estacionamento deve conter um id válido.");
        }

       
       validations.notMatchRegex(plate,/^[A-Z]{3}\-\d{4}$/,"Vaga de estacionamento deve conter um placa de veículo válida.")
        

        return Object.freeze({
            getId :             () => id,
            getPlate :          () => plate,
            getPaid :           () => paid,
            getLeft :           () => left,
            getCreatedAt :      () => createdAt,
            getModifiedAt :     () => modifiedAt,
        });
    }
}
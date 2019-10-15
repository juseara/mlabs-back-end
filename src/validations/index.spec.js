import validations from './index';

describe("Validations",()=>{

    it("Deve retornar erro com validação do regex para mascara AAA-9999",()=>{
        
      return expect(()=>validations.notMatchRegex("aaa-1234",/^[A-Z]{3}\-\d{4}$/,"placa inválida")).toThrow("placa inválida")
    })

    it("Não deve retornar erro para placa AAA-1234",()=>{
        return expect(()=>validations.notMatchRegex("AAA-1234",/^[A-Z]{3}\-\d{4}$/,"placa inválida")).not.toThrow("placa inválida")
    })

})
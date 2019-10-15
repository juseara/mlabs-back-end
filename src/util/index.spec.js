import * as utils from './index'

describe('Util',()=>{

    it("Deve retornar time com 10 minutes",()=>{
        const dateOne = Date.now()
        const dateTow = Date.now() + 600000
        const time = utils.getMinutes(dateOne,dateTow)

        expect(time).toBe("10 minutes")
    })

    it("Deve retornar item com 30 minutes",()=>{
        const dateOne = Date.now() - 1200000
        const dateTow = Date.now() + 600000
        const time = utils.getMinutes(dateOne,dateTow)

        expect(time).toBe("30 minutes")
    })

    it("Deve retornar item com 0 minutes",()=>{
        const dateOne = Date.now()
        const dateTow = Date.now()
        const time = utils.getMinutes(dateOne,dateTow)

        expect(time).toBe("0 minutes")
    })
})
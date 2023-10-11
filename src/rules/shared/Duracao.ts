export default class Duracao {
    constructor(
        readonly emSegundos: number
    ){
        if (emSegundos <= 0)
            throw new Error('Duração tem que ser maior que zero')
        if (!emSegundos)
            throw new Error('Duração é obrigatória')
    }

    get emHorasEMinutos(): string {
        const horas = Math.floor(this.emSegundos / 3600)
        const minutos = Math.floor((this.emSegundos - (horas * 3600))/60)
        return `${horas}h ${minutos}m`
    }
}
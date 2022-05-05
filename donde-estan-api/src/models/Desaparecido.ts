import {Schema, model} from 'mongoose';


interface IDesaparecido {
    nombre: string,
    residencia: string,
    fechaDesaparicion: string,
    descripcion: string,
    edad: string,
    sexo: string,

}


const desaparecidoSchema = new Schema<IDesaparecido>({
    nombre: { type: String, required: true },
    residencia: { type: String, required: true },
    fechaDesaparicion: { type: String, required: true },    
    descripcion: { type: String, required: true, maxlength: 500 },
    edad: { type: String, required: true },
    sexo: { type: String, required: true },
})


const Desaparecido = model<IDesaparecido>('Desaparecido', desaparecidoSchema);

export default Desaparecido;
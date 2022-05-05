import {Request, Response} from 'express';
import Desaparecido from '../models/Desaparecido'


export const getAll = async (req: Request, res: Response) => {
    try {
        const desaparecidos = await Desaparecido.find()
        res.status(201).json({ok: true, desaparecidos})
    } catch (error) {
        res.status(500).json({ok: false, msg: error.message})
    }
}

export const addNew = async (req: Request, res: Response) => {
    const { nombre, residencia, fechaDesaparicion, descripcion, edad, sexo } = req.body
    try {
        const desaparecido = new Desaparecido(req.body)
        await desaparecido.save()
        res.status(201).json({ ok: true, desaparecido })
    } catch (error) {
        res.status(500).json({ ok: false, msg: error.message })
    }
}

export const getOne = async (req: Request, res: Response) => {
    const { nombre } = req.params
    try {
        const desaparecido = await Desaparecido.findOne({nombre: nombre})
        res.status(201).json({ ok: true, desaparecido })
    } catch (error) {
        res.status(500).json({ ok: false, msg: error.message })
    }
}
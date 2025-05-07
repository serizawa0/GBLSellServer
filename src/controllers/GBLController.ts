import { Request, Response } from "express";
import Utilisateur from "../classes/Utilisateur";
import UserCategorie from "../classes/UserCatégorie";
import { PrismaClient } from "../generated/prisma";
import Log from "../classes/Log";

const prisma = new PrismaClient()


export const setUsers = async () => {
    const userList = await prisma.user.findMany()
    console.log(userList);
    return userList
}

export const getUsers = async () => {
    const userList = await prisma.user.findMany({
        select:{
            id:true,
            name:true,
            email:true,
            cat:true
        }
    })
    return userList
}

export const logInApp = async (login:Log) => {
    const { email,password } = login
    try {
        const user = await prisma.user.findUnique({
            where:{ email },
            select:{
                id:true,
                name:true,
                email:true,
                cat:true,
                password:true
            }
        })
        if(!user){
            throw new Error('Utilisateur non existant')
        }
        const passwordMatch = (user.password==password)
        if (!passwordMatch) {
            throw new Error('Mot de passe incorrect');
        }
        // const retour = new Utilisateur(user.id)
        return {
            id:user.id,
            name:user.name,
            email:user.email,
            cat:user.cat
        }
    } catch (error) {
        return 'error'
    }
}

export const submtUser = async (user:Utilisateur) => {
    // users.push(user)
    // return users
}
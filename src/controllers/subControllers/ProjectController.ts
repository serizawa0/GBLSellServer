import { PrismaClient } from "../../generated/prisma"

const prisma = new PrismaClient()

export const getProjectTypes = async () => {
    const projectTypes = await prisma.projectType.findMany()
    return projectTypes
}

export const getProjects = async () => {
    const projects  = await prisma.project.findMany()
    return projects
}

export const createProject = async (typeId:number, client:string) => {
    await prisma.project.create({
        data:{
            client:client,
            typeId:typeId
        },
        include:{
            type:true
        }
    })
    const projects = await prisma.project.findMany()
    return projects
}
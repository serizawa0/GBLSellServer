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
    const projects = await prisma.project.findMany({
        orderBy:{
            createdAt:"desc"
        }
    })
    return projects
}

export const getFileGroups = async (id:number) => {
    const fileGroups = await prisma.fileGroup.findMany({
        where:{
            projectId:id
        },
        include:{
            files:true
        }
    })
    return fileGroups
}

export const createFileGroup = async (id:number, name:string) => {
    await prisma.fileGroup.create({
        data: {
            name:name,
            projectId:id
        }
    })
    const fileGroups  = await prisma.fileGroup.findMany({
        where:{
            projectId:id
        },
        orderBy:{id:"asc"},
        include:{
            files:true
        }
    })
    return fileGroups
}
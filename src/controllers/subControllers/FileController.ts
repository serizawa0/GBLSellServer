import { group } from "node:console";
import { PrismaClient } from "../../generated/prisma";

const prisma= new PrismaClient()

export const getFilesFromGroup = async (id:number) => {
    const files = await prisma.file.findMany({
        where:{
            groupId:id
        },
        select:{
            name:true
        }
    })
    return files
}

export const subFiles = async (files:Express.Multer.File[], id:number) => {
    await prisma.$transaction(files.map((file) => prisma.file.create({
        data:{
            data:file.buffer,
            name: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
            groupId: id,
        },
        select:{
            id:true,
            name:true,
            groupId:true
        }
    })))
    const group = prisma.fileGroup.findUnique({
        where:{
            id:id
        },
        include:{
            files:{
                select:{
                    id:true,
                    name:true
                }
            }
        }
    })
    return group
}

export const getFile = async (id:number) => {
    const file = await prisma.file.findUnique({
        where:{
            id:id
        },
    })
    if(file){ 
        return file
    }
}

export const removeFile = async (id:number, groupId:number) => {
    await prisma.file.delete({
        where:{
            id:id
        }
    })
    const group = await prisma.fileGroup.findMany({
        where:{
            id:groupId
        },
        include:{
            files:true
        }
    })
    return group
}
import PrivateMessage from "../../classes/PrivateMessage";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient()

export const getPrivateMessages = async (couple:PrivateMessage) =>{
    const privateMessages = await prisma.privateMessage.findMany({
        where:{
            OR:[
                { senderId:couple.senderId, receiverId:couple.receiverId },
                { senderId:couple.receiverId, receiverId:couple.senderId }
            ]
        },
        orderBy:{
            createdAt:'asc'
        },
        include:{
            sender:true,
            receiver:true
        }
    })
    return privateMessages
}

export const subPrivateMessage =  async (message:PrivateMessage) => {
    await prisma.privateMessage.create({
        data:{
            content: message.content,
            sender:{ connect: {
                id: message.senderId
            } },
            receiver:{ connect:{
                id:message.receiverId
            } }
        },
        include:{
            sender:true,
            receiver:true
        }
    })
    const privateMessages = await prisma.privateMessage.findMany({
        where:{
            OR:[
                { senderId:message.senderId, receiverId:message.receiverId },
                { senderId:message.receiverId, receiverId:message.senderId }
            ]
        },
        orderBy:{
            createdAt:'asc'
        },
        include:{
            sender:true,
            receiver:true
        }
    })
    return privateMessages
}
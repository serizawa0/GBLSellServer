import { PrismaClient } from "../../generated/prisma"

const prisma = new PrismaClient()
export const getArticles = async () => {
    const articles = await prisma.article.findMany({orderBy:{libele:"asc"}})
    return articles
}
export const subArticle = async (libelle:string, nombre:number, unite:string) => {
    await prisma.article.create({
        data:{
            libele:libelle,
            nombre:nombre,
            unite:unite
        }
    })
    const articles = await prisma.article.findMany({
        orderBy:{
            libele:"asc"
        }
    })
    return articles
}

export const entree = async (id:number, nombre:number)=> {
    const article = await prisma.article.findFirst({where:{
        id:id
    }})
    if(article){
        let n= article.nombre
        n+=nombre
        await prisma.article.update({
            where:{
                id:article.id
            },
            data:{
                nombre:n
            }
        })
    }
    const articles = await prisma.article.findMany({
        orderBy:{libele:"asc"}
    })
    return articles
}

export const sortie = async (id:number, nombre:number)=> {
    const article = await prisma.article.findFirst({where:{
        id:id
    }})
    if(article){
        let n= article.nombre
        n-=nombre
        await prisma.article.update({
            where:{
                id:article.id
            },
            data:{
                nombre:n
            }
        })
    }
    const articles = await prisma.article.findMany({
        orderBy:{libele:"asc"}
    })
    return articles
}
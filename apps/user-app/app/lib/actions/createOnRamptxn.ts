"use server";

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createOnRampTransaction(amount : number, provider : string){
    const session = await getServerSession(authOptions);
    console.log(session);
    console.log(amount,'amount');
    
    const token = Math.random().toString();
    const userId = session?.user?.id;

    if(!userId){
        return {
            message : 'User not logged in'
        }
    }

    await prisma.OnRampTransaction.create({
        data: {
            provider,
            status: "Processing",
            startTime: new Date(),
            token: token,
            userId: Number(userId),
            amount: amount
        }
    })

    return {
        message: "Done"
    }

}
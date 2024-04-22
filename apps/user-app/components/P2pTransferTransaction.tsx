import { Card } from "@repo/ui/card"
import  prisma  from "@repo/db/client";

export const P2pTransferTransaction = async({
    transactions
}: {
    transactions: {
      time: Date,
      amount: number,
      toUser : number
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }

    const transactionsWithUsernames = await Promise.all(transactions.map(async (t) => {
      const toUser = await prisma.user.findUnique({
          where: {
              id: t.toUser
          }
      });
      return {
          ...t,
          toUsername: toUser?.name || "Unknown User"
      };
  }));
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {transactionsWithUsernames.map(t => <div className="flex justify-between border-b">
                <div >
                    <div className="text-sm">
                     Sent INR
                    </div>
                    <div className="text-slate-600 text-xs">
                       
                       To : {t.toUsername}
                    </div>
                    <div className="text-slate-600 text-xs ">
                     Date : {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
}

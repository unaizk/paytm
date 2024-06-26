import { Card } from "@repo/ui/card"

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        // TODO: Can the type of `status` be more specific?
        status: string,
        provider: string
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between border-b">
                <div >
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="text-slate-600 text-xs">
                       Date : {t.time.toDateString()}
                    </div>
                    <div className="flex text-xs ">
                       <p  className="text-slate-600">Status :  </p>  <p className={`${t.status === 'Processing' ? 'text-blue-600' : t.status === 'Failure' ? 'text-red-600' : t.status === 'Success' ? 'text-green-600' : 'text-slate-600'} `}>   {t.status}</p>
                        
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
}
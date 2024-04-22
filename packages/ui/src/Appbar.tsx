import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between border-b px-4 border-slate-300">
        <div className="text-lg flex flex-col justify-center">
            PayTM
        </div>
        
        <div className="flex  justify-center ">
            <div className="flex flex-col justify-center">
                <p className="tex-center text-xl font-sans font-medium tracking-wide pr-5">{user ? user.name : null}</p>
            </div>
            <div className= "pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
            </div>
            
        </div>
    </div>
}
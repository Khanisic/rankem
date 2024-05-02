import { useState } from "react";
import UserPlus from "@/components/icons/UserPlus";
import CategoryPlus from "@/components/icons/CategoryPlus";
import Trash from "@/components/icons/Trash";
import { currentUser } from "@clerk/nextjs";
import CreateGame from "../_components/CreateGame";
const Create = async () => {

    const user = await currentUser();
    if (!user) return null;

    console.log(user.emailAddresses[0].emailAddress)

    return (
        <div className="w-full flex justify-center items-center bg-dark rounded-lg">
            <CreateGame email={user.emailAddresses[0].emailAddress} />
        </div>
    );
}

export default Create;

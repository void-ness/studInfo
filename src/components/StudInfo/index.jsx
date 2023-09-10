import React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../../features/user/userSlice";

const StudInfo = () => {
    const user = useSelector(selectUser);

    return (
        <div className="text-center text-2xl pt-32 px-6">
            {
                user.name !== "" ?
                    (<span>Your name <b>{user.name}</b> aged <b>{user.age}</b> has been added to the student system.<br /><br />You may now exit</span>) : (
                        <span>Please add a user to the system!</span>
                    )
            }
        </div>
    )
};

export default StudInfo;
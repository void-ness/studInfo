import React, { useState } from "react";

import { useDispatch } from 'react-redux';
import { updateName } from "../../features/user/userSlice";

const UserName = (props) => {
    const [name, setName] = useState("");
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        if (event.keyCode === 13) {
            if (name !== "") {
                props.actionProvider.handleUserName(name);
                props.actionProvider.handleInputAge();

                dispatch(updateName(name));
                setName("");
                setDisabled(true);
            }
        }
    }
    return (
        <div>
            {!disabled &&
                <input
                    type="text"
                    disabled={disabled}
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(event) => handleSubmit(event)}
                    className="text-sm py-1 px-2 outline outline-2 rounded-md outline-[#89c1ff]">
                </input>
            }
        </div>
    );
};

export default UserName;
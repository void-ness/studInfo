import React, { useState } from "react";

const UserName = (props) => {
    const [name, setName] = useState("");
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = (event) => {
        if (event.keyCode === 13) {
            if (name !== "") {
                props.actionProvider.handleUserName(name);
                props.actionProvider.handleInputAge();
                setName("");
                setDisabled(true);
            }
        }
    }
    return (
        <div>
            {!disabled &&
                <input type="text" disabled={disabled} placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(event) => handleSubmit(event)}></input>
            }
        </div>
    );
};

export default UserName;
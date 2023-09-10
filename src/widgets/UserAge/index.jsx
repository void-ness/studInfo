import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { updateAge } from "../../features/user/userSlice";

const UserAge = (props) => {
    const [age, setAge] = useState("");
    const [visible, setVisible] = useState(true);
    const dispatch = useDispatch();

    const ageOptions = [];
    for (let age = 18; age <= 40; age++) {
        ageOptions.push(age);
    }

    const handleAge = (ageValue) => {
        setAge(ageValue);
        props.actionProvider.handleAge(ageValue);
        props.actionProvider.handleExit();
        dispatch(updateAge(ageValue));
        setVisible(false);
    }

    return (
        <div className="">
            {visible &&
                <select
                    className="text-sm outline outline-2 outline-[#89c1ff] rounded-md py-1 px-2"
                    value={age} onChange={(e) => handleAge(e.target.value)}>
                    <option value="">Select Age</option>

                    {ageOptions.map((age) => (
                        <option key={age} value={age}>
                            {age}
                        </option>
                    ))}
                </select>
            }
        </div>
    );
};

export default UserAge;
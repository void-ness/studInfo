import React, { useState } from "react";

const UserAge = (props) => {
    const [age, setAge] = useState("");
    const [visible, setVisible] = useState(true);

    const ageOptions = [];
    for (let age = 18; age <= 40; age++) {
        ageOptions.push(age);
    }

    const handleAge = (ageValue) => {
        setAge(ageValue);
        props.actionProvider.handleAge(ageValue);
        props.actionProvider.handleExit();
        setVisible(false);
    }

    return (
        <div>
            {visible &&
                <select value={age} onChange={(e) => handleAge(e.target.value)}>
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
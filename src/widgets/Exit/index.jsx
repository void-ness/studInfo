import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Exit = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            navigate('/studinfo');
        }, 5000);

        return () => {
            clearTimeout(redirectTimeout);
        };
    }, [navigate]);

    return (
        <></>
    );
};

export default Exit;
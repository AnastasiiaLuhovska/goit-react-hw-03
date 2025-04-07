import {useEffect, useState} from "react";

const AddLocalStorage = (data, key) => {
    const [value, setValue] = useState(() => JSON.parse( localStorage.getItem(key)) ||data)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key]);

    return [value, setValue];
};

export default AddLocalStorage;
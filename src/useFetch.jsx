import { useState, useEffect } from "react";

export function useFetch(URL){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(URL)
            .then((response)=> response.json())
            .then((data) => setData(data))
            .finally(() => setLoading(false));
    },[]);

    return { data, loading}
}
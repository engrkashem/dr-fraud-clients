import { useEffect, useState } from 'react';

const useGetData = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [url])
    return [data, setData];
};

export default useGetData;
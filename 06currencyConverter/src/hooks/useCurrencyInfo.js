import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => {
                if (res && res.rates) {
                    setData(res.rates);
                }
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
                setData({});
            });
    }, [currency]);

    return data
}

export default useCurrencyInfo;
import { css } from "@emotion/css";
import { FC, useEffect, useState } from "react"
import axios from "axios";


interface ScannedProductComponents{
    value: number;
    title: string;
    barcode: string ;
}

const styles = {
    'item': css`
    width:100%;
    font-size: 1.1rem;
    border-bottom: 1px solid lightblue;
    user-select: none;`,

    'dropdownButton': css`
        
    `
}

const ScannedProduct: FC<ScannedProductComponents> = ({ value, title, barcode }) => {
    const [drinkData, setDrinkData] = useState<{ [key: string]: number }>({});
    const [dropDown, setDropDown] = useState<boolean>(false);

    useEffect(() => {
        // Fetch data when the component mounts
        axios.get(`http://localhost:3000/get/drinks/${barcode}`)
            .then((result) => {
                setDrinkData(JSON.parse(result.data.data[0].inhoud));
            });
    }, [barcode]);


    return (
        <>
            <button onClick={() => setDropDown(!dropDown)}>dropDown</button>
            <li id='product' className={styles['item']} key={barcode}>{value}x {title}</li>
            <ul>
                {dropDown && Object.entries(drinkData).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                ))}
            </ul>
        </>
    );
};

export default ScannedProduct;
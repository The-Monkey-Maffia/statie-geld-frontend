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
    
    user-select: none;`,

    'productWrapper': css`
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid lightblue;
    `,
    'button': css`
        background-color: Transparent;
        background-repeat:no-repeat;
        border: none;
        cursor:pointer;
        overflow: hidden; 
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
            <div className={styles.productWrapper}>
                <li id='product' className={styles['item']} key={barcode}>{value}x {title}</li>
                {dropDown && <button className={styles.button} onClick={() => setDropDown(!dropDown)}><img src="https://static.thenounproject.com/png/634854-200.png" width="20px"/></button> }
                {!dropDown && <button className={styles.button} onClick={() => setDropDown(!dropDown)}> <img src="https://static.thenounproject.com/png/634840-200.png" width="20px" /> </button> }
            </div>
            <ul>
                {dropDown && Object.entries(drinkData).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                ))}
            </ul>
        </>
    );
};

export default ScannedProduct;
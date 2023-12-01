import axios from 'axios';
import { css } from '@emotion/css'
import { useEffect, useState } from 'react';

async function getBarcodeTitle(barcode: string) {
    const response = await axios.get(`http://localhost:3000/get/drinks/${barcode}`)
    if (response.data.data.length === 0) {
        axios.post('http://localhost:3000/post/drinks/bar', {
            barcode_id: barcode
        })
    } else {
        return response?.data.data[0].name
    }
}

function ScanComponent() {
    const [scannedCodes, setScannedCodes] = useState<{[key: string]: number}>({});
    const [titles, setTitles] = useState<{ [key: string]: string | undefined }>({});
    const scannedCodesAmount = Object.values(scannedCodes).reduce(
        (accumulator, currentValue) => accumulator + currentValue,0,)
    const redirect = `/votes/${scannedCodesAmount}`
    let allValuesAreEmptyStrings = Object.values(titles).every(value => typeof value === 'string' && value === '');
    let barcode = '';
    const handleKeyPress = async (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (!/[a-zA-Z]/.test(barcode)) {
                if (!scannedCodes[barcode]){
                    setScannedCodes({...scannedCodes, [barcode]: 1})
                    const title = await getBarcodeTitle(barcode);
                    setTitles({ ...titles, [barcode]: title });
                } else {
                    const updatedBarcodeValue = scannedCodes[barcode] += 1
                    setScannedCodes({...scannedCodes, [barcode]: updatedBarcodeValue})
                }
            }
            barcode = ''; // Clear the barcode string
        } else {
            barcode = barcode + event.key;
        }
    };

    useEffect(() => {
        const handleKeyPressEvent = (event: KeyboardEvent) => {
            handleKeyPress(event);
        };

        document.addEventListener('keydown', handleKeyPressEvent);

        return () => {
            document.removeEventListener('keydown', handleKeyPressEvent);
        };
    }, [handleKeyPress]);


    return (
        <div className='productInfo'>
            <ul  className={styles['card']}>
            <h1 className={styles['title']}>Products</h1>
                {Object.entries(scannedCodes).map(([barcode, value]) => {
                    const title = titles[barcode]
                    if (typeof title === 'string' && title.length !== undefined && title.length !== 0) {
                        return (
                            <li id='product' className={styles['item']} key={1}>{value}x {title}</li>
                        )
                    }
                })}
            {!allValuesAreEmptyStrings && <a className={styles['button']} href={redirect}>VOTE!</a>}
            {!allValuesAreEmptyStrings && <img className={styles.qrcode} src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png?20200615212723' />}
            </ul>
        </div>
    );
};

const styles = {
    'card': css`
    background: #164863;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    box-shadow: -.15rem .15rem 0 #082535;
    width: 31rem;
    border-radius: .25rem;
    list-style: none;
    padding: .25rem .5rem;
    
    @media (max-width: 1900px) {
        width: 23rem;
    }
    @media (max-width: 1669px) {
        width: 17rem;
    }
    @media (max-width: 1470px) {
        width: 11rem;
    }
    @media (max-width: 1284px) {
        width: 9rem;
    }
    @media (max-width: 860px) {
        width: 100%;
    }
    `,

    'item': css`
    font-size: 1.1rem;
    border-bottom: 1px solid lightblue;
    user-select: none;`,

    'title': css`
    margin: 0;
    user-select: none;`,

    'button': css`
    background: #9BBEC8;
    color: white;
    padding: .35rem 3rem;
    border-radius: .25rem;
    box-shadow: -.1rem .1rem 0 #082535;
    margin-top: .5rem;
    margin-bottom: .25rem;
    text-decoration: none;
    user-select: none;`,
    'temp-button': css`
    background: #9BBEC8;
    color: white;
    padding: .35rem 1.5rem;
    border-radius: .25rem;
    box-shadow: -.1rem .1rem 0 #082535;
    margin-top: .5rem;
    margin-bottom: .25rem;
    text-decoration: none;
    user-select: none;`,

    'qrcode': css`
        margin-top: 5px;
        margin-bottom: 4px;
        width: 100%;
        border-radius: 10px
    `
};

export default ScanComponent;

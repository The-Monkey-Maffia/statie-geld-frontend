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
    const [scannedCodes, setScannedCodes] = useState<string[]>([]);
    const [titles, setTitles] = useState<string[]>([]);
    let barcode: string = '';
    const handleKeyPress = async (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            setScannedCodes([...scannedCodes, barcode]);
            barcode = ''; // Clear the barcode string
        } else {
            barcode = barcode + event.key;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const promises = scannedCodes.map(async (data) => {
                const title = await getBarcodeTitle(data);
                return title;
            });

            const titles = await Promise.all(promises);
            setTitles(titles);
        };

        fetchData();
    }, [scannedCodes]);

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
            <ul className={styles['card']}>
            <h1 className={styles['title']}>Products</h1>
                {titles.map((title, index) => {
                    if (typeof title === 'string' && title.length !== undefined && title.length !== 0) {
                        return (
                            <li className={styles['item']} key={index}>1x {title}</li>
                        )
                    }
                    }
                )}
            </ul>
        </div>
    );
};

const styles = {
    'card': css`
    background: #164863;
    box-shadow: -.15rem .15rem 0 #082535;
    width: 10rem;
    border-radius: .25rem;
    list-style: none;
    padding: .25rem .5rem;`,

    'item': css`
    font-size: 1.1rem;
    border-bottom: 1px solid lightblue;
    user-select: none;`,

    'title': css`
    margin: 0;
    text-shadow: -.1rem .1rem 0 #082535;
    user-select: none;`,
};

export default ScanComponent;

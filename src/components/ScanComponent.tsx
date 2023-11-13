import axios from 'axios';
import { useEffect, useState } from 'react';

async function getBarcodeTitle(barcode: string) {
    const response = await axios.get(`http://localhost:3000/get/drinks/${barcode}`);
    return response.data.data[0].name;
}

function ScanComponent() {
    const [scannedCodes, setScannedCodes] = useState<string[]>([]);
    const [titles, setTitles] = useState<string[]>([]);

    let barcode: string = '';

    const handleKeyPress = async (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log('Barcode scanned:', barcode);
            setScannedCodes([...scannedCodes, barcode]);
            barcode = ''; // Clear the barcode string
            console.log(scannedCodes);
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
        <div>
            <ul>
                {titles.map((title, index) => (
                    <li key={index}>{title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ScanComponent;

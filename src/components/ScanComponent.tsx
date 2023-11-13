import axios from 'axios';
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
        <div>
            <ul>
                {titles.map((title, index) => {
                    if (typeof title === 'string' && title.length !== undefined && title.length !== 0) {
                        return(
                            <li key={index}>{title}</li>
                        )
                    }
                })}
            </ul>
        </div>
    );
}

export default ScanComponent;

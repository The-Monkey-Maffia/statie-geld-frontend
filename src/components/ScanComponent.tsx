import { useEffect } from 'react';

function ScanComponent() {
    const scannedCodes: string[] = [];
    let barcode: string = '';

    const handleKeyPress = (event: KeyboardEvent) => {
        // console.log('Key pressed:', event.key);

        if (event.key === 'Enter') {
            console.log('Barcode scanned:', barcode);
            scannedCodes.push(barcode);
            barcode = ''; // Clear the barcode string
            console.log(scannedCodes);
        } else {
            barcode = barcode + event.key;
        }

        // Perform actions based on the key pressed
    };

    useEffect(() => {
        const handleKeyPressEvent = (event: KeyboardEvent) => {
            handleKeyPress(event);
        };

        // Add event listener when the component mounts
        document.addEventListener('keydown', handleKeyPressEvent);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleKeyPressEvent);
        };
    }, []); // Empty dependency array ensures this effect runs only once (on mount)

    return (
        <div>
            {/* Content of your component */}
        </div>
    );
}

export default ScanComponent;

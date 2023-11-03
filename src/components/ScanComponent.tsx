import { useEffect, useRef } from 'react';

function ScanComponent() {

    const handleKeyPress = (event:any) => {
        console.log('Key pressed:', event.key);
        // Perform actions based on the key pressed
    };

    useEffect(() => {
        const handleKeyPressEvent = (event:any) => {
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

export default ScanComponent
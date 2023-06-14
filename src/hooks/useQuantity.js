import { useState } from "react";

function useQuantity(){
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (event) => {
        setQuantity(event.target.value)
    }
    
    return [quantity, handleQuantity, setQuantity]
}

export default useQuantity
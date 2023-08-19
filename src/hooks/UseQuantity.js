import { useState } from "react";

function useQuantity(){
    const [newQuantity, setNewQuantity] = useState(1)

    // const handleQuantity = (event) => {
    //     setNewQuantity(event.target.value)
    // }
    
    return [newQuantity, setNewQuantity]
}

export default useQuantity
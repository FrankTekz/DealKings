import {useState} from "react";

function useItemAdded(){
    const [itemAdded, setItemAdded] = useState(false)

    return[itemAdded, setItemAdded]
}

export default useItemAdded
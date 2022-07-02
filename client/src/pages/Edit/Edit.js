import React, { useState } from 'react'
import AddHouse from './AddHouse'
import Image from './Image'
import Sidebar from './sidebar'
import './style.css'

const Edit = (props) => {
    const [method, setMethod] = useState("house")
    const generateContent = () => {
        if (method == "house") {
            return <AddHouse />
        }
        else if (method == "add-image") {
            return <Image method={method} />
        }
        else if (method == "delete-image") {
            return <Image method={method} />

        }
    }
    return (
        <div className="editContainer">
            <Sidebar setMethod={setMethod} />
            <div className="content">
                {generateContent()}
            </div>
        </div>
    )
}

export default Edit
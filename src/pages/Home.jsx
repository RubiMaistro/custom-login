import React from "react";

export const Home = (props) => {

    return (
        <div>
            <button onClick={() => props.onPageSwitch('login')}>Vissza</button>
        </div>
    )
}
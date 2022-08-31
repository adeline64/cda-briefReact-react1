import React from "react";

export default function Contact( props) {
    return(
        <div>
            {props.firstName}
            {props.lastName}
            {props.isLoggedIn === true ? ' Connecté ! ' : 'Pas connecté'}
        </div>
    )
};
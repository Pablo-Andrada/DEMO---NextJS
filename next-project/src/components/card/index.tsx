import React from "react";

//types
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({title,description}) => {

    return (
        <div>
            <h1>{title}</h1>
            {description && <p>{ description}</p>}
        </div>
    );
}

export default Card;
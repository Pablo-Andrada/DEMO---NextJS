import React from "react";

//components
import {Card} from "../../components/card"

const Demo: React.FC = () => {
    return (
        <div>
            <h1>Hola mundo de Next!</h1>

            <Card title="CARD 1" description="Descripción de la Card 1"/>
            <Card title="CARD 2" />
            <Card title="CARD 3" description="Descripción de la Card 3"/>
        </div>
    )
}

export default Demo;
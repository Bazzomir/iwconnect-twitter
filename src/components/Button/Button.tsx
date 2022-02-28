import React from 'react'

interface Props {
    backgraundColor: string;
    textColor?: string,
    name?: string;
}

const Button = ({ name, backgraundColor, textColor= 'grey' }: Props) => {
    console.log('props', name);

    const person = {
        name: "Bazzo",
        lastname: "Jovanovski",
        languages: ['Macedonian', 'English']
    }

    const array = ['Blagoj', 'Jovanovski']


    return (
        <div style={{
            backgroundColor: backgraundColor, color: textColor, borderRadius: '30', padding: '10px 30px',
            width: 100, display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            {name}
        </div >
    )
}

export default Button
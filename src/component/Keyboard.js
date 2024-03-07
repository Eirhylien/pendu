import { useState } from 'react';
import Letter from './Letter'


export default function Keyboard() {
    const arrayLetters = Array.from(Array(26), (e, i) => String.fromCharCode(65 + i));
    const [usedLetters, setUsedLetters] = useState([]);
    function handleLetterClick(event) {
        // console.log(event.target);
        setUsedLetters([...usedLetters, event.target.value]);
        console.log(usedLetters);
    }

    let keyboard =
        <div>
            {arrayLetters.map(letter => (
                <Letter
                    value={letter}
                    onLetterClick={handleLetterClick}
                    usedLetters={usedLetters}
                    key={letter} />
            ))}


        </div>
        ;

    return keyboard;

}
export default function Letter({ value, onLetterClick, usedLetters }) {
    let button = <button value={value} className="letter" onClick={onLetterClick}>
        {value}
    </button>
        ;

    let buttonDisabled = <button value={value} className="letter" disabled>
        {value}
    </button>
        ;

    if (usedLetters && usedLetters.filter(e => {return e === value }).length > 0) {
        return buttonDisabled;
    }
    else {
        return button;
    }
}


export default function Mysteryword({ word, usedLetters }) {


    return (
        <div>
            <ul>
                {
                    [...word].map(letter => {
                        if (usedLetters && usedLetters.filter(e => { return e === letter }).length > 0)  {
                           return  <li>{letter}</li>
                        } else {
                            return <li>*</li>
                        }
                        

                    })
                }
            </ul>
        </div>
    )
}
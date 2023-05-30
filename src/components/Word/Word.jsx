import './Word.css'

const Word = ({word, guessedLetters}) => {
    console.log(word)
    const underscoreArray = Array.from(word).map((letter) =>
        guessedLetters.includes(letter) ? letter : "_ "
    )
    return (
        <div className="word">
            {underscoreArray.map((letter, index) => (
                <span id="letter" key={index}>{letter}</span>
            ))}
        </div>
    )
}

export default Word

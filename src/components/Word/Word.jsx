import './Word.css'

const Word = ({word, guessedLetters}) => {
    console.log(word)
    console.log(guessedLetters)
    const underscoreArray = Array.from(word).map((letter) =>
        guessedLetters.includes(letter) ? letter : "_ "
    )

    return (
        <div className="word">
            {underscoreArray.map((letter, index) => (
                <span key={index}>{letter}</span>
            ))}
        </div>
    )
}

export default Word

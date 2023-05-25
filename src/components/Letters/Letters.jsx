const Letters = ({guessedLetters}) => {
    //this is where I'll display the letters that were guessed
    return (
        <div>
            <span>Guessed Letters: </span>
            {guessedLetters.map((letter, index) => (
                <span key={index}>{letter} </span>
            ))}
        </div>
    )
}

export default Letters

import './Letters.css'

const Letters = ({guessedLetters}) => {
    //this is where I'll display the letters that were guessed
    return (
        <div className="letters">
            <span>Your Guesses </span>
                <div className="letterBox">
                    {guessedLetters.map((letter, index) => (
                        <span key={index}>-{letter}</span>
                    ))}
                </div>
        </div>
    )
}

export default Letters

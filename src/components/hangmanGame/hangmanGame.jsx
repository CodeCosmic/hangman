import './hangmanGame.css'
import { WORDS } from '../../words/words'
import { useState } from 'react'

const HangmanGame = () => {
    const [word, setWord] = useState("")
    const [badLetter, setBadLetter] = useState([])
    const [lives, setLives] = useState(6)

    const wordGenerator = () => {
        setWord(WORDS[Math.floor(Math.random()*WORDS.length)])
    }
    console.log(word)

    return (
        <div>
            <button onClick={wordGenerator}>Start</button>
        </div>
    )
}

export default HangmanGame

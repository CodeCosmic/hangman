import './hangmanGame.css'
import { WORDS } from '../../wordsArray/wordsArray.js'
import { useState } from 'react'
import Lives from '../lives/Lives'
import Words from '../Word/Word'

const HangmanGame = () => {
    const [word, setWord] = useState("")
    const [badLetter, setBadLetter] = useState([])
    const [lives, setLives] = useState(6)

    const wordGenerator = () => {
        setWord(WORDS[Math.floor(Math.random()*WORDS.length)])
    }

    useState(wordGenerator)

    return (
        <div>
            <Words word={word}/>
            <Lives/>
        </div>
    )
}

export default HangmanGame

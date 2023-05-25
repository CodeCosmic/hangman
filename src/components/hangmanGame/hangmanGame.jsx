import './hangmanGame.css'
import { WORDS } from '../../wordsArray/wordsArray.js'
import { useState } from 'react'
import Lives from '../lives/Lives'
import Words from '../Word/Word'
import Letters from '../Letters/Letters'

const HangmanGame = () => {
    const [word, setWord] = useState("")
    const [guessedLetters, setGuessedLetters] = useState([])
    const [lives, setLives] = useState(6)

    const wordGenerator = () => {
        setWord(WORDS[Math.floor(Math.random()*WORDS.length)])
    }

    const handleReset = () => {
        setWord(wordGenerator)
        setGuessedLetters([])
        setLives(6)
    }

    const handleGuessSubmit = (e) => {
        e.preventDefault()
        const newLetter = document.querySelector("input").value
        console.log(newLetter.length)
        if(newLetter === '' || newLetter.length > 1){
            console.log("please enter a single letter")
        }
        else if (guessedLetters.includes(newLetter)){
            console.log('letter has already been used')
        }
        else {
        setGuessedLetters([...guessedLetters, newLetter])
            if(!word.includes(newLetter)){
                setLives(lives - 1)
            }
        console.log(document.querySelector("input").value)
        document.querySelector("input").value = ''
        }
    }

    useState(wordGenerator)

    return (
        <div className='hangmanGame'>
            <Lives lives={lives}/>
            <Words word={word} guessedLetters={guessedLetters}/>
            <Letters guessedLetters={guessedLetters}/>
        {lives > 0 ?
            <form onSubmit={handleGuessSubmit}>
                <input id='guessField' type="text"/>
                <button type='submit'>Submit Guess</button>
            </form>
            :
            <div>
                <span>You lose</span>
                <button onClick={handleReset}>New Game</button>
            </div>
        }
        </div>
    )
}

export default HangmanGame

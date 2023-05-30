import './hangmanGame.css'
import { WORDS } from '../../wordsArray/wordsArray.js'
import { useEffect, useState } from 'react'
import Lives from '../lives/Lives'
import Words from '../Word/Word'
import Letters from '../Letters/Letters'

const HangmanGame = () => {
    const [word, setWord] = useState("")
    const [guessedLetters, setGuessedLetters] = useState([])
    const [lives, setLives] = useState(6)
    const [notification, setNotification] = useState('')

    useEffect(() => {
        if(notification) {
            const timer = setTimeout(() => {
                setNotification('');
            }, 2000);
            return() => clearTimeout(timer);
        }
    }, [notification])

    const wordGenerator = () => {
        setWord(WORDS[Math.floor(Math.random()*WORDS.length)])
    }

    const handleReset = () => {
        wordGenerator()
        setGuessedLetters([])
        setLives(6)
    }

    const handleGuessSubmit = (e) => {
        e.preventDefault()
        const newLetter = document.querySelector("input").value.toLowerCase()
        console.log(newLetter.length)
        if(newLetter === '' || newLetter.length > 1){
            setNotification("Please enter a single letter")
        } else if (guessedLetters.includes(newLetter)){
            setNotification('Letter has already been used')
        } else {
        setGuessedLetters([...guessedLetters, newLetter])
            if(!word.includes(newLetter)){
                setLives(lives - 1)
            }
        document.querySelector("input").value = ''
        }
    }

    useState(wordGenerator)
    const isWin =  word.split('').every((letter) => guessedLetters.includes(letter))

    return (
        <div className='hangmanGame'>
            <Lives lives={lives}/>
            <Words word={word} guessedLetters={guessedLetters}/>
            <Letters guessedLetters={guessedLetters}/>
            {isWin === true ?
                <div>
                <span className='winSpan'>You win</span>
                    <div>
                        <button className='btn' onClick={handleReset}>New Game</button>
                    </div>
                </div> :
                lives > 0 ?
                    <form className='gameForm' onSubmit={handleGuessSubmit}>
                        <input placeholder='Guess Here'className='inputField' id='guessField' type="text"/>
                        <div className='btnContainer'>
                            <button className='btn' type='submit'>Guess</button>
                        </div>
                    </form> :
            <div>
                <span className='loseSpan'>You lose</span>
                <div className='btn'>
                    <button onClick={handleReset}>New Game</button>
                </div>
            </div>
            }
            {notification && <div className='notification'>{notification}</div>}
        </div>
    )
}

export default HangmanGame

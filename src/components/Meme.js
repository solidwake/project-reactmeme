import memesData from '../memesData'

export default function Meme() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    console.log(randomNumber)

    return (
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="Top text" />
                <input type="text" className="form-input" placeholder="Bottom text" />
                <button className="form-button">Get a new meme image</button>
            </div>
        </main>
    )
}
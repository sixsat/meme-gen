export default function Meme() {
    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form-input" autocomplete="off" />
                <input type="text" placeholder="Bottom text" className="form-input" autocomplete="off" />
                <button className="form-btn">Get a new meme image 🖼️</button>
            </div>
            <img src="" alt="" className="meme-image" />
        </main>
    );
}

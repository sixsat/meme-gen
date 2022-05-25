import troll_face from '../images/trollface.png';

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={troll_face} alt="Troll face" className="header-image"></img>
                <h3>Meme Generator</h3>
            </div>
            <p className="header-text">React Course - Project 3</p>
        </header>
    );
}

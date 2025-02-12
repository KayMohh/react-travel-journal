import globeLogo from '../images/globe.png'


export default function Header() {
    return (
        <header>
            <img src={globeLogo} alt="globelogo" />
            <h1>My Travel Journal</h1>
        </header>
    )
}
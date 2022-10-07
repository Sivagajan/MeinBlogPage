import { Link, useParams } from "react-router-dom"

const Header = () => {

    

    const params = useParams()
    console.log(params)

    return (
        <header className="header">

            <h1 className="h1header">Willkommen auf der Seite mit allen arten von Siva</h1>

        </header>
    )
}

export default Header
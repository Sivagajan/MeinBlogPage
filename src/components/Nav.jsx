import { Link, useParams } from "react-router-dom" 

const Nav = () => {
    const params = useParams()

    return(
        <nav>
            {params.id >= 1 ? <Link to='/'><h4>BACK</h4></Link>:null}

            <Link to='/admin'>Schreib einen Beitrag</Link>

        </nav>

    )
}

export default Nav
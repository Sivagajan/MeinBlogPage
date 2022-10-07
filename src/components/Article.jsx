import { Link } from "react-router-dom"

const Article = ({article}) => {

    return(
        <main>
            <section>
            <Link key={article} to={`/detail/${article.id}`}><h3>{article.title}</h3></Link>
                <img src={`http://localhost:9090/${article.picture}`} alt="" />
            </section>
        </main>
    )

}

export default Article
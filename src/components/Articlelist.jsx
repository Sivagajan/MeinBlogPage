import { useEffect, useState } from "react"
import Article from './Article'

const Articlelist = () => {

    const [article, setArticle] = useState([])

    useEffect(()  => {
        fetch('http://localhost:9090/api/blog')
            .then(res => res.json())
            .then(data => {
                console.log(data.length)
                setArticle(data)})
    },[])

    return(
        <div>

            {article.map((article, key) =>
                
                <Article key={key} article={article} />
                
            )}
        </div>
    )

}

export default Articlelist
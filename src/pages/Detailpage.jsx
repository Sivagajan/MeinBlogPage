import { useState,useEffect } from "react"
import { useParams } from "react-router-dom" 
import Footer from "../components/Footer"
import Nav from "../components/Nav"

const Detailpage = (props) => {
    const [article, setArticle] = useState({})

    const params = useParams()

    useEffect(() => {
        fetch('http://localhost:9090/api/blog')
        .then(res=> res.json())
        .then(data => setArticle(data.find(item => item.id == params.id)))
    },[]) 

    return (

        <>
            <Nav/>

            <main className="detailPage" >
                <img src={`http://localhost:9090/${article.picture}`} alt="" />
                <section>
                    <h2>{article.title}</h2>
                </section>
                <section>
                    <p>{article.articletext}</p>
                </section>
            </main>

            < Footer/>
        </>
    )
}

export default Detailpage
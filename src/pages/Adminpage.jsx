import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Nav from "../components/Nav"

const Adminpage = () => {
    
    const [articlePic,setArticlePic] = useState(null)
    const [articleTitle, setArticleTitle ] = useState('')
    const [articleText, setArticleText] = useState('')
    const [objectLength, setObjectLength] = useState(null)

    const nav = useNavigate()

    useEffect(()  => {
        fetch('http://localhost:9090/api/blog')
            .then(res => res.json())
            .then(data => {
                console.log(data.length)
                setObjectLength((data.length)+1)})
    },[])

    const sendArticle = () => {

        console.log(objectLength)
        const form = new FormData()

        form.append('id', objectLength)
        form.append('title', articleTitle)
        form.append('articletext', articleText)
        form.append('picture', articlePic)

        fetch('http://localhost:9090/api/blog', {
            method:'POST',
            body:form
        })
        .then(res => res.status === 200 ? nav('/'):null)
        console.log('wir sind im fetch')

    } 
    return(
        <main className="adminPage">
            < Nav/>
            <section>
                <input type="text" name="title" placeholder="Titel" onChange={(e) => setArticleTitle(e.target.value)}/>
            </section>
            <section>
                <input type="file" name="picture" placeholder="Bildlink" onChange={(e) => setArticlePic(e.target.files[0])}/>
            </section>
            <section>
                <textarea name="articletext" id="" cols="30" rows="10" placeholder="Artikel" onChange={(e)=> setArticleText(e.target.value)}></textarea>
            </section>
            <section>
                <button onClick={sendArticle}>Publish</button>
            </section>

        </main>
    )
}

export default Adminpage
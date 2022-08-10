import axios from 'axios'

interface Post {
    userId: string,
    title: string,
    body: string
}


const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url).then(res => {
    const data = res.data as Post
    console.log(data)
})
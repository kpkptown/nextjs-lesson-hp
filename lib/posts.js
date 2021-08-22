import fetch from "node-fetch";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData(){
    const res = await fetch(new URL(apiUrl));
    const posts = await res.json()
    return posts;
}

export async function getAllPostsIds() {
    const res = await fetch(new URL(apiUrl));
    const posts = await res.json();

    return posts.map((posts) => {
        return{
            params: {
                id: String(posts.id),
            },
        };
    });
}

export async function getPostData(id){
    const res = await fetch(new URL(`${apiUrl}/${id}/`));
    const post = await res.json();

    return post;
}
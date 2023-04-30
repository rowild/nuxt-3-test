import posts from "../../data/posts.json"

// export default (req, res) => {
//     const { pathname } = new URL(req.url, 'http://${req.headers.host}');
//     const id = pathname.split('/')[1];

//     if(!id) {
//        return { posts }
//     }
//     else {
//         return posts.find(post => post.id === parseInt(id))
//     }
// }

export default defineEventHandler(event => {
    console.log('event =', event);
//     const { pathname } = new URL(req.url, 'http://${req.headers.host}');
//     const id = pathname.split('/')[1];

//     if(!id) {
//        return { posts }
//     }
//     else {
//         return posts.find(post => post.id === parseInt(id))
//     }

})
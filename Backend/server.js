const express=require('express')
const app= express()
const port=4000

// Github Data Start
const githubData={
    "login": "MuhammadAdnan11",
    "id": 115980821,
    "node_id": "U_kgDOBum6FQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/115980821?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/MuhammadAdnan11",
    "html_url": "https://github.com/MuhammadAdnan11",
    "followers_url": "https://api.github.com/users/MuhammadAdnan11/followers",
    "following_url": "https://api.github.com/users/MuhammadAdnan11/following{/other_user}",
    "gists_url": "https://api.github.com/users/MuhammadAdnan11/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/MuhammadAdnan11/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/MuhammadAdnan11/subscriptions",
    "organizations_url": "https://api.github.com/users/MuhammadAdnan11/orgs",
    "repos_url": "https://api.github.com/users/MuhammadAdnan11/repos",
    "events_url": "https://api.github.com/users/MuhammadAdnan11/events{/privacy}",
    "received_events_url": "https://api.github.com/users/MuhammadAdnan11/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Muhammad Adnan",
    "company": null,
    "blog": "",
    "location": "Peshawar",
    "email": null,
    "hireable": null,
    "bio": "“Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.” – Eagleson’s Law",
    "twitter_username": "adnan191023",
    "public_repos": 37,
    "public_gists": 0,
    "followers": 2,
    "following": 1,
    "created_at": "2022-10-17T08:14:47Z",
    "updated_at": "2024-05-31T16:11:42Z"
  }
// Github data ends 
require('dotenv').config()
app.get('/',(req,res)=>{
    res.send('hello friends')
})
app.get('/twitter',(req,res)=>{
    console.log("Twitter is here")

})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening at port: ${port}`)
})
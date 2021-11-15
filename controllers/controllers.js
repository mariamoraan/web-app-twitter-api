import dotenv from 'dotenv';
import fetch from 'node-fetch';


const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from the server!'
    });
};



const twitterInfo = (req, res, next) => {
    const url_profile = 'https://api.twitter.com/2/users/1575162685';
    const url_followers = 'https://api.twitter.com/1.1/followers/ids.json?cursor=-1&count=5000&user_id=1575162685';
    const url_data = 'https://api.twitter.com/1.1/users/show.json?user_id=1575162685';

    const HEADER = {
        method: "GET",
        withCredentials: true,
        
        headers: {
            'Access-Control-Allow-Headers':'*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'GET',
            'Authorization': 'Bearer ' + process.env.TWITTER_BEARER
        },
    };
    const fetcher = async(path) => {
        let response = await fetch(path, HEADER);
        return await response.json();
    }
    async function getData(){
        let[account] = await Promise.all([fetcher(url_data)]);
        let name = account.name;
        let username = account.screen_name;
        let followers_number = account.followers_count;
        let image = account.profile_image_url.replace('_normal', '');
        res.json({"name":name, "username":username, "followers_number":followers_number, "image":image});
    }
    getData();
}
export default twitterInfo;
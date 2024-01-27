import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList() {
    //return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList() {
    try {
        const response = await axios.get(`${config.baseUrl}ask/1.json`);
        return response;
    } catch(error) {
        console.log(error);
    }
}

async function fetchJobsList() {
    const response = await axios.get(`${config.baseUrl}jobs/1.json`);
    return response;
}

async function fetchList(pageName) {
    try {
        const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
        return response;
    } catch(error) {
        console.log(error);
    }
}

async function fetchUserInfo(username) {
    const response = await axios.get(`${config.baseUrl}user/${username}.json`);
    return response;
}

async function fetchCommentItem(id) {
    const response = await axios.get(`${config.baseUrl}item/${id}.json`);
    return response;
}

export {
    fetchNewsList, 
    fetchAskList, 
    fetchJobsList,
    fetchList, 
    fetchUserInfo,
    fetchCommentItem,
}
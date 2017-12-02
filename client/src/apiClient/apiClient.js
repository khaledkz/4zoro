import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URI || 'http://localhost:3001';

const apiClient = {
    getCategories: () => {
        return axios.get(`${apiUrl}/api/categories`);
    },
    getSingleCategorey: (categoryId) => {
        return axios.get(`${apiUrl}/api/categories/${categoryId}`);
    },
    getSingleArticle:(articleId) =>{
        return axios.get(`${apiUrl}/api/articles/${articleId}`);
    }, getUsers:()=>{
        return axios.get(`${apiUrl}/api/users`);
        
    },
    getUserName:(userId)=>{
        return axios.get(`${apiUrl}/api/users/${userId}`);
        
    }
}

export default apiClient;
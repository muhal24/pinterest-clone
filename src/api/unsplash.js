import axios from 'axios';

export default  axios.create ({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID uBxI3X4LAwfFKFGkFWYeR1OseKunJOJcJ4i-cyH5VkY",
    }
})
import axios from 'axios';
// api calls
export default {
    renderBoard: function(id){
        return axios.get(`https://qa.optimumhq.com/api/searchSampleData?surveyId=${id}`)
    },
}
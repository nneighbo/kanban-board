import axios from 'axios';
// api calls
export default {
    renderBoard: function(id){
        return axios.get(`https://intern-dev.opthq.net/api/searchSampleData?surveyId=${id}`)
    },
}

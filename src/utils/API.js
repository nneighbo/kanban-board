import axios from 'axios';
// api calls
export default {
    renderBoard: function(id){
        return axios.get(`https://optihqintern:YtXa8b2m5NFNpfNC@intern-dev.opthq.net/api/searchSampleData?surveyId=${id}`)
    },
}
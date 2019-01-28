import fetchJsonp from 'fetch-jsonp'

const API_ENDPOINT = 'https://api.deezer.com'

export default{
    search: function(q){
        return fetchJsonp(`${API_ENDPOINT}/search?q=${q}&output=jsonp`)
        .then(res => res.json())
        .then(response => response.data)
        .then(response =>{
            if(response.error == 1){
                return Promise.reject(response)
            }else{
                return Promise.resolve(response)
            }
        })        
    }
}





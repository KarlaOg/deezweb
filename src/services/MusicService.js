import fetchJsonp from 'fetch-jsonp'

const API_ENDPOINT = 'https://api.deezer.com/search?q=eminem&output=jsonp'

export default{
    search: function(r){
        return fetchJsonp.get(`${API_ENDPOINT}/?q=${r}`)
        .then(res => res.json())
        .then(response =>{
            if(response.error == 1){
                return Promise.reject(response)
            }else{
                return Promise.resolve(response)
            }
        })        
    }
}





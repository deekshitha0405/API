async function MakeGetRequest() {
    const response=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await response.json()
    return data;
}
async function MakePostRequest(value:String){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title:value})
    };
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
}


export {MakeGetRequest,MakePostRequest}
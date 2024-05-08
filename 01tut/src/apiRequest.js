const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        //if 404 or another error
        if (!response.ok) throw Error('Please reload the app')
    } catch (err){

    } finally {

    }
}

export default apiRequest;
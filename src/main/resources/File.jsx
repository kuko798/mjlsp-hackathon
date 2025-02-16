function useEffect(param, param2) {
    
}

useEffect(() => {


    //get all (updated) categories to display
    const getAllUrl = "http://localhost:8080/category/getAll"
    const getAllHeader = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    axios.get(getAllUrl, getAllHeader)
        .then((res) => {
            setCategoriesData(res.data)
            console.log("Categories Response: " + JSON.stringify(res, undefined, 4))
        })
        .catch((error) => console.log("Get Categories Error: \n" + JSON.stringify(error, undefined, 4)))


}, [triggerRerender])
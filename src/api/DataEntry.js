import api from './MainApi'

// add data through api
const DataEntry = async (formValues) => {
    
    const body = {...formValues}
    try {
        await api.post(`/data`, body)
    } catch (error) {
        console.error('Addition Failed:', error)
    }
}

export default DataEntry

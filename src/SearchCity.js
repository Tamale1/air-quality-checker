
import React, {useState} from 'react'



const Searchbar=({getAircondition})=>{
    const [inputValue, setInputValue] = useState('Kampala')
   const handleInputChange =(event)=>{
setInputValue (event.target.value)
}

const handleSearch =(event)=>{
event.preventDefault()
const formattedCity = inputValue.replace(/ /g, '-')//take the spaces and replace them with <hythens /
getAircondition(formattedCity)
}
return(
<form onSubmit={handleSearch} className='mb-4'>
<input type="text" placeholder='Kampala....!' onChange ={handleInputChange} className='form-control' />
<button type='submit' className='btn btn-primary mt-3'>Search</button>
</form>
)
}

export default Searchbar;



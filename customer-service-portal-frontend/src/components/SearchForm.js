import React from 'react'

const SearchForm = ({ handleOnChange, str }) => {
    return (
        <div>
            <form>
                <label>
                    Search:
                </label>
                <input type="text" name="searchStr" onChange={handleOnChange} value={str} placeholder="Search Ticket"/>
            </form>
        </div>
    )
}

export default SearchForm

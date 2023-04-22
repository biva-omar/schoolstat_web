import React from 'react'
import Search from 'src/views/common/Search';

const SearchStudent = () => {

  const baseUrl ='http://localhost:8081';
  const url = baseUrl + '/students/'
  const title = 'Rechercher un etablissement'

  return (
    <>
      <Search url={url} title={title} />
    </>
  )
}

export default SearchStudent

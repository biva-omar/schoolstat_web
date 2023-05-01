import React from 'react'
import Search from 'src/views/common/SearchStudent';

const SearchStudent = () => {

  const baseUrl ='http://localhost:8081';
  const url = baseUrl + '/students/'
  const title = 'Rechercher un élève'

  return (
    <>
      <SearchStudent url={url} title={title} />
    </>
  )
}

export default SearchStudent

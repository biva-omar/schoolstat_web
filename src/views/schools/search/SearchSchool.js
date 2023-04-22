import React from 'react'
import Search from 'src/views/common/Search';

const SearchSchool = () => {

  const baseUrl ='http://localhost:8081';
  const url = baseUrl + '/schools/'
  const title = 'Rechercher un etablissement'

  return (
    <>
      <Search url={url} title={title} />
    </>
  )
}

export default SearchSchool

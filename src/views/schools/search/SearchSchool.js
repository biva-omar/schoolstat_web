import React from 'react'
import { baseUrl } from 'src/AppConfig';
import Search from 'src/views/common/Search';

const SearchSchool = () => {

  
  const url = baseUrl + '/schools/'
  const title = 'Rechercher un etablissement'

  return (
    <>
      <Search url={url} title={title} />
    </>
  )
}

export default SearchSchool

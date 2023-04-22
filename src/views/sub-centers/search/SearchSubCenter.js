import React from 'react'
import Search from 'src/views/common/Search';

const SearchSubCenter = () => {

  const baseUrl ='http://localhost:8081';
  const url = baseUrl + '/exam-sub-centers/'
  const title = 'Rechercher un sous centre'

  return (
    <>
      <Search url={url} title={title} />
    </>
  )
}

export default SearchSubCenter

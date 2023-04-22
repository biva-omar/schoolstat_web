import React from 'react'
import Search from 'src/views/common/Search';

const SearchClassroom = () => {

  const baseUrl ='http://localhost:8081';
  const url = baseUrl + '/exam-classrooms/'
  const title = 'Rechercher une salle de classe'

  return (
    <>
      <Search url={url} title={title} />
    </>
  )
}

export default SearchClassroom

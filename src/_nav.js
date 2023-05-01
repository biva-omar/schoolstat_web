import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBuilding,
  cilCalculator,
  cilCursor,
  cilHome,
  cilLibraryBuilding,
  cilNotes,
  cilPeople,
  cilPuzzle,
  cilSchool,
  cilSitemap,
  cilSpeedometer,
  cilStar,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Navagation',
  },
  {
    component: CNavGroup,
    name: "Centres d'Examen",
    to: '/base',
    icon: <CIcon icon={cilLibraryBuilding} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste des centres',
        to: '/centers/',
      },
      {
        component: CNavItem,
        name: 'Ajouter un centre',
        to: '/centers/add',
      },
      {
        component: CNavItem,
        name: 'Rechercher un Centre',
        to: '/centers/search',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Sous Centres',
    to: '/buttons',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste de sous-centres',
        to: '/subcenters/list',
      },
      {
        component: CNavItem,
        name: 'Ajouter un sous-centre',
        to: '/subcenters/add',
      },
      {
        component: CNavItem,
        name: 'Rechercher un sous centre',
        to: '/subcenters/search',
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Salle d'Examen",
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste des salles',
        to: '/classrooms/list',
      },
      {
        component: CNavItem,
        name: 'Ajouter une salle',
        to: '/classrooms/add',
      },
      {
        component: CNavItem,
        name: 'Rechercher une salle',
        to: '/classrooms/search',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Etablissements',
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste des Ecoles',
        to: '/schools/list',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Ajouter une ecole',
        to: '/schools/add',
      },
      {
        component: CNavItem,
        name: 'Rechercher une ecole',
        to: '/schools/search',
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Matieres",
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste des matieres',
        to: '/matieres/',
      },
      {
        component: CNavItem,
        name: 'Ajouter une matiere',
        to: '/matieres/add',
      },
      {
        component: CNavItem,
        name: 'Rechercher une matiere',
        to: '/matieres/search',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Eleves',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste des eleves',
        to: '/students/list',
      },
      {
        component: CNavItem,
        name: 'Ajouter une eleve',
        to: '/students/add',
      },
      {
        component: CNavItem,
        name: 'Rechercher un eleve',
        to: '/students/search',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Etats',
    to: '/state1',
    icon: <CIcon icon={cilSitemap} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Etat 1',
        to: '/state1',
      },
      {
        component: CNavItem,
        name: 'Etat 2',
        to: '/state2',
      },
      {
        component: CNavItem,
        name: 'Etat 3',
        to: '/state3',
      },
      {
        component: CNavItem,
        name: 'Etat 4',
        to: '/state4',
      },
    ],
  },
]

export default _nav

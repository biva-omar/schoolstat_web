import React from 'react'
import CenterList from './views/centers/list/CenterList'
import AddCenter from './views/centers/add/AddCenter'
import SubCenterList from './views/sub-centers/list/SubCenterList'
import SchoolList from './views/schools/list/SchoolList'
import StudentList from './views/students/list/StudentList'
import AddSubCenter from './views/sub-centers/add/AddSubCenter'
import SearchSubCenter from './views/sub-centers/search/SearchSubCenter'
import SearchClassroom from './views/classrooms/search/SearchClassroom'
import ClassroomList from './views/classrooms/list/ClassroomList'
import AddClassroom from './views/classrooms/add/AddClassroom'
import SearchSchool from './views/schools/search/SearchSchool'
import AddSchool from './views/schools/add/AddSchool'
import SearchStudent from './views/students/search/SearchStudent'
import AddStudent from './views/students/add/AddStudent'
import State1List from './views/states/state1/State1List'
import State2List from './views/states/state2/State2List'
import State3List from './views/states/state3/State3List'
import State4List from './views/states/state4/State4List'
import MatiereList from './views/matieres/list/MatiereList'
import AddMatiere from './views/matieres/add/AddMatiere'
import SearchMatiere from './views/matieres/search/SearchMatiere'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))
const SearchCenter = React.lazy(() => import('./views/centers/search/SearchCenter'))
// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))
//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/centers', name: 'Centres', element: Cards, exact: true },
  { path: '/centers/', name: 'Liste', element: CenterList },
  { path: '/centers/list', name: 'Liste', element: CenterList },
  { path: '/centers/add', name: 'Ajouter', element: AddCenter },
  { path: '/centers/search', name: 'Rechercher', element: SearchCenter },
  { path: '/subcenters', name: 'Sous Centres', element: SubCenterList, exact: true },
  { path: '/subcenters/list', name: 'Liste', element: SubCenterList },
  { path: '/subcenters/add', name: 'Ajouter', element: AddSubCenter },
  { path: '/subcenters/search', name: 'Rechercher', element: SearchSubCenter },
  { path: '/classrooms', name: 'Salle de classe', element: ClassroomList, exact: true },
  { path: '/classrooms/list', name: 'Liste', element: ClassroomList },
  { path: '/classrooms/add', name: 'Ajouter', element: AddClassroom },
  { path: '/classrooms/search', name: 'Rechercher', element: SearchClassroom },
  { path: '/schools', name: 'Ecoles', element: SchoolList, exact: true },
  { path: '/schools/list', name: 'Liste', element: SchoolList },
  { path: '/schools/add', name: 'Ajouter', element: AddSchool },
  { path: '/schools/search', name: 'Rechercher', element: SearchSchool },
  { path: '/students', name: 'Eleves', element: StudentList, exact: true },
  { path: '/students/list', name: 'Liste', element: StudentList },
  { path: '/students/add', name: 'Ajouter', element: AddStudent },
  { path: '/students/search', name: 'Rechercher', element: SearchStudent },
  { path: '/state1', name: 'Etat1', element: State1List },
  { path: '/state2', name: 'Etat2', element: State2List, exact: true },
  { path: '/state3', name: 'Etat3', element: State3List },
  { path: '/state4', name: 'Etat4', element: State4List },
  { path: '/matieres', name: 'Matieres', element: MatiereList, exact: true },
  { path: '/matieres/list', name: 'Liste', element: MatiereList },
  { path: '/matieres/add', name: 'Ajouter', element: AddMatiere },
  { path: '/matieres/search', name: 'Rechercher', element: SearchMatiere },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes

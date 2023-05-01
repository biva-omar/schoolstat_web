import React from 'react'
import { hasAuthenticated } from 'src/components/services/AuthApi'

export default React.createContext({
    isAuthenticated: false
})
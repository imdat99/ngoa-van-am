import { detectMob } from 'lib/utils'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ListenDevice = () => {
    const [isMobile, setIsMobile] = React.useState(true)
    const na = useNavigate()
    React.useEffect(() => {
        setIsMobile(detectMob)
        if (!isMobile) {
            na('/mobile', { replace: true })
        }
    }, [isMobile, na])
    return null
}

export default ListenDevice

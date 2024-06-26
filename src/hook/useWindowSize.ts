import React from 'react'

const useWindowSize = () => {
  
    const [windowSize, setWindowSize] = React.useState<{
        width: number
        height: number
    }>({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return windowSize
}

export default useWindowSize

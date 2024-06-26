import React from 'react'

interface LoadingScreenProps {
    loading: boolean
}
const LoadingScreen: React.FC<LoadingScreenProps> = ({ loading }) => {
    const loadRef = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        if (loading) {
            loadRef.current?.classList.add('!opacity-100')
        } else {
            loadRef.current?.classList.remove('!opacity-100')
        }
    }, [loading])
    return (
        <div
            className=" transition-all duration-300 ease-linear w-full fixed top-0 left-0 h-lvh bg-slate-100 flex opacity-0"
            ref={loadRef}
        >
            <svg
                className="animate-spin m-auto h-10 w-10 text-slate-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
        </div>
    )
}

export default LoadingScreen

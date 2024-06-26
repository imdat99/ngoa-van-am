import { cn } from 'lib/utils'
import React from 'react'
import { useHeader } from 'views/components/Header/Context'

interface TeaComponentProps
    extends React.PropsWithChildren,
        React.HTMLAttributes<HTMLDivElement> {
    title: string
    bgUrl: string
}
const TeaComponent: React.FC<TeaComponentProps> = ({
    children,
    title,
    bgUrl,
    style,
    className,
}) => {
    const [, setTitle] = useHeader()
    const bgRef = React.useRef<HTMLImageElement>(null)

    React.useEffect(() => {
        if (bgRef.current && bgUrl) {
            const img = new Image()
            img.onload = () => {
                bgRef.current!.style.backgroundImage = `url('${bgUrl}')`
            }
            img.src = bgUrl
        }
    }, [bgUrl])
    React.useEffect(() => {
        setTitle(title)
        return () => {
            setTitle('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div
                className={cn(
                    'fixed top-0 left-0 min-h-lvh w-full bg-no-repeat bg-cover z-0',
                    className
                )}
            >
                <div
                    className="min-h-lvh w-full bg-no-repeat bg-cover max-w-[430px] mx-auto"
                    ref={bgRef}
                    style={{
                        ...style,
                    }}
                ></div>
            </div>
            <div className="w-full bg-no-repeat bg-cover relative">
                {children}
            </div>
        </>
    )
}

export default TeaComponent

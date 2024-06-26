import { cn } from 'lib/utils';
import React, { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBtn from 'views/components/ArrowBtn'
interface WelcomeProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
    background: string;
    nextPath: string;
    btnType: 'next' | 'prev' | 'both';
}
const Welcome: React.FC<WelcomeProps> = ({background, children, nextPath, btnType, className}) => {
    const na = useNavigate()
    const bgRef = React.useRef<HTMLImageElement>(null)
    React.useEffect(() => {
        if (bgRef.current) {
            const img = new Image()
            img.onload = () => {
                bgRef.current!.style.backgroundImage = `url('${background}')`}
            img.src = background
        }
    }, [background])
    return (
        <>
            <div className="fixed top-0 left-0 min-h-lvh w-full z-0 flex transition-all duration-300 ease-linear">
                <div
                    ref={bgRef}
                    style={{
                        backgroundImage: `url('')`
                    }}
                    className="min-h-lvh transition-all duration-300 ease-linear w-full max-w-[430px] mx-auto bg-cover bg-no-repeat relative"
                >
                </div>
            </div>
            <div
                className={cn(
                    'relative flex flex-col-reverse min-h-dvh',
                    className
                )}
            >
                <ArrowBtn
                    type={btnType}
                    onNext={() => {
                        na(nextPath)
                    }}
                />
                {children}
            </div>
        </>
    )
}

export default Welcome

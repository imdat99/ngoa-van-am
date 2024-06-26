import { cn } from 'lib/utils';
import { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBtn from 'views/components/ArrowBtn'
interface WelcomeProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
    background: string;
    nextPath: string;
    btnType: 'next' | 'prev' | 'both';
}
const Welcome: React.FC<WelcomeProps> = ({background, children, nextPath, btnType, className}) => {
    const na = useNavigate()
    return (
        <>
            <div
                className="fixed top-0 left-0 min-h-dvh w-full z-0 flex"
            >
                <div className='min-h-dvh w-full bg-no-repeat bg-cover max-w-[430px] mx-auto' style={{
                    backgroundImage: `url(${background})`,
                }}></div>
            </div>
            <div className={cn("relative flex flex-col-reverse min-h-dvh", className)}>
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

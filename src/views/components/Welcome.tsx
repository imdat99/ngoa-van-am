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
                className="fixed top-0 left-0 min-h-svh w-full bg-no-repeat bg-cover z-0"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            ></div>
            <div className={cn("relative flex flex-col-reverse min-h-svh", className)}>
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

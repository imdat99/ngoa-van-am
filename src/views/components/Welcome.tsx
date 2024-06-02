import { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBtn from 'views/components/ArrowBtn'
interface WelcomeProps extends PropsWithChildren {
    background: string;
    nextPath: string;
    btnType: 'next' | 'prev' | 'both';
}
const Welcome: React.FC<WelcomeProps> = ({background, children, nextPath, btnType}) => {
    const na = useNavigate()
    return (
        <div className="h-svh bg-re bg-no-repeat bg-cover" style={{
            backgroundImage: `url(${background})`
        }}>
            {children}
            <ArrowBtn type={btnType} onNext={() => { na(nextPath) }}/>
        </div>
    )
}

export default Welcome
//images/bg-welcome.png

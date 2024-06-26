import Menu from './Menu'
import { Button } from '../ui/button'
import { useLocation, useNavigate } from 'react-router-dom'
import { useHeader } from './Context'

const Header: React.FC = () => {
    const na = useNavigate();
    const {pathname} = useLocation();
    const [title] = useHeader()
    const hideGoBack = ["/tea", '/tea/'].includes(pathname)
    return (
        <div className="flex bg-white/80 justify-between max-w-[430px] h-14 w-full fixed top-0 z-10 backdrop-blur-sm">
            {hideGoBack ? (
                <div className="block w-14" />
            ) : (
                <Button
                    onClick={() => na(-1)}
                    data-hidden={hideGoBack}
                    className="my-auto bg-transparent rounded-full data-[hidden=true]:hidden transition-colors duration-200 ease-in-out hover:bg-transparent hover:text-orange-200"
                >
                    <svg
                        className="hover:bg-amber-800/70 hover:text-orange-200 rounded-full"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.5 14C0.5 6.54416 6.54416 0.5 14 0.5C21.4558 0.5 27.5 6.54416 27.5 14C27.5 21.4558 21.4558 27.5 14 27.5C6.54416 27.5 0.5 21.4558 0.5 14Z"
                            stroke="#C59D5F"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.6868 9.64645C13.8821 9.84171 13.8821 10.1583 13.6868 10.3536L10.5404 13.5H18.6666C18.9427 13.5 19.1666 13.7239 19.1666 14C19.1666 14.2761 18.9427 14.5 18.6666 14.5H10.5404L13.6868 17.6464C13.8821 17.8417 13.8821 18.1583 13.6868 18.3536C13.4915 18.5488 13.175 18.5488 12.9797 18.3536L8.9797 14.3536C8.78444 14.1583 8.78444 13.8417 8.9797 13.6464L12.9797 9.64645C13.175 9.45118 13.4915 9.45118 13.6868 9.64645Z"
                            fill="#C59D5F"
                        />
                    </svg>
                </Button>
            )}
            {title && (
                <h1 className="m-auto text-xl lora font-semibold text-[#C59D5F]">
                    {title}
                </h1>
            )}
            <Menu />
        </div>
    )
}

export default Header

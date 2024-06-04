import React from "react";
import { useHeader } from "views/components/Header/Context";

interface TeaComponentProps extends React.PropsWithChildren {
    title: string;
    bgUrl: string;

}
const TeaComponent: React.FC<TeaComponentProps> = ({children, title, bgUrl}) => {
    const [, setTitle] = useHeader()
    React.useEffect(() => {
        setTitle(title)
        return () => {
            setTitle("")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div
            className="w-full bg-re bg-no-repeat bg-cover relative"
            style={{
                backgroundImage: `url('${bgUrl}')`,
            }}
        >
            {children}
        </div>
    )
}

export default TeaComponent

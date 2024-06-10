import React from "react";
import { useHeader } from "views/components/Header/Context";

interface TeaComponentProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
    title: string;
    bgUrl: string;

}
const TeaComponent: React.FC<TeaComponentProps> = ({children, title, bgUrl, style}) => {
    const [, setTitle] = useHeader()
    const bgRef = React.useRef<HTMLImageElement>(null)
    const [{ width, height }, setImgInfo] = React.useState<{
        width: number
        height: number
    }>({
        width: 0,
        height: 0,
    })

    React.useEffect(() => {
        if (bgRef.current) {
            bgRef.current.onload = () => {
                const width = bgRef.current!.naturalWidth
                const height = bgRef.current!.naturalHeight
                setImgInfo({ width, height })
            }
        }
    }, [])
    React.useEffect(() => {
        setTitle(title)
        return () => {
            setTitle("")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div
            className="w-full bg-no-repeat bg-cover relative"
            style={{
                backgroundImage: `url('${bgUrl}')`,
                backgroundPosition: `calc(265 / ${width} * 100%) calc(66 / ${height} * 100%)`,
                ...style
            }}
        >
            <img
                ref={bgRef}
                src={bgUrl}
                alt="vn-tea"
                className="hidden"
            />
            {children}
        </div>
    )
}

export default TeaComponent

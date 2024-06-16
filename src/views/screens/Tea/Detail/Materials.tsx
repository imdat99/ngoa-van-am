import React from "react"

const Materials = () => {
    const contentRef = React.useRef<HTMLDivElement>(null)
    const galleries = Array.from({ length: 9 }, (_, index) => ({
        id: index,
        src: `/images/button.png`,
    }))
    const [divHeight, setDivHeight] = React.useState(0)
    const convertGalleries = React.useMemo(() => {
        const result: { src1: string; src2: string }[] = []
        if (galleries.length < 3) {
            galleries.forEach((item) => {
                result.push({
                    src1: item.src,
                    src2: '',
                })
            })
        } else {
            for (let i = 0; i < galleries.length; i += 2) {
                result.push({
                    src1: galleries[i].src,
                    src2: galleries[i + 1] ? galleries[i + 1].src : '',
                })
            }
        }
        return result
    }, [galleries])
    React.useEffect(() => {
        if (contentRef.current) {
            setDivHeight(contentRef.current.clientHeight)
        }
    }, [])
    return (
        <div className="h-full w-full bg-no-repeat bg-contain relative">
            <div className="absolute w-full">
                <img
                    src="/images/taxua-nguyenlieu.png"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-col items-center justify-end h-full">
                <div className="bg-white w-full py-7 relative">
                    <div className="items-center justify-between mb-7 mx-7 shadow-xl rounded-[30px] absolute bg-white" ref={contentRef} style={{
                        top: -Math.round(divHeight/2),
                    }}>
                        <div className="p-6">
                            <h2 className="lora font-semibold text-2xl">
                                Nguyên liệu
                            </h2>
                            <p className="my-6">
                                Trà xanh cổ thụ Tà Xùa sao chảo gang, bếp củi
                            </p>
                        </div>
                    </div>
                    <div style={{
                        height: Math.round(divHeight/2), 
                    }}/>
                    <p className="lora ml-7 my-3">Thư viện hình ảnh</p>
                    <div className="flex space-x-5 overflow-y-auto [&>*:first-child]:ml-7 [&>*:last-child]:!mr-7">
                        {convertGalleries.map((item, index) => (
                            <div
                                key={index}
                                className="w-[160px] flex flex-col flex-shrink-0 space-y-4"
                            >
                                <img
                                    src={item.src1}
                                    className="aspect-square w-[160px] rounded-md"
                                />
                                <img
                                    src={item.src2}
                                    style={
                                        !item.src2
                                            ? { visibility: 'hidden' }
                                            : {}
                                    }
                                    className="aspect-square w-[160px] rounded-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Materials

import { cn } from 'lib/utils'
import { Button } from './ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const btnType = [
    {
        name: 'prev',
        iconClassName: 'h-6 w-6 rotate-180',
    },
    {
        name: 'next',
        iconClassName: 'h-6 w-6',
    },
]
interface BaseArrowButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {}
interface ArrowPrevProps extends BaseArrowButtonProps {
    type: 'prev'
    onPrev?: BaseArrowButtonProps['onClick']
}
interface ArrowNextProps extends BaseArrowButtonProps {
    type: 'next'
    onNext: BaseArrowButtonProps['onClick']
}
interface ArrowBothProps extends BaseArrowButtonProps {
    type: 'both'
    onPrev?: BaseArrowButtonProps['onClick']
    onNext: BaseArrowButtonProps['onClick']
}
type ArrowButtonProps = | ArrowBothProps | ArrowPrevProps | ArrowNextProps

const ArrowButton: React.FC<ArrowButtonProps> = (props) => {
    const { type, className, ...onClick } = props
    const na = useNavigate()
    const onPrev = (props as ArrowPrevProps).onPrev || (() => na(-1))
    return (
        <div className={cn('w-full flex py-10 z-50', className)}>
            <div className="mx-auto">
                {btnType.map(({ name, iconClassName }, i) => (
                    <Button
                        key={i}
                        className="bg-amber-800/55 text-orange-200 rounded-full p-2 border-orange-200 border-[1px] me-3 data-[hidden=true]:hidden hover:bg-amber-800/70 hover:text-orange-200 transition-colors duration-200 ease-in-out"
                        data-hidden={type !== name && type !== 'both'}
                        onClick={name === 'prev' ? onPrev : (onClick as ArrowNextProps).onNext}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={iconClassName}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default ArrowButton

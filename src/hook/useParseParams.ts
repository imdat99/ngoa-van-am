import { parseParams, repairUrl } from 'lib/utils'
import { Params, useLocation } from 'react-router-dom'

const useParseParams = <
    ParamsOrSearch extends string | Record<string, string | undefined> = string
>(): Readonly<
    [ParamsOrSearch] extends [string]
        ? Params<ParamsOrSearch>
        : Partial<ParamsOrSearch>
> => {
    const location = useLocation()
     
    return (parseParams(repairUrl(location.pathname+location.search)) as any)
}

export default useParseParams

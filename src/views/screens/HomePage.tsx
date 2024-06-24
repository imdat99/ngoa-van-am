import { paths } from "lib/constant"
import { configState } from "lib/store"
import { useRecoilValue } from "recoil"
import Welcome from "views/components/Welcome"

const HomePage = () => {
    const configData = useRecoilValue(configState)
    return <Welcome background={configData.home_bg} btnType="next" nextPath={paths.language} />
}

export default HomePage

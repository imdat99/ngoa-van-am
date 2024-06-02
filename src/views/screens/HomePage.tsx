import { paths } from "lib/constant"
import Welcome from "views/components/Welcome"

const HomePage = () => {
    return <Welcome background={"images/bg-welcome.png"} btnType="next" nextPath={paths.language} />
}

export default HomePage

import { useRoutes } from "react-router-dom"; // Đảm bảo import đúng
import { routers } from "../../routes";

function Allrouter() {
    const elements = useRoutes(routers);
    return (
        <>
            {elements}
        </>
    );
}

export default Allrouter;

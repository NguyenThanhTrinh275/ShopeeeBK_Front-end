import Private from "../components/Allrouter/Private";
import LayoutDefault from "../Layouts/LayoutDefault";
import Home from "../pages/Home";

export const routers = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            // Thêm các page ở đây
            // ...


            // trang nào cần đăng nhập vào mới xem được thì làm trong này
            {
                element: <Private />,
                children: [
                    // path ...
                ]
            }
        ]
    }
];
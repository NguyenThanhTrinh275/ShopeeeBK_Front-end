import { useFetchAPI } from "../../../hooks/useFetch";
import { Divider, Flex, Tag } from 'antd';
import './DanhMuc.scss'
const colors = [
    "magenta", "red", "volcano", "orange", "gold",
    "lime", "green", "cyan", "blue", "geekblue", "purple"
];
function DanhMuc() {
    const data = useFetchAPI('http://localhost:3000/tags');
    // console.log(data);
    const handleClickTag = (value) => () => {
        console.log(value);
    }
    return (
        <>
            <div className="tag">
                <Divider orientation="left" xs={24} sm={12} md={8} lg={6}>Danh mục sản phẩm</Divider>
                {data && data.map((item, index) => (
                    <span key={item.key} >
                        <Tag onClick={handleClickTag(item.value)} key={item.key} color={colors[index % colors.length]}>{item.value}</Tag>
                    </span>
                ))}
            </div>
        </>
    )
}
export default DanhMuc;
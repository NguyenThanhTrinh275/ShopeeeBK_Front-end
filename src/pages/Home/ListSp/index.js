import { useFetchAPI } from "../../../hooks/useFetch";
import { Col, Row, Button, Flex, Divider } from "antd";
import './ListSp.scss'
function ListSp() {
    const data = useFetchAPI("http://localhost:3000/company")
    // console.log(data);

    const handleBuy = (value) => () => {
        console.log(value);
    }
    const handleCard = (value) => () => {
        console.log(value);
    }
    return (
        <>
            <div className="product">
                <Divider orientation="left">Danh sách sản phẩm</Divider>
                <Row>
                    {data && data.map((item) => (
                        <Col span={6} className="product--card">
                            <div className="product--image">
                                <img src={item.image} alt="product" />
                            </div>
                            <div className="product--name">
                                {item.companyName}
                            </div>
                            <div className="product--price">
                                (Giá) {item.workingTime}
                            </div>
                            <Flex gap="small" wrap className="product--button">
                                <Button color="primary" variant="outlined" onClick={handleBuy(item.companyName)}>Mua ngay</Button>
                                <Button color="primary" variant="outlined" onClick={handleCard(item.companyName)}>Thêm giỏ hàng</Button>
                            </Flex>
                        </Col>
                    ))}

                </Row>
            </div>
        </>
    )
}
export default ListSp;
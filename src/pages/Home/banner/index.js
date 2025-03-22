import React from "react";
import { Carousel, Row, Col, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const images = [
    "/image/h3.jpg",
    "/image/h4.jpg",
    "/image/h5.jpg",
    "/image/h6.jpg"
];

function Banner() {
    const carouselRef = React.useRef(null);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if(carouselRef.current) 
    //             carouselRef.current.next();
    //     }, 10000);
    //     return () => clearInterval(interval);
    // }, [])
    return (
        <Row gutter={16} style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
          <Col span={16} style={{ position: "relative" }}>
            <Carousel ref={carouselRef} autoplay dots={{ className: "custom-dots" }}>
              {images.map((src, index) => (
                <div key={index}>
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
              ))}
            </Carousel>
            <Button
              shape="circle"
              icon={<LeftOutlined />}
              onClick={() => carouselRef.current.prev()}
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
            />
            <Button
              shape="circle"
              icon={<RightOutlined />}
              onClick={() => carouselRef.current.next()}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
            />
          </Col>
          <Col span={8}>
            <Row gutter={[0, 16]}>
              <Col span={24}>
                <img
                  src="/image/h1.jpg"
                  alt="Ad 1"
                  style={{ width: "92%", borderRadius: "10px" }}
                />
              </Col>
              <Col span={24}>
                <img
                  src="/image/h2.jpg"
                  alt="Ad 2"
                  style={{ width: "92%", borderRadius: "10px" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      );
}
export default Banner;
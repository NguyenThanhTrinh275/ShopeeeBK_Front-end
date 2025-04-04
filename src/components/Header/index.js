import "./Header.scss";
import { FacebookFilled, InstagramFilled, SearchOutlined, ShoppingCartOutlined, BellOutlined, QuestionCircleOutlined, GlobalOutlined } from "@ant-design/icons";
import LanguageButton from "../Button/LanguageButton";


const Header = () => {
  return (
    <header className="header">
      {/* Thanh điều hướng  */}
      <div className="header-top">
        <div className="header-links">
            <a href="#">Kênh Người Bán</a> |
            <a href="#">Trở thành Người bán Shopee</a> |
            <a href="#">Tải ứng dụng</a> |
            <a href="#">Kết nối</a>
            <span className="social-icons">
                <a href="#"><FacebookFilled /></a>
                <a href="#"><InstagramFilled /></a>
            </span>
        </div>
        <div className="header-actions">
            <a href="#"><BellOutlined size={16} /> Thông báo</a>
            <a href="#"><QuestionCircleOutlined size={16} /> Hỗ trợ</a>
            <LanguageButton/>
            <a href="/register"><b>Đăng Ký</b></a> | <a href="/login"><b>Đăng Nhập</b></a>
        </div>
      </div>

      {/* Thanh chính */}
      <div className="header-main">
        <div className="logo">
          <a href=""><img width="35" height="35" src="https://img.icons8.com/cute-clipart/64/shopee.png" alt="shopee"/> BK Shopee</a>
        </div>
        <div className="search-bar">
            <input type="text" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" />
            <button><SearchOutlined size={20} /></button>
        </div>
        <div className="cart">
            <ShoppingCartOutlined size={24} />
        </div>
      </div>

      {/* Danh mục sản phẩm */}
      <nav className="header-categories">
        <a href="#">Áo Baby Tee </a>
        <a href="#">Dép Nam </a>
        <a href="#">Bánh Tráng Phơi Sương </a>
        <a href="#">Tai nghe Bluetooth </a>
        <a href="#">Gấu Bông </a>
        <a href="#">Áo Khoác </a>
        <a href="#">Bình Giữ Nhiệt </a>
        <a href="#">Quần Jean Ống Rộng </a>
        <a href="#">Romand </a>
        <a href="#">Kẹp Tóc </a>
      </nav>
    </header>
  );
};

export default Header;
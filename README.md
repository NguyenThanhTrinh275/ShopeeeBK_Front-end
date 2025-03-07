# Hướng dẫn cấu hình Front end (sử dụng 'npm')
Sau khi pull code về, chạy lệnh `npm install` để cài đặt các thư viện cần thiết. Xem trong file package.json để biết thêm chi tiết (chỗ `dependencies`)

## Cấu trúc các folder, file
Trong folder `src` có các folder, file sau:
- `assets`: chứa các file tĩnh như ảnh, icon, ...
- `components`: chứa các component dùng chung cho toàn bộ ứng dụng (button, ...).
    + Folder `Allrouter` chứa các route của ứng dụng. Được liên kết với file `index.js` trong thư mục `routes` 
    + Folder `Private` cũng liên kết với file `index.js` trong thư mục `routes` để thể hiện các pages khi đã được người dùng đăng nhập vào
- `hooks`: viết các hook bổ sung trong thư mục này để gọi và sử dụng luôn
- `layoutDefautl`: gọi các `Header` `footer` v.v trong này
- `reducer`: những thứ liên quan đến giỏ hàng, store (có thể hiểu là biến global (không chắc chắn)) được gọi ra để tạo giỏ hàng
- `services`: chứa các api gọi lên server (tác động vào đường link để đăng nhập chẳng hạn)
    *Ví dụ:*
      export const login = async (email, password) => {
      const result = await get(`?email=${email}&password=${password}`);
      return result;
    };  

- `until`: chứa các hàm bổ sung cho việc tác động để thay đổi API
- `pages`: chứa các trang của ứng dụng
- `routes`: chứa các route của ứng dụng

**Lưu ý: Front end lần này sử dụng npm để config, định dạng hình ảnh bằng scss (đặt tên class chuẩn BEM để dễ dàng quản lí và bảo trì), màu của hình ảnh lưu vào các biến tương ứng và dùng Ant Design (có thể dùng thư viện định dạng khác)**
## [BEM ?](https://topdev.vn/blog/bem-la-gi/)

## Những thứ mình hay xài
[AI](https://purecode.ai/)
[Antd](https://ant.design/components/overview)
[Cái này hay lắm](https://sweetalert2.github.io/#examples)
[Thư viện icon nhiều hơn của Antd](https://fontawesome.com/icons)

## Dự định các phần của trang web như sau:

SPBK/
│── public/                     # Chứa các tệp tĩnh như ảnh, CSS, JS
│   ├── images/                 # Ảnh sản phẩm, banner, icon
│   ├── css/                    # Stylesheets
│   ├── js/                     # Scripts chung
│
│── src/                        # Mã nguồn chính
│   ├── components/             # Các component dùng chung
│   │   ├── Header.js           # Thanh điều hướng
│   │   ├── Footer.js           # Chân trang
│   │   ├── ProductCard.js      # Card sản phẩm
│   │   ├── CartItem.js         # Mục trong giỏ hàng
│   │   ├── SearchBar.js        # Thanh tìm kiếm
│   │
│   ├── pages/                  # Các trang chính
│   │   ├── Home                # Trang chủ
│   │   ├── ProductList.js      # Danh mục sản phẩm
│   │   ├── ProductDetail.js    # Chi tiết sản phẩm
│   │   ├── Cart.js             # Giỏ hàng
│   │   ├── Checkout.js         # Thanh toán
│   │   ├── Login.js            # Đăng nhập
│   │   ├── Register.js         # Đăng ký
│   │   ├── OrderSuccess.js     # Trang xác nhận đơn hàng
│   │
│   ├── routes/                 # Định tuyến trang
│   │   ├── index.js            # Cấu hình route chính
│   │
│   ├── services/               # Các dịch vụ kết nối API
│   │   ├── productService.js   # Gọi API sản phẩm
│   │   ├── cartService.js      # Gọi API giỏ hàng
│   │   ├── authService.js      # Gọi API xác thực người dùng
│   │
│   ├── hooks/                  # Custom hooks
│   │   ├── useAuth.js          # Hook xác thực người dùng
│   │   ├── useCart.js          # Hook giỏ hàng
│   │
│   ├── contexts/               # Context API
│   │   ├── AuthContext.js      # Xác thực
│   │   ├── CartContext.js      # Giỏ hàng
│   │
│   ├── App.js                  # Ứng dụng chính
│   ├── index.js                # Điểm vào chính
│
│── backend/                    # Backend (nếu có)
│   ├── models/                 # Mô hình dữ liệu
│   ├── controllers/            # Xử lý logic
│   ├── routes/                 # API endpoints
│   ├── config/                 # Cấu hình (CSDL, môi trường)
│   ├── server.js               # Server chính
│
│── package.json                # Cấu hình dự án
│── README.md                   # Hướng dẫn sử dụng

**Sử dụng Fake API trong thư mục database trước khi Back-end trả ra API thật** (tìm cách config, install rồi chạy nha hihi)

## TASK 1 (ver 1.0 ngày 07/3/2025)
  - (Vũ): inner trang `Home`
  - (Toàn): code giao diện trang `Sign in`, `Login` trong file, thư mục đã tạo sẵn trong `pages`
  - (Sếp Mẫn): code giao diện `Header` `Footer` mặc định (trong `component`) (route đến trang nào thì header, footer đều giống nhau) 
**Dựa vào giao diện trang shopee nha ae**
  ## TASK 2 chia nhiện vụ và thực hiện sau khi task 1 hoàn thành ... update ...

## END Front_end

**Phần này của React**
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

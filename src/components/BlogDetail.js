import Sidebar from "./Sidebar";

const BlogDetail = () => {
    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog-detail">
                        <img className="w-100" src="/img/product1.jpeg" alt="product" />
                        <span className="blog-detail-category">LOREM</span>
                        <h1 className="blog-detail-title">Lorem ipsum dolor sit amet</h1>
                        <span className="blog-detail-date">03.06.2021</span>
                        <p className="blog-detail-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <h2 className="blog-detail-alttitle">Lorem ipsum dolor sit amet</h2>
                        <p className="blog-detail-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <h2 className="blog-detail-alttitle">Lorem ipsum dolor sit amet</h2>
                        <p className="blog-detail-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
                <Sidebar/>
            </div>
        </div>
    )
}
export default BlogDetail;
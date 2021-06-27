const Sidebar = () => {
    return (
        <div className="col-lg-4">
            <div className="right-sidebar">
                <div className="widget">
                    <div className="widget-content">
                        <input type="text" className="widget-search-inp" placeholder="Search" />
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Category</p>
                    <div className="widget-content">
                        <ul className="category-ul">
                            <li>Category 1</li>
                            <li>Category 2</li>
                            <li>Category 3</li>
                            <li>Category 4</li>
                            <li>Category 5</li>
                        </ul>
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Title</p>
                    <div className="widget-content">
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Title</p>
                    <div className="widget-content">
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Title</p>
                    <div className="widget-content">
                    </div>
                </div>
                <div className="widget">
                    <p className="widget-title">Title</p>
                    <div className="widget-content">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
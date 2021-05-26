import BlogItem from "./BlogItem"

const Blog = () => {
    return (
        <section className="blog">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Blog</h1>
                            <h2 className="page-description">Blog</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem /><BlogItem />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
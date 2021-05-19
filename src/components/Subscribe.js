const Subscribe = () => {
    return (
        <section className="section-subscribe pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="title">Subscribe</p>
                        <span className="sbs-description">Subscribe Description</span>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-between w-100 h-100">
                            <div className="row w-100 m-0">
                                <div className="col-lg-9">
                                    <input type="text" className="w-100 sbs-area-inp" />
                                </div>
                                <div className="col-lg-3 d-flex align-items-center justify-content-between ">
                                    <input type="submit" className="w-100 h-100 btn btn-dark" value="Send" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
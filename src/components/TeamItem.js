const TeamItem = () => {
    return (
        <div className="col-lg-4">
            <div className="team">
                <div className="team-img">
                    <img src="/img/team1.png" alt="team" />
                </div>
                <div className="team-info">
                    <h5 className="team-name">Sandara Mrikon</h5>
                    <h6 className="team-position">Software Engineer</h6>
                    <div className="social-links">
                        <div className="social-item"><i className="fab fa-facebook"></i></div>
                        <div className="social-item"><i className="fab fa-twitter"></i></div>
                        <div className="social-item"><i className="fab fa-instagram"></i></div>
                        <div className="social-item"><i className="fab fa-linkedin"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamItem
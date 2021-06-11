import { useEffect, useState } from "react"
const Sidebar = () => {
    const [search, setSearch] = useState();
    const [find, setFind] = useState([]);
    const [word, setWord] = useState("");
    useEffect(() => {
        setSearch(["test", "mb", "test1"])
    }, [])
    const findSearch = (e) => {
        setWord(e.target.value)
        const filteredCountries = search.filter(item => item.indexOf(e.target.value) > -1 ? item : null);
        e.target.value.length === 0 ? setFind([]) : setFind(filteredCountries);
    }

    const handleKeyPress = (e) => {
        if(e.charCode===13){
            alert("aaa")
        }
    }
    return (
        <div className="col-lg-4">
            <div className="right-sidebar">
                <div className="widget">
                    <p className="widget-title">Title</p>
                    <div className="widget-content">
                        <input onKeyPress={(e)=>handleKeyPress(e)} type="text" className="widget-search-inp" placeholder="Search" />
                        <div className="widget-search-result">
                            <p>Test 1</p>
                            <p>Test 2</p>
                            <p>Test 1</p>
                            <p>Test 2</p>
                        </div>
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
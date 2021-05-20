
import Title from "./Title"
import FlatItem from "./FlatItem"

const FlatList = () => {
    const title = {
        text: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit ame"
    }
    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <FlatItem slug="1" />
                    <FlatItem slug="2" />
                    <FlatItem slug="2" />
                    <FlatItem slug="4" />
                    <FlatItem slug="5" />
                    <FlatItem slug="6" />  
                </div>
            </div>
        </section>
    )

}

export default FlatList;
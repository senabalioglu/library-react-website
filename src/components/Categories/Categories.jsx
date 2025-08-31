import "./Categories.css";

function Categories(){


    const categories = [
        "Action",
        "Novel",
        "Computer",
        "History",
        "Hobby",
        "Sport",
        "Science",
        "Reference Books",
        "Children's Books",
        "Religion",
        "Literature",
        "Humor",
        "Philosophy",
        "Culture",
        "Politics",
    ]

    return(
        <>
        <div className="category-list" >
            {
                categories.map((category, index) => (
                    <div key={index} className="category-container" >
                        <h3 className="category-text" > {category} </h3>
                    </div>
                ))
            }            
        </div>
        </>
    )
}

export default Categories
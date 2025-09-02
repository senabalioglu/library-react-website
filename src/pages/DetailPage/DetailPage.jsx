import { useParams } from "react-router-dom";

function DetailPage(){

    const { id } = useParams();

    return(
        <>
        <div>
            <h2> Detay Sayfası {id} </h2>
        </div>
        </>
    )
}

export default DetailPage
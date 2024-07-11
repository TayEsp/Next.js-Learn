export default function ContadorDisplay(props){
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50 px",
            width: "50 px", 
            borderRadius: "25px",
            backgroundColor: "#111",
            color:"#fff",
            fontSize: "2rem",
            margin: "20px"}}>
            {props.numero}
        </div>
    )
}
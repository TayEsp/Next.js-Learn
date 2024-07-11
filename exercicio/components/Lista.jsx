export default function Lista(props){
    return(
        <div>
            <h1>Lista de algo</h1>
            <ul style={{listStyle: "square", padding: 20}}>
                {props.children}
            </ul>
        </div>
    )
}
function Square(props) {
  return (
    <div>
      {props.color 
        ? 
        <button 
          style={{color: props.color}}
          onClick={props.onClick}
          >
            O
          </button> 
        : 
        <button onClick={props.onClick}></button>}
    </div>
  )
}
export default Square
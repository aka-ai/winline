function Square(props) {
  return (
    <div>
      {props.color ? <button style={{color: props.color}}>O</button> : <button></button>}
    </div>
  )
}
export default Square
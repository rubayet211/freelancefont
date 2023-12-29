const Button = ({ text , handleClick, design }) => {
    return ( 
        <button onClick={ handleClick } className = { design }>
            { text }
        </button>
     );
}
 
export default Button;
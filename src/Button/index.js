import './button.css'

function Button(props) {
    
    const isOperator = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }

    return (
        <div
        className={(`button ${isOperator(props.children) ? 'operator' : ''}`).trimEnd()}
        onClick={() => props.onClick(props.children)}
        >
            {props.children}
        </div>
    )
}

export {Button}
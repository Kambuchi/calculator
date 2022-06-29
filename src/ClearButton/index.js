import './clearButton.css'

function ClearButton({onClick}){
    return (
        <div 
        className="clear"
        onClick={()=> onClick()}
        >
            Clear
        </div>
    )
} 

export {ClearButton}
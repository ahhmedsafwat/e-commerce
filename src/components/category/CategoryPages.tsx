import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";

const Pages = ()=>{
    return(
        <div className="flex justify-evenly ">
            <button> <LuArrowLeft className="inline-block"/> Previous</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button> Previous <LuArrowRight className="inline-block"/> </button>
        </div>
    )
}

export default Pages;
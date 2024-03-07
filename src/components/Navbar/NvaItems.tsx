interface navLink{
    link:string
}
const Navitems = (props:navLink)=>{
    return <a className="navbar-item" >{props.link}</a>
    
}

export default Navitems;
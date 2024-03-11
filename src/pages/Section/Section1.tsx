import "./sectoion.css"
const FirstSection = () => {

    return (
    <div className="bg-secondory text-primary grid grid-cols-2 px-14 py-10 medium:px-11 small:px-7 small:block">
        <div className="flex justify-around small:justify-around">
                <h1 className="section-one">VERSACE</h1>
                <h1 className="section-one">SHAZLY</h1>
                <h1 className="section-one">AFRECI</h1>
        </div>
        <div className="flex justify-around small:justify-evenly">
                <h1 className="section-one flex">PRADA</h1>
                <h1 className="section-one">Calvin Kelin</h1>
        </div>
    </div>
    )
};

export default FirstSection;
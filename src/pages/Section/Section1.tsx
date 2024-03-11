import "./sectoion.css"
const FirstSection = () => {

    return (
        <div className="bg-secondory text-primary grid grid-cols-4 small:grid-cols-3 px-14 py-10 medium:grid-cols-3">
            <h1 className="section-one">VERSACE</h1>
            <h1 className="section-one">SHAZLY</h1>
            <h1 className="section-one">AFRECI</h1>
            <div className="flex justify-between ml-[-50px] medium:ml-[0px] small:ml-[0px]">
            <h1 className="section-one flex">PRADA</h1>
            <h1 className="section-one">Calvin Kelin</h1>
            </div>
        </div>
    )
};

export default FirstSection;
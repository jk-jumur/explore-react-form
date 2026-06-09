import Aunt from "./Aunt";
import Father from "./Father";

import Uncle from "./Uncle";


const Grandpa = ({asset}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className="flex">
   
                 <Father asset={asset}></Father>
                 <Uncle></Uncle>
                 <Aunt asset={asset}></Aunt>
            </section>
           
        </div>
    );
};

export default Grandpa;
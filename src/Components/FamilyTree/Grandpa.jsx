import Aunt from "./Aunt";
import Father from "./Father";

import Uncle from "./Uncle";


const Grandpa = () => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className="flex">
   
                 <Father></Father>
                 <Uncle></Uncle>
                 <Aunt></Aunt>
            </section>
           
        </div>
    );
};

export default Grandpa;
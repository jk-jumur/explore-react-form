import Brother from "./Brother";

import Sister from "./Sister";


const Father = ({asset}) => {
    return (
        <div>
            <h3>Father</h3>
            <section className="flex">
                
                 <Brother></Brother>
                 <Sister asset={asset}></Sister>

            </section>
        </div>
    );
};

export default Father;
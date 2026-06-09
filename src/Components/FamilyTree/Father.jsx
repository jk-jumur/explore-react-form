import Brother from "./Brother";

import Sister from "./Sister";


const Father = () => {
    return (
        <div>
            <h3>Father</h3>
            <section className="flex">
                
                 <Brother></Brother>
                 <Sister></Sister>

            </section>
        </div>
    );
};

export default Father;
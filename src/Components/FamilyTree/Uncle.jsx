import Cousin from "./Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                 <Cousin name='arrietty'></Cousin>
                  <Cousin name='setsuko yokokawa'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;
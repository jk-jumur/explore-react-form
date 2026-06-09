import Cousin from "./Cousin";


const Aunt = ({asset}) => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                  <Cousin asset={asset} name="suzume"></Cousin>
                  <Cousin name='chihiro'></Cousin>
                  <Cousin name="ponyo"></Cousin>
                  <Cousin name='Mononoke'></Cousin>
                  <Cousin name='Marnie'></Cousin>
                 
            </section>
        </div>
    );
};

export default Aunt;
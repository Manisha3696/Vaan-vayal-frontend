import React from 'react';
import { Link } from 'react-router-dom';
import Rice1 from '../../../images/Rice/White-Raw-Rice-Vaan-Vayal.jpg';

const riceVarieties = [
    { id: 1, name: "Boiled Rice", image: Rice1, description: "Boiled rice is partially cooked..." },
    { id: 2, name: "White Raw Rice", image: Rice1, description: "This rice is uncooked and white in color..." },
    { id: 3, name: "Red Raw Rice", image: Rice1, description: "This rice has a red outer layer..." },
    { id: 4, name: "Basmati Rice", image: Rice1, description: "Long-grained aromatic rice..." },
    { id: 5, name: "Seeraga Samba Rice", image: Rice1, description: "Small grain rice used in biryani..." },
    { id: 6, name: "Matta Rice", image: Rice1, description: "A Kerala special parboiled rice..." },
    { id: 7, name: "Idli Rice", image: Rice1, description: "Ideal for making soft idlis..." },
];

function RiceList() {
    return (
        <div className='container ftco-section'>
            {
                riceVarieties.reduce((rows, item, index) => {
                    const rowIndex = Math.floor(index / 4);
                    if (!rows[rowIndex]) rows[rowIndex] = [];
                    rows[rowIndex].push(item);
                    return rows;
                }, []).map((row, rowIndex) => (
                    <div className="row mb-4" key={rowIndex}>
                        {row.map((item) => (
                            <div className="col-md-6 col-lg-3 ftco-animate" key={item.id}>
                                <div className="product">
                                    <Link to={`/rice/${encodeURIComponent(item.name)}`} className="img-prod">
                                        <img className="img-fluid" src={item.image} alt={item.name} />
                                        <span className="status">30%</span>
                                        <div className="overlay"></div>
                                    </Link>
                                    <div className="text py-3 pb-4 px-3 text-center">
                                        <h3><Link to={`/rice/${encodeURIComponent(item.name)}`}>{item.name}</Link></h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    );
}

export default RiceList;
export { riceVarieties }; 

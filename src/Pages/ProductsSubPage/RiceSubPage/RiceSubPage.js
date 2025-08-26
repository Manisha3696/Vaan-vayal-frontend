import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { riceVarieties } from '../../Products/Rice/Rice';

const RiceSubPage = () => {

    const [activeTab, setActiveTab] = useState('additional-information');
    const { name } = useParams();
    const rice = riceVarieties.find(r => r.name === decodeURIComponent(name));

    if (!rice) {
        return <div className="container mt-5"><h3>Rice variety not found.</h3></div>;
    }

    const product = {
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    };

    const additionalInfo = [
        { attribute: 'color', value: 'Red' },
        { attribute: 'kg', value: '1.5 kg, 1 kg, 2 kg, 5 kg' },
    ];

    return (
        <div className="organic-shop container">
            <main className="main mb-5">
                <div className="product-details-container">
                    <div className="product-image">
                        <img src={rice.image} alt={rice.name} />
                    </div>
                    <div className="product-details">
                        <h1>{rice.name}</h1>
                        <p className="price">{rice.priceRange}</p>
                        <p className="description">{rice.description}</p>
                        <div className="categories">Categories: Best Deals, Organic Rice Exporters</div>
                    </div>
                </div>
            </main>
            <div className="product-details">
                <div className="tabs">
                    <button
                        className={activeTab === 'description' ? 'active' : ''}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </button>
                    <button
                        className={activeTab === 'additional-information' ? 'active' : ''}
                        onClick={() => setActiveTab('additional-information')}
                    >
                        Additional information
                    </button>
                    <button
                        className={activeTab === 'reviews' ? 'active' : ''}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews (0)
                    </button>
                </div>
                <div className="tab-content">
                    {activeTab === 'description' && <p>{product.description}</p>}
                    {activeTab === 'additional-information' && (
                        <table>
                            <tbody>
                                {additionalInfo.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.attribute}</td>
                                        <td>{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    {activeTab === 'reviews' && <p>No reviews yet.</p>}
                </div>
            </div>
        </div>
    );
};

export default RiceSubPage;
import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";


function Recipe() {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('Instructions');
    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=dd81d850e90747f5a795cb7526bf76c3`);
        const detailData = await data.json();

        setDetails(detailData);
        console.log(detailData);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <DetailedWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="food" />
            </div>

            <Info>
                <Button
                    className={activeTab === 'Instructions' ? 'active' : ''}
                    onClick={() => setActiveTab('Instructions')}
                >
                    Instructions
                </Button>

                <Button
                    className={activeTab === 'Ingredients' ? 'active' : ''}
                    onClick={() => setActiveTab('Ingredients')}
                >
                    Ingredients
                </Button>

                {activeTab === 'Instructions' && (
                    <div>
                        <h3 className="py-4" dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                )}

                {activeTab === 'Ingredients' && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) =>
                            <li key={ingredient.id}>{ingredient.original}</li>
                        )}
                    </ul>
                )}


            </Info>
        </DetailedWrapper>
    );
}

const DetailedWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    h2 {
        margin-bottom: 2rem;
        font-weight: 600;
    }

    h3 {
        font-size: 1.2rem;
    }

    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    ul {
        margin-top: 2rem;
    }

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
    width: 60%;
`;

export default Recipe;
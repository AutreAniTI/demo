import ChartsLeft from "./ChartsLeft";
import ChartsRight from "./ChartsRight";
import { DATA_INNER, DATA_OUTER } from "./chartsData";

const ChartsContainer = () => {

    return (
        <div className="charts">
            <div className="container">
                <ChartsLeft
                    DATA_INNER={DATA_INNER}
                    DATA_OUTER={DATA_OUTER} />
                <ChartsRight />
            </div>
        </div>

    );
}

export default ChartsContainer;
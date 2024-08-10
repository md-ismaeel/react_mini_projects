
const Airline = ({ person }) => (
    <div className="px-4 py-4">
        <h1 className="text-2xl font-bold">Airlines:</h1>
        {person.airline.map((aline, i) => (
            <div key={i} className="capitalize flex items-center justify-around">
                <div>
                    <p>Name: {aline.name}</p>
                    <p>Country: {aline.country}</p>
                    <p>Established in: {aline.established}</p>
                    <p>Headquarters: {aline.head_quaters}</p>
                </div>
                <div>
                    <img src={aline.logo} alt={`${aline.name} logo`} />
                </div>
            </div>
        ))}
    </div>
);

export default Airline;

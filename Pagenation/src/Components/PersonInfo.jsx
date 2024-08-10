const PersonInfo = ({ name, trips }) => (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <p>
            <b>Trips:</b> {trips}
        </p>
    </div>
);

export default PersonInfo;

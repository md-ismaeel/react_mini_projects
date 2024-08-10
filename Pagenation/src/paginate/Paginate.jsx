import { useEffect, useState } from "react";
import Airline from "../Components/Airline";
import Container from "../Components/Container";
import PersonInfo from "../Components/PersonInfo";
import Pagination from "../Components/Pagination";

export const Paginate = () => {
    const [page, setPage] = useState(1);
    const [pageSize] = useState(6);
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false);

    // For pagination controls
    const [pageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);

    const changePage = (pageNumber) => {
        setPage(pageNumber);
        if (pageNumber > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        } else if (pageNumber <= minPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    useEffect(() => {
        const fetchPassengers = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${pageSize}`
                );
                const passengers = await response.json();
                setPeople(passengers.data || []);
            } catch (error) {
                console.error("Failed to fetch passengers", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPassengers();
    }, [page, pageSize]);

    const totalPages = 50; // Placeholder: should be fetched from the server

    return (
        <main className="py-14">
            <Container>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {loading ? (
                        <div className="text-2xl font-bold text-center pt-14">Loading...</div>
                    ) : (
                        people.map((person) => (
                            <article
                                key={person._id}
                                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                            >
                                <PersonInfo name={person.name} trips={person.trips} />
                                <Airline person={person} />
                            </article>
                        ))
                    )}
                </div>
                <Pagination
                    totalPages={totalPages}
                    pageSize={pageSize}
                    currentPage={page}
                    changePage={changePage}
                    minPageNumberLimit={minPageNumberLimit}
                    maxPageNumberLimit={maxPageNumberLimit}
                />
            </Container>
        </main>
    );
};

export default Paginate;

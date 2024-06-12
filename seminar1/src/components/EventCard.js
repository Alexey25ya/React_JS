function EventCard({ number, nameEvent, timeEvent, placeEvent }) {
    return (<div className="card">
        <h1>Номер: {number}</h1>
        <p>Название: {nameEvent}</p>
        <p>Время: {timeEvent}</p>
        <p>Место: {placeEvent}</p>

    </div>
    );
}

export default EventCard;
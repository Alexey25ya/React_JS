export default function Greating() {
    const now = new Date().toLocaleTimeString();

    return (<h2 style={{ padding: '20px', borderRadius: '5px' }}>Текущее время: {now}</ h2>
    );
}
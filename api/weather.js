export default function handler(req, res) {
    res.status(200).json({ location: "New York", temperature: "15°C" });
}

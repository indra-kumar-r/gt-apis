export default function handler(req, res) {
    const citiesData = [
        { name: 'New York', temperature: 22, condition: 'Clear' },
        { name: 'London', temperature: 16, condition: 'Cloudy' },
        { name: 'Mumbai', temperature: 30, condition: 'Rainy' },
        { name: 'Tokyo', temperature: 25, condition: 'Clear' },
        { name: 'Paris', temperature: 18, condition: 'Cloudy' },
        { name: 'Sydney', temperature: 20, condition: 'Rainy' },
    ];
    res.status(200).json(citiesData);
}

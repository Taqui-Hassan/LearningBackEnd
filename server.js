import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Server is ready');
})      
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 2, title: 'Math Joke', content: 'Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else.' },
        // { id: 3, title: 'Time Travel Joke', content: 'I would tell you a time-traveling joke, but you didn’t like it.' },
        // { id: 4, title: 'Parallel Lines', content: 'Parallel lines have so much in common. It’s a shame they’ll never meet.' },
        // { id: 5, title: 'Computer Joke', content: 'Why don’t programmers like nature? It has too many bugs.' },
        // { id: 6, title: 'Password Joke', content: 'Why did the computer get cold? Because it left its Windows open!' },
        // { id: 7, title: 'Java Joke', content: 'Why do Java developers wear glasses? Because they don’t C#.' },
        // { id: 8, title: 'Elevator Joke', content: 'I told my friend 10 jokes to make him laugh. Sadly, no pun in ten did.' },
        // { id: 9, title: 'Chicken Joke', content: 'Why did the chicken join a band? Because it had the drumsticks!' },
        // { id: 10, title: 'Dog Joke', content: 'What do you call a dog magician? A labracadabrador.' },
        // { id: 11, title: 'Construction Joke', content: 'I’m still working on that construction joke... I’m not finished yet.' }

    ]
    res.send(jokes);


})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})
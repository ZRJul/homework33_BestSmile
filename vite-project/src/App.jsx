import {useState} from 'react'
import './App.css'
import SmileCard from "./components/SmileCard.jsx";


const smileData = [
    {"id": 1,"slug":"grinning-face","character":"\ud83d\ude00","unicodeName":"grinning face","codePoint":"1F600","group":"smileys-emotion","subGroup":"face-smiling"},
    {"id": 2,"slug":"grinning-face-with-big-eyes","character":"\ud83d\ude03","unicodeName":"grinning face with big eyes","codePoint":"1F603","group":"smileys-emotion","subGroup":"face-smiling"},
    {"id": 3,"slug":"grinning-face-with-smiling-eyes","character":"\ud83d\ude04","unicodeName":"grinning face with smiling eyes","codePoint":"1F604","group":"smileys-emotion","subGroup":"face-smiling"},
    {"id": 4,"slug":"beaming-face-with-smiling-eyes","character":"\ud83d\ude01","unicodeName":"beaming face with smiling eyes","codePoint":"1F601","group":"smileys-emotion","subGroup":"face-smiling"},
    {"id": 5,"slug":"grinning-squinting-face","character":"\ud83d\ude06","unicodeName":"grinning squinting face","codePoint":"1F606","group":"smileys-emotion","subGroup":"face-smiling"},
    {"id": 6,"slug":"grinning-face-with-sweat","character":"\ud83d\ude05","unicodeName":"grinning face with sweat","codePoint":"1F605","group":"smileys-emotion","subGroup":"face-smiling"},
    {"id": 7,"slug":"rolling-on-the-floor-laughing","character":"\ud83e\udd23","unicodeName":"rolling on the floor laughing","codePoint":"1F923","group":"smileys-emotion","subGroup":"face-smiling"},
    {"id": 8,"slug":"face-with-tears-of-joy","character":"\ud83d\ude02","unicodeName":"face with tears of joy","codePoint":"1F602","group":"smileys-emotion","subGroup":"face-smiling"},
    {"id": 9,"slug":"slightly-smiling-face","character":"\ud83d\ude42","unicodeName":"slightly smiling face","codePoint":"1F642","group":"smileys-emotion","subGroup":"face-smiling"},
    {"id": 10,"slug":"upside-down-face","character":"\ud83d\ude43","unicodeName":"upside-down face","codePoint":"1F643","group":"smileys-emotion","subGroup":"face-smiling"},
    {"id": 11,"slug":"winking-face","character":"\ud83d\ude09","unicodeName":"winking face","codePoint":"1F609","group":"smileys-emotion","subGroup":"face-smiling"},
    {"id": 12,"slug":"smiling-face-with-smiling-eyes","character":"\ud83d\ude0a","unicodeName":"smiling face with smiling eyes","codePoint":"1F60A","group":"smileys-emotion","subGroup":"face-smiling"},
    {"id": 13,"slug":"smiling-face-with-halo","character":"\ud83d\ude07","unicodeName":"smiling face with halo","codePoint":"1F607","group":"smileys-emotion","subGroup":"face-smiling"}
]
function App() {


    const [votes, setVotes] = useState({});
    const [winner, setWinner] = useState(null);

    const handleShowResults = () => {
        // Знайдіть смайла з найбільшою кількістю голосів
        let maxVotes = -1;
        let winningSmile = null;

        for (const smile of smileData) {
            const voteCount = votes[smile.id] || 0;

            if (voteCount > maxVotes) {
                maxVotes = voteCount;
                winningSmile = smile;
            }
        }

        setWinner(winningSmile);
    };

    const handleVote = (smileId) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [smileId]: (prevVotes[smileId] || 0) + 1,
        }));
    };

    return (
        <div className="app">
            <h1>Smile Voting</h1>
            <div className="smile-card-container">
                {smileData.map((smile) => (
                    <SmileCard
                        key={smile.id}
                        smile={smile}
                        votes={votes[smile.id] || 0}
                        onVote={() => handleVote(smile.id)}
                    />
                ))}
            </div>
            <button onClick={handleShowResults}>Show Results</button>
            {winner && (
                <div className="winner">
                    <h3>Winner:</h3>
                    <p>{winner.character}</p>
                </div>
            )}

        </div>
    );
}

export default App

import '../components_style/SmileCard.css'

function SmileCard({ smile, votes, onVote }) {
    return (
        <div className="smile-card">
            <div>
                <h2>{smile.character}</h2>
            </div>
            <div>
                <p>Votes: {votes}</p>
                <button className="card_button" onClick={onVote}>
                    Vote
                </button>
            </div>
        </div>
    );
}

export default SmileCard;


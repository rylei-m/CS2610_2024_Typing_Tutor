function PhraseDisplay({ phrase, typedIndex }) {
    return (
        <div className="phrase">
            <span className="typed-phrase">{phrase.substring(0, typedIndex)}</span>
            <span className="pointer">{phrase[typedIndex]}</span>
            <span>{phrase.substring(typedIndex + 1)}</span>
        </div>
    );
}
export default PhraseDisplay
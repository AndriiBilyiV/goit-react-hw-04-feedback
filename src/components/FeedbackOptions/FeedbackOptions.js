export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <div>
            {options.map(option => (
                <button onClick={() => onLeaveFeedback(option)} key={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
            )
                )}
        </div>

    )
}
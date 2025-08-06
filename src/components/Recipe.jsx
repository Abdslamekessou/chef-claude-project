import ReactMarkdown from 'react-markdown'

export default function Recipe({ content }) {
    return (
        
        <section className="suggested-recipe-container">
        
                <h2>Generated Recipe</h2>
                <ReactMarkdown>{content}</ReactMarkdown>
        </section>
        
    )
}

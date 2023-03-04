import './TattooPost.css';

function TattooPost(props) {
    const { tattoo, onBGClick } = props;
    return (
    <div className="tattoo-post">
        <div className="tattoo-post-bg" onClick={onBGClick}
         />
        <div className="tattoo-post-content">
            <img src={tattoo.fullUrl}/>
            <h4>{tattoo.title}</h4>
        </div>
        
    </div>
    );
}

export default TattooPost;
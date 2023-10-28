import { useState } from "react";

const FeudDisplay = ({ num, answer, points }) => {

    if(points == 0) return null;

    const [clicked, setClicked] = useState(false);

    const handleClick = (event) =>{
        event.preventDefault();
        event.target.classList.add('hidden');
        setClicked(true);
    }

    const textCSS = clicked ? "feudText":"feudText hidden";
    const numCSS =  clicked ? "feudNum":"feudNum hidden";

    return (
        <div className="feudAnswer">
            <div className="feudCover" onClick={handleClick}><span>J</span></div>
            <div className={textCSS}>{answer}</div>
            <div className={numCSS}>{points}</div>
        </div>
    );
}

export default FeudDisplay;
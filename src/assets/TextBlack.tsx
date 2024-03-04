type Text = {
title : string;
}

function TextBlack(props: Text ){
    return <h1 className={"text"}>
        {props.title}
    </h1>
}


export default TextBlack
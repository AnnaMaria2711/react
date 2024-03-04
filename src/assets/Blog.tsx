import TextBlack from "./TextBlack.tsx";
import SmallHeader from "./TextHeader.tsx";
import SmallText from "./SmallText.tsx";
function Blog() {
    return (

        <div>
            <TextBlack title={"a very relaxing looking Website"}  />
            <SmallHeader header={"Hello, I am a software developer"}/>
            <SmallText desc={"Programming skills: Java, CSS, TypeScript, React, JavaScript"}/>
        </div>


    );
}

export default Blog
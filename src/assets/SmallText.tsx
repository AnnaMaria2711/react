type Text_Profile_Desc = {
    desc: string;
}

function SmallText(props: Text_Profile_Desc){
    return <div className={"text"}>
        {props.desc}
    </div>
}

export default SmallText
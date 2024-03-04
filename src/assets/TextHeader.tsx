
type Text_Profile = {
    header: string;
}
function SmallHeader(props : Text_Profile){
    return <h2 className={"profileText"}>
        {props.header}
    </h2>
}

export default SmallHeader;
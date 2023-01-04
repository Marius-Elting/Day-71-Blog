function ABC(props) {
    console.log(props);
    return (<div>
        {props.children[0]}
    </div>);
}

export default ABC;
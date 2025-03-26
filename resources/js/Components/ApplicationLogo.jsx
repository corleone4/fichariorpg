export default function ApplicationLogo(props) {
    return (
            <p className="text-black dark:text-white"><img src={props.image} width={'110px'} height={'110px'} alt=""/></p>
    );
}

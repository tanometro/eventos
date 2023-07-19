export default function Registro (props) {
    const {nombres, apellidos, dni, email, dias} = props;
    return (
        <div>
            <h4>
                {nombres}
            </h4>
            <h4>
                {apellidos}
            </h4>
            <h4>
                {dni}
            </h4>
            <h4>
                {email}
            </h4>
            <h4>
                {dias}
            </h4>
        </div>
    )
}
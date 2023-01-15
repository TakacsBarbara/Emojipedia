
const Entry = (props) => {
  return (
    <div className="term" key={props.id} id={props.id}>
        <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.pic}
            </span>
            <span>{props.name}</span>
        </dt>
        <dd>{props.desc}</dd>
    </div>
  )
}

export default Entry;

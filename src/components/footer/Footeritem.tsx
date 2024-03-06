interface text {
  text: string;
}
const Footeritem = (props: text) => {
  return <li className="footer-item">{props.text}</li>;
};

export default Footeritem;

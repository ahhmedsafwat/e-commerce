interface navLink {
  link: string;
  className: string;
}
const Navitems = (props: navLink) => {
  return <a className={props.className}>{props.link}</a>;
};

export default Navitems;

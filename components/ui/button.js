import Link from 'next/link';
import classes from './button.module.css';

export default function Button(props){
  return (props.link)
    ? ButtonWithLink(props)
    : ButtonWithoutLink(props);
}

const ButtonWithLink = (props) => (
  <Link href={props.link}>
    <a className={classes.btn}>
      {props.children}
    </a>
  </Link>
)

const ButtonWithoutLink = (props) => (
  <button className={classes.btn} onClick={props.onClick}>
    {props.children}
  </button>
);

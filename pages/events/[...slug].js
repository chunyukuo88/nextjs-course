import {useRouter} from "next/router";

export default function SpecificEvent(){
  const route = useRouter();

  return (
    <div>
      <h1>
        A big old slug.
      </h1>
      <div>{route.pathname}</div>
    </div>
  )
}
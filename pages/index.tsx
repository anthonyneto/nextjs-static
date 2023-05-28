import Head from "next/head";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import withApollo from "@/lib/withApollo";
import { CHARACTERS_QUERY } from "../graphql/queries";

function Home() {
  const { data } = useQuery(CHARACTERS_QUERY);

  return <div>{JSON.stringify(data)}</div>;

}

export default withApollo(Home);

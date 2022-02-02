import { GetServerSideProps } from "next";
import styles from './post.module.scss'

interface PostProps {
 foo: string;
}


export default function Post({ foo }: PostProps) {
  const name: string = "Daniel"

  return (
    <>
      <h1>{name}</h1>
      <h2>{name === 'Marcio' ? "Marcio" : "Não é Marcio"}</h2>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  return {
    props: {
      foo: 'bar'
    }
  }
}
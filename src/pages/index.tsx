import { GetStaticProps } from 'next'

type HomeProps = {
  episodes: Array<{
    id: String;
    titulo: String;
    members: String;
  }>
}

export default function Home(props: HomeProps) {
  return (
   <div>
     <h1>Index</h1>
     <p>{JSON.stringify(props.episodes)}</p>
   </div>
  )

}
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()


  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}

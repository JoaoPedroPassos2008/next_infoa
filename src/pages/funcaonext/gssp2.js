import { Container } from "react-bootstrap"
export async function getServerSideProps() {
    return { props: { repo:{"var1":"Info A","var2":"FW1"}} }//var3 = ifms
}
export default function Gssp2({ repo }) {
  return (
    <>
         <Container className="text-center">
            <h1>Server Side Props - 2</h1>
            {Array.isArray(repo) ? "sim" : "não"}
            {Object.entries(repo).map(([key,value]) => (
                <p>{key}: {value}</p>
            ))}
    </Container>
    </>
  )
}
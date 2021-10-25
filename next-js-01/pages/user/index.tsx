import Layout from "../../component/Layout/layout";


interface UsersProps {
  dataUsers: Array<any>;
}

export default function index(props : UsersProps) {
  const {dataUsers } = props;
  console.log(dataUsers);
  return (
    <>
      <Layout pageTitle="User Page">
        <h1>Data User</h1>
        {dataUsers.map((user) => (
          <p key={user.id}> {user.name}</p>
      ))}
      </Layout>
    </>
  );
}

export async function getStaticProps (){
  const res = await fetch ('https://jsonplaceholder.typicode.com/users')
  const dataUsers = await res.json();
  return {
    props :{
      dataUsers
    }
  }
}

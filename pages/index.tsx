import Counter from "../src/Counter";
import MyForm from "../src/MyForm";

const Home = () => {

  const onSubmit = (form:{name: string, description: string}) => {
    console.log(form);
  }

  // MyForm에 onSubmit을 props로 줘야 한다.

  return (
    <>
      <Counter/>
      <MyForm onSubmit={onSubmit}/>
    </>
  )
}

export default Home;
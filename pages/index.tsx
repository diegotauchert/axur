import { styled } from 'styled-components'
import WrapperContent from '../core/components/widgets/WrapperContent';
import Footer from '../core/components/layout/Footer';
import Header from '../core/components/layout/Header';
import AddForm from '../core/components/widgets/AddForm';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function Home() {
    const baseURL = process.env.NEXT_PUBLIC_URL_API;

    const postData = async () => {
      const data = {"keyword": "manual"};

      const response = await fetch(`${baseURL}/crawl`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      return response.json();
    }
    
  return (
    <WrapperContent>
      <Header />
      <StyledMain>
        <AddForm />
      </StyledMain>
      <Footer />
    </WrapperContent>
  )
}

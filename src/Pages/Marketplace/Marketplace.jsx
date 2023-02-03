import { MarketData } from "../../Assets/Data/MarketData";
import Cards from "../../Component/Cards/Cards";
import Layout from "../../Component/Layout/Layout";
import Navbar from "../../Component/Navbar/Navbar";
import { MarketplaceContainer, MarketplaceWrapper } from "./Marketplace.styled";

const Marketplace = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <MarketplaceContainer>
          <MarketplaceWrapper>
            {MarketData?.map((item) => (
              <Cards
                key={item.id}
                image={item.image}
                title={item.title}
                type={item.type}
                price={item.price}
              />
            ))}
          </MarketplaceWrapper>
        </MarketplaceContainer>
      </Layout>
    </>
  );
};

export default Marketplace;

import { NewsCards, ProductsList } from "../../Assets/Data/NewsCards";
import Cards from "../Cards/Cards";
import QuickAccess from "../QuickAccess/QuickAccess";
import QuickNotify from "../QuickNotify/QuickNotify";
import {
  MainContainer,
  NewsCardContainer,
  NewsContainerHeading,
} from "./Main.styled";

const Main = () => {
  return (
    <MainContainer>
      <QuickAccess />
      <QuickNotify />
      <NewsCardContainer>
        <NewsContainerHeading>
          <p>News</p>
          <p style={{ cursor: "pointer", fontWeight: "400", "fontSize":"13px" }}>More</p>
        </NewsContainerHeading>
        {NewsCards?.map((news) => (
          <Cards
            key={news.id}
            image={news.image}
            title={news.title}
            desc={news.desc}
            type={news.type}
          />
        ))}
      </NewsCardContainer>

      <NewsCardContainer>
        <NewsContainerHeading>
          <p>Marketplace</p>
          <p style={{ cursor: "pointer", fontWeight: "400", "fontSize":"13px" }}>More</p>
        </NewsContainerHeading>
        {ProductsList?.map((item) => (
          <Cards
            key={item.id}
            image={item.image}
            title={item.title}
            desc={item.desc}
            price={item.price}
            type={item.type}
          />
        ))}
      </NewsCardContainer>
    </MainContainer>
  );
};

export default Main;

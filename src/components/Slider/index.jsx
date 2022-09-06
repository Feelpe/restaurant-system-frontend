import { Carousel } from 'react-responsive-carousel';
import { Image, Caption } from './styles';

export const Slider = (props) => {
  return (
    <Carousel>
      {props.data.map((item) => (
        <Carousel.Item key={item.alt}>
          <Image src={item.img} alt={item.alt} />
          <Caption>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

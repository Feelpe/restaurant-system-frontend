import { Carousel } from 'react-bootstrap';

import { Image, Caption, Item } from './styles';

interface Photos {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
}

interface SliderProps {
  photos: Photos[];
}

export const Slider = ({ photos }: SliderProps) => {
  return (
    <Carousel>
      {photos.data.map((item) => (
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

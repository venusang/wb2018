// import Vue from 'vue';
import { shallow } from 'vue-test-utils';
import Carousel from '@/components/Carousel';

describe('Carousel.vue', () => {
  const json = {
    photos: [{
      imageUrl: '01.jpg',
      alt: 'short description',
      description: 'Some text goes here',
    }, {
      imageUrl: '02.jpg',
      alt: 'short description',
      description: 'some text goes here',
    }],
  };

  const wrapper = shallow(Carousel, {
    propsData: { photos: json.photos },
  });
  it('renders the carousel', () => {
    expect(wrapper.find('div.carousel').exists());
  });
  it('renders the thumbnail image', () => {
    expect(wrapper.find('.thumbnail__image').exists());
  });
  it('renders the thumbnail description', () => {
    expect(wrapper.find('.thumbnail__description').exists());
  });
  it('renders the previous button', () => {
    expect(wrapper.find('.owl-prev').exists());
  });
  it('renders the next button', () => {
    expect(wrapper.find('.owl-next').exists());
  });
  it('renders the carousel navigation dots', () => {
    expect(wrapper.find('.owl-dots').exists());
  });
});

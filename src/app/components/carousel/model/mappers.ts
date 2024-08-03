import { CarouselImage, CarouselItem, CarouselItemIndicator } from './models';

export function mapToImagesList(carouselItems: CarouselItem[]): CarouselImage[] {
    return carouselItems.map(item => ({ imageUrl: item.imageUrl }));
}

export function mapToCarouselItemIndicatorsList(carouselItems: CarouselItem[]): CarouselItemIndicator[] {
    return carouselItems.map(item => ({ title: item.title, description: item.description }));
}
import { CarouselItem, CarouselImage, CarouselItemIndicator } from './models'

export function mapToImagesList(carouselItems: CarouselItem[]): CarouselImage[] {
    return carouselItems.map(item => ({ imageUrl: item.imageUrl, onClick: item.onClick }));
}

export function mapToCarouselItemIndicatorsList(carouselItems: CarouselItem[]): CarouselItemIndicator[] {
    return carouselItems.map(item => ({ title: item.title }));
}
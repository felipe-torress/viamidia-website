export interface CarouselItem {
    imageUrl: string;
    title: string;
    onClick: () => void;
}

export interface CarouselImage {
    imageUrl: string;
    onClick: () => void;
}

export interface CarouselItemIndicator {
    title: string
}

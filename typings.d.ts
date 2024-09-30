declare module '*.svg' {
    import { FC, SVGProps } from 'react'
    const content: FC<SVGProps<SVGElement>>
    export default content
}

declare module '*.svg?url' {
    const content: any
    export default content
}

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export = classes; // Allow default export
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
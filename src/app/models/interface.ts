export interface Map {
    id: string;
    title: string;
    url: string;
}

export interface PointData {
    points: Point[];
}

export interface Point {
    position: Position;
    type: string;
    title: string;
    address?: string;
    url?: string;
}

export interface Position {
    lat: number;
    lng: number;
}

import EntityBase from './EntityBase';

export default interface IPhotos extends EntityBase{
    albumId: number,
    title: string,
    url: string
    thumbnailUrl: string
}
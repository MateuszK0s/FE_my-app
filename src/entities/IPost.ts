import EntityBase from './EntityBase';

export default interface IPost extends EntityBase{
    userId: number,
    title: string,
    body: string
}
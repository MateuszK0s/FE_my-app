import EntityBase from './EntityBase';
import IAddress from './IAddress';
import ICompany from './ICompany';

export default interface IUser extends EntityBase{
    name: string
    username: string
    email: string
    addresses: IAddress
    phone: string
    website: string
    company: ICompany
}
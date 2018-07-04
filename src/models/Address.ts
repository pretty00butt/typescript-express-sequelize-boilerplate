import {
    Table,
    DataType,
    Column,
    Model,
    Comment,
    AllowNull,
    HasMany
} from "sequelize-typescript";
import Reservation from "./Reservation";

@Table({
    tableName: "Address"
})
export default class Address extends Model<Address> {
    @Comment("Name")
    @Column(DataType.STRING(32))
    name: string;

    @Comment("Phone Number")
    @Column(DataType.STRING(14))
    phoneNumber: string;

    @Comment("Shorten Key")
    @Column(DataType.STRING(250))
    address: string;

    @AllowNull(false)
    @Comment("Goods Name")
    @Column(DataType.STRING(250))
    addressDetail: string;

    @Comment("Post Number")
    @Column(DataType.STRING(20))
    postNumber: string;

    @Comment("Zone Code")
    @Column(DataType.STRING(20))
    zoneCode: string;

    @HasMany(() => Reservation)
    reservations: Reservation[];
}

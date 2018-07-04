import {
    Table,
    Default,
    DataType,
    Column,
    Model,
    Comment,
    ForeignKey,
    BelongsTo,
    AllowNull
} from "sequelize-typescript";
import Address from "./Address";
import Promotion from "./Promotion";

// @DefaultScope({
//     where: {
//         deleted: false
//     },
//     include: [
//         {
//             model: () => User,
//             as: "host",
//             attributes: ["id", "username", "email"]
//         },
//         {
//             model: () => Place
//         }
//     ]
// })
@Table({
    tableName: "Reservation"
})
export default class Reservation extends Model<Reservation> {
    @Comment("Shorten Key")
    @Column(DataType.STRING(8))
    shortenKey: string;

    @Comment("Shorten Key")
    @Column(DataType.STRING(56))
    shortenUrl: string;

    @Comment("Shorten Key")
    @Column(DataType.STRING(56))
    accountId: string;

    @AllowNull(false)
    @Comment("Goods Name")
    @Column(DataType.STRING(200))
    goodsName: string;

    @Comment("Reservation Number")
    @Column(DataType.STRING(16))
    reservationNumber: string;

    @AllowNull(false)
    @Comment("Price")
    @Column(DataType.INTEGER(11))
    price: number;

    @AllowNull(false)
    @Comment("Category")
    @Column(DataType.STRING(100))
    category: string;

    @Comment("memo")
    @Column(DataType.STRING(300))
    memo: string;

    @AllowNull(false)
    @Comment("payment")
    @Column(DataType.STRING(10))
    payment: string;

    @AllowNull(false)
    @Comment("status")
    @Column(DataType.STRING(20))
    status: string;

    @Comment("Tracking Update Date")
    @Column(DataType.DATE)
    trackingUpdatedAt: Date;

    @Comment("Store Name")
    @Column(DataType.STRING(50))
    storeName: string;

    @Comment("Tracking Number")
    @Column(DataType.STRING(255))
    trackingNumber: string;

    @Comment("Delivery Company Code")
    @Column(DataType.INTEGER(11))
    deliveryCompanyCode: number;

    @AllowNull(false)
    @Default(true)
    @Comment("Enabled")
    @Column(DataType.BOOLEAN)
    enabled: boolean;

    @AllowNull(false)
    @ForeignKey(() => Address)
    @Column
    senderAddressId: number;

    @BelongsTo(() => Address)
    senderAddress: Address;

    @AllowNull(false)
    @ForeignKey(() => Address)
    @Column
    receiverAddressId: number;

    @BelongsTo(() => Address)
    receiverAddress: Address;

    @ForeignKey(() => Promotion)
    @Column
    promotionId: number;

    @BelongsTo(() => Promotion)
    promotion: Promotion;
}

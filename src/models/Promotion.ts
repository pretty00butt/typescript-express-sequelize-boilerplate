import {
    Table,
    Default,
    DataType,
    Column,
    Model,
    Comment,
    AllowNull,
    HasMany
} from "sequelize-typescript";
import Reservation from "./Reservation";

@Table({
    tableName: "Promotion"
})
export default class Promotion extends Model<Promotion> {
    @AllowNull(false)
    @Comment("Code")
    @Column(DataType.STRING(20))
    code: string;

    @Comment("Campaign")
    @Column(DataType.STRING(20))
    campaign: string;

    @Comment("Description")
    @Column(DataType.STRING(255))
    description: string;

    @AllowNull(false)
    @Default(0)
    @Comment("Company Code")
    @Column(DataType.INTEGER(11))
    companyCode: number;

    @Default(true)
    @Comment("Enabled")
    @Column(DataType.BOOLEAN)
    enabled: boolean;

    @Comment("Enabled")
    @Column(DataType.DATE)
    expireDate: Date;

    @HasMany(() => Reservation)
    reservations: Reservation[];
}

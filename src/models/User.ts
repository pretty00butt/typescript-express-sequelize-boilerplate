import {
    Table,
    Column,
    Unique,
    Default,
    AllowNull,
    Comment,
    Model,
    DefaultScope,
    Length
} from "sequelize-typescript";

@DefaultScope({
    attributes: {
        exclude: ["password", "deleted"]
    }
})
@Table({
    timestamps: true
})
export default class User extends Model<User> {
    @Unique
    @AllowNull(false)
    @Comment("Email Address to Login")
    @Column
    email: string;

    @AllowNull(false)
    @Comment("Mobile Number")
    @Column
    mobile: string;

    @AllowNull(false)
    @Comment("Password")
    @Column
    password: string;

    @AllowNull(false)
    @Default(false)
    @Column
    deleted: boolean;
}

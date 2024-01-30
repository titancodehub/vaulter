import { DataTypes } from 'sequelize'

export default {
  name: '00-add-password-vaults-table',
  async up({ context: queryInterface }): Promise<void> {
    await queryInterface.createTable('password_vaults', {
      id: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      username: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      password: { type: DataTypes.TEXT, allowNull: false },
      host: { type: DataTypes.TEXT, allowNull: false },
      created: { type: DataTypes.TIME, allowNull: false, defaultValue: DataTypes.NOW },
      updated: { type: DataTypes.TIME, allowNull: false, defaultValue: DataTypes.NOW }
    })
  },

  async down(): Promise<void> {
    console.log('Not Implemented')
  }
}

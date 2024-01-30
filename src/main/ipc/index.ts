import { PasswordVault } from '@main/model/password_vault'
import { ServiceProvider } from '@main/services'
import { IpcMain } from 'electron'

export function initIPCRoute(ipc: IpcMain, serviceProvider: ServiceProvider): void {
  ipc.handle('get-vaults', async (): Promise<PasswordVault[]> => {
    return await serviceProvider.vault_service.getVaults()
  })
}
